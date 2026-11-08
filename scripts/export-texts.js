// Extrait toutes les phrases des leçons (français, arabe, anglais) pour fabriquer les voix enregistrées.
// Utilisation : node scripts/export-texts.js   →   scripts/texts.json
const fs=require("fs"),path=require("path"),vm=require("vm");
const root=path.join(__dirname,"..");
const files=["data.js","lecons.js","lecons-maths.js","lecons-physique.js","lecons-svt-info.js","lecons-manuel.js","lecons-arabe.js","lecons-hg-islam.js","mots-en.js","voix-phrases.js"];
let code=files.filter(f=>fs.existsSync(path.join(root,"js",f))).map(f=>fs.readFileSync(path.join(root,"js",f),"utf8")).join("\n;\n");
code+="\n;this.__out={SUBJECTS,LESSONS,PHRASES:typeof VOIX_PHRASES!=='undefined'?VOIX_PHRASES:[]};";
const ctx={window:{},console};vm.createContext(ctx);vm.runInContext(code,ctx);
const {SUBJECTS,LESSONS,PHRASES}=ctx.__out;
// mêmes règles que la page : on lit phrase par phrase
const sentences=t=>(String(t).match(/[^.!?؟]+[.!?؟]*\s*/g)||[String(t)]).map(s=>s.trim()).filter(Boolean);
const norm=t=>String(t).replace(/\s+/g," ").trim();
const out=new Map();const add=(lang,t)=>{if(!t||typeof t!=="string")return;for(const x of [norm(t),...sentences(t)].map(norm)){if(x.length<2||x.length>400)continue;out.set(lang+"|"+x,{lang,text:x})}};
const isAr=t=>/[؀-ۿ]/.test(t);const guess=(t,def)=>isAr(t)?"ar":def;
for(const [key,L] of Object.entries(LESSONS)){const s=SUBJECTS.find(x=>x.id===key.replace(/-\d+$/,""));const lang=s?s.lang:"fr";
  add(guess(L.title,lang),L.title);
  (L.video||[]).forEach(v=>{add(guess(v.say,lang),v.say);add("ar",v.sayAr);if(v.fr)add("fr",v.fr);if(v.sayFr)add("fr",v.sayFr);add(guess(v.t,lang),v.t)});
  (L.ess||[]).forEach(t=>add(guess(t,L.essLang||lang),t));(L.essAr||[]).forEach(t=>add("ar",t));
  (L.words||[]).forEach(w=>{add(guess(w[0],lang==="en"?"en":lang),w[0]);if(w[1])add(guess(w[1],"fr"),w[1]);if(w[3])add("ar",w[3])});
  (L.song||[]).forEach(t=>add(guess(t,lang),t));
  (L.exam||[]).forEach(q=>{add(guess(q.q,lang),q.q);add("ar",q.qAr);(q.ch||[]).forEach(c=>add(guess(c,lang),String(c)));(q.chAr||[]).forEach(c=>add("ar",c))});
  (L.games||[]).forEach(g=>{if(g.q)add(guess(g.q,lang),g.q);if(g.qAr)add("ar",g.qAr)});
  // « Exercices du prof » : consignes, textes, questions, réponses modèles et explications
  if(L.devoir){const ll=lang==="en"?"en":"fr";L.devoir.sec.forEach(x=>{add(ll,x.t);add("fr",x.fr);add("ar",x.ar);add("fr",x.help);
    if(x.text)x.text.split(/\n+/).forEach(p=>add(ll,p));
    (x.voc||[]).forEach(w=>{add(ll,w[0]);add("fr",w[1])});x.it.forEach(it=>{add(ll,it.q);add("fr",it.qfr);add(ll,it.model);add(ll,it.hint);add("fr",it.why);(it.ch||[]).forEach(c=>add(ll,c));(it.bank||[]).forEach(w=>add(ll,w));
      if(it.ans)it.ans.forEach(a=>[].concat(a).forEach(w=>add(ll,w)));(it.items||[]).forEach(w=>add(ll,w[0]));if(it.k==="tf"){add(ll,ll==="en"?"True":"Vrai");add(ll,ll==="en"?"False":"Faux")}})})}}
(PHRASES||[]).forEach(([lang,t])=>add(lang,t));
const list=[...out.values()];fs.writeFileSync(path.join(__dirname,"texts.json"),JSON.stringify(list));
const by=list.reduce((a,x)=>(a[x.lang]=(a[x.lang]||0)+1,a),{});
console.log(`${list.length} phrases`,by);
