// ===== Français débutant (style Duolingo) =====
const ROOMS=[
 {n:"Le salon",ar:"الصالون",c:"#F0B48A",o:[["le canapé","🛋️","الأريكة"],["la télévision","📺","التلفاز"],["la lampe","💡","المصباح"],["la plante","🪴","النبتة"],["le tableau","🖼️","اللوحة"],["la fenêtre","🪟","النافذة"]]},
 {n:"La cuisine",ar:"المطبخ",c:"#8FD19E",o:[["la poêle","🍳","المقلاة"],["la tasse","☕","الفنجان"],["l'assiette","🍽️","الصحن"],["la fourchette","🍴","الشوكة"],["le balai","🧹","المكنسة"],["la chaise","🪑","الكرسي"]]},
 {n:"La chambre",ar:"غرفة النوم",c:"#9DB2EE",o:[["le lit","🛏️","السرير"],["la peluche","🧸","الدمية"],["le réveil","⏰","المنبه"],["le livre","📖","الكتاب"],["l'ordinateur","💻","الحاسوب"],["la porte","🚪","الباب"]]},
 {n:"La salle de bain",ar:"الحمام",c:"#86D3E0",o:[["la douche","🚿","الدوش"],["la baignoire","🛁","حوض الاستحمام"],["le savon","🧼","الصابون"],["la brosse à dents","🪥","فرشاة الأسنان"],["le miroir","🪞","المرآة"],["les toilettes","🚽","المرحاض"]]}
];
const SONW={
 on:[["le ballon","⚽","الكرة"],["le pont","🌉","الجسر"],["le mouton","🐑","الخروف"],["le bonbon","🍬","الحلوى"]],
 oi:[["l'oiseau","🐦","الطائر"],["le poisson","🐟","السمكة"],["l'étoile","⭐","النجمة"],["le roi","👑","الملك"]],
 ou:[["le loup","🐺","الذئب"],["la poule","🐔","الدجاجة"],["la bouche","👄","الفم"],["la roue","🛞","العجلة"]],
 an:[["l'éléphant","🐘","الفيل"],["la maman","👩","الأم"],["la dent","🦷","السن"],["le gant","🧤","القفاز"]],
 in:[["le lapin","🐰","الأرنب"],["le sapin","🌲","شجرة الصنوبر"],["la main","✋","اليد"],["le pain","🍞","الخبز"]],
 eu:[["le feu","🔥","النار"],["la fleur","🌸","الوردة"],["bleu","🔵","أزرق"],["deux","2️⃣","اثنان"]],
 ui:[["la nuit","🌙","الليل"],["la pluie","🌧️","المطر"],["huit","8️⃣","ثمانية"],["le fruit","🍎","الفاكهة"]],
 ch:[["le chat","🐱","القط"],["le cheval","🐴","الحصان"],["la chaussure","👟","الحذاء"],["le chocolat","🍫","الشوكولاتة"]]
};
const FLE=[
 {id:"sons",t:"Les sons",sub:"on, oi, ou, an, in…",ico:"🔤",c:"#F08A24",kind:"sons"},
 {id:"maison",t:"La maison",sub:"trouve les objets",ico:"🏠",c:"#2E9E62",kind:"maison"},
 {id:"couleurs",t:"Les couleurs",sub:"rouge, bleu, vert…",ico:"🎨",c:"#DB3F8D",kind:"vocab",words:[["rouge","🔴","أحمر"],["bleu","🔵","أزرق"],["vert","🟢","أخضر"],["jaune","🟡","أصفر"],["orange","🟠","برتقالي"],["noir","⚫","أسود"],["blanc","⚪","أبيض"],["violet","🟣","بنفسجي"],["marron","🟤","بني"]]},
 {id:"corps",t:"Mon corps",sub:"la tête, la main…",ico:"✋",c:"#2F7FE0",kind:"vocab",words:[["la tête","🙂","الرأس"],["la main","✋","اليد"],["le pied","🦶","القدم"],["l'œil","👁️","العين"],["l'oreille","👂","الأذن"],["le nez","👃","الأنف"],["la bouche","👄","الفم"],["la jambe","🦵","الساق"],["le bras","💪","الذراع"]]},
 {id:"ecole",t:"À l'école",sub:"le cahier, le stylo…",ico:"🎒",c:"#C99400",kind:"vocab",words:[["le cahier","📓","الدفتر"],["le livre","📖","الكتاب"],["le stylo","🖊️","القلم"],["le crayon","✏️","قلم الرصاص"],["la règle","📏","المسطرة"],["les ciseaux","✂️","المقص"],["le cartable","🎒","المحفظة"],["le professeur","🧑‍🏫","الأستاذ"],["l'école","🏫","المدرسة"]]},
 {id:"cote",t:"Gauche ou droite ?",sub:"bien se repérer",ico:"↔️",c:"#7B5CF0",kind:"cote"},
 {id:"temps",t:"Les jours et les mois",sub:"lundi, mardi…",ico:"📅",c:"#0D9488",kind:"temps"},
 {id:"parler",t:"Parler avec Lumi",sub:"petites conversations",ico:"💬",c:"#4C5BD4",kind:"parler"}
];
const JOURS=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const JOURS_AR=["الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد"];
const MOIS=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const pick=a=>a[Math.floor(Math.random()*a.length)];
const core=w=>w.replace(/^(le |la |les |l'|l’|un |une |des )/i,"");
const big=e=>emo(e,"emo");

// ----- reconnaissance vocale -----
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ًͯ-ْٰـ]/g,"").replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي").replace(/[^a-z0-9ء-ي ]/g," ").replace(/\b(le|la|les|l|un|une|des|c est|cest)\b/g," ").replace(/\s+/g," ").trim();
function lev(a,b){const m=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=m[0];m[0]=i;for(let j=1;j<=b.length;j++){const t=m[j];m[j]=Math.min(m[j]+1,m[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return m[b.length]}
function nearly(target,heard){const t=norm(target),h=norm(heard);if(!t||!h)return false;if(h.includes(t))return true;const ws=h.split(" ");const n=t.split(" ").length;let best=0;
  for(let i=0;i<ws.length;i++){const seg=ws.slice(i,i+n).join(" ");best=Math.max(best,1-lev(t,seg)/Math.max(t.length,seg.length))}return best>=.6}
function listen(lang,onRes,onErr){if(!SR){onErr("none");return null}stopSpeak();const r=new SR();r.lang=VL[lang]||"fr-FR";r.interimResults=false;r.maxAlternatives=3;
  r.onresult=e=>{const alts=[...e.results[0]].map(x=>x.transcript);onRes(alts)};r.onerror=e=>onErr(e.error);try{r.start()}catch(e){onErr("start")}return r}
// bloc « Répète » : micro + bouton j'ai répété
function repeatBlock(el,target,lang,done){
  el.innerHTML=`<div class="rep"><button class="mic" id="micb" aria-label="Parler">🎤</button><div class="rep-t"><b>Appuie sur le micro et dis :</b><br><span class="say-w">« ${esc(target)} »</span><div class="noteline" id="heard"></div><div class="tip" id="tip" hidden></div></div></div>
   <div class="ctrl"><button class="ghost" id="again">🔊 Réécouter</button><button class="ghost" id="selfok">✔ J'ai répété</button></div>`;
  let tries=0;
  $("#again",el).onclick=()=>sayOne(target,lang);
  $("#selfok",el).onclick=()=>done(true,tries);
  $("#micb",el).onclick=()=>{const b=$("#micb",el);b.classList.add("on");$("#heard",el).textContent="Je t'écoute…";
    listen(lang,alts=>{b.classList.remove("on");tries++;const ok=alts.some(a=>nearly(target,a));$("#heard",el).textContent="J'ai entendu : « "+alts[0]+" »";
      if(ok){done(true,tries)}else{buzz();$("#heard",el).textContent+=" · Presque ! Encore une fois.";sayOne(target,lang);aiTip(target,alts[0],$("#tip",el));if(tries>=2)$("#selfok",el).textContent="Continuer ▶"}},
     err=>{b.classList.remove("on");$("#heard",el).textContent=err==="none"?"Le micro ne marche pas sur ce navigateur : dis le mot à voix haute, puis appuie sur « J'ai répété ».":err==="not-allowed"?"Le micro n'est pas autorisé ici. Dis le mot à voix haute, puis appuie sur « J'ai répété ».":"Je n'ai rien entendu. Réessaie !"})};
}

// ----- accueil prénom -----
function onboard(){return `<section class="onb"><div class="lumi-girl hero">${emo("👧🏽","girl")}</div><h1>Bonjour ! Je suis Lumi.</h1><p>Je vais t'aider à apprendre tes leçons. Comment tu t'appelles ?</p>
  <form id="obf" class="onb-f"><input type="text" id="obn" maxlength="30" placeholder="Ton prénom" autocomplete="given-name" aria-label="Ton prénom"><button class="play" style="--c:#FF6F61" type="submit">C'est parti ▶</button></form>
  <button class="ghost" id="obs">🔊 Écouter</button></section>`}
function mountOnboard(){
  $("#obs").onclick=()=>sayOne("Bonjour ! Je suis Lumi. Je vais t'aider à apprendre tes leçons. Comment tu t'appelles ?","fr");
  $("#obf").onsubmit=e=>{e.preventDefault();const n=$("#obn").value.trim();if(!n){$("#obn").focus();return}S.name=n.charAt(0).toUpperCase()+n.slice(1);save();chime();route();sayOne(`Bienvenue ${S.name} ! Choisis ce que tu veux apprendre.`,"fr")};
}

// ----- série de jours -----
function day(d=new Date()){return d.toISOString().slice(0,10)}
function bumpStreak(){const t=day(),y=day(new Date(Date.now()-864e5));if(S.streak.last===t)return;S.streak.n=S.streak.last===y?S.streak.n+1:1;S.streak.last=t;save()}

// ----- chemin des unités -----
function flePath(){
  return `<a class="back" href="#accueil">← Accueil</a>
  <div class="fle-head"><h1>Mon français, pas à pas</h1><div class="fle-stats"><span>⚡ ${S.xp} XP</span><span>🔥 ${S.streak.n} jour${S.streak.n>1?"s":""}</span></div></div>
  <p style="color:var(--soft);margin-top:0">Une petite leçon par jour, ${esc(S.name)}. Tu écoutes, tu touches, tu répètes.</p>
  <div class="path">${FLE.map((u,i)=>`<a class="node" href="#fle-${u.id}" style="--c:${u.c};--x:${[0,1,0,-1][i%4]}"><span class="disc">${u.ico}${S.fle[u.id]?`<i>✔${S.fle[u.id]>1?" ×"+S.fle[u.id]:""}</i>`:""}</span><b>${esc(u.t)}</b><small>${esc(u.sub)}</small></a>`).join("")}</div>`;
}
function mountFleUnit(main,id){
  const u=FLE.find(x=>x.id===id);
  main.innerHTML=`<a class="back" href="#francais-debutant">← Mon français</a><div class="lhead" style="--c:${u.c}"><small>Mon français</small><h1>${u.ico} ${esc(u.t)}</h1></div><div class="panel" id="fp" style="--c:${u.c}"></div>`;
  const P=$("#fp");
  if(u.kind==="maison")return maisonMenu(P,u);
  if(u.kind==="parler")return parler(P,u);
  const start=()=>runSession(P,u,buildSession(u),()=>mountFleUnit(main,id));
  const intro=u.kind==="sons"?sonsLegend()+`<p>Chaque son a une image. Quand tu vois la couleur dans un mot, tu penses à l'image.</p>`:
    u.kind==="cote"?`<div class="tipcard"><span class="Lhand">L</span><p>Astuce : tends tes deux mains devant toi. Le pouce et l'index de la main <b>gauche</b> font la lettre <b>L</b>. L comme… Left ! Et en français : la main qui fait le L, c'est la <b>gauche</b>.</p></div>`:
    u.kind==="temps"?`<div class="chips" style="--c:${u.c}">${JOURS.map((j,i)=>`<span class="chip">${j} = <span class="ar">${JOURS_AR[i]}</span></span>`).join("")}</div>`:
    `<div class="wordwall">${u.words.map(w=>`<button class="wcard" data-w="${esc(w[0])}">${big(w[1])}<b>${colorWord(w[0],"fr")}</b><small class="ar">${esc(w[2])}</small></button>`).join("")}</div>`;
  P.innerHTML=`${intro}<div class="ctrl"><button class="play" id="go" style="--c:${u.c}">Commencer la leçon ▶</button>${u.kind==="temps"?'<button class="ghost" id="sing">♪ Chanter les jours</button>':""}</div>`;
  P.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>sayOne(b.dataset.w,"fr"));
  P.querySelectorAll("[data-son]").forEach(b=>b.onclick=()=>sayOne(`${b.dataset.son}, comme ${b.dataset.ex}`,"fr"));
  if($("#sing"))$("#sing").onclick=()=>{songOn=true;loopTune([60,62,64,65,67,65,64,62]);speakSeq(JOURS.map(j=>({text:j})),"fr",stopSong,.9)};
  $("#go").onclick=start;
}
function sonsLegend(){return `<div class="sons">${SONS.map(([g,e,ex,c])=>`<button class="son" data-son="${g}" data-ex="${ex}" style="--k:${c}"><span class="g g-${g}">${g}</span>${big(e)}<small>${ex}</small></button>`).join("")}</div>`}

// ----- construction d'une session (≈12 exercices) -----
function buildSession(u){
  const st=[];
  if(u.kind==="vocab"||u.kind==="words"){
    const W=shuffle(u.words).slice(0,5);const all=u.words;
    W.slice(0,4).forEach(w=>st.push({t:"learn",w}));
    W.forEach((w,i)=>st.push({t:i%2?"see":"hear",w,opts:shuffle([w,...shuffle(all.filter(x=>x!==w)).slice(0,2)])}));
    st.push({t:"match",ws:shuffle(W).slice(0,4)});
    shuffle(W).slice(0,2).forEach(w=>st.push({t:"repeat",w}));
    return [...st.slice(0,4),...shuffle(st.slice(4))];
  }
  if(u.kind==="sons"){
    const S4=shuffle(Object.keys(SONW)).slice(0,4);
    S4.forEach(s=>{const w=pick(SONW[s]);st.push({t:"son",s,w});
      const others=shuffle(Object.entries(SONW).filter(([k])=>k!==s).flatMap(([,v])=>v).filter(x=>!hasSon(x[0],s))).slice(0,2);
      st.push({t:"whichson",s,opts:shuffle([pick(SONW[s].filter(x=>x!==w))||w,...others])});
      st.push({t:"gap",s,w:pick(SONW[s])});});
    st.push({t:"repeat",w:pick(SONW[pick(S4)])});
    return st;
  }
  if(u.kind==="cote"){
    const P=[["🐱","le chat"],["🌳","l'arbre"],["🚗","la voiture"],["⚽","le ballon"],["🐶","le chien"],["🍎","la pomme"]];
    st.push({t:"side1"});
    for(let i=0;i<4;i++){const a=pick(P),b=pick(P.filter(x=>x!==a)),side=Math.random()<.5?"gauche":"droite";st.push({t:"side",a,b,side})}
    for(let i=0;i<3;i++)st.push({t:"tap",side:Math.random()<.5?"gauche":"droite"});
    st.push({t:"side1"});
    return st;
  }
  if(u.kind==="temps"){
    st.push({t:"order",title:"Remets les jours dans l'ordre",items:JOURS.slice(0,4)});
    st.push({t:"order",title:"Remets la fin de la semaine",items:JOURS.slice(3)});
    for(let i=0;i<3;i++){const k=Math.floor(Math.random()*6);st.push({t:"next",q:`Quel jour vient après ${JOURS[k]} ?`,a:JOURS[k+1],opts:shuffle([JOURS[k+1],...shuffle(JOURS.filter((_,j)=>j!==k+1)).slice(0,2)])})}
    st.push({t:"order",title:"Les mois : de janvier à juin",items:MOIS.slice(0,6)});
    st.push({t:"order",title:"Les mois : de juillet à décembre",items:MOIS.slice(6)});
    for(let i=0;i<2;i++){const k=Math.floor(Math.random()*11);st.push({t:"next",q:`Quel mois vient après ${MOIS[k]} ?`,a:MOIS[k+1],opts:shuffle([MOIS[k+1],...shuffle(MOIS.filter((_,j)=>j!==k+1)).slice(0,2)])})}
    st.push({t:"repeat",w:["lundi, mardi, mercredi","📅",""]});
    return st;
  }
  return st;
}
function hasSon(word,s){let f=false;word.replace(GRE,m=>{if(GMAP[m.toLowerCase()]===s)f=true;return m});return f}

// ----- moteur de session -----
function runSession(P,u,steps,onEnd){
  let k=0,xp=0;
  const frame=()=>{const st=steps[k];
    P.innerHTML=`<div class="sess-top"><button class="ghost" id="quit" aria-label="Quitter">✕</button><div class="progress"><span style="width:${100*k/steps.length}%"></span></div><span class="xp">⚡ ${xp}</span></div>
     <div id="ex"></div><div class="sess-bar" id="bar" hidden><span id="barT"></span><button class="play" id="cont">Continuer ▶</button></div>`;
    $("#quit").onclick=onEnd;
    const ex=$("#ex");let tries=0;
    const ok=(gain=true)=>{const g=gain?(tries?5:10):0;xp+=g;if(gain)chime();const msg=gain?bravo("fr"):"On continue !";$("#bar").hidden=false;$("#bar").className="sess-bar ok";$("#barT").textContent=msg+(g?`  +${g} XP`:"");
      sayOne(msg,"fr");ex.querySelectorAll("button:not(.keep)").forEach(b=>b.disabled=true);$("#cont").onclick=next;$("#cont").focus()};
    const ko=b=>{tries++;buzz();if(b){b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad")}};
    const optBtn=(w,mode)=>`<button class="ch opt" data-w="${esc(w[0])}">${mode==="emo"?big(w[1]):`<b>${colorWord(w[0],"fr")}</b>`}</button>`;
    if(st.t==="learn"){ex.innerHTML=`<p class="kicker">Nouveau mot</p><div class="learn">${big(st.w[1])}<div class="lw">${colorWord(st.w[0],"fr")}</div><div class="ar">${esc(st.w[2])}</div></div><div id="rp"></div>`;
      sayOne(st.w[0],"fr");repeatBlock($("#rp"),st.w[0],"fr",()=>ok(true))}
    if(st.t==="hear"){ex.innerHTML=`<p class="kicker">Écoute et touche la bonne image</p><button class="ghost keep bigsay" id="hs">🔊 Écouter</button><div class="choices emo3">${st.opts.map(w=>optBtn(w,"emo")).join("")}</div>`;
      const s=()=>sayOne(st.w[0],"fr");s();$("#hs").onclick=s;
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(b.dataset.w===st.w[0]){b.classList.add("good");ok()}else{ko(b);sayOne(b.dataset.w+". Non, écoute bien.","fr")}})}
    if(st.t==="see"){ex.innerHTML=`<p class="kicker">Qu'est-ce que c'est ?</p><div class="learn">${big(st.w[1])}</div><div class="choices">${st.opts.map(w=>`<div class="optw">${optBtn(w,"txt")}<button class="say keep" data-s="${esc(w[0])}" aria-label="Écouter">🔊</button></div>`).join("")}</div>`;
      ex.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>sayOne(b.dataset.s,"fr"));
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(b.dataset.w===st.w[0]){b.classList.add("good");sayOne(st.w[0],"fr");ok()}else ko(b)})}
    if(st.t==="match"){let sel=null,left=0;ex.innerHTML=`<p class="kicker">Relie l'image et le mot</p><div class="match"><div class="col">${st.ws.map((w,i)=>`<button class="ch" data-l="${i}">${big(w[1])}</button>`).join("")}</div><div class="col">${shuffle(st.ws.map((w,i)=>[w,i])).map(([w,i])=>`<button class="ch" data-r="${i}"><b>${colorWord(w[0],"fr")}</b></button>`).join("")}</div></div>`;
      ex.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{ex.querySelectorAll("[data-l]").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");sel=+b.dataset.l});
      ex.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{sayOne(st.ws[+b.dataset.r][0],"fr");if(sel==null)return;if(+b.dataset.r===sel){const l=ex.querySelector(`[data-l="${sel}"]`);[l,b].forEach(x=>{x.classList.remove("sel");x.classList.add("good","done")});sel=null;if(++left===st.ws.length)ok()}else ko(b)})}
    if(st.t==="repeat"){ex.innerHTML=`<p class="kicker">Répète après Lumi</p><div class="learn">${big(st.w[1])}<div class="lw">${colorWord(st.w[0],"fr")}</div></div><div id="rp"></div>`;
      sayOne(st.w[0],"fr");repeatBlock($("#rp"),st.w[0],"fr",(g,t)=>{tries=t>1?1:0;ok(true)})}
    if(st.t==="son"){const [g,e,ex2]=SONS.find(x=>x[0]===st.s);ex.innerHTML=`<p class="kicker">Le son</p><div class="learn"><span class="g g-${g} gbig">${g}</span>${big(e)}<div class="lw">${colorWord(ex2,"fr")}</div></div><p style="text-align:center">« ${g} » comme ${ex2}. Et aussi : <b>${colorWord(st.w[0],"fr")}</b> ${st.w[1]}</p><div id="rp"></div>`;
      sayOne(`${g}. ${g}, comme ${ex2}. Et aussi, ${st.w[0]}.`,"fr");repeatBlock($("#rp"),st.w[0],"fr",()=>ok(true))}
    if(st.t==="whichson"){ex.innerHTML=`<p class="kicker">Quel mot a le son <span class="g g-${st.s}">${st.s}</span> ?</p><button class="ghost keep bigsay" id="hs">🔊 Écouter les mots</button><div class="choices emo3">${st.opts.map(w=>`<button class="ch opt" data-w="${esc(w[0])}">${big(w[1])}<small>${esc(w[0])}</small></button>`).join("")}</div>`;
      const s=()=>speakSeq([{text:"Quel mot a le son "+st.s+" ?"},...st.opts.map(w=>({text:w[0]}))],"fr");s();$("#hs").onclick=s;
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{sayOne(b.dataset.w,"fr");if(hasSon(b.dataset.w,st.s)){b.classList.add("good");b.querySelector("small").innerHTML=colorWord(b.dataset.w,"fr");ok()}else ko(b)})}
    if(st.t==="gap"){const w=st.w[0];let pos=-1,len=0;w.replace(GRE,(m,_,i)=>{if(pos<0&&GMAP[m.toLowerCase()]===st.s){pos=i;len=m.length}return m});
      const real=w.substr(pos,len);const opts=shuffle([real,...shuffle(["on","an","in","ou","oi","eu","ui","ch","ai"].filter(x=>x!==real&&GMAP[x]!==st.s)).slice(0,2)]);
      ex.innerHTML=`<p class="kicker">Complète le mot</p><div class="learn">${big(st.w[1])}<div class="lw">${esc(w.slice(0,pos))}<span class="hole">__</span>${esc(w.slice(pos+len))}</div></div><button class="ghost keep bigsay" id="hs">🔊 Écouter</button><div class="choices">${opts.map(o=>`<button class="ch opt" data-o="${o}"><span class="g g-${GMAP[o]||"x"}">${o}</span></button>`).join("")}</div>`;
      const s=()=>sayOne(w,"fr");s();$("#hs").onclick=s;
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(b.dataset.o===real){b.classList.add("good");ex.querySelector(".hole").outerHTML=`<span class="g g-${st.s}">${real}</span>`;ok()}else ko(b)})}
    if(st.t==="side1"){ex.innerHTML=`<p class="kicker">Lève ta main gauche !</p><div class="tipcard"><span class="Lhand">L</span><p>La main qui fait la lettre <b>L</b> avec le pouce et l'index, c'est la main <b>gauche</b>.</p></div><div class="sides"><button class="ch opt" data-s="gauche">⬅ ma main gauche</button><button class="ch opt" data-s="droite">ma main droite ➡</button></div><p class="noteline">Touche le bouton du côté de ta main qui fait le L.</p>`;
      sayOne("Lève ta main gauche ! C'est la main qui fait la lettre L.","fr");
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(b.dataset.s==="gauche"){b.classList.add("good");ok()}else{ko(b);sayOne("Regarde tes mains. Laquelle fait un L ?","fr")}})}
    if(st.t==="side"){const L=st.side==="gauche"?[st.a,st.b]:[st.b,st.a];const q=`${st.a[1].charAt(0).toUpperCase()+st.a[1].slice(1)} est à gauche ou à droite ${/^(le )/.test(st.b[1])?"du "+st.b[1].slice(3):"de "+st.b[1]} ?`;
      ex.innerHTML=`<p class="kicker">${esc(q)}</p><div class="scene"><span class="emo">${L[0][0]}</span><span class="emo">${L[1][0]}</span></div><div class="sides"><button class="ch opt" data-s="gauche">⬅ à gauche</button><button class="ch opt" data-s="droite">à droite ➡</button></div>`;
      sayOne(q,"fr");
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(b.dataset.s===st.side){b.classList.add("good");ok()}else ko(b)})}
    if(st.t==="tap"){ex.innerHTML=`<p class="kicker">Touche le côté ${st.side} de l'écran</p><div class="sides tall"><button class="ch opt" data-s="gauche"> </button><button class="ch opt" data-s="droite"> </button></div>`;
      sayOne(`Touche le côté ${st.side} de l'écran.`,"fr");
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(b.dataset.s===st.side){b.classList.add("good");b.textContent=st.side==="gauche"?"⬅ gauche":"droite ➡";ok()}else{ko(b);sayOne("Non, ça c'est "+(st.side==="gauche"?"la droite":"la gauche"),"fr")}})}
    if(st.t==="order"){const line=[];ex.innerHTML=`<p class="kicker">${esc(st.title)}</p><div class="order-line" id="ol"></div><div class="order-bank" id="ob">${shuffle(st.items.map((t,i)=>[t,i])).map(([t,i])=>`<button class="ch" data-k="${i}">${esc(t)}</button>`).join("")}</div><button class="ghost keep" id="hs">🔊 Écouter dans l'ordre</button>`;
      $("#hs").onclick=()=>speakSeq(st.items.map(t=>({text:t})),"fr");
      $("#ob").onclick=e=>{const b=e.target.closest(".ch");if(!b)return;sayOne(b.textContent,"fr");$("#ol").appendChild(b);line.push(+b.dataset.k);
        if(line.length===st.items.length){if(line.every((v,i)=>v===i)){$("#ol").querySelectorAll(".ch").forEach(x=>x.classList.add("good"));ok()}else{ko();setTimeout(()=>{tries++;frame()},1200)}}}}
    if(st.t==="next"){ex.innerHTML=`<p class="kicker">${esc(st.q)}</p><button class="ghost keep bigsay" id="hs">🔊 Écouter</button><div class="choices">${st.opts.map(o=>`<button class="ch opt" data-o="${o}"><b>${o}</b></button>`).join("")}</div>`;
      const s=()=>sayOne(st.q,"fr");s();$("#hs").onclick=s;
      ex.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{sayOne(b.dataset.o,"fr");if(b.dataset.o===st.a){b.classList.add("good");ok()}else ko(b)})}
  };
  const next=()=>{k++;if(k<steps.length)frame();else finish()};
  const finish=()=>{S.xp+=xp;S.fle[u.id]=(S.fle[u.id]||0)+1;save();chime();addStars(2);
    P.innerHTML=`<div class="exam-res"><div class="starsrow">★★★</div><h2>Leçon terminée, ${esc(S.name)} !</h2><div class="note">+${xp} XP</div><p>Total : ${S.xp} XP · série de ${S.streak.n} jour${S.streak.n>1?"s":""}</p>
     <div class="ctrl" style="justify-content:center"><button class="play" id="again2" style="--c:${u.c}">↻ Une autre leçon</button><a class="ghost" href="#francais-debutant">Retour au chemin</a></div></div>`;
    sayOne(`Bravo ${S.name} ! Tu as gagné ${xp} points.`,"fr");
    $("#again2").onclick=()=>runSession(P,u,buildSession(u),onEnd);};
  frame();
}

// ----- jeu de la maison -----
function maisonMenu(P,u){
  P.innerHTML=`<p>Dans la maison, il y a beaucoup d'objets. Touche-les pour entendre leur nom, puis joue à les retrouver.</p>
   <div class="ctrl"><button class="play" id="mx" style="--c:${u.c}">👀 Explorer la maison</button><button class="play" id="mm" style="--c:#EF6C3A">🔎 Mission : trouve les objets</button><button class="ghost" id="ml">Leçon des mots</button></div>`;
  $("#mx").onclick=()=>house(P,u,"explore");$("#mm").onclick=()=>house(P,u,"mission");
  $("#ml").onclick=()=>runSession(P,u,buildSession({kind:"vocab",words:ROOMS.flatMap(r=>r.o)}),()=>maisonMenu(P,u));
}
function houseHTML(){return `<div class="house">${ROOMS.map((r,ri)=>`<div class="room" style="--rc:${r.c}"><div class="rname">${esc(r.n)} <span class="ar">${esc(r.ar)}</span></div><div class="objs">${r.o.map((o,oi)=>`<button class="obj" data-r="${ri}" data-o="${oi}" aria-label="${esc(o[0])}">${emo(o[1],"objimg")}</button>`).join("")}</div></div>`).join("")}</div>`}
function house(P,u,mode){
  const all=ROOMS.flatMap((r,ri)=>r.o.map((o,oi)=>({o,ri,oi})));
  if(mode==="explore"){
    P.innerHTML=`<div class="gtop"><button class="ghost" id="hb">← Retour</button><h3>Touche un objet</h3></div><div class="hcap" id="hc">Touche un objet pour entendre son nom.</div>${houseHTML()}`;
    $("#hb").onclick=()=>maisonMenu(P,u);
    P.querySelectorAll(".obj").forEach(b=>b.onclick=()=>{const o=ROOMS[b.dataset.r].o[b.dataset.o];P.querySelectorAll(".obj.lit").forEach(x=>x.classList.remove("lit"));b.classList.add("lit");
      $("#hc").innerHTML=`${emo(o[1],"emo sm")} <b>${colorWord(o[0],"fr")}</b> · <span class="ar">${esc(o[2])}</span> <button class="say" id="hr">🎤 Répéter</button>`;sayOne(o[0],"fr");
      $("#hr").onclick=()=>{const box=document.createElement("div");$("#hc").after(box);repeatBlock(box,o[0],"fr",()=>{chime();box.remove();toast(bravo("fr"));S.xp+=2;save()})}});
    return;
  }
  const missions=shuffle(all).slice(0,6);let k=0,xp=0,miss=0;
  const step=()=>{if(k>=missions.length){S.xp+=xp;S.fle[u.id]=(S.fle[u.id]||0)+1;save();chime();addStars(2);
      P.innerHTML=`<div class="exam-res"><div class="starsrow">🏠★★★</div><h2>Mission réussie, ${esc(S.name)} !</h2><div class="note">+${xp} XP</div><div class="ctrl" style="justify-content:center"><button class="play" id="ma" style="--c:${u.c}">↻ Nouvelle mission</button><button class="ghost" id="hb">Retour</button></div></div>`;
      sayOne(`Mission réussie, ${S.name} ! Tu as trouvé tous les objets.`,"fr");$("#ma").onclick=()=>house(P,u,"mission");$("#hb").onclick=()=>maisonMenu(P,u);return}
    const m=missions[k];miss=0;
    P.innerHTML=`<div class="sess-top"><button class="ghost" id="hb" aria-label="Quitter">✕</button><div class="progress"><span style="width:${100*k/missions.length}%"></span></div><span class="xp">⚡ ${xp}</span></div>
     <div class="mission"><span>Trouve :</span> <b>${colorWord(m.o[0],"fr")}</b> <button class="say" id="ms">🔊</button><button class="ghost" id="mh">💡 Aide</button></div><div class="hcap" id="hc"></div>${houseHTML()}<div id="rp"></div>`;
    $("#hb").onclick=()=>maisonMenu(P,u);
    const s=()=>sayOne("Trouve "+m.o[0],"fr");s();$("#ms").onclick=s;
    $("#mh").onclick=()=>{P.querySelector(`.room:nth-child(${m.ri+1})`).classList.add("hint");$("#hc").innerHTML=`C'est dans <b>${esc(ROOMS[m.ri].n.toLowerCase())}</b>. Ça ressemble à ça : ${emo(m.o[1],"emo sm")}`;sayOne("C'est dans "+ROOMS[m.ri].n.toLowerCase(),"fr")};
    P.querySelectorAll(".obj").forEach(b=>b.onclick=()=>{const o=ROOMS[b.dataset.r].o[b.dataset.o];
      if(+b.dataset.r===m.ri&&+b.dataset.o===m.oi){b.classList.add("lit","found");chime();xp+=miss?5:10;$("#hc").innerHTML=`${emo(o[1],"emo sm")} Oui ! C'est <b>${colorWord(o[0],"fr")}</b> · <span class="ar">${esc(o[2])}</span>`;
        P.querySelectorAll(".obj").forEach(x=>x.disabled=true);sayOne(`Oui ! C'est ${o[0]}. Répète : ${o[0]}.`,"fr");
        repeatBlock($("#rp"),o[0],"fr",()=>{k++;step()});$("#rp").scrollIntoView({block:"nearest",behavior:"smooth"})}
      else{miss++;buzz();b.classList.add("lit");setTimeout(()=>b.classList.remove("lit"),700);$("#hc").innerHTML=`Ça, c'est <b>${colorWord(o[0],"fr")}</b> ${o[1]}. Cherche encore !`;sayOne(`Ça, c'est ${o[0]}. Cherche ${m.o[0]}.`,"fr");if(miss>=2)$("#mh").click()}});
  };
  step();
}

// ----- conversation -----
const DIALOG=[["Comment tu t'appelles ?",()=>`Je m'appelle ${S.name}.`],["Quel âge as-tu ?",()=>"J'ai onze ans."],["Tu habites où ?",()=>"J'habite au Maroc."],["Qu'est-ce que tu aimes ?",()=>"J'aime le chocolat."],["Comment ça va ?",()=>"Ça va très bien, merci !"]];
function parler(P,u){
  P.innerHTML=`<p>Lumi te pose une question. Écoute la réponse, puis répète-la.</p>
   <div class="ctrl"><button class="play" id="pd" style="--c:${u.c}">💬 Petites questions</button><button class="play" id="pa" style="--c:#EF6C3A">🤖 Parler avec le prof IA</button></div>
   <p class="noteline">Le prof IA marche avec Ollama sur ton ordinateur (voir Réglages).</p>`;
  $("#pa").onclick=()=>openAI("conversation");
  $("#pd").onclick=()=>{let k=0;const step=()=>{if(k>=DIALOG.length){S.fle[u.id]=(S.fle[u.id]||0)+1;S.xp+=20;save();chime();P.innerHTML=`<div class="exam-res"><h2>Bravo ${esc(S.name)} !</h2><div class="note">+20 XP</div><button class="play" id="pb" style="--c:${u.c}">Retour</button></div>`;sayOne(`Bravo ${S.name} ! Tu parles français !`,"fr");$("#pb").onclick=()=>parler(P,u);return}
    const [q,a]=DIALOG[k];const ans=a();
    P.innerHTML=`<div class="sess-top"><div class="progress"><span style="width:${100*k/DIALOG.length}%"></span></div></div><div class="bubble q"></div><div class="bubble a"></div><div id="rp"></div>`;
    P.querySelector(".bubble.q").innerHTML="🤖 "+readable(q,"fr");P.querySelector(".bubble.a").innerHTML="🙋 "+readable(ans,"fr");
    speakSeq([{text:q,el:P.querySelector(".bubble.q .sent")},{text:"Tu peux répondre : "+ans}],"fr");
    repeatBlock($("#rp"),ans,"fr",()=>{chime();k++;setTimeout(step,500)})};step()};
}

// ----- carte mentale -----
function mountMap(P,s,L){
  const lang=L.essLang||s.lang;const rtl=lang==="ar"?' dir="rtl"':"";const n=L.ess.length;const pal=[s.c,"#2F7FE0","#2E9E62","#C99400","#DB3F8D","#7B5CF0"];
  const pos=L.ess.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [50+37*Math.cos(a),50+35*Math.sin(a)]});
  P.innerHTML=`<p class="noteline" style="margin-top:0">Touche une bulle pour l'écouter.</p><div class="mm"${rtl}><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${pos.map(([x,y],i)=>`<line x1="50" y1="50" x2="${x}" y2="${y}" stroke="${pal[i%pal.length]}" stroke-width="3" vector-effect="non-scaling-stroke" stroke-linecap="round"/>`).join("")}</svg>
   <button class="mm-c" style="--k:${s.c}" id="mmc">${esc(L.title)}</button>
   ${L.ess.map((t,i)=>`<button class="mm-n" data-i="${i}" style="left:${pos[i][0]}%;top:${pos[i][1]}%;--k:${pal[i%pal.length]}"><span class="b">${i+1}</span><span class="tx">${readable(t,lang)}</span></button>`).join("")}</div>
   ${L.lex?`<div class="lex"><h3>Mots clés</h3><div class="chips" style="--c:${s.c}">${L.lex.map(a=>`<span class="chip">${esc(a[0])} = <span class="ar">${esc(a[1])}</span></span>`).join("")}</div></div>`:""}`;
  $("#mmc").onclick=()=>sayOne(L.title,lang);
  P.querySelectorAll(".mm-n").forEach(b=>b.onclick=()=>readEl(b.querySelector(".tx"),lang));
}

// ----- Pomodoro 20 / 5 -----
const MOVES=["Lève les bras vers le ciel, très haut !","Saute dix fois sur place.","Bois un verre d'eau.","Marche un peu dans la maison.","Respire cinq fois, très fort.","Tourne les épaules doucement.","Touche tes pieds, puis ta tête."];
let pomo={mode:"work",left:1200,paused:false};
function pomoInit(){setInterval(pomoTick,1000);pomoReset();$("#pomo").onclick=()=>{pomo.paused=!pomo.paused;pomoDraw()}}
function pomoReset(){pomo={mode:"work",left:1200,paused:false};$("#pomo").hidden=!S.pomo;pomoDraw()}
function pomoDraw(){const m=Math.floor(pomo.left/60),s=pomo.left%60;$("#pomo").innerHTML=`${pomo.paused?"⏸":"⏱"} <span>${m}:${String(s).padStart(2,"0")}</span>`;$("#pomo").setAttribute("aria-label",`Temps de travail restant ${m} minutes. Appuie pour mettre en pause.`)}
function pomoTick(){if(!S.pomo||!S.name||pomo.paused||document.visibilityState!=="visible")return;
  if(pomo.mode==="work"){pomo.left--;pomoDraw();if(pomo.left<=0)pomoBreak()}
  else{pomo.left--;const t=$("#brt");if(t)t.textContent=`${Math.floor(pomo.left/60)}:${String(pomo.left%60).padStart(2,"0")}`;if(pomo.left<=0)pomoBack()}}
function pomoBreak(){stopSpeak();stopSong();pomo={mode:"break",left:300,paused:false};const mv=shuffle(MOVES).slice(0,3);
  const o=$("#brk");o.hidden=false;o.innerHTML=`<div class="brk-in"><div class="onb-star">☀</div><h2>Pause mouvement, ${esc(S.name)} !</h2><p>Tu as bien travaillé 20 minutes. Maintenant on bouge 5 minutes :</p><ol>${mv.map(m=>`<li>${esc(m)}</li>`).join("")}</ol><div class="note" id="brt">5:00</div><button class="ghost" id="brx">J'ai fini ma pause ▶</button></div>`;
  chime();speakSeq([{text:`Pause mouvement, ${S.name} ! Tu as bien travaillé.`},...mv.map(t=>({text:t}))],"fr");$("#brx").onclick=pomoBack}
function pomoBack(){$("#brk").hidden=true;pomo={mode:"work",left:1200,paused:false};pomoDraw();chime();sayOne(`On reprend, ${S.name} !`,"fr")}

// ----- Prof IA (Ollama) -----
let aiReady=false,aiMsgs=[],aiBusy=false,aiMode="lesson";
function aiCtx(){
  if(view.name==="lesson"){const L=LESSONS[view.id+"-"+view.n];return `Leçon en cours (${SUB(view.id).name}) : « ${L.title} ». L'essentiel : ${L.ess.join(" ")}`}
  if(view.name==="fleu"){const u=FLE.find(x=>x.id===view.id);return `Atelier de français débutant : ${u.t}.`+(u.words?" Mots : "+u.words.map(w=>w[0]).join(", "):"")}
  return "Pas de leçon ouverte. Aide-la à choisir une matière ou à pratiquer le français de base.";
}
function aiSystem(){return `Tu es « Lumi », un professeur et orthophoniste très doux pour ${S.name}, une élève de 1ère année collège au Maroc.
Elle apprend mieux avec des phrases très courtes, la voix, des images et des couleurs. Elle se fatigue vite à la lecture. Son français est débutant (avant A1). Elle comprend l'arabe et la darija.
Règles :
- Maximum 3 phrases. Maximum 8 mots par phrase. Mots très simples.
- Une seule idée et une seule question à la fois.
- Mets la traduction arabe des mots importants entre parenthèses, par exemple : la maison (الدار).
- Utilise parfois un emoji comme image.
- Encourage toujours. Ne dis jamais « faux » : dis « presque » et donne un petit indice.
- Pour un mot difficile, découpe-le en syllabes : é-lé-phant.
- Si elle écrit en arabe, réponds en arabe simple puis donne le mot en français.
- Reste sur la leçon. Appelle-la par son prénom de temps en temps.
${aiMode==="conversation"?"Mode conversation : pose-lui des questions très simples sur sa vie (prénom, famille, école, couleurs, maison). Donne un modèle de réponse qu'elle peut répéter.":""}
Contexte : ${aiCtx()}`}
async function ollamaChat(messages,onTok){
  const r=await fetch(S.ollama+"/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:S.model,messages,stream:true,options:{temperature:.5}})});
  if(!r.ok)throw new Error("HTTP "+r.status);
  const rd=r.body.getReader(),dec=new TextDecoder();let buf="",all="";
  for(;;){const {done,value}=await rd.read();if(done)break;buf+=dec.decode(value,{stream:true});let i;
    while((i=buf.indexOf("\n"))>=0){const line=buf.slice(0,i).trim();buf=buf.slice(i+1);if(!line)continue;try{const j=JSON.parse(line);if(j.message&&j.message.content){all+=j.message.content;onTok(all)}}catch(e){}}}
  return all;
}
async function ollamaModels(){const r=await fetch(S.ollama+"/api/tags");if(!r.ok)throw new Error("HTTP "+r.status);const j=await r.json();return (j.models||[]).map(m=>m.name)}
async function aiInit(){
  $("#aib").onclick=()=>openAI("lesson");
  try{const ms=await ollamaModels();if(ms.length){if(!S.model||!ms.includes(S.model)){S.model=ms[0];save()}aiReady=true}}catch(e){aiReady=false}
}
async function testOllama(){const r=$("#olr");r.textContent="Je cherche Ollama…";
  try{const ms=await ollamaModels();if(!ms.length){r.textContent="Ollama marche, mais aucun modèle n'est installé. Tape dans un terminal : ollama pull llama3.2";return}
    if(!S.model||!ms.includes(S.model))S.model=ms[0];save();aiReady=true;
    $("#olm").innerHTML=ms.map(m=>`<button data-set="model" data-v="${esc(m)}" aria-pressed="${m===S.model}">${esc(m)}</button>`).join("");r.textContent="Connecté ✔ Choisis le modèle.";}
  catch(e){aiReady=false;r.textContent="Je ne trouve pas Ollama. Vérifie qu'il tourne, et lance-le avec OLLAMA_ORIGINS=* (voir le guide). Dans la page Claude en ligne, le prof IA ne peut pas marcher : utilise le fichier téléchargé.";}}
function speakable(t){return t.replace(/\([^)]*[؀-ۿ][^)]*\)/g,"").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").replace(/[*_#>`]/g,"")}
function aiSpeak(t,el){const ar=(t.match(/[؀-ۿ]/g)||[]).length,la=(t.match(/[a-zA-Zàâéèêîôûç]/g)||[]).length;const lang=ar>la?"ar":"fr";el.innerHTML=readable(lang==="fr"?speakable(t):t,lang)+(lang==="fr"&&ar?`<div class="ar noteline">${esc((t.match(/\([^)]*[؀-ۿ][^)]*\)/g)||[]).join(" "))}</div>`:"");readEl(el,lang)}
function openAI(mode){
  aiMode=mode||"lesson";aiMsgs=[];const d=$("#ai");d.hidden=false;$("#veil").hidden=false;
  d.innerHTML=`<div class="ai-h"><span class="onb-star sm">L</span><b style="flex:1">Prof Lumi</b><button class="ghost" id="aix" aria-label="Fermer">✕</button></div>
   <div class="ai-log" id="alog"></div>
   <div class="ai-q">${["Explique plus simple","Donne un exemple","Pose-moi une question","Dis-le en arabe"].map(q=>`<button class="ghost" data-q="${q}">${q}</button>`).join("")}</div>
   <form class="ai-f" id="aif"><button type="button" class="mic" id="aim" aria-label="Parler">🎤</button><input id="ain" placeholder="Écris ou parle…" autocomplete="off" aria-label="Message"><button class="play" style="--c:#4C5BD4" type="submit">➤</button></form>`;
  $("#aix").onclick=closeAI;
  const add=(who,t)=>{const b=document.createElement("div");b.className="bubble "+(who==="me"?"a":"q");b.textContent=t;$("#alog").appendChild(b);$("#alog").scrollTop=1e9;return b};
  const send=async text=>{if(aiBusy)return;
    if(!aiReady){await aiInit();if(!aiReady){add("ai","Je ne suis pas connecté. Demande à un grand d'allumer Ollama sur l'ordinateur (Réglages → Prof IA).");return}}
    if(text){add("me",text);aiMsgs.push({role:"user",content:text})}
    aiBusy=true;const b=add("ai","…");
    try{const out=await ollamaChat([{role:"system",content:aiSystem()},...aiMsgs],t=>{b.textContent=t;$("#alog").scrollTop=1e9});aiMsgs.push({role:"assistant",content:out});aiSpeak(out,b)}
    catch(e){b.textContent="Je n'arrive pas à parler avec Ollama. Vérifie qu'il tourne avec OLLAMA_ORIGINS=*."}
    aiBusy=false};
  d.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>send(b.dataset.q));
  $("#aif").onsubmit=e=>{e.preventDefault();const t=$("#ain").value.trim();if(t){$("#ain").value="";send(t)}};
  $("#aim").onclick=()=>{$("#aim").classList.add("on");listen("fr",alts=>{$("#aim").classList.remove("on");send(alts[0])},()=>{$("#aim").classList.remove("on");toast("Le micro ne marche pas ici. Écris ton message.")})};
  const hello=aiMode==="conversation"?`Bonjour ${S.name} ! On parle un peu en français ?`:`Bonjour ${S.name} ! Tu as une question sur la leçon ?`;
  if(aiReady){aiMsgs.push({role:"user",content:aiMode==="conversation"?"Commence une petite conversation avec moi.":"Dis-moi bonjour et propose-moi de l'aide sur la leçon."});send("")}
  else{const b=add("ai",hello);aiInit().then(()=>{if(!aiReady)add("ai","Pour que je réponde, Ollama doit tourner sur l'ordinateur. Va dans Réglages → Prof IA.")})}
}
function closeAI(){$("#ai").hidden=true;$("#veil").hidden=true;stopSpeak()}
// conseil d'orthophoniste après une répétition ratée
async function aiTip(target,heard,el){if(!aiReady||!el)return;el.hidden=false;el.textContent="Lumi réfléchit…";
  try{const out=await ollamaChat([{role:"system",content:aiSystem()},{role:"user",content:`${S.name} devait dire « ${target} ». La reconnaissance vocale a entendu « ${heard} ». Donne UN seul conseil très court (10 mots maximum) pour bien prononcer. Découpe le mot en syllabes.`}],t=>{el.textContent="💡 "+t});aiSpeak("💡 "+out,el)}catch(e){el.hidden=true}}


