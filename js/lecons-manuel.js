// ===== Français et anglais : les MÊMES leçons que les manuels de Ghita =====
// Français : manuel « Période 1 – D'un monde à l'autre » (6 unités : conte merveilleux, légende, utopie,
// nouvelle réaliste, nouvelle fantastique, fable) + les fiches du prof (emplois du présent, connecteurs).
// Anglais : le manuel (Welcome + Units 1 à 8) + l'examen d'entraînement du prof (même format : 4 sections, 30 points).
// Chaque leçon a un onglet « 📝 Exercices du prof » (voir js/devoir.js).
(function(){
  const F=SUBJECTS.find(s=>s.id==="francais"),E=SUBJECTS.find(s=>s.id==="anglais");
  Object.keys(LESSONS).filter(k=>/^(francais|anglais)-/.test(k)).forEach(k=>delete LESSONS[k]);
  F.sem=[
   ["Unité 1 · Le conte merveilleux (manuel p. 12)",[
    "Le conte merveilleux : c'est quoi ?","Texte 1 : Le gros navet","Texte 2 : Le pêcheur et le génie","Texte 3 : Le Petit Chaperon Rouge","Texte 4 : Cendrillon",
    "Langue : Le champ lexical","Langue : La comparaison","Langue : Les temps du récit","Langue : Les emplois du présent de l'indicatif",
    "Langue : La négation","Langue : Les conjonctions de coordination","Langue : Les connecteurs spatiaux et temporels","Langue : Les pronoms personnels sujets",
    "Je fais le point : le conte merveilleux","Évaluation de l'unité 1 (comme en classe)"]],
   ["Unité 2 · La légende (p. 38)",["La légende : Aïcha Kandicha, Tristan et Iseut, Isli et Tislit","Langue : Métaphore, hyperbole, personnification","Langue : Imparfait et passé simple","Langue : Le COD et le COI"]],
   ["Unité 3 · L'utopie (p. 58)",["L'utopie : un monde idéal","Langue : Synonymes, antonymes et énumération","Langue : Le superlatif et la question rhétorique"]],
   ["Unité 4 · La nouvelle réaliste (p. 78)",["La nouvelle réaliste : La parure, Le papa de Simon, La Dernière Classe","Langue : Le discours direct et indirect","Langue : Les types de phrases"]],
   ["Unité 5 · La nouvelle fantastique (p. 98)",["La nouvelle fantastique : La Cafetière, Évasion, La peur","Langue : Le vocabulaire du surnaturel"]],
   ["Unité 6 · La fable (p. 118)",["La fable : Le Corbeau et le Renard, La Cigale et la Fourmi…","Langue : La morale et la modalisation"]]];
  F.detail=null;
  E.sem=[
   ["Semestre 1 · Welcome, Units 1 – 2",["Welcome : classroom, colours, school subjects","Unit 1 · This is my life : family and descriptions","Unit 1 · Grammar : be, there is / there are, a / an / some / any",
     "Unit 2 · Welcome to our school : routines and present simple","Unit 2 · Adverbs of frequency","Practice Exam – Semester 1 (comme le prof)",
     "L'examen du prof : A House in the Trees (corrigé expliqué)","Vocabulary : places in school","Writing : describing people","Grammar : plural nouns (série du prof)","Défi ⭐⭐⭐ : present simple, niveau avancé (série du prof)"]],
   ["Units 3 – 8",["Unit 3 · What do you want to play? Comparatives and superlatives","Unit 4 · What we wear : present continuous","Unit 5 · Eat up : food, some / any, much / many",
     "Unit 6 · Island life : past simple","Unit 7 · Let's start a band : object pronouns, past questions","Unit 8 · Around town : be going to, will / won't"]]];
  E.detail=["subject pronouns · prepositions of place · possessive adjectives · can · 's · have got","family · physical descriptions · personality adjectives",
    "present simple of be · there is / there are","routine activities · free-time activities · present simple","always · usually · often · sometimes · never",
    "Reading · Vocabulary · Grammar · Writing — 30 points","le vrai site du prof, question par question, avec les explications","cafeteria · gym · library · ICT room · science lab · hall","tall · slim · curly hair · friendly · funny","-s · -es · -ies · -ves · man ➜ men · child ➜ children","agreement · questions · simple or continuous (très difficile)","adjectives · sports · comparative · superlative","clothes · feelings · present continuous",
    "food · countable / uncountable · can / must","geographical features · weather · past simple","music · stages of life · object pronouns","in a town · be going to · will / won't"];
})();

// ---------- UNITÉ 1 : LE CONTE MERVEILLEUX ----------
K("francais-0",{p:"Manuel p. 12 à 37",v:[
 ["Un conte, c'est quoi ?","Un conte est une histoire inventée. Elle se passe dans un temps lointain, dans un monde qui n'existe pas vraiment.","الحكاية قصة خيالية، تقع في زمن بعيد، في عالم غير حقيقي.","📖 ✨"],
 ["La formule d'entrée","Le conte commence souvent par une formule : Il était une fois… ou Autrefois…","تبدأ الحكاية غالبا بعبارة: كان يا ما كان.","Il était une fois…"],
 ["Le merveilleux","Dans le conte merveilleux, il y a de la magie : une fée, un génie, un animal qui parle, un objet magique. Personne n'est étonné.","في الحكاية العجيبة سحر: جنية، جني، حيوان يتكلم، شيء سحري. ولا أحد يستغرب.",[["la fée","🧚 magie"],["le génie","🧞 vœux"],["l'animal qui parle","🐺 parle"],["l'objet magique","🪄 pouvoir"]]],
 ["Le schéma narratif","Le conte a cinq étapes : la situation initiale, l'élément perturbateur, les péripéties, l'élément de résolution, la situation finale.","للحكاية خمس مراحل: الوضعية البدئية، العنصر المخل، الأحداث، عنصر الحل، الوضعية النهائية.",["Situation initiale","Élément perturbateur","Péripéties","Résolution","Situation finale"]],
 ["Les personnages","Il y a le héros, ses adjuvants qui l'aident, et ses opposants qui l'empêchent de réussir.","هناك البطل، والمساعدون الذين يساعدونه، والمعارضون الذين يعرقلونه.",[["le héros","⭐ Cendrillon"],["l'adjuvant","🤝 la fée"],["l'opposant","😠 la belle-mère"]]],
 ["La fin","Le conte finit souvent bien. On trouve une formule de fin : Ils vécurent heureux… Il y a souvent une leçon, une morale.","تنتهي الحكاية غالبا نهاية سعيدة، وفيها عبرة.","Ils vécurent heureux 💛"]],
 e:["Le conte commence par une formule : « Il était une fois ».","Le merveilleux : la magie paraît normale.","Cinq étapes : situation initiale, élément perturbateur, péripéties, résolution, situation finale.","Le héros a des adjuvants (aides) et des opposants (ennemis)."],
 ea:["تبدأ الحكاية بعبارة: كان يا ما كان.","العجيب: السحر يبدو عاديا.","خمس مراحل: البداية، العنصر المخل، الأحداث، الحل، النهاية.","للبطل مساعدون ومعارضون."],
 w:[["le conte","الحكاية","📖"],["la fée","الجنية","🧚"],["le génie","الجني","🧞"],["le héros","البطل","⭐"],["l'adjuvant","المساعد","🤝"],["l'opposant","المعارض","😠"],["la morale","العبرة","💡"]],
 s:["Il était une fois, dans un pays lointain,","Une fée, un génie, un loup sur le chemin,","Un problème arrive, le héros part au loin,","Il gagne à la fin, et tout va bien !"],
 x:[["Un conte commence souvent par…",["Il était une fois","Hier matin","Cher ami"]],["La 2e étape du schéma narratif s'appelle…",["l'élément perturbateur","la situation finale","la morale"]],["Le personnage qui aide le héros est…",["l'adjuvant","l'opposant","le narrateur"]],["Dans le conte merveilleux, la magie étonne tout le monde.",false],["Les péripéties sont les aventures du héros.",true],["« Ils vécurent heureux » est une formule de…",["fin","début","dialogue"]]],
 d:{title:"Le conte merveilleux",sub:"Comme en classe : reconnaître les étapes et les personnages.",sec:[
  {t:"Le schéma narratif",ar:"رتب مراحل الحكاية.",help:"Situation initiale : le début, tout est calme. Élément perturbateur : un problème arrive. Péripéties : les aventures. Élément de résolution : le problème est réglé. Situation finale : la nouvelle situation, à la fin.",
   textT:"Le petit tailleur (résumé)",text:"Il était une fois un petit tailleur qui vivait tranquillement dans son atelier. Un jour, un géant terrible attaqua le village. Le tailleur partit l'affronter. Il traversa la forêt et trompa le géant deux fois. Grâce à sa ruse, le géant s'enfuit pour toujours. Le roi récompensa le petit tailleur, qui vécut heureux.",
   it:[{k:"fill",q:"Retrouve l'étape de chaque phrase.",text:"« Il vivait tranquillement dans son atelier » : [1]. « Un géant attaqua le village » : [2]. « Il traversa la forêt et trompa le géant » : [3]. « Le géant s'enfuit » : [4]. « Le roi le récompensa » : [5].",
     bank:["situation initiale","élément perturbateur","péripéties","résolution","situation finale"],ans:["situation initiale","élément perturbateur","péripéties","résolution","situation finale"],why:"L'ordre est toujours le même : début calme, problème, aventures, solution, fin.",pts:5},
    {k:"mcq",q:"Quelle est la formule d'entrée de ce conte ?",ch:["Il était une fois","Un jour","Pour toujours"],why:"« Il était une fois » ouvre le conte et nous emmène dans un temps lointain."}]},
  {t:"Les personnages",ar:"صنف الشخصيات.",help:"Le héros est le personnage principal. L'adjuvant l'aide. L'opposant est contre lui.",
   it:[{k:"sort",q:"Range les personnages de Cendrillon.",box:["Adjuvants (ils aident) 🤝","Opposants (ils empêchent) 😠"],items:[["la fée marraine",0],["la belle-mère",1],["les deux sœurs",1],["le prince",0],["les souris",0]],why:"La fée, les souris et le prince aident Cendrillon. La belle-mère et les sœurs l'empêchent d'aller au bal.",pts:3},
    {k:"write",q:"Qui est le héros du conte « Le petit tailleur » ? Réponds par une phrase.",keys:[["tailleur"]],model:"Le héros est le petit tailleur.",why:"Le héros est le personnage principal : toute l'histoire parle de lui."},
    {k:"tf",q:"Dans un conte merveilleux, un animal peut parler.",a:true,why:"C'est le merveilleux : des choses impossibles dans la vraie vie."}]}]}});

K("francais-1",{p:"Manuel p. 12 · Texte 1",v:[
 ["Le gros navet","C'est un conte de randonnée. Un grand-père plante un navet. Le navet devient énorme.","حكاية تسلسلية. جد يزرع لفتة، فتصبح ضخمة جدا.","👴 🌱 ➜ 🥬"],
 ["Le problème","Le grand-père tire, tire, mais il ne peut pas arracher le navet tout seul.","الجد يجر ويجر، لكنه لا يستطيع اقتلاعها وحده.","💪 😓"],
 ["La chaîne","Il appelle la grand-mère. Puis la petite-fille, puis le chien, puis le chat, puis la souris. Chacun tire celui qui est devant lui.","ينادي الجدة، ثم الحفيدة، ثم الكلب، ثم القط، ثم الفأرة.",["👴 le grand-père","👵 la grand-mère","👧 la petite-fille","🐕 le chien","🐈 le chat","🐭 la souris"]],
 ["La répétition","Les mêmes phrases reviennent : « Ils tirent, ils tirent, mais ils ne peuvent pas l'arracher ». La répétition aide à retenir l'histoire.","نفس الجمل تتكرر، والتكرار يساعد على التذكر.","🔁 Ils tirent, ils tirent…"],
 ["La morale","À la fin, grâce à la petite souris, le navet sort ! Tout le monde est utile, même le plus petit. Ensemble, on est plus forts.","في النهاية، بفضل الفأرة الصغيرة، تخرج اللفتة! الكل مفيد، حتى الأصغر. معا نحن أقوى.","🐭 + 🤝 = 💪"]],
 e:["Le gros navet est un conte de randonnée : les personnages arrivent un par un.","La répétition revient à chaque étape.","C'est la petite souris qui permet d'arracher le navet.","Morale : ensemble on est plus forts, même le plus petit est utile."],
 ea:["حكاية تسلسلية: الشخصيات تأتي واحدة تلو الأخرى.","التكرار في كل مرحلة.","الفأرة الصغيرة هي التي تساعد على اقتلاع اللفتة.","العبرة: معا نحن أقوى، والصغير مفيد."],
 w:[["le navet","اللفتة","🥬"],["arracher","يقتلع","💪"],["tirer","يجر","🪢"],["la souris","الفأرة","🐭"],["ensemble","معا","🤝"]],
 s:["Le grand-père tire, le navet ne bouge pas,","La grand-mère arrive, et puis le chien, le chat,","La petite souris tire avec ses petits bras,","Et hop ! Le gros navet sort, hourra !"],
 x:[["Qui plante le navet ?",["le grand-père","la souris","le chat"]],["Qui arrive en dernier ?",["la souris","le chien","la grand-mère"]],["Le grand-père arrache le navet tout seul.",false],["La phrase qui revient s'appelle…",["une répétition","une comparaison","une question"]],["La morale : ensemble on est plus forts.",true],["« Arracher » veut dire…",["sortir de la terre","planter","arroser"]]],
 d:{title:"Texte 1 : Le gros navet",sec:[
  {t:"Je comprends le texte",ar:"أفهم النص.",textT:"Rappel de l'histoire",text:"Un grand-père plante un navet. Le navet devient très, très gros. Le grand-père tire, mais il ne peut pas l'arracher. Il appelle la grand-mère, puis la petite-fille, puis le chien, puis le chat. Ils tirent, ils tirent, mais le navet ne bouge pas. Enfin, la petite souris arrive. Ils tirent tous ensemble, et le navet sort de la terre !",
   it:[{k:"fill",q:"Remets les personnages dans l'ordre d'arrivée.",text:"Le grand-père appelle [1], puis [2], puis [3], puis [4], et enfin [5].",bank:["la grand-mère","la petite-fille","le chien","le chat","la souris"],ans:["la grand-mère","la petite-fille","le chien","le chat","la souris"],why:"Chaque personnage est plus petit que le précédent : c'est la randonnée.",pts:3},
    {k:"write",q:"Pourquoi le navet sort-il à la fin ?",keys:[["souris","ensemble","tous"]],model:"Le navet sort parce que tout le monde tire ensemble, avec la petite souris.",why:"C'est l'union de tous qui réussit."},
    {k:"spot",q:"Touche les deux mots répétés qui montrent l'effort.",text:"Ils [tirent], ils [tirent], mais le navet ne bouge pas.",why:"« Ils tirent, ils tirent » : la répétition montre que c'est long et difficile."},
    {k:"mcq",q:"Quelle est la morale du conte ?",ch:["Même le plus petit est utile.","Il faut manger des navets.","Les chats sont plus forts que les chiens."],why:"La souris est minuscule, et pourtant c'est grâce à elle que le navet sort."}]}]}});

K("francais-2",{p:"Manuel p. 16 · Texte 2",v:[
 ["Le pêcheur et le génie","C'est un conte des Mille et Une Nuits. Un pauvre pêcheur jette son filet dans la mer.","حكاية من ألف ليلة وليلة. صياد فقير يرمي شبكته في البحر.","🎣 🌊"],
 ["Le vase de cuivre","Dans son filet, il trouve un vase fermé. Il l'ouvre : une fumée sort et devient un génie immense.","يجد في شبكته جرة نحاسية مغلقة. يفتحها فيخرج دخان يصبح جنيا ضخما.","🏺 ➜ 💨 ➜ 🧞"],
 ["La menace","Le génie est en colère. Il veut tuer le pêcheur, celui qui l'a libéré !","الجني غاضب ويريد قتل الصياد الذي حرره!","🧞 😡 ➜ 🎣 😨"],
 ["La ruse","Le pêcheur est malin. Il dit : « Je ne crois pas qu'un géant comme toi tienne dans ce petit vase ! » Le génie, vexé, rentre dans le vase pour le prouver.","الصياد ذكي. يقول: لا أصدق أنك تدخل في هذه الجرة الصغيرة! فيدخل الجني ليثبت ذلك.","🧠 ➜ 🧞 ➜ 🏺"],
 ["La fin","Vite, le pêcheur referme le vase. L'intelligence est plus forte que la force.","يسرع الصياد ويغلق الجرة. الذكاء أقوى من القوة.","🧠 > 💪"]],
 e:["Le conte vient des Mille et Une Nuits.","Le génie sort d'un vase de cuivre et menace le pêcheur.","Le pêcheur utilise une ruse : il fait rentrer le génie dans le vase.","Morale : l'intelligence est plus forte que la force."],
 ea:["الحكاية من ألف ليلة وليلة.","الجني يخرج من جرة ويهدد الصياد.","الصياد يستعمل الحيلة.","العبرة: الذكاء أقوى من القوة."],
 w:[["le pêcheur","الصياد","🎣"],["le filet","الشبكة","🕸️"],["le vase","الجرة","🏺"],["le génie","الجني","🧞"],["la ruse","الحيلة","🧠"],["menacer","يهدد","😡"]],
 s:["Le pêcheur jette son filet dans la mer,","Il trouve un vase, un génie sort dans l'air,","Le génie se fâche, mais le pêcheur est malin,","Dans le vase, le génie ! Fermé pour de bon !"],
 x:[["Où le pêcheur trouve-t-il le vase ?",["dans son filet","dans sa maison","au marché"]],["Que sort-il du vase ?",["un génie","une fée","un poisson"]],["Le génie remercie le pêcheur.",false],["Comment le pêcheur se sauve-t-il ?",["par une ruse","en courant","en se battant"]],["Ce conte vient des Mille et Une Nuits.",true],["Une ruse, c'est…",["un tour intelligent","un objet","une maison"]]],
 d:{title:"Texte 2 : Le pêcheur et le génie",sec:[
  {t:"Je comprends",ar:"أفهم القصة.",it:[
   {k:"write",q:"Que trouve le pêcheur dans son filet ?",keys:[["vase","jarre"]],model:"Le pêcheur trouve un vase de cuivre fermé.",why:"Le vase est l'objet magique du conte."},
   {k:"write",q:"Pourquoi le pêcheur a-t-il peur ?",keys:[["genie"],["tuer","menace","colere"]],model:"Il a peur parce que le génie veut le tuer.",why:"C'est l'élément perturbateur : le génie menace le pêcheur."},
   {k:"mcq",q:"Quelle phrase montre la ruse du pêcheur ?",ch:["Je ne crois pas que tu tiennes dans ce petit vase !","Merci, génie !","Je rentre chez moi."],why:"Il fait semblant de ne pas croire le génie, pour qu'il rentre dans le vase."},
   {k:"sort",q:"Range : merveilleux ou réel ?",box:["Merveilleux ✨","Réel 🌍"],items:[["un génie sort d'une fumée",0],["un pêcheur jette son filet",1],["un génie immense dans un petit vase",0],["la mer",1]],why:"Le merveilleux, c'est ce qui est impossible dans la vraie vie.",pts:2}]}]}});

K("francais-3",{p:"Manuel p. 20 · Texte 3",v:[
 ["Le Petit Chaperon Rouge","Conte de Charles Perrault (1697). Une petite fille porte un chaperon rouge. Sa mère l'envoie chez sa grand-mère.","حكاية شارل بيرو. فتاة صغيرة ترتدي قبعة حمراء، ترسلها أمها إلى جدتها.","👧🔴 ➜ 👵"],
 ["Le panier","Elle apporte une galette et un petit pot de beurre. Elle traverse la forêt.","تحمل فطيرة وجرة صغيرة من الزبدة، وتعبر الغابة.","🧺 🌲"],
 ["La rencontre","Dans le bois, elle rencontre le loup. Elle lui parle et lui dit où habite sa grand-mère. C'est une erreur !","في الغابة تلتقي بالذئب، فتخبره أين تسكن جدتها. هذا خطأ!","🐺 💬 👧"],
 ["Le loup ment","Le loup court chez la grand-mère et la mange. Puis il se couche dans son lit et attend.","يجري الذئب إلى الجدة ويأكلها، ثم ينام في سريرها وينتظر.","🐺 🛏️"],
 ["Le dialogue célèbre","« Mère-grand, que vous avez de grandes dents ! — C'est pour te manger ! » Chez Perrault, le loup mange la petite fille.","يا جدتي ما أكبر أسنانك! هذا لآكلك!","👀 👂 🦷"],
 ["La morale","Perrault écrit une morale : il ne faut pas parler aux inconnus. Les beaux parleurs peuvent être dangereux.","العبرة: لا يجب الحديث مع الغرباء.","⚠️ inconnus"]],
 e:["Auteur : Charles Perrault.","La fillette parle au loup : c'est son erreur.","Le loup se déguise en grand-mère.","Morale : ne pas écouter les inconnus."],
 ea:["المؤلف: شارل بيرو.","الفتاة تتكلم مع الذئب: هذا خطؤها.","الذئب يتنكر في صورة الجدة.","العبرة: لا تستمع للغرباء."],
 w:[["le chaperon","القبعة","👒"],["la galette","الفطيرة","🥞"],["le loup","الذئب","🐺"],["la forêt","الغابة","🌲"],["un inconnu","غريب","❓"]],
 s:["Petit Chaperon Rouge, va chez mère-grand,","Avec ta galette, traverse le bois lentement,","Ne parle pas au loup, il est très méchant,","Et souviens-toi bien de ce conseil important !"],
 x:[["Qui a écrit ce conte ?",["Charles Perrault","La Fontaine","Victor Hugo"]],["Que porte la fillette dans son panier ?",["une galette et du beurre","des fleurs","du poisson"]],["Le loup se déguise en…",["grand-mère","chasseur","fée"]],["La petite fille ne parle pas au loup.",false],["La morale : se méfier des inconnus.",true],["« Mère-grand » veut dire…",["la grand-mère","la mère","la tante"]]],
 d:{title:"Texte 3 : Le Petit Chaperon Rouge",sec:[
  {t:"Je comprends",ar:"أجيب بجملة كاملة.",it:[
   {k:"write",q:"Où va le Petit Chaperon Rouge ?",keys:[["grand-mere","grand mere","mere-grand","mere grand"]],model:"Elle va chez sa grand-mère.",why:"Sa mère l'envoie porter une galette à sa grand-mère."},
   {k:"write",q:"Quelle est l'erreur de la petite fille ?",keys:[["loup"],["parle","dit","explique"]],model:"Elle parle au loup et lui dit où habite sa grand-mère.",why:"C'est l'élément qui cause le malheur."},
   {k:"fill",q:"Complète le dialogue célèbre.",text:"« Mère-grand, que vous avez de grands [1] ! — C'est pour mieux t'entendre. — Que vous avez de grandes [2] ! — C'est pour te [3] ! »",bank:["dents","manger","bras","oreilles"],ans:["bras",["dents"],"manger"],why:"Grands bras, grandes oreilles, grands yeux, grandes dents… puis « C'est pour te manger ! »",pts:2},
   {k:"sort",q:"Range : adjuvant ou opposant de la fillette ?",box:["Adjuvant 🤝","Opposant 😠"],items:[["la mère",0],["le loup",1],["la grand-mère",0]],why:"Le loup est l'opposant : il veut la manger."}]}]}});

K("francais-4",{p:"Manuel p. 24 · Texte 4",v:[
 ["Cendrillon","Conte de Charles Perrault. Cendrillon est une jeune fille douce et gentille. Sa belle-mère et ses deux sœurs sont méchantes avec elle.","حكاية شارل بيرو. سندريلا فتاة لطيفة، زوجة أبيها وأختاها شريرات معها.","👧🏼 🧹 😠😠"],
 ["Le bal","Le fils du roi organise un bal. Les sœurs y vont. Cendrillon reste à la maison et pleure.","ابن الملك يقيم حفلة. تذهب الأختان وتبقى سندريلا تبكي.","👑 💃 😢"],
 ["La fée marraine","Sa marraine est une fée. Avec sa baguette, elle change une citrouille en carrosse, des souris en chevaux, et les vieux habits en belle robe.","عرابتها جنية. بعصاها تحول اليقطينة إلى عربة، والفئران إلى أحصنة.",[["la citrouille","🎃 ➜ carrosse"],["les souris","🐭 ➜ chevaux"],["les habits","👗 ➜ robe"]]],
 ["Minuit !","Attention : à minuit, la magie s'arrête. Au deuxième soir, Cendrillon part en courant et perd une pantoufle de verre.","في منتصف الليل يتوقف السحر. تهرب سندريلا وتفقد حذاءها الزجاجي.","🕛 👠"],
 ["La fin heureuse","Le prince essaie la pantoufle à toutes les filles. Elle va parfaitement à Cendrillon. Ils se marient. Cendrillon pardonne à ses sœurs.","الأمير يجرب الحذاء على كل الفتيات، فيناسب سندريلا. يتزوجان، وتسامح أختيها.","👠 ✔ 💍"]],
 e:["Cendrillon est l'héroïne ; la belle-mère et les sœurs sont les opposants.","La fée marraine est l'adjuvant : elle utilise la magie.","La magie s'arrête à minuit.","Cendrillon est récompensée pour sa bonté."],
 ea:["سندريلا هي البطلة، وزوجة الأب والأختان هن المعارضات.","الجنية هي المساعدة.","السحر يتوقف في منتصف الليل.","سندريلا تكافأ على طيبتها."],
 w:[["la marraine","العرابة","🧚"],["la baguette","العصا السحرية","🪄"],["le carrosse","العربة","🎃"],["la pantoufle","الخف","👠"],["le bal","الحفلة الراقصة","💃"],["minuit","منتصف الليل","🕛"]],
 s:["Cendrillon travaille, ses sœurs vont au bal,","La fée lève sa baguette, quel spectacle royal !","Mais à minuit, vite, il faut partir,","La pantoufle de verre la fera revenir !"],
 x:[["Qui aide Cendrillon ?",["sa marraine la fée","sa belle-mère","ses sœurs"]],["En quoi la citrouille est-elle changée ?",["en carrosse","en robe","en cheval"]],["À quelle heure la magie s'arrête-t-elle ?",["à minuit","à midi","le matin"]],["Cendrillon perd une pantoufle de verre.",true],["À la fin, Cendrillon se venge de ses sœurs.",false],["Le prince retrouve Cendrillon grâce…",["à la pantoufle","à la citrouille","au bal"]]],
 d:{title:"Texte 4 : Cendrillon",sec:[
  {t:"Je comprends",ar:"أجيب عن الأسئلة.",it:[
   {k:"write",q:"Pourquoi Cendrillon pleure-t-elle ?",keys:[["bal"]],model:"Elle pleure parce qu'elle ne peut pas aller au bal.",why:"Ses sœurs vont au bal, et elle doit rester à la maison."},
   {k:"fill",q:"Les transformations magiques.",text:"La fée change la citrouille en [1], les souris en [2] et les vieux habits en [3].",bank:["carrosse","chevaux","belle robe"],ans:["carrosse","chevaux","belle robe"],pts:2},
   {k:"mcq",q:"Quelle règle donne la fée ?",ch:["Rentrer avant minuit","Ne pas danser","Ne pas parler au prince"],why:"À minuit, la magie s'arrête."},
   {k:"write",q:"Quelle qualité de Cendrillon est récompensée ?",keys:[["gentil","bonte","douce","bonne","pardonne"]],model:"Sa gentillesse (sa bonté) est récompensée.",why:"Dans le conte, les bons sont récompensés."}]}]}});

K("francais-5",{p:"Ressources linguistiques · Unité 1",v:[
 ["Le champ lexical","Un champ lexical, c'est un groupe de mots qui parlent du même thème.","الحقل المعجمي: مجموعة كلمات تتحدث عن نفس الموضوع.","📦 = un thème"],
 ["Exemple : la magie","Fée, baguette, génie, sorcière, enchanter, potion : c'est le champ lexical de la magie.","جنية، عصا، جني، ساحرة: حقل السحر.",["fée","baguette","génie","enchanter","potion"]],
 ["Exemple : la mer","Pêcheur, filet, vagues, poisson, plage : c'est le champ lexical de la mer.","صياد، شبكة، أمواج، سمك: حقل البحر.",["pêcheur","filet","vagues","poisson","plage"]],
 ["Toutes les natures","Dans un champ lexical, il y a des noms, des verbes, des adjectifs : la peur, trembler, effrayé.","في الحقل المعجمي أسماء وأفعال وصفات.",[["nom","la peur"],["verbe","trembler"],["adjectif","effrayé"]]],
 ["Pourquoi ?","Le champ lexical aide à trouver le thème d'un texte et à écrire avec plus de mots.","يساعد على معرفة موضوع النص.","🔍 thème"]],
 e:["Champ lexical = mots du même thème.","Il contient des noms, des verbes, des adjectifs.","Il aide à trouver le thème du texte."],
 ea:["الحقل المعجمي = كلمات نفس الموضوع.","فيه أسماء وأفعال وصفات.","يساعد على معرفة موضوع النص."],
 w:[["le thème","الموضوع","🎯"],["la peur","الخوف","😨"],["la forêt","الغابة","🌲"],["enchanter","يسحر","✨"]],
 s:["Fée, baguette, potion, magie,","Vagues, filet, poisson, la mer aussi,","Des mots ensemble, un même thème,","C'est le champ lexical, et moi je l'aime !"],
 x:[["« fée, baguette, potion » : champ lexical de…",["la magie","l'école","la mer"]],["Quel mot n'est pas dans le champ lexical de la forêt ?",["la plage","l'arbre","la feuille"]],["Un champ lexical contient seulement des noms.",false],["« trembler, effrayé, la peur » : champ lexical de…",["la peur","la joie","la cuisine"]],["Le champ lexical aide à trouver le thème.",true],["« vagues, filet, pêcheur » : champ lexical de…",["la mer","la montagne","la ville"]]],
 d:{title:"Le champ lexical",sec:[{t:"Je reconnais les champs lexicaux",ar:"أصنف الكلمات.",help:"Un champ lexical est un ensemble de mots qui se rapportent au même thème.",it:[
  {k:"sort",q:"Range les mots : magie ou forêt ?",box:["Magie ✨","Forêt 🌲"],items:[["la baguette",0],["le chêne",1],["enchanter",0],["les feuilles",1],["la potion",0],["le bûcheron",1]],why:"Baguette, enchanter, potion : magie. Chêne, feuilles, bûcheron : forêt.",pts:3},
  {k:"spot",q:"Touche les mots du champ lexical de la peur.",text:"Le soir, l'enfant [tremblait]. Il était [effrayé] par le bruit, et la [peur] le gardait éveillé.",why:"Trembler, effrayé, la peur : trois natures différentes, un seul thème.",pts:2},
  {k:"mcq",q:"« roi, château, couronne, prince » : quel thème ?",ch:["la royauté","la cuisine","le sport"]}]}]}});

K("francais-6",{p:"Ressources linguistiques · Unité 1",v:[
 ["La comparaison","La comparaison rapproche deux choses qui se ressemblent, avec un outil de comparaison.","التشبيه: نقارن بين شيئين متشابهين بأداة تشبيه.","🔍 ≈"],
 ["Les quatre éléments","Dans « Ses yeux brillent comme des étoiles » : ses yeux = le comparé ; les étoiles = le comparant ; comme = l'outil ; briller = le point commun.","المشبه، المشبه به، أداة التشبيه، وجه الشبه.",[["comparé","ses yeux 👀"],["outil","comme"],["comparant","des étoiles ⭐"],["point commun","briller ✨"]]],
 ["Les outils","Comme, tel, pareil à, semblable à, ressembler à, plus… que, aussi… que.","أدوات: comme, tel, pareil à, ressembler à…",["comme","tel","pareil à","semblable à","ressembler à"]],
 ["L'insistance","Pour insister, on répète un mot ou on exagère : « Il tire, il tire, il tire encore ! »","للتأكيد نكرر الكلمة.","🔁 il tire, il tire"],
 ["Dans les contes","La peau blanche comme la neige, les lèvres rouges comme le sang : la comparaison rend le portrait plus beau.","بشرة بيضاء كالثلج: التشبيه يجمل الوصف.","❄️ 🌹"]],
 e:["La comparaison a un comparé, un comparant et un outil (comme…).","Le point commun explique pourquoi on compare.","Insister : répéter ou exagérer."],
 ea:["التشبيه: مشبه ومشبه به وأداة.","وجه الشبه يشرح سبب المقارنة.","التأكيد: التكرار أو المبالغة."],
 w:[["comparer","يقارن","⚖️"],["comme","مثل","≈"],["briller","يلمع","✨"],["la neige","الثلج","❄️"]],
 s:["Tes yeux brillent comme des étoiles,","Ta robe vole comme une voile,","Comme, pareil à, tel, ressembler,","Avec ces outils je sais comparer !"],
 x:[["Dans « fort comme un lion », l'outil est…",["comme","fort","lion"]],["Dans « ses cheveux noirs comme la nuit », le comparant est…",["la nuit","ses cheveux","noirs"]],["« pareil à » est un outil de comparaison.",true],["« Il mange une pomme » contient une comparaison.",false],["« Il court, il court, il court » montre…",["l'insistance","une comparaison","une négation"]],["Dans « rapide comme le vent », le point commun est…",["rapide","le vent","comme"]]],
 d:{title:"La comparaison",sec:[{t:"Je trouve les éléments de la comparaison",ar:"أستخرج عناصر التشبيه.",help:"Comparé + outil (comme, tel, pareil à, semblable à) + comparant. Le point commun dit ce qu'ils partagent.",it:[
  {k:"spot",q:"Touche l'outil de comparaison.",text:"Sa peau était blanche [comme] la neige.",why:"« comme » relie la peau (comparé) à la neige (comparant)."},
  {k:"spot",q:"Touche le comparant.",text:"Le géant était grand comme [une montagne].",why:"Le comparant est ce à quoi on compare : une montagne."},
  {k:"fill",q:"Complète avec le bon outil.",text:"Le prince était courageux [1] un lion. La fée était [2] à une étoile. Sa voix [3] à une chanson.",bank:["comme","pareille","ressemblait"],ans:["comme","pareille","ressemblait"],pts:2},
  {k:"write",q:"Invente une comparaison avec « comme » pour décrire la mer.",keys:[["comme"],["mer"]],model:"La mer brille comme un miroir.",why:"Il faut : la mer + comme + un comparant."}]}]}});

K("francais-7",{p:"Ressources linguistiques · Unité 1",v:[
 ["Les temps du récit","Pour raconter une histoire au passé, on utilise surtout deux temps : l'imparfait et le passé simple.","لحكي قصة في الماضي نستعمل زمنين: الماضي الناقص والماضي البسيط.","⏳ imparfait + passé simple"],
 ["L'imparfait","L'imparfait sert à décrire le décor et les habitudes : Il faisait beau. La fée habitait un château.","الماضي الناقص للوصف والعادات.","🎨 décor"],
 ["Terminaisons de l'imparfait","Je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient.","نهايات: ais, ais, ait, ions, iez, aient.",["-ais","-ais","-ait","-ions","-iez","-aient"]],
 ["Le passé simple","Le passé simple raconte les actions courtes, l'une après l'autre : Soudain, le loup arriva. Il frappa à la porte.","الماضي البسيط للأحداث القصيرة المتتابعة.","⚡ actions"],
 ["Terminaisons du passé simple","Verbes en -er : il chanta, ils chantèrent. Autres : il finit, il prit ; il fut, il eut.","نهايات: il chanta، ils chantèrent، il finit، il fut.",[["chanter","il chanta 🎵"],["finir","il finit ✅"],["être","il fut"],["avoir","il eut"]]],
 ["Ensemble","Il marchait dans la forêt (décor) quand soudain un loup apparut (action).","كان يمشي في الغابة عندما ظهر الذئب فجأة.","🌲 imparfait ➜ 🐺 passé simple"]],
 e:["Imparfait : décor, description, habitudes.","Passé simple : actions courtes qui font avancer l'histoire.","Imparfait : -ais, -ait, -ions, -iez, -aient.","Passé simple : il chanta, ils chantèrent ; il finit ; il fut ; il eut."],
 ea:["الماضي الناقص: الوصف والعادات.","الماضي البسيط: الأحداث.","نهايات الماضي الناقص.","نهايات الماضي البسيط."],
 w:[["l'imparfait","الماضي الناقص","🎨"],["le passé simple","الماضي البسيط","⚡"],["le décor","الإطار","🏞️"],["l'action","الحدث","🏃"]],
 s:["Il était une fois, l'imparfait décrit,","Le château brillait, le ciel était gris,","Soudain le loup frappa, passé simple, c'est parti,","Une action, puis une autre, et l'histoire est finie !"],
 x:[["« Il faisait froid » est à…",["l'imparfait","au passé simple","au présent"]],["« Le loup frappa à la porte » est au…",["passé simple","imparfait","futur"]],["Le passé simple sert à décrire le décor.",false],["Chanter, 3e personne du pluriel du passé simple :",["ils chantèrent","ils chantaient","ils chantent"]],["L'imparfait sert aussi pour les habitudes.",true],["« nous finissions » est à…",["l'imparfait","au passé simple","au présent"]]],
 d:{title:"Imparfait ou passé simple ?",sec:[{t:"Je reconnais et je conjugue",ar:"أميز بين الزمنين.",help:"Imparfait (-ais, -ait, -aient) : description, habitude, arrière-plan. Passé simple (-a, -èrent, -it, -ut) : action courte, premier plan.",it:[
  {k:"sort",q:"Range les verbes.",box:["Imparfait 🎨","Passé simple ⚡"],items:[["il habitait",0],["elle ouvrit",1],["ils marchaient",0],["le loup arriva",1],["il fut",1],["nous chantions",0]],pts:3,why:"-ait, -aient, -ions : imparfait. -a, -it, -ut : passé simple."},
  {k:"fill",q:"Complète avec le bon temps.",text:"Il [1] (faire) nuit. Le petit garçon [2] (dormir) quand, soudain, quelqu'un [3] (frapper) à la porte.",bank:["faisait","dormait","frappa","fit","frappait"],ans:["faisait","dormait","frappa"],why:"Décor (nuit, dormir) : imparfait. Action soudaine : passé simple.",pts:3},
  {k:"write",q:"Conjugue « arriver » au passé simple avec « ils ».",keys:[["arriverent"]],full:false,model:"ils arrivèrent",why:"Verbes en -er : ils + -èrent."}]}]}});

K("francais-8",{p:"Fiche du prof",tab:"prof",v:[
 ["Le présent de l'indicatif","Le présent n'est pas seulement le temps de maintenant. Il a plusieurs emplois. Il y en a cinq à connaître.","المضارع له عدة استعمالات، خمسة يجب معرفتها.","5 emplois"],
 ["1. Le présent d'énonciation","Il exprime une action qui se passe au moment où l'on parle. Exemple : Vous commencez dès maintenant.","حاضر التلفظ: الحدث يقع لحظة الكلام.","🗣️ maintenant"],
 ["2. Le présent de vérité générale","Il exprime un fait vrai tout le temps, quel que soit le moment. Exemple : La fréquence cardiaque au repos se situe entre 70 et 80 battements par minute.","حاضر الحقيقة العامة: صحيح دائما.","🌍 toujours vrai"],
 ["3. Le présent d'habitude","Il exprime une action qu'on répète. On trouve souvent un indicateur : tous les jours, chaque matin, souvent. Exemple : Tous les jours, je fais trente minutes de marche.","حاضر العادة: حدث يتكرر.","🔁 tous les jours"],
 ["4. Le présent de narration","Dans un récit au passé, il rend l'action plus vivante, comme si on la voyait. Exemple : J'étais en train de m'échauffer ; soudain, mon entraîneur entre en courant.","حاضر السرد: يجعل الحدث حيا داخل قصة في الماضي.","🎬 plus vivant"],
 ["5. Passé récent et futur proche","Le présent peut exprimer un fait très proche, juste avant ou juste après. Exemple : Il part dans quelques minutes. Elle vient de rentrer.","الماضي القريب والمستقبل القريب.",[["futur proche","Il part dans 5 minutes ⏩"],["passé récent","Elle vient de rentrer ⏪"]]]],
 e:["Présent d'énonciation : au moment où l'on parle.","Présent de vérité générale : toujours vrai.","Présent d'habitude : une action répétée (tous les jours…).","Présent de narration : rend un récit au passé plus vivant.","Présent de passé récent / futur proche : venir de… / aller + infinitif."],
 ea:["حاضر التلفظ.","حاضر الحقيقة العامة.","حاضر العادة.","حاضر السرد.","الماضي القريب والمستقبل القريب."],
 w:[["l'énonciation","التلفظ","🗣️"],["la vérité générale","الحقيقة العامة","🌍"],["l'habitude","العادة","🔁"],["la narration","السرد","🎬"]],
 s:["Je parle maintenant : c'est l'énonciation,","La Terre tourne toujours : vérité, pas d'exception,","Tous les jours je marche : c'est l'habitude,","Et dans un récit, le présent fait l'action !"],
 x:[["« L'eau bout à 100 degrés » : présent…",["de vérité générale","d'habitude","de narration"]],["« Chaque matin, je bois du lait » : présent…",["d'habitude","d'énonciation","de vérité générale"]],["« Je te parle en ce moment » : présent…",["d'énonciation","de narration","d'habitude"]],["« Elle vient de rentrer » exprime le passé récent.",true],["Le présent de narration se trouve dans un récit au futur.",false],["« Il part dans quelques minutes » exprime…",["le futur proche","le passé récent","une habitude"]]],
 d:{title:"Les emplois du présent de l'indicatif",sub:"Les mêmes questions que la fiche du prof.",sec:[
  {t:"Lisez les phrases",ar:"اقرأ الجمل ثم أجب.",textT:"Les 4 phrases de la fiche",text:"1. La fréquence cardiaque au repos pour un adolescent se situe généralement entre 70 et 80 battements par minute.\n2. Tous les jours, je fais trente minutes de marche rapide pour aller à l'école.\n3. L'entraîneur dit à ses joueurs : « Aujourd'hui, je vous présente le nouveau programme d'entraînement. Vous commencez dès maintenant par un footing. »\n4. J'étais en train de m'échauffer avant d'entrer sur le stade ; soudain, mon entraîneur entre en courant et m'annonce que c'est mon tour.",
   it:[{k:"mcq",q:"1. b. À quel temps sont conjugués les verbes en rose (se situe, fais, présente, commencez, entre, annonce) ?",ch:["au présent de l'indicatif","à l'imparfait","au passé simple"],why:"Se situe, fais, présente, commencez, entre, annonce : terminaisons du présent."},
    {k:"mcq",q:"2. a. Est-il possible de transposer la phrase 1 à un temps du passé ?",ch:["Non","Oui"],why:"Ce fait est toujours vrai, hier comme demain."},
    {k:"write",q:"2. b. Pour quelle raison ?",keys:[["toujours","verite","vrai","tout le temps","general"]],model:"Parce que c'est une vérité générale : c'est toujours vrai.",why:"C'est le présent de vérité générale."},
    {k:"spot",q:"3. Dans la phrase 2, relevez le complément circonstanciel de temps qui indique la fréquence.",text:"[Tous les jours], je fais trente minutes de marche rapide pour aller à l'école.",why:"« Tous les jours » montre une action répétée : présent d'habitude."},
    {k:"mcq",q:"4. Dans la phrase 3, quand se déroule l'action exprimée par « présente » et « commencez » ?",ch:["au moment où l'on parle","dans le passé","dans un futur lointain"],why:"« Aujourd'hui », « dès maintenant » : c'est le présent d'énonciation."},
    {k:"mcq",q:"5. a. À quel temps est conjugué le premier verbe de la phrase 4 (« J'étais ») ?",ch:["à l'imparfait","au présent","au passé simple"],why:"« J'étais » : terminaison -ais, c'est l'imparfait."},
    {k:"write",q:"5. b. Quel est l'effet produit par l'emploi du présent dans la deuxième partie de la phrase ?",keys:[["vivant","vivante","voit","direct","rapide"]],model:"Le présent rend l'action plus vivante, comme si on la voyait : c'est le présent de narration.",why:"Dans un récit au passé, le présent de narration met l'action en valeur."}]},
  {t:"J'identifie l'emploi du présent",ar:"أحدد استعمال المضارع.",help:"Énonciation : maintenant. Vérité générale : toujours vrai. Habitude : répété. Narration : dans un récit au passé. Futur proche / passé récent : juste après / juste avant.",it:[
    {k:"sort",q:"Range chaque phrase.",box:["Vérité générale 🌍","Habitude 🔁"],items:[["La Terre tourne autour du Soleil.",0],["Chaque samedi, je joue au basket.",1],["L'eau gèle à zéro degré.",0],["Le matin, ma sœur prend son petit-déjeuner à 7 heures.",1]],pts:2},
    {k:"mcq",q:"« Hier, je lisais tranquillement ; tout à coup, le téléphone sonne. » « sonne » est un présent…",ch:["de narration","d'habitude","de vérité générale"],why:"Récit au passé (« hier, je lisais ») + présent = narration."},
    {k:"mcq",q:"« Le train part dans cinq minutes. » Ce présent exprime…",ch:["un futur proche","un passé récent","une habitude"]},
    {k:"write",q:"Écris une phrase au présent d'habitude avec « tous les jours ».",keys:[["tous les jours"]],model:"Tous les jours, je révise mes leçons.",why:"L'indicateur « tous les jours » montre l'habitude.",minW:4}]}]}});

K("francais-9",{p:"Ressources linguistiques · Unité 1",v:[
 ["La négation","La négation sert à dire non. Elle a deux parties qui entourent le verbe : ne… pas.","النفي يتكون من جزأين يحيطان بالفعل.","ne + verbe + pas"],
 ["Les mots de la négation","Ne… pas, ne… plus, ne… jamais, ne… rien, ne… personne, ne… aucun.","أدوات النفي.",["ne… pas","ne… plus","ne… jamais","ne… rien","ne… personne"]],
 ["Le sens","Il ne mange plus = il mangeait avant. Il ne ment jamais = à aucun moment. Je ne vois rien, je ne vois personne.","لكل أداة معنى.",[["ne… plus","avant oui, maintenant non"],["ne… jamais","à aucun moment"],["ne… rien","aucune chose"],["ne… personne","aucune personne"]]],
 ["Devant une voyelle","Ne devient n' devant une voyelle : Il n'aime pas le loup.","ne تصبح n' قبل حرف علة.","n'aime"],
 ["Au temps composé","Avec un temps composé, la négation entoure l'auxiliaire : Il n'a pas mangé.","في الزمن المركب نحيط بالمساعد.","n'a pas mangé"]],
 e:["La négation entoure le verbe : ne… pas.","Ne… plus, ne… jamais, ne… rien, ne… personne changent le sens.","Ne devient n' devant une voyelle.","Temps composé : ne + auxiliaire + pas + participe."],
 ea:["النفي يحيط بالفعل.","لكل أداة معنى.","ne تصبح n'.","في الزمن المركب نحيط بالمساعد."],
 w:[["jamais","أبدا","🚫"],["rien","لا شيء","∅"],["personne","لا أحد","👤❌"],["plus","لم يعد","⏹️"]],
 s:["Ne… pas, ne… plus, deux mots autour,","Ne… jamais, jamais, pas même un jour,","Ne… rien, ne… personne, je dis non,","La négation, c'est ma chanson !"],
 x:[["Forme négative de « Il chante » :",["Il ne chante pas.","Il pas chante.","Il chante ne pas."]],["« Je ne vois personne » veut dire…",["je ne vois aucune personne","je vois quelqu'un","je ne vois rien"]],["Devant une voyelle, ne devient n'.",true],["« Il n'a pas mangé » : la négation entoure l'auxiliaire.",true],["« ne… plus » veut dire : jamais de la vie.",false],["Contraire de « toujours » :",["ne… jamais","ne… rien","ne… personne"]]],
 d:{title:"La négation",sec:[{t:"Je mets à la forme négative",ar:"أحول إلى النفي.",help:"ne (n') + verbe + pas / plus / jamais / rien / personne. Avec un temps composé : ne + avoir/être + pas + participe passé.",it:[
  {k:"write",q:"Mets à la forme négative : « Le loup mange la galette. »",keys:[["ne mange pas"]],full:false,model:"Le loup ne mange pas la galette."},
  {k:"write",q:"Avec « ne… jamais » : « Cendrillon sort le soir. »",keys:[["ne sort jamais"]],full:false,model:"Cendrillon ne sort jamais le soir."},
  {k:"write",q:"Avec « ne… plus » : « Il a peur. »",keys:[["n'a plus peur","na plus peur","n a plus peur"]],full:false,model:"Il n'a plus peur.",why:"« a » commence par une voyelle : ne devient n'."},
  {k:"fill",q:"Complète avec la bonne négation.",text:"Il fait noir : je ne vois [1]. La maison est vide, il n'y a [2]. Le génie est fâché, il ne remercie [3] personne.",bank:["rien","personne","jamais"],ans:["rien","personne","jamais"],pts:2}]}]}});

K("francais-10",{p:"Ressources linguistiques · Unité 1",v:[
 ["Les conjonctions de coordination","Elles relient deux mots ou deux phrases de même nature. Il y en a sept.","أدوات العطف تربط بين كلمتين أو جملتين.","🔗"],
 ["La phrase pour retenir","Mais où est donc Ornicar ? Mais, ou, et, donc, or, ni, car.","جملة للحفظ: Mais où est donc Ornicar.",["mais","ou","et","donc","or","ni","car"]],
 ["Leur sens","Et : ajout. Mais : opposition. Ou : choix. Donc : conséquence. Car : cause. Ni : négation. Or : argument en plus.","معاني الأدوات.",[["et","ajout ➕"],["mais","opposition ↔️"],["ou","choix ❓"],["donc","conséquence ➡️"],["car","cause ⬅️"]]],
 ["Exemples","Le loup est fort mais le chasseur est malin. Il pleut, donc je prends mon parapluie. Je reste, car il fait froid.","أمثلة.","☔ donc 🌂"]],
 e:["Sept conjonctions : mais, ou, et, donc, or, ni, car.","Elles relient deux éléments de même nature.","Mais = opposition ; donc = conséquence ; car = cause."],
 ea:["سبع أدوات عطف.","تربط بين عنصرين من نفس النوع.","mais للاستدراك، donc للنتيجة، car للسبب."],
 w:[["mais","لكن","↔️"],["donc","إذن","➡️"],["car","لأن","⬅️"],["ou","أو","❓"]],
 s:["Mais où est donc Ornicar ?","Mais, ou, et, donc, or, ni, car,","Sept petits mots pour relier,","Deux phrases qui veulent se parler !"],
 x:[["« Il est fatigué ___ il continue. »",["mais","car","ou"]],["« Il pleut, ___ je reste à la maison. »",["donc","mais","ni"]],["« Je mange ___ j'ai faim. »",["car","donc","ou"]],["« ou » exprime un choix.",true],["« alors » est une conjonction de coordination.",false],["Combien de conjonctions de coordination ?",["sept","cinq","dix"]]],
 d:{title:"Les conjonctions de coordination",sec:[{t:"Je relie les phrases",ar:"أربط الجمل.",help:"mais (opposition), ou (choix), et (ajout), donc (conséquence), or, ni, car (cause).",it:[
  {k:"fill",q:"Complète.",text:"Le pêcheur est pauvre [1] honnête. Le génie veut le tuer, [2] le pêcheur a peur. Le pêcheur ment [3] il veut se sauver. Tu préfères la fée [4] le génie ?",bank:["mais","donc","car","ou"],ans:["mais","donc","car","ou"],pts:2,why:"Mais : opposition. Donc : conséquence. Car : cause. Ou : choix."},
  {k:"spot",q:"Touche les conjonctions de coordination.",text:"Le loup court vite [et] il arrive le premier, [mais] la grand-mère n'ouvre pas, [car] elle a peur.",pts:2}]}]}});

K("francais-11",{p:"Fiche du prof",tab:"prof",v:[
 ["Les connecteurs","Les connecteurs organisent un texte. Les connecteurs spatiaux disent où. Les connecteurs temporels disent quand.","الروابط تنظم النص: المكانية تقول أين، والزمانية تقول متى.","📍 où ? · 🕐 quand ?"],
 ["Les connecteurs spatiaux","Ils indiquent un lieu : ici, là-bas, plus loin, derrière, devant, à côté, au centre, au milieu, en bas, au-dessus, en dessous, au sommet, à gauche, à droite, au-delà.","الروابط المكانية تدل على المكان.",["ici","là-bas","derrière","au sommet","à gauche"]],
 ["Les connecteurs temporels","Ils indiquent le temps ou l'ordre : d'abord, ensuite, puis, après, enfin, finalement, soudain, tout à coup, alors, autrefois, jadis, maintenant, peu à peu.","الروابط الزمانية تدل على الزمن والترتيب.",["d'abord","ensuite","puis","enfin","soudain"]],
 ["L'astuce","Pose la question. Où ? C'est spatial. Quand ? C'est temporel. « Derrière la maison » répond à où. « Soudain » répond à quand.","اطرح السؤال: أين؟ مكاني. متى؟ زماني.",[["Où ? 📍","spatial"],["Quand ? 🕐","temporel"]]],
 ["Attention aux pièges","Ici et là-bas sont spatiaux. Autrefois et jadis sont temporels : ils veulent dire il y a très longtemps. Alors est temporel.","احذر: autrefois و jadis زمانيان.","jadis = il y a longtemps"]],
 e:["Spatial = où ? (ici, derrière, au sommet, à droite…)","Temporel = quand ? (d'abord, puis, soudain, jadis…)","Autrefois et jadis = il y a longtemps : temporels.","Les connecteurs organisent le récit et la description."],
 ea:["المكاني: أين؟","الزماني: متى؟","autrefois و jadis: منذ زمن بعيد.","الروابط تنظم الحكي والوصف."],
 w:[["devant","أمام","⬆️"],["derrière","خلف","⬇️"],["au sommet","في القمة","🏔️"],["d'abord","أولا","1️⃣"],["soudain","فجأة","⚡"],["jadis","قديما","📜"]],
 s:["Où ? Ici, là-bas, derrière, devant,","Au sommet, en bas, à gauche, au-dedans,","Quand ? D'abord, puis, ensuite, enfin,","Soudain, jadis, je connais le chemin !"],
 x:[["« derrière » est un connecteur…",["spatial","temporel"]],["« soudain » est un connecteur…",["temporel","spatial"]],["« jadis » veut dire…",["il y a longtemps","plus loin","en bas"]],["« au sommet » répond à la question « quand ? ».",false],["« d'abord, ensuite, enfin » donnent l'ordre des actions.",true],["Quel mot est spatial ?",["à côté","puis","alors"]]],
 d:{title:"Les connecteurs spatiaux et temporels",sub:"Les mêmes exercices que la fiche du prof.",sec:[
  {t:"Indiquez si les connecteurs sont spatiaux ou temporels",ar:"حدد هل الروابط مكانية أم زمانية.",help:"Spatial : répond à « où ? ». Temporel : répond à « quand ? ».",it:[
   {k:"sort",q:"Colonne 1 de la fiche",box:["Spatial 📍","Temporel 🕐"],items:[["d'abord",1],["plus loin",0],["ensuite",1],["derrière",0],["finalement",1],["en dessous",0],["au milieu",0],["après",1]],pts:2},
   {k:"sort",q:"Colonne 2 de la fiche",box:["Spatial 📍","Temporel 🕐"],items:[["soudain",1],["là-bas",0],["au centre",0],["tout à coup",1],["enfin",1],["au-delà",0],["à gauche",0],["ici",0]],pts:2},
   {k:"sort",q:"Colonne 3 de la fiche",box:["Spatial 📍","Temporel 🕐"],items:[["puis",1],["à côté",0],["autrefois",1],["jadis",1],["au sommet",0],["en bas",0],["au-dessus",0],["alors",1]],pts:2,why:"Autrefois, jadis : il y a longtemps (temporels). Alors : à ce moment-là (temporel)."}]},
  {t:"Relevez les connecteurs spatiaux",ar:"استخرج الروابط المكانية.",it:[
   {k:"spot",q:"Touche le connecteur spatial.",text:"Il arriva sur la côte. [Au loin], il pouvait apercevoir l'île."},
   {k:"spot",q:"Touche le connecteur spatial.",text:"Il avança sur le sentier. [En contrebas], la ville semblait minuscule."},
   {k:"spot",q:"Touche les deux connecteurs spatiaux.",text:"[En face], la mer étincelait. [À droite], on voyait le petit village de pêcheurs."},
   {k:"spot",q:"Touche le connecteur spatial.",text:"Le château était imposant. [À l'intérieur], tout était luxueux."},
   {k:"spot",q:"Touche le connecteur spatial.",text:"Ils continuaient d'avancer. [Autour d'eux], l'obscurité s'épaississait."},
   {k:"spot",q:"Touche le connecteur spatial.",text:"Elle traversa le pont de pierre. [En dessous], le torrent coulait vigoureusement."}]},
  {t:"Relevez les connecteurs temporels",ar:"استخرج الروابط الزمانية.",it:[
   {k:"spot",q:"Touche les connecteurs temporels (attention : « ici » est spatial !).",text:"Ils débouchèrent [enfin] dans la clairière. [Jadis] se dressait ici un temple.",why:"Enfin et jadis disent quand. Ici dit où."},
   {k:"spot",q:"Touche le connecteur temporel.",text:"Le sentier fit un dernier virage. [Tout à coup], la mer apparut à leurs yeux."},
   {k:"spot",q:"Touche les connecteurs temporels.",text:"[Tout d'abord], il pensa que l'endroit était désert. [Puis], il aperçut les habitants derrière leurs fenêtres.",why:"« derrière » est spatial : il ne fallait pas le toucher."},
   {k:"spot",q:"Touche le connecteur temporel.",text:"Ils firent le tour de la place. [Ensuite], ils se dirigèrent vers le quartier d'affaires."},
   {k:"spot",q:"Touche le connecteur temporel.",text:"Tom s'arrêta pour se reposer. Il repensa [alors] au trajet déjà parcouru."}]},
  {t:"Complétez avec les connecteurs proposés",ar:"أكمل النص بالروابط المقترحة.",it:[
   {k:"fill",q:"Connecteurs spatiaux : de l'autre côté – devant – en bas – à droite",text:"Les enfants grimpèrent en haut de la colline et observèrent le paysage. [1], ils pouvaient contempler l'ensemble du village. [2] se trouvait le petit sentier qui menait au village voisin. [3], la forêt commençait. [4], les habitants ressemblaient à des fourmis.",
    bank:["Devant","À droite","De l'autre côté","En bas"],ans:["Devant",["À droite","De l'autre côté"],["De l'autre côté","À droite"],"En bas"],pts:2,why:"Vus d'en haut de la colline, les habitants « en bas » ressemblent à des fourmis."},
   {k:"fill",q:"Connecteurs temporels : maintenant – puis – soudain – peu à peu – d'abord",text:"À cause du brouillard, Guillaume avançait prudemment sur le sentier. [1], le brouillard se dispersa. [2], il ne distingua que des formes indistinctes. [3], les contours des habitations se précisèrent. [4], il vit le château qu'il cherchait depuis plusieurs mois. [5], il n'avait plus peur.",
    bank:["Soudain","D'abord","Peu à peu","Puis","Maintenant"],ans:["Soudain","D'abord",["Peu à peu","Puis"],["Puis","Peu à peu"],"Maintenant"],pts:3,why:"Soudain (le changement), d'abord (le premier moment), peu à peu (lentement), puis (la suite), maintenant (la fin)."}]}]}});

K("francais-12",{p:"Ressources linguistiques · Unité 1",v:[
 ["Les pronoms personnels sujets","Le pronom remplace un nom pour ne pas le répéter. Le pronom sujet fait l'action du verbe.","الضمير يعوض الاسم لكي لا نكرره.","Cendrillon ➜ elle"],
 ["La liste","Je, tu, il, elle, on, nous, vous, ils, elles.","الضمائر.",["je","tu","il / elle / on","nous","vous","ils / elles"]],
 ["Remplacer","Le loup court : il court. Les sœurs dansent : elles dansent. Le prince et Cendrillon dansent : ils dansent.","نعوض الاسم بالضمير المناسب.",[["le loup","il 🐺"],["les sœurs","elles 👭"],["le prince et Cendrillon","ils 👫"]]],
 ["Le piège","Un garçon et des filles ensemble : on dit ils. Le masculin l'emporte.","ولد وبنات: ils.","👦 + 👧👧 = ils"]],
 e:["Le pronom sujet remplace un nom sujet.","Je, tu, il, elle, on, nous, vous, ils, elles.","Masculin + féminin ensemble = ils."],
 ea:["الضمير يعوض الاسم الفاعل.","لائحة الضمائر.","مذكر ومؤنث = ils."],
 w:[["le pronom","الضمير","👉"],["le sujet","الفاعل","🧍"],["remplacer","يعوض","🔁"]],
 s:["Je, tu, il, elle, on, c'est parti,","Nous, vous, ils, elles, la liste est finie,","Le pronom remplace, il évite de répéter,","Le sujet fait l'action, tu l'as trouvé !"],
 x:[["« La fée sourit » ➜",["Elle sourit.","Il sourit.","Ils sourit."]],["« Les loups hurlent » ➜",["Ils hurlent.","Elles hurlent.","Il hurle."]],["« Ghita et moi » ➜",["nous","vous","ils"]],["Le pronom sujet fait l'action.",true],["« Le roi et la reine » ➜ elles",false],["« Toi et ton frère » ➜",["vous","nous","ils"]]],
 d:{title:"Les pronoms personnels sujets",sec:[{t:"Je remplace par le bon pronom",ar:"أعوض بالضمير المناسب.",it:[
  {k:"fill",q:"Remplace le sujet souligné.",text:"Le pêcheur jette son filet : [1] jette son filet. Les deux sœurs vont au bal : [2] vont au bal. Le prince et Cendrillon dansent : [3] dansent. Toi et moi, [4] lisons un conte.",bank:["il","elles","ils","nous"],ans:["il","elles","ils","nous"],pts:2},
  {k:"spot",q:"Touche les pronoms personnels sujets.",text:"Le loup arrive. [Il] frappe. La grand-mère demande : « Qui est là ? » [Elle] ouvre la porte.",pts:1}]}]}});

K("francais-13",{p:"Manuel p. 28 · Je fais le point",v:[
 ["Je fais le point","Révisons tout ce qu'on sait sur le conte merveilleux.","لنراجع كل ما نعرفه عن الحكاية العجيبة.","✅ bilan"],
 ["Le conte","Une histoire inventée, un temps lointain, une formule d'entrée, du merveilleux, une fin heureuse et une morale.","قصة خيالية، زمن بعيد، عبارة بداية، عجيب، نهاية سعيدة، عبرة.",["formule","merveilleux","schéma narratif","fin heureuse","morale"]],
 ["Les quatre contes","Le gros navet : l'union fait la force. Le pêcheur et le génie : la ruse bat la force. Le Petit Chaperon Rouge : se méfier des inconnus. Cendrillon : la bonté est récompensée.","أربع حكايات وأربع عبر.",[["Le gros navet","🤝 union"],["Le pêcheur et le génie","🧠 ruse"],["Le Petit Chaperon Rouge","⚠️ prudence"],["Cendrillon","💛 bonté"]]],
 ["La langue","Champ lexical, comparaison, imparfait et passé simple, présent, négation, conjonctions, connecteurs, pronoms sujets.","الدروس اللغوية للوحدة.","📚 8 leçons"]],
 e:["Le conte merveilleux : formule, merveilleux, schéma narratif, morale.","Imparfait = décor ; passé simple = actions.","Connecteurs : spatiaux (où) et temporels (quand)."],
 ea:["الحكاية العجيبة: عبارة، عجيب، خطاطة سردية، عبرة.","الناقص للوصف، البسيط للأحداث.","الروابط المكانية والزمانية."],
 w:[["le bilan","الحصيلة","✅"],["la morale","العبرة","💡"]],
 s:["Navet, génie, loup et Cendrillon,","Quatre contes, quatre leçons,","Il était une fois, et puis la fin,","Le conte merveilleux, je le connais bien !"],
 x:[["Quel conte montre que la ruse bat la force ?",["Le pêcheur et le génie","Cendrillon","Le gros navet"]],["Dans quel conte trouve-t-on une pantoufle de verre ?",["Cendrillon","Le Petit Chaperon Rouge","Le gros navet"]],["« Soudain » est un connecteur spatial.",false],["L'imparfait décrit le décor.",true],["L'outil de comparaison le plus courant est…",["comme","mais","donc"]],["La formule d'entrée est…",["Il était une fois","Fin","Bonjour"]]]});

K("francais-14",{p:"Évaluation · Unité 1",tab:"prof",v:[
 ["Évaluation","C'est un devoir comme en classe, sur 20 points. Prends ton temps. Lis chaque question deux fois.","فرض مثل القسم على 20 نقطة. خذ وقتك.","📝 /20"],
 ["Conseils","Écoute la question avec le bouton. Réponds avec une phrase complète. Relis-toi avant de vérifier.","استمع للسؤال، أجب بجملة كاملة، راجع قبل التحقق.",["J'écoute","Je réfléchis","J'écris","Je relis","Je vérifie"]]],
 e:["Lire deux fois chaque question.","Répondre par une phrase complète.","Relire avant de vérifier."],
 ea:["أقرأ السؤال مرتين.","أجيب بجملة كاملة.","أراجع قبل التحقق."],
 w:[["le devoir","الفرض","📝"],["relire","يعيد القراءة","🔁"]],
 s:["Je lis, je relis, je prends mon temps,","Une phrase complète, c'est important,","Je vérifie mes mots, je vérifie mes points,","Et je réussis, j'en prends soin !"],
 x:[["Avant de répondre, je…",["lis la question deux fois","réponds vite","devine"]],["Une réponse complète est une phrase.",true],["On peut répondre sans lire la question.",false]],
 d:{title:"Évaluation de l'unité 1",sub:"Devoir sur 20 points, comme en classe.",sec:[
  {t:"Compréhension du texte",ar:"فهم النص.",textT:"Le petit poisson d'or (d'après un conte russe)",text:"Il était une fois un vieux pêcheur qui vivait avec sa femme au bord de la mer. Ils étaient très pauvres et habitaient une cabane en ruine. Un jour, le pêcheur jeta son filet et attrapa un petit poisson d'or. Soudain, le poisson parla comme un homme : « Laisse-moi partir et je réaliserai tes souhaits. » Le vieil homme, qui était bon, le relâcha sans rien demander. Mais sa femme, avide, l'obligea à retourner voir le poisson. D'abord, elle voulut une maison neuve, puis un palais, enfin elle voulut devenir reine de la mer. Alors le poisson ne répondit plus. Quand le pêcheur rentra, sa femme était de nouveau assise devant la vieille cabane.",
   it:[{k:"mcq",q:"Quelle est la formule d'entrée ?",ch:["Il était une fois","Un jour","Soudain"]},
    {k:"write",q:"Où vivent le pêcheur et sa femme ?",keys:[["mer","cabane"]],model:"Ils vivent dans une cabane au bord de la mer.",pts:2},
    {k:"spot",q:"Relève l'élément merveilleux.",text:"Soudain, [le poisson parla] comme un homme.",why:"Un poisson qui parle : c'est impossible dans la vraie vie."},
    {k:"sort",q:"Le pêcheur et sa femme : qualités et défauts.",box:["Le pêcheur 👴","Sa femme 👵"],items:[["bon",0],["avide",1],["veut toujours plus",1],["ne demande rien",0]],pts:2},
    {k:"write",q:"Quelle est la morale de ce conte ?",keys:[["trop","plus","avide","avidite","tout perdre","perd","content","suffit"]],model:"Celui qui veut toujours plus finit par tout perdre.",pts:2}]},
  {t:"Langue",ar:"اللغة.",it:[
   {k:"sort",q:"Range les connecteurs du texte.",box:["Temporel 🕐","Spatial 📍"],items:[["un jour",0],["au bord de la mer",1],["d'abord",0],["devant la vieille cabane",1],["enfin",0]],pts:2},
   {k:"sort",q:"Range les verbes.",box:["Imparfait 🎨","Passé simple ⚡"],items:[["vivait",0],["jeta",1],["étaient",0],["relâcha",1],["répondit",1]],pts:2},
   {k:"spot",q:"Touche l'outil de comparaison.",text:"Le poisson parla [comme] un homme."},
   {k:"write",q:"Mets à la forme négative : « Le pêcheur demande un palais. »",keys:[["ne demande pas"]],full:false,model:"Le pêcheur ne demande pas de palais.",pts:2},
   {k:"fill",q:"Complète avec une conjonction.",text:"Le pêcheur est pauvre [1] il est heureux. Sa femme crie, [2] il retourne à la mer.",bank:["mais","donc","car"],ans:["mais","donc"]}]},
  {t:"Production écrite",ar:"التعبير الكتابي.",it:[
   {k:"write",q:"Écris le début d'un conte (2 phrases) : la formule d'entrée, le héros et le lieu.",keys:[["il etait une fois","autrefois","jadis"]],model:"Il était une fois une petite fille courageuse qui vivait dans un village au bord d'une forêt. Elle aimait aider tout le monde.",minW:10,pts:2,why:"Il faut la formule (Il était une fois), un héros et un lieu, à l'imparfait."}]}]}});

// ---------- UNITÉS 2 À 6 ----------
K("francais-15",{p:"Manuel p. 38 à 57",v:[
 ["La légende","Une légende est un récit ancien, transmis de bouche à oreille. Elle mélange des faits réels (un lieu, un personnage) et du merveilleux.","الأسطورة حكاية قديمة تتناقل شفويا، تمزج الحقيقي بالعجيب.","🏔️ réel + ✨ merveilleux"],
 ["Aïcha Kandicha","Une légende marocaine. Aïcha Kandicha est une femme mystérieuse aux pieds de chèvre, qui apparaît près de l'eau, la nuit.","أسطورة مغربية: عيشة قنديشة امرأة غامضة بأرجل ماعز.","🌙 💧"],
 ["Tristan et Iseut","Une légende du Moyen Âge. Tristan et Iseut boivent par erreur un philtre d'amour : un amour impossible.","أسطورة من القرون الوسطى: حب مستحيل.","🍷 💔"],
 ["Isli et Tislit","Une légende amazighe de l'Atlas. Deux jeunes amoureux, de tribus ennemies, ne peuvent pas se marier. Leurs larmes forment deux lacs : Isli et Tislit, près d'Imilchil.","أسطورة أمازيغية: دموع العاشقين كونت بحيرتي إسلي وتسليت قرب إملشيل.","💧 Isli · 💧 Tislit"],
 ["Les caractéristiques","Un lieu réel, un passé lointain, un héros extraordinaire, du merveilleux, et souvent l'explication d'un lieu ou d'une coutume.","مكان حقيقي، زمن بعيد، بطل استثنائي، عجيب، وتفسير لمكان أو عادة.",["lieu réel","passé lointain","héros","merveilleux","explication"]]],
 e:["La légende : récit ancien, transmis oralement.","Elle mêle le réel (lieux, personnes) et le merveilleux.","Elle explique souvent un lieu ou une coutume (les lacs Isli et Tislit)."],
 ea:["الأسطورة حكاية قديمة شفوية.","تمزج الواقعي والعجيب.","تفسر مكانا أو عادة."],
 w:[["la légende","الأسطورة","📜"],["le lac","البحيرة","💧"],["la tribu","القبيلة","⛺"],["le philtre","الشراب السحري","🍷"],["transmettre","ينقل","🗣️"]],
 s:["Au cœur de l'Atlas, deux lacs bleus,","Isli et Tislit, deux amoureux,","Une légende ancienne, un lieu bien réel,","Racontée le soir, sous le ciel !"],
 x:[["Une légende mêle…",["le réel et le merveilleux","seulement le réel","les maths"]],["Isli et Tislit sont…",["deux lacs de l'Atlas","deux villes","deux fées"]],["Une légende se transmet de bouche à oreille.",true],["Une légende ne contient jamais de lieu réel.",false],["Tristan et Iseut boivent…",["un philtre d'amour","de l'eau du lac","du lait"]],["Aïcha Kandicha est une légende…",["marocaine","russe","anglaise"]]],
 d:{title:"La légende",sec:[{t:"Je comprends la légende",ar:"أفهم الأسطورة.",textT:"Isli et Tislit (résumé)",text:"Il y a très longtemps, dans le Haut Atlas, un jeune homme d'une tribu aimait une jeune fille de la tribu voisine. Mais les deux tribus étaient ennemies, et les familles refusèrent le mariage. Les deux jeunes pleurèrent tant que leurs larmes formèrent deux lacs : Isli, le lac du fiancé, et Tislit, le lac de la fiancée. Depuis, chaque année, à Imilchil, on célèbre une grande fête des fiançailles.",it:[
  {k:"sort",q:"Réel ou merveilleux ?",box:["Réel 🌍","Merveilleux ✨"],items:[["le Haut Atlas",0],["des larmes qui forment des lacs",1],["la fête d'Imilchil",0],["deux tribus ennemies",0]],pts:2},
  {k:"write",q:"Pourquoi les jeunes ne peuvent-ils pas se marier ?",keys:[["ennemi","refus","famille"]],model:"Parce que leurs tribus sont ennemies et que les familles refusent.",pts:2},
  {k:"write",q:"Qu'explique cette légende ?",keys:[["lac"]],model:"Elle explique l'origine des deux lacs Isli et Tislit.",why:"Une légende explique souvent un lieu."}]}]}});

K("francais-16",{p:"Ressources linguistiques · Unité 2",v:[
 ["Trois figures de style","La métaphore, l'hyperbole et la personnification rendent un texte plus fort et plus beau.","ثلاث صور بلاغية: الاستعارة، المبالغة، التشخيص.","🎨 ✨"],
 ["La métaphore","C'est une comparaison sans outil : « Cette fille est une fleur. » Pas de comme.","الاستعارة: تشبيه بدون أداة.","fille = fleur 🌸"],
 ["L'hyperbole","C'est une exagération : « Je meurs de faim ! », « Il a pleuré un océan de larmes. »","المبالغة: تضخيم الشيء.","😭 = 🌊"],
 ["La personnification","On donne des actions humaines à une chose ou un animal : « Le vent chante. », « La montagne pleure. »","التشخيص: نعطي صفات إنسانية لشيء.","🌬️ 🎵"]],
 e:["Métaphore : comparaison sans outil.","Hyperbole : exagération.","Personnification : une chose agit comme un humain."],
 ea:["الاستعارة: تشبيه بلا أداة.","المبالغة: تضخيم.","التشخيص: شيء يتصرف كإنسان."],
 w:[["la métaphore","الاستعارة","🌸"],["l'hyperbole","المبالغة","🌊"],["la personnification","التشخيص","🌬️"]],
 s:["Sans comme, c'est une métaphore,","J'exagère : hyperbole encore,","Le vent qui chante, la lune qui sourit,","La personnification, c'est joli !"],
 x:[["« Il a une mémoire d'éléphant » est…",["une métaphore","une personnification","une négation"]],["« Je te l'ai dit mille fois ! » est…",["une hyperbole","une métaphore","une comparaison"]],["« Le soleil se lève et sourit » est…",["une personnification","une hyperbole","un champ lexical"]],["La métaphore utilise « comme ».",false],["L'hyperbole est une exagération.",true]],
 d:{title:"Métaphore, hyperbole, personnification",sec:[{t:"Je reconnais la figure de style",ar:"أتعرف على الصورة البلاغية.",it:[
  {k:"mcq",q:"« Les lacs pleurent la nuit. »",ch:["personnification","hyperbole","métaphore"],why:"Les lacs ne pleurent pas vraiment : on leur donne une action humaine."},
  {k:"mcq",q:"« Leurs larmes formèrent un océan. »",ch:["hyperbole","personnification","comparaison"],why:"Un océan de larmes : c'est une exagération."},
  {k:"mcq",q:"« Tislit était une étoile pour Isli. »",ch:["métaphore","comparaison","hyperbole"],why:"Pas d'outil de comparaison : c'est une métaphore."},
  {k:"write",q:"Écris une personnification avec « le vent ».",keys:[["vent"],["chante","pleure","parle","murmure","danse","crie","rit","sourit","chuchote","hurle"]],model:"Le vent chante dans les arbres.",pts:2}]}]}});

K("francais-17",{p:"Ressources linguistiques · Unité 2",v:[
 ["Deux temps du passé","Dans un récit, l'imparfait et le passé simple travaillent ensemble.","في الحكي يعمل الماضي الناقص والبسيط معا.","🎨 + ⚡"],
 ["Valeurs de l'imparfait","Description, habitude, action longue en arrière-plan : Les tribus vivaient dans la montagne.","الناقص: وصف، عادة، حدث طويل.","🏔️ arrière-plan"],
 ["Valeurs du passé simple","Action courte, terminée, au premier plan, souvent avec soudain, un jour : Un jour, il la rencontra.","البسيط: حدث قصير منته.","⚡ premier plan"],
 ["Les verbes à connaître","Être : il fut, ils furent. Avoir : il eut, ils eurent. Faire : il fit. Voir : il vit. Prendre : il prit.","أفعال مهمة في الماضي البسيط.",[["être","il fut"],["avoir","il eut"],["faire","il fit"],["voir","il vit"]]]],
 e:["Imparfait : arrière-plan (description, habitude).","Passé simple : premier plan (actions).","Il fut, il eut, il fit, il vit, il prit."],
 ea:["الناقص للخلفية.","البسيط للأحداث.","أفعال شاذة مهمة."],
 w:[["l'arrière-plan","الخلفية","🏞️"],["le premier plan","الواجهة","🎬"]],
 s:["L'imparfait peint le décor du récit,","Le passé simple court, l'action est partie,","Il fut, il eut, il fit, il vit,","Je raconte au passé, c'est réussi !"],
 x:[["Être, passé simple, 3e personne du singulier :",["il fut","il était","il est"]],["« Chaque soir, elle chantait » : imparfait d'…",["habitude","action soudaine","futur"]],["« Soudain, il vit le lac » : le passé simple marque une action courte.",true],["Avoir au passé simple : il eut.",true],["Faire au passé simple :",["il fit","il faisa","il faisait"]]],
 d:{title:"Imparfait et passé simple",sec:[{t:"Je conjugue",ar:"أصرف الأفعال.",it:[
  {k:"fill",q:"Choisis le bon temps.",text:"Isli [1] (vivre) dans la montagne. Un jour, il [2] (voir) Tislit près de la source. Ils [3] (être) amoureux.",bank:["vivait","vit","furent","voyait"],ans:["vivait","vit",["furent"]],pts:3,why:"Décor : imparfait. Action soudaine (un jour) : passé simple."},
  {k:"write",q:"Conjugue « avoir » au passé simple avec « ils ».",keys:[["eurent"]],full:false,model:"ils eurent"}]}]}});

K("francais-18",{p:"Ressources linguistiques · Unité 2",v:[
 ["Les compléments du verbe","Le COD et le COI complètent le verbe. On ne peut pas les déplacer.","المفعول به المباشر وغير المباشر يكملان الفعل.","verbe + complément"],
 ["Le COD","Complément d'objet direct : il répond à la question quoi ? ou qui ? après le verbe, sans préposition. Elle boit le philtre. Elle boit quoi ? le philtre.","المفعول المباشر: يجيب عن ماذا؟ من؟ بدون حرف جر.","boit ➜ quoi ? ➜ le philtre"],
 ["Le COI","Complément d'objet indirect : il répond à à qui ? à quoi ? de qui ? de quoi ?, avec une préposition. Il parle à Iseut.","المفعول غير المباشر: بحرف جر à أو de.","parle ➜ à qui ? ➜ à Iseut"],
 ["Astuce","Si on voit à ou de juste après le verbe, c'est souvent un COI.","إذا وجدنا à أو de بعد الفعل فهو غالبا غير مباشر.","à / de ➜ COI"]],
 e:["COD : quoi ? qui ? sans préposition.","COI : à qui ? de quoi ? avec à ou de.","Le COD et le COI complètent le verbe."],
 ea:["المباشر بدون حرف جر.","غير المباشر بحرف جر.","يكملان الفعل."],
 w:[["le complément","المكمل","➕"],["la préposition","حرف الجر","à / de"]],
 s:["Quoi ? Qui ? Sans rien entre les deux,","C'est le COD, il est direct, c'est mieux,","À qui ? De quoi ? Une préposition,","C'est le COI, bonne conclusion !"],
 x:[["« Iseut boit le philtre » : « le philtre » est…",["COD","COI","sujet"]],["« Tristan pense à Iseut » : « à Iseut » est…",["COI","COD","sujet"]],["Le COI est introduit par une préposition.",true],["Le COD répond à « à qui ? ».",false]],
 d:{title:"COD et COI",sec:[{t:"Je trouve les compléments",ar:"أحدد المفعولات.",it:[
  {k:"sort",q:"COD ou COI ?",box:["COD","COI"],items:[["Il regarde le lac.",0],["Elle pense à sa famille.",1],["Il parle de la fête.",1],["Ils mangent du pain.",0]],pts:2},
  {k:"spot",q:"Touche le COD.",text:"Le jeune homme aimait [la jeune fille]."},
  {k:"spot",q:"Touche le COI.",text:"Elle obéit [à son père]."}]}]}});

K("francais-19",{p:"Manuel p. 58 à 77",v:[
 ["L'utopie","Une utopie est la description d'un monde idéal, qui n'existe pas. Le mot vient du grec : « nulle part ».","اليوطوبيا: وصف عالم مثالي غير موجود.","🌈 monde parfait"],
 ["Les textes","Cultivons notre jardin ! Un pays pas comme les autres. Paris en l'an 2440. L'Utopie des arts et des métiers.","نصوص الوحدة.",["Cultivons notre jardin","Un pays pas comme les autres","Paris en 2440","L'Utopie des arts et des métiers"]],
 ["Les caractéristiques","Un lieu imaginaire et lointain, une société sans guerre ni pauvreté, des habitants heureux, l'égalité et le travail partagé.","مكان خيالي، مجتمع بلا حروب ولا فقر، سعادة ومساواة.",["lieu imaginaire","paix","égalité","bonheur"]],
 ["Pourquoi ?","L'auteur imagine un monde parfait pour critiquer son époque et proposer des idées pour l'améliorer.","المؤلف يتخيل عالما مثاليا لينتقد عصره.","💭 ➜ 🌍 mieux"]],
 e:["L'utopie décrit un monde idéal qui n'existe pas.","On y trouve paix, égalité, justice et bonheur.","Elle critique la société réelle."],
 ea:["اليوطوبيا عالم مثالي غير موجود.","السلم والمساواة والعدل.","تنتقد المجتمع الحقيقي."],
 w:[["idéal","مثالي","🌈"],["l'égalité","المساواة","⚖️"],["la société","المجتمع","🏘️"],["la paix","السلام","🕊️"]],
 s:["Dans mon pays, pas de guerre, pas de peine,","Tout le monde partage, personne ne se gêne,","Une ville idéale, un rêve, un espoir,","L'utopie, c'est un monde à voir !"],
 x:[["Une utopie est…",["un monde idéal imaginaire","un conte avec un loup","une ville réelle"]],["Dans une utopie, il y a la guerre.",false],["L'utopie sert à critiquer la société.",true],["« Paris en l'an 2440 » se passe…",["dans le futur","dans le passé","aujourd'hui"]]],
 d:{title:"L'utopie",sec:[{t:"Je décris un monde idéal",ar:"أصف عالما مثاليا.",it:[
  {k:"sort",q:"Utopie ou monde réel ?",box:["Utopie 🌈","Monde réel 🌍"],items:[["Personne n'est pauvre.",0],["Il y a des embouteillages.",1],["Tous les enfants vont à l'école gratuitement.",0],["La pollution augmente.",1]],pts:2},
  {k:"write",q:"Écris une phrase pour décrire ton pays idéal.",keys:[["pays","ville","monde","tout le monde","personne","chacun","habitants"]],model:"Dans mon pays idéal, tout le monde a une maison et personne n'a faim.",minW:6,pts:2}]}]}});

K("francais-20",{p:"Ressources linguistiques · Unité 3",v:[
 ["Synonymes et antonymes","Un synonyme a le même sens : content = heureux. Un antonyme a le sens contraire : heureux / triste.","المرادف نفس المعنى، والضد عكس المعنى.",[["synonyme","content = heureux"],["antonyme","heureux ≠ triste"]]],
 ["Former un antonyme","On peut ajouter un préfixe : possible / impossible, juste / injuste, faire / défaire.","نضيف سابقة: im, in, dé.",["im-","in-","dé-","mal-"]],
 ["L'énumération","C'est une liste de mots séparés par des virgules : Il y avait des jardins, des fontaines, des écoles et des théâtres.","التعداد: لائحة كلمات بفواصل.","🌳, ⛲, 🏫, 🎭"],
 ["L'ironie","Dire le contraire de ce qu'on pense pour se moquer : « Bravo, quelle belle chute ! »","السخرية: قول العكس للاستهزاء.","😏"]],
 e:["Synonyme = même sens ; antonyme = sens contraire.","Préfixes : im-, in-, dé-.","Énumération : une liste ; ironie : dire le contraire."],
 ea:["المرادف والضد.","السوابق.","التعداد والسخرية."],
 w:[["le synonyme","المرادف","="],["l'antonyme","الضد","≠"]],
 s:["Content, heureux : synonymes, c'est pareil,","Jour et nuit : antonymes, lune et soleil,","Possible, impossible, j'ajoute im-,","Et une liste, c'est l'énumération, mime !"],
 x:[["Synonyme de « joyeux » :",["content","triste","fâché"]],["Antonyme de « juste » :",["injuste","juste","justice"]],["L'énumération est une liste.",true],["« grand / petit » sont synonymes.",false]],
 d:{title:"Synonymes, antonymes, énumération",sec:[{t:"Je travaille le vocabulaire",ar:"أشتغل على المعجم.",it:[
  {k:"fill",q:"Trouve l'antonyme.",text:"possible ≠ [1] · juste ≠ [2] · faire ≠ [3] · heureux ≠ [4]",bank:["impossible","injuste","défaire","malheureux"],ans:["impossible","injuste","défaire","malheureux"],pts:2},
  {k:"sort",q:"Synonymes ou antonymes ?",box:["Synonymes =","Antonymes ≠"],items:[["beau / joli",0],["riche / pauvre",1],["rapide / vite",0],["la paix / la guerre",1]],pts:2}]}]}});

K("francais-21",{p:"Ressources linguistiques · Unité 3",v:[
 ["Le superlatif","Le superlatif exprime le plus haut ou le plus bas degré : la plus belle ville, le moins cher.","التفضيل: أعلى أو أدنى درجة.","🏆"],
 ["Les formes","Le plus, la plus, les plus + adjectif ; le moins… ; et très, extrêmement pour le superlatif absolu : une ville très propre.","الأشكال: le plus, le moins, très.",[["le plus","+ + +"],["le moins","- - -"],["très","absolu"]]],
 ["Les exceptions","Bon : le meilleur. Mauvais : le pire (ou le plus mauvais).","استثناءات: meilleur، pire.","bon ➜ le meilleur"],
 ["La question rhétorique","Une question qui n'attend pas de réponse, pour convaincre : « Qui ne rêve pas d'un monde sans guerre ? »","سؤال لا ينتظر جوابا، للإقناع.","❓➜ 💭"]],
 e:["Superlatif relatif : le plus / le moins + adjectif.","Superlatif absolu : très, extrêmement.","Bon ➜ le meilleur ; mauvais ➜ le pire."],
 ea:["التفضيل النسبي.","التفضيل المطلق.","الاستثناءات."],
 w:[["le meilleur","الأفضل","🥇"],["le pire","الأسوأ","👎"]],
 s:["La plus belle ville, la plus propre de toutes,","Le meilleur jardin au bout de la route,","Très grand, très beau, superlatif absolu,","Qui n'aime pas ça ? Question bien connue !"],
 x:[["« C'est la ville la plus calme » : superlatif…",["relatif","absolu"]],["Superlatif de « bon » :",["le meilleur","le plus bon","le bonnest"]],["Une question rhétorique attend une réponse.",false]],
 d:{title:"Le superlatif",sec:[{t:"J'emploie le superlatif",ar:"أستعمل التفضيل.",it:[
  {k:"fill",q:"Complète.",text:"C'est [1] gâteau de la boulangerie (bon). Cette rue est [2] propre de la ville. Ce film est [3] de l'année (mauvais).",bank:["le meilleur","la plus","le pire"],ans:["le meilleur","la plus","le pire"],pts:2},
  {k:"mcq",q:"« Qui voudrait vivre dans la peur ? » est…",ch:["une question rhétorique","une vraie question","un superlatif"]}]}]}});

K("francais-22",{p:"Manuel p. 78 à 97",v:[
 ["La nouvelle réaliste","Une nouvelle est un récit court. Elle est réaliste quand elle ressemble à la vraie vie : lieux réels, personnages ordinaires, époque précise.","القصة القصيرة الواقعية تشبه الحياة الحقيقية.","📰 vraie vie"],
 ["La parure","De Guy de Maupassant. Mathilde emprunte un collier de diamants pour un bal et le perd. Elle travaille dix ans pour le rembourser… mais il était faux !","موباسان: ماتيلد تستعير عقدا وتضيعه، وتعمل عشر سنوات لتعويضه، لكنه كان مزيفا!","💎 ➜ 😱 ➜ 10 ans"],
 ["Le papa de Simon","Aussi de Maupassant. Simon n'a pas de père, et les enfants se moquent de lui. Le forgeron Philippe accepte de devenir son papa.","سيمون بلا أب، يسخر منه الأطفال، فيقبل الحداد أن يكون أباه.","👦 ❤️ 🔨"],
 ["La Dernière Classe","D'Alphonse Daudet. En 1871, c'est la dernière leçon de français en Alsace. Le petit Frantz comprend trop tard la valeur de sa langue.","دوديه: آخر درس بالفرنسية في الألزاس.","🏫 📚 1871"],
 ["La chute","La nouvelle finit souvent par une chute : une fin surprenante, comme le collier faux de La parure.","تنتهي غالبا بنهاية مفاجئة.","😲 chute"]],
 e:["Nouvelle : récit court ; réaliste : comme la vraie vie.","Maupassant : La parure, Le papa de Simon ; Daudet : La Dernière Classe.","La chute est une fin surprenante."],
 ea:["قصة قصيرة واقعية.","موباسان ودوديه.","النهاية المفاجئة."],
 w:[["la nouvelle","القصة القصيرة","📰"],["la parure","الحلية","💎"],["le forgeron","الحداد","🔨"],["la chute","النهاية المفاجئة","😲"]],
 s:["Un collier perdu, dix ans de travail,","Mais il était faux, quelle pagaille !","Une nouvelle courte, la vraie vie dedans,","Et une chute qui surprend les gens !"],
 x:[["Qui a écrit La parure ?",["Maupassant","Perrault","La Fontaine"]],["Dans La parure, le collier était…",["faux","en or","volé"]],["Une nouvelle réaliste contient des fées.",false],["La chute est une fin surprenante.",true],["Qui devient le papa de Simon ?",["le forgeron Philippe","le maître","le roi"]]],
 d:{title:"La nouvelle réaliste",sec:[{t:"Je comprends La parure",ar:"أفهم القصة.",it:[
  {k:"write",q:"Que perd Mathilde ?",keys:[["collier","parure"]],model:"Mathilde perd le collier de diamants.",pts:1},
  {k:"write",q:"Quelle est la chute de La parure ?",keys:[["faux"]],model:"Le collier était faux : il ne valait presque rien.",pts:2},
  {k:"sort",q:"Réaliste ou merveilleux ?",box:["Réaliste 📰","Merveilleux ✨"],items:[["un bal au ministère",0],["une baguette magique",1],["travailler dix ans",0],["un génie",1]],pts:2}]}]}});

K("francais-23",{p:"Ressources linguistiques · Unité 4",v:[
 ["Deux façons de rapporter des paroles","Le discours direct rapporte les paroles exactes, avec des guillemets. Le discours indirect les raconte, sans guillemets.","الكلام المباشر بالمزدوجتين، وغير المباشر بدونهما.","« » ➜ que"],
 ["Le discours direct","Simon dit : « Je n'ai pas de papa. » On a deux points, des guillemets, un verbe de parole.","الكلام المباشر: نقطتان ومزدوجتان.","dit : « … »"],
 ["Le discours indirect","Simon dit qu'il n'a pas de papa. On utilise que, si, ce que. Les pronoms et les temps changent.","غير المباشر: نستعمل que, si ونغير الضمائر.","dit qu'il…"],
 ["Les changements","Je devient il ou elle. Mon devient son. Ici devient là.","تغييرات: je تصبح il، mon تصبح son.",[["je","il / elle"],["mon","son"],["ici","là"]]]],
 e:["Direct : paroles exactes, deux points et guillemets.","Indirect : verbe de parole + que / si, sans guillemets.","Les pronoms changent : je ➜ il."],
 ea:["المباشر بالمزدوجتين.","غير المباشر بـ que.","تتغير الضمائر."],
 w:[["les guillemets","المزدوجتان","« »"],["rapporter","ينقل","🗣️"]],
 s:["Deux points, guillemets, je parle direct,","Il dit qu'il vient, c'est indirect,","Je devient il, mon devient son,","Je rapporte les paroles, j'ai compris la leçon !"],
 x:[["« Elle dit : « J'ai faim. » » est au discours…",["direct","indirect"]],["Discours indirect de « Je suis triste », dit Simon :",["Simon dit qu'il est triste.","Simon dit : je suis triste.","Simon dit qu'il suis triste."]],["Le discours indirect utilise des guillemets.",false]],
 d:{title:"Discours direct et indirect",sec:[{t:"Je transforme",ar:"أحول الكلام.",it:[
  {k:"write",q:"Au discours indirect : Mathilde dit : « Je n'ai pas de bijoux. »",keys:[["qu'elle","quelle","qu elle"],["n'a pas","na pas","n a pas"]],full:false,model:"Mathilde dit qu'elle n'a pas de bijoux.",pts:2,why:"Je ➜ elle ; ai ➜ a ; on ajoute « que »."},
  {k:"mcq",q:"Quelle phrase est au discours direct ?",ch:["Le maître annonce : « C'est ma dernière leçon. »","Le maître annonce que c'est sa dernière leçon."]}]}]}});

K("francais-24",{p:"Ressources linguistiques · Unité 4",v:[
 ["Les types de phrases","Il y a quatre types de phrases. Chacun a son point final.","أربعة أنواع من الجمل.",["déclarative .","interrogative ?","exclamative !","injonctive . ou !"]],
 ["Déclarative","Elle donne une information. Elle finit par un point : Simon va à l'école.","الخبرية: تعطي معلومة.","."],
 ["Interrogative","Elle pose une question. Elle finit par un point d'interrogation : Où est ton papa ?","الاستفهامية: تطرح سؤالا.","?"],
 ["Exclamative et injonctive","L'exclamative exprime une émotion : Quel beau collier ! L'injonctive donne un ordre ou un conseil : Ferme la porte.","التعجبية تعبر عن شعور، والأمرية تعطي أمرا.","! · ordre"]],
 e:["Déclarative : information, point.","Interrogative : question, point d'interrogation.","Exclamative : émotion, point d'exclamation.","Injonctive : ordre ou conseil."],
 ea:["الخبرية.","الاستفهامية.","التعجبية.","الأمرية."],
 w:[["la question","السؤال","?"],["l'ordre","الأمر","👉"],["l'émotion","الشعور","😮"]],
 s:["Un point, je dis, c'est déclaratif,","Un point d'interrogation, interrogatif,","Quel bonheur ! Exclamatif,","Range ta chambre ! Injonctif !"],
 x:[["« Ferme la fenêtre. » est…",["injonctive","interrogative","exclamative"]],["« Quelle belle robe ! » est…",["exclamative","déclarative","interrogative"]],["Une phrase interrogative finit par « ? ».",true]],
 d:{title:"Les types de phrases",sec:[{t:"Je reconnais le type",ar:"أتعرف على نوع الجملة.",it:[
  {k:"sort",q:"Range les phrases.",box:["Interrogative ❓","Exclamative ❗"],items:[["As-tu fini ?",0],["Quelle chance !",1],["Où vas-tu ?",0],["Comme il est grand !",1]],pts:2},
  {k:"mcq",q:"« Écoute bien la leçon. »",ch:["injonctive","déclarative","interrogative"]}]}]}});

K("francais-25",{p:"Manuel p. 98 à 117",v:[
 ["La nouvelle fantastique","Dans le fantastique, un événement étrange arrive dans la vie réelle. Le personnage, et le lecteur, hésitent : est-ce réel ou un rêve ?","في الخيالي العجائبي يحدث شيء غريب في الحياة الواقعية، فنتردد: حقيقة أم حلم؟","🌙 ❓"],
 ["La Cafetière","De Théophile Gautier. Dans une chambre, la nuit, les objets et les portraits s'animent. Le héros danse avec une jeune femme… qui redevient une cafetière !","غوتييه: في الليل تتحرك الأشياء، والفتاة تعود إبريق قهوة!","☕ 💃"],
 ["La peur","De Maupassant. Des hommes racontent la vraie peur : celle qu'on ressent devant ce qu'on ne comprend pas.","موباسان: الخوف الحقيقي أمام ما لا نفهمه.","😨"],
 ["Fantastique ou merveilleux ?","Dans le merveilleux, la magie est normale. Dans le fantastique, l'étrange fait peur et on doute.","في العجيب السحر عادي، وفي الفانتاستيك الغريب يخيف.",[["merveilleux","magie normale 🧚"],["fantastique","doute et peur 👻"]]]],
 e:["Le fantastique : l'étrange dans le monde réel.","Le personnage hésite entre réel et surnaturel.","Gautier : La Cafetière ; Maupassant : La peur."],
 ea:["الغريب في العالم الواقعي.","التردد بين الواقعي والخارق.","غوتييه وموباسان."],
 w:[["étrange","غريب","👁️"],["le surnaturel","الخارق","👻"],["hésiter","يتردد","🤔"],["la cafetière","إبريق القهوة","☕"]],
 s:["La nuit tombe, les portraits bougent,","La cafetière danse, les bougies rougissent,","Rêve ou réalité ? J'ai peur, je doute,","C'est le fantastique, sur ma route !"],
 x:[["Dans le fantastique, le personnage…",["hésite entre réel et surnaturel","trouve la magie normale","n'a jamais peur"]],["Qui a écrit La Cafetière ?",["Théophile Gautier","Perrault","Daudet"]],["Le fantastique se passe dans le monde réel.",true]],
 d:{title:"La nouvelle fantastique",sec:[{t:"Merveilleux ou fantastique ?",ar:"عجيب أم خارق؟",it:[
  {k:"sort",q:"Range les phrases.",box:["Merveilleux 🧚","Fantastique 👻"],items:[["La fée transforme la citrouille, et Cendrillon sourit.",0],["Le portrait me regarde… je dois rêver !",1],["Le génie sort du vase.",0],["La nuit, j'entends des pas dans la maison vide. Qui est là ?",1]],pts:2},
  {k:"write",q:"Que ressent le personnage dans un récit fantastique ?",keys:[["peur","doute","hesite"]],model:"Il a peur et il doute : il ne sait pas si c'est réel.",pts:2}]}]}});

K("francais-26",{p:"Ressources linguistiques · Unité 5",v:[
 ["Le vocabulaire du surnaturel","Fantôme, spectre, apparition, ombre, mystère, étrange, inexplicable, frissonner.","معجم الخارق.",["fantôme","apparition","ombre","mystère","frissonner"]],
 ["Le vocabulaire de la peur","Avoir peur, trembler, frémir, l'angoisse, la terreur, effrayé, glacé d'horreur.","معجم الخوف.",[["nom","la terreur"],["verbe","trembler"],["adjectif","effrayé"]]],
 ["Les modalisateurs du doute","Il me sembla, je crus voir, peut-être, sans doute, comme si : ils montrent l'hésitation.","أدوات الشك.","il me sembla… 🤔"]],
 e:["Mots du surnaturel : fantôme, apparition, mystère.","Mots de la peur : trembler, terreur, effrayé.","Le doute : il me sembla, je crus, peut-être."],
 ea:["معجم الخارق.","معجم الخوف.","أدوات الشك."],
 w:[["le fantôme","الشبح","👻"],["l'ombre","الظل","🌑"],["trembler","يرتجف","😨"]],
 s:["Une ombre passe, un fantôme, un frisson,","Je crus voir bouger le vieux salon,","Peut-être un rêve, sans doute la nuit,","Le fantastique m'a pris, je suis surpris !"],
 x:[["« Il me sembla voir une ombre » exprime…",["le doute","la joie","un ordre"]],["« frissonner » appartient au champ lexical de…",["la peur","la cuisine","l'école"]]],
 d:{title:"Le surnaturel et la peur",sec:[{t:"Je reconnais le vocabulaire",ar:"أتعرف على المعجم.",it:[
  {k:"spot",q:"Touche les mots de la peur.",text:"Je [tremblais] dans le noir, [glacé d'horreur], quand une ombre passa.",pts:2},
  {k:"spot",q:"Touche l'expression du doute.",text:"[Il me sembla] que le portrait souriait."}]}]}});

K("francais-27",{p:"Manuel p. 118 à 137",v:[
 ["La fable","Une fable est un petit récit, souvent en vers, avec des animaux qui parlent comme des humains. Elle donne une leçon : la morale.","الخرافة حكاية قصيرة شعرية، أبطالها حيوانات، وفيها عبرة.","🦊 🐦 💡"],
 ["Le Corbeau et le Renard","Le renard flatte le corbeau pour qu'il chante. Le corbeau ouvre son bec et laisse tomber son fromage. Morale : tout flatteur vit aux dépens de celui qui l'écoute.","الثعلب يمدح الغراب فيسقط الجبن. العبرة: المتملق يعيش على حساب من يسمعه.","🐦🧀 ➜ 🦊"],
 ["La Cigale et la Fourmi","La cigale chante tout l'été. En hiver, elle a faim et demande à la fourmi, qui a travaillé. La fourmi refuse. Il faut prévoir l'avenir.","الصرصار يغني صيفا والنملة تعمل. في الشتاء يجوع الصرصار.","🦗🎻 · 🐜📦"],
 ["Le Loup et l'Agneau","Le loup accuse l'agneau sans raison et le mange. Morale : la raison du plus fort est toujours la meilleure.","الذئب يتهم الحمل ظلما ويأكله.","🐺 ⚖️ 🐑"],
 ["La structure","Un récit (l'histoire), puis une morale (la leçon), au début ou à la fin. Auteur célèbre : Jean de La Fontaine.","حكاية ثم عبرة. المؤلف: لافونتين.",["récit","morale"]]],
 e:["La fable : récit court + morale.","Les animaux représentent des défauts humains.","Auteur : Jean de La Fontaine."],
 ea:["الخرافة: حكاية وعبرة.","الحيوانات ترمز لعيوب الإنسان.","المؤلف: لافونتين."],
 w:[["la fable","الخرافة","🦊"],["flatter","يتملق","😏"],["le corbeau","الغراب","🐦‍⬛"],["la cigale","الصرصار","🦗"],["la fourmi","النملة","🐜"],["l'agneau","الحمل","🐑"]],
 s:["Maître Corbeau sur un arbre perché,","Tenait en son bec un fromage, c'est vrai,","Le renard le flatte, le fromage tombe,","Méfie-toi des flatteurs, c'est la leçon du monde !"],
 x:[["Qui a écrit Le Corbeau et le Renard ?",["Jean de La Fontaine","Perrault","Maupassant"]],["Comment le renard obtient-il le fromage ?",["en flattant le corbeau","en volant","en achetant"]],["La fourmi prête de la nourriture à la cigale.",false],["La morale est la leçon de la fable.",true],["Dans la fable, les animaux représentent…",["les humains","les plantes","les objets"]]],
 d:{title:"La fable",sec:[{t:"Je comprends la fable",ar:"أفهم الخرافة.",textT:"Le Corbeau et le Renard (La Fontaine, 1668)",text:"Maître Corbeau, sur un arbre perché,\nTenait en son bec un fromage.\nMaître Renard, par l'odeur alléché,\nLui tint à peu près ce langage :\n« Hé ! bonjour, Monsieur du Corbeau.\nQue vous êtes joli ! que vous me semblez beau ! »",it:[
  {k:"write",q:"Que tient le corbeau dans son bec ?",keys:[["fromage"]],model:"Le corbeau tient un fromage dans son bec."},
  {k:"write",q:"Pourquoi le renard fait-il des compliments au corbeau ?",keys:[["fromage"]],model:"Il le flatte pour avoir son fromage.",pts:2},
  {k:"mcq",q:"Quelle est la morale ?",ch:["Il faut se méfier des flatteurs.","Il faut manger du fromage.","Les corbeaux chantent bien."]},
  {k:"sort",q:"Qualité ou défaut ?",box:["Le renard 🦊","Le corbeau 🐦"],items:[["rusé",0],["vaniteux",1],["flatteur",0],["naïf",1]],pts:2}]}]}});

K("francais-28",{p:"Ressources linguistiques · Unité 6",v:[
 ["La morale","La morale est la leçon de la fable. Elle est souvent au présent de vérité générale : La raison du plus fort est toujours la meilleure.","العبرة بالمضارع الدال على الحقيقة العامة.","💡 présent de vérité"],
 ["La modalisation","Le narrateur montre ce qu'il pense : certitude (certainement, sans doute), doute (peut-être), jugement (malheureusement, hélas).","التعبير عن الرأي: اليقين، الشك، الحكم.",[["certitude","certainement ✅"],["doute","peut-être 🤔"],["jugement","hélas 😔"]]],
 ["L'injonction","Pour donner une leçon, on utilise l'impératif ou il faut : Travaillez, prenez de la peine.","الأمر لإعطاء درس.","👉 Travaillez !"]],
 e:["La morale : au présent de vérité générale.","Modalisateurs : certainement, peut-être, hélas.","Injonction : impératif, il faut."],
 ea:["العبرة بحاضر الحقيقة العامة.","أدوات التعبير عن الرأي.","الأمر."],
 w:[["la certitude","اليقين","✅"],["le doute","الشك","🤔"],["hélas","للأسف","😔"]],
 s:["Une fable, une morale, une leçon,","Au présent toujours vrai, c'est la raison,","Peut-être, certainement, hélas je dis,","Travaillez, prenez de la peine, mes amis !"],
 x:[["« peut-être » exprime…",["le doute","la certitude","un ordre"]],["La morale est souvent au présent de vérité générale.",true]],
 d:{title:"La morale et la modalisation",sec:[{t:"Je reconnais",ar:"أتعرف.",it:[
  {k:"sort",q:"Certitude ou doute ?",box:["Certitude ✅","Doute 🤔"],items:[["certainement",0],["peut-être",1],["sans aucun doute",0],["il semble que",1]],pts:2},
  {k:"write",q:"Écris une morale pour La Cigale et la Fourmi.",keys:[["travail","travaille","prevoir","avenir","hiver","prepare"]],model:"Il faut travailler et prévoir l'avenir.",pts:2}]}]}});

// ---------- ANGLAIS (manuel + format de l'examen du prof) ----------
K("anglais-0",{p:"Student's Book p. 4 · Welcome",v:[
 ["Classroom objects","A pen, a pencil, a rubber, a ruler, a book, a notebook, a schoolbag, a desk.","قلم، قلم رصاص، ممحاة، مسطرة، كتاب، دفتر، محفظة، طاولة.",[["a pen","🖊️ un stylo"],["a rubber","🧽 une gomme"],["a ruler","📏 une règle"],["a schoolbag","🎒 un cartable"]],"Les objets de la classe."],
 ["Colours","Red, blue, green, yellow, orange, purple, pink, black, white, brown, grey.","الألوان.","🔴 🔵 🟢 🟡 🟣","Les couleurs."],
 ["School subjects","Maths, English, French, Arabic, science, history, geography, PE, art, music, IT.","المواد الدراسية.",["Maths","English","Science","PE","Art"],"PE = sport. IT = informatique."],
 ["Pronouns and possessives","I – my, you – your, he – his, she – her, it – its, we – our, they – their. She is Ghita. Her bag is pink.","الضمائر وصفات الملكية.",[["I","my"],["he","his"],["she","her"],["we","our"],["they","their"]],"I ➜ my, she ➜ her, they ➜ their."],
 ["Prepositions of place","In, on, under, next to, behind, in front of, between. The pen is on the desk. The bag is under the chair.","حروف المكان.",["in 📦","on ⬆️","under ⬇️","next to ↔️","behind 🔙"],"Où est l'objet ?"],
 ["have got and 's","I have got a new bike. She has got a cat. It's Ben's book: the book of Ben.","have got = يملك. 's = ملكية.","Ben's book 📘","have got = avoir ; 's = de (le livre de Ben)."]],
 e:["I ➜ my, you ➜ your, he ➜ his, she ➜ her, we ➜ our, they ➜ their.","Prépositions : in, on, under, next to, behind, in front of.","have got / has got = posséder. Ben's bag = le sac de Ben.","can = savoir faire : I can swim."],
 ea:["الضمائر وصفات الملكية.","حروف المكان.","have got للملكية.","can للقدرة."],
 w:[["a rubber","ممحاة","🧽"],["a ruler","مسطرة","📏"],["a schoolbag","محفظة","🎒"],["under","تحت","⬇️"],["next to","بجانب","↔️"],["PE","التربية البدنية","⚽"]],
 s:["Red, blue, yellow, green,","My pen is on the desk, can you see?","Maths, English, science and art,","Welcome to school, let's start!"],
 x:[["She is my sister. ___ name is Kim.",["Her","His","Their"]],["The cat is ___ the table (sous).",["under","on","in"]],["« a rubber » veut dire…",["une gomme","une règle","un stylo"]],["He ___ got a bike.",["has","have","is"]],["« PE » est le sport.",true],["They ➜ their.",true]],
 d:{title:"Welcome – Practice",sub:"Like the teacher's app: read, answer, check.",sec:[
  {t:"Vocabulary",fr:"Vocabulaire : choisis la bonne réponse.",it:[
   {k:"mcq",q:"You use it to draw a straight line.",ch:["a ruler","a rubber","a schoolbag"]},
   {k:"mcq",q:"Which one is a school subject?",ch:["geography","purple","desk"]},
   {k:"fill",q:"Complete with the right preposition.",text:"The book is [1] the desk (sur). The cat is [2] the chair (sous). My pen is [3] my bag (dans).",bank:["on","under","in"],ans:["on","under","in"],pts:2}]},
  {k:"",t:"Grammar",fr:"Grammaire : adjectifs possessifs et have got.",help:"I ➜ my · you ➜ your · he ➜ his · she ➜ her · we ➜ our · they ➜ their. I / you / we / they have got ; he / she / it has got.",it:[
   {k:"fill",q:"Complete with my, his, her, our, their.",text:"Ben is my friend. [1] house is big. Kim and Nancy are sisters. [2] mum is a teacher. I've got a dog. [3] dog is brown.",bank:["His","Their","My","Her"],ans:["His","Their","My"],pts:2},
   {k:"mcq",q:"My sister ___ got long hair.",ch:["has","have","is"],why:"He / she / it ➜ has got."},
   {k:"write",q:"Answer with a full sentence: Have you got a bike?",keys:[["yes","no"],["have","haven't","have not","got"]],model:"Yes, I have got a bike. / No, I haven't got a bike.",pts:2}]}]}});

K("anglais-1",{p:"Student's Book p. 8 · Unit 1",v:[
 ["My family","Mum, dad, brother, sister, grandma, grandad, aunt, uncle, cousin. In my family there are five people.","العائلة.",[["mum","أم 👩"],["dad","أب 👨"],["brother","أخ 👦"],["sister","أخت 👧"],["grandma","جدة 👵"]],"La famille."],
 ["Physical descriptions","He is tall. She is short. He has got short black hair. She has got long curly hair and brown eyes.","الوصف الجسدي.",[["tall","grand 📏"],["short","petit"],["curly hair","cheveux bouclés"],["blue eyes","yeux bleus 👀"]],"Pour décrire : is + adjectif, has got + cheveux / yeux."],
 ["Personality adjectives","Kind, friendly, funny, shy, clever, lazy, helpful. My brother is funny. My sister is shy.","صفات الشخصية.",["kind 💛","funny 😂","shy 🙈","clever 🧠","lazy 😴"],"Gentil, drôle, timide, intelligent, paresseux."],
 ["Describing someone","This is my cousin Lina. She is twelve. She is tall and she has got long brown hair. She is very friendly.","وصف شخص.","👧 Lina, 12","Ordre : nom, âge, physique, caractère."]],
 e:["Family : mum, dad, brother, sister, grandma, grandad, aunt, uncle, cousin.","Physique : she is tall / she has got long hair.","Caractère : kind, funny, shy, clever, friendly."],
 ea:["أفراد العائلة.","الوصف الجسدي.","صفات الشخصية."],
 w:[["aunt","عمة / خالة","👩"],["uncle","عم / خال","👨"],["cousin","ابن العم","🧒"],["curly","مجعد","➰"],["shy","خجول","🙈"],["funny","مضحك","😂"],["kind","لطيف","💛"]],
 s:["This is my mum, this is my dad,","My little brother is funny, not bad,","My sister is shy with long curly hair,","My family is great, we love to share!"],
 x:[["Your mum's sister is your…",["aunt","uncle","cousin"]],["« shy » veut dire…",["timide","drôle","gentil"]],["She ___ got blue eyes.",["has","is","have"]],["He ___ tall.",["is","has","are"]],["« funny » = drôle.",true],["Your uncle's son is your brother.",false]],
 d:{title:"Unit 1 – Reading practice",sub:"Same format as the teacher's exam: read, choose, answer in full sentences.",sec:[
  {t:"Reading Comprehension",fr:"Lis le texte, puis réponds. Réponds avec une phrase complète.",textT:"Reading Text: A House by the Sea",text:"Sara Bennani is 12. She's from Agadir in Morocco. There are six people in her family – her mum and dad, her brother, Adam, her sisters, Hiba and Rim, and Sara.\nThe Bennanis' house is near the beach. It has got a big garden with a lemon tree. In the garden there is a small wooden cabin. It's Sara's favourite place. There is a table, two chairs and a lot of books, but there isn't a bed.\nSara is tall and she has got long curly hair. She is clever and very friendly. At the weekend, her friends come to the cabin and they read and play games.",
   it:[{k:"mcq",q:"1. Sara Bennani is…",ch:["Moroccan","British","American"]},
    {k:"mcq",q:"2. There are ___ children in the Bennani family.",ch:["four","six","three"],why:"Adam, Hiba, Rim and Sara = four children. Six people with mum and dad."},
    {k:"write",q:"3. How old is Sara?",keys:[["12","twelve"]],model:"Sara is 12 years old.",hint:"Sara is …"},
    {k:"write",q:"4. Where is Sara from?",keys:[["agadir","morocco"]],model:"She is from Agadir in Morocco.",hint:"She is from …"},
    {k:"write",q:"5. What are the names of Sara's sisters?",keys:[["hiba"],["rim"]],model:"Her sisters are Hiba and Rim.",hint:"Her sisters are … and …"},
    {k:"write",q:"6. Is there a bed in the cabin?",keys:[["no","isn't","is not","not"]],model:"No, there isn't a bed in the cabin.",hint:"No, there …"},
    {k:"write",q:"7. Would you like a cabin in your garden? Why or why not?",keys:[["yes","no","would","wouldn't"],["because"]],model:"Yes, I would, because I can read there with my friends.",ph:"Type your opinion sentence…",hint:"Yes, I would, because … / No, I wouldn't, because …",pts:2}]}]}});

K("anglais-2",{p:"Student's Book p. 8 · Unit 1 Grammar",v:[
 ["The verb be","I am, you are, he is, she is, it is, we are, they are. Short forms: I'm, you're, he's, she's, we're, they're.","فعل to be.",[["I","am"],["he / she / it","is"],["you / we / they","are"]],"Être : I am, he is, they are."],
 ["Negative and questions","I'm not tired. She isn't at home. Are you twelve? Yes, I am. No, I'm not.","النفي والسؤال.","Are you…? ✔ Yes, I am.","Négation : not. Question : on inverse."],
 ["There is / there are","There is a garden. There are three bedrooms. There isn't a pool. Is there a garage? Yes, there is.","يوجد.",[["There is","+ un seul 🏠"],["There are","+ plusieurs 🏠🏠"]],"Il y a : is (singulier), are (pluriel)."],
 ["a / an / some / any","a book, an apple. There are some books. There aren't any chairs. Are there any trees?","a قبل الساكن، an قبل المتحرك.",[["a","a cat"],["an","an apple 🍎"],["some","+ phrase affirmative"],["any","négation / question"]],"an devant une voyelle ; some (affirmatif), any (négatif et question)."]],
 e:["I am · he/she/it is · you/we/they are.","There is + singulier ; there are + pluriel.","a + consonne ; an + voyelle (an apple).","some : phrase affirmative ; any : négation et question."],
 ea:["تصريف to be.","there is للمفرد و there are للجمع.","a و an.","some للإثبات و any للنفي والسؤال."],
 w:[["bedroom","غرفة النوم","🛏️"],["garden","حديقة","🌳"],["kitchen","مطبخ","🍳"],["bathroom","حمام","🛁"]],
 s:["There is a garden, there are two trees,","Is there a pool? No, there isn't, please!","I am, you are, he is, we are,","Any questions? Some answers, hurrah!"],
 x:[["There ___ two cats.",["are","is","am"]],["___ apple",["an","a","some"]],["Are there ___ books?",["any","some","a"]],["They ___ my friends.",["are","is","am"]],["« There is » + pluriel.",false],["She isn't = she is not.",true]],
 d:{title:"Unit 1 – Grammar practice",sec:[
  {t:"Grammar",fr:"Choisis ou complète.",help:"am / is / are. There is (1) / There are (2+). a (consonne) / an (voyelle). some (+) / any (– et ?).",it:[
   {k:"fill",q:"Complete with am, is, are.",text:"I [1] twelve. My brothers [2] funny. Kim [3] shy.",bank:["am","are","is"],ans:["am","are","is"],pts:2},
   {k:"fill",q:"Complete with there is / there are.",text:"[1] a big garden. [2] three bedrooms. [3] a lemon tree.",bank:["There is","There are","There is "],ans:["There is","There are","There is"],pts:2},
   {k:"mcq",q:"There aren't ___ books on the desk.",ch:["any","some","an"]},
   {k:"mcq",q:"I've got ___ orange.",ch:["an","a","any"],why:"orange commence par une voyelle : an."},
   {k:"write",q:"Answer: Is there a garden in your house?",keys:[["yes","no"],["there"]],model:"Yes, there is. / No, there isn't.",full:false}]}]}});

K("anglais-3",{p:"Student's Book p. 20 · Unit 2",v:[
 ["Routine activities","Get up, have a shower, get dressed, have breakfast, go to school, do homework, have dinner, go to bed.","الأنشطة اليومية.",["get up ⏰","have breakfast 🥣","go to school 🏫","do homework 📚","go to bed 🛏️"],"La routine."],
 ["Free-time activities","Play football, watch TV, read books, listen to music, ride a bike, go swimming, play video games.","أنشطة وقت الفراغ.",[["play football","⚽"],["watch TV","📺"],["listen to music","🎧"],["go swimming","🏊"]],"Les loisirs."],
 ["Present simple","I play, you play, we play, they play. He plays, she watches, it goes. With he, she, it we add s or es.","المضارع البسيط: نضيف s مع he, she, it.",[["I / you / we / they","play"],["he / she / it","plays"]],"he / she / it : + s (watches, goes, does)."],
 ["Negative","I don't like maths. She doesn't play tennis. After don't and doesn't, no s.","النفي: don't و doesn't.","doesn't + play (sans s)","Négation : don't / doesn't + verbe sans s."],
 ["Questions and short answers","Do you like music? Yes, I do. No, I don't. Does he play football? Yes, he does. No, he doesn't.","السؤال والجواب القصير.","Does he…? ✔ Yes, he does.","Question : Do / Does au début."]],
 e:["he / she / it : verbe + s (plays, watches, goes).","Négation : don't / doesn't + verbe sans s.","Question : Do you…? Does she…? Réponse : Yes, I do / No, she doesn't."],
 ea:["نضيف s مع he, she, it.","النفي بـ don't و doesn't.","السؤال بـ do و does."],
 w:[["get up","يستيقظ","⏰"],["get dressed","يرتدي ملابسه","👕"],["homework","واجبات منزلية","📚"],["breakfast","فطور","🥣"]],
 s:["I get up at seven, I have my breakfast,","She goes to school, she isn't the last,","He doesn't watch TV, he plays football,","Do you like music? Yes, I do, that's all!"],
 x:[["She ___ to school by bus.",["goes","go","going"]],["They ___ like fish.",["don't","doesn't","isn't"]],["___ he play tennis?",["Does","Do","Is"]],["Does she like maths? — Yes, she ___.",["does","do","is"]],["« He doesn't plays » est correct.",false],["« get up » = se lever.",true]],
 d:{title:"Unit 2 – Present simple",sec:[
  {t:"Grammar",fr:"Le présent simple : attention au s.",help:"I / you / we / they play. He / she / it plays (watches, goes, does). Negative: don't / doesn't + verb. Question: Do / Does + subject + verb?",it:[
   {k:"fill",q:"Complete.",text:"My brother [1] (watch) TV every evening. I [2] (play) football. She [3] (go) to bed at nine.",bank:["watches","play","goes","plays","go"],ans:["watches","play","goes"],pts:2},
   {k:"write",q:"Make it negative: Ben likes cats.",keys:[["doesn't like","does not like"]],model:"Ben doesn't like cats.",full:false},
   {k:"write",q:"Answer with a short answer: Do you like English?",keys:[["yes, i do","no, i don't","yes i do","no i don't","yes i do","no i do not"]],model:"Yes, I do. / No, I don't.",full:false},
   {k:"write",q:"What do you do after school? Write a full sentence.",keys:[["i "],["after school","homework","play","watch","read","go","do"]],model:"After school, I do my homework and I play with my sister.",minW:5,pts:2}]}]}});

K("anglais-4",{p:"Student's Book p. 20 · Unit 2 · Lesson PDF du prof",tab:"prof",v:[
 ["Adverbs of frequency","They say how often we do something: always, usually, often, sometimes, never.","ظروف التكرار: كم مرة نقوم بشيء.",[["always","100 % ⬛⬛⬛⬛"],["usually","80 % ⬛⬛⬛"],["often","60 % ⬛⬛"],["sometimes","30 % ⬛"],["never","0 % ⬜"]],"always = toujours, usually = d'habitude, often = souvent, sometimes = parfois, never = jamais."],
 ["Before the verb","The adverb goes before the main verb: I always get up at seven. She never eats fish.","الظرف يأتي قبل الفعل.","I always get up","Avant le verbe."],
 ["After be","With the verb be, the adverb goes after: He is always late. We are never tired.","بعد فعل to be.","He is always late","Après is / am / are."],
 ["How often?","How often do you play football? I often play football. I play football every day, twice a week, once a month.","كم مرة؟",["every day","once a week","twice a week"],"How often…? = À quelle fréquence ?"]],
 e:["always 100 %, usually, often, sometimes, never 0 %.","Avant le verbe : I often read.","Après be : She is always happy.","How often…? ➜ every day, once a week, twice a week."],
 ea:["الترتيب من 100 إلى 0.","قبل الفعل.","بعد to be.","سؤال How often."],
 w:[["always","دائما","💯"],["usually","عادة","🔵"],["often","غالبا","🟢"],["sometimes","أحيانا","🟡"],["never","أبدا","⛔"],["once","مرة","1️⃣"],["twice","مرتين","2️⃣"]],
 s:["Always, always, every single day,","Usually, often, that's the way,","Sometimes I'm late, but never on Friday,","Adverbs of frequency, hip hip hooray!"],
 x:[["« never » =",["jamais","toujours","souvent"]],["Put in order: I / always / breakfast / have",["I always have breakfast.","I have always breakfast.","Always I have breakfast."]],["She is ___ happy.",["always","always is","is always"]],["« sometimes » = parfois.",true],["With be, the adverb goes before be.",false],["How often…? asks about…",["frequency","age","place"]]],
 d:{title:"Adverbs of frequency",sub:"From the teacher's lesson: Adverbs_of_Frequency_Lesson.pdf",sec:[
  {t:"The adverbs",fr:"Range du plus souvent au moins souvent.",help:"always (100 %) > usually > often > sometimes > never (0 %). Adverb + verb: I often read. Be + adverb: She is always happy.",it:[
   {k:"fill",q:"From 100 % to 0 %.",text:"100 % [1] · 80 % [2] · 60 % [3] · 30 % [4] · 0 % [5]",bank:["always","usually","often","sometimes","never"],ans:["always","usually","often","sometimes","never"],pts:2},
   {k:"sort",q:"Where does the adverb go?",box:["Correct ✔","Wrong ✘"],items:[["I always get up at 7.",0],["She never is late.",1],["He is often tired.",0],["We play sometimes football.",1]],pts:2,why:"Before the main verb, but after be."}]},
  {t:"Write sentences",fr:"Écris des phrases complètes.",it:[
   {k:"write",q:"Put the words in order: often / I / books / read",keys:[["i often read books"]],full:false,model:"I often read books."},
   {k:"write",q:"Put the words in order: is / Ben / late / never",keys:[["ben is never late"]],full:false,model:"Ben is never late."},
   {k:"write",q:"How often do you do your homework?",keys:[["always","usually","often","sometimes","never","every day","every"],["homework"]],model:"I always do my homework.",pts:2},
   {k:"write",q:"Write about your morning with 'usually'.",keys:[["usually"]],model:"I usually get up at seven o'clock.",minW:5,pts:2}]}]}});

K("anglais-5",{p:"Exam blanc · Semester 1",tab:"prof",v:[
 ["Practice Exam","This exam is like your teacher's exam: four sections, thirty points. Section 1: Reading. Section 2: Vocabulary. Section 3: Grammar. Section 4: Writing.","امتحان تجريبي مثل امتحان الأستاذ: أربعة أجزاء، 30 نقطة.",["Reading","Vocabulary","Grammar","Writing"],"4 sections, 30 points, comme le prof."],
 ["Tips","Read the text two times. Answer with a full sentence: use the words of the question. How old is Ben? Ben is thirteen.","اقرأ النص مرتين وأجب بجملة كاملة.","How old…? ➜ He is…","Reprends les mots de la question pour faire ta phrase."]],
 e:["Lis le texte deux fois.","Réponds avec une phrase complète : reprends les mots de la question.","Vérifie le s à he / she / it."],
 ea:["اقرأ النص مرتين.","أجب بجملة كاملة.","انتبه لحرف s."],
 w:[["full sentence","جملة كاملة","✍️"],["check","تحقق","✔"]],
 s:["Read it once, read it twice,","A full sentence, that's very nice,","Check the s for he and she,","Thirty points, wait and see!"],
 x:[["How old is Ben? Full sentence:",["Ben is thirteen.","Thirteen.","Ben thirteen."]],["Where is she from? ➜",["She is from Morocco.","Morocco.","From Morocco she."]]],
 d:{title:"7th Grade English Practice Exam",sub:"Semester 1 · Like the teacher's exam · Automated score tracker",sec:[
  {t:"Reading Comprehension",fr:"Lis le texte, puis réponds. Questions 4 à 8 : phrase complète.",textT:"Reading Text: A Busy Family",text:"Yassine Alami is 13. He's from Fes in Morocco. There are a lot of people in his family – his mum and dad, his grandma, his brother, Omar, and his sisters, Salma and Nora.\nThe Alamis live in a flat in the city centre. It has got three bedrooms, a big kitchen and a balcony with a lot of flowers. There isn't a garden, but there is a park next to the building.\nYassine always gets up at half past six. He usually has bread and milk for breakfast. After school, he often plays football in the park with Omar. He never watches TV in the evening because he does his homework. At the weekend, the family sometimes visits their cousins in Ifrane.",
   it:[{k:"mcq",q:"1. Yassine Alami is…",ch:["Moroccan","British","American"]},
    {k:"mcq",q:"2. There are ___ children in the Alami family.",ch:["four","three","seven"],why:"Yassine, Omar, Salma and Nora."},
    {k:"tf",q:"3. The Alamis' flat has got a garden.",a:false,why:"There isn't a garden, but there is a park."},
    {k:"write",q:"4. How old is Yassine?",keys:[["13","thirteen"]],model:"Yassine is 13 years old."},
    {k:"write",q:"5. Where is Yassine from?",keys:[["fes","morocco"]],model:"He is from Fes in Morocco."},
    {k:"write",q:"6. What are the names of Yassine's sisters?",keys:[["salma"],["nora"]],model:"His sisters are Salma and Nora."},
    {k:"write",q:"7. What does Yassine usually have for breakfast?",keys:[["bread"],["milk"]],model:"He usually has bread and milk for breakfast."},
    {k:"write",q:"8. Why doesn't he watch TV in the evening?",keys:[["homework"]],model:"Because he does his homework.",minW:3},
    {k:"write",q:"9. Would you like to live in a flat in the city centre? Why or why not?",keys:[["yes","no","would","wouldn't"],["because"]],model:"No, I wouldn't, because I like gardens.",ph:"Type your opinion sentence…",pts:2}]},
  {t:"Vocabulary",fr:"Vocabulaire.",it:[
   {k:"mcq",q:"1. Your dad's mother is your…",ch:["grandma","aunt","sister"]},
   {k:"mcq",q:"2. Which one is NOT a room?",ch:["balcony flowers","kitchen","bedroom"]},
   {k:"fill",q:"3. Complete the routine.",text:"I get [1] at 7. I [2] a shower. I [3] dressed. I go to [4] by bus.",bank:["up","have","get","school"],ans:["up","have","get","school"],pts:2},
   {k:"sort",q:"4. Physical description or personality?",box:["Physical 👀","Personality 💛"],items:[["tall",0],["friendly",1],["curly hair",0],["shy",1],["clever",1],["blue eyes",0]],pts:2}]},
  {t:"Grammar",fr:"Grammaire.",it:[
   {k:"mcq",q:"1. She ___ got two brothers.",ch:["has","have","is"]},
   {k:"mcq",q:"2. There ___ three bedrooms in the flat.",ch:["are","is","be"]},
   {k:"mcq",q:"3. Omar ___ football every day.",ch:["plays","play","playing"]},
   {k:"mcq",q:"4. They ___ watch TV in the morning.",ch:["don't","doesn't","isn't"]},
   {k:"mcq",q:"5. ___ your sister like music? – Yes, she does.",ch:["Does","Do","Is"]},
   {k:"write",q:"6. Put in order: late / is / never / Yassine",keys:[["yassine is never late"]],full:false,model:"Yassine is never late."},
   {k:"fill",q:"7. Possessive adjectives.",text:"Nora is my friend. [1] house is near the park. Omar and Yassine are brothers. [2] cousins live in Ifrane.",bank:["Her","Their","His"],ans:["Her","Their"],pts:2}]},
  {t:"Writing",fr:"Écris des phrases complètes sur toi.",it:[
   {k:"write",q:"1. Write about your family. Use 'there are' and 'have got'.",keys:[["there are"],["have got","has got","'ve got","'s got"]],model:"There are five people in my family. I have got one sister and two brothers.",minW:10,pts:3},
   {k:"write",q:"2. Write about your routine. Use 2 adverbs of frequency.",keys:[["always","usually","often","sometimes","never"],["get up","go","have","do","play","watch","read"]],model:"I always get up at seven. I sometimes play football after school.",minW:10,pts:3}]}]}});

K("anglais-11",{p:"Student's Book p. 32 · Unit 3",v:[
 ["Sports","Football, basketball, tennis, swimming, running, volleyball, cycling, karate.","الرياضات.",["⚽ football","🏀 basketball","🎾 tennis","🏊 swimming","🚴 cycling"],"Les sports."],
 ["Comparative adjectives","Short adjectives: tall – taller, fast – faster, big – bigger. Long adjectives: more interesting, more difficult. Then use than: Tennis is faster than golf.","صيغة المقارنة.",[["fast","faster than"],["big","bigger than"],["difficult","more difficult than"]],"Comparatif : -er than / more … than."],
 ["Superlative adjectives","The tallest, the fastest, the biggest, the most interesting. Football is the most popular sport in Morocco.","صيغة التفضيل.",[["fast","the fastest"],["popular","the most popular"]],"Superlatif : the -est / the most."],
 ["Irregular","Good – better – the best. Bad – worse – the worst.","الشاذة.",[["good","better / the best"],["bad","worse / the worst"]],"Irréguliers : good, bad."]],
 e:["Comparatif : adjectif court + er + than ; long : more … than.","Superlatif : the + adjectif + est ; the most + long.","good ➜ better ➜ the best ; bad ➜ worse ➜ the worst."],
 ea:["المقارنة.","التفضيل.","الشاذة."],
 w:[["fast","سريع","⚡"],["strong","قوي","💪"],["popular","مشهور","⭐"],["dangerous","خطير","⚠️"]],
 s:["Faster, taller, stronger than you,","The best team, the most famous too,","Good, better, the best, hooray,","What do you want to play today?"],
 x:[["A car is ___ than a bike.",["faster","fastest","more fast"]],["Football is ___ sport in Morocco.",["the most popular","more popular","popularest"]],["good ➜",["better","gooder","more good"]],["big ➜ bigger",true]],
 d:{title:"Unit 3 – Comparatives and superlatives",sec:[{t:"Grammar",fr:"Comparatif et superlatif.",it:[
  {k:"fill",q:"Complete.",text:"An elephant is [1] than a dog (big). Maths is [2] than art (difficult). Messi is [3] player (good).",bank:["bigger","more difficult","the best"],ans:["bigger","more difficult","the best"],pts:3},
  {k:"write",q:"Compare football and tennis.",keys:[["than"]],model:"Football is more popular than tennis.",minW:5,pts:2}]}]}});

K("anglais-12",{p:"Student's Book p. 44 · Unit 4",v:[
 ["Clothes","T-shirt, jeans, dress, skirt, jumper, jacket, trainers, shoes, cap, scarf.","الملابس.",["👕 T-shirt","👖 jeans","👗 dress","🧥 jacket","👟 trainers"],"Les vêtements."],
 ["Present continuous","Now: I am wearing a jumper. She is wearing a dress. They are playing.","المضارع المستمر: الآن.",[["I","am wearing"],["he / she","is wearing"],["we / they","are wearing"]],"be + verbe-ing = en train de."],
 ["Negative and questions","He isn't wearing a cap. Are you wearing trainers? Yes, I am.","النفي والسؤال.","Are you wearing…?","isn't / aren't ; question : Are you…?"],
 ["Simple or continuous?","Present simple: every day, always. Present continuous: now, today, at the moment. I usually wear jeans, but today I'm wearing a dress.","البسيط للعادة، والمستمر للآن.",[["every day","present simple"],["now","present continuous"]],"Habitude ➜ simple. Maintenant ➜ continuous."]],
 e:["Present continuous : am / is / are + verbe-ing.","Mots-clés : now, today, at the moment.","Present simple : habitudes (every day, usually)."],
 ea:["be + ing.","الآن.","العادة بالمضارع البسيط."],
 w:[["jumper","كنزة","🧶"],["trainers","حذاء رياضي","👟"],["skirt","تنورة","👗"],["scarf","وشاح","🧣"]],
 s:["What are you wearing? I'm wearing blue,","She's wearing a dress, and a jacket too,","Every day I wear my school shoes,","But today, trainers, that's what I choose!"],
 x:[["She ___ wearing a skirt now.",["is","are","am"]],["They ___ playing football at the moment.",["are","is","do"]],["I usually ___ jeans.",["wear","am wearing","wearing"]],["« now » ➜ present continuous.",true]],
 d:{title:"Unit 4 – Present continuous",sec:[{t:"Grammar",fr:"Simple ou continu ?",it:[
  {k:"fill",q:"Complete.",text:"Look! Kim [1] a red dress (wear). I usually [2] trainers to school (wear). We [3] English now (study).",bank:["is wearing","wear","are studying"],ans:["is wearing","wear","are studying"],pts:3},
  {k:"write",q:"What are you wearing now?",keys:[["wearing"]],model:"I am wearing a blue jumper and jeans.",pts:2}]}]}});

K("anglais-13",{p:"Student's Book p. 56 · Unit 5",v:[
 ["Food","Bread, rice, pasta, meat, chicken, fish, eggs, cheese, apples, bananas, carrots, milk, water, juice.","الطعام.",["🍞 bread","🍚 rice","🐟 fish","🥚 eggs","🍎 apples"],"La nourriture."],
 ["Countable and uncountable","Countable: an apple, two apples. Uncountable: milk, water, bread, rice. We can't say two milks.","المعدود وغير المعدود.",[["countable","apples, eggs 🔢"],["uncountable","milk, rice 🥛"]],"Comptable / indénombrable."],
 ["some / any / much / many / a lot of","How many apples? How much milk? There's a lot of rice. There aren't many eggs. Is there any juice?","الكميات.",[["many","+ countable"],["much","+ uncountable"],["a lot of","+ both"]],"many (comptable), much (indénombrable), a lot of (les deux)."],
 ["can / must","You can eat here. You can't run. You must wash your hands. You mustn't touch the food.","can للإمكانية، must للإلزام.",[["must","obligation ✔"],["mustn't","interdiction ⛔"]],"must = il faut ; mustn't = interdit."]],
 e:["Countable : apples, eggs. Uncountable : milk, rice, bread.","How many + countable ; how much + uncountable.","must = obligation ; mustn't = interdiction."],
 ea:["المعدود وغير المعدود.","How many و How much.","must و mustn't."],
 w:[["bread","خبز","🍞"],["cheese","جبن","🧀"],["juice","عصير","🧃"],["carrot","جزر","🥕"]],
 s:["Some bread, some cheese, a lot of rice,","How many apples? Two are nice,","How much milk? Not much, please,","You must wash your hands, then eat with ease!"],
 x:[["How ___ eggs?",["many","much","any"]],["How ___ water?",["much","many","a"]],["You ___ wash your hands.",["must","mustn't","can't"]],["« milk » is uncountable.",true]],
 d:{title:"Unit 5 – Food and quantities",sec:[{t:"Grammar",fr:"Quantités.",it:[
  {k:"sort",q:"Countable or uncountable?",box:["Countable 🔢","Uncountable 🥛"],items:[["apple",0],["milk",1],["egg",0],["rice",1],["banana",0],["water",1]],pts:2},
  {k:"fill",q:"Complete.",text:"How [1] bananas are there? How [2] juice is there? There is [3] bread.",bank:["many","much","a lot of"],ans:["many","much","a lot of"],pts:2}]}]}});

K("anglais-14",{p:"Student's Book p. 68 · Unit 6",v:[
 ["Island life","Beach, sea, island, mountain, river, forest, desert, lake. The weather: sunny, rainy, windy, cloudy, hot, cold.","الجغرافيا والطقس.",["🏝️ island","🏔️ mountain","🏜️ desert","☀️ sunny","🌧️ rainy"],"Paysages et météo."],
 ["Past simple of be","I was, he was, she was, it was, we were, you were, they were. There was a storm. There were big waves.","ماضي to be.",[["I / he / she / it","was"],["we / you / they","were"]],"was / were ; there was / there were."],
 ["Regular verbs","Add ed: play – played, watch – watched, visit – visited, stop – stopped.","الأفعال المنتظمة: ed.","play ➜ played","Réguliers : + ed."],
 ["Irregular verbs","Go – went, have – had, see – saw, eat – ate, swim – swam, make – made.","الأفعال الشاذة.",[["go","went"],["have","had"],["see","saw"],["eat","ate"]],"Irréguliers : à apprendre (liste p. 127)."]],
 e:["was (I, he, she, it) / were (we, you, they).","Réguliers : + ed (played).","Irréguliers : went, had, saw, ate, swam."],
 ea:["was و were.","المنتظمة ed.","الشاذة."],
 w:[["island","جزيرة","🏝️"],["desert","صحراء","🏜️"],["windy","عاصف","💨"],["cloudy","غائم","☁️"]],
 s:["Yesterday I was on an island in the sun,","I swam in the sea, I had so much fun,","There were big waves, the weather was hot,","I visited the beach, I liked it a lot!"],
 x:[["Yesterday it ___ sunny.",["was","were","is"]],["go ➜",["went","goed","gone"]],["They ___ at the beach.",["were","was","are"]],["play ➜ played",true]],
 d:{title:"Unit 6 – Past simple",sec:[{t:"Grammar",fr:"Le passé.",it:[
  {k:"fill",q:"Complete.",text:"Last summer, we [1] (go) to Essaouira. The weather [2] (be) windy. I [3] (visit) the port.",bank:["went","was","visited","were"],ans:["went","was","visited"],pts:3},
  {k:"write",q:"What did you do last weekend?",keys:[["went","played","watched","visited","had","saw","ate","was","did","read","made"]],model:"Last weekend, I visited my grandma and I played with my cousins.",minW:5,pts:2}]}]}});

K("anglais-15",{p:"Student's Book p. 80 · Unit 7",v:[
 ["Music","Guitar, drums, piano, violin, singer, band, concert, song. Stages of life: baby, child, teenager, adult.","الموسيقى ومراحل الحياة.",["🎸 guitar","🥁 drums","🎹 piano","🎤 singer"],"La musique."],
 ["Object pronouns","me, you, him, her, it, us, them. I like her. Listen to me. Call them.","ضمائر المفعول.",[["I","me"],["he","him"],["she","her"],["we","us"],["they","them"]],"me, him, her, us, them : après le verbe."],
 ["Past simple negative","I didn't play. She didn't go. After didn't, the verb doesn't change.","النفي في الماضي.","didn't + go","didn't + verbe à l'infinitif."],
 ["Past simple questions","Did you see the concert? Yes, I did. No, I didn't. Where did they go?","السؤال في الماضي.","Did you…? ✔ Yes, I did.","Question : Did … + verbe ?"]],
 e:["Object pronouns : me, you, him, her, it, us, them.","Négatif : didn't + verbe de base.","Question : Did you…? Yes, I did / No, I didn't."],
 ea:["ضمائر المفعول.","النفي بـ didn't.","السؤال بـ Did."],
 w:[["band","فرقة","🎸"],["drums","طبول","🥁"],["teenager","مراهق","🧑"],["singer","مغني","🎤"]],
 s:["Did you see the band? Yes, I did!","The singer sang for us, the drums were big,","I didn't sleep, I danced with them,","Music is my life, again and again!"],
 x:[["I love ___ (she).",["her","she","hers"]],["She ___ go to the concert.",["didn't","doesn't","wasn't"]],["___ you play the piano yesterday?",["Did","Do","Were"]]],
 d:{title:"Unit 7 – Pronouns and past questions",sec:[{t:"Grammar",fr:"Pronoms et passé.",it:[
  {k:"fill",q:"Complete with object pronouns.",text:"I like Ben. I play with [1]. Kim is nice. I talk to [2]. My cousins are here. I visit [3].",bank:["him","her","them"],ans:["him","her","them"],pts:2},
  {k:"write",q:"Make it negative: I watched TV yesterday.",keys:[["didn't watch","did not watch"]],full:false,model:"I didn't watch TV yesterday."}]}]}});

K("anglais-16",{p:"Student's Book p. 92 · Unit 8",v:[
 ["In a town","Bank, library, hospital, museum, park, post office, cinema, shopping centre, train station.","في المدينة.",["🏦 bank","📚 library","🏥 hospital","🏛️ museum","🎬 cinema"],"Les lieux de la ville."],
 ["be going to","For future plans: I am going to visit Marrakech. She is going to buy a book.","للمخططات المستقبلية.","going to + verb","be going to = projet."],
 ["will / won't","For predictions: It will be sunny tomorrow. I think you'll like it. It won't rain.","للتوقعات.",[["will","prédiction ✔"],["won't","prédiction ✘"]],"will = prédiction ; won't = will not."],
 ["Adjectives for places","Busy, quiet, modern, old, beautiful, noisy, clean, dirty.","صفات الأماكن.",["busy","quiet","modern","noisy"],"Décrire une ville."]],
 e:["be going to + verbe : projets.","will / won't + verbe : prédictions.","Lieux : library, museum, hospital, station."],
 ea:["going to للمخطط.","will للتوقع.","أماكن المدينة."],
 w:[["library","مكتبة","📚"],["museum","متحف","🏛️"],["busy","مزدحم","🚗"],["quiet","هادئ","🤫"]],
 s:["Tomorrow I'm going to visit the town,","The museum, the park, up and down,","It will be sunny, it won't rain,","Come on our tour, take the train!"],
 x:[["I ___ going to visit the museum.",["am","will","is"]],["I think it ___ rain tomorrow.",["will","is going","am"]],["« won't » = will not.",true]],
 d:{title:"Unit 8 – Future",sec:[{t:"Grammar",fr:"Le futur.",it:[
  {k:"fill",q:"Complete.",text:"Next week, I [1] visit Rabat (projet). I think it [2] be sunny (prédiction). It [3] rain (prédiction négative).",bank:["am going to","will","won't"],ans:["am going to","will","won't"],pts:3},
  {k:"write",q:"What are you going to do this weekend?",keys:[["going to"]],model:"I am going to visit my grandma.",pts:2}]}]}});

// ---------- L'examen du prof (site « 7th Grade English Practice Exam », Elbilia Skolar Bernoussi) ----------
// Mêmes questions et mêmes réponses que le site du prof, avec une explication simple pour chaque question.
K("anglais-6",{p:"Site du prof · 7th Grade English Practice Exam",tab:"prof",v:[
 ["Section 1: Reading","First, read the text two times. Then find the answer in the text. The answer is always in the text.","اقرأ النص مرتين. الجواب دائما موجود في النص.","📖 ➜ 🔍","Le secret : la réponse est toujours écrite dans le texte. On la cherche avec le mot de la question."],
 ["Full sentences","How old is Ben? Ben is thirteen. Where is Ben from? He is from Texas. Use the words of the question to start your answer.","استعمل كلمات السؤال لتبدأ جوابك.",[["How old is Ben?","➜ Ben is 13."],["Where is Ben from?","➜ He is from Texas."],["Is there a…?","➜ Yes, there is. / No, there isn't."]],"On retourne la question : « How old IS BEN » devient « BEN IS… »."],
 ["Section 2: Places in school","The cafeteria: we eat. The ICT room: computers. The science lab: experiments. The gym: sport. The library: books.","أماكن المدرسة.",[["cafeteria","🍽️ manger"],["ICT room","💻 ordinateurs"],["science lab","🧪 expériences"],["gym","🏀 sport"],["library","📚 livres"]],"Un lieu = une activité."],
 ["Section 3: Grammar","Present simple: I live, he lives. Negative: don't, doesn't. Adverbs: always, usually, often, sometimes, never, before the verb but after be.","المضارع البسيط وظروف التكرار.","he lives · she doesn't · I always…","He / she / it : +s. Négation : doesn't + verbe sans s."],
 ["Section 4: Writing","Describe a person: He is tall and slim. He has got short dark hair. He is very creative. Then describe yourself: I am friendly and funny.","صف شخصا ثم صف نفسك.",["is + taille","has got + cheveux","is + caractère"],"Plan : taille, cheveux, caractère. Puis moi."]],
 e:["La réponse est toujours dans le texte.","Phrase complète : je retourne la question (How old is Ben? ➜ Ben is…).","He / she / it : verbe + s ; doesn't + verbe sans s.","Adverbe avant le verbe, mais après « be »."],
 ea:["الجواب في النص.","أجيب بجملة كاملة.","نضيف s مع he و she.","الظرف قبل الفعل وبعد be."],
 w:[["treehouse","بيت فوق الشجرة","🌳🏠"],["stairs","درج","🪜"],["balcony","شرفة","🏙️"],["views","منظر","🌄"],["amazing","رائع","🤩"]],
 s:["Read it once, read it twice,","Find the answer, that's nice,","Ben is thirteen, from Texas, USA,","Full sentences, hip hip hooray!"],
 x:[["How old is Ben? ➜",["Ben is thirteen.","Thirteen.","Ben thirteen."]],["Ben is from…",["Texas in the USA","Britain","Germany"]],["Children in the Miller family:",["five","four","seven"]],["Is there a TV in the living room? No, there isn't.",true],["We do sports inside the…",["gym","library","cafeteria"]],["He never ___ his homework.",["does","do","doing"]]],
 d:{title:"7th Grade English Practice Exam (le site du prof)",sub:"Les mêmes questions que le prof. Lumi explique chaque réponse.",sec:[
  {t:"Reading Comprehension",fr:"Lis le texte deux fois. La réponse est toujours dans le texte.",ar:"اقرأ النص مرتين، الجواب في النص.",textT:"Reading Text: A House in the Trees",
   text:"Ben Miller is 13. He's from Texas in the USA. There are a lot of people in his family – his mum and dad, his brothers, Tom and Brad, and his sisters, Kim and Nancy.\nThe Millers' new house has got an amazing garden with lots of trees. In one of the trees, there is a big treehouse. It's got a bedroom, a bathroom, a living room and a small kitchen. There are two sofas in the living room, but there isn't a TV. There are some stairs. There's also a balcony with beautiful views. It's really cool!",
   it:[{k:"mcq",q:"1. Ben Miller is...",ch:["American","British","German"],why:"Le texte dit : « He's from Texas in the USA ». USA = les États-Unis, donc il est American (américain)."},
    {k:"mcq",q:"2. There are ________ children in the Miller family.",ch:["five","four","seven"],why:"On compte les enfants : Ben + Tom + Brad + Kim + Nancy = 5. Attention : Ben compte aussi ! Les parents ne sont pas des enfants."},
    {k:"write",q:"3. How old is Ben?",keys:[["thirteen","13"]],model:"He is thirteen years old.",hint:"He is …",why:"Première phrase : « Ben Miller is 13 ». On répond : He is thirteen."},
    {k:"write",q:"4. Where is Ben from?",keys:[["texas","usa","america"]],model:"He is from Texas in the USA.",hint:"He is from …",why:"« He's from Texas in the USA. » He's = He is."},
    {k:"write",q:"5. What are the names of Ben's sisters?",keys:[["kim"],["nancy"]],model:"His sisters are Kim and Nancy.",hint:"His sisters are … and …",why:"Attention, il ne faut pas confondre : brothers = garçons (Tom, Brad), sisters = filles (Kim, Nancy). « His » car Ben est un garçon."},
    {k:"write",q:"6. Is there a bathroom in the treehouse?",keys:[["yes","there is"]],model:"Yes, there is a bathroom.",hint:"Yes, there …",why:"« It's got a bedroom, a bathroom… » : oui, il y en a une. Question « Is there…? » ➜ réponse « Yes, there is. »"},
    {k:"write",q:"7. Would you like a treehouse in your garden? Why or why not?",keys:[["yes","no","would","wouldn't"],["because"]],model:"I would like a treehouse because it is fun!",ph:"Type your opinion sentence…",hint:"Yes, I would, because … / No, I wouldn't, because …",why:"Pas de réponse fausse : c'est ton avis. Mais il faut dire pourquoi avec « because »."}]},
  {t:"Vocabulary (Places in School)",fr:"Un lieu = une activité. Lis la phrase et trouve le lieu.",ar:"كل مكان له نشاط.",help:"cafeteria = on mange · ICT room = ordinateurs · science lab = expériences · gym = sport à l'intérieur · library = livres · hall = grande salle · staffroom = salle des profs · playground = cour de récréation",
   it:[{k:"mcq",q:"1. Students eat lunch and snacks in the school ________.",ch:["cafeteria","gym","library"],why:"eat lunch = manger le déjeuner ➜ cafeteria (la cantine)."},
    {k:"mcq",q:"2. I have my computer lessons in the ________.",ch:["ICT room","hall","cafeteria"],why:"computer = ordinateur. ICT = l'informatique ➜ ICT room."},
    {k:"mcq",q:"3. Students do science experiments in the ________.",ch:["science lab","library","playground"],why:"experiments = expériences ➜ le laboratoire : science lab."},
    {k:"mcq",q:"4. We play basketball and do sports inside the ________.",ch:["gym","hall","staffroom"],why:"sports inside = le sport à l'intérieur ➜ gym (la salle de sport)."},
    {k:"mcq",q:"5. There are books on different subjects in the school ________.",ch:["library","gym","canteen"],why:"books = livres ➜ library (la bibliothèque). Attention : library n'est pas « librairie »."}]},
  {t:"Grammar Practice",fr:"Complète avec le verbe au présent simple. Regarde le sujet : he / she / it ➜ +s.",ar:"أكمل بالمضارع البسيط.",help:"I / we / they ➜ live, speak, go. He / she / it (Dad, Mum, my team, the shop) ➜ comes, teaches, sells. Négatif : don't (I, we, they) / doesn't (he, she, it) + verbe SANS s.",
   it:[{k:"fill",q:"Task 1: Complete the paragraph (word bank: live, come, speak, go, have, not understand, teach, not work, sell, not open, not play).",
     text:"Hi, I'm Jamie. I [1] with my parents in York. Dad [2] from Poland but Mum is British, so we [3] English at home. We sometimes [4] to Poland. My grandparents [5] a big apartment in Warsaw. They're nice, but they [6] English! My mum [7] science, but she [8] at my school. Dad has a cake shop. It [9] great cakes, but it [10] on Sundays. We always watch football on Sundays, but our team [11] well!",
     bank:["live","comes","speak","go","have","don't understand","teaches","doesn't work","sells","doesn't open","doesn't play"],
     ans:["live","comes","speak","go","have","don't understand","teaches","doesn't work","sells","doesn't open","doesn't play"],pts:5.5,
     why:"I ➜ live. Dad ➜ comes (+s). We ➜ speak, go. They ➜ have, don't understand. My mum ➜ teaches (+es), doesn't work. It (the shop) ➜ sells, doesn't open. Our team (= it) ➜ doesn't play."},
    {k:"write",q:"Task 2 · 1. Sandy gets up early. (★★★★★ = always)",keys:[["sandy always gets up early"]],full:false,model:"Sandy always gets up early.",why:"5 étoiles = always. L'adverbe va AVANT le verbe : always gets up."},
    {k:"write",q:"2. We have breakfast at 8 a.m. (★★★★☆ = usually)",keys:[["we usually have breakfast"]],full:false,model:"We usually have breakfast at 8 a.m.",why:"4 étoiles = usually, avant le verbe « have »."},
    {k:"write",q:"3. I walk to school with Rosie. (★★★☆☆ = often)",keys:[["i often walk to school with rosie"]],full:false,model:"I often walk to school with Rosie.",why:"3 étoiles = often, avant « walk »."},
    {k:"write",q:"4. You are late for class. (★★☆☆☆ = sometimes)",keys:[["you are sometimes late","you're sometimes late"]],full:false,model:"You are sometimes late for class.",why:"2 étoiles = sometimes. Avec « are » (verbe be), l'adverbe va APRÈS : are sometimes."},
    {k:"write",q:"5. He does his homework. (☆☆☆☆☆ = never)",keys:[["he never does his homework"]],full:false,model:"He never does his homework.",why:"0 étoile = never, avant « does »."}]},
  {t:"Writing Task (Describing People)",fr:"Décris une personne spéciale (papa, maman, une amie), puis décris-toi.",ar:"صف شخصا عزيزا ثم صف نفسك.",help:"Exemple du prof : My dad is tall and slim. He's got short straight dark hair. He's very creative. I'm medium-height with short curly hair. I'm friendly and funny! Plan : 1) taille (tall, short, medium-height, slim) 2) cheveux (He's got / She's got + short/long + straight/curly + dark/fair hair) 3) caractère (kind, funny, friendly, creative) 4) moi (I'm…).",
   it:[{k:"write",q:"Describe a special person in your life, then describe yourself.",keys:[["is","'s"],["got","has","have"],["hair"],["i am","i'm","im"]],model:"My mum is short and slim. She's got long curly dark hair. She's very kind. I'm medium-height with long straight hair. I'm friendly and funny!",minW:25,pts:7.5,
     hint:"My … is … . He's / She's got … hair. He's / She's very … . I'm … with … hair. I'm … and … !",why:"Il faut : la taille, les cheveux avec « has got », le caractère, puis toi avec « I'm »."}]}]}});

K("anglais-7",{p:"Site du prof · Section 2",v:[
 ["Places in school","Classroom, library, cafeteria, gym, ICT room, science lab, hall, playground, staffroom, toilets.","أماكن المدرسة.",["🏫 classroom","📚 library","🍽️ cafeteria","🏀 gym","💻 ICT room"],"Les lieux de l'école."],
 ["What do we do there?","We read books in the library. We eat in the cafeteria. We do sport in the gym. We use computers in the ICT room. We do experiments in the science lab.","ماذا نفعل في كل مكان؟",[["library","read books 📖"],["cafeteria","eat lunch 🍽️"],["gym","do sport 🏀"],["science lab","experiments 🧪"],["staffroom","teachers 👩‍🏫"]],"Chaque lieu a son activité."],
 ["Traps","Library is not librairie: it is a place with books to borrow. Hall is a big room for meetings. Playground is outside, gym is inside.","احذر: library ليست مكتبة لبيع الكتب.","library ≠ librairie","Faux amis !"],
 ["There is / there are","In my school, there is a big library. There are two science labs. There isn't a swimming pool.","في مدرستي يوجد…","There is a library","Décrire son école."]],
 e:["cafeteria = manger ; library = livres ; gym = sport.","ICT room = ordinateurs ; science lab = expériences.","staffroom = salle des profs ; playground = cour."],
 ea:["المقصف، المكتبة، القاعة الرياضية.","قاعة الإعلاميات، المختبر.","قاعة الأساتذة، الساحة."],
 w:[["cafeteria","المقصف","🍽️"],["library","المكتبة","📚"],["gym","القاعة الرياضية","🏀"],["ICT room","قاعة الإعلاميات","💻"],["science lab","المختبر","🧪"],["staffroom","قاعة الأساتذة","👩‍🏫"],["playground","الساحة","🛝"]],
 s:["Books in the library, lunch in the cafeteria,","Sport in the gym, it's a great idea,","Computers in the ICT room, experiments in the lab,","Welcome to our school, isn't it fab!"],
 x:[["We use computers in the…",["ICT room","gym","library"]],["Teachers have a break in the…",["staffroom","playground","science lab"]],["« library » = librairie.",false],["We play outside in the…",["playground","staffroom","hall"]]],
 d:{title:"Places in school – more practice",sub:"Nouvelles questions dans le même style que le prof.",sec:[
  {t:"Vocabulary",fr:"Trouve le lieu.",it:[
   {k:"mcq",q:"1. Teachers meet and have coffee in the ________.",ch:["staffroom","gym","ICT room"],why:"staff = les professeurs ➜ staffroom."},
   {k:"mcq",q:"2. Students play outside at break time in the ________.",ch:["playground","library","science lab"]},
   {k:"mcq",q:"3. We borrow books from the ________.",ch:["library","cafeteria","hall"]},
   {k:"mcq",q:"4. The whole school meets for a big event in the ________.",ch:["hall","ICT room","staffroom"]},
   {k:"sort",q:"Inside or outside?",box:["Inside 🏫","Outside 🌳"],items:[["gym",0],["playground",1],["library",0],["school garden",1]],pts:2}]},
  {t:"Writing",fr:"Décris ton école avec there is / there are.",it:[
   {k:"write",q:"Write 2 sentences about your school.",keys:[["there is","there are","there's"]],model:"In my school, there is a big library. There are two science labs.",minW:8,pts:2}]}]}});

K("anglais-8",{p:"Site du prof · Section 4",v:[
 ["Height and body","Tall, short, medium-height, slim. My dad is tall and slim.","الطول والجسم.",[["tall","grand 🦒"],["short","petit"],["medium-height","taille moyenne"],["slim","mince"]],"La taille : avec « is »."],
 ["Hair","Short or long, straight or curly, dark or fair. She's got long straight fair hair. Order: length, then type, then colour.","الشعر: الطول ثم النوع ثم اللون.",["short / long","straight / curly","dark / fair"],"Les cheveux : avec « has got ». Ordre : longueur, forme, couleur."],
 ["Personality","Friendly, funny, kind, creative, clever, shy, chatty. He's very creative. I'm friendly and funny!","صفات الشخصية.",["friendly 🤝","funny 😂","creative 🎨","kind 💛"],"Le caractère : avec « is » (He's very…)."],
 ["Describe yourself","I'm medium-height with short curly hair. I'm friendly and funny!","صف نفسك.","I'm … with … hair","Pour moi : I'm … with … hair."]],
 e:["Taille et caractère : is (He is tall, She's kind).","Cheveux : has got (She's got long curly hair).","Ordre : longueur + forme + couleur + hair.","Moi : I'm medium-height with short curly hair."],
 ea:["الطول والطبع مع is.","الشعر مع has got.","الترتيب: الطول، النوع، اللون.","أنا: I'm…"],
 w:[["slim","نحيف","🧍"],["straight","مستقيم","➖"],["curly","مجعد","➰"],["fair","أشقر","👱"],["creative","مبدع","🎨"],["medium-height","متوسط الطول","📏"]],
 s:["My dad is tall, my dad is slim,","Short straight dark hair, that's him,","I'm medium-height, my hair is curly,","I'm friendly and funny, early or late, surely!"],
 x:[["She's got ___ hair.",["long curly dark","dark curly long","curly long dark"]],["He ___ tall.",["is","has got","have"]],["She ___ blue eyes.",["has got","is","are"]],["« fair hair » = cheveux blonds.",true]],
 d:{title:"Describing people – more practice",sec:[
  {t:"Vocabulary",fr:"Range les mots.",it:[
   {k:"sort",q:"Body / hair or personality?",box:["Body / hair 👀","Personality 💛"],items:[["slim",0],["creative",1],["curly",0],["friendly",1],["tall",0],["funny",1]],pts:2},
   {k:"mcq",q:"Put the words in the right order: She's got ___ hair.",ch:["long straight fair","fair long straight","straight fair long"],why:"Longueur (long), puis forme (straight), puis couleur (fair)."},
   {k:"mcq",q:"My brother ___ very funny.",ch:["is","has got","have"],why:"Le caractère : is."}]},
  {t:"Writing",fr:"Écris comme dans l'exemple du prof.",help:"My … is tall / short / medium-height and slim. He's / She's got short / long, straight / curly, dark / fair hair. He's / She's very friendly / funny / kind / creative.",it:[
   {k:"write",q:"Describe your best friend.",keys:[["is","'s"],["hair"]],model:"My best friend is short and slim. She's got long curly dark hair. She's very kind.",minW:12,pts:3},
   {k:"write",q:"Describe yourself.",keys:[["i'm","i am","im"],["hair"]],model:"I'm medium-height with long straight dark hair. I'm friendly and funny!",minW:8,pts:3}]}]}});

// questions en plus, dans le style du prof, ajoutées aux leçons du manuel
LESSONS["anglais-3"]&&LESSONS["anglais-3"].devoir.sec.push({t:"Grammar like the teacher",fr:"Même exercice que le prof : complète le paragraphe.",help:"He / she / it : +s (lives, watches, goes). Négatif : don't / doesn't + verbe sans s.",it:[
 {k:"fill",q:"Word bank: live, work, go, have, not like, play, not watch, study",text:"Hi, I'm Rania. I [1] in Rabat with my family. My dad [2] in a bank. My brothers [3] to the same school as me. We [4] lunch together. My sister [5] fish, but she loves chicken. At the weekend, I [6] tennis. My grandma [7] TV, she reads books. My cousin [8] English at university.",
  bank:["live","works","go","have","doesn't like","play","doesn't watch","studies"],ans:["live","works","go","have","doesn't like","play","doesn't watch","studies"],pts:4,
  why:"Dad, my sister, my grandma, my cousin = he / she ➜ +s ou doesn't. Study ➜ studies (y devient ies)."}]});
LESSONS["anglais-4"]&&LESSONS["anglais-4"].devoir.sec.push({t:"Stars like the teacher",fr:"Réécris avec l'adverbe : ★★★★★ always · ★★★★☆ usually · ★★★☆☆ often · ★★☆☆☆ sometimes · ☆☆☆☆☆ never",help:"Avant le verbe : I always play. Après be : She is always happy.",it:[
 {k:"write",q:"1. My mum cooks couscous on Friday. (★★★★★)",keys:[["my mum always cooks couscous"]],full:false,model:"My mum always cooks couscous on Friday."},
 {k:"write",q:"2. I play video games. (★★☆☆☆)",keys:[["i sometimes play video games"]],full:false,model:"I sometimes play video games."},
 {k:"write",q:"3. They are tired after school. (★★★☆☆)",keys:[["they are often tired","they're often tired"]],full:false,model:"They are often tired after school.",why:"« are » = be : l'adverbe va après."},
 {k:"write",q:"4. Ghita forgets her schoolbag. (☆☆☆☆☆)",keys:[["ghita never forgets her schoolbag"]],full:false,model:"Ghita never forgets her schoolbag."},
 {k:"write",q:"5. We go to the park on Sunday. (★★★★☆)",keys:[["we usually go to the park"]],full:false,model:"We usually go to the park on Sunday."}]});

// ---------- Les séries du prof (Youssef Boudare) ----------
// Série 1 : « Vocabulary and Grammar Review – Unit Welcome » ➜ leçon Welcome
LESSONS["anglais-0"]&&LESSONS["anglais-0"].devoir.sec.push(
 {t:"Teacher's review 1 · Subject Pronouns",fr:"Série du prof. Remplace les mots en gras par un pronom sujet.",ar:"عوض الكلمات بضمير.",help:"Singulier : I, you, he (un garçon), she (une fille), it (un animal, une chose). Pluriel : we (moi + quelqu'un), you, they (plusieurs). Adam = he ; Sara = she ; Sara and Adam = they.",it:[
  {k:"mcq",q:"TOM is from London.",qfr:"Tom vient de Londres.",ch:["He","She","It"],why:"Tom est un garçon ➜ he."},
  {k:"mcq",q:"MY SISTER is 10.",qfr:"Ma sœur a 10 ans.",ch:["She","He","They"],why:"Une fille ➜ she."},
  {k:"mcq",q:"THE DOG is in the garden.",qfr:"Le chien est dans le jardin.",ch:["It","He","They"],why:"Un animal ➜ it."},
  {k:"mcq",q:"ALI AND I are classmates.",qfr:"Ali et moi sommes camarades de classe.",ch:["We","They","You"],why:"Ali + moi = nous ➜ we."},
  {k:"mcq",q:"SARA AND LINA are friends.",qfr:"Sara et Lina sont amies.",ch:["They","We","She"],why:"Deux personnes (pas moi) ➜ they."}]},
 {t:"Teacher's review 2 · Prepositions of Place",fr:"Regarde les images du prof et complète avec in, on, under, between ou next to.",ar:"أكمل بحروف المكان.",help:"in = dans · on = sur · under = sous · between = entre (au milieu de deux choses) · next to = à côté de.",it:[
  {k:"fill",q:"Look at the pictures. Complete.",qfr:"Le crayon est sur le bureau. Les chaussures sont sous le lit. Les livres sont dans mon sac. La banque est entre le café et le supermarché. Ma maison est à côté du parc.",
   text:"1. The pencil is [1] the desk. 2. The shoes are [2] the bed. 3. The books are [3] my bag. 4. The bank is [4] the café and the supermarket. 5. My house is [5] the park.",
   bank:["on","under","in","between","next to"],ans:["on","under","in","between","next to"],pts:5,why:"Sur = on, sous = under, dans = in. Between : entre DEUX choses (le café ET le supermarché). Next to : à côté."}]},
 {t:"Teacher's review 3 · Possessive Adjectives",fr:"Complète avec le bon adjectif possessif.",help:"I ➜ my · you ➜ your · he ➜ his · she ➜ her · it ➜ its · we ➜ our · they ➜ their.",it:[
  {k:"fill",q:"Complete with the correct possessive adjective.",qfr:"J'ai un chat. Mon chat est blanc. Elle a un frère. Son frère a 12 ans. Nous habitons à Casablanca. Notre maison est petite. Ils ont un chien. Leur chien est gentil. Tu as un crayon. Ton crayon est sur le bureau.",
   text:"1. I have a cat. [1] cat is white. 2. She has a brother. [2] brother is 12. 3. We live in Casablanca. [3] house is small. 4. They have a dog. [4] dog is friendly. 5. You have a pencil. [5] pencil is on the desk.",
   bank:["My","Her","Our","Their","Your","His"],ans:["My","Her","Our","Their","Your"],pts:5,why:"On regarde le début de la phrase : I ➜ my, She ➜ her (pas his !), We ➜ our, They ➜ their, You ➜ your."}]},
 {t:"Teacher's review 4 · Can for Ability",fr:"Complète avec can ou can't.",help:"can + verbe = savoir / pouvoir. She can dance. Négatif : can't. He can't drive. Question : Can you cook? Yes, I can. / No, I can't. Jamais de « s » et jamais de « to » après can.",it:[
  {k:"mcq",q:"1. Birds ______ fly.",qfr:"Les oiseaux savent voler.",ch:["can","can't"]},
  {k:"mcq",q:"2. Fish ______ walk.",qfr:"Les poissons ne savent pas marcher.",ch:["can't","can"]},
  {k:"write",q:"3. I ______ speak English. (Choose what is true for you.)",qfr:"Je sais / je ne sais pas parler anglais. Choisis ce qui est vrai pour toi.",keys:[["i can speak english","i can't speak english","i cannot speak english"]],full:false,model:"I can speak English.",why:"Les deux réponses sont justes : c'est la vérité pour toi."},
  {k:"mcq",q:"4. A baby ______ drive a car.",qfr:"Un bébé ne sait pas conduire une voiture.",ch:["can't","can"]},
  {k:"mcq",q:"5. ______ you swim?",qfr:"Est-ce que tu sais nager ?",ch:["Can","Can't","Do can"],why:"Question : Can au début."}]},
 {t:"Teacher's review 5 · Possessive 's",fr:"Réécris avec la forme possessive. Exemple : the marker of the teacher = the teacher's marker.",help:"personne + 's + chose : Adam's book = le livre d'Adam. Pluriel en -s : on ajoute seulement ' (the students' books). Autres pluriels (children, men) : 's (the children's toys).",it:[
  {k:"write",q:"1. The book of Adam",qfr:"Le livre d'Adam",keys:[["adam's book","adams book"]],full:false,model:"Adam's book"},
  {k:"write",q:"2. The phone of my brother",qfr:"Le téléphone de mon frère",keys:[["my brother's phone","my brothers phone"]],full:false,model:"my brother's phone"},
  {k:"write",q:"3. The bicycle of James",qfr:"Le vélo de James",keys:[["james's bicycle","james' bicycle","jamess bicycle","james bicycle"]],full:false,model:"James's bicycle",why:"James se termine par s, mais c'est un seul garçon : James's (on accepte aussi James')."},
  {k:"write",q:"4. The office of the boss",qfr:"Le bureau du patron",keys:[["the boss's office","the boss' office","the bosss office","boss's office"]],full:false,model:"the boss's office"},
  {k:"write",q:"5. The toys of the children",qfr:"Les jouets des enfants",keys:[["the children's toys","the childrens toys","children's toys"]],full:false,model:"the children's toys",why:"children est déjà un pluriel (sans s) : on ajoute 's."}]},
 {t:"Teacher's review 6 · Have Got",fr:"Utilise have got, has got, haven't got ou hasn't got. (+) = positif, (–) = négatif.",help:"I / you / we / they ➜ have got / haven't got. He / she / it ➜ has got / hasn't got. Question : Have you got a pet? Yes, I have. / No, I haven't. Has she got a sister? Yes, she has. / No, she hasn't.",it:[
  {k:"fill",q:"Complete.",qfr:"J'ai un nouveau cartable. Sara a deux frères. Nous avons une grande classe. Tom n'a pas de sœur, il est enfant unique. Ils ont un nouveau prof d'anglais. Mon chien a de longues oreilles.",
   text:"1. I [1] a new school bag. (+) 2. Sara [2] two brothers. (+) 3. We [3] a big classroom. (+) 4. Tom [4] a sister. (–) He is an only child. 5. They [5] a new English teacher. (+) 6. My dog [6] long ears. (+)",
   bank:["have got","has got","have got ","hasn't got","have got  ","has got ","haven't got"],ans:["have got","has got","have got","hasn't got","have got","has got"],pts:6,why:"Sara, Tom, my dog = he / she / it ➜ has got. I, we, they ➜ have got. « only child » = enfant unique ➜ négatif : hasn't got."}]});

// Série 2 : « Unit 1 Speaking: Pairwork – Holiday Home Exchange » ➜ leçon there is / there are
LESSONS["anglais-2"]&&LESSONS["anglais-2"].devoir.sec.push(
 {t:"Teacher's pairwork · Holiday Home Exchange",fr:"Activité à deux du prof : on échange sa maison pour les vacances. Lis les deux fiches, puis réponds aux questions comme Student A et Student B.",ar:"نشاط ثنائي: تبادل المنازل في العطلة.",
  help:"Phrases utiles : What's your / his / her name? (Comment tu t'appelles / il s'appelle / elle s'appelle ?) · What's your email address / phone number? · How do you spell that, please? (Comment ça s'écrit ?) · Where is your house? It's … · Can you tell me about your house? There are some … / There is a … / There isn't a … / There aren't any …",
  textT:"Student A's home & Student B's home",text:"Student A – The Smith family. Dad: Mike Smith. Mum: Sarah Smith. Children: Jessica (age 15), Jack (age 10). Address: 58 Queen Street, Los Angeles, USA. Email: smith22@bmail.com. Phone: 07700 900789. 5 bedrooms, 2 bathrooms, kitchen, dining room, big garden, patio, close to the beach, a big TV.\nStudent B – The Taylor family. Dad: Andrew Taylor. Mum: Nicola Taylor. Children: Felix (age 14), Isabel (age 9), Alexia (age 7). Address: Wave Cottage, Beach Drive, South Africa. Email: taylor456@flash.com. Phone: 07700 900299. 4 bedrooms, 1 bathroom, kitchen, dining room, 2 balconies, patio, swimming pool, fantastic views of the beach.",
  it:[
   {k:"write",q:"1. What's the mum's name in the Smith family?",qfr:"Comment s'appelle la maman de la famille Smith ?",keys:[["sarah"]],model:"Her name is Sarah Smith.",hint:"Her name is …"},
   {k:"write",q:"2. Where is the Taylors' house?",qfr:"Où est la maison des Taylor ?",keys:[["south africa","beach drive","wave cottage"]],model:"It's in Wave Cottage, Beach Drive, South Africa.",hint:"It's in …"},
   {k:"write",q:"3. How many bedrooms are there in the Smiths' house?",qfr:"Combien de chambres y a-t-il chez les Smith ?",keys:[["five","5"]],model:"There are five bedrooms.",hint:"There are …"},
   {k:"write",q:"4. Is there a swimming pool in the Taylors' house?",qfr:"Y a-t-il une piscine chez les Taylor ?",keys:[["yes","there is"]],model:"Yes, there is.",full:false},
   {k:"write",q:"5. Is there a swimming pool in the Smiths' house?",qfr:"Y a-t-il une piscine chez les Smith ?",keys:[["no","isn't","is not"]],model:"No, there isn't.",full:false,why:"Ce n'est pas écrit sur la fiche des Smith : il n'y en a pas."},
   {k:"write",q:"6. How many children are there in the Taylor family? What are their names?",qfr:"Combien d'enfants chez les Taylor ? Comment s'appellent-ils ?",keys:[["three","3"],["felix"],["isabel"],["alexia"]],model:"There are three children: Felix, Isabel and Alexia.",pts:2},
   {k:"write",q:"7. What's Mike Smith's phone number?",qfr:"Quel est le numéro de téléphone de Mike Smith ?",keys:[["07700 900789","07700900789"]],model:"It's 07700 900789.",full:false},
   {k:"fill",q:"8. Complete the dialogue.",qfr:"Complète le dialogue avec les phrases utiles.",text:"A: What's [1] email address? B: It's taylor456@flash.com. A: How do you [2] that, please? B: T-A-Y-L-O-R. A: Can you tell me about your house? B: [3] four bedrooms and [4] a swimming pool. But [5] a garden.",
    bank:["your","spell","There are","there is","there isn't"],ans:["your","spell","There are","there is","there isn't"],pts:3,why:"There are + pluriel (four bedrooms). There is + un seul (a swimming pool). There isn't = il n'y a pas."}]});

// Série 3 : « A Busy Saturday Market » + le pluriel des noms
K("anglais-9",{p:"Série du prof · Plural nouns",tab:"prof",v:[
 ["Regular plurals","Most nouns: add s. A pencil, two pencils. A river, three rivers. A key, keys.","معظم الأسماء نضيف لها s.","pencil ➜ pencils","La plupart des noms : on ajoute -s."],
 ["Add es","After s, ss, sh, ch, x, add es: bus – buses, glass – glasses, brush – brushes, church – churches, box – boxes. Some words in o: tomato – tomatoes, potato – potatoes, hero – heroes. But radio – radios.","بعد s, sh, ch, x نضيف es.",[["bus","buses"],["brush","brushes"],["church","churches"],["box","boxes"],["potato","potatoes"]],"Après s, sh, ch, x ➜ -es. Tomato, potato, hero ➜ -es. Mais radio ➜ radios."],
 ["y ➜ ies","Consonant + y: change y to ies. Baby – babies, city – cities, story – stories, berry – berries, lady – ladies. But vowel + y: just s. Key – keys, toy – toys, boy – boys.","حرف ساكن + y تصبح ies.",[["baby","babies"],["city","cities"],["key","keys ✔"],["toy","toys ✔"]],"Consonne + y ➜ -ies. Voyelle + y (key, toy, boy) ➜ -s."],
 ["f / fe ➜ ves","Leaf – leaves, knife – knives, wolf – wolves, loaf – loaves.","f و fe تصبح ves.",[["leaf","leaves 🍂"],["knife","knives 🔪"],["wolf","wolves 🐺"],["loaf","loaves 🍞"]],"-f ou -fe ➜ -ves."],
 ["Irregular plurals","Man – men, woman – women, child – children, tooth – teeth, foot – feet, mouse – mice, goose – geese, ox – oxen.","جموع شاذة.",[["man","men"],["child","children"],["tooth","teeth 🦷"],["foot","feet 🦶"],["mouse","mice 🐭"],["ox","oxen 🐂"]],"Irréguliers : à apprendre par cœur."],
 ["No change","Some nouns are the same: one sheep, two sheep. Deer, fish, moose, bison, aircraft. For different kinds of fish, we can say fishes.","أسماء لا تتغير.","sheep · deer · fish · aircraft","Ils ne changent pas : sheep, deer, fish, moose, bison, aircraft. « fishes » = plusieurs espèces de poissons."]],
 e:["La plupart : + s (pencils). Après s, sh, ch, x : + es (buses, boxes).","Consonne + y ➜ ies (babies) ; voyelle + y ➜ s (keys).","f / fe ➜ ves (leaves, knives).","Irréguliers : men, women, children, teeth, feet, mice, geese, oxen.","Invariables : sheep, deer, fish, moose, bison, aircraft."],
 ea:["نضيف s أو es.","y تصبح ies.","f تصبح ves.","جموع شاذة.","أسماء لا تتغير."],
 w:[["loaf","pain (une miche)","🍞"],["puppy","chiot","🐶"],["mouse","souris","🐭"],["deer","cerf","🦌"],["basket","panier","🧺"],["bakery","boulangerie","🥖"],["florist","fleuriste","💐"],["cage","cage","🪺"],["goose","oie","🪿"],["ox","bœuf","🐂"],["berry","baie","🫐"],["wolf","loup","🐺"]],
 s:["One mouse, two mice, a puppy, puppies,","A leaf and some leaves, a city, cities,","A man and two men, a child, children,","Sheep stay sheep, again and again!"],
 x:[["child ➜",["children","childs","childes"]],["box ➜",["boxes","boxs","boxies"]],["baby ➜",["babies","babys","babyes"]],["key ➜",["keys","kies","keyes"]],["knife ➜",["knives","knifes","knifs"]],["« two sheeps » est correct.",false],["tooth ➜ teeth",true]],
 d:{title:"Plural nouns – la série du prof",sub:"Mêmes exercices que la série. Lumi explique chaque règle.",sec:[
  {t:"A Busy Saturday Market",fr:"Lis le texte du prof, puis réponds avec une phrase.",ar:"اقرأ النص ثم أجب.",textT:"A Busy Saturday Market",
   text:"On Saturday morning, several families visit a small street market. Farmers arrange apples and tomatoes on wooden tables. Two women carry baskets, while three boys choose toys. Near the bakery, customers buy sandwiches and loaves of bread. A florist sells bright roses, and a pet seller has puppies and mice in clean cages. At the edge of a nearby park, two deer can sometimes be seen near the trees. The market is busy, but everyone enjoys it.",
   it:[{k:"write",q:"1. a) What do the farmers arrange on the tables?",qfr:"Qu'est-ce que les fermiers rangent sur les tables ?",keys:[["apples"],["tomatoes"]],model:"They arrange apples and tomatoes on the tables."},
    {k:"write",q:"b) What do the customers buy near the bakery?",qfr:"Qu'achètent les clients près de la boulangerie ?",keys:[["sandwiches"],["loaves","bread"]],model:"They buy sandwiches and loaves of bread."},
    {k:"write",q:"c) Which animals are mentioned?",qfr:"Quels animaux sont cités ?",keys:[["puppies"],["mice"],["deer"]],model:"Puppies, mice and deer are mentioned.",why:"puppies = chiots, mice = souris (pluriel de mouse), deer = cerfs (deer ne change pas)."},
    {k:"spot",q:"2. Find six plural nouns in the text (touch six words).",qfr:"Trouve six noms au pluriel dans le texte.",need:6,text:"On Saturday morning, several [families] visit a small street market. [Farmers] arrange [apples] and [tomatoes] on wooden [tables]. Two [women] carry [baskets], while three [boys] choose [toys]. Near the bakery, [customers] buy [sandwiches] and [loaves] of bread. A florist sells bright [roses], and a pet seller has [puppies] and [mice] in clean [cages].",pts:3,why:"Il y en a beaucoup : families, farmers, apples, tomatoes, tables, women, baskets, boys, toys, customers, sandwiches, loaves, roses, puppies, mice, cages, trees, deer."},
    {k:"fill",q:"3. Write their singular form.",qfr:"Écris le singulier.",text:"families ➜ [1] · women ➜ [2] · loaves ➜ [3] · puppies ➜ [4] · mice ➜ [5] · tomatoes ➜ [6]",bank:["family","woman","loaf","puppy","mouse","tomato"],ans:["family","woman","loaf","puppy","mouse","tomato"],pts:3,why:"ies ➜ y (family, puppy) ; ves ➜ f (loaf) ; women ➜ woman ; mice ➜ mouse ; tomatoes ➜ tomato."}]},
  {t:"1. Write the plural form",fr:"Écris le pluriel. Regarde la fin du mot pour choisir la règle.",help:"+ s · s/sh/ch/x ➜ + es · consonne + y ➜ ies · voyelle + y ➜ s · f/fe ➜ ves · tomato/potato/hero ➜ es · irréguliers : men, teeth, feet, children.",it:[
   {k:"fill",q:"a – i",text:"pencil ➜ [1] · river ➜ [2] · camera ➜ [3] · brush ➜ [4] · church ➜ [5] · glass ➜ [6] · story ➜ [7] · city ➜ [8] · key ➜ [9]",
    bank:["pencils","rivers","cameras","brushes","churches","glasses","stories","cities","keys"],ans:["pencils","rivers","cameras","brushes","churches","glasses","stories","cities","keys"],pts:4.5,why:"brush, church, glass ➜ -es. story, city (consonne + y) ➜ -ies. key (voyelle + y) ➜ keys."},
   {k:"fill",q:"j – r",text:"leaf ➜ [1] · knife ➜ [2] · wolf ➜ [3] · hero ➜ [4] · potato ➜ [5] · man ➜ [6] · tooth ➜ [7] · foot ➜ [8] · child ➜ [9]",
    bank:["leaves","knives","wolves","heroes","potatoes","men","teeth","feet","children"],ans:["leaves","knives","wolves","heroes","potatoes","men","teeth","feet","children"],pts:4.5,why:"f/fe ➜ ves. hero, potato ➜ es. man, tooth, foot, child sont irréguliers."}]},
  {t:"2. Circle the correct answer",fr:"Choisis la bonne forme.",it:[
   {k:"mcq",q:"a) three ...",ch:["benches","benchs"],why:"ch ➜ es."},
   {k:"mcq",q:"b) two ...",ch:["babies","babys"],why:"consonne + y ➜ ies."},
   {k:"mcq",q:"c) five ...",ch:["dishes","dishs"],why:"sh ➜ es."},
   {k:"mcq",q:"d) several ...",ch:["geese","gooses"],why:"goose ➜ geese (irrégulier)."},
   {k:"mcq",q:"e) two ...",ch:["moose","mooses"],why:"moose (élan) ne change pas."},
   {k:"mcq",q:"f) four ...",ch:["radios","radioes"],why:"radio ➜ radios (exception des mots en o)."}]},
  {t:"3. Correct the mistake",fr:"Corrige la faute et réécris la phrase.",it:[
   {k:"write",q:"a) Two ladys are waiting.",qfr:"Deux dames attendent.",keys:[["two ladies are waiting"]],full:false,model:"Two ladies are waiting.",why:"lady : consonne + y ➜ ladies."},
   {k:"write",q:"b) I packed three boxs.",qfr:"J'ai emballé trois boîtes.",keys:[["three boxes"]],full:false,model:"I packed three boxes.",why:"x ➜ es."},
   {k:"write",q:"c) The sheeps are sleeping.",qfr:"Les moutons dorment.",keys:[["the sheep are sleeping"]],full:false,model:"The sheep are sleeping.",why:"sheep ne change jamais."}]},
  {t:"4. Complete with the plural form",fr:"Complète avec le pluriel du mot entre parenthèses.",it:[
   {k:"fill",q:"a – h",text:"a) Two [1] pull the farmer's cart. (ox) b) The children picked [2] from the bushes. (berry) c) Three [3] are parked outside the school. (bus) d) We watched two [4] run across the snow. (fox) e) Several [5] landed at the airport. (aircraft) f) We saw three [6] in the field. (bison) g) There are six [7] in the tank, all of the same species. (fish) h) The scientist studies the different [8] of the coral reef. (fish)",
    bank:["oxen","berries","buses","foxes","aircraft","bison","fish","fishes"],ans:["oxen","berries","buses","foxes","aircraft","bison","fish","fishes"],pts:4,why:"ox ➜ oxen. berry ➜ berries. bus, fox ➜ es. aircraft, bison ne changent pas. Même espèce ➜ fish ; espèces différentes ➜ fishes."}]},
  {t:"5. Write a short paragraph",fr:"Imagine que tu visites un zoo. Écris 3 ou 4 phrases avec au moins quatre noms au pluriel.",help:"Idées : avec qui es-tu ? Quels animaux vois-tu ? Combien ? Que font-ils ? Mots : friend, elephant, monkey, penguin, tiger. Débuts de phrases : Today, I am at … / I can see … / There are … / They are …",it:[
   {k:"write",q:"Imagine you are visiting a zoo.",qfr:"Tu visites un zoo : écris 3 à 4 phrases.",keys:[["friends","elephants","monkeys","penguins","tigers","animals","lions","giraffes","children","people"],["there are","i can see","they are"]],model:"Today, I am at the zoo with my friends. I can see two elephants and three monkeys. There are five penguins in the water. They are very funny!",minW:20,pts:4,hint:"Today, I am at the zoo with my … . I can see … . There are … . They are …"}]}]}});

// Série 4 : série « niveau avancé » (Youssef Boudat) – bien au-dessus de la 1re année, en défi facultatif
K("anglais-10",{p:"Série du prof · défi avancé",tab:"prof",v:[
 ["A big challenge","This worksheet is very difficult. It is for older students. Take your time: Lumi explains every answer. It's OK to make mistakes.","هذه السلسلة صعبة جدا. خذ وقتك.","⭐⭐⭐","Cette série est beaucoup plus difficile que le niveau de 1re année. C'est un défi : pas de stress !"],
 ["Agreement","The verb agrees with the real subject. The cost of supplies fluctuates: the subject is the cost, singular. Each of the solutions has. Several members disagree.","الفعل يتبع الفاعل الحقيقي.",[["the cost of …","fluctuates"],["each of …","has"],["several members","disagree"],["the information","appears"]],"Trouve le vrai sujet. « Each » et « information » = singulier ➜ -s."],
 ["Questions about the subject","The auditor verifies the statements. Who verifies the statements? When who is the subject, there is no do or does.","سؤال عن الفاعل بدون do.","Who verifies…?","Si on demande « qui ? » pour le sujet : pas de do / does."],
 ["Simple or continuous?","She thinks the plan is bad: opinion. She is thinking of postponing: in her head now. The retailer has three warehouses: possession. They are having discussions: an activity now.","البسيط والمستمر يغيران المعنى.",[["thinks","opinion 💭"],["is thinking","réfléchit en ce moment"],["has","possède"],["is having","fait (une discussion)"]],"Le sens change : think = penser (avis) / is thinking = réfléchir ; have = posséder / is having = faire."],
 ["Future after as soon as","We will act as soon as the laboratory confirms the results. After when, as soon as, before, we use the present, not will.","بعد as soon as نستعمل المضارع.","as soon as + present","Après « as soon as », « when » : présent, jamais will."]],
 e:["Le verbe s'accorde avec le vrai sujet (the cost ➜ fluctuates).","Question sur le sujet : Who verifies…? (pas de does).","Think / have changent de sens au continu.","Après as soon as / when : présent, pas will."],
 ea:["الفعل يتبع الفاعل.","السؤال عن الفاعل بدون does.","المعنى يتغير.","بعد as soon as المضارع."],
 w:[["recur","se reproduire","🔁"],["justify","justifier","⚖️"],["involve","impliquer, comprendre","🧩"],["retain","garder","🗄️"],["watchdog","organisme de contrôle","🐕"],["evidence","preuve","🔎"],["fluctuate","varier","📈"],["drawback","inconvénient","➖"],["warehouse","entrepôt","🏭"],["auditor","auditeur, contrôleur","🧾"]],
 s:["The cost goes up, the cost fluctuates,","Each of the answers has its weights,","Who verifies? No does, no do,","As soon as it's ready, I'll call you!"],
 x:[["The cost of supplies ___ considerably.",["fluctuates","fluctuate"]],["Each of the solutions ___ drawbacks.",["has","have"]],["We will start as soon as he ___.",["arrives","will arrive"]],["« Who verifies the statements? » is correct.",true]],
 d:{title:"Défi ⭐⭐⭐ – la série avancée du prof",sub:"Très difficile (niveau lycée). Chaque réponse est expliquée en français.",sec:[
  {t:"1. Vocabulary puzzle: find the precise verb",fr:"Remets les lettres dans l'ordre pour trouver le verbe, puis écris-le au présent simple (+s avec he / she / it).",it:[
   {k:"write",q:"a) RRECU (happen again): The fault ______ despite repairs.",qfr:"La panne se reproduit malgré les réparations.",keys:[["recurs"]],full:false,model:"recurs",why:"RRECU = recur (se reproduire). The fault = it ➜ recurs."},
   {k:"write",q:"b) FJUSTYI (give a valid reason for): No evidence ______ the ban.",qfr:"Aucune preuve ne justifie l'interdiction.",keys:[["justifies"]],full:false,model:"justifies",why:"justify ➜ justifies (consonne + y ➜ ies)."},
   {k:"write",q:"c) VLOINVE (include as a necessary part): The role ______ travel.",qfr:"Le poste implique des voyages.",keys:[["involves"]],full:false,model:"involves"},
   {k:"write",q:"d) TIANRE (keep): The organisation ______ confidential records.",qfr:"L'organisation garde des dossiers confidentiels.",keys:[["retains"]],full:false,model:"retains",why:"TIANRE = retain (garder)."}]},
  {t:"2. Read critically: complete the report",fr:"Complète le rapport avec le présent simple.",it:[
   {k:"fill",q:"Use the present simple forms of the verbs in brackets.",qfr:"Un organisme indépendant surveille la publicité en ligne…",
    text:"An independent watchdog [1] (monitor) online advertising. Its annual report [2] (highlight) misleading claims. Each of the companies it investigates [3] (deny) wrongdoing. Yet the evidence [4] (suggest) that some adverts exaggerate benefits. Neither a low price nor impressive packaging necessarily [5] (guarantee) quality. The watchdog [6] (not / have) the authority to impose fines; it [7] (rely) on public pressure. Why [8] some consumers still trust claims that independent research contradicts?",
    bank:["monitors","highlights","denies","suggests","guarantees","doesn't have","relies","do","monitor","deny"],ans:["monitors","highlights","denies","suggests","guarantees","doesn't have","relies","do"],pts:4,why:"Tous les sujets sont au singulier (it) ➜ -s ; deny, rely ➜ -ies. « some consumers » est pluriel ➜ Why do some consumers trust…?"},
   {k:"write",q:"In your own words, explain why the watchdog relies on public pressure.",qfr:"Explique pourquoi l'organisme compte sur la pression du public.",keys:[["fines","authority","power"]],model:"Because it doesn't have the authority to impose fines.",minW:5}]},
  {t:"3. Agreement traps: choose and justify",fr:"Choisis la bonne forme. Cherche le vrai sujet.",it:[
   {k:"mcq",q:"a) The cost of essential supplies ___ considerably.",ch:["fluctuates","fluctuate"],why:"Sujet : the cost (singulier). « supplies » n'est pas le sujet."},
   {k:"mcq",q:"b) Each of the proposed solutions ___ serious drawbacks.",ch:["has","have"],why:"each = chacune ➜ singulier."},
   {k:"mcq",q:"c) Several members of the panel ___ with the findings.",ch:["disagree","disagrees"],why:"Sujet : several members (pluriel)."},
   {k:"mcq",q:"d) The information in these reports ___ unreliable.",ch:["appears","appear"],why:"information est indénombrable ➜ singulier."},
   {k:"mcq",q:"e) Neither explanation ___ for the discrepancy.",ch:["accounts","account"],why:"neither + nom singulier ➜ verbe singulier."}]},
  {t:"4. Rewrite without changing the meaning",fr:"Utilise le mot donné. Écris 2 à 5 mots.",it:[
   {k:"write",q:"a) The consultant rarely misses a deadline. HARDLY ➜ The consultant ______ a deadline.",keys:[["hardly ever misses"]],full:false,model:"hardly ever misses",why:"rarely = hardly ever."},
   {k:"write",q:"b) The device belongs to my colleague. OWNS ➜ My colleague ______.",keys:[["owns the device"]],full:false,model:"owns the device"},
   {k:"write",q:"c) There is no evidence in the report. CONTAIN ➜ The report ______ evidence.",keys:[["doesn't contain any","does not contain any","contains no"]],full:false,model:"doesn't contain any"},
   {k:"write",q:"d) Is this policy applicable to temporary staff? APPLY ➜ ______ to temporary staff?",keys:[["does this policy apply"]],full:false,model:"Does this policy apply"}]},
  {t:"5. Ask questions",fr:"Écris une question dont la réponse est le mot en MAJUSCULES.",it:[
   {k:"write",q:"a) THE AUDITOR verifies the financial statements.",keys:[["who verifies the financial statements"]],full:false,model:"Who verifies the financial statements?",why:"On demande le sujet : Who + verbe avec -s, sans does."},
   {k:"write",q:"b) The committee reviews complaints EVERY FORTNIGHT.",keys:[["how often does the committee review"]],full:false,model:"How often does the committee review complaints?",why:"every fortnight = toutes les deux semaines ➜ How often…?"},
   {k:"write",q:"c) The association relies on VOLUNTARY DONATIONS.",keys:[["what does the association rely on"]],full:false,model:"What does the association rely on?"}]},
  {t:"6. Meaning matters: simple or continuous?",fr:"Complète les deux trous avec le même verbe.",it:[
   {k:"fill",q:"a – c",text:"a) The director [1] the proposal is impractical. She [2] of postponing the launch at the moment. (think) b) The retailer [3] three warehouses. Its representatives [4] discussions with a supplier right now. (have) c) This fabric [5] unusually rough. The inspector [6] its surface now to assess its texture. (feel)",
    bank:["thinks","is thinking","has","are having","feels","is feeling"],ans:["thinks","is thinking","has","are having","feels","is feeling"],pts:3,why:"thinks = son avis ; is thinking = elle y réfléchit maintenant. has = possède ; are having = sont en train d'avoir (de faire) des discussions. feels = au toucher il est rugueux ; is feeling = il le touche maintenant."}]},
  {t:"7. Editing challenge: correct or defend",fr:"Écris OK si c'est juste, sinon réécris la phrase.",it:[
   {k:"write",q:"a) Every applicant have to disclose potential conflicts of interest.",keys:[["every applicant has to"]],full:false,model:"Every applicant has to disclose potential conflicts of interest.",why:"every + singulier ➜ has."},
   {k:"write",q:"b) Why does the supplier refuses to provide a refund?",keys:[["why does the supplier refuse"]],full:false,model:"Why does the supplier refuse to provide a refund?",why:"Après does : verbe sans s."},
   {k:"write",q:"c) The exhibition opens next Thursday, according to the programme.",keys:[["ok"]],full:false,model:"OK",why:"Présent simple pour un programme / horaire futur : c'est correct."},
   {k:"write",q:"d) We will release the funds as soon as the auditor will approve them.",keys:[["as soon as the auditor approves"]],full:false,model:"We will release the funds as soon as the auditor approves them.",why:"Après as soon as : présent, pas will."}]},
  {t:"8. Final challenge: choose the tense",fr:"Présent simple, présent continu ou present perfect (have + participe).",help:"Présent simple : habitude, vérité (usually). Présent continu : maintenant, cette semaine (this week, Listen!). Present perfect : jusqu'à maintenant (so far, yet).",it:[
   {k:"fill",q:"a – g",text:"a) The laboratory usually [1] (analyse) water samples, but this week it [2] (investigate) a chemical leak. b) So far, the researchers [3] (identify) three pollutants. c) The equipment [4] (belong) to the university. d) Listen! The alarm [5] (sound). e) The team [6] (not / publish) its findings yet. f) Under the current rules, every researcher [7] (have) to wear protective clothing. g) We will act as soon as the laboratory [8] (confirm) the results.",
    bank:["analyses","is investigating","have identified","belongs","is sounding","hasn't published","has","confirms"],ans:["analyses","is investigating","have identified","belongs","is sounding","hasn't published","has","confirms"],pts:4,
    why:"usually ➜ simple ; this week ➜ continu ; so far, yet ➜ present perfect ; belong ne se met jamais au continu ; Listen! ➜ continu ; every researcher ➜ has ; as soon as ➜ présent (pas will)."}]}]}});

// ---------- Anglais : vocabulaire traduit en FRANÇAIS (l'arabe reste en plus) ----------
(function(){
  const FR={"a rubber":"une gomme","a ruler":"une règle","a schoolbag":"un cartable","under":"sous","next to":"à côté de","PE":"le sport (EPS)","aunt":"la tante","uncle":"l'oncle",
   "cousin":"le cousin, la cousine","curly":"bouclé","shy":"timide","funny":"drôle","kind":"gentil","bedroom":"la chambre","garden":"le jardin","kitchen":"la cuisine","bathroom":"la salle de bain",
   "get up":"se lever","get dressed":"s'habiller","homework":"les devoirs","breakfast":"le petit-déjeuner","always":"toujours","usually":"d'habitude","often":"souvent","sometimes":"parfois",
   "never":"jamais","once":"une fois","twice":"deux fois","full sentence":"une phrase complète","check":"vérifier","fast":"rapide","strong":"fort","popular":"populaire","dangerous":"dangereux",
   "jumper":"le pull","trainers":"les baskets","skirt":"la jupe","scarf":"l'écharpe","bread":"le pain","cheese":"le fromage","juice":"le jus","carrot":"la carotte","island":"l'île","desert":"le désert",
   "windy":"venteux","cloudy":"nuageux","band":"le groupe de musique","drums":"la batterie","teenager":"l'adolescent","singer":"le chanteur","library":"la bibliothèque","museum":"le musée",
   "busy":"animé, plein de monde","quiet":"calme","treehouse":"la cabane dans un arbre","stairs":"l'escalier","balcony":"le balcon","views":"la vue","amazing":"incroyable","cafeteria":"la cantine",
   "gym":"la salle de sport","ICT room":"la salle d'informatique","science lab":"le laboratoire","staffroom":"la salle des profs","playground":"la cour de récréation","slim":"mince",
   "straight":"raides (cheveux)","fair":"blonds (cheveux)","creative":"créatif","medium-height":"de taille moyenne"};
  Object.keys(LESSONS).filter(k=>/^anglais-/.test(k)).forEach(k=>{const L=LESSONS[k];
    L.words=L.words.map(w=>FR[w[0]]?[w[0],FR[w[0]],w[2],w[1]]:w);
    (L.games||[]).forEach(g=>{if(g.type==="match")g.pairs=L.words.slice(0,4).map(w=>[w[0],w[1]]);if(g.title==="صل الكلمة بترجمتها")g.title="Relie le mot et sa traduction"});
    // chaque fiche d'exercices commence par le vocabulaire : on écoute en anglais puis en français
    if(L.devoir&&L.words.length&&!["anglais-5","anglais-6"].includes(k)){const W=L.words,its=W.slice(0,3).map((w,i)=>{const others=W.filter(x=>x!==w).slice(i,i+2).map(x=>x[1]);
      return others.length>=2?{k:"mcq",q:`« ${w[0]} » in French?`,qfr:`« ${w[0]} » en français, c'est…`,ch:[w[1],...others],why:`${w[0]} = ${w[1]}.`}:null}).filter(Boolean);
      L.devoir.sec.unshift({t:"Vocabulary – le vocabulaire",fr:"Touche un mot : Lumi le dit en anglais, puis en français.",ar:"المس الكلمة لتسمعها بالإنجليزية ثم بالفرنسية.",voc:W,it:its})}});
})();
