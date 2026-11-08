// ===== Étoiles, album de dessins, lecture bilingue, leçons préparées par le prof IA =====
const STICKERS=[["🦄","la licorne","وحيد القرن"],["🐬","le dauphin","الدلفين"],["🦋","le papillon","الفراشة"],["🌈","l'arc-en-ciel","قوس قزح"],["🚀","la fusée","الصاروخ"],["🐼","le panda","الباندا"],["🌻","le tournesol","عباد الشمس"],["🎨","la palette","لوحة الألوان"],["🦁","le lion","الأسد"],["🧁","le petit gâteau","الكعكة"],["🏰","le château","القلعة"],["🦜","le perroquet","الببغاء"],["🐢","la tortue","السلحفاة"],["🎈","le ballon","البالون"],["🌙","la lune","القمر"],["🐱","le chat","القط"],["🍓","la fraise","الفراولة"],["🦒","la girafe","الزرافة"],["🐠","le poisson","السمكة"],["🌺","la fleur","الوردة"],["🐘","l'éléphant","الفيل"],["🎠","le manège","الدوامة"],["🐝","l'abeille","النحلة"],["🦚","le paon","الطاووس"],["🍉","la pastèque","البطيخ"],["🐧","le pingouin","البطريق"],["🎻","le violon","الكمان"],["🌍","la Terre","الأرض"],["🐪","le chameau","الجمل"],["👑","la couronne","التاج"]];
const PER=5; // étoiles pour un nouveau dessin
function migrate3(){if(!S.v4){if(S.rate==="lente")S.rate="normale";S.v4=1;save()}if(S.v3)return;S.readAr=true;S.trAr=true;S.stars=S.stars||0;S.stickers=S.stickers||[];S.gen=S.gen||{};
  [["svt-0","svt-1"],["islamique-0","islamique-4"]].forEach(([a,b])=>{["best","games"].forEach(k=>{if(S[k]&&S[k][a]!=null&&S[k][b]==null){S[k][b]=S[k][a];delete S[k][a]}})});S.v3=1;save()}
function starChip(){const c=$("#starb span");if(c)c.textContent=S.stars||0}
function addStars(n){if(!n)return;S.stars=(S.stars||0)+n;save();starChip();
  const f=document.createElement("div");f.className="starfly";f.textContent=`+${n} ⭐`;document.body.appendChild(f);setTimeout(()=>f.remove(),1400);
  const can=Math.min(STICKERS.length,Math.floor(S.stars/PER));if(can>S.stickers.length){const i=S.stickers.length;S.stickers.push(i);save();setTimeout(()=>celebrate(STICKERS[i]),700)}}
const CQ=[];function celebrate(st){if(document.querySelector(".cele")){CQ.push(st);return}const o=document.createElement("div");o.className="cele";o.innerHTML=`<canvas></canvas><div class="cele-in"><div class="cele-emo">${emo(st[0],"celeimg")}</div><h2>Nouveau dessin, ${esc(S.name)} !</h2><p><b>${esc(st[1])}</b> · <span class="ar">${esc(st[2])}</span></p>
  <div class="ctrl" style="justify-content:center"><a class="play" href="#album" style="--c:#E3A008">📒 Mon album</a><button class="ghost" id="celx">Continuer ▶</button></div></div>`;document.body.appendChild(o);
  chime();setTimeout(chime,300);speakSeq([{text:`Bravo ${S.name} ! Tu as gagné un nouveau dessin : ${st[1]} !`},{text:st[2],lang:"ar"}],"fr");
  const cv=o.querySelector("canvas"),x=cv.getContext("2d");const W=cv.width=innerWidth,H=cv.height=innerHeight;const cols=["#FF6F61","#FFB547","#2F7FE0","#2E9E62","#DB3F8D","#7B5CF0"];
  const P=[...Array(140)].map(()=>({x:Math.random()*W,y:-Math.random()*H,v:2+Math.random()*4,r:Math.random()*6,c:cols[Math.floor(Math.random()*6)],w:4+Math.random()*6}));
  let on=true;const tick=()=>{if(!on)return;x.clearRect(0,0,W,H);P.forEach(p=>{p.y+=p.v;p.r+=.1;if(p.y>H)p.y=-10;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.w/2,-p.w/4,p.w,p.w/2);x.restore()});requestAnimationFrame(tick)};
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches)tick();
  const close=()=>{on=false;o.remove();const nx=CQ.shift();if(nx)setTimeout(()=>celebrate(nx),300)};o.querySelector("#celx").onclick=close;o.querySelector("a").onclick=close}
function album(){const got=S.stickers.length,need=(got+1)*PER-(S.stars||0);
  return `<a class="back" href="#accueil">← Accueil</a><div class="fle-head"><h1>📒 Mon album de dessins</h1><div class="fle-stats"><span>⭐ ${S.stars||0}</span><span>🎨 ${got} / ${STICKERS.length}</span></div></div>
  <p style="color:var(--soft);margin-top:0">${got<STICKERS.length?`Encore <b>${Math.max(1,need)} ⭐</b> pour le prochain dessin. Gagne des étoiles en répétant les mots, en jouant et en passant les examens.`:"Tu as tous les dessins. Bravo !"}</p>
  <div class="album">${STICKERS.map((s,i)=>i<got?`<button class="stk" data-i="${i}">${emo(s[0],"emo")}<b>${esc(s[1])}</b><small class="ar">${esc(s[2])}</small></button>`:`<div class="stk lock"><span class="emo">?</span><small>${(i+1)*PER} ⭐</small></div>`).join("")}</div>`}
document.addEventListener("click",e=>{const b=e.target.closest(".stk[data-i]");if(b){const s=STICKERS[+b.dataset.i];speakSeq([{text:s[1]},{text:s[2],lang:"ar"}],"fr")}});

// lecture bilingue : la phrase en français (ou anglais), puis en arabe
function readBi(el,elAr,lang,done){const items=[...el.querySelectorAll(`.sent[data-lang="${lang}"]`)].map(x=>({text:x.textContent,el:x}));
  if(S.readAr&&elAr)items.push(...[...elAr.querySelectorAll('.sent[data-lang="ar"]')].map(x=>({text:x.textContent,el:x,lang:"ar"})));speakSeq(items,lang,done)}

// ----- leçons préparées par le prof IA (Ollama) -----
function mergeGen(){Object.entries(S.gen||{}).forEach(([k,v])=>{if(!LESSONS[k])LESSONS[k]=v})}
function genView(id,n){const s=SUB(id),t=allLessons(s)[n];const rtl=isAr(t)?' dir="rtl"':"";
  return `<a class="back" href="#m-${id}">← ${esc(s.name)}</a><div class="lhead" style="--c:${s.c}"${rtl}><small>Leçon ${n+1} · ${esc(s.name)}</small><h1>${esc(t)}</h1></div>
  <div class="panel" style="--c:${s.c}"><h2>✨ Cette leçon n'est pas encore prête</h2>
  <p>Le prof IA peut la préparer maintenant : une vidéo qui parle en français et en arabe, les mots à répéter, une chanson, des jeux et un examen.</p>
  <div class="ctrl"><button class="play" id="genb" style="--c:${s.c}">✨ Préparer la leçon avec le prof IA</button></div>
  <p class="noteline" id="genst">Il faut Ollama sur l'ordinateur (Réglages → Prof IA). Ça prend une ou deux minutes. Une leçon préparée par l'IA doit être relue par un adulte.</p></div>`}
async function genLesson(id,n){const s=SUB(id),title=allLessons(s)[n],key=id+"-"+n,st=$("#genst"),b=$("#genb");
  if(!aiReady)await aiInit();if(!aiReady){st.textContent="Je ne trouve pas Ollama. Lance Ollama avec OLLAMA_ORIGINS=* puis va dans Réglages → Prof IA → Tester.";return}
  b.disabled=true;b.textContent="⏳ Lumi prépare la leçon…";
  const ar=s.lang==="ar",langTxt=ar?"arabe (les textes say, ess, q sont en arabe ; laisse sayAr, essAr, qAr vides ; dans words la traduction est en français)":s.lang==="en"?"anglais (say en anglais simple ; ess en français)":"français";
  const prompt=`Tu prépares une leçon pour une élève de 1ère année collège au Maroc qui lit difficilement.
Matière : ${s.name}. Leçon du programme : « ${title} ». Langue de la leçon : ${langTxt}.
Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, de cette forme :
{"video":[{"t":"titre court","say":"deux phrases très simples","sayAr":"la même chose en arabe","emoji":"1 à 3 emojis"}],
"ess":["phrase essentielle"],"essAr":["traduction arabe"],
"words":[["mot clé","traduction","emoji"]],
"song":["ligne 1","ligne 2","ligne 3","ligne 4"],
"exam":[{"q":"question","qAr":"question en arabe","ch":["bonne réponse","mauvaise réponse","mauvaise réponse"],"a":0}]}
Contraintes : 5 étapes dans video, 5 phrases dans ess, 6 mots dans words, 4 lignes qui riment dans song, 6 questions dans exam.
Phrases de 12 mots maximum, vocabulaire très simple, contenu exact et conforme au programme marocain de 1ère année collège.`;
  try{let txt="";const r=await fetch(S.ollama+"/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:S.model,format:"json",stream:true,options:{temperature:.3},messages:[{role:"user",content:prompt}]})});
    const rd=r.body.getReader(),dec=new TextDecoder();let buf="";for(;;){const {done,value}=await rd.read();if(done)break;buf+=dec.decode(value,{stream:true});let i;while((i=buf.indexOf("\n"))>=0){const line=buf.slice(0,i);buf=buf.slice(i+1);try{const j=JSON.parse(line);if(j.message)txt+=j.message.content}catch(e){}}st.textContent=`Lumi écrit… ${txt.length} caractères`}
    const J=JSON.parse(txt.slice(txt.indexOf("{"),txt.lastIndexOf("}")+1));const L=normGen(J,title,s);S.gen[key]=L;save();LESSONS[key]=L;chime();route()}
  catch(e){b.disabled=false;b.textContent="✨ Réessayer";st.textContent="La préparation a échoué ("+e.message+"). Réessaie, ou choisis un modèle plus grand dans Réglages."}}
function normGen(J,title,s){const str=x=>typeof x==="string"?x.trim():"";const arr=x=>Array.isArray(x)?x:[];
  const video=arr(J.video).slice(0,7).map(v=>({t:str(v.t)||title,say:str(v.say),sayAr:str(v.sayAr)||undefined,vis:{k:"big",v:str(v.emoji)||"📘"}})).filter(v=>v.say);
  if(!video.length)throw new Error("leçon vide");
  const exam=arr(J.exam).map(q=>{const ch=arr(q.ch).map(str).filter(Boolean);const a=Number.isInteger(q.a)&&q.a<ch.length?q.a:0;if(ch.length<2||!str(q.q))return null;
    const order=shuffle(ch.map((c,i)=>i));return {q:str(q.q),qAr:str(q.qAr)||undefined,ch:order.map(i=>ch[i]),a:order.indexOf(a)}}).filter(Boolean).slice(0,8);
  if(exam.length<2)throw new Error("pas assez de questions");
  const words=arr(J.words).map(w=>arr(w).map(str)).filter(w=>w[0]).slice(0,6).map(w=>[w[0],w[1]||"",w[2]||"⭐"]);
  const games=[];exam.slice(0,3).forEach((q,i)=>games.push({type:"quiz",title:"Question "+(i+1),q:q.q,qAr:q.qAr,ch:q.ch,a:q.a}));
  if(words.length>=3&&words.every(w=>w[1]))games.push({type:"match",title:"Relie le mot et sa traduction",pairs:words.slice(0,4).map(w=>[w[0],w[1]])});
  const ess=arr(J.ess).map(str).filter(Boolean).slice(0,6);
  return {gen:true,title,video,ess:ess.length?ess:video.map(v=>v.say).slice(0,5),essAr:arr(J.essAr).map(str).filter(Boolean).slice(0,6),words,song:arr(J.song).map(str).filter(Boolean).slice(0,6).concat([]).length?arr(J.song).map(str).filter(Boolean).slice(0,6):[title],games:games.length?games:[{type:"quiz",title:"Question",q:exam[0].q,ch:exam[0].ch,a:exam[0].a}],exam:exam.length?exam:[]}}
