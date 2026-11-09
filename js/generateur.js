// ===== Générateur de jeux =====
// Chaque leçon devient des jeux créés tout seuls, différents à chaque partie :
//  • maths : un calcul tiré au hasard, on calcule puis on choisit la bonne réponse ;
//  • sciences : compléter les étapes déjà expliquées, trouver le mot technique, phrases à trous ;
//  • partout : apprendre les mots techniques et répéter chaque mot au micro.
// Si on se trompe, Lumi explique (💡) et lit l'explication.
// Les cours de maths, physique, SVT et informatique s'affichent en arabe, avec les mots techniques en français.
const AR_SUBJ=["maths","physique","svt","info"];
const L1=()=>S.l1||(S.coursAr===false?"fr":"ar"),L2=()=>S.l2||"fr";
const arMode=id=>AR_SUBJ.includes(id)&&L1()==="ar";
const enT=t=>(typeof EN!=="undefined"&&EN[t])||t;
// les mots techniques selon les deux langues choisies : t = le mot à apprendre et répéter, m = son sens
function techWords(s,L){const l1=L1(),l2=L2();return (L.words||[]).filter(w=>w[0]&&w[1]).map(w=>{
  if(s.id==="anglais")return {t:w[0],tl:"en",m:w[1],ml:"ar",e:w[2]};
  if(s.lang==="ar")return {t:w[0],tl:"ar",m:l2==="en"?enT(w[1]):w[1],ml:l2==="en"?"en":"fr",e:w[2]};
  if(s.id==="francais")return l1==="fr"&&l2==="en"?{t:w[0],tl:"fr",m:enT(w[0]),ml:"en",e:w[2]}:{t:w[0],tl:"fr",m:w[1],ml:"ar",e:w[2]};
  if(l2==="en")return {t:enT(w[0]),tl:"en",m:l1==="ar"?w[1]:w[0],ml:l1==="ar"?"ar":"fr",e:w[2],fr:w[0],ar:w[1]};
  return {t:w[0],tl:"fr",m:w[1],ml:"ar",e:w[2],fr:w[0],ar:w[1]}})}
const rnd2=(a,b)=>a+Math.floor(Math.random()*(b-a+1)); // pick() vient de fle.js
const nf=x=>String(Math.round(x*100)/100).replace(".",",").replace(/^-/,"−");
const rel=x=>x<0?"("+nf(x)+")":nf(x);
const pgcd=(a,b)=>b?pgcd(b,a%b):Math.abs(a);
const LTR=t=>"⁦"+t+"⁩"; // calcul gardé de gauche à droite au milieu d'un texte arabe
const SUP="⁰¹²³⁴⁵⁶⁷⁸⁹";
// la bonne réponse + 2 fausses, sans doublon
function opts(good,wrong){const f=v=>typeof v==="number"?nf(v):v,g=f(good),set=[g];
  for(const w of wrong){const v=f(w);if(!set.includes(v))set.push(v);if(set.length===3)break}
  for(let d=1;set.length<3&&typeof good==="number";d++)[good+d,good-d].forEach(v=>{if(set.length<3&&!set.includes(nf(v)))set.push(nf(v))});
  const ch=shuffle(set);return {ch,a:ch.indexOf(g)}}
// question de calcul : consigne en arabe, calcul affiché à part, mot technique en français
const mq=(q,m,good,wrong,why,fr)=>({kind:"calc",q,m,fr,why,whyLang:"ar",...opts(good,wrong)});

// ----- un générateur de calcul par leçon de maths (dans l'ordre du programme) -----
const MATH=[
 ()=>{const a=rnd2(2,9),b=rnd2(2,9),c=rnd2(2,6),t=rnd2(0,2);
  if(t==0)return mq("احسب:",`${a} + ${b} × ${c}`,a+b*c,[(a+b)*c,a+b+c],`الضرب قبل الجمع: ${LTR(`${b} × ${c} = ${b*c}`)}، ثم ${LTR(`${a} + ${b*c} = ${a+b*c}`)}.`,"Priorités : × avant +");
  if(t==1)return mq("احسب:",`(${a} + ${b}) × ${c}`,(a+b)*c,[a+b*c,a+b+c],`الأقواس أولا: ${LTR(`${a} + ${b} = ${a+b}`)}، ثم ${LTR(`${a+b} × ${c} = ${(a+b)*c}`)}.`,"Les parenthèses d'abord");
  const x=a*c+b;return mq("احسب:",`${x} − ${a} × ${c}`,b,[(x-a)*c,x-a-c],`الضرب قبل الطرح: ${LTR(`${a} × ${c} = ${a*c}`)}، ثم ${LTR(`${x} − ${a*c} = ${b}`)}.`,"Priorités : × avant −")},
 ()=>{let a=rnd2(1,5),b=rnd2(a+1,9);const g=pgcd(a,b);a/=g;b/=g;const k=rnd2(2,5),t=rnd2(0,2);
  if(t==0)return mq("اختزل الكسر:",`${a*k}/${b*k}`,`${a}/${b}`,[`${a*k}/${b}`,`${a}/${b*k}`,`${b}/${a}`],`نقسم البسط والمقام على ${k}: ${LTR(`${a*k} ÷ ${k} = ${a}`)} و ${LTR(`${b*k} ÷ ${k} = ${b}`)}.`,"Simplifier une fraction");
  if(t==1)return mq("أكمل:",`${a}/${b} = ?/${b*k}`,a*k,[a+k,b*k-a],`ضربنا المقام في ${k}، فنضرب البسط أيضا في ${k}: ${LTR(`${a} × ${k} = ${a*k}`)}.`,"Fractions égales");
  const m=rnd2(2,6),n=b*m;return mq("احسب:",`${a}/${b} × ${n}`,a*m,[n*a,n-a],`${LTR(`${n} ÷ ${b} = ${m}`)}، ثم ${LTR(`${m} × ${a} = ${a*m}`)}.`,"Fraction d'une quantité")},
 ()=>{const t=rnd2(0,2),d=rnd2(4,9),a=rnd2(1,d-2),b=rnd2(1,d-a-1);
  if(t==0)return mq("احسب:",`${a}/${d} + ${b}/${d}`,`${a+b}/${d}`,[`${a+b}/${2*d}`,`${a*b}/${d}`],`نفس المقام: نجمع البسطين ${LTR(`${a} + ${b} = ${a+b}`)} ونحتفظ بالمقام ${d}.`,"Même dénominateur");
  if(t==1)return mq("احسب:",`${a+b}/${d} − ${b}/${d}`,`${a}/${d}`,[`${a+2*b}/${d}`,`${a}/0`],`نفس المقام: نطرح البسطين ${LTR(`${a+b} − ${b} = ${a}`)} ونحتفظ بالمقام ${d}.`,"Même dénominateur");
  const p=rnd2(1,4),q=rnd2(p+1,6),r=rnd2(1,4),s=rnd2(r+1,6);return mq("احسب:",`${p}/${q} × ${r}/${s}`,`${p*r}/${q*s}`,[`${p+r}/${q+s}`,`${p*r}/${q+s}`,`${p*s}/${q*r}`],`البسط في البسط ${LTR(`${p} × ${r} = ${p*r}`)}، والمقام في المقام ${LTR(`${q} × ${s} = ${q*s}`)}.`,"Multiplier des fractions")},
 ()=>{const it=pick([["[AB]","القطعة (segment)"],["(AB)","المستقيم (droite)"],["[AB)","نصف المستقيم (demi-droite)"]]);
  return mq("ماذا يمثل هذا الرمز؟",it[0],it[1],["القطعة (segment)","المستقيم (droite)","نصف المستقيم (demi-droite)"],`${LTR("[AB]")} قطعة لها طرفان. ${LTR("(AB)")} مستقيم لا ينتهي. ${LTR("[AB)")} نصف مستقيم يبدأ من A.`,"Les notations")},
 ()=>{const a=rnd2(2,9),b=rnd2(2,9),c=rnd2(2,16),s=[a,b,c].sort((x,y)=>x-y),ok=s[2]<s[0]+s[1];
  return mq("هل يمكن إنشاء مثلث بهذه الأطوال؟",`${a} cm · ${b} cm · ${c} cm`,ok?"نعم (oui)":"لا (non)",["نعم (oui)","لا (non)"],`أكبر ضلع ${s[2]}، ومجموع الضلعين الآخرين ${LTR(`${s[0]} + ${s[1]} = ${s[0]+s[1]}`)}. ${ok?"الضلع الأكبر أصغر من المجموع، إذن نعم.":"الضلع الأكبر ليس أصغر من المجموع، إذن لا."}`,"Inégalité triangulaire")},
 ()=>{const t=rnd2(0,2);
  if(t==0){const x=rnd2(1,17)*5;return mq("ما قياس الزاوية المتممة؟",`${x}°`,(90-x)+"°",[(180-x)+"°",(100-x)+"°"],`زاويتان متتامتان مجموعهما 90°: ${LTR(`90 − ${x} = ${90-x}`)}.`,"angle complémentaire")}
  if(t==1){const x=rnd2(1,35)*5;return mq("ما قياس الزاوية المكملة؟",`${x}°`,(180-x)+"°",[Math.abs(90-x)+"°",(190-x)+"°"],`زاويتان متكاملتان مجموعهما 180°: ${LTR(`180 − ${x} = ${180-x}`)}.`,"angle supplémentaire")}
  const x=pick([rnd2(10,85),90,rnd2(95,175)]),n=x<90?0:x===90?1:2,L=["حادة (aigu)","قائمة (droit)","منفرجة (obtus)"];
  return mq("ما نوع هذه الزاوية؟",`${x}°`,L[n],L,"الحادة أصغر من 90°، القائمة تساوي 90°، المنفرجة أكبر من 90°.","Les sortes d'angles")},
 ()=>{if(rnd2(0,1)){const a=rnd2(-15,9);let b=rnd2(-15,9);if(b===a)b=a-rnd2(1,6);return mq("أي العددين أكبر؟",`${nf(a)}   ;   ${nf(b)}`,Math.max(a,b),[Math.min(a,b)],"الأكبر هو الموجود أكثر على اليمين في المستقيم المدرج. بين عددين سالبين، الأكبر هو الأقرب إلى الصفر.","Comparer des relatifs")}
  const n=rnd2(1,20)*(rnd2(0,1)?1:-1);return mq("ما هو مقابل هذا العدد؟",nf(n),-n,[n,0],`المقابل له نفس البعد عن الصفر وإشارة معاكسة: مقابل ${LTR(nf(n))} هو ${LTR(nf(-n))}.`,"l'opposé")},
 ()=>{const a=rnd2(-12,12)||5,b=rnd2(-12,12)||-4;
  if(rnd2(0,1)){const same=(a<0)===(b<0);return mq("احسب:",`${rel(a)} + ${rel(b)}`,a+b,[a-b,-(a+b)],`${same?"نفس الإشارة: نجمع المسافتين ونحتفظ بالإشارة.":"إشارتان مختلفتان: نطرح المسافتين ونأخذ إشارة الأبعد عن الصفر."} النتيجة ${LTR(nf(a+b))}.`,"Addition des relatifs")}
  return mq("احسب:",`${rel(a)} − ${rel(b)}`,a-b,[a+b,b-a],`طرح عدد هو إضافة مقابله: ${LTR(`${rel(a)} + ${rel(-b)} = ${nf(a-b)}`)}.`,"Soustraction des relatifs")},
 ()=>{const a=rnd2(2,9)*(rnd2(0,1)?1:-1),b=rnd2(2,9)*(rnd2(0,1)?1:-1),p=a*b,sg=(x,y)=>(x<0)===(y<0)?"إشارتان متشابهتان: النتيجة موجبة.":"إشارتان مختلفتان: النتيجة سالبة.";
  if(rnd2(0,1))return mq("احسب:",`${rel(a)} × ${rel(b)}`,p,[-p,a+b],`${LTR(`${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(p)}`)}. ${sg(a,b)}`,"Règle des signes");
  return mq("احسب:",`${rel(p)} ÷ ${rel(a)}`,b,[-b,p+a],`${LTR(`${Math.abs(p)} ÷ ${Math.abs(a)} = ${Math.abs(b)}`)}. ${sg(p,a)}`,"Règle des signes")},
 ()=>{const t=rnd2(0,2);
  if(t==0){const a=rnd2(2,5),n=rnd2(2,3);return mq("احسب:",`${a}${SUP[n]}`,a**n,[a*n,a+n],`${LTR(`${a}${SUP[n]} = ${Array(n).fill(a).join(" × ")} = ${a**n}`)}.`,"Puissance")}
  if(t==1){const n=rnd2(1,5);return mq("احسب:",`10${SUP[n]}`,"1"+"0".repeat(n),["1"+"0".repeat(n+1),String(10*n)],`10 أس ${n} هو 1 متبوع بـ ${n} أصفار.`,"Puissance de 10")}
  const a=rnd2(2,99);return mq("احسب:",`${a}⁰`,1,[0,a],"كل عدد غير منعدم أس 0 يساوي 1.","Exposant 0")},
 ()=>{const a=rnd2(3,10)*10,b=rnd2(2,Math.floor((170-a)/10))*10,c=180-a-b;
  return mq("زاويتان في مثلث. ما قياس الزاوية الثالثة؟",`${a}° + ${b}° + ? = 180°`,c+"°",[(a+b)+"°",(360-a-b)+"°"],`مجموع زوايا المثلث 180°: ${LTR(`180 − ${a} − ${b} = ${c}`)}.`,"Somme des angles d'un triangle")},
 ()=>{const x=rnd2(2,17)*10;return mq("منصف الزاوية يقسمها إلى زاويتين. ما قياس كل واحدة؟",`${x}°`,x/2+"°",[x+"°",2*x+"°",x/4+"°"],`المنصف يقسم الزاوية إلى نصفين متساويين: ${LTR(`${x} ÷ 2 = ${x/2}`)}.`,"La bissectrice")},
 ()=>{const k=rnd2(2,9),a=rnd2(1,9),v=pick(["x","a","y"]);
  if(rnd2(0,1))return mq("انشر:",`${k}(${v} + ${a})`,`${k}${v} + ${k*a}`,[`${k}${v} + ${a}`,`${v} + ${k*a}`,`${k+a}${v}`],`نضرب ${k} في كل حد: ${LTR(`${k} × ${v} = ${k}${v}`)} و ${LTR(`${k} × ${a} = ${k*a}`)}.`,"Développer");
  return mq("عمّل:",`${k}${v} + ${k*a}`,`${k}(${v} + ${a})`,[`${k}(${v} + ${k*a})`,`${a}(${v} + ${k})`],`العامل المشترك هو ${k}: ${LTR(`${k}${v} + ${k*a} = ${k}(${v} + ${a})`)}.`,"Factoriser")},
 ()=>{const n=rnd2(2,9);if(rnd2(0,1))return mq("A' مماثلة A بالنسبة إلى O. احسب AA'.",`OA = ${n} cm`,`${2*n} cm`,[`${n} cm`,`${n/2} cm`],`O منتصف [AA']، إذن ${LTR(`AA' = 2 × ${n} = ${2*n}`)}.`,"Symétrie centrale");
  return mq("O منتصف [AA']. احسب OA.",`AA' = ${2*n} cm`,`${n} cm`,[`${2*n} cm`,`${4*n} cm`],`O منتصف [AA']، إذن ${LTR(`OA = ${2*n} ÷ 2 = ${n}`)}.`,"Symétrie centrale")},
 ()=>{const x=rnd2(1,15),a=rnd2(2,9),t=rnd2(0,2);
  if(t==0)return mq("حل المعادلة:",`x + ${a} = ${x+a}`,`x = ${x}`,[`x = ${x+2*a}`,`x = ${a}`],`نطرح ${a} من الطرفين: ${LTR(`x = ${x+a} − ${a} = ${x}`)}.`,"Équation");
  if(t==1)return mq("حل المعادلة:",`${a}x = ${a*x}`,`x = ${x}`,[`x = ${a*x-a}`,`x = ${a*x*a}`],`نقسم الطرفين على ${a}: ${LTR(`x = ${a*x} ÷ ${a} = ${x}`)}.`,"Équation");
  return mq("حل المعادلة:",`x − ${a} = ${x}`,`x = ${x+a}`,[`x = ${x-a}`,`x = ${a}`],`نضيف ${a} إلى الطرفين: ${LTR(`x = ${x} + ${a} = ${x+a}`)}.`,"Équation")},
 ()=>{const a=rnd2(4,17)*5,t=rnd2(0,2);
  if(t==0)return mq("في متوازي الأضلاع، زاوية قياسها كما يلي. ما قياس الزاوية المتتالية معها؟",`${a}°`,(180-a)+"°",[a+"°",(90-a)+"°"],`زاويتان متتاليتان في متوازي الأضلاع مجموعهما 180°: ${LTR(`180 − ${a} = ${180-a}`)}.`,"Parallélogramme");
  if(t==1)return mq("في متوازي الأضلاع، ما قياس الزاوية المقابلة؟",`${a}°`,a+"°",[(180-a)+"°",(2*a)+"°"],"الزوايا المتقابلة في متوازي الأضلاع متساوية.","Parallélogramme");
  const n=rnd2(3,12);return mq("ABCD متوازي أضلاع. احسب DC.",`AB = ${n} cm`,`${n} cm`,[`${2*n} cm`,`${n+2} cm`],"الأضلاع المتقابلة في متوازي الأضلاع متساوية: DC = AB.","Parallélogramme")},
 ()=>{const L=rnd2(3,12),l=rnd2(2,L-1),c=rnd2(2,12),t=rnd2(0,2);
  if(t==0)return mq("احسب محيط المستطيل:",`L = ${L} cm · l = ${l} cm`,`${2*(L+l)} cm`,[`${L*l} cm`,`${L+l} cm`],`المحيط = 2 × (الطول + العرض): ${LTR(`2 × (${L} + ${l}) = ${2*(L+l)}`)}.`,"Périmètre du rectangle");
  if(t==1)return mq("احسب مساحة المستطيل:",`L = ${L} cm · l = ${l} cm`,`${L*l} cm²`,[`${2*(L+l)} cm²`,`${L+l} cm²`],`المساحة = الطول × العرض: ${LTR(`${L} × ${l} = ${L*l}`)}.`,"Aire du rectangle");
  return mq("احسب محيط المربع:",`c = ${c} cm`,`${4*c} cm`,[`${c*c} cm`,`${2*c} cm`],`محيط المربع = 4 × الضلع: ${LTR(`4 × ${c} = ${4*c}`)}.`,"Périmètre du carré")},
 ()=>{const a=rnd2(4,17)*5,t=rnd2(0,2),N=[["الزاوية المقابلة لها بالرأس","opposés par le sommet"],["الزاوية المتبادلة داخليا معها","alternes-internes"],["الزاوية المتناظرة معها","correspondants"]][t];
  if(rnd2(0,2)===0)return mq("مستقيمان متوازيان وقاطع. زاويتان متجاورتان على نفس المستقيم. ما قياس الثانية؟",`${a}°`,(180-a)+"°",[a+"°",(90-a)+"°"],`زاويتان متجاورتان على مستقيم مجموعهما 180°: ${LTR(`180 − ${a} = ${180-a}`)}.`,"angles supplémentaires");
  return mq(`مستقيمان متوازيان وقاطع. ما قياس ${N[0]}؟`,`${a}°`,a+"°",[(180-a)+"°",(90-a)+"°"],`زاويتان ${N[0].includes("بالرأس")?"متقابلتان بالرأس":t==1?"متبادلتان داخليا":"متناظرتان"} متساويتان.`,N[1])},
 ()=>{const x=rnd2(-6,6),y=rnd2(-6,6);if(rnd2(0,1))return mq("ما هو أفصول النقطة A؟",`A(${nf(x)} ; ${nf(y)})`,x,[y,-x],"الأفصول هو العدد الأول بين القوسين، نقرؤه على المحور الأفقي.","l'abscisse");
  return mq("ما هو أرتوب النقطة A؟",`A(${nf(x)} ; ${nf(y)})`,y,[x,-y],"الأرتوب هو العدد الثاني بين القوسين، نقرؤه على المحور العمودي.","l'ordonnée")},
 ()=>{const r=rnd2(1,10),t=rnd2(0,2);
  if(t==0)return mq("احسب قطر الدائرة:",`r = ${r} cm`,`${2*r} cm`,[`${r/2} cm`,`${r*r} cm`],`القطر = 2 × الشعاع: ${LTR(`2 × ${r} = ${2*r}`)}.`,"le diamètre");
  if(t==1)return mq("احسب شعاع الدائرة:",`d = ${2*r} cm`,`${r} cm`,[`${4*r} cm`,`${2*r} cm`],`الشعاع = القطر ÷ 2: ${LTR(`${2*r} ÷ 2 = ${r}`)}.`,"le rayon");
  return mq("احسب محيط الدائرة (π ≈ 3,14):",`r = ${r} cm`,`${nf(2*3.14*r)} cm`,[`${nf(3.14*r)} cm`,`${nf(3.14*r*r)} cm`],`المحيط = 2 × π × r: ${LTR(`2 × 3,14 × ${r} = ${nf(2*3.14*r)}`)}.`,"le périmètre du cercle")},
 ()=>{if(rnd2(0,1)){const n=rnd2(2,6),p=rnd2(2,9);let m=rnd2(2,9);if(m===n)m++;return mq(`${n} أقلام ثمنها ${n*p} درهما. كم ثمن ${m} أقلام؟`,`${n} → ${n*p} DH · ${m} → ? DH`,`${m*p} DH`,[`${n*p+m} DH`,`${m*p+p} DH`],`ثمن قلم واحد: ${LTR(`${n*p} ÷ ${n} = ${p}`)}، ثم ${LTR(`${m} × ${p} = ${m*p}`)}.`,"Proportionnalité")}
  const p=pick([10,20,25,50]),N=rnd2(1,10)*20;return mq("احسب:",`${p} % × ${N}`,N*p/100,[N-p,p],`${LTR(`${N} × ${p} ÷ 100 = ${N*p/100}`)}.`,"Pourcentage")},
 ()=>{if(rnd2(0,1)){const e=[rnd2(1,8),rnd2(1,8),rnd2(1,8)],s=e[0]+e[1]+e[2];return mq("احسب الحصيص الإجمالي:",`${e[0]} + ${e[1]} + ${e[2]}`,s,[s+e[0],Math.max(...e)],`نجمع كل الحصيصات: ${LTR(`${e.join(" + ")} = ${s}`)}.`,"l'effectif total")}
  const N=pick([10,20]),e=rnd2(1,N-1);return mq(`${e} تلاميذ من أصل ${N}. ما هو التردد؟`,`${e} ÷ ${N}`,`${e*100/N} %`,[`${e} %`,`${N-e} %`,`${e*100/N+10} %`],`التردد = الحصيص ÷ الحصيص الإجمالي: ${LTR(`${e} ÷ ${N} = ${e*100/N} %`)}.`,"la fréquence")},
 ()=>{const t=rnd2(0,2);
  if(t==0){const c=rnd2(2,6);return mq("احسب حجم المكعب:",`c = ${c} cm`,`${c**3} cm³`,[`${c*c} cm³`,`${3*c} cm³`],`الحجم = ${LTR(`${c} × ${c} × ${c} = ${c**3}`)}.`,"Volume du cube")}
  const B=rnd2(2,12),h=rnd2(2,9);if(t==1)return mq("احسب حجم الموشور القائم:",`B = ${B} cm² · h = ${h} cm`,`${B*h} cm³`,[`${B+h} cm³`,`${2*B*h} cm³`],`الحجم = مساحة القاعدة × الارتفاع: ${LTR(`${B} × ${h} = ${B*h}`)}.`,"Volume du prisme");
  const L=rnd2(2,8),l=rnd2(2,6);return mq("احسب حجم متوازي المستطيلات:",`${L} cm × ${l} cm × ${h} cm`,`${L*l*h} cm³`,[`${L+l+h} cm³`,`${L*l} cm³`],`الحجم = ${LTR(`${L} × ${l} × ${h} = ${L*l*h}`)}.`,"Volume")}
];

// ----- textes des consignes : [arabe, français] -----
const TX={steps:["أكمل المراحل: ما الكلمة الناقصة؟","Complète les étapes : quel mot manque ?"],cards:["ما الكلمة المناسبة لهذا الشرح؟","Quel mot va avec cette explication ?"],
 mean:["ماذا تعني هذه الكلمة؟","Que veut dire ce mot ?"],cloze:["أكمل الجملة","Complète la phrase"],
 term:{fr:["ما هي الكلمة بالفرنسية؟","Quel est le mot en français ?"],en:["ما هي الكلمة بالإنجليزية؟","Quel est le mot en anglais ?"],ar:["ما هي الكلمة بالعربية؟","Quel est le mot en arabe ?"]}};
const stripD=t=>t.replace(/[ً-ْٰـ]/g,"");
const coreFr=t=>t.replace(/^(le |la |les |l'|l’|un |une |des )/i,"");
// cherche un terme dans une phrase (arabe : voyelles facultatives ; français : sans l'article)
function findTerm(sent,term,lang){
  const tries=lang==="ar"?[term,term.replace(/^ال/,"")]:[term,coreFr(term)];
  for(const t of tries){if(t.length<3)continue;
    const body=lang==="ar"?[...stripD(t)].map(c=>c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("[\\u064B-\\u0652\\u0670\\u0640]*"):t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    const m=new RegExp((lang==="ar"?"(?<![\\u0621-\\u064A])":"(?<!\\p{L})")+body+"(?!\\p{L})","iu").exec(sent);
    if(m)return {i:m.index,len:m[0].length,short:t!==term}}
  return null}

// ----- tous les jeux possibles pour une leçon -----
function genSet(s,L,ar){
  const TW=techWords(s,L),ui=ar||s.lang==="ar"?"ar":"fr",tl=TW[0]?TW[0].tl:"fr",ml=TW[0]?TW[0].ml:"ar",n=+(Object.keys(LESSONS).find(k=>LESSONS[k]===L)||"-1").split("-").pop();
  const W=TW.map(x=>[x.t,x.m,x.e]),G={ui,tl,ml,calc:null,learn:[],steps:[],find:[],exam:[]};
  const T=k=>({q:k[ui==="ar"?0:1],fr:k[ui==="ar"?1:0]});
  const expl=v=>ar?(v.sayAr||v.say):v.say;
  if(s.id==="maths"&&MATH[n])G.calc=MATH[n];
  // apprendre et répéter chaque mot technique
  G.learn=TW.map(x=>({kind:"learn",t:x.t,tr:x.m,e:x.e,lang:x.tl,trLang:x.ml}));
  // compléter les étapes déjà expliquées
  const subjSeq=[];Object.keys(LESSONS).filter(k=>k.startsWith(s.id+"-")).forEach(k=>(LESSONS[k].video||[]).forEach(v=>{if(v.vis&&Array.isArray(v.vis.v)&&["steps","cycle"].includes(v.vis.k))v.vis.v.forEach(x=>subjSeq.push(x))}));
  const seqs=L.video.filter(v=>v.vis&&["steps","cycle"].includes(v.vis.k)&&Array.isArray(v.vis.v)&&v.vis.v.length>=3&&new Set(v.vis.v).size===v.vis.v.length);
  const here=seqs.flatMap(v=>v.vis.v);G.seqs=seqs.map(v=>v.vis.v);
  seqs.forEach(v=>G.steps.push(()=>{const it=v.vis.v,i=rnd2(0,it.length-1);
    const pool=[...new Set([...shuffle(here),...shuffle(subjSeq)].filter(x=>!it.includes(x)))];
    const wrong=pool.length>=2?pool:shuffle(it.filter((_,j)=>j!==i));
    return {kind:"steps",...T(TX.steps),seq:it,gap:i,cyc:v.vis.k==="cycle",...opts(it[i],wrong),pool:wrong,why:expl(v),whyLang:ui,after:it.join(isAr(it.join(""))?" ، ":", ")}}));
  // relier un mot et son explication (cartes de la vidéo)
  L.video.filter(v=>v.vis&&v.vis.k==="cards"&&v.vis.v.length>=2&&new Set(v.vis.v.map(c=>c[0])).size===v.vis.v.length&&v.vis.v.every(c=>c[1]&&c[0]!==c[1])).forEach(v=>
    G.steps.push(()=>{const c=pick(v.vis.v);return {kind:"cards",...T(TX.cards),big:c[1],...opts(c[0],shuffle(v.vis.v.filter(x=>x!==c).map(x=>x[0]))),pool:v.vis.v.map(x=>x[0]),why:expl(v),whyLang:ui}}));
  // trouver le mot technique (dans les deux sens)
  if(W.length>=3){
    G.find.push(()=>{const w=pick(W);return {kind:"word",...T(TX.term[tl]),big:w[1],e:w[2],...opts(w[0],shuffle(W.filter(x=>x!==w).map(x=>x[0]))),pool:W.map(x=>x[0]),why:`${w[0]} = ${w[1]}`,whyLang:tl,rep:{t:w[0],lang:tl}}});
    G.find.push(()=>{const w=pick(W);return {kind:"word",...T(TX.mean),big:w[0],e:w[2],...opts(w[1],shuffle(W.filter(x=>x!==w).map(x=>x[1]))),pool:W.map(x=>x[1]),why:`${w[0]} = ${w[1]}`,whyLang:tl,rep:{t:w[0],lang:tl}}})}
  // phrases à trous tirées du cours
  const tlang=ar?"ar":s.lang==="en"?"en":s.lang,sents=[...L.video.map(v=>ar?v.sayAr:v.say),...((ar?L.essAr:L.essLang?[]:L.ess)||[])].filter(Boolean).flatMap(t=>t.match(/[^.!?؟]+[.!?؟]?/g)||[t]).map(x=>x.trim());
  const terms=TW.map(x=>({t:ar?(x.ar||x.m):(x.fr||x.t),fr:ar||x.tl!==(s.lang==="en"?"en":s.lang)?x.t:null,tl:x.tl}));
  const cand=[];sents.forEach(se=>terms.forEach(te=>{const f=findTerm(se,te.t,tlang);if(f)cand.push({se,te,f})}));
  if(cand.length&&terms.length>=3)G.find.push(()=>{const c=pick(cand),lab=t=>(c.f.short?(tlang==="ar"?t.t.replace(/^ال/,""):coreFr(t.t)):t.t)+(t.fr?` (${t.fr})`:"");
    const shown=c.se.slice(0,c.f.i)+"_____"+c.se.slice(c.f.i+c.f.len);
    return {kind:"cloze",...T(TX.cloze),big:shown,...opts(lab(c.te),shuffle(terms.filter(x=>x!==c.te)).map(lab)),pool:terms.map(lab),why:c.se,whyLang:tlang,after:c.se,afterLang:tlang,rep:c.te.fr?{t:c.te.fr,lang:c.te.tl}:null}});
  // questions de l'examen
  G.exam=(L.exam||[]).filter(q=>!ar||q.qAr).map(q=>()=>{const ch=q.vf?VF[ui]:ar&&q.chAr?q.chAr:q.ch;return {kind:"exam",q:ar?q.qAr:q.q,qLang:ar?"ar":s.lang,ch,a:q.a}});
  G.all=[...(G.calc?[G.calc,G.calc,G.calc]:[]),...G.steps,...G.find,...G.exam];
  return G}

// ----- le cours en arabe, avec les mots techniques en français -----
function arabize(L,s){const ck=L1()+L2();L._arab=L._arab||{};if(L._arab[ck])return L._arab[ck];const TW=techWords(s,L).filter(x=>x.fr);
  if(L1()!=="ar"){const A={...L,lex:TW.map(x=>[x.fr,L2()==="en"?x.t:x.ar]),lexT:L2()==="en"?"Mots techniques · English":"Mots clés en arabe",video:L.video.map(v=>({...v,ar:L2()==="en"?TW.filter(x=>findTerm(v.say,x.fr,"fr")).map(x=>[x.fr,x.t]):v.ar}))};return L._arab[ck]=A}
  const video=L.video.map(v=>({...v,say:v.sayAr||v.say,sayFr:v.sayAr&&L2()==="fr"?v.say:undefined,sayAr:undefined,fr:undefined,ar:TW.filter(x=>findTerm(v.say,x.fr,"fr")).map(x=>[x.t,x.ar])}));
  const lex=TW.map(x=>[x.t,x.ar]);if(L2()==="fr")(L.lex||[]).forEach(w=>{if(!lex.some(x=>x[0]===w[0]))lex.push(w)});
  const okAr=L.essAr&&L.essAr.length===L.ess.length,A={...L,video,ess:okAr?L.essAr:L.ess,essFr:okAr&&L2()==="fr"?L.ess:null,essAr:null,lex,lexT:"Les mots techniques · المصطلحات"};
  const G=genSet(s,L,true),ex=(L.exam||[]).filter(q=>q.qAr).map(q=>({q:q.qAr,vf:q.vf,ch:q.vf?undefined:(q.chAr||q.ch),a:q.a}));
  for(let g=0;ex.length<10&&g<80&&G.all.length;g++){const q=pick(G.all)();if(!q||q.kind==="exam")continue;
    let t=q.q;if(q.m)t+=" "+LTR(q.m);if(q.seq)t+=" "+LTR(q.seq.map((x,i)=>i===q.gap?"…":x).join(" → "));if(q.big)t+=" « "+q.big+" »";
    if(!ex.some(x=>x.q===t))ex.push({q:t,ch:q.ch,a:q.a})}
  A.exam=ex.length?ex:L.exam;return L._arab[ck]=A}

// ----- lire à voix haute un texte qui mélange l'arabe et le français : « الماء (l'eau) » -----
function partsOf(t,lat){const out=[];String(t).split(/(\([^)]*\))/).forEach(p=>{p=p.replace(/[()«»_]/g," ").replace(/\s+/g," ").trim();if(p)out.push({text:p,lang:isAr(p)?"ar":lat})});return out}
// un indice qui aide sans donner la réponse
function hintOf(q,A){if(q.hint)return q.hint;
  if(q.kind==="calc"&&q.why)return q.why.split(/[:،]/)[0]+" …";
  const g=String(q.ch[q.a]).replace(/\s*\(.*\)/,"").replace(/^(ال|le |la |les |l'|l’|un |une |des )/i,"").trim();
  if(q.kind==="vf"||q.vf)return A?"اقرأ الجملة جيدا، وتذكر الشرح.":"Lis bien la phrase et pense à l'explication.";
  return A?`الجواب يبدأ بـ « ${g.slice(0,2)}… »`:`La réponse commence par « ${g.slice(0,2)}… »`}
// rendre une question avec n choix (2 facile, 3 moyen, 4 difficile)
function resize(q,n,pool=[]){if(!q.ch||q.kind==="vf"||q.vf)return q;pool=[...(q.pool||[]),...pool];const g=q.ch[q.a];let w=q.ch.filter((_,i)=>i!==q.a);
  for(const p of shuffle(pool))if(w.length<n-1&&p!==g&&!w.includes(p))w.push(p);
  const num=parseFloat(String(g).replace(",",".").replace("−","-"));
  if(/^[−-]?\d+(,\d+)?$/.test(g))for(let d=1;w.length<n-1&&d<9;d++)[num+d,num-d].forEach(v=>{const t=nf(v);if(w.length<n-1&&t!==g&&!w.includes(t))w.push(t)});
  w=shuffle(w).slice(0,n-1);const ch=shuffle([g,...w]);return {...q,ch,a:ch.indexOf(g)}}

// ----- une question à l'écran : tout est lu (question, chaque réponse, explication) -----
// o = {ui, lat, top, mode:"game"|"exam", hint, onNext(justeDuPremierCoup)}
function questionView(P,s,q,o){window.__q=q;const A=o.ui==="ar",rtl=A?' dir="rtl"':"",tr=(a,f)=>A?a:f,exam=o.mode==="exam";let first=true,locked=false;
  const seqDir=q.seq&&isAr(q.seq.join(""))?"rtl":"ltr";
  P.innerHTML=o.top+`<div class="${exam?"":"qstage"}"${rtl}><div class="q"><span class="tx sent" id="gq">${esc(q.q)}${q.fr?`<small class="qfr" dir="auto">${esc(q.fr)}</small>`:""}</span></div>
   ${q.m?`<div class="gm sent" id="gm" dir="ltr">${esc(q.m)}</div>`:""}
   ${q.seq?`<div class="gseq" dir="${seqDir}">${q.seq.map((x,i)=>(i?`<span class="ar2">${seqDir==="rtl"?"←":"→"}</span>`:"")+(i===q.gap?`<b class="gap" id="ggap">?</b>`:`<b>${esc(x)}</b>`)).join("")}${q.cyc?`<span class="ar2">↺</span>`:""}</div>`:""}
   ${q.big?`<div class="gbig sent" id="gbig" dir="auto">${q.e?emo(q.e,"gemo"):""}<span>${esc(q.big)}</span></div>`:""}
   <div class="choices">${q.ch.map((c,j)=>`<button class="ch sent" dir="auto" data-k="${j}"><small class="chn">${j+1}</small> ${esc(c)}</button>`).join("")}</div>
   <div class="fb" id="gfb" aria-live="polite"></div><div class="ghelp" id="ghelp" hidden></div><div id="grep"></div>
   <div class="ctrl"><button class="ghost" id="gread">🔊 ${tr("اقرأ كل شيء","Tout relire")}</button>${o.hint?`<button class="ghost" id="gind">🔍 ${tr("تلميح","Indice")}</button>`:""}${!exam&&q.why?`<button class="ghost" id="ghb">💡 ${tr("اشرح لي","Explique-moi")}</button>`:""}<span style="flex:1"></span><button class="play" id="gnx" hidden style="--c:${s.c}">${tr("التالي ▶","Suivant ▶")}</button></div></div>`;
  const btns=[...P.querySelectorAll("[data-k]")],say=(it,done)=>speakSeq(it,o.ui,done);
  const readAll=cb=>{const it=partsOf(q.q,o.lat).map(x=>({...x,el:$("#gq")}));
    if(q.m)it.push({text:q.m,lang:o.ui,el:$("#gm")});
    if(q.seq)q.seq.forEach((x,i)=>it.push(...partsOf(i===q.gap?tr("ماذا؟","quoi ?"):x,o.lat)));
    if(q.big)it.push(...partsOf(q.big,o.lat).map(x=>({...x,el:$("#gbig")})));
    btns.forEach((b,j)=>{if(b.disabled&&!b.classList.contains("good"))return;it.push({text:tr("الجواب "+(j+1),"Réponse "+(j+1)),lang:o.ui,el:b},...partsOf(q.ch[j],o.lat).map(x=>({...x,el:b})))});
    say(it,cb)};
  const why=()=>q.why?partsOf(q.why,o.lat):[];
  const showHelp=(txt,ico="💡")=>{const h=$("#ghelp");h.hidden=false;h.innerHTML=`<b>${ico}</b> <span dir="auto">${esc(txt)}</span>`};
  const fill=()=>{if(q.seq&&$("#ggap"))$("#ggap").outerHTML=`<b class="filled">${esc(q.seq[q.gap])}</b>`};
  // pédagogie : on écoute d'abord (pas de réponse au hasard), on prend son temps, et après 2 erreurs Lumi réexplique
  let unlockAt=0,tries=0,lockT=null,teach=false;const fb=(c,t)=>{const f=$("#gfb");if(f){f.className="fb "+c;f.textContent=t}};
  const LISTEN=tr("👂 استمع إلى السؤال أولا…","👂 Écoute d'abord la question…");
  const lockAll=(on,msg)=>{clearTimeout(lockT);btns.forEach(b=>b.classList.toggle("locked",on));if(on)fb(msg?"ko":"listen",msg||LISTEN);else{unlockAt=Date.now();if($("#gfb")&&$("#gfb").classList.contains("listen"))fb("","")}};
  const est=()=>Math.min(14000,((q.q||"")+" "+(q.m||"")+" "+(q.big||"")+" "+q.ch.join(" ")).split(/\s+/).length*450);
  lockAll(true);readAll(()=>lockAll(false));lockT=setTimeout(()=>lockAll(false),Math.max(3500,est()));$("#gread").onclick=()=>readAll();$("#gnx").onclick=()=>o.onNext(first);
  if($("#ghb"))$("#ghb").onclick=()=>{first=false;showHelp(q.why);say(why())};
  if($("#gind"))$("#gind").onclick=()=>{first=false;const left=btns.filter((b,j)=>j!==q.a&&!b.disabled);
    if(left.length>1){const b=pick(left);b.disabled=true;b.classList.add("done")}
    const h=hintOf(q,A);showHelp(h,"🔍");say(partsOf(h,o.lat))};
  btns.forEach(b=>b.onclick=()=>{if(locked)return;const k=+b.dataset.k,ok=k===q.a;
    if(b.classList.contains("locked")){b.classList.remove("shake");void b.offsetWidth;b.classList.add("shake");say([{text:tr("استمع جيدا إلى السؤال أولا.","Écoute d'abord la question."),lang:o.ui}]);return}
    if(teach&&!ok)return;
    if(!exam&&!ok&&!teach&&Date.now()-unlockAt<1300){first=false;lumiMood("think");const m=tr("⏳ خذ وقتك. نقرأ السؤال معا.","⏳ Prends ton temps. On relit la question ensemble.");lockAll(true,m);
      say([{text:tr("خذ وقتك. نقرأ السؤال معا.","Prends ton temps. On relit la question ensemble."),lang:o.ui}],()=>readAll(()=>lockAll(false)));return}
    if(ok||exam){locked=true;btns.forEach(x=>x.disabled=true);fill();
      const right=btns[q.a];right.classList.add("good");if(!ok){b.classList.add("bad");first=false}
      if(ok&&!exam)fxBurst(b);
      if(ok){chime();$("#gfb").className="fb ok";$("#gfb").textContent=first?"⭐ "+bravo(o.ui):teach?"👍 "+tr("فهمت! سنعيد هذا السؤال بعد قليل.","Bien ! On reverra cette question tout à l'heure."):"👍 "+bravo(o.ui)}else{buzz();$("#gfb").className="fb ko";$("#gfb").textContent=tr("الجواب الصحيح: ","La bonne réponse : ")+q.ch[q.a]}
      if(q.why)showHelp(q.why);
      const it=[{text:ok?bravo(o.ui):tr("الجواب الصحيح هو","La bonne réponse est"),lang:o.ui},...(ok?[]:partsOf(q.ch[q.a],o.lat)),...why()];
      if(q.after&&q.after!==q.why)it.push(...partsOf(q.after,o.lat));
      $("#gnx").hidden=false;
      say(it,()=>{if(!ok||!q.rep||!q.rep.t||!document.body.contains(P))return;
        $("#grep").innerHTML=`<p class="kicker"${rtl}>🎤 ${tr("كرر المصطلح بالفرنسية","Répète le mot")}</p><div id="grp"></div>`;
        repeatBlock($("#grp"),q.rep.t,q.rep.lang,()=>{chime();addStars(1);o.onNext(first)});sayOne(q.rep.t,q.rep.lang)})}
    else{first=false;tries++;buzz();b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");b.disabled=true;
      if(tries>=2||btns.filter(x=>!x.disabled).length<=1){// apprentissage sans erreur : Lumi montre et explique, l'enfant touche la bonne réponse
        teach=true;btns.forEach((x,j)=>{if(j!==q.a){x.disabled=true;x.classList.add("done")}});btns[q.a].classList.add("teach");if(q.why)showHelp(q.why);
        lockAll(true,tr("💡 لنتذكر معا: الجواب الصحيح هو ","💡 On se rappelle ensemble : la bonne réponse est ")+q.ch[q.a]);
        say([{text:tr("لنتذكر معا.","On se rappelle ensemble."),lang:o.ui},...why(),{text:tr("الجواب الصحيح هو","La bonne réponse est"),lang:o.ui},...partsOf(q.ch[q.a],o.lat),{text:tr("المسه الآن.","Touche-la maintenant."),lang:o.ui}],()=>lockAll(false));
        o.requeue&&o.requeue(q)}
      else{const m=tr("حاول مرة أخرى! استمع إلى الشرح 💡","Presque ! Écoute l'explication 💡 puis essaie encore.");if(q.why)showHelp(q.why);lockAll(true,m);
        say([{text:tr("حاول مرة أخرى.","Essaie encore."),lang:o.ui},...why(),...partsOf(q.q,o.lat)],()=>lockAll(false))}}})}

// ----- l'onglet « Jeux » d'une leçon -----
function mountGen(P,s,L0,key){
  const ar=arMode(s.id),G=genSet(s,L0,ar),ui=G.ui,A=ui==="ar",rtl=A?' dir="rtl"':"",lat=s.lang==="en"?"en":"fr",tr=(a,f)=>A?a:f;
  const modes=[G.calc&&["calc","🔢","احسب واختر الجواب الصحيح","Calcule et choisis la bonne réponse"],
   G.learn.length&&["learn","📚","تعلم المصطلحات وكرر كل كلمة","Apprends les mots et répète chaque mot"],
   G.steps.length&&["steps","🧩","أكمل المراحل التي شرحناها","Complète les étapes du cours"],
   G.find.length&&["find","🎯","جد الكلمة المناسبة","Trouve le bon mot"],
   ["mix","🏆","التحدي: كل الألعاب","Le défi : tous les jeux"]].filter(Boolean);
  const menu=()=>{stopSpeak();
    P.innerHTML=`<div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub"${rtl}>${tr("اختر لعبة! كل لعبة تتغير في كل مرة.","Choisis un jeu ! Chaque jeu change à chaque fois.")}</div></div></div>
     <div class="jhub">${modes.map(([k,e,a,f])=>`<button class="jtile" data-m="${k}" style="--c:${s.c}">${emo(e,"jico")}<b${A?' dir="rtl"':""}>${A?a:f}</b><small${A?"":' dir="rtl"'}>${A?f:a}</small></button>`).join("")}</div>`;
    sayOne(tr("اختر لعبة!","Choisis un jeu !"),ui);P.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>run(b.dataset.m))};
  const make=m=>{const f=n=>{const out=[];for(let g=0;out.length<n&&g<n*8;g++){const fn=pick(m==="calc"?[G.calc]:m==="steps"?G.steps:m==="find"?G.find:G.all);const q=fn&&fn();if(q&&!out.some(o=>o.q===q.q&&(o.m||o.big||o.gap)===(q.m||q.big||q.gap)))out.push(q)}return out};
    return m==="learn"?G.learn:m==="calc"?f(8):m==="mix"?f(10):f(Math.min(8,Math.max(4,(m==="steps"?G.steps:G.find).length*3)))};
  const run=m=>{const qs=make(m),r=newRun(qs.length);let k=0,good=0;
    const top=()=>{r.total=qs.length;r.done=Math.max(0,k-1);return `<div class="advtop"><button class="ghost" id="gmenu">↩ ${tr("الألعاب","Les jeux")}</button><span class="dcount">${k} / ${qs.length}</span></div>`+hudHTML(r)};
    const next=ok=>{if(ok){good++;runHit(r)}else if(k)runMiss(r);stopSpeak();if(!document.body.contains(P))return;if(k>=qs.length)return end();const q=qs[k++];
      if(q.kind==="learn")learnQ(q);else{questionView(P,s,q,{ui,lat,top:top(),mode:"game",hint:true,onNext:next,requeue:q2=>{if(!q2._again)qs.push(reshuf({...q2,_again:true}))}});$("#gmenu").onclick=menu}};
    const learnQ=q=>{P.innerHTML=top()+`<div class="saycard" style="--c:${s.c}">${emo(q.e||"⭐","emo")}<div class="lw" dir="auto">${q.lang==="fr"?q.t.split(" ").map(x=>colorWord(x,"fr")).join(" "):esc(q.t)}</div><div class="tr${q.trLang==="ar"?" ar":""}" dir="auto">${esc(q.tr)}</div></div><div id="rp"></div><div class="fb" id="gfb"></div>`;
      $("#gmenu").onclick=menu;speakSeq([{text:q.t,lang:q.lang},{text:q.tr,lang:q.trLang},{text:q.t,lang:q.lang}],q.lang);
      repeatBlock($("#rp"),q.t,q.lang,()=>{chime();$("#gfb").className="fb ok";$("#gfb").textContent="⭐ "+bravo(ui);setTimeout(()=>next(true),900)})};
    const end=()=>{const st=Math.max(1,Math.round(good/3));S.games[key]=S.games[key]||{};S.games[key][m]=1;learn("g",[key,m,good,qs.length]);r.done=qs.length;
      const br=bravo(ui);gameEnd(P,{run:r,id:"jeu-"+key+"-"+m,stars:st,c:s.c,title:br,sub:tr(`${good} من ${qs.length} من أول محاولة`,`${good} sur ${qs.length} du premier coup`),again:()=>run(m),more:[[tr("ألعاب أخرى","Autres jeux"),menu]]});sayOne(br,ui)};
    next(false)};
  menu()}

// ----- l'examen : 3 niveaux, avec des questions différentes des jeux -----
// facile : vrai ou faux, 2 réponses, indice permis · moyen : 3 réponses · difficile : 4 réponses, sans indice
const LEVELS=[[1,"🟢","سهل","Facile",6],[2,"🟡","متوسط","Moyen",8],[3,"🔴","صعب","Difficile",10]];
function calcLv(fn,lv){const c=[];for(let i=0;i<14;i++){const q=fn();if(q)c.push(q)}if(!c.length)return null;
  const size=q=>((q.m||"")+q.ch[q.a]).replace(/[^\d]/g,"").length;c.sort((a,b)=>size(a)-size(b));
  const third=Math.max(1,Math.floor(c.length/3)),part=lv===1?c.slice(0,third):lv===3?c.slice(-third):c.slice(third,c.length-third);
  return {q:pick(part.length?part:c),pool:c.map(x=>x.ch[x.a])}}
function genExam(s,L,ar,lv){const G=genSet(s,L,ar),ui=G.ui,A=ui==="ar",W=(L.words||[]).filter(w=>w[0]&&w[1]),nC=lv+1,N=LEVELS[lv-1][4],gens=[];
  const VFq=(t,ok,why)=>({kind:"vf",q:t,ch:VF[ui].slice(),a:ok?0:1,why,whyLang:ui});
  if(G.calc)for(let i=0;i<4;i++)gens.push(()=>{const r=calcLv(G.calc,lv);return r&&resize(r.q,nC,r.pool)});
  if(lv===1){
    W.forEach(w=>gens.push(()=>{const ok=Math.random()<.5,o=ok?w:pick(W.filter(x=>x!==w));return VFq(A?`« ${w[0]} » تعني « ${o[1]} »`:`« ${w[0]} » veut dire « ${o[1]} »`,ok,`${w[0]} = ${w[1]}`)}));
    (G.seqs||[]).forEach(it=>gens.push(()=>{const i=rnd2(0,it.length-2),ok=Math.random()<.5,j=ok?i+1:pick(it.map((_,x)=>x).filter(x=>x!==i+1&&x!==i));
      return VFq(A?`بعد « ${it[i]} » تأتي « ${it[j]} »`:`Après « ${it[i]} », il y a « ${it[j]} »`,ok,it.join(" → "))}));
    (L.exam||[]).filter(q=>q.vf&&(!ar||q.qAr)).forEach(q=>gens.push(()=>({kind:"vf",q:ar?q.qAr:q.q,ch:VF[ui].slice(),a:q.a})));
    G.find.slice(0,1).forEach(f=>gens.push(()=>resize(f(),2)))}
  else{
    G.steps.forEach(f=>gens.push(()=>resize(f(),nC)));G.find.forEach(f=>gens.push(()=>resize(f(),nC)));
    G.exam.forEach(f=>gens.push(()=>{const q=f();return q.ch.length>=2&&!(L.exam||[]).find(x=>x.vf&&(x.qAr===q.q||x.q===q.q))?resize(q,nC):q}))}
  if(lv===3)(G.seqs||[]).forEach(it=>gens.push(()=>{const i=rnd2(0,it.length-2);
    return resize({kind:"after",q:A?`ما الذي يأتي بعد « ${it[i]} »؟`:`Qu'est-ce qui vient après « ${it[i]} » ?`,...opts(it[i+1],shuffle(it.filter((_,j)=>j!==i+1))),why:it.join(" → ")},nC,G.seqs.flat().filter(x=>x!==it[i]))}));
  const out=[];for(let g=0;out.length<N&&g<N*10&&gens.length;g++){const q=pick(gens)();if(q&&q.ch&&q.ch.length>=2&&!out.some(o=>o.q===q.q&&(o.m||o.big||"")===(q.m||q.big||"")))out.push({...q,rep:null})}
  return out}
function mountExamLv(P,s,L0,key){
  const ar=arMode(s.id),ui=ar||s.lang==="ar"?"ar":"fr",A=ui==="ar",rtl=A?' dir="rtl"':"",lat=s.lang==="en"?"en":"fr",tr=(a,f)=>A?a:f;S.ex=S.ex||{};
  const menu=()=>{stopSpeak();const best=S.ex[key]||{};
    P.innerHTML=`<div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub"${rtl}>${tr("اختر مستوى الامتحان. ابدأ بالسهل!","Choisis le niveau de l'examen. Commence par le facile !")}</div></div></div>
     <div class="jhub">${LEVELS.map(([lv,e,a,f,n])=>`<button class="jtile" data-lv="${lv}" style="--c:${["#2E9E62","#C99400","#D64545"][lv-1]}"><span class="emotxt jico">${e}</span><b>${A?a:f} · ${A?f:a}</b><small>${n} ${tr("أسئلة","questions")} · ${lv+1} ${tr("أجوبة","réponses")}${lv===1?tr(" · مع تلميح"," · avec indice"):""}${best[lv]!=null?` · ${tr("أفضل نقطة","meilleure note")} ${best[lv]}/20`:""}</small></button>`).join("")}</div>`;
    sayOne(tr("اختر مستوى الامتحان.","Choisis le niveau de l'examen."),ui);P.querySelectorAll("[data-lv]").forEach(b=>b.onclick=()=>start(+b.dataset.lv))};
  const start=lv=>{const qs=genExam(s,L0,ar,lv);let k=0,good=0;if(!qs.length)return menu();
    const next=ok=>{if(ok)good++;stopSpeak();if(!document.body.contains(P))return;if(k>=qs.length)return end();const q=qs[k++];
      questionView(P,s,q,{ui,lat,mode:"exam",hint:lv===1,onNext:next,top:`<div class="gtop"><button class="ghost" id="xmenu">↩</button><span class="noteline" style="margin:0">${LEVELS[lv-1][1]} ${tr("سؤال","Question")} ${k} / ${qs.length}</span><div class="progress"><span style="width:${100*(k-1)/qs.length}%"></span></div></div>`});
      $("#xmenu").onclick=menu};
    const end=()=>{const note=Math.round(20*good/qs.length);S.ex[key]=S.ex[key]||{};S.ex[key][lv]=Math.max(S.ex[key][lv]||0,note);S.best[key]=Math.max(S.best[key]||0,note);learn("ex",[key,lv,note]);
      const st=starsFor(note);addStars(st);
      P.innerHTML=`<div class="exam-res"><div class="cele-emo">${emo(note>=10?"🏆":"💪","celeimg")}</div><h2>${note} / 20</h2><p${rtl}>${tr(`${good} أجوبة صحيحة من ${qs.length}`,`${good} bonnes réponses sur ${qs.length}`)} ${"★".repeat(st)}</p>
        <div class="ctrl" style="justify-content:center"><button class="play" id="xagain" style="--c:${s.c}">↻ ${tr("امتحان جديد","Un nouvel examen")}</button>${lv<3&&note>=14?`<button class="play" id="xup" style="--c:#D64545">${tr("المستوى التالي ▶","Niveau suivant ▶")}</button>`:""}<button class="ghost" id="xmenu">${tr("المستويات","Les niveaux")}</button></div></div>`;
      chime();sayOne(tr(`نقطتك ${note} على 20.`,`Ta note : ${note} sur 20.`),ui);$("#xagain").onclick=()=>start(lv);$("#xmenu").onclick=menu;if($("#xup"))$("#xup").onclick=()=>start(lv+1)};
    next(false)};
  menu()}

// ----- textes de l'interface : en arabe, avec la traduction française dessous (si l'enfant a choisi l'arabe) -----
function tt(ar,fr){return L1()==="ar"?`<span dir="rtl">${ar}</span><small class="trf" dir="ltr">${fr}</small>`:fr}
function ts(ar,fr){return L1()==="ar"?`${ar} · ${fr}`:fr}
// lit l'arabe puis le français
function sayBoth(ar,fr,done){speakSeq(L1()==="ar"?[{text:ar,lang:"ar"},{text:fr,lang:"fr"}]:[{text:fr,lang:"fr"}],L1()==="ar"?"ar":"fr",done)}

// ----- « Le cours en jeu » : une question pour une seule étape du cours -----
function stepWords(s,L,i){const v=L.video[i];if(!v)return [];const tl=s.lang==="en"?"en":s.lang;
  return techWords(s,L).filter(x=>findTerm(v.say,x.fr||x.t,tl))}
const key2n=L=>+(Object.keys(LESSONS).find(k=>LESSONS[k]===L)||"-1").split("-").pop();
function stepQuestion(s,L,ar,i){const v=L.video[i];if(!v)return null;
  const one={...L,video:[v],ess:[],essAr:[],exam:[]},G=genSet(s,one,ar),words=stepWords(s,L,i).map(x=>x.t);
  if(G.steps.length)return pick(G.steps)();
  const cl=G.find.map(f=>f()).find(q=>q&&q.kind==="cloze");if(cl)return cl;
  if(words.length)for(let k=0;k<12;k++){const q=pick(G.find)();if(q&&q.kind==="word"&&q.rep&&words.includes(q.rep.t))return q}
  const n=key2n(L);if(s.id==="maths"&&MATH[n])return MATH[n]();
  const all=genSet(s,L,ar).all;return all.length?pick(all)():null}
// une carte « apprends et répète le mot »
function learnView(P,s,q,ui,top,onDone){
  P.innerHTML=top+`<p class="kicker"${ui==="ar"?' dir="rtl"':""}>${tt("🎤 تعلم المصطلح وكرره","🎤 Apprends le mot et répète-le")}</p><div class="saycard" style="--c:${s.c}">${emo(q.e||"⭐","emo")}<div class="lw" dir="auto">${q.lang==="fr"?q.t.split(" ").map(x=>colorWord(x,"fr")).join(" "):esc(q.t)}</div><div class="tr${q.trLang==="ar"?" ar":""}" dir="auto">${esc(q.tr)}</div></div><div id="rp"></div><div class="fb" id="gfb"></div>`;
  speakSeq([{text:q.t,lang:q.lang},{text:q.tr,lang:q.trLang},{text:q.t,lang:q.lang}],q.lang);
  repeatBlock($("#rp",P),q.t,q.lang,()=>{chime();addStars(1);const f=$("#gfb",P);f.className="fb ok";f.textContent="⭐ "+bravo(ui);setTimeout(onDone,900)})}

// remet les réponses dans un autre ordre (pour la question qui revient plus tard)
function reshuf(q){if(!q.ch||q.vf||q.kind==="vf")return q;const idx=shuffle(q.ch.map((_,i)=>i));return {...q,ch:idx.map(i=>q.ch[i]),a:idx.indexOf(q.a)}}
