// ===== Générateur « Le cours en jeu » =====
// Transforme n'importe quelle leçon (même préparée par le prof IA) en une carte d'aventure :
// chaque étape du cours = 1) Lumi explique  2) un défi créé automatiquement  3) une étoile.
const STOP_FR=new Set("le la les un une des de du d l et ou en au aux à a est sont on il elle ils elles ce cette ces se sa son ses qui que quand pour par avec dans sur sous ne pas plus tout tous très comme mais donc car puis c'est c qu n s y nous vous je tu aujourd'hui aujourd pendant rien quand après avant toujours souvent beaucoup ensuite enfin aussi encore alors maintenant environ presque seulement chaque autre autres petit petite grand grande bien mieux bonjour exemple voici voilà retiens quel quelle quels quelles dans".split(" "));
const STOP_AR=new Set("في من على إلى عن مع هو هي هذا هذه ذلك التي الذي كل ثم أو و أن إن لا ما قد كان".split(" "));
const STOP_EN=new Set("the a an is are and or of to in on for with this that it i you we they my your".split(" "));
const toks=(s,lang)=>(s.match(lang==="ar"?/[\u0621-\u064A\u064B-\u0652]+/g:/[\p{L}'’-]+/gu)||[]).map(w=>w.replace(/^[ldcjmnst][’']/i,""));
const stripAr=s=>s.replace(/[\u064B-\u0652\u0670]/g,"");
function stopFor(lang){return lang==="ar"?STOP_AR:lang==="en"?STOP_EN:STOP_FR}
function keyTerms(L,lang){const t=[];(L.words||[]).forEach(w=>t.push(w[0]));(L.lex||[]).forEach(x=>t.push(x[0]));return t.map(x=>coreWord(x).toLowerCase())}
// phrase à trous : on cache un mot important
function makeCloze(step,L,lang,pool){
  const sents=(step.say.match(/[^.!?؟]+[.!?؟]?/g)||[step.say]).map(x=>x.trim()).filter(x=>x.split(" ").length>=3);if(!sents.length)return null;
  const keys=keyTerms(L,lang),stop=stopFor(lang);let best=null;
  for(const s of sents){const ws=toks(s,lang).filter(w=>!stop.has(w.toLowerCase())&&!stop.has(stripAr(w)));
    const tw=toks(step.t||"",lang).map(x=>x.toLowerCase());
    const k=ws.find(w=>keys.some(x=>x===w.toLowerCase()))||ws.find(w=>w.length>=4&&tw.includes(w.toLowerCase()))||ws.find(w=>keys.some(x=>x.includes(w.toLowerCase())||w.toLowerCase().includes(x)))||ws.filter(w=>w.length>=(lang==="ar"?4:5)).sort((a,b)=>b.length-a.length)[0];
    if(k&&(!best||keys.some(x=>x.includes(k.toLowerCase())))){best={s,k};if(keys.some(x=>x.includes(k.toLowerCase())))break}}
  if(!best)return null;
  const dis=shuffle(pool.filter(w=>w.toLowerCase()!==best.k.toLowerCase()&&stripAr(w)!==stripAr(best.k))).slice(0,2);if(dis.length<2)return null;
  const i=best.s.indexOf(best.k);return {type:"cloze",before:best.s.slice(0,i),after:best.s.slice(i+best.k.length),answer:best.k,ch:shuffle([best.k,...dis]),full:best.s}}
function makeChallenge(step,L,lang,pool,i){
  const v=step.vis||{};
  if((v.k==="steps"||v.k==="cycle")&&Array.isArray(v.v)&&v.v.length>=3&&new Set(v.v).size===v.v.length)return {type:"order",items:v.v};
  if(v.k==="cards"&&Array.isArray(v.v)&&v.v.length>=2){const ok=v.v.every(c=>c[1]&&c[0]!==c[1]);if(ok&&new Set(v.v.map(c=>c[1])).size===v.v.length)return {type:"match",pairs:v.v.map(c=>[c[0],c[1]])}}
  const c=makeCloze(step,L,lang,pool);if(c)return c;
  const q=(L.exam||[])[i%Math.max(1,(L.exam||[]).length)];if(q)return {type:"exam",q};
  return null}
function buildAdventure(L,s){const lang=L.video&&L.video[0]&&isAr(L.video[0].say)?"ar":(s.lang==="en"?"en":s.lang);
  const pool=[...new Set(L.video.flatMap(st=>toks(st.say,lang)).filter(w=>w.length>=(lang==="ar"?4:5)&&!stopFor(lang).has(w.toLowerCase())))];
  const lv=L.video.map((st,i)=>({step:st,ch:makeChallenge(st,L,lang,pool,i)}));
  return {lang,levels:lv}}
// Chaque niveau : 1) Lumi explique (en arabe puis en français)  2) un défi lu à voix haute (question, réponses, explication)
// 3) elle répète les mots techniques de l'étape. À la fin : le grand défi.
function mountAdventure(P,s,L,key){
  const s0=SUB(s.id),L0=LESSONS[key],ar=arMode(s.id),ui=ar||s0.lang==="ar"?"ar":"fr",A=ui==="ar",lat=s0.lang==="en"?"en":"fr",lang=s.lang,rtl=A?' dir="rtl"':"";
  S.adv=S.adv||{};const done=()=>S.adv[key]||0,N=L.video.length+1;
  const top=t=>`<div class="advtop"><button class="ghost" id="amap">🗺️ ${ts("الخريطة","Carte")}</button><span class="dcount">${t}</span></div>`;
  const map=()=>{stopSpeak();const d=done(),fin=d>=N;
    P.innerHTML=`<div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub"${rtl}>${fin?tt(`أحسنت ${esc(S.name)}! أنهيت مغامرة هذا الدرس.`,`Bravo ${esc(S.name)} ! Tu as fini l'aventure de ce cours.`):tt(`نتعلم الدرس ونحن نلعب! المس المستوى ${d+1}.`,`On apprend le cours en jouant ! Touche le niveau ${d+1}.`)}</div></div><span class="dcount">${Math.min(d,N)} / ${N}</span></div>
     <div class="advmap">${L.video.map((st,i)=>node(i,st.t,i<d?"done":i===d?"cur":"lock")).join("")}${node(N-1,"🏆 "+ts("التحدي الكبير","Le grand défi"),N-1<d?"done":N-1===d?"cur":"lock")}</div>`;
    P.querySelectorAll(".lvl:not(.lock)").forEach(b=>b.onclick=()=>{const i=+b.dataset.i;i===N-1?boss():level(i)});
    if(!map.said){map.said=1;fin?sayBoth(`أحسنت ${S.name}!`,`Bravo ${S.name} !`):sayBoth(`المس المستوى ${d+1}.`,`Touche le niveau ${d+1}.`)}};
  const node=(i,t,st)=>`<button class="lvl ${st}" data-i="${i}" style="--x:${[0,1,0,-1][i%4]}"><span class="disc">${st==="done"?"⭐":st==="lock"?"🔒":i+1}</span><b dir="auto">${esc(t)}</b>${st==="cur"?`<span class="me">${emo("👧🏽","girlmini")}</span>`:""}</button>`;
  const win=i=>{if(done()===i){S.adv[key]=i+1;save()}addStars(1)};
  const next=i=>{i+1<N-1?level(i+1):i+1===N-1?boss():map()};
  // 1) l'explication, lue en arabe puis en français
  const level=i=>{const st=L.video[i];stopSpeak();const W=stepWords(s0,L0,i);
    P.innerHTML=top(`${ts("المستوى","Niveau")} ${i+1} / ${N}`)+`<div class="screen" style="--c:${s.c}"${lang==="ar"?' dir="rtl"':""}><div class="lumi-girl vid">${emo("👧🏽","girl")}</div><h2 dir="auto">${esc(st.t)}</h2>${st.img?`<div class="phs">${st.img.map(figHTML).join("")}</div>`:""}<div class="vis">${visHTML(st.vis||{k:"big",v:""},lang)}</div>
     <div class="cap" id="acap">${readable(st.say,lang)}</div>${frLine(st.sayFr,"acapfr")}${arLine(st.sayAr,"acapar")}
     ${W.length?`<div class="chips">${W.map((x,j)=>`<button class="chip" data-w="${j}" dir="auto">${esc(x.t)} = <span class="ar">${esc(x.m)}</span></button>`).join("")}</div>`:""}</div>
     <div class="ctrl"><button class="ghost" id="arep">🔊 ${ts("أعد الاستماع","Réécouter")}</button><span style="flex:1"></span><button class="play" id="ago" style="--c:${s.c}">${ts("فهمت: التحدي ▶","J'ai compris : le défi ▶")}</button></div>`;
    bindAr(P);$("#amap").onclick=map;
    const read=()=>{const it=[...$("#acap").querySelectorAll(".sent")].map(x=>({text:x.textContent,el:x}));
      [["#acapfr","fr"],["#acapar","ar"]].forEach(([id,l])=>{const e=$(id);if(e&&(l==="fr"||S.readAr))e.querySelectorAll(".sent").forEach(x=>it.push({text:x.textContent,el:x,lang:l}))});speakSeq(it,lang)};
    read();$("#arep").onclick=read;P.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>{const x=W[+b.dataset.w];speakSeq([{text:x.t,lang:x.tl},{text:x.m,lang:x.ml}],x.tl)});
    $("#ago").onclick=()=>challenge(i)};
  // 2) le défi (tout est lu) puis 3) les mots techniques à répéter
  const challenge=i=>{stopSpeak();const q=stepQuestion(s0,L0,ar,i),W=stepWords(s0,L0,i).slice(0,3);
    const after=()=>{win(i);const said=q&&q.rep?q.rep.t:null,rest=W.filter(x=>x.t!==said);let k=0;
      const one=()=>{if(!document.body.contains(P))return;if(k>=rest.length)return next(i);const x=rest[k++];
        learnView(P,s,{t:x.t,tr:x.m,e:x.e,lang:x.tl,trLang:x.ml},ui,top(`${ts("المستوى","Niveau")} ${i+1} · 🎤 ${k} / ${rest.length}`),one);$("#amap").onclick=map};one()};
    if(!q)return after();
    questionView(P,s,q,{ui,lat,mode:"game",hint:true,onNext:after,top:top(`${ts("التحدي","Défi")} ${i+1} / ${N}`)});$("#amap").onclick=map};
  // le grand défi : 5 questions sur tout le cours
  const boss=()=>{stopSpeak();const G=genSet(s0,L0,ar),Q=[];for(let g=0;Q.length<5&&g<40&&G.all.length;g++){const q=pick(G.all)();if(q&&!Q.some(o=>o.q===q.q&&(o.m||o.big)===(q.m||q.big)))Q.push(q)}
    if(!Q.length){win(N-1);return map()}let k=0,good=0;
    const ask=ok=>{if(ok)good++;if(!document.body.contains(P))return;if(k>=Q.length)return end();const q=Q[k++];
      questionView(P,s,q,{ui,lat,mode:"game",hint:true,onNext:ask,requeue:q2=>{if(!q2._again)Q.push(reshuf({...q2,_again:true}))},top:top(`🏆 ${ts("التحدي الكبير","Grand défi")} ${k} / ${Q.length}`)});$("#amap").onclick=map};
    const end=()=>{const all=good===Q.length;if(done()===N-1)S.adv[key]=N;save();addStars(all?3:1);chime();
      P.innerHTML=`<div class="exam-res"><div class="cele-emo">${emo("🏆","celeimg")}</div><h2>${tt(`بطل يا ${esc(S.name)}!`,`Champion, ${esc(S.name)} !`)}</h2><p>${tt(`${good} من ${Q.length} من أول محاولة`,`${good} sur ${Q.length} du premier coup`)}</p>
        <div class="ctrl" style="justify-content:center"><button class="play" id="amap2" style="--c:${s.c}">🗺️ ${ts("الخريطة","La carte")}</button><button class="ghost" id="aex">✎ ${ts("الامتحان","L'examen")}</button></div></div>`;
      sayBoth(`أحسنت ${S.name}! أنهيت مغامرة الدرس.`,`Bravo ${S.name} ! Tu as fini l'aventure du cours.`);$("#amap2").onclick=map;$("#aex").onclick=()=>document.querySelector('[data-tab="examen"]').click()};
    ask(false)};
  map();
}
