// ===== Voix : voix enregistrées si elles existent, sinon la voix de l'appareil =====
// Le problème : Chrome sur ordinateur n'a souvent AUCUNE voix arabe. Avant, les phrases arabes étaient
// sautées : on n'entendait que le français. Maintenant :
//  1. si le pack de voix enregistrées existe (assets/audio, fabriqué avec « npm run voix »), on joue le fichier ;
//  2. sinon on cherche la meilleure voix de l'appareil (arabe du Maroc en priorité) ;
//  3. sinon on ne saute plus : Lumi surligne les mots au rythme de la lecture, et un bandeau explique comment
//     avoir la voix arabe (page « Voix » dans les Réglages).
const AUDSET={};(function(){const A=window.AUDIO_INDEX||{};Object.keys(A).forEach(l=>{AUDSET[l]=new Set(Array.isArray(A[l])?A[l]:String(A[l]).split(" "))})})();
function vHash(t){let h=0x811c9dc5;for(const ch of t){h^=ch.codePointAt(0);h=Math.imul(h,16777619)>>>0}return h.toString(16).padStart(8,"0")}
const vNorm=t=>String(t).replace(/\s+/g," ").trim();
function clipFor(lang,text){const s=AUDSET[lang];if(!s||!s.size)return null;const h=vHash(vNorm(text));return s.has(h)?`assets/audio/${lang}/${h}.mp3`:null}
const hasPack=l=>!!(AUDSET[l]&&AUDSET[l].size);
// meilleure voix : arabe du Maroc, puis voix « naturelles » (Edge), puis Google, puis n'importe laquelle
pickVoice=function(lang){const p=(VL[lang]||lang),pre=p.slice(0,2).toLowerCase();const vs=voices.filter(v=>v.lang&&v.lang.toLowerCase().replace("_","-").startsWith(pre));
  const score=v=>(v.lang.replace("_","-")===p?4:0)+(pre==="ar"&&/MA/i.test(v.lang)?6:0)+(/Natural|Online|Neural/i.test(v.name)?5:0)+(/Google/i.test(v.name)?3:0)+(pre==="fr"&&/Eloise|Denise|Vivienne|Amélie|Audrey/i.test(v.name)?2:0)+(v.localService?1:0);
  return vs.sort((a,b)=>score(b)-score(a))[0]||null};
const hasVoice=l=>!!pickVoice(l);
let curAudio=null;
{const _stop=stopSpeak;stopSpeak=function(){if(curAudio){try{curAudio.pause()}catch(e){}curAudio=null}clearTimeout(stopSpeak.t);_stop()}}
function noVoiceNotice(lang){if(lang!=="ar"||sessionStorage.getItem("lumi-novoice"))return;try{sessionStorage.setItem("lumi-novoice","1")}catch(e){}
  if(document.querySelector(".novoice"))return;const d=document.createElement("div");d.className="novoice";d.setAttribute("role","status");
  d.innerHTML=`<span>🔇</span><span><b>Pas de voix arabe sur cet appareil.</b> L'arabe s'affiche et s'allume, mais sans le son. <span class="ar" dir="rtl">لا يوجد صوت عربي في هذا الجهاز.</span></span><a href="#voix" class="play" style="--c:#4C5BD4">Comment faire ?</a><button class="ghost" aria-label="Fermer">✕</button>`;
  d.querySelector("button").onclick=()=>d.remove();d.querySelector("a").onclick=()=>d.remove();document.body.appendChild(d)}
speakSeq=function(items,lang,onDone,rateMul=1){
  stopSpeak();const tok=++speakToken;if("speechSynthesis" in window&&!voices.length)loadVoices();
  const rate=()=>({lente:.85,normale:1.03,rapide:1.2}[S.rate]||1.03)*rateMul;let k=0;
  const fin=ws=>{document.body.classList.remove("talking");ws.forEach(w=>w.classList.remove("cur"))};
  const next=()=>{if(tok!==speakToken)return;document.querySelectorAll(".sent.now").forEach(e=>e.classList.remove("now"));
    if(k>=items.length){onDone&&onDone();return}
    const it=items[k++];if(!it||!it.text||!String(it.text).trim())return next();const L2=it.lang||lang;const ws=it.el?[...it.el.querySelectorAll(".w")]:[];if(it.el)it.el.classList.add("now");
    const silent=()=>{// pas de voix : on surligne les mots au rythme d'une lecture lente, puis on continue
      noVoiceNotice(L2);document.body.classList.add("talking");const words=String(it.text).split(/\s+/).length,ms=Math.min(9000,600+words*430/rate());let t0=Date.now();
      const step=()=>{if(tok!==speakToken)return;const f=(Date.now()-t0)/ms;if(f>=1){fin(ws);stopSpeak.t=setTimeout(next,150);return}
        if(ws.length){const cur=ws[Math.min(ws.length-1,Math.floor(f*ws.length))];ws.forEach(w=>w.classList.toggle("cur",w===cur))}stopSpeak.t=setTimeout(step,120)};step()};
    const tts=()=>{if(!("speechSynthesis" in window))return silent();const vv=pickVoice(L2);
      if(!vv&&voices.length&&L2!=="fr")return silent();
      const u=new SpeechSynthesisUtterance(it.text);u.lang=VL[L2]||L2;if(vv)u.voice=vv;u.rate=rate();u.pitch=1.05;
      u.onstart=()=>document.body.classList.add("talking");
      u.onboundary=e=>{if(tok!==speakToken||!ws.length)return;let cur=null;for(const w of ws){if(+w.dataset.i<=e.charIndex)cur=w;else break}ws.forEach(w=>w.classList.toggle("cur",w===cur))};
      u.onend=()=>{fin(ws);setTimeout(next,150)};u.onerror=()=>{fin(ws);setTimeout(next,50)};
      try{speechSynthesis.speak(u)}catch(e){silent()}};
    const clip=clipFor(L2,it.text);
    if(clip){const a=new Audio(clip);curAudio=a;a.playbackRate=Math.min(1.3,Math.max(.75,rate()));
      a.onplay=()=>document.body.classList.add("talking");
      a.ontimeupdate=()=>{if(!ws.length||!a.duration)return;const pos=a.currentTime/a.duration*String(it.text).length;let cur=null;for(const w of ws){if(+w.dataset.i<=pos)cur=w;else break}ws.forEach(w=>w.classList.toggle("cur",w===cur))};
      a.onended=()=>{if(curAudio===a)curAudio=null;fin(ws);setTimeout(next,120)};
      a.onerror=()=>{if(curAudio!==a)return;curAudio=null;tts()};
      a.play().catch(()=>{if(curAudio===a){curAudio=null;tts()}});return}
    tts()};
  setTimeout(next,60)};

// ----- page « Voix » : vérifier et réparer -----
function voixView(main){const ua=navigator.userAgent,edge=/Edg\//.test(ua),android=/Android/i.test(ua),ios=/iPhone|iPad/i.test(ua),win=/Windows/i.test(ua),mac=/Macintosh/i.test(ua);
  const row=(l,n)=>{const v=pickVoice(l),p=hasPack(l);return `<div class="vrow"><b>${n}</b><span>${p?"✅ voix enregistrée (pack)":v?"✅ "+esc(v.name):"❌ aucune voix"}</span><button class="ghost" data-vt="${l}">🔊 Tester</button></div>`};
  main.innerHTML=`<a class="back" href="#accueil">← Accueil</a><div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub">On vérifie les voix de cet appareil. <span class="ar" dir="rtl">نتحقق من الأصوات.</span></div></div></div>
   <div class="panel"><h2>🔊 Les voix de cet appareil</h2>${row("ar","العربية")}${row("fr","Français")}${row("en","English")}
   <p class="noteline">${voices.length} voix trouvées sur cet appareil.</p></div>
   <div class="panel" style="margin-top:14px"><h2>🛠️ Pour avoir la voix arabe</h2><ol class="vsteps">
    ${win||mac?`<li><b>Le plus simple : ouvre Lumi avec <u>Microsoft Edge</u>.</b> Edge a des voix arabes naturelles, même une voix du Maroc (Mouna, Jamal). ${edge?"Tu es déjà dans Edge : vérifie qu'internet marche, ces voix sont en ligne.":""}</li>`:""}
    ${win?`<li>Ou installe la voix dans Windows : <b>Paramètres → Heure et langue → Voix (Speech) → Ajouter des voix → Arabe</b>, puis redémarre le navigateur.</li>`:""}
    ${android?`<li>Sur Android : <b>Paramètres → Accessibilité → Synthèse vocale → Moteur Google → Installer des données vocales → العربية</b>. Ça marche ensuite sans internet.</li>`:""}
    ${ios?`<li>Sur iPhone : <b>Réglages → Accessibilité → Contenu énoncé → Voix → Arabe</b>, télécharge une voix.</li>`:""}
    <li><b>La meilleure solution : les voix intégrées de Lumi</b> (arabe du Maroc, français et anglais, sans internet ensuite). Elles se fabriquent une fois : automatiquement sur GitHub, ou par un double-clic sur <code>Fabriquer-les-voix-Mac.command</code> / <code>Fabriquer-les-voix-Windows.bat</code>. Les étapes sont dans le README.</li></ol>
   ${["ar","fr","en"].some(hasPack)?`<p>✅ Voix intégrées : ${["ar","fr","en"].map(l=>`${{ar:"arabe",fr:"français",en:"anglais"}[l]} ${hasPack(l)?AUDSET[l].size:0}`).join(" · ")} phrases.</p>`:""}</div>`;
  main.querySelectorAll("[data-vt]").forEach(b=>b.onclick=()=>{const l=b.dataset.vt;speakSeq([{text:{ar:"مرحبا، أنا لومي. هيا نتعلم معا!",fr:"Bonjour, je suis Lumi. On apprend ensemble !",en:"Hello, I am Lumi. Let's learn together!"}[l],lang:l}],l)})}
