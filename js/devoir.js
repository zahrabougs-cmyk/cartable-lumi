// ===== « Exercices du prof » : devoirs et examens dans le même format que l'école =====
// Comme l'application du prof : sections 1-2-3-4, compteur de points, bouton « Vérifier » sous chaque question,
// réponses en phrase complète. En plus, pour une élève dyslexique : tout peut être lu à voix haute, on tape
// sur les mots au lieu de les écrire quand c'est possible, petites fautes d'orthographe acceptées,
// et après une erreur Lumi explique la règle et montre la bonne réponse.
//
// Format (dans une leçon : d:{...}) :
// {title, sub, sec:[{t:"consigne", fr:"aide en français", ar:"aide en arabe", help:"rappel de cours", text:"texte à lire", it:[ … ]}]}
// Types de questions :
//  {k:"mcq", q, ch:[bonne, fausse…], why, pts}                       QCM (la bonne réponse est écrite en premier)
//  {k:"tf",  q, a:true|false, why, pts}                               vrai ou faux
//  {k:"write", q, keys:[["13","thirteen"],["ben","he"]], model, why, full, pts}   réponse écrite (chaque groupe doit apparaître)
//  {k:"fill", q, text:"… [1] … [2] …", bank:[mots], ans:["mot1",["mot2","variante"]], why, pts}   texte à trous
//  {k:"sort", q, box:["boîte A","boîte B"], items:[["mot",0],["mot",1]], why, pts}              classer
//  {k:"spot", q, text:"phrase avec [les mots] à trouver", why, pts}                              relever (toucher les mots)
const DV_UI={fr:{check:"✔ Vérifier",score:"Points",sec:"Section",next:"Section suivante →",prev:"← Section précédente",
  listen:"🔊 Écouter",text:"🔊 Écouter le texte",hint:"💡 Indice",dict:"🎤 Dicter",again:"↻ Recommencer",bank:"Touche un mot, puis touche le trou.",
  sortH:"Touche un mot, puis touche la bonne boîte.",spotH:"Touche les mots à relever.",typeH:"Écris ta phrase ici…",
  good:["Bravo !","Excellent !","C'est juste !","Super !"],model:"Réponse modèle :",full:"Bonne idée ! Mais écris une phrase complète, comme :",
  bad:"Ce n'est pas encore ça. Regarde :",end:"Exercices terminés !",onTwenty:"sur 20",review:"À revoir :",partial:"Presque ! Regarde les corrections en couleur."}};
function dvN(t){return String(t||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’`´]/g,"'")
  .replace(/n't/g," not").replace(/'s\b/g," is").replace(/'re\b/g," are").replace(/'m\b/g," am").replace(/'ve\b/g," have")
  .replace(/[^a-z0-9'؀-ۿ]+/g," ").replace(/\s+/g," ").trim()}
function dvLev(a,b){if(Math.abs(a.length-b.length)>2)return 9;const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;
  for(let j=1;j<=b.length;j++){const t=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return d[b.length]}
// une clé est trouvée si elle est dans la phrase, ou si un mot ressemble à la clé (1 faute, 2 pour les mots longs)
function dvHas(ans,key){const A=" "+dvN(ans)+" ",k=dvN(key);if(!k)return true;if(A.includes(" "+k+" "))return true;
  const kw=k.split(" "),aw=A.trim().split(" ");if(kw.length===1&&k.length>=4)return aw.some(w=>dvLev(w,k)<=(k.length>=7?2:1));
  if(kw.length>1){for(let i=0;i+kw.length<=aw.length;i++){if(kw.every((x,j)=>x===aw[i+j]||(x.length>=4&&dvLev(x,aw[i+j])<=1)))return true}}return false}
function dvScoreWrite(it,ans){const groups=it.keys||[];const okG=groups.filter(g=>[].concat(g).some(k=>dvHas(ans,k))).length;
  const nW=dvN(ans).split(" ").filter(Boolean).length;const allOk=okG===groups.length;
  if(allOk&&(it.full===false||nW>=(it.minW||3)))return {r:1};if(allOk)return {r:.5,short:true};return {r:okG/groups.length>=.5&&groups.length>1?.25:0}}
const dvPts=it=>it.pts||1;
const dvTotal=d=>d.sec.reduce((a,s)=>a+s.it.reduce((b,i)=>b+dvPts(i),0),0);
const dvShuffle=(a,seed)=>{const r=a.map((x,i)=>[x,(seed*9301+i*49297)%233280]);return r.sort((x,y)=>x[1]-y[1]).map(x=>x[0])};

function mountDevoir(P,s,L,key){
  const d=L.devoir,lang=s.lang==="en"?"en":"fr",U=DV_UI.fr,total=dvTotal(d);
  let sec=0,score=0;const st={};// st[id]={done,pts}
  const say=(t,l=lang,el)=>speakSeq([{text:t,el}],l);
  const fb=(box,ok,html,speak)=>{box.className="dvfb "+(ok===true?"ok":ok===false?"no":"mid");box.innerHTML=html;box.hidden=false;
    if(speak)speakSeq([].concat(typeof speak==="string"?[[speak,"fr"]]:speak).filter(x=>x&&x[0]).map(([t,l])=>({text:t,lang:l||"fr"})),"fr")};
  const doneAll=()=>Object.keys(st).length===d.sec.reduce((a,x)=>a+x.it.length,0)&&Object.values(st).every(x=>x.done);
  const addPts=(id,p,max)=>{st[id]={done:true,pts:p};score=Object.values(st).reduce((a,x)=>a+x.pts,0);
    $("#dvs").textContent=fmt(score);$("#dvbar").style.width=Math.round(100*score/total)+"%";
    if(p>=max){chime();if(!st[id].retry)addStars(1)}else buzz();
    drawSteps();if(doneAll())setTimeout(finish,900)};
  const fmt=x=>Math.round(x*100)/100;
  P.innerHTML=`<div class="dv"><div class="dvhead"><div class="dvtitle"><b>📝 ${esc(d.title||"Exercices du prof")}</b><small>${esc(d.sub||"Comme en classe : lis, réfléchis, puis vérifie.")}</small></div>
    <div class="dvtrack"><span>${U.score}</span><b><span id="dvs">0</span> / ${total}</b></div></div>
    <div class="dvprog"><span id="dvbar"></span></div><div class="dvsteps" id="dvst"></div><div id="dvsec"></div>
    <div class="ctrl dvnav"><button class="ghost" id="dvp">${U.prev}</button><button class="play" id="dvn" style="--c:${s.c}">${U.next}</button></div></div>`;
  const drawSteps=()=>{$("#dvst").innerHTML=d.sec.map((x,i)=>{const its=x.it.map((_,j)=>st[i+"-"+j]);const fin=its.every(Boolean);
    return `<button class="dvstep${i===sec?" on":""}${fin?" fin":""}" data-sec="${i}" aria-label="${U.sec} ${i+1}">${fin?"✓":i+1}</button>`}).join('<i class="dvline"></i>');
    $("#dvst").querySelectorAll("[data-sec]").forEach(b=>b.onclick=()=>{sec=+b.dataset.sec;draw()})};
  function draw(){stopSpeak();const S1=d.sec[sec],box=$("#dvsec");
    box.innerHTML=`<section class="dvs"><h2>${U.sec} ${sec+1} : ${esc(S1.t)}</h2>
     ${S1.fr&&lang!=="fr"?`<p class="dvhelp">🇫🇷 ${esc(S1.fr)}</p>`:""}${S1.ar?`<p class="dvhelp" dir="rtl">${esc(S1.ar)}</p>`:""}
     ${S1.help?`<details class="dvrule" open><summary>📘 Rappel de la leçon</summary><div class="dvrt">${readable(S1.help,"fr")}</div><button class="ghost dvrr">🔊</button></details>`:""}
     ${S1.voc?`<div class="dvvoc">${S1.voc.map((w,i)=>`<button class="dvv" data-v="${i}"><span class="e">${w[2]||""}</span><b>${esc(w[0])}</b><span>${esc(w[1])}</span>${w[3]?`<span class="a" dir="rtl">${esc(w[3])}</span>`:""}</button>`).join("")}</div>`:""}
     ${S1.text?`<div class="dvtext"><div class="dvtt">${S1.textT?`<b>${esc(S1.textT)}</b>`:""}<button class="play dvread" style="--c:${s.c}">${U.text}</button></div><div class="dvtb">${S1.text.split(/\n+/).map(p=>`<p>${readable(p,lang)}</p>`).join("")}</div></div>`:""}
     <div class="dvitems">${S1.it.map((it,j)=>itemHTML(it,sec+"-"+j,j)).join("")}</div></section>`;
    if(S1.help){box.querySelector(".dvrr").onclick=()=>readEl(box.querySelector(".dvrt"),"fr")}
    if(S1.text)box.querySelector(".dvread").onclick=()=>readEl(box.querySelector(".dvtb"),lang);
    box.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>{const w=S1.voc[+b.dataset.v];speakSeq([{text:w[0],lang},{text:w[1],lang:"fr"}],lang)});
    S1.it.forEach((it,j)=>mountItem(it,sec+"-"+j,box.querySelector(`[data-it="${sec}-${j}"]`)));
    $("#dvp").disabled=sec===0;$("#dvn").textContent=sec===d.sec.length-1?"🏁 "+(lang==="en"?"Finish":"Terminer"):U.next;drawSteps();
    box.scrollIntoView({behavior:"smooth",block:"start"});
    speakSeq([{text:S1.t,lang},S1.fr&&lang!=="fr"?{text:S1.fr,lang:"fr"}:null].filter(Boolean),lang)}
  function itemHTML(it,id,j){const n=j+1,q=it.q?`<div class="dvq"><span class="dvn">${n}</span><span>${esc(it.q)}${it.qfr?`<small class="dvqfr">🇫🇷 ${esc(it.qfr)}</small>`:""}</span><button class="ghost dvsay" aria-label="${U.listen}">🔊</button><small class="dvpt">${dvPts(it)} pt${dvPts(it)>1?"s":""}</small></div>`:"";
    let body="";
    if(it.k==="mcq"){const ch=dvShuffle(it.ch.map((c,i)=>[c,i]),kHash(it.q));body=`<div class="dvch">${ch.map(([c,i],x)=>`<button class="dvc" data-i="${i}">${"abcd"[x]}. ${esc(c)}</button>`).join("")}</div>`}
    else if(it.k==="tf")body=`<div class="dvch dvtf">${(lang==="en"?["True","False"]:["Vrai","Faux"]).map((c,i)=>`<button class="dvc" data-i="${i}">${i?"❌":"✅"} ${c}</button>`).join("")}</div>`;
    else if(it.k==="write")body=`<div class="dvw"><textarea rows="2" placeholder="${it.ph||U.typeH}" spellcheck="false" autocapitalize="sentences"></textarea>
      <div class="ctrl">${(window.SpeechRecognition||window.webkitSpeechRecognition)?`<button class="ghost dvmic">${U.dict}</button>`:""}${it.hint?`<button class="ghost dvhint">${U.hint}</button>`:""}<button class="play dvok" style="--c:#16a34a">${U.check}</button></div><p class="dvhintt" hidden></p></div>`;
    else if(it.k==="fill"){let k=0;const tx=esc(it.text).replace(/\[(\d+)\]/g,()=>`<button class="dvgap" data-g="${k++}">……</button>`);
      body=`<p class="dvsmall">${U.bank}</p><div class="dvbank">${dvShuffle(it.bank.map((w,i)=>[w,i]),kHash(it.text)).map(([w,i])=>`<button class="dvchip" data-w="${esc(w)}">${esc(w)}</button>`).join("")}</div><p class="dvfill">${tx}</p><div class="ctrl"><button class="play dvok" style="--c:#16a34a">${U.check}</button></div>`}
    else if(it.k==="sort")body=`<p class="dvsmall">${U.sortH}</p><div class="dvbank">${dvShuffle(it.items.map((x,i)=>[x[0],i]),kHash(it.q||"s")).map(([w,i])=>`<button class="dvchip" data-i="${i}">${esc(w)}</button>`).join("")}</div>
      <div class="dvboxes">${it.box.map((b,i)=>`<div class="dvbox" data-b="${i}"><b>${esc(b)}</b><div class="dvin"></div></div>`).join("")}</div><div class="ctrl"><button class="play dvok" style="--c:#16a34a">${U.check}</button></div>`;
    else if(it.k==="spot"){let g=0;const parts=[];it.text.replace(/\[([^\]]+)\]|([^\s\[\]]+)/g,(m,a,b)=>{if(a)parts.push(`<button class="dvwd" data-g="${g++}" data-a="1">${esc(a)}</button>`);else parts.push(`<button class="dvwd" data-a="0">${esc(b)}</button>`);return m});
      body=`<p class="dvsmall">${U.spotH}</p><p class="dvspot">${parts.join(" ")}</p><div class="ctrl"><button class="play dvok" style="--c:#16a34a">${U.check}</button></div>`}
    return `<div class="dvit" data-it="${id}">${q}${body}<div class="dvfb" hidden></div></div>`}
  function mountItem(it,id,el){const fbx=el.querySelector(".dvfb"),max=dvPts(it);const S0=st[id];
    const sayB=el.querySelector(".dvsay");if(sayB)sayB.onclick=()=>speakSeq([{text:it.q,lang},...(it.k==="mcq"?it.ch.map(c=>({text:c,lang})):[]),it.qfr?{text:it.qfr,lang:"fr"}:null].filter(Boolean),lang);
    const why=it.why?`<div class="dvwhy">📘 ${esc(it.why)}</div>`:"";
    const lock=()=>el.classList.add("done");
    if(S0){lock();fb(fbx,S0.pts>=max?true:S0.pts>0?null:false,S0.pts>=max?"✔ "+esc(U.good[0]):"✔ "+fmt(S0.pts)+" / "+max+why)}
    if(it.k==="mcq"||it.k==="tf"){const good=it.k==="tf"?(it.a?0:1):0;
      el.querySelectorAll(".dvc").forEach(b=>b.onclick=()=>{if(st[id])return;const ok=+b.dataset.i===good;b.classList.add(ok?"good":"bad");
        if(!ok){el.querySelector(`.dvc[data-i="${good}"]`).classList.add("good")}lock();
        const right=it.k==="tf"?(it.a?(lang==="en"?"True":"Vrai"):(lang==="en"?"False":"Faux")):it.ch[0];
        const g=U.good[Math.floor(Math.random()*4)];fb(fbx,ok,ok?`✔ ${g}${why}`:`${U.bad} <b>${esc(right)}</b>${why}`,ok?g:[["La bonne réponse est :","fr"],[right,lang],[it.why,"fr"]]);addPts(id,ok?max:0,max)})}
    if(it.k==="write"){const ta=el.querySelector("textarea");if(S0)ta.value=S0.ans||"";
      const h=el.querySelector(".dvhint");if(h)h.onclick=()=>{const p=el.querySelector(".dvhintt");p.hidden=false;p.textContent="💡 "+it.hint;say(it.hint,lang)};
      const mic=el.querySelector(".dvmic");if(mic)mic.onclick=()=>{const R=window.SpeechRecognition||window.webkitSpeechRecognition;try{const r=new R();r.lang=lang==="en"?"en-GB":"fr-FR";r.onresult=e=>{ta.value=e.results[0][0].transcript;ta.focus()};r.onend=()=>mic.classList.remove("rec");mic.classList.add("rec");r.start()}catch(e){toast("Le micro ne marche pas ici.")}};
      el.querySelector(".dvok").onclick=()=>{if(st[id])return;const v=ta.value.trim();if(!v){ta.focus();toast(lang==="en"?"Write your answer first.":"Écris d'abord ta réponse.");return}
        const r=dvScoreWrite(it,v);lock();ta.readOnly=true;
        const g=U.good[Math.floor(Math.random()*4)];if(r.r===1)fb(fbx,true,`✔ ${g}${it.model?`<div class="dvmodel">${U.model} <b>${esc(it.model)}</b></div>`:""}`,g);
        else if(r.short)fb(fbx,null,`${U.full} <b>${esc(it.model)}</b>`,[[U.full,"fr"],[it.model,lang]]);
        else fb(fbx,false,`${U.model} <b>${esc(it.model)}</b>${why}`,[[U.model,"fr"],[it.model,lang],[it.why,"fr"]]);
        addPts(id,max*r.r,max);st[id].ans=v}}
    if(it.k==="fill"){let sel=null,selGap=null;const gaps=[...el.querySelectorAll(".dvgap")],chips=[...el.querySelectorAll(".dvchip")];
      const put=(g,c)=>{if(g.dataset.c){const old=chips[+g.dataset.c];old.classList.remove("used")}g.textContent=c.dataset.w;g.dataset.c=chips.indexOf(c);c.classList.add("used");g.classList.add("filled");sel=null;selGap=null;chips.forEach(x=>x.classList.remove("sel"));gaps.forEach(x=>x.classList.remove("sel"))};
      chips.forEach(c=>c.onclick=()=>{if(st[id])return;say(c.dataset.w);if(selGap){put(selGap,c);return}chips.forEach(x=>x.classList.remove("sel"));sel=c;c.classList.add("sel")});
      gaps.forEach(g=>g.onclick=()=>{if(st[id])return;if(sel){put(g,sel);return}if(g.dataset.c){chips[+g.dataset.c].classList.remove("used");delete g.dataset.c;g.textContent="……";g.classList.remove("filled");return}gaps.forEach(x=>x.classList.remove("sel"));selGap=g;g.classList.add("sel")});
      el.querySelector(".dvok").onclick=()=>{if(st[id])return;if(gaps.some(g=>!g.dataset.c)){toast("Complète tous les trous.");return}let n=0;
        gaps.forEach((g,i)=>{const ok=[].concat(it.ans[i]).map(dvN).includes(dvN(g.textContent));if(ok)n++;g.classList.add(ok?"good":"bad");if(!ok)g.title=[].concat(it.ans[i])[0];if(!ok)g.innerHTML=`<s>${esc(g.textContent)}</s> ${esc([].concat(it.ans[i])[0])}`});
        lock();const p=max*n/gaps.length;fb(fbx,n===gaps.length?true:n?null:false,n===gaps.length?`✔ ${U.good[2]}${why}`:`${U.partial}${why}`,n===gaps.length?U.good[2]:[[U.partial],[it.why]]);addPts(id,p,max)}}
    if(it.k==="sort"){let sel=null;const chips=[...el.querySelectorAll(".dvchip")],boxes=[...el.querySelectorAll(".dvbox")];
      const place=(c,bi)=>{boxes[bi].querySelector(".dvin").appendChild(c);c.dataset.b=bi;c.classList.remove("sel");sel=null};
      chips.forEach(c=>c.onclick=e=>{e.stopPropagation();if(st[id])return;if(sel&&sel!==c&&c.dataset.b!=null){place(sel,+c.dataset.b);return}
        say(c.textContent);chips.forEach(x=>x.classList.remove("sel"));sel=c;c.classList.add("sel")});
      boxes.forEach(b=>b.onclick=()=>{if(st[id]||!sel)return;place(sel,+b.dataset.b)});
      el.querySelector(".dvok").onclick=()=>{if(st[id])return;if(chips.some(c=>c.dataset.b==null)){toast("Range tous les mots dans une boîte.");return}let n=0;
        chips.forEach(c=>{const ok=+c.dataset.b===it.items[+c.dataset.i][1];if(ok)n++;c.classList.add(ok?"good":"bad");if(!ok){boxes[it.items[+c.dataset.i][1]].querySelector(".dvin").appendChild(c)}});
        lock();fb(fbx,n===chips.length?true:n?null:false,n===chips.length?`✔ ${U.good[3]}${why}`:`${U.partial} (${n}/${chips.length})${why}`,n===chips.length?U.good[3]:[[U.partial],[it.why]]);addPts(id,max*n/chips.length,max)}}
    if(it.k==="spot"){const ws=[...el.querySelectorAll(".dvwd")];ws.forEach(w=>w.onclick=()=>{if(st[id])return;w.classList.toggle("sel")});
      el.querySelector(".dvok").onclick=()=>{if(st[id])return;const need=ws.filter(w=>w.dataset.a==="1"),bad=ws.filter(w=>w.dataset.a==="0"&&w.classList.contains("sel"));
        const got=need.filter(w=>w.classList.contains("sel")).length;need.forEach(w=>w.classList.add(w.classList.contains("sel")?"good":it.need?"":"miss"));bad.forEach(w=>w.classList.add("bad"));
        const r=Math.max(0,Math.min(1,(got-bad.length)/(it.need||need.length)));lock();fb(fbx,r===1?true:r>0?null:false,r===1?`✔ ${U.good[0]}${why}`:`${U.partial}${why}`,r===1?U.good[0]:[[U.partial],[it.why]]);addPts(id,max*r,max)}}}
  function finish(){const n20=Math.round(score/total*20*2)/2;S.best[key]=Math.max(S.best[key]||0,n20);S.dev=S.dev||{};S.dev[key]=Math.max(S.dev[key]||0,score);save();
    const miss=[];d.sec.forEach((x,i)=>x.it.forEach((it,j)=>{const r=st[i+"-"+j];if(r&&r.pts<dvPts(it))miss.push(`${i+1}.${j+1} ${it.q||""}`)}));
    const box=document.createElement("div");box.className="exam-res dvend";box.innerHTML=`<div class="lumi-girl small">${emo("👧🏽","girl")}</div><div class="starsrow">${"★".repeat(starsFor(n20))||"☆"}</div><h2>${U.end}</h2>
      <div class="note">${fmt(score)} / ${total}</div><p>= ${n20} ${U.onTwenty}</p>${miss.length?`<p class="dvsmall"><b>${U.review}</b><br>${miss.slice(0,6).map(esc).join("<br>")}</p>`:""}
      <div class="ctrl" style="justify-content:center"><button class="play" style="--c:${s.c}">${U.again}</button></div>`;
    $("#dvsec").appendChild(box);box.querySelector("button").onclick=()=>mountDevoir(P,s,L,key);box.scrollIntoView({behavior:"smooth"});
    speakSeq([{text:n20>=14?"Bravo ! Tu as très bien travaillé.":"Bien. On revoit ensemble les questions difficiles, et tu vas progresser.",lang:"fr"},{text:`${fmt(score)} points sur ${total}.`,lang:"fr"}],"fr")}
  $("#dvp").onclick=()=>{if(sec>0){sec--;draw()}};
  $("#dvn").onclick=()=>{if(sec<d.sec.length-1){sec++;draw()}else if(!doneAll())toast("Il reste des questions à vérifier.");else finish()};
  draw();
}
