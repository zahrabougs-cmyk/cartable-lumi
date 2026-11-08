// ===== État & stockage =====
// la progression de chaque enfant est rangée sous sa propre clé (voir lsKey dans compte.js)
const S0={fs:20,space:"normal",tint:"bleu",color:"sons",rate:"normale",ruler:false,name:"",best:{},games:{},pomo:true,examMax:6,trAr:true,readAr:false,coursAr:true,ollama:"http://localhost:11434",model:"",xp:0,streak:{last:"",n:0},fle:{},stars:0,stickers:[],gen:{},adv:{},hid:{},ex:{},v3:1,v4:1};
let S;
function loadS(){S=JSON.parse(JSON.stringify(S0));try{Object.assign(S,JSON.parse(localStorage.getItem(lsKey())||"{}"))}catch(e){}
  // le programme de français et d'anglais suit maintenant les manuels : les anciennes notes ne correspondent plus
  if(!S.man1){Object.keys(S.best||{}).forEach(k=>{if(/^(francais|anglais)-/.test(k))delete S.best[k]});S.man1=1}}
loadS();
function save(){S._t=Date.now();try{localStorage.setItem(lsKey(),JSON.stringify(S))}catch(e){}cloudPush()}
const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const CREDITS=new Map();
function figHTML(im){CREDITS.set(im.f,im);const src="https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(im.f.replace(/ /g,"_"))+"?width=640";const pg="https://commons.wikimedia.org/wiki/File:"+encodeURIComponent(im.f.replace(/ /g,"_"));
  return `<figure class="ph"><img src="${src}" alt="${esc(im.cap)}" loading="lazy" onerror="this.closest('figure').classList.add('noimg')"><a class="ph-link" href="${pg}" target="_blank" rel="noopener">📷 Voir la photo</a><figcaption><b>${esc(im.cap)}</b>${im.capAr?`<span class="ar" dir="rtl">${esc(im.capAr)}</span>`:""}<small>${esc(im.by||"Wikimedia Commons")} · ${esc(im.lic)}</small></figcaption></figure>`}
function arLine(t,id){return S.trAr&&t?`<div class="tr-ar" dir="rtl"><button class="say" data-ar="${id}" aria-label="Écouter en arabe">🔊</button><span class="tx" id="${id}">${readable(t,"ar")}</span></div>`:""}
function frLine(t,id){return t?`<div class="tr-ar tr-fr" dir="ltr"><button class="say" data-fr="${id}" aria-label="Écouter en français">🔊</button><span class="tx" id="${id}">${readable(t,"fr")}</span></div>`:""}
function bindAr(root){root.querySelectorAll("[data-ar]").forEach(b=>b.onclick=()=>readEl($("#"+b.dataset.ar),"ar"));root.querySelectorAll("[data-fr]").forEach(b=>b.onclick=()=>readEl($("#"+b.dataset.fr),"fr"))}
const SUB=id=>SUBJECTS.find(s=>s.id===id);
const isAr=t=>/[؀-ۿ]/.test(t);

function applySettings(){
  const r=document.documentElement.style;
  r.setProperty("--fs",S.fs+"px");
  r.setProperty("--ls",S.space==="large"?".12em":".04em");
  r.setProperty("--ws",S.space==="large"?".32em":".16em");
  r.setProperty("--lh",S.space==="large"?"2.05":"1.75");
  document.body.dataset.tint=S.tint==="bleu"?"":S.tint; if(S.tint==="bleu")delete document.body.dataset.tint;
  $("#ruler").hidden=!S.ruler;
}

// ===== Sons =====
let AC=null;
function ac(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==="suspended")AC.resume();return AC}
function tone(f,t0,d,vol=.12,type="triangle"){const a=ac();if(!a)return;const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(0,a.currentTime+t0);g.gain.linearRampToValueAtTime(vol,a.currentTime+t0+.02);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+t0+d);o.connect(g).connect(a.destination);o.start(a.currentTime+t0);o.stop(a.currentTime+t0+d+.05)}
const midi=m=>440*Math.pow(2,(m-69)/12);
function chime(){[72,76,79,84].forEach((m,i)=>tone(midi(m),i*.08,.35,.1))}
function buzz(){tone(180,0,.25,.08,"sine")}

// ===== Voix (synthèse vocale) =====
const VL={fr:"fr-FR",ar:"ar-SA",en:"en-GB"};
let voices=[];
function loadVoices(){try{voices=speechSynthesis.getVoices()}catch(e){}}
if("speechSynthesis" in window){loadVoices();speechSynthesis.onvoiceschanged=loadVoices}
function pickVoice(lang){const p=VL[lang]||lang;const pre=p.slice(0,2);
  return voices.find(v=>v.lang===p&&/Google|Natural|Online/i.test(v.name))||voices.find(v=>v.lang===p)||voices.find(v=>v.lang&&v.lang.toLowerCase().startsWith(pre))||null}
let speakToken=0;
function stopSpeak(){speakToken++;document.body.classList.remove("talking");try{speechSynthesis.cancel()}catch(e){}document.querySelectorAll(".w.cur,.sent.now").forEach(e=>e.classList.remove("cur","now"))}
// parle une liste de phrases [{text, el}] ; el contient des .w[data-i]
function speakSeq(items,lang,onDone,rateMul=1){
  stopSpeak();const tok=++speakToken;
  if(!("speechSynthesis" in window)){toast("La voix n'est pas disponible sur ce navigateur.");onDone&&onDone();return}
  if(!voices.length)loadVoices();
  const v=pickVoice(lang);
  let k=0;
  const next=()=>{
    if(tok!==speakToken)return;
    document.querySelectorAll(".sent.now").forEach(e=>e.classList.remove("now"));
    if(k>=items.length){onDone&&onDone();return}
    const it=items[k++];const L2=it.lang||lang;const vv=it.lang&&it.lang!==lang?pickVoice(it.lang):v;const rate=({lente:.85,normale:1.03,rapide:1.2}[S.rate]||1.03)*rateMul;
    // voix pas encore chargées (téléphone) : on parle quand même avec u.lang ; sinon, sans voix arabe, on saute la phrase au lieu de la lire avec une voix française
    if(!vv&&L2==="ar"&&voices.length){if(!speakSeq.warned){speakSeq.warned=1;toast(/Edg\//.test(navigator.userAgent)?"Ce navigateur n'a pas de voix arabe.":"Pas de voix arabe dans ce navigateur. Sur l'ordinateur, ouvre Lumi avec Microsoft Edge : la voix arabe est déjà dedans.")}setTimeout(next,50);return}
    const u=new SpeechSynthesisUtterance(it.text);
    u.lang=VL[L2]||L2;if(vv)u.voice=vv;u.rate=rate;u.onstart=()=>document.body.classList.add("talking");u.pitch=1.05;
    if(it.el)it.el.classList.add("now");
    const ws=it.el?[...it.el.querySelectorAll(".w")]:[];
    u.onboundary=e=>{if(tok!==speakToken||!ws.length)return;let cur=null;for(const w of ws){if(+w.dataset.i<=e.charIndex)cur=w;else break}
      ws.forEach(w=>w.classList.toggle("cur",w===cur))};
    u.onend=()=>{document.body.classList.remove("talking");ws.forEach(w=>w.classList.remove("cur"));setTimeout(next,150)};
    u.onerror=()=>{ws.forEach(w=>w.classList.remove("cur"));setTimeout(next,50)};
    speechSynthesis.speak(u);
  };
  setTimeout(next,60);
}
function sayOne(text,lang,el){speakSeq([{text,el}],lang)}

// ===== Texte lisible : mots + syllabes colorées =====
const V="aeiouyàâäéèêëîïôöùûüœæAEIOUYÀÂÄÉÈÊËÎÏÔÖÙÛÜŒ";
const SYL=new RegExp(`[^${V}]*[${V}]+(?:[^${V}]*$|(?![bcdfgkptv][rl]|ch|ph|gn|th|qu)[^${V}](?=[^${V}]))?`,"gi");
function sylls(word){
  const m=word.match(/^([^\p{L}]*)([\p{L}'’-]+)([^\p{L}]*)$/u);
  if(!m||m[2].length<4)return esc(word);
  const core=m[2];const parts=core.match(SYL);
  if(!parts||parts.join("")!==core)return esc(word);
  return esc(m[1])+parts.map((p,i)=>`<span class="y${i%2+1}">${esc(p)}</span>`).join("")+esc(m[3]);
}
// renvoie le HTML d'une phrase avec .w[data-i]
const SONS=[["on","⚽","ballon","#F08A24"],["oi","🐦","oiseau","#2F7FE0"],["ou","🐺","loup","#9A6A3A"],["an","🐘","éléphant","#8E5BD8"],["in","🐰","lapin","#2E9E62"],["eu","🔥","feu","#D64545"],["ui","🌙","nuit","#3F4FB8"],["ai","🏠","maison","#0D9488"],["au","⛵","bateau","#1FA3C9"],["ch","🐱","chat","#D9488F"]];
const GMAP={on:"on",om:"on",oi:"oi",ou:"ou",an:"an",am:"an",en:"an",em:"an",in:"in",im:"in",ain:"in",ein:"in",eu:"eu","œu":"eu",ui:"ui",ai:"ai",ei:"ai",au:"au",eau:"au",ch:"ch"};
const GRE=/(eau|ain|ein|œu|ou|oi|au|ai|ei|eu|ui|ch|on(?![aeiouyéèêhnm])|om(?=[bp])|an(?![aeiouyéèêhn])|am(?=[bp])|en(?![aeiouyéèêhn])|em(?=[bp])|in(?![aeiouyéèêhn])|im(?=[bp]))/gi;
function sons(word){let h="",last=0;word.replace(GRE,(m,_,i)=>{h+=esc(word.slice(last,i))+`<span class="g g-${GMAP[m.toLowerCase()]}">${esc(m)}</span>`;last=i+m.length;return m});return h+esc(word.slice(last))}
function colorWord(w,lang){if(lang!=="fr")return esc(w);return S.color==="syl"?sylls(w):S.color==="sons"?sons(w):esc(w)}
function words(text,lang){let html="",re=/\S+/g,m,last=0;
  while((m=re.exec(text))){html+=esc(text.slice(last,m.index));html+=`<span class="w" data-i="${m.index}">${colorWord(m[0],lang)}</span>`;last=m.index+m[0].length}
  return html+esc(text.slice(last));
}
function sentences(t){return t.match(/[^.!?؟]+[.!?؟]*\s*/g)||[t]}
function readable(text,lang){return sentences(text).map(s=>`<span class="sent" data-lang="${lang}">${words(s.trimEnd(),lang)}</span> `).join("")}
function readEl(root,lang,done){const items=[...root.querySelectorAll(`.sent[data-lang="${lang}"]`)].map(el=>({text:el.textContent,el}));speakSeq(items,lang,done)}

// ===== Routage =====
let view={name:"home"},tab="aventure";
function go(h){if(location.hash!=="#"+h)location.hash=h;else route()}
window.addEventListener("hashchange",route);
function route(){
  stopSpeak();stopSong();disposeWorld();
  const h=location.hash.slice(1);
  let m;
  if((m=h.match(/^m-([a-z]+)$/))&&SUB(m[1]))view={name:"subject",id:m[1]};
  else if(h==="album")view={name:"album"};
  else if(h==="voix")view={name:"voix"};
  else if(h==="parents")view={name:"parents"};
  else if(h==="enfant")view={name:"enfant"};
  else if(h==="cherche")view={name:"cherche"};
  else if(h==="jeux")view={name:"jeux"};
  else if(h==="jeu-cours")view={name:"jeucours"};
  else if((m=h.match(/^diff-([a-z]+)$/))&&SCENES.find(s=>s.id===m[1]))view={name:"diff",id:m[1]};
  else if((m=h.match(/^cherche-([a-z]+)$/))&&SCENES.find(s=>s.id===m[1]))view={name:"hidden",id:m[1]};
  else if(h==="mots")view={name:"mots"};
  else if((m=h.match(/^mots-([a-z]+)-([a-z]+)$/))&&MGAMES.find(g=>g[0]===m[1])&&wordThemes().find(t=>t.id===m[2]))view={name:"mot",g:m[1],t:m[2]};
  else if((m=h.match(/^l-([a-z]+)-(\d+)$/))&&SUB(m[1])&&!LESSONS[m[1]+"-"+m[2]]&&allLessons(SUB(m[1]))[+m[2]])view={name:"gen",id:m[1],n:+m[2]};
  else if((m=h.match(/^l-([a-z]+)-(\d+)$/))&&SUB(m[1])&&LESSONS[m[1]+"-"+m[2]]){if(!(view.name==="lesson"&&view.id===m[1]&&view.n===+m[2]))tab=LESSONS[m[1]+"-"+m[2]].tab0||"aventure";view={name:"lesson",id:m[1],n:+m[2]};}
  else if(h==="francais-debutant")view={name:"fle"};
  else if((m=h.match(/^monde-([a-z]+)$/))&&WORLDS[m[1]])view={name:"world",id:m[1]};
  else if((m=h.match(/^fle-([a-z]+)$/))&&FLE.find(u=>u.id===m[1]))view={name:"fleu",id:m[1]};
  else view={name:"home"};
  render();trackRoute();window.scrollTo(0,0);
}
function render(){
  const main=$("#main");
  if(view.name==="parents"){parentsView(main);return}
  if(view.name==="enfant"||!accReady()){main.innerHTML=accScreen();mountAcc();return}
  if(view.name==="fle"){main.innerHTML=flePath();return}
  if(view.name==="album"){main.innerHTML=album();return}
  if(view.name==="voix"){voixView(main);return}
  if(view.name==="cherche"){main.innerHTML=`<a class="back" href="#jeux">← Espace jeux</a><div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub">Choisis une scène. Trouve les objets, puis dis leur nom pour gagner des étoiles !</div></div></div>${sceneCards(SCENES.map(s=>s.id))}`;return}
  if(view.name==="hidden"){main.innerHTML=hiddenView(view.id);mountHidden(view.id);return}
  if(view.name==="diff"){main.innerHTML=hiddenView(view.id);mountHidden(view.id,"diff");return}
  if(view.name==="jeux"){main.innerHTML=gamesHub();return}
  if(view.name==="jeucours"){main.innerHTML=coursePick();return}
  if(view.name==="mots"){main.innerHTML=motsHome();return}
  if(view.name==="mot"){main.innerHTML=`<a class="back" href="#mots">← Jeux de mots</a><div class="mhost" id="mh"></div>`;mountMots(view.g,view.t,$("#mh"));return}
  if(view.name==="gen"){main.innerHTML=genView(view.id,view.n);$("#genb").onclick=()=>genLesson(view.id,view.n);return}
  if(view.name==="world"){const d=WORLDS[view.id];main.innerHTML=`<a class="back" href="#jeux">← Les jeux</a><div class="wfull" id="wf"></div><h2 style="margin-top:22px">Autres jeux 3D</h2>${worldCards(Object.keys(WORLDS).filter(k=>k!==view.id))}`;mountWorld($("#wf"),view.id);return}
  if(view.name==="fleu"){mountFleUnit(main,view.id);return}
  if(view.name==="home")main.innerHTML=home();
  else if(view.name==="subject")main.innerHTML=subject(view.id);
  else {main.innerHTML=lesson(view.id,view.n);mountTab()}
}

// ===== Vues =====
function allLessons(s){return s.sem.flatMap(x=>x[1])}
function starsTotal(){return Object.values(S.best).reduce((a,b)=>a+starsFor(b),0)+Object.values(S.games).reduce((a,g)=>a+Object.keys(g).length,0)}
function starsFor(n){return n>=18?3:n>=14?2:n>=10?1:0}
function home(){
  const nm=`Bonjour ${esc(S.name)} !`;
  return `<section class="hello"><div class="lumi-girl hero">${emo("👧🏽","girl")}</div><div><h1>${tt(`مرحبا ${esc(S.name)}! اختر مادتك.`,`${nm} Choisis ta matière.`)}</h1>
  <p>${tt("السنة الأولى إعدادي. في كل درس: فيديو يتكلم، وقراءة للاستماع، وأنشودة، وألعاب، وامتحان صغير.","Programme de 1ère année collège. Chaque leçon a une vidéo qui parle, une lecture à écouter, une chanson, des jeux et un petit examen.")}</p></div>
  <a class="stars-box" href="#album"><b>⭐ ${S.stars||0}</b><small>${tt(`نجمة · ${S.stickers.length} رسوم 📒`,`étoiles · ${S.stickers.length} dessins`)}</small></a></section>
  <a class="fle-banner" href="#jeux" style="background:linear-gradient(120deg,#4C5BD4,#8E5BD8)"><span class="fle-ico">🎮</span><span><b>${tt("الألعاب","Les jeux")}</b><small>${tt("كل الألعاب هنا: الدرس باللعب، ابحث وجد، ألعاب الكلمات، ألعاب ثلاثية الأبعاد…","Tous les jeux sont ici : cours en jeu, cherche et trouve, jeux de mots, jeux 3D…")}</small></span><span class="go" style="color:#4C5BD4">${ts("العب ▶","Jouer ▶")}</span></a>
  <a class="fle-banner" href="#l-anglais-6" style="background:linear-gradient(120deg,#1e3a8a,#16a34a)"><span class="fle-ico">📝</span><span><b>${tt("تمارين الأستاذ","Exercices du prof")}</b><small>${tt("امتحان الأستاذ في الإنجليزية مع الشرح، وتمارين الفرنسية","L'examen d'anglais du prof expliqué (30 points), et les fiches de français")}</small></span></a>
  <h2 class="sec">📚 ${tt("موادي","Mes matières")}</h2>
  <div class="grid">${SUBJECTS.map(s=>{const L=allLessons(s);const ready=L.filter((_,i)=>LESSONS[s.id+"-"+i]).length;const done=L.filter((_,i)=>S.best[s.id+"-"+i]!=null).length;
    return `<a class="subj" href="#m-${s.id}" style="--c:${s.c}"><div class="ico">${s.ico}</div><h3>${esc(s.name)}</h3>
    <small>${L.length} ${ts("درسا","leçons")} · ${done} ${ts("امتحان ناجح","examens réussis")}</small>
    <div class="meter"><span style="width:${Math.round(100*done/L.length)}%"></span></div></a>`}).join("")}</div>
  <p class="noteline" style="text-align:center;margin-top:24px"><a href="#enfant">👤 ${ts("تغيير الطفل","Changer d'enfant")}</a> · <a href="#parents">👨‍👩‍👧 ${ts("فضاء الآباء","Espace parents")}</a></p>
  `;
}
function subject(id){
  const s=SUB(id);let i=0;
  return `<a class="back" href="#accueil">← ${ts("كل المواد","Toutes les matières")}</a>
  <div class="shead" style="--c:${s.c}"><div class="ico">${s.ico}</div><div><h1>${esc(s.name)}</h1><small style="color:var(--soft)">${ts("السنة الأولى إعدادي","1ère année collège")}</small></div></div>
  ${s.sem.map(([nm,ls])=>`<div class="sem" ${isAr(nm)?'dir="rtl"':""}>${esc(nm)}</div><div class="lessons">${ls.map(t=>{const n=i++;const ok=!!LESSONS[id+"-"+n];const b=S.best[id+"-"+n];
     const rtl=isAr(t)?' dir="rtl"':"";
     return ok?`<a class="les ready" style="--c:${s.c}" href="#l-${id}-${n}"${rtl}><span class="n">${n+1}</span><span class="t">${esc(t)}${LESSONS[id+"-"+n].gen?' <small class="det">✨ préparée par le prof IA</small>':""}${s.detail&&s.detail[n]?`<small class="det">${esc(s.detail[n])}</small>`:""}</span><span class="tag">${b!=null?"★".repeat(starsFor(b))+" "+b+"/20":ts("ابدأ ▶","Prête ▶")}</span></a>`
              :`<a class="les soon" href="#l-${id}-${n}"${rtl}><span class="n">${n+1}</span><span class="t">${esc(t)}${s.detail&&s.detail[n]?`<small class="det">${esc(s.detail[n])}</small>`:""}</span><span class="tag">✨ À préparer</span></a>`}).join("")}</div>`).join("")}
  `;
}
const TAB_AR={prof:"تمارين الأستاذ",aventure:"الدرس باللعب",video:"الفيديو",ecouter:"استمع",carte:"الخريطة الذهنية",chanson:"الأنشودة",jeux:"الألعاب",monde:"لعبة ثلاثية الأبعاد",examen:"الامتحان"};
const TABS=[["prof","📝","Exercices du prof"],["aventure","🗺️","Le cours en jeu"],["video","▶","Vidéo"],["ecouter","🔊","Écouter"],["carte","✺","Carte mentale"],["chanson","♪","Chanson"],["jeux","★","Jeux"],["monde","🎮","Jeu 3D"],["examen","✎","Examen"]];
function lesson(id,n){
  const s=SUB(id),L=LESSONS[id+"-"+n];const rtl=s.lang==="ar"||arMode(id)?' dir="rtl"':"";
  return `<a class="back" href="#m-${id}">← ${esc(s.name)}</a>
  <div class="lhead" style="--c:${s.c}"${rtl}><small>Leçon ${n+1} · ${esc(s.name)}${L.gen?" · ✨ préparée par le prof IA, à faire relire par un adulte":""}</small><h1>${esc(L.title)}</h1>${L.page?`<small class="manp">📖 ${esc(L.page)}</small>`:""}</div>
  <div class="tabs" role="tablist">${TABS.filter(t=>(t[0]!=="monde"||L.worlds)&&(t[0]!=="prof"||L.devoir)).map(([k,i,t])=>`<button class="tab" role="tab" aria-selected="${tab===k}" data-tab="${k}"><span class="k">${i}</span><span>${tt(TAB_AR[k],t)}</span></button>`).join("")}</div>
  <div class="panel" id="panel" style="--c:${s.c}"></div>`;
}
document.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");if(t){tab=t.dataset.tab;stopSpeak();stopSong();disposeWorld();document.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-selected",b===t));mountTab()}});

function mountTab(){
  let s=SUB(view.id),L=LESSONS[view.id+"-"+view.n];const key=view.id+"-"+view.n,P=$("#panel");
  if(AR_SUBJ.includes(view.id)&&!["chanson","jeux","examen","prof"].includes(tab)){L=arabize(L,s);if(arMode(view.id))s={...s,lang:"ar"}}
  ({prof:mountDevoir,aventure:mountAdventure,video:mountVideo,ecouter:mountRead,carte:mountMap,monde:mountWorldTab,chanson:mountSong,jeux:mountGen,examen:mountExamLv})[tab](P,s,L,key);trackRoute();
}

// ----- Vidéo -----
function visHTML(v,lang){
  const d=i=>`style="--d:${i}"`;
  if(v.k==="big")return `<div class="big s">${esc(v.v)}</div>`;
  if(v.k==="steps")return v.v.map((x,i)=>(i?`<span class="arrow s" ${d(i-.5)}>→</span>`:"")+`<span class="stepbox s${i===v.v.length-1?" last":""}" ${d(i)}>${esc(x)}</span>`).join("");
  if(v.k==="cards")return v.v.map((c,i)=>`<div class="card s" style="--d:${i*.6};--k:${c[2]}"><b>${esc(c[0])}</b><span>${esc(c[1])}</span></div>`).join("");
  if(v.k==="bars")return `<div class="bars">${v.v.map(b=>`<div class="bar"><b>${esc(b[0])} · ${b[1]} %</b><div class="tr"><span style="--w:${b[1]}%;background:${b[2]}"></span></div></div>`).join("")}</div>`;
  if(v.k==="cycle")return `<div class="cyc">${v.v.map((x,i)=>(i?`<span class="arrow s" ${d(i-.5)}>→</span>`:"")+`<span class="stepbox s" ${d(i)}>${esc(x)}</span>`).join("")}<span class="arrow s" ${d(v.v.length)}>↺</span></div>`;
  return "";
}
const PLAYTX=()=>"▶ "+ts("شاهد","Regarder");
function mountVideo(P,s,L){
  let i=0,auto=false;const lang=s.lang;const rtl=lang==="ar"?' dir="rtl"':"";
  P.innerHTML=`<div class="screen" id="scr" style="--c:${s.c}"${rtl}></div>
  <div class="ctrl"><button class="ghost" id="vprev" aria-label="Précédent">◀</button>
   <button class="play" id="vplay" style="--c:${s.c}">${PLAYTX()}</button>
   <div class="dots" id="vdots">${L.video.map((_,k)=>`<button aria-label="Étape ${k+1}" data-k="${k}"></button>`).join("")}</div>
   <button class="ghost" id="vnext" aria-label="Suivant">▶</button></div>
  <p class="noteline">${tt("الفيديو يتقدم وحده عندما تضغط على «شاهد». يمكنك أيضا التقدم خطوة بخطوة.","La vidéo avance toute seule quand tu appuies sur « Regarder ». Tu peux aussi aller étape par étape.")}</p>`;
  const show=k=>{i=Math.max(0,Math.min(L.video.length-1,k));const sl=L.video[i];
    $("#scr").innerHTML=`<div class="lumi-girl vid">${emo("👧🏽","girl")}</div><h2>${esc(sl.t)}</h2>${sl.img?`<div class="phs">${sl.img.map(figHTML).join("")}</div>`:""}<div class="vis">${visHTML(sl.vis,lang)}</div>
     <div class="cap" id="cap">${readable(sl.say,lang)}${sl.fr?`<div class="noteline">${esc(sl.fr)}</div>`:""}</div>${arLine(sl.sayAr,"capar")}${frLine(sl.sayFr,"capfr")}
     ${sl.ar?`<div class="chips">${sl.ar.map(a=>`<span class="chip">${esc(a[0])} = <span class="ar">${esc(a[1])}</span></span>`).join("")}</div>`:""}`;
    bindAr($("#scr"));[...$("#vdots").children].forEach((b,k)=>b.classList.toggle("on",k<=i));};
  const hi={fr:`Salut ${S.name} ! On commence.`,ar:`مرحبا ${S.name}! هيا نبدأ.`,en:`Hello ${S.name}! Let's start.`};
  const playCur=()=>{if(i===0&&!playCur.g){playCur.g=1;speakSeq([{text:hi[lang]||hi.fr}],lang,playCur);return}readEl($("#cap"),lang,()=>{const nx=()=>{if(auto&&i<L.video.length-1){setTimeout(()=>{if(auto){show(i+1);playCur()}},700)}else{auto=false;$("#vplay").textContent=PLAYTX()}};const ar=()=>{if(auto&&S.readAr&&$("#capar"))readEl($("#capar"),"ar",nx);else nx()};if(auto&&$("#capfr"))readEl($("#capfr"),"fr",ar);else ar()})};
  $("#vplay").onclick=()=>{if(auto){auto=false;stopSpeak();$("#vplay").textContent=PLAYTX()}else{auto=true;$("#vplay").textContent="❚❚ Pause";if(i===L.video.length-1&&$("#vplay").dataset.end)show(0);show(i);playCur()}};
  $("#vprev").onclick=()=>{auto=false;stopSpeak();$("#vplay").textContent=PLAYTX();show(i-1)};
  $("#vnext").onclick=()=>{auto=false;stopSpeak();$("#vplay").textContent=PLAYTX();show(i+1)};
  $("#vdots").onclick=e=>{const b=e.target.closest("[data-k]");if(b){auto=false;stopSpeak();$("#vplay").textContent=PLAYTX();show(+b.dataset.k)}};
  show(0);
}

// ----- Écouter -----
function mountRead(P,s,L){
  const lang=L.essLang||s.lang;const rtl=lang==="ar"?' dir="rtl"':"";
  P.innerHTML=`<div class="ctrl" style="margin:0 0 14px"><button class="play" id="rall" style="--c:${s.c}">🔊 ${ts("استمع إلى الكل","Tout écouter")}</button><span class="noteline" style="margin:0">ou appuie sur 🔊 à côté d'une phrase</span></div>
  <ol class="ess"${rtl}>${L.ess.map((t,k)=>`<li style="--c:${s.c}"><span class="b">${k+1}</span><span class="tx" id="e${k}">${readable(t,lang)}${L.essAr?arLine(L.essAr[k],"ea"+k):""}${L.essFr?frLine(L.essFr[k],"ef"+k):""}</span><button class="say" data-e="${k}" aria-label="Écouter la phrase ${k+1}">🔊</button></li>`).join("")}</ol>
  ${L.essAr&&S.trAr?`<div class="ctrl"><button class="ghost" id="rallar">🔊 Tout écouter en arabe</button></div>`:""}
  ${lang==="fr"&&S.color==="sons"?sonsLegend():""}
  ${L.lex?`<div class="lex"><h3>${L.lexT||"Mots clés en arabe"}</h3><div class="chips" style="--c:${s.c}">${L.lex.map(a=>`<span class="chip">${esc(a[0])} = <span class="ar">${esc(a[1])}</span></span>`).join("")}</div></div>`:""}`;
  $("#rall").onclick=()=>{const items=[];L.ess.forEach((_,k)=>{$("#e"+k).querySelectorAll(`.sent[data-lang="${lang}"]`).forEach(x=>{if(!x.closest(".tr-ar"))items.push({text:x.textContent,el:x})});const ea=$("#ea"+k);if(S.readAr&&ea)ea.querySelectorAll('.sent[data-lang="ar"]').forEach(x=>items.push({text:x.textContent,el:x,lang:"ar"}));const ef=$("#ef"+k);if(ef)ef.querySelectorAll('.sent[data-lang="fr"]').forEach(x=>items.push({text:x.textContent,el:x,lang:"fr"}))});speakSeq(items,lang)};bindAr(P);if($("#rallar"))$("#rallar").onclick=()=>readEl(P.querySelector(".ess"),"ar");
  const ims=L.video.flatMap(v=>v.img||[]);if(ims.length)P.insertAdjacentHTML("beforeend",`<details class="credits"><summary>Crédits des photos</summary><ul>${ims.map(im=>`<li><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(im.f.replace(/ /g,"_"))}" target="_blank" rel="noopener">${esc(im.f)}</a> · ${esc(im.by||"Wikimedia Commons")} · ${esc(im.lic)}</li>`).join("")}</ul></details>`);
  P.querySelectorAll("[data-e]").forEach(b=>b.onclick=()=>{const k=b.dataset.e,ef=$("#ef"+k);if(!ef)return readBi($("#e"+k),$("#ea"+k),lang);
    speakSeq([...[...$("#e"+k).querySelectorAll(`.sent[data-lang="${lang}"]`)].filter(x=>!x.closest(".tr-ar")).map(x=>({text:x.textContent,el:x})),...[...ef.querySelectorAll('.sent[data-lang="fr"]')].map(x=>({text:x.textContent,el:x,lang:"fr"}))],lang)});
}

// ----- Chanson -----
let songTimer=null,songOn=false;
function stopSong(){songOn=false;clearTimeout(songTimer)}
function loopTune(tune){if(!songOn)return;const bt=.42;tune.forEach((m,k)=>{tone(midi(m),k*bt,bt*.9,.05);if(k%4===0)tone(midi(m-12),k*bt,bt*1.8,.035,"sine")});songTimer=setTimeout(()=>loopTune(tune),tune.length*bt*1000)}
function mountSong(P,s,L){
  const lang=s.lang;const rtl=lang==="ar"?' dir="rtl"':"";
  P.innerHTML=`<div class="song" style="--c:${s.c}"${rtl}><div class="notes" id="nts" hidden><span>♪</span><span>♫</span><span>♪</span></div>
   ${L.song.map((l,k)=>`<div class="line" id="sl${k}">${esc(l)}</div>`).join("")}
   <div class="ctrl" style="justify-content:center"><button class="play" id="sp" style="--c:${s.c}">♪ Chanter</button><button class="ghost" id="sr">Chanter 2 fois</button></div>
   <p class="noteline">La musique joue et la voix dit chaque ligne. Répète après elle !</p></div>`;
  const run=times=>{stopSpeak();stopSong();songOn=true;$("#nts").hidden=false;loopTune(s.tune);
    const items=[];for(let t=0;t<times;t++)L.song.forEach((l,k)=>items.push({text:l,el:$("#sl"+k)}));
    document.querySelectorAll(".line").forEach(e=>e.classList.remove("now"));
    // .sent.now est utilisé par speakSeq : on mappe sur .line
    items.forEach(it=>it.el.classList.add("sent"));
    speakSeq(items,lang,()=>{stopSong();$("#nts").hidden=true;$("#sp").textContent="♪ Chanter"},.95);};
  $("#sp").onclick=()=>{if(songOn){stopSong();stopSpeak();$("#nts").hidden=true;$("#sp").textContent="♪ Chanter"}else{$("#sp").textContent="■ Arrêter";run(1)}};
  $("#sr").onclick=()=>{$("#sp").textContent="■ Arrêter";run(2)};
}

// ----- Jeux -----
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const VF={fr:["Vrai","Faux"],ar:["صحيح","خطأ"],en:["True","False"]};
const BRAVO={fr:["Bravo !","Super !","Excellent !","Génial !"],ar:["أحسنت!","رائع!","ممتاز!"],en:["Well done!","Great!","Super!"]};
function bravo(lang){const br=BRAVO[lang]||BRAVO.fr;return br[Math.floor(Math.random()*br.length)].replace(/ ?([!！])$/," "+S.name+" !")}
const AGAIN={fr:"Presque ! Essaie encore.",ar:"حاول مرة أخرى!",en:"Try again!"};
function mountGames(P,s,L,key){
  let gi=0;const lang=s.lang;const rtl=lang==="ar"?' dir="rtl"':"";
  const won=()=>S.games[key]||(S.games[key]={});
  const GL=L.words&&L.words.length?[{type:"say",title:lang==="ar"?"🎤 كرر الكلمات واربح النجوم":"🎤 Répète les mots et gagne des étoiles",words:L.words},...L.games]:L.games;
  const draw=()=>{const g=GL[gi];
    P.innerHTML=`<div class="gtop"><div class="glist" id="gl">${GL.map((x,k)=>`<button class="${k===gi?"on":""} ${won()[k]?"won":""}" data-g="${k}">${x.type==="say"?"🎤 Répète":"Jeu "+(GL[0].type==="say"?k:k+1)}</button>`).join("")}</div></div>
     <div${rtl}><div class="gtop"><h3>${esc(g.title)}</h3></div><div id="gb"></div><div class="fb" id="fb" aria-live="polite"></div></div>
     <div class="ctrl"><button class="ghost" id="grs">↻ Recommencer</button><span style="flex:1"></span><button class="play" id="gnx" style="--c:${s.c}">Jeu suivant ▶</button></div>
     <div class="more"><h3>Plus de jeux pour cette matière</h3>${L.words&&lang!=="ar"?`<button class="play" id="lmel" style="--c:#DB3F8D">🔤 Mot mélangé avec les mots de la leçon</button>`:""}${sceneCards(SCENE_FOR[s.id]||["chambre"])}</div>`;
    if($("#lmel"))$("#lmel").onclick=()=>{stopSpeak();$("#gb").innerHTML="";mountMots("melange",null,$("#gb"),L.words,lang);$("#gb").scrollIntoView({behavior:"smooth"})};
    $("#gl").onclick=e=>{const b=e.target.closest("[data-g]");if(b){gi=+b.dataset.g;draw()}};
    $("#grs").onclick=draw;$("#gnx").onclick=()=>{gi=(gi+1)%GL.length;draw()};
    const win=()=>{chime();const br=bravo(lang);$("#fb").className="fb ok";$("#fb").textContent="★ "+br;sayOne(br,lang);won()[gi]=1;save();if(g.type!=="say")addStars(1);const b=$("#gl").children[gi];b&&b.classList.add("won")};
    const miss=()=>{buzz();$("#fb").className="fb ko";$("#fb").textContent=AGAIN[lang]||AGAIN.fr};
    const gb=$("#gb");
    if(g.type==="say"){let k=0;const trLang=lang==="ar"?"fr":"ar";
      const step=()=>{if(k>=g.words.length){win();return}const [w,tr,e]=g.words[k];
        gb.innerHTML=`<p class="noteline" style="margin-top:0">Mot ${k+1} sur ${g.words.length} · chaque mot répété = ⭐</p>
         <div class="saycard">${emo(e||"⭐","emo")}<div class="lw"${lang==="ar"?' dir="rtl"':""}>${w.split(" ").map(x=>colorWord(x,lang)).join(" ")}</div>${tr?`<div class="tr${trLang==="ar"?" ar":""}"${trLang==="ar"?' dir="rtl"':""}>${esc(tr)}</div>`:""}</div><div id="rp"></div>`;
        speakSeq([{text:w},...(tr?[{text:tr,lang:trLang}]:[]),{text:w}],lang);
        repeatBlock($("#rp"),w,lang,()=>{chime();addStars(1);$("#fb").className="fb ok";$("#fb").textContent="⭐ "+bravo(lang);k++;setTimeout(step,1100)})};
      step()}
    if(g.type==="quiz"||g.type==="vf"){
      const ch=g.vf?(VF[lang]||VF.fr):g.ch;
      gb.innerHTML=`<div class="q"><span class="tx" id="qq">${readable(g.q,lang)}${arLine(g.qAr,"qqa")}</span><button class="say" id="qs" aria-label="Écouter">🔊</button></div>
       <div class="choices">${shuffle(ch.map((c,k)=>[c,k])).map(([c,k])=>`<button class="ch" data-k="${k}">${esc(c)}${S.trAr&&g.chAr?`<small class="ar chs">${esc(g.chAr[k])}</small>`:""}</button>`).join("")}</div>`;bindAr(gb);
      $("#qs").onclick=()=>readBi($("#qq"),$("#qqa"),lang);
      gb.querySelectorAll(".ch").forEach(b=>b.onclick=()=>{if(+b.dataset.k===g.a){b.classList.add("good");gb.querySelectorAll(".ch").forEach(x=>x!==b&&x.classList.add("done"));win()}else{b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");miss()}});
    }
    if(g.type==="match"){
      let sel=null,left=0;const R=shuffle(g.pairs.map((p,k)=>[p[1],k]));
      gb.innerHTML=`<p class="noteline" style="margin-top:0">Touche un mot à gauche, puis sa réponse à droite.</p>
       <div class="match"><div class="col">${g.pairs.map((p,k)=>`<button class="ch" data-l="${k}">${esc(p[0])}</button>`).join("")}</div>
       <div class="col">${R.map(([t,k])=>`<button class="ch" data-r="${k}">${esc(t)}</button>`).join("")}</div></div>`;
      gb.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{gb.querySelectorAll("[data-l]").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");sel=+b.dataset.l;sayOne(b.textContent,isAr(b.textContent)?"ar":lang)});
      gb.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{if(sel==null)return;const L2=gb.querySelector(`[data-l="${sel}"]`);
        if(+b.dataset.r===sel){[L2,b].forEach(x=>{x.classList.remove("sel");x.classList.add("good","done")});sel=null;left++;tone(midi(76),0,.2,.08);if(left===g.pairs.length)win()}
        else{b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),500);miss()}});
    }
    if(g.type==="order"){
      const line=[];
      gb.innerHTML=`<div class="q"><span class="tx" id="qq">${readable(g.q,lang)}</span><button class="say" id="qs">🔊</button></div>
       <div class="order-line" id="ol"></div><div class="order-bank" id="ob">${shuffle(g.items.map((t,k)=>[t,k])).map(([t,k])=>`<button class="ch" data-k="${k}">${esc(t)}</button>`).join("")}</div>`;
      $("#qs").onclick=()=>readBi($("#qq"),$("#qqa"),lang);
      $("#ob").onclick=e=>{const b=e.target.closest(".ch");if(!b)return;$("#ol").appendChild(b);line.push(+b.dataset.k);
        if(line.length===g.items.length){if(line.every((v,k)=>v===k)){$("#ol").querySelectorAll(".ch").forEach(x=>x.classList.add("good"));win()}else{miss();setTimeout(draw,1300)}}};
    }
    if(g.type==="sort"){
      let k=0;const items=shuffle(g.items);
      const step=()=>{if(k>=items.length){win();return}const it=items[k];
        gb.innerHTML=`<p class="noteline" style="margin-top:0">Objet ${k+1} sur ${items.length}</p><div class="card-item" id="ci">${esc(it[0])}</div>
         <div class="bins">${g.bins.map((b,j)=>`<button class="ch" data-b="${j}">${esc(b)}</button>`).join("")}</div>`;
        sayOne(it[0],isAr(it[0])?"ar":lang);
        gb.querySelectorAll("[data-b]").forEach(b=>b.onclick=()=>{if(+b.dataset.b===it[1]){b.classList.add("good");tone(midi(76),0,.2,.08);$("#fb").textContent="";k++;setTimeout(step,500)}else{b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");miss()}});};
      step();
    }
  };
  draw();
}

// ----- Examen -----
function mountExam(P,s,L,key){
  const lang=s.lang;const rtl=lang==="ar"?' dir="rtl"':"";let Q=L.exam;let k=0;const ans=[];
  const pickQ=()=>{Q=S.examMax&&L.exam.length>S.examMax?shuffle(L.exam).slice(0,S.examMax):L.exam};
  const intro=()=>{P.innerHTML=`<div class="exam-res"><h2>Petit examen</h2><p>${Q.length} questions · pas de chrono · tu vois ta note à la fin.</p>
    ${S.best[key]!=null?`<p>Ta meilleure note : <b>${S.best[key]}/20</b> ${"★".repeat(starsFor(S.best[key]))}</p>`:""}
    <button class="play" id="xs" style="--c:${s.c}">Commencer ▶</button></div>`;$("#xs").onclick=()=>{pickQ();k=0;ans.length=0;q()}};
  const q=()=>{const x=Q[k];const ch=x.vf?(VF[lang]||VF.fr):x.ch;
    P.innerHTML=`<div class="gtop"><span class="noteline" style="margin:0">Question ${k+1} / ${Q.length}</span><div class="progress"><span style="width:${100*k/Q.length}%"></span></div></div>
     <div${rtl}><div class="q"><span class="tx" id="qq">${readable(x.q,lang)}${arLine(x.qAr,"qqa")}</span><button class="say" id="qs" aria-label="Écouter la question">🔊</button><button class="say" id="qa" aria-label="Écouter les réponses">🔊…</button></div>
     <div class="choices">${ch.map((c,j)=>`<button class="ch" data-k="${j}">${esc(c)}${S.trAr&&(x.chAr||(x.vf&&x.qAr))?`<small class="ar chs">${esc(x.vf?["صحيح","خطأ"][j]:x.chAr[j])}</small>`:""}</button>`).join("")}</div></div>`;bindAr(P);
    $("#qs").onclick=()=>readBi($("#qq"),$("#qqa"),lang);
    $("#qa").onclick=()=>speakSeq([{text:x.q,el:$("#qq")},...ch.map(c=>({text:c}))],lang);
    P.querySelectorAll(".ch").forEach(b=>b.onclick=()=>{stopSpeak();b.classList.add("sel");ans[k]=+b.dataset.k;setTimeout(()=>{k++;k<Q.length?q():res()},350)});};
  const res=()=>{const good=Q.filter((x,j)=>ans[j]===x.a).length;const note=Math.round(20*good/Q.length*2)/2;
    if(S.best[key]==null||note>S.best[key])S.best[key]=note;save();
    const st=starsFor(note);if(st){chime();addStars(st)}
    const msg=note>=16?`Excellent travail, ${S.name} !`:note>=10?`Bien joué ${S.name} ! Tu peux encore t'améliorer.`:`Ce n'est pas grave, ${S.name}. Regarde la vidéo encore une fois, puis réessaie.`;
    const wrong=Q.map((x,j)=>[x,j]).filter(([x,j])=>ans[j]!==x.a);
    P.innerHTML=`<div class="exam-res"><div class="note">${String(note).replace(".",",")}/20</div><div class="starsrow">${"★".repeat(st)}${"☆".repeat(3-st)}</div><p>${msg}</p>
     ${wrong.length?`<div class="review"${rtl}><b>À revoir :</b>${wrong.map(([x])=>{const ch=x.vf?(VF[lang]||VF.fr):x.ch;return `<div>${esc(x.q)}<br><b style="color:var(--ok)">✔ ${esc(ch[x.a])}</b></div>`}).join("")}</div>`:""}
     <div class="ctrl" style="justify-content:center"><button class="play" id="xr" style="--c:${s.c}">↻ Refaire l'examen</button><button class="ghost" id="xv">Revoir la vidéo</button></div></div>`;
    sayOne(msg,"fr");
    $("#xr").onclick=()=>{pickQ();k=0;ans.length=0;q()};$("#xv").onclick=()=>document.querySelector('[data-tab="video"]').click();};
  intro();
}

// ===== Réglages =====
function toast(t){const e=$("#toast");e.textContent=t;e.hidden=false;clearTimeout(e._t);e._t=setTimeout(()=>e.hidden=true,3500)}
function drawSettings(){
  const seg=(k,opts)=>`<div class="seg">${opts.map(([v,l])=>`<button data-set="${k}" data-v="${v}" aria-pressed="${String(S[k])===String(v)}">${l}</button>`).join("")}</div>`;
  $("#drawer").innerHTML=`<div style="display:flex;align-items:center"><h2 style="flex:1">Réglages de lecture</h2><button class="ghost" id="dclose" aria-label="Fermer">✕</button></div>
   <div class="row"><label for="nm">Ton prénom</label><input type="text" id="nm" value="${esc(S.name)}" placeholder="Ex. : Salma"></div>
   <div class="row"><span class="lb">Taille des lettres</span>${seg("fs",[[18,"A"],[20,"A+"],[23,"A++"],[26,"A+++"]])}</div>
   <div class="row"><span class="lb">Espace entre les lettres</span>${seg("space",[["normal","Normal"],["large","Large"]])}</div>
   <div class="row"><span class="lb">Couleur du fond</span><div class="seg">${[["bleu","#EAF1F8"],["creme","#FBF4E2"],["vert","#E6F4EA"],["rose","#FBEAEE"]].map(([v,c])=>`<button class="sw" data-set="tint" data-v="${v}" aria-pressed="${S.tint===v}" style="background:${c}" aria-label="Fond ${v}"></button>`).join("")}</div></div>
   <div class="row"><span class="lb">Couleurs dans les mots (français)</span>${seg("color",[["sons","Sons (on, oi, ou…)"],["syl","Syllabes"],["none","Aucune"]])}</div>
   <div class="row"><span class="lb">Langue des explications · لغة الشرح</span>${seg("l1",[["ar","العربية"],["fr","Français"]])}</div>
   <div class="row"><span class="lb">2e langue (mots techniques) · اللغة الثانية</span>${seg("l2",[["fr","Français"],["en","English"],["ar","العربية"]].filter(x=>x[0]!==S.l1))}</div>
   <div class="row"><span class="lb">Famille</span><div class="ctrl" style="margin:0"><a class="ghost" href="#enfant" id="dkid">👤 Changer d'enfant</a><a class="ghost" href="#parents" id="dpar">👨‍👩‍👧 Espace parents</a></div></div>
   <div class="row"><span class="lb">Traduction en arabe (sciences)</span>${seg("trAr",[[true,"Afficher"],[false,"Cacher"]])}</div>
   <div class="row"><span class="lb">La vidéo lit aussi en arabe</span>${seg("readAr",[[true,"Oui"],[false,"Non"]])}</div>
   <div class="row"><span class="lb">Questions par examen</span>${seg("examMax",[[6,"6 (court)"],[0,"Toutes"]])}</div>
   <div class="row"><span class="lb">Rythme 20 min travail / 5 min pause</span>${seg("pomo",[[true,"Oui"],[false,"Non"]])}</div>
   <div class="row"><span class="lb">Prof IA (Ollama)</span>
     <input type="text" id="olu" value="${esc(S.ollama)}" aria-label="Adresse Ollama">
     <div class="seg" id="olm">${S.model?`<button aria-pressed="true">${esc(S.model)}</button>`:'<small class="noteline" style="margin:0">Aucun modèle choisi</small>'}</div>
     <button class="ghost" id="olt">Tester et choisir le modèle</button><small class="noteline" style="margin:0" id="olr">Ollama doit tourner sur l'ordinateur. Voir le guide dans le fichier.</small></div>
   <div class="row"><span class="lb">Les voix (arabe, français)</span><a class="ghost" href="#voix" onclick="closeSettings()">🔊 Vérifier et réparer les voix</a></div>
   <div class="row"><span class="lb">Vitesse de la voix</span>${seg("rate",[["lente","Lente"],["normale","Normale"],["rapide","Rapide"]])}</div>
   <div class="row"><span class="lb">Règle de lecture</span>${seg("ruler",[[true,"Oui"],[false,"Non"]])}<small class="noteline" style="margin:0">Une bande jaune suit ta souris ou ton doigt pour garder la ligne.</small></div>
   ${offlineBlock()}`;
  $("#dclose").onclick=closeSettings;offlineBind();
  $("#dkid").onclick=$("#dpar").onclick=()=>closeSettings();
  $("#nm").oninput=e=>{S.name=e.target.value.slice(0,30).trim()||S.name;const c=curChild();if(c){c.name=S.name;saveAcc()}save()};
  $("#olu").onchange=e=>{S.ollama=e.target.value.trim().replace(/\/$/,"");save()};
  $("#olt").onclick=testOllama;
}
function openSettings(){drawSettings();$("#drawer").hidden=false;$("#veil").hidden=false;$("#setb").setAttribute("aria-pressed","true")}
function closeSettings(){$("#drawer").hidden=true;$("#veil").hidden=true;$("#setb").setAttribute("aria-pressed","false");if(["home","fle","lesson","subject"].includes(view.name))render()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-set]");if(!b)return;const k=b.dataset.set;let v=b.dataset.v;
  if(v==="true")v=true;else if(v==="false")v=false;else if(k==="fs"||k==="examMax")v=+v;S[k]=v;if(k==="l1"||k==="l2")applyLang();save();applySettings();drawSettings();
  if((k==="color"||k==="trAr")&&view.name==="lesson")mountTab();if(k==="pomo")pomoReset();});
document.addEventListener("pointermove",e=>{if(S.ruler){$("#ruler").style.top=(e.clientY-20)+"px"}});

// ===== Démarrage =====
function start(){
  $("#setb").onclick=openSettings;$("#veil").onclick=()=>{if(!$("#ai").hidden)closeAI();else closeSettings()};
  $("#stopb").onclick=()=>{stopSpeak();stopSong();document.querySelectorAll("#sp").forEach(b=>b.textContent="♪ Chanter")};
  appInit();accInit();if(curChild()){const c=curChild();S.l1=S.l1||c.l1;S.l2=S.l2||c.l2;langFlags()}migrate3();mergeGen();starChip();applySettings();bumpStreak();pomoInit();aiInit();route();
}
