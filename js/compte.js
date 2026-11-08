// ===== Compte de la famille, enfants, sauvegarde en ligne et espace parents =====
// Sans réglage : tout reste dans l'appareil (un ou plusieurs enfants).
// Avec Supabase (js/config.js + supabase.sql) : le parent se connecte avec son email, la progression
// de chaque enfant est gardée en ligne (elle ne recommence plus à zéro, même sur un autre appareil),
// et l'espace parents montre ce qu'elle a fait chaque jour.
// Ce fichier est chargé avant app.js : au chargement, il ne fait que lire l'appareil.
const ACC_KEY="lumi-acct";
let ACC={children:[],cur:null,pin:"",local:false};
try{Object.assign(ACC,JSON.parse(localStorage.getItem(ACC_KEY)||"{}"))}catch(e){}
function saveAcc(){try{localStorage.setItem(ACC_KEY,JSON.stringify(ACC))}catch(e){}}
const lsKey=()=>ACC.cur?"lumi-v1-"+ACC.cur:"lumi-v1";
const curChild=()=>ACC.children.find(c=>c.id===ACC.cur);
const isCloudId=id=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id||"");
const newLocalId=()=>"l"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
// ancienne version (une seule élève, sans compte) : elle devient le premier enfant
(function(){if(ACC.children.length)return;let old=null;try{old=JSON.parse(localStorage.getItem("lumi-v1")||"null")}catch(e){}
  if(!old||!old.name)return;const id=newLocalId();ACC.children.push({id,name:old.name,l1:old.coursAr===false?"fr":"ar",l2:"fr"});ACC.cur=id;
  try{localStorage.setItem("lumi-v1-"+id,JSON.stringify(old))}catch(e){}saveAcc()})();
let SB=null,USER=null;
try{if(window.LUMI_CFG&&LUMI_CFG.url&&LUMI_CFG.key&&window.supabase)SB=supabase.createClient(LUMI_CFG.url,LUMI_CFG.key,{auth:{flowType:"pkce",detectSessionInUrl:true,persistSession:true,autoRefreshToken:true}})}catch(e){SB=null}

// ----- sauvegarde en ligne -----
let pushT=null;
function cloudPush(now){if(!SB||!USER||!isCloudId(ACC.cur))return;clearTimeout(pushT);
  const id=ACC.cur,go=()=>SB.from("children").update({state:S,name:S.name,l1:S.l1,l2:S.l2,updated_at:new Date().toISOString()}).eq("id",id).then(r=>{if(r.error)console.warn(r.error)});
  if(now)go();else pushT=setTimeout(go,10000)}
document.addEventListener("visibilitychange",()=>{if(document.hidden)cloudPush(true)});
const readLocal=id=>{try{return JSON.parse(localStorage.getItem("lumi-v1-"+id)||"null")}catch(e){return null}};
// après la connexion : on récupère les enfants en ligne, on envoie ceux créés dans l'appareil, on garde la version la plus récente
async function cloudPull(){
  const sel="id,name,l1,l2,state,updated_at",{data,error}=await SB.from("children").select(sel).order("updated_at");if(error)throw error;
  for(const c of ACC.children.filter(c=>!isCloudId(c.id))){
    const r=await SB.from("children").insert({name:c.name,l1:c.l1,l2:c.l2,state:readLocal(c.id)||{}}).select(sel).single();
    if(!r.error){data.push(r.data);if(ACC.cur===c.id)ACC.cur=r.data.id;try{localStorage.removeItem("lumi-v1-"+c.id)}catch(e){}}}
  ACC.children=data.map(c=>({id:c.id,name:c.name,l1:c.l1,l2:c.l2}));
  data.forEach(c=>{const loc=readLocal(c.id),rem=c.state||{};if(!loc||(rem._t||0)>(loc._t||0))try{localStorage.setItem("lumi-v1-"+c.id,JSON.stringify(rem))}catch(e){}});
  if(!curChild())ACC.cur=null;const pin=USER&&USER.user_metadata&&USER.user_metadata.pin;if(pin)ACC.pin=pin;saveAcc()}

// ----- les langues choisies : 1re langue (explications) et 2e langue (mots techniques) -----
const LANGS={ar:"العربية",fr:"Français",en:"English"};
function langFlags(){S.l1=S.l1||(S.coursAr===false?"fr":"ar");S.l2=S.l2||"fr";if(S.l2===S.l1)S.l2=S.l1==="ar"?"fr":"ar";
  S.trAr=S.l1==="ar"||S.l2==="ar";S.readAr=S.trAr;S.coursAr=S.l1==="ar"}
function applyLang(){langFlags();const c=curChild();if(c){c.l1=S.l1;c.l2=S.l2;saveAcc()}save()}
function selectChild(id){cloudPush(true);ACC.cur=id;saveAcc();loadS();const c=curChild();if(c){S.name=c.name;S.l1=c.l1;S.l2=c.l2}
  langFlags();save();applySettings();starChip();bumpStreak();accStep=null;go("accueil");route()}

// ----- suivi : temps par jour, par matière, étude / jeu / examen, et ce qu'elle a appris -----
let TRK=null,lastAct=Date.now();
function logDay(){S.log=S.log||{};const d=day();if(!S.log[d]){S.log[d]={t:{},s:{},l:[],w:[],ex:[],g:[]};
  const keys=Object.keys(S.log).sort();keys.slice(0,Math.max(0,keys.length-120)).forEach(k=>delete S.log[k])}return S.log[d]}
function tick(){if(!TRK||!curChild()||document.hidden)return;if(Date.now()-lastAct>120000&&!document.body.classList.contains("talking"))return;
  const L=logDay();L.t[TRK.kind]=(L.t[TRK.kind]||0)+15;L.s[TRK.subj]=(L.s[TRK.subj]||0)+15;save()}
function learn(type,v){if(!curChild())return;const L=logDay();
  if(type==="l"){if(!L.l.includes(v))L.l.push(v)}else if(type==="w"){if(!L.w.includes(v)&&L.w.length<300)L.w.push(v)}else(L[type]=L[type]||[]).push(v);save()}
function trackRoute(){const v=view;TRK=null;
  if(v.name==="lesson"){TRK={kind:tab==="examen"?"examen":["jeux","aventure","monde"].includes(tab)?"jeu":"etude",subj:v.id};learn("l",v.id+"-"+v.n)}
  else if(v.name==="subject")TRK={kind:"etude",subj:v.id};
  else if(v.name==="fle"||v.name==="fleu")TRK={kind:"etude",subj:"francais"};
  else if(["jeux","cherche","hidden","diff","mots","mot","world","jeucours","album"].includes(v.name))TRK={kind:"jeu",subj:"jeux"}}
async function accInit(){
  const rb=repeatBlock;repeatBlock=(el,t,l,done)=>rb(el,t,l,(...a)=>{learn("w",t);done(...a)});
  setInterval(tick,15000);["pointerdown","keydown","scroll"].forEach(e=>addEventListener(e,()=>{lastAct=Date.now()},{passive:true}));
  if(!SB)return;try{const {data}=await SB.auth.getSession();USER=data.session?data.session.user:null}catch(e){}
  SB.auth.onAuthStateChange((ev,ses)=>{const was=USER;USER=ses?ses.user:null;
    if(ev==="SIGNED_IN"&&!was&&USER){cleanAuthUrl();cloudPull().then(()=>{loadS();accStep=null;render()}).catch(e=>console.warn(e))}});
  if(USER)cleanAuthUrl();
  if(USER)try{await cloudPull();loadS();if(curChild()){const c=curChild();S.l1=c.l1;S.l2=c.l2;langFlags()}starChip();route()}catch(e){console.warn(e)}}

// ----- écrans du début : compte des parents, puis « qui apprend aujourd'hui ? » -----
let accStep=null;
const accReady=()=>!!curChild()&&!!S.name;
function accScreen(){if(SB&&!USER&&!ACC.local)return loginHTML();if(accStep==="add"||!ACC.children.length)return addChildHTML();return pickChildHTML()}
const APP_URL=()=>location.origin+location.pathname;
// messages de Supabase traduits pour la famille
function authMsg(e){const m=(e&&e.message||String(e||"")).toLowerCase();
  if(m.includes("invalid login"))return "Email ou mot de passe incorrect.";
  if(m.includes("email not confirmed"))return "Ce compte n'est pas encore confirmé. Écris le code reçu par email ci-dessous (ou renvoie l'email).";
  if(m.includes("rate limit")||m.includes("too many"))return "Trop d'emails envoyés : attends quelques minutes. (Le service gratuit envoie peu d'emails par heure. Voir le README : « Comptes ».)";
  if(m.includes("already registered")||m.includes("already been registered"))return "Ce compte existe déjà : connecte-toi avec ton mot de passe, ou reçois un code par email.";
  if(m.includes("token has expired")||m.includes("otp")&&m.includes("expired"))return "Ce code a expiré. Demande un nouveau code.";
  if(m.includes("invalid")&&m.includes("token"))return "Ce code n'est pas bon. Vérifie les 6 chiffres.";
  if(m.includes("password")&&m.includes("6"))return "Le mot de passe doit avoir 6 caractères ou plus.";
  if(m.includes("failed to fetch")||m.includes("network"))return "Pas de connexion internet. Tu peux continuer sans compte.";
  return e&&e.message||String(e)}
function loginHTML(){return `<section class="onb"><div class="lumi-girl hero">${emo("👧🏽","girl")}</div><h1>Espace de la famille</h1>
  <p>Un parent se connecte avec son email. La progression de chaque enfant est gardée, même sur un autre téléphone.<br><span class="ar" dir="rtl">يتصل أحد الوالدين ببريده الإلكتروني، فيُحفظ تقدم كل طفل.</span></p>
  <form id="accf" class="accf"><input type="email" id="acce" placeholder="email@exemple.com" autocomplete="email" required aria-label="Email du parent">
   <input type="password" id="accp" placeholder="Mot de passe (6 caractères ou plus)" autocomplete="current-password" minlength="6" aria-label="Mot de passe">
   <div class="ctrl" style="justify-content:center"><button class="play" style="--c:#FF6F61" type="submit" id="accin">Se connecter</button><button class="ghost" type="button" id="accup">Créer un compte</button></div>
   <button class="linkbtn" type="button" id="accotp">Pas de mot de passe ou oublié ? Recevoir un code par email</button>
   <div class="otp" id="otpbox" hidden><p><b>📩 Regarde ta boîte email</b> (et les spams). Écris le <b>code à 6 chiffres</b> ici :</p>
    <input type="text" id="otpc" inputmode="numeric" autocomplete="one-time-code" maxlength="8" placeholder="123456" aria-label="Code reçu par email">
    <div class="ctrl" style="justify-content:center"><button class="play" type="button" id="otpok" style="--c:#2E9E62">Valider le code</button><button class="ghost" type="button" id="otpre">Renvoyer l'email</button></div>
    <p class="noteline">Tu peux aussi toucher le lien dans l'email, mais ouvre-le <b>sur ce même appareil et ce même navigateur</b>.</p></div>
   <p class="noteline" id="accm" aria-live="polite"></p></form>
  <button class="ghost" id="accl">Continuer sans compte (tout reste sur cet appareil)</button></section>`}
function pickChildHTML(){return `<section class="onb"><div class="lumi-girl hero">${emo("👧🏽","girl")}</div><h1>Qui apprend aujourd'hui ?</h1><p class="ar" dir="rtl">من يتعلم اليوم؟</p>
  <div class="kids">${ACC.children.map(c=>`<button class="kid" data-kid="${c.id}">${emo("🧒🏽","emo")}<b>${esc(c.name)}</b><small>${LANGS[c.l1]} + ${LANGS[c.l2]}</small></button>`).join("")}
   <button class="kid add" id="kidadd"><span class="emotxt emo">➕</span><b>Ajouter un enfant</b><small class="ar">أضف طفلا</small></button></div>
  ${SB&&USER?`<p class="noteline">Connecté : ${esc(USER.email||"")} · <a href="#parents">👨‍👩‍👧 Espace parents</a></p>`:`<p class="noteline"><a href="#parents">👨‍👩‍👧 Espace parents</a></p>`}</section>`}
function addChildHTML(){const r=(n,v,l,c)=>`<label class="lopt"><input type="radio" name="${n}" value="${v}"${c?" checked":""}><span>${l}</span></label>`;
  return `<section class="onb"><div class="lumi-girl hero">${emo("👧🏽","girl")}</div><h1>Un nouvel enfant</h1>
  <form id="kidf" class="accf"><input type="text" id="kidn" maxlength="30" placeholder="Son prénom" required aria-label="Prénom de l'enfant">
   <fieldset><legend>1. La langue des explications <span class="ar">لغة الشرح</span></legend>${r("l1","ar","العربية",1)}${r("l1","fr","Français")}</fieldset>
   <fieldset><legend>2. La 2e langue pour les mots techniques <span class="ar">اللغة الثانية للمصطلحات</span></legend>${r("l2","fr","Français",1)}${r("l2","en","English")}${r("l2","ar","العربية")}</fieldset>
   <p class="noteline">Exemple : explications en arabe, et elle apprend et répète les mots techniques en français.</p>
   <div class="ctrl" style="justify-content:center"><button class="play" style="--c:#FF6F61" type="submit">C'est parti ▶</button>${ACC.children.length?`<button class="ghost" type="button" id="kidback">Retour</button>`:""}</div><p class="noteline" id="kidm"></p></form></section>`}
function mountAcc(){
  const msg=t=>{const m=$("#accm")||$("#kidm");if(m)m.textContent=t};
  if($("#accf")){const creds=()=>({email:$("#acce").value.trim(),password:$("#accp").value});let otpType="signup";
    const after=async()=>{msg("Je récupère les enfants…");await cloudPull();loadS();accStep=null;cleanAuthUrl();render()};
    const showOtp=(type,t)=>{otpType=type;$("#otpbox").hidden=false;$("#otpc").focus();if(t)msg(t)};
    $("#accf").onsubmit=async e=>{e.preventDefault();const c=creds();if(!c.password){msg("Écris ton mot de passe, ou reçois un code par email.");return}msg("Connexion…");
      const r=await SB.auth.signInWithPassword(c);
      if(r.error){msg(authMsg(r.error));if(/not confirmed/i.test(r.error.message))showOtp("signup");return}USER=r.data.user;try{await after()}catch(er){msg(authMsg(er))}};
    $("#accup").onclick=async()=>{const c=creds();if(!c.email||c.password.length<6){msg("Écris un email et un mot de passe de 6 caractères ou plus.");return}msg("Création du compte…");
      const r=await SB.auth.signUp({...c,options:{emailRedirectTo:APP_URL()}});if(r.error){msg(authMsg(r.error));return}
      if(r.data.user&&r.data.user.identities&&!r.data.user.identities.length){msg(authMsg({message:"already registered"}));return}
      if(!r.data.session){showOtp("signup","Compte créé ! Un email de confirmation est parti vers "+c.email+".");return}USER=r.data.user;try{await after()}catch(er){msg(authMsg(er))}};
    $("#accotp").onclick=async()=>{const email=$("#acce").value.trim();if(!email){msg("Écris d'abord ton email.");$("#acce").focus();return}msg("Envoi du code…");
      const r=await SB.auth.signInWithOtp({email,options:{shouldCreateUser:true,emailRedirectTo:APP_URL()}});if(r.error){msg(authMsg(r.error));return}showOtp("email","Code envoyé à "+email+".")};
    $("#otpre").onclick=async()=>{const email=$("#acce").value.trim();msg("Envoi…");
      const r=otpType==="signup"?await SB.auth.resend({type:"signup",email,options:{emailRedirectTo:APP_URL()}}):await SB.auth.signInWithOtp({email,options:{emailRedirectTo:APP_URL()}});
      msg(r.error?authMsg(r.error):"Email renvoyé à "+email+".")};
    $("#otpok").onclick=async()=>{const email=$("#acce").value.trim(),token=$("#otpc").value.replace(/\D/g,"");if(token.length<6){msg("Le code a 6 chiffres.");return}msg("Vérification…");
      let r=await SB.auth.verifyOtp({email,token,type:otpType});if(r.error&&otpType==="signup")r=await SB.auth.verifyOtp({email,token,type:"email"});
      if(r.error){msg(authMsg(r.error));return}USER=r.data.user||(r.data.session&&r.data.session.user);try{await after()}catch(er){msg(authMsg(er))}};
    $("#accl").onclick=()=>{ACC.local=true;saveAcc();render()}}
  P_bind(".kid[data-kid]",b=>b.onclick=()=>selectChild(b.dataset.kid));
  if($("#kidadd"))$("#kidadd").onclick=()=>{accStep="add";render()};
  if($("#kidback"))$("#kidback").onclick=()=>{accStep=null;render()};
  if($("#kidf")){$("#kidf").l1.forEach(x=>x.onchange=()=>{const l1=$("#kidf").l1.value,l2=$("#kidf").l2;if(l2.value===l1)l2.value=l1==="ar"?"fr":"ar"});
    $("#kidf").onsubmit=async e=>{e.preventDefault();const f=$("#kidf"),n=$("#kidn").value.trim();if(!n)return;
      const name=n.charAt(0).toUpperCase()+n.slice(1),l1=f.l1.value;let l2=f.l2.value;if(l2===l1)l2=l1==="ar"?"fr":"ar";let id=newLocalId();
      if(SB&&USER){const r=await SB.from("children").insert({name,l1,l2,state:{}}).select("id").single();if(r.error){$("#kidm").textContent=r.error.message;return}id=r.data.id}
      ACC.children.push({id,name,l1,l2});saveAcc();selectChild(id);chime();sayOne(l1==="ar"?`مرحبا ${name}!`:`Bienvenue ${name} !`,l1)}}}
const P_bind=(sel,f)=>document.querySelectorAll(sel).forEach(f);

// ----- espace parents : protégé par un code -----
let parentOK=false;
function parentsView(main){
  const back=`<a class="back" href="#accueil">← Accueil</a>`;
  if(!ACC.pin){main.innerHTML=back+`<section class="onb"><h1>👨‍👩‍👧 Espace parents</h1><p>Choisis un code à 4 chiffres. Il protège cet espace : les enfants ne pourront pas l'ouvrir.</p>
     <form id="pinf" class="accf"><input type="password" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" id="pin" placeholder="••••" required aria-label="Nouveau code"><button class="play" style="--c:#4C5BD4" type="submit">Enregistrer le code</button></form></section>`;
    $("#pinf").onsubmit=e=>{e.preventDefault();ACC.pin=$("#pin").value;saveAcc();parentOK=true;if(SB&&USER)SB.auth.updateUser({data:{pin:ACC.pin}});parentsView(main)};return}
  if(!parentOK){main.innerHTML=back+`<section class="onb"><h1>👨‍👩‍👧 Espace parents</h1><p>Écris le code des parents.</p>
     <form id="pinf" class="accf"><input type="password" inputmode="numeric" maxlength="4" id="pin" placeholder="••••" required aria-label="Code des parents"><button class="play" style="--c:#4C5BD4" type="submit">Entrer</button><p class="noteline" id="pinm"></p></form></section>`;
    $("#pinf").onsubmit=e=>{e.preventDefault();if($("#pin").value===ACC.pin){parentOK=true;parentsView(main)}else{$("#pinm").textContent="Ce n'est pas le bon code.";buzz()}};return}
  main.innerHTML=back+`<h1>👨‍👩‍👧 Espace parents</h1><p class="noteline" id="dashst">Je charge les données…</p><div id="dash"></div>`;
  loadKids().then(kids=>{$("#dashst").innerHTML=SB&&USER?`Compte : <b>${esc(USER.email||"")}</b> · données en ligne, mises à jour à chaque utilisation.`:SB?`Pas connecté : seules les données de cet appareil sont montrées. <a href="#enfant" id="dlog">Se connecter</a>`:"Données de cet appareil (la sauvegarde en ligne n'est pas encore branchée : voir le guide dans README.md).";
    if($("#dlog"))$("#dlog").onclick=()=>{ACC.local=false;saveAcc()};
    let sel=kids[0]&&kids[0].id;const draw=()=>{$("#dash").innerHTML=(kids.length>1?`<div class="chipsel">${kids.map(k=>`<button data-dk="${k.id}" aria-pressed="${k.id===sel}">${esc(k.name)}</button>`).join("")}</div>`:"")+
      (kids.length?dashChild(kids.find(k=>k.id===sel)):"<p>Pas encore d'enfant.</p>")+
      `<div class="ctrl" style="margin-top:22px"><a class="ghost" href="#enfant">👤 Changer d'enfant / ajouter</a><button class="ghost" id="dpin">🔑 Changer le code</button>${SB&&USER?`<button class="ghost" id="dout">Se déconnecter</button>`:""}</div>`;
      P_bind("[data-dk]",b=>b.onclick=()=>{sel=b.dataset.dk;draw()});
      $("#dpin").onclick=()=>{ACC.pin="";saveAcc();parentsView(main)};
      if($("#dout"))$("#dout").onclick=async()=>{cloudPush(true);await SB.auth.signOut();USER=null;parentOK=false;ACC.cur=null;saveAcc();go("accueil");render()}};
    draw()})}
async function loadKids(){
  if(SB&&USER)try{const {data,error}=await SB.from("children").select("id,name,l1,l2,state").order("name");if(!error)return data.map(c=>({...c,state:c.id===ACC.cur?S:(c.state||{})}))}catch(e){}
  return ACC.children.map(c=>({...c,state:c.id===ACC.cur?S:(readLocal(c.id)||{})}))}
const SUBJ_NAME=id=>id==="jeux"?"Jeux":(SUBJECTS.find(s=>s.id===id)||{name:id}).name;
const lessonTitle=k=>{const id=k.replace(/-\d+$/,""),n=+k.split("-").pop(),s=SUBJECTS.find(x=>x.id===id);return s?allLessons(s)[n]||k:k};
const mn=sec=>sec>=3600?`${Math.floor(sec/3600)} h ${Math.round(sec%3600/60)} min`:`${Math.max(1,Math.round(sec/60))} min`;
function dashChild(c){const st=c.state||{},log=st.log||{},today=new Date();
  const dayKey=i=>day(new Date(today-i*864e5)),sum=o=>Object.values(o||{}).reduce((a,b)=>a+b,0);
  const last7=[...Array(7)].map((_,i)=>log[dayKey(i)]).filter(Boolean),t7=last7.reduce((a,d)=>a+sum(d.t),0),used30=[...Array(30)].filter((_,i)=>log[dayKey(i)]&&sum(log[dayKey(i)].t)>0).length;
  const kinds=[["etude","📖 Étude","#2F7FE0"],["jeu","🎮 Jeu","#DB3F8D"],["examen","✎ Examen","#E3A008"]];
  // niveau par matière
  const subj=SUBJECTS.map(s=>{const L=allLessons(s),keys=L.map((_,i)=>s.id+"-"+i),notes=keys.map(k=>st.best&&st.best[k]).filter(x=>x!=null);
    const seen=new Set(Object.values(log).flatMap(d=>d.l||[]).filter(k=>k.startsWith(s.id+"-")));const hard=keys.filter(k=>st.ex&&st.ex[k]&&st.ex[k][3]>=10).length;
    const sec=Object.values(log).reduce((a,d)=>a+((d.s||{})[s.id]||0),0);
    return {s,n:L.length,seen:seen.size,passed:notes.filter(x=>x>=10).length,avg:notes.length?Math.round(notes.reduce((a,b)=>a+b,0)/notes.length):null,hard,sec}});
  const cal=[...Array(28)].map((_,i)=>{const k=dayKey(27-i),d=log[k],m=d?sum(d.t)/60:0;return `<span class="cal${m>=30?" c3":m>=10?" c2":m>0?" c1":""}" title="${k} · ${m?Math.round(m)+" min":"pas utilisé"}"></span>`}).join("");
  const daysList=Object.keys(log).sort().reverse().filter(k=>sum(log[k].t)>0).slice(0,14);
  return `<div class="dash">
   <div class="kpis"><div><b>⭐ ${st.stars||0}</b><small>étoiles · ${(st.stickers||[]).length} dessins</small></div><div><b>🔥 ${(st.streak||{}).n||0}</b><small>jours de suite</small></div>
    <div><b>${used30}</b><small>jours utilisés sur 30</small></div><div><b>${mn(t7)}</b><small>cette semaine</small></div><div><b>${LANGS[c.l1]||""} + ${LANGS[c.l2]||""}</b><small>langues</small></div></div>
   <h2 class="sec">📅 Les jours d'utilisation (4 semaines)</h2><div class="calg">${cal}</div><p class="noteline">Plus la case est foncée, plus elle a travaillé ce jour-là.</p>
   <h2 class="sec">📈 Son niveau par matière</h2><div class="lvls">${subj.map(x=>`<div class="lvl-r" style="--c:${x.s.c}"><b>${esc(x.s.name)}</b>
     <div class="meter"><span style="width:${Math.round(100*x.passed/x.n)}%"></span></div>
     <small>${x.seen} leçon${x.seen>1?"s":""} ouverte${x.seen>1?"s":""} · ${x.passed} / ${x.n} examens réussis${x.avg!=null?` · moyenne ${x.avg}/20`:""}${x.hard?` · ${x.hard} en difficile`:""}${x.sec?` · ${mn(x.sec)} au total`:""}</small></div>`).join("")}</div>
   <h2 class="sec">🗓️ Jour par jour</h2>${daysList.length?daysList.map(k=>{const d=log[k],tot=sum(d.t);
     return `<details class="dday"${k===daysList[0]?" open":""}><summary><b>${new Date(k+"T12:00:00").toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}</b> · ${mn(tot)}</summary>
      <div class="stack">${kinds.map(([kk,l,col])=>d.t[kk]?`<span style="flex:${d.t[kk]};background:${col}" title="${l}">${l} ${mn(d.t[kk])}</span>`:"").join("")}</div>
      <p><b>Matières :</b> ${Object.entries(d.s||{}).sort((a,b)=>b[1]-a[1]).map(([s,v])=>`${esc(SUBJ_NAME(s))} (${mn(v)})`).join(" · ")||"—"}</p>
      ${(d.l||[]).length?`<p><b>Leçons étudiées :</b> ${d.l.map(x=>esc(lessonTitle(x))).join(" · ")}</p>`:""}
      ${(d.w||[]).length?`<p><b>${d.w.length} mot${d.w.length>1?"s":""} appris et répété${d.w.length>1?"s":""} :</b> ${d.w.slice(0,20).map(esc).join(", ")}${d.w.length>20?"…":""}</p>`:""}
      ${(d.ex||[]).length?`<p><b>Examens :</b> ${d.ex.map(e=>`${esc(lessonTitle(e[0]))} · ${["","facile","moyen","difficile"][e[1]]} · <b>${e[2]}/20</b>`).join(" ; ")}</p>`:""}
      ${(d.g||[]).length?`<p><b>Jeux finis :</b> ${d.g.length} (${d.g.map(g=>`${g[2]}/${g[3]}`).join(", ")} bonnes réponses du premier coup)</p>`:""}</details>`}).join(""):"<p>Pas encore d'activité enregistrée.</p>"}
  </div>`}

// après le lien de l'email : on enlève le code de l'adresse (sinon la page semble « bloquée »)
function cleanAuthUrl(){try{const u=new URL(location.href);let ch=false;["code","error","error_code","error_description","type"].forEach(k=>{if(u.searchParams.has(k)){u.searchParams.delete(k);ch=true}});
  let h=u.hash;if(/access_token|refresh_token|error_description/.test(h)){h="#accueil";ch=true}if(ch)history.replaceState(null,"",u.pathname+(u.search||"")+h)}catch(e){}}
// lien d'email expiré ou refusé : on l'explique au lieu de rester bloqué
(function(){try{const p=new URLSearchParams(location.search+"&"+location.hash.replace(/^#/,""));const d=p.get("error_description");
  if(d)setTimeout(()=>{toast(/expired/i.test(d)?"Le lien de l'email a expiré. Demande un code par email.":"Le lien de l'email n'a pas marché : "+d);cleanAuthUrl()},800)}catch(e){}})();
