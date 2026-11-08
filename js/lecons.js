// ===== Leçons écrites à la main, en format court (plus besoin du prof IA) =====
// K("maths-1",{
//   v:[[titre, texte lu, texte en arabe, visuel, note]],   visuel : "texte" → grand ; ["a","b","c"] → étapes dans l'ordre ; [["a","b"],["c","d"]] → cartes
//   e:[phrases essentielles], ea:[les mêmes en arabe],
//   w:[[mot, traduction, emoji]], s:[4 lignes de chanson],
//   x:[[question, [bonne réponse, fausse, fausse], question en arabe, [choix en arabe]]  ou  [affirmation, true|false]],
//   g:[jeux en plus (sort, order…)] })
// La bonne réponse est écrite en premier : K la range à une place fixe tirée de la question.
const KC=["#2F7FE0","#2E9E62","#EF6C3A","#8E5BD8","#DB3F8D","#C99400"];
function kHash(s){let h=7;for(const c of s)h=(h*31+c.charCodeAt(0))>>>0;return h}
function kVis(v){if(Array.isArray(v)){if(Array.isArray(v[0]))return {k:"cards",v:v.map((c,i)=>[c[0],c[1],c[2]||KC[i%KC.length]])};return {k:"steps",v}}return {k:"big",v:v||"📘"}}
function kQ(x){if(typeof x[1]==="boolean"){const o={q:x[0],vf:true,a:x[1]?0:1};if(x[2])o.qAr=x[2];return o}
  const r=kHash(x[0])%x[1].length,put=a=>{const c=a.slice(1);c.splice(r,0,a[0]);return c};
  const o={q:x[0],ch:put(x[1]),a:r};if(x[2])o.qAr=x[2];if(x[3])o.chAr=put(x[3]);return o}
function K(key,d){const id=key.replace(/-\d+$/,""),n=+key.split("-").pop(),s=SUBJECTS.find(x=>x.id===id);if(!s||LESSONS[key])return;
  const ar=s.lang==="ar",title=s.sem.flatMap(x=>x[1])[n];
  const video=d.v.map(([t,say,sayAr,vis,fr])=>{const o={t,say,vis:kVis(vis)};if(sayAr)o.sayAr=sayAr;if(fr){if(s.lang==="en")o.sayFr=fr;else o.fr=fr}return o});
  const exam=d.x.map(kQ),games=[];
  exam.filter(q=>!q.vf).slice(0,3).forEach((q,i)=>games.push({type:"quiz",title:(ar?"سؤال ":"Question ")+(i+1),...q}));
  if(d.w&&d.w.length>=3)games.push({type:"match",title:ar?"صل الكلمة بترجمتها":"Relie le mot et sa traduction",pairs:d.w.slice(0,4).map(w=>[w[0],w[1]])});
  const st=video.find(v=>v.vis.k==="steps"&&v.vis.v.length>=3&&new Set(v.vis.v).size===v.vis.v.length);
  if(st)games.push({type:"order",title:st.t,q:ar?"رتب المراحل.":s.lang==="en"?"Put in order.":"Remets dans le bon ordre.",items:st.vis.v});
  (d.g||[]).forEach(g=>games.push(g));
  const L={title,video,ess:d.e,words:d.w||[],song:d.s,games,exam};
  if(d.ea)L.essAr=d.ea;if(s.lang==="en")L.essLang="fr";if(d.worlds)L.worlds=d.worlds;if(d.lex)L.lex=d.lex;if(d.d){L.devoir=d.d;if(d.tab)L.tab0=d.tab}if(d.p)L.page=d.p;
  LESSONS[key]=L}
