// ===== Programme 1ère année collège (Maroc), d'après AlloSchool =====
const SUBJECTS = [
 {
  "id": "maths",
  "name": "Mathématiques",
  "ico": "×÷",
  "c": "#EF6C3A",
  "lang": "fr",
  "tune": [
   60,
   64,
   67,
   64,
   65,
   69,
   67,
   64,
   62,
   65,
   64,
   60
  ],
  "sem": [
   [
    "Semestre 1",
    [
     "Opérations sur les nombres entiers et décimaux",
     "Nombres en écriture fractionnaire",
     "Opérations sur les nombres en écriture fractionnaire",
     "Notions de base de la géométrie dans le plan",
     "Inégalité triangulaire et médiatrice d'un segment",
     "Angles",
     "Nombres relatifs : présentation et comparaison",
     "Nombres relatifs : addition et soustraction",
     "Nombres relatifs : multiplication et division",
     "Puissances"
    ]
   ],
   [
    "Semestre 2",
    [
     "Triangles",
     "Bissectrice et hauteur d'un triangle",
     "Développement et factorisation",
     "Symétrie centrale",
     "Équations",
     "Parallélogramme",
     "Quadrilatères particuliers",
     "Angles formés par deux droites parallèles et une sécante",
     "Droite graduée et repérage dans le plan",
     "Cercle",
     "Proportionnalité",
     "Statistiques",
     "Prisme droit et cylindre de révolution"
    ]
   ]
  ]
 },
 {
  "id": "physique",
  "name": "Physique-Chimie",
  "ico": "H₂O",
  "c": "#2F7FE0",
  "lang": "fr",
  "tune": [
   62,
   66,
   69,
   74,
   71,
   69,
   66,
   64,
   62,
   64,
   66,
   62
  ],
  "sem": [
   [
    "Semestre 1",
    [
     "L'eau dans notre environnement",
     "Les états physiques de la matière",
     "Mesure du volume des solides et des liquides",
     "Mesure de la masse des solides et des liquides",
     "La masse volumique",
     "La pression et la pression atmosphérique",
     "Le modèle particulaire de la matière",
     "La chaleur et les changements d'état",
     "Les mélanges",
     "La dissolution dans l'eau",
     "La séparation des constituants d'un mélange",
     "Le corps pur et ses caractéristiques",
     "Le traitement des eaux"
    ]
   ],
   [
    "Semestre 2",
    [
     "L'électricité qui nous entoure",
     "Le circuit électrique simple",
     "Les conducteurs et les isolants",
     "Montage en série et montage en parallèle",
     "Le courant électrique continu",
     "La loi des nœuds et la loi d'additivité des tensions",
     "La résistance électrique",
     "Prévention des dangers du courant électrique"
    ]
   ]
  ]
 },
 {
  "id": "svt",
  "name": "SVT",
  "ico": "❦",
  "c": "#2E9E62",
  "lang": "fr",
  "tune": [
   67,
   69,
   71,
   74,
   71,
   69,
   67,
   64,
   67,
   69,
   67,
   62
  ],
  "sem": [
   [
    "Semestre 1",
    [
     "Introduction aux SVT",
     "L'exploration des milieux naturels",
     "La respiration dans différents milieux",
     "L'alimentation des êtres vivants",
     "Les relations trophiques et les équilibres naturels",
     "Classification des êtres vivants et équilibres naturels"
    ]
   ],
   [
    "Semestre 2",
    [
     "La sortie géologique",
     "La formation des roches sédimentaires",
     "Construction d'une échelle des temps géologiques",
     "Les ressources hydriques"
    ]
   ]
  ]
 },
 {
  "id": "info",
  "name": "Informatique",
  "ico": "</>",
  "c": "#7B5CF0",
  "lang": "fr",
  "tune": [
   60,
   67,
   64,
   67,
   60,
   67,
   64,
   72,
   71,
   67,
   64,
   62
  ],
  "sem": [
   [
    "Unité I",
    [
     "Le système informatique",
     "Le système d'exploitation"
    ]
   ],
   [
    "Unité II",
    [
     "Les fichiers son et image",
     "Le traitement de texte : introduction",
     "Les liens hypertextes"
    ]
   ],
   [
    "Unité III",
    [
     "La recherche de fichiers sur un support de stockage",
     "La recherche d'informations dans une encyclopédie numérique"
    ]
   ]
  ]
 },
 {
  "id": "francais",
  "name": "Français",
  "ico": "Aa",
  "c": "#DB3F8D",
  "lang": "fr",
  "tune": [
   64,
   64,
   65,
   67,
   67,
   65,
   64,
   62,
   60,
   60,
   62,
   64
  ],
  "sem": [
   [
    "Module 1 : le conte",
    [
     "Lecture 1 : Identifier la structure d'un conte",
     "Oral 1 : Lire et dire un conte",
     "Écrit 1 : Rédiger le canevas d'un conte",
     "Lecture 2 : Identifier les personnages d'un conte",
     "Langue 2-1 : La formule qui introduit le conte",
     "Langue 2-2 : Les indicateurs de temps",
     "Oral 2 : Jouer au conteur",
     "Écrit 2 : Rédiger le début d'un conte",
     "Lecture 3-1 : Le portrait valorisant",
     "Lecture 3-2 : Le portrait dévalorisant",
     "Langue 3-1 : Les verbes « être » et « avoir »",
     "Oral 3-1 : Faire son autoportrait",
     "Langue 3-2 : Décrire à l'aide d'adjectifs",
     "Écrit 3 : Rédiger un portrait valorisant",
     "Lecture 4-1 : Les actions dans un récit",
     "Langue 4-1 : Les verbes de mouvement",
     "Écrit 4-1 : Rédiger une suite d'actions",
     "Lecture 4-2 : Le dialogue dans un récit"
    ]
   ]
  ]
 },
 {
  "id": "anglais",
  "name": "Anglais",
  "ico": "Hi!",
  "c": "#C99400",
  "lang": "en",
  "tune": [
   67,
   67,
   69,
   71,
   67,
   71,
   69,
   62,
   67,
   67,
   69,
   67
  ],
  "sem": [
   [
    "Units 1 – 5",
    [
     "Unit 1 : Our new things",
     "Unit 2 : They're happy now!",
     "Unit 3 : I can ride a bike!",
     "Unit 4 : Have you got a milkshake?",
     "Unit 5 : We've got English!"
    ]
   ],
   [
    "Units 6 – 10",
    [
     "Unit 6 : Let's play after school!",
     "Unit 7 : Let's buy presents!",
     "Unit 8 : What's the time?",
     "Unit 9 : Where does she work?",
     "Unit 10 : It's hot today!"
    ]
   ]
  ],
  "detail": [
   "school things · this/that/these/those · initial sounds",
   "feelings · we're/they're · ch sh th",
   "outdoor activities · can/can't · CVC words",
   "food, numbers 20-100 · have/has · gr br fr",
   "school subjects · what/when have we got · dr tr cr",
   "after-school activities · I visit/I don't · fl pl bl",
   "special days · likes/doesn't like · cl gl sl",
   "times of the day · What's the time? · sm sn st sk",
   "places · Where does he work? · a + magic e",
   "weather · What's the weather like? · i + magic e"
  ]
 },
 {
  "id": "arabe",
  "name": "Arabe · العربية",
  "ico": "ع",
  "c": "#0D9488",
  "lang": "ar",
  "tune": [
   62,
   63,
   66,
   67,
   69,
   67,
   66,
   63,
   62,
   63,
   62,
   62
  ],
  "sem": [
   [
    "الدروس اللغوية – الدورة الأولى",
    [
     "الميزان الصرفي والمجرد والمزيد",
     "مزيد الثلاثي والرباعي ومعاني صيغ الزوائد",
     "تصريف الفعل الصحيح: السالم والمهموز والمضعف",
     "تصريف الفعل المعتل: المثال والأجوف",
     "تصريف الفعل المعتل: الناقص",
     "تصريف الفعل اللفيف المفروق واللفيف المقرون",
     "الإعراب والبناء",
     "الأسماء المعربة والأسماء المبنية",
     "علامات البناء في الأفعال",
     "إعراب الفعل المضارع: رفعه ونصبه",
     "إعراب الفعل المضارع: جزمه"
    ]
   ],
   [
    "الدروس اللغوية – الدورة الثانية",
    [
     "النكرة والمعرفة",
     "العلم",
     "الضمير البارز والضمير المستتر",
     "الضمير المتصل",
     "الضمير المنفصل",
     "أسماء الإشارة",
     "الاسم الموصول",
     "أحوال المبتدأ والخبر",
     "المبتدأ والخبر وتطابقهما",
     "الفعل اللازم والمتعدي (مفعولان أصلهما مبتدأ وخبر)",
     "الفعل اللازم والمتعدي (مفعولان ليس أصلهما مبتدأ وخبر)",
     "المبني للمجهول وأحكامه"
    ]
   ],
   [
    "النصوص القرائية",
    [
     "من حقيقة الإسلام",
     "بلادي",
     "الهاتف النقال",
     "الرياضة والمجتمع",
     "الطبيعة بين الأمس واليوم",
     "لا تلتمس تقويم ما لا يستقيم"
    ]
   ],
   [
    "التعبير والإنشاء",
    [
     "مهارة توسيع فكرة وتفسيرها",
     "مهارة البحث عن المعلومات وإعداد ملفات وثائقية",
     "مهارة التوثيق",
     "مهارة الإنتاج الصحفي: القصاصة",
     "مهارة كتابة الرسائل والتواصل بها"
    ]
   ]
  ]
 },
 {
  "id": "hg",
  "name": "Histoire-Géo · الاجتماعيات",
  "ico": "⌖",
  "c": "#A86B32",
  "lang": "ar",
  "tune": [
   62,
   65,
   67,
   69,
   67,
   65,
   62,
   60,
   62,
   65,
   64,
   62
  ],
  "sem": [
   [
    "التاريخ",
    [
     "حضارة بلاد الرافدين",
     "حضارة مصر القديمة",
     "الحضارة الإغريقية",
     "المغرب القديم: الفينيقيون والقرطاجيون",
     "الديانات في الحضارات القديمة",
     "نشأة الدولة الإسلامية",
     "الخلفاء الراشدون",
     "الخلافة الإسلامية الكبرى: الأمويون والعباسيون",
     "الحضارة الإسلامية: الإنتاج الفكري",
     "النظام الفيودالي في أوربا"
    ]
   ]
  ]
 },
 {
  "id": "islamique",
  "name": "Éducation islamique · التربية الإسلامية",
  "ico": "۞",
  "c": "#4C5BD4",
  "lang": "ar",
  "tune": [
   62,
   64,
   65,
   67,
   69,
   67,
   65,
   64,
   62,
   64,
   62,
   62
  ],
  "sem": [
   [
    "الوحدة الأولى",
    [
     "مدخل التزكية (القرآن الكريم) 1: الشطر الأول من سورة ق (الآيات 1–15)",
     "مدخل التزكية (العقيدة) 1: العقيدة الصحيحة والعقائد الفاسدة",
     "مدخل الاقتداء 1: بعثة الرسول ﷺ ودعوته السرية والجهرية",
     "مدخل الاستجابة 1: العبادة غاية الخلق – أركان الإسلام",
     "مدخل القسط 1: حق الله (التوحيد والإخلاص)",
     "مدخل الحكمة 1: الإتقان عبادة وعملا"
    ]
   ],
   [
    "الوحدة الثانية",
    [
     "مدخل التزكية (القرآن الكريم) 2: الشطر الثاني من سورة ق (الآيات 16–37)",
     "مدخل التزكية (العقيدة) 2: أركان الإيمان (حديث جبريل عليه السلام)",
     "مدخل الاقتداء 2: ثبات الرسول ﷺ",
     "مدخل الاستجابة 2: الطهارة (أنواعها ومقاصدها)",
     "مدخل القسط 2: حق النفس (الحفظ والرعاية)",
     "مدخل الحكمة 2: التعامل الإيجابي مع وسائل الاتصال الحديثة"
    ]
   ],
   [
    "الوحدة الثالثة",
    [
     "مدخل التزكية (القرآن الكريم) 3: الشطر الثالث من سورة ق (الآيات 38–45)",
     "مدخل التزكية (القرآن الكريم) 4: الشطر الأول من سورة لقمان (الآيات 1–11)",
     "مدخل التزكية (العقيدة) 3: النظر والتفكر سبيل المعرفة والهداية",
     "مدخل الاقتداء 3: صبر السابقين الأولين في الدعوة إلى الله",
     "مدخل الاستجابة 3: الصلاة (الفرائض، السنن، المبطلات)",
     "مدخل القسط 3: حق الغير (حقوق الآباء والأبناء وذوي الرحم)",
     "مدخل الحكمة 3: التجمل بمحاسن الأخلاق"
    ]
   ],
   [
    "الوحدة الرابعة",
    [
     "مدخل التزكية (القرآن الكريم) 5: الشطر الثاني من سورة لقمان (الآيات 12–21)",
     "مدخل التزكية (العقيدة) 4: القرآن الكريم هدى ورحمة للعالمين",
     "مدخل الاقتداء 4: دار الأرقم (التآلف والتشاور)",
     "مدخل الاستجابة 4: الصلاة (السهو، قضاء الفوائت، المسبوق)",
     "مدخل القسط 4: حق البيئة",
     "مدخل الحكمة 4: حديث «الفقيه كل الفقيه»",
     "مدخل التزكية (القرآن الكريم) 6: الشطر الثالث من سورة لقمان (الآيات 22–34)"
    ]
   ]
  ]
 }
];

// ===== Leçons complètes =====
const LESSONS = {
 "maths-0": {
  "title": "Les priorités opératoires (entiers et décimaux)",
  "video": [
   {
    "t": "Dans quel ordre calculer ?",
    "say": "Bonjour ! Aujourd'hui, on apprend dans quel ordre on fait les calculs. C'est comme une file d'attente : certaines opérations passent en premier.",
    "vis": {
     "k": "big",
     "v": "3 + 4 × 2 = ?"
    },
    "sayAr": "مرحبا! اليوم نتعلم في أي ترتيب نقوم بالحسابات. إنه مثل الطابور: بعض العمليات تمر أولا."
   },
   {
    "t": "Règle 1 : les parenthèses d'abord",
    "say": "Règle numéro un. On calcule toujours d'abord ce qui est entre parenthèses.",
    "vis": {
     "k": "steps",
     "v": [
      "(2 + 3) × 4",
      "5 × 4",
      "20"
     ]
    },
    "sayAr": "القاعدة الأولى: نحسب دائما أولا ما بين القوسين."
   },
   {
    "t": "Règle 2 : × et ÷ avant + et −",
    "say": "Règle numéro deux. Les multiplications et les divisions passent avant les additions et les soustractions. Donc trois plus quatre fois deux, c'est trois plus huit, égal onze.",
    "vis": {
     "k": "steps",
     "v": [
      "3 + 4 × 2",
      "3 + 8",
      "11"
     ]
    },
    "sayAr": "القاعدة الثانية: الضرب والقسمة قبل الجمع والطرح. إذن ثلاثة زائد أربعة ضرب اثنين يساوي ثلاثة زائد ثمانية، أي أحد عشر."
   },
   {
    "t": "Règle 3 : de gauche à droite",
    "say": "Règle numéro trois. Quand il ne reste que des additions et des soustractions, on calcule de gauche à droite.",
    "vis": {
     "k": "steps",
     "v": [
      "10 − 4 + 3",
      "6 + 3",
      "9"
     ]
    },
    "sayAr": "القاعدة الثالثة: عندما يبقى الجمع والطرح فقط، نحسب من اليسار إلى اليمين."
   },
   {
    "t": "Avec les nombres décimaux",
    "say": "Avec les nombres décimaux, ce sont les mêmes règles. Et pour poser une addition, on aligne bien les virgules.",
    "vis": {
     "k": "steps",
     "v": [
      "2,5 + 1,5 × 2",
      "2,5 + 3",
      "5,5"
     ]
    },
    "sayAr": "مع الأعداد العشرية، القواعد نفسها. ولوضع عملية الجمع، نضع الفواصل تحت بعضها."
   },
   {
    "t": "Le truc pour retenir",
    "say": "Pour t'en souvenir, pense à trois marches : d'abord les parenthèses, ensuite fois et divisé, enfin plus et moins.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "1. ( )",
       "Parenthèses",
       "#EF6C3A"
      ],
      [
       "2. × ÷",
       "Multiplier, diviser",
       "#2F7FE0"
      ],
      [
       "3. + −",
       "Additionner, soustraire",
       "#2E9E62"
      ]
     ]
    },
    "sayAr": "لكي تتذكر: ثلاث درجات. أولا الأقواس، ثم الضرب والقسمة، وأخيرا الجمع والطرح."
   }
  ],
  "ess": [
   "On calcule d'abord ce qui est entre parenthèses.",
   "Ensuite, on fait les multiplications et les divisions.",
   "À la fin, on fait les additions et les soustractions, de gauche à droite.",
   "Les règles sont les mêmes pour les nombres décimaux.",
   "Pour additionner des décimaux, on aligne les virgules."
  ],
  "song": [
   "D'abord les parenthèses, on les ouvre en premier,",
   "Puis fois et divisé passent juste derrière,",
   "Plus et moins à la fin, de gauche à droite on va,",
   "Et le bon résultat, c'est toi qui l'auras !"
  ],
  "games": [
   {
    "type": "quiz",
    "title": "Calcul rapide",
    "q": "3 + 4 × 2 = ?",
    "ch": [
     "14",
     "11",
     "9"
    ],
    "a": 1
   },
   {
    "type": "quiz",
    "title": "Les parenthèses",
    "q": "(6 − 2) × 5 = ?",
    "ch": [
     "28",
     "20",
     "16"
    ],
    "a": 1
   },
   {
    "type": "quiz",
    "title": "De gauche à droite",
    "q": "20 − 8 + 2 = ?",
    "ch": [
     "10",
     "14",
     "30"
    ],
    "a": 1
   },
   {
    "type": "order",
    "title": "Les trois marches",
    "q": "Remets les étapes dans le bon ordre.",
    "items": [
     "Parenthèses",
     "Multiplications et divisions",
     "Additions et soustractions"
    ]
   },
   {
    "type": "match",
    "title": "Relie le calcul et son résultat",
    "pairs": [
     [
      "18 ÷ 3 + 1",
      "7"
     ],
     [
      "2 × (4 + 1)",
      "10"
     ],
     [
      "12 − 3 × 2",
      "6"
     ],
     [
      "4 × 2 + 1",
      "9"
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "Les décimaux",
    "q": "1,5 + 2 × 0,5 = ?",
    "ch": [
     "1,75",
     "2,5",
     "3"
    ],
    "a": 1
   }
  ],
  "exam": [
   {
    "q": "5 + 3 × 2 = ?",
    "ch": [
     "16",
     "11",
     "13"
    ],
    "a": 1
   },
   {
    "q": "(5 + 3) × 2 = ?",
    "ch": [
     "16",
     "11",
     "10"
    ],
    "a": 0
   },
   {
    "q": "Dans 10 − 2 × 3, on commence par 10 − 2.",
    "vf": true,
    "a": 1,
    "qAr": "في 10 − 2 × 3 نبدأ بـ 10 − 2."
   },
   {
    "q": "24 ÷ (2 + 4) = ?",
    "ch": [
     "16",
     "4",
     "10"
    ],
    "a": 1
   },
   {
    "q": "7 × 2 − 4 ÷ 2 = ?",
    "ch": [
     "5",
     "12",
     "10"
    ],
    "a": 1
   },
   {
    "q": "Sans parenthèses, la multiplication passe avant l'addition.",
    "vf": true,
    "a": 0,
    "qAr": "بدون أقواس، الضرب يمر قبل الجمع."
   },
   {
    "q": "3,2 + 0,8 = ?",
    "ch": [
     "3,10",
     "4",
     "11"
    ],
    "a": 1
   },
   {
    "q": "2,5 × 4 = ?",
    "ch": [
     "8,20",
     "6,5",
     "10"
    ],
    "a": 2
   },
   {
    "q": "15 − 5 − 2 = ?",
    "ch": [
     "8",
     "12",
     "10"
    ],
    "a": 0
   },
   {
    "q": "Dans 6 + (8 − 3) × 2, que calcules-tu en premier ?",
    "ch": [
     "6 + 8",
     "8 − 3",
     "3 × 2"
    ],
    "a": 1,
    "qAr": "في 6 + (8 − 3) × 2، ماذا تحسب أولا؟"
   }
  ],
  "essAr": [
   "نحسب أولا ما بين القوسين.",
   "بعد ذلك نقوم بالضرب والقسمة.",
   "في الأخير نقوم بالجمع والطرح، من اليسار إلى اليمين.",
   "القواعد نفسها بالنسبة للأعداد العشرية.",
   "لجمع الأعداد العشرية نضع الفواصل تحت بعضها."
  ],
  "words": [
   [
    "les parenthèses",
    "الأقواس",
    "( )"
   ],
   [
    "multiplier",
    "الضرب",
    "✖️"
   ],
   [
    "diviser",
    "القسمة",
    "➗"
   ],
   [
    "additionner",
    "الجمع",
    "➕"
   ],
   [
    "soustraire",
    "الطرح",
    "➖"
   ],
   [
    "un nombre décimal",
    "عدد عشري",
    "🔢"
   ]
  ]
 },
 "physique-0": {
  "worlds": [
   "eau",
   "etats"
  ],
  "title": "L'eau dans notre environnement",
  "video": [
   {
    "t": "L'eau est partout",
    "say": "L'eau couvre environ soixante-dix pour cent de la surface de la Terre. On la trouve dans les océans, les rivières, les nuages, et même dans notre corps.",
    "sayAr": "يغطي الماء حوالي سبعين في المئة من سطح الأرض. نجده في المحيطات والأنهار والسحب، وحتى في جسمنا.",
    "img": [
     {
      "f": "The Earth seen from Apollo 17.jpg",
      "cap": "La Terre vue de l'espace",
      "capAr": "الأرض من الفضاء",
      "by": "NASA / Apollo 17",
      "lic": "Domaine public"
     }
    ],
    "vis": {
     "k": "bars",
     "v": [
      [
       "Eau",
       "70",
       "#2F7FE0"
      ],
      [
       "Terre ferme",
       "30",
       "#A86B32"
      ]
     ]
    },
    "ar": [
     [
      "l'eau",
      "الماء"
     ]
    ]
   },
   {
    "t": "Eau salée et eau douce",
    "say": "Presque toute l'eau de la Terre est salée : environ quatre-vingt-dix-sept pour cent. L'eau douce ne fait qu'environ trois pour cent, et la plus grande partie est gelée dans les glaciers.",
    "sayAr": "تقريبا كل ماء الأرض مالح: حوالي سبعة وتسعين في المئة. الماء العذب لا يمثل إلا حوالي ثلاثة في المئة، وأغلبه متجمد في الكتل الجليدية.",
    "img": [
     {
      "f": "Perito Moreno Glacier Patagonia Argentina Luca Galuzzi 2005.JPG",
      "cap": "Un glacier : de l'eau douce gelée",
      "capAr": "كتلة جليدية: ماء عذب متجمد",
      "by": "Luca Galuzzi",
      "lic": "CC BY-SA 2.5"
     }
    ],
    "vis": {
     "k": "bars",
     "v": [
      [
       "Eau salée",
       "97",
       "#2F7FE0"
      ],
      [
       "Eau douce",
       "3",
       "#2E9E62"
      ]
     ]
    },
    "ar": [
     [
      "eau douce",
      "الماء العذب"
     ],
     [
      "eau salée",
      "الماء المالح"
     ]
    ]
   },
   {
    "t": "Les trois états de l'eau",
    "say": "L'eau existe sous trois états. Solide, comme la glace. Liquide, comme l'eau du robinet. Et gazeux, comme la vapeur d'eau, qu'on ne voit pas.",
    "sayAr": "يوجد الماء في ثلاث حالات: صلبة مثل الثلج، وسائلة مثل ماء الصنبور، وغازية مثل بخار الماء الذي لا نراه.",
    "img": [
     {
      "f": "Ice cubes openphoto.jpg",
      "cap": "Solide : des glaçons",
      "capAr": "صلبة: مكعبات الثلج",
      "by": "Darren Hester",
      "lic": "CC BY-SA 2.5"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Solide",
       "la glace, la neige",
       "#7FB2FF"
      ],
      [
       "Liquide",
       "la pluie, la mer",
       "#2F7FE0"
      ],
      [
       "Gazeux",
       "la vapeur d'eau",
       "#9AA6BA"
      ]
     ]
    },
    "ar": [
     [
      "solide",
      "صلبة"
     ],
     [
      "liquide",
      "سائلة"
     ],
     [
      "gazeux",
      "غازية"
     ]
    ]
   },
   {
    "t": "Le cycle de l'eau (1)",
    "say": "Le soleil chauffe l'eau des mers : c'est l'évaporation. En altitude, la vapeur se refroidit et forme les nuages : c'est la condensation. Puis l'eau retombe en pluie ou en neige : ce sont les précipitations.",
    "sayAr": "تسخن الشمس ماء البحار: هذا هو التبخر. في الأعلى يبرد البخار ويكون السحب: هذا هو التكاثف. ثم ينزل الماء مطرا أو ثلجا: هذه هي التساقطات.",
    "img": [
     {
      "f": "The Water Cycle (SVS30580).png",
      "cap": "Le cycle de l'eau",
      "capAr": "دورة الماء",
      "by": "NASA Scientific Visualization Studio",
      "lic": "Domaine public"
     },
     {
      "f": "Dark rain clouds departing over Brofjorden.jpg",
      "cap": "Des nuages de pluie : la condensation",
      "capAr": "سحب ممطرة: التكاثف",
      "by": "W.carter",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "cycle",
     "v": [
      "Évaporation",
      "Condensation",
      "Précipitations"
     ]
    },
    "ar": [
     [
      "évaporation",
      "التبخر"
     ],
     [
      "condensation",
      "التكاثف"
     ],
     [
      "précipitations",
      "التساقطات"
     ]
    ]
   },
   {
    "t": "Le cycle de l'eau (2)",
    "say": "Sur le sol, l'eau ruisselle vers les rivières et la mer, ou bien elle s'infiltre dans le sol et forme les nappes souterraines. Et le cycle recommence !",
    "sayAr": "على الأرض، يجري الماء نحو الأنهار والبحر، أو يتسرب في التربة ويكون الفرشة المائية. ثم تبدأ الدورة من جديد!",
    "img": [
     {
      "f": "Oum Rbia river around Azemmour.jpg",
      "cap": "L'Oum Er-Rbia, près d'Azemmour",
      "capAr": "نهر أم الربيع قرب أزمور",
      "by": "Reda Benkhadra",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "cycle",
     "v": [
      "Précipitations",
      "Ruissellement",
      "Infiltration",
      "Mer"
     ]
    },
    "ar": [
     [
      "ruissellement",
      "الجريان السطحي"
     ],
     [
      "infiltration",
      "التسرب"
     ],
     [
      "nappe souterraine",
      "الفرشة المائية"
     ]
    ]
   },
   {
    "t": "Protéger l'eau",
    "say": "L'eau douce est précieuse, surtout au Maroc où il pleut peu. On ferme bien le robinet et on ne pollue pas les rivières.",
    "sayAr": "الماء العذب ثمين، خصوصا في المغرب حيث المطر قليل. نغلق الصنبور جيدا ولا نلوث الأنهار.",
    "img": [
     {
      "f": "Running water tap.jpg",
      "cap": "On ferme bien le robinet",
      "capAr": "نغلق الصنبور جيدا",
      "by": "Queen Asali",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "big",
     "v": "💧 = trésor"
    }
   }
  ],
  "ess": [
   "L'eau couvre environ 70 % de la surface de la Terre.",
   "Environ 97 % de l'eau est salée ; l'eau douce ne fait que 3 %.",
   "L'eau a trois états : solide, liquide et gazeux.",
   "Le cycle de l'eau : évaporation, condensation, précipitations, ruissellement et infiltration.",
   "L'eau douce est rare : il faut l'économiser."
  ],
  "lex": [
   [
    "évaporation",
    "التبخر"
   ],
   [
    "condensation",
    "التكاثف"
   ],
   [
    "précipitations",
    "التساقطات"
   ],
   [
    "ruissellement",
    "الجريان السطحي"
   ],
   [
    "infiltration",
    "التسرب"
   ],
   [
    "eau douce",
    "الماء العذب"
   ]
  ],
  "essAr": [
   "يغطي الماء حوالي 70٪ من سطح الأرض.",
   "حوالي 97٪ من الماء مالح، والماء العذب 3٪ فقط.",
   "للماء ثلاث حالات: صلبة وسائلة وغازية.",
   "دورة الماء: التبخر، التكاثف، التساقطات، الجريان السطحي والتسرب.",
   "الماء العذب نادر: يجب أن نقتصد فيه."
  ],
  "song": [
   "Le soleil chauffe la mer, l'eau monte en vapeur,",
   "Là-haut elle se refroidit, un nuage est né,",
   "La pluie tombe sur la terre, les rivières vont couler,",
   "Et retour à la mer, tout va recommencer !"
  ],
  "games": [
   {
    "type": "quiz",
    "title": "Eau salée",
    "q": "Quelle part de l'eau de la Terre est salée ?",
    "qAr": "ما نسبة ماء الأرض المالح؟",
    "ch": [
     "3 %",
     "50 %",
     "97 %"
    ],
    "a": 2
   },
   {
    "type": "match",
    "title": "Les états de l'eau",
    "pairs": [
     [
      "La glace",
      "Solide"
     ],
     [
      "La pluie",
      "Liquide"
     ],
     [
      "La vapeur",
      "Gazeux"
     ]
    ]
   },
   {
    "type": "order",
    "title": "Le cycle de l'eau",
    "q": "Remets le cycle dans l'ordre.",
    "items": [
     "Évaporation",
     "Condensation",
     "Précipitations",
     "Ruissellement"
    ]
   },
   {
    "type": "match",
    "title": "Français ↔ arabe",
    "pairs": [
     [
      "évaporation",
      "التبخر"
     ],
     [
      "condensation",
      "التكاثف"
     ],
     [
      "infiltration",
      "التسرب"
     ],
     [
      "eau douce",
      "الماء العذب"
     ]
    ]
   },
   {
    "type": "sort",
    "title": "Eau douce ou salée ?",
    "bins": [
     "Eau douce",
     "Eau salée"
    ],
    "items": [
     [
      "La mer",
      1
     ],
     [
      "Un glacier",
      0
     ],
     [
      "L'océan",
      1
     ],
     [
      "Une rivière",
      0
     ],
     [
      "Une nappe souterraine",
      0
     ]
    ]
   }
  ],
  "exam": [
   {
    "q": "L'eau couvre environ quel pourcentage de la surface de la Terre ?",
    "qAr": "يغطي الماء حوالي كم في المئة من سطح الأرض؟",
    "ch": [
     "30 %",
     "70 %",
     "97 %"
    ],
    "a": 1
   },
   {
    "q": "La glace est de l'eau à l'état…",
    "qAr": "الثلج ماء في الحالة…",
    "chAr": [
     "صلبة",
     "سائلة",
     "غازية"
    ],
    "ch": [
     "solide",
     "liquide",
     "gazeux"
    ],
    "a": 0
   },
   {
    "q": "On peut voir la vapeur d'eau.",
    "qAr": "يمكننا أن نرى بخار الماء.",
    "vf": true,
    "a": 1
   },
   {
    "q": "Quand l'eau de mer se transforme en vapeur, c'est…",
    "qAr": "عندما يتحول ماء البحر إلى بخار، هذا هو…",
    "chAr": [
     "التكاثف",
     "التبخر",
     "التسرب"
    ],
    "ch": [
     "la condensation",
     "l'évaporation",
     "l'infiltration"
    ],
    "a": 1
   },
   {
    "q": "Les nuages se forment par…",
    "qAr": "تتكون السحب بواسطة…",
    "chAr": [
     "التكاثف",
     "الجريان السطحي",
     "التبخر"
    ],
    "ch": [
     "la condensation",
     "le ruissellement",
     "l'évaporation"
    ],
    "a": 0
   },
   {
    "q": "L'eau douce représente environ 3 % de l'eau de la Terre.",
    "qAr": "يمثل الماء العذب حوالي 3٪ من ماء الأرض.",
    "vf": true,
    "a": 0
   },
   {
    "q": "L'eau qui pénètre dans le sol, c'est…",
    "qAr": "الماء الذي يدخل في التربة هو…",
    "chAr": [
     "الجريان السطحي",
     "التسرب",
     "التساقطات"
    ],
    "ch": [
     "le ruissellement",
     "l'infiltration",
     "la précipitation"
    ],
    "a": 1
   },
   {
    "q": "La pluie et la neige sont des…",
    "qAr": "المطر والثلج هي…",
    "chAr": [
     "تساقطات",
     "تبخر",
     "فرشات مائية"
    ],
    "ch": [
     "précipitations",
     "évaporations",
     "nappes"
    ],
    "a": 0
   },
   {
    "q": "« التبخر » veut dire…",
    "qAr": "ماذا تعني كلمة « التبخر » بالفرنسية؟",
    "ch": [
     "condensation",
     "évaporation",
     "infiltration"
    ],
    "a": 1
   },
   {
    "q": "Le cycle de l'eau ne s'arrête jamais.",
    "qAr": "دورة الماء لا تتوقف أبدا.",
    "vf": true,
    "a": 0
   }
  ],
  "words": [
   [
    "l'eau",
    "الماء",
    "💧"
   ],
   [
    "la glace",
    "الجليد",
    "🧊"
   ],
   [
    "la vapeur",
    "البخار",
    "♨️"
   ],
   [
    "le nuage",
    "السحابة",
    "☁️"
   ],
   [
    "la pluie",
    "المطر",
    "🌧️"
   ],
   [
    "la rivière",
    "النهر",
    "🏞️"
   ]
  ]
 },
 "info-0": {
  "worlds": [
   "ordi"
  ],
  "title": "Le système informatique",
  "video": [
   {
    "t": "L'informatique, c'est quoi ?",
    "say": "Le mot informatique vient de information et automatique. C'est le traitement automatique de l'information grâce à l'ordinateur.",
    "sayAr": "كلمة المعلوميات تعني المعالجة الآلية للمعلومات بواسطة الحاسوب.",
    "img": [
     {
      "f": "Computer monitor.jpg",
      "cap": "L'écran",
      "capAr": "الشاشة",
      "by": "Zzubnik",
      "lic": "Domaine public"
     }
    ],
    "vis": {
     "k": "big",
     "v": "INFORMation + autoMATIQUE"
    },
    "ar": [
     [
      "informatique",
      "المعلوميات"
     ]
    ]
   },
   {
    "t": "Matériel et logiciel",
    "say": "Le matériel, c'est tout ce qu'on peut toucher : l'écran, le clavier, la souris. Le logiciel, ce sont les programmes : un traitement de texte, un jeu, un navigateur internet.",
    "sayAr": "العتاد هو كل ما يمكن لمسه: الشاشة، ولوحة المفاتيح، والفأرة. والبرنام هو البرامج: معالج النصوص، ولعبة، ومتصفح الإنترنت.",
    "img": [
     {
      "f": "QWERTY keyboard.jpg",
      "cap": "Le clavier",
      "capAr": "لوحة المفاتيح",
      "by": "MichaelMaggs",
      "lic": "CC BY-SA 3.0"
     },
     {
      "f": "Computer monitor.jpg",
      "cap": "L'écran",
      "capAr": "الشاشة",
      "by": "Zzubnik",
      "lic": "Domaine public"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Matériel",
       "on peut le toucher",
       "#7B5CF0"
      ],
      [
       "Logiciel",
       "les programmes",
       "#DB3F8D"
      ]
     ]
    },
    "ar": [
     [
      "matériel",
      "العتاد"
     ],
     [
      "logiciel",
      "البرنام"
     ]
    ]
   },
   {
    "t": "L'unité centrale",
    "say": "L'unité centrale est le cerveau de l'ordinateur. Elle contient le processeur, qui fait les calculs, et la mémoire, qui garde les informations.",
    "sayAr": "الوحدة المركزية هي دماغ الحاسوب. تحتوي على المعالج الذي يقوم بالحسابات، والذاكرة التي تحفظ المعلومات.",
    "img": [
     {
      "f": "Computer case - Full Tower.jpg",
      "cap": "L'unité centrale",
      "capAr": "الوحدة المركزية",
      "by": "Dmitry Makeev",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Processeur",
       "il calcule",
       "#EF6C3A"
      ],
      [
       "Mémoire",
       "elle garde",
       "#2F7FE0"
      ]
     ]
    },
    "ar": [
     [
      "unité centrale",
      "الوحدة المركزية"
     ]
    ]
   },
   {
    "t": "Les périphériques d'entrée",
    "say": "Les périphériques d'entrée font entrer l'information dans l'ordinateur : le clavier, la souris, le micro, le scanner.",
    "sayAr": "ملحقات الإدخال تدخل المعلومات إلى الحاسوب: لوحة المفاتيح، والفأرة، والميكروفون، والماسح الضوئي.",
    "img": [
     {
      "f": "QWERTY keyboard.jpg",
      "cap": "Le clavier",
      "capAr": "لوحة المفاتيح",
      "by": "MichaelMaggs",
      "lic": "CC BY-SA 3.0"
     },
     {
      "f": "Computer mouse 1 2015-02-28.JPG",
      "cap": "La souris",
      "capAr": "الفأرة",
      "by": "FASTILY",
      "lic": "CC BY-SA 4.0"
     },
     {
      "f": "Rode NT-USB.jpg",
      "cap": "Le micro",
      "capAr": "الميكروفون",
      "by": "Nicolas Rück (WMDE)",
      "lic": "CC BY-SA 3.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Clavier",
       "⌨",
       "#7B5CF0"
      ],
      [
       "Souris",
       "🖱",
       "#7B5CF0"
      ],
      [
       "Micro",
       "🎤",
       "#7B5CF0"
      ]
     ]
    },
    "ar": [
     [
      "entrée",
      "الإدخال"
     ]
    ]
   },
   {
    "t": "Les périphériques de sortie",
    "say": "Les périphériques de sortie font sortir l'information : l'écran, l'imprimante, les haut-parleurs.",
    "sayAr": "ملحقات الإخراج تخرج المعلومات: الشاشة، والطابعة، ومكبرات الصوت.",
    "img": [
     {
      "f": "Computer monitor.jpg",
      "cap": "L'écran",
      "capAr": "الشاشة",
      "by": "Zzubnik",
      "lic": "Domaine public"
     },
     {
      "f": "Laser printer 2 (8657122708).jpg",
      "cap": "L'imprimante",
      "capAr": "الطابعة",
      "by": "Robbie Sproule",
      "lic": "CC BY 2.0"
     },
     {
      "f": "2016 Kolumna głośnikowa Altus 110.jpg",
      "cap": "Un haut-parleur",
      "capAr": "مكبر الصوت",
      "by": "Jacek Halicki",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Écran",
       "🖥",
       "#2E9E62"
      ],
      [
       "Imprimante",
       "🖨",
       "#2E9E62"
      ],
      [
       "Haut-parleurs",
       "🔊",
       "#2E9E62"
      ]
     ]
    },
    "ar": [
     [
      "sortie",
      "الإخراج"
     ]
    ]
   },
   {
    "t": "Entrée, traitement, sortie",
    "say": "Exemple : je tape une lettre sur le clavier, c'est l'entrée. L'unité centrale la traite. Puis l'écran l'affiche, c'est la sortie.",
    "sayAr": "مثال: أكتب حرفا بلوحة المفاتيح، هذا هو الإدخال. الوحدة المركزية تعالجه. ثم تعرضه الشاشة، هذا هو الإخراج.",
    "vis": {
     "k": "steps",
     "v": [
      "Entrée",
      "Traitement",
      "Sortie"
     ]
    }
   }
  ],
  "ess": [
   "L'informatique est le traitement automatique de l'information.",
   "Le matériel se touche ; le logiciel, ce sont les programmes.",
   "L'unité centrale contient le processeur et la mémoire.",
   "Entrée : clavier, souris, micro, scanner.",
   "Sortie : écran, imprimante, haut-parleurs."
  ],
  "lex": [
   [
    "informatique",
    "المعلوميات"
   ],
   [
    "matériel",
    "العتاد"
   ],
   [
    "logiciel",
    "البرنام"
   ],
   [
    "unité centrale",
    "الوحدة المركزية"
   ],
   [
    "périphérique",
    "ملحق"
   ]
  ],
  "essAr": [
   "المعلوميات هي المعالجة الآلية للمعلومات.",
   "العتاد يلمس، والبرنام هو البرامج.",
   "الوحدة المركزية تحتوي على المعالج والذاكرة.",
   "الإدخال: لوحة المفاتيح، الفأرة، الميكروفون، الماسح الضوئي.",
   "الإخراج: الشاشة، الطابعة، مكبرات الصوت."
  ],
  "song": [
   "Je tape sur le clavier, l'information entre,",
   "L'unité centrale calcule, c'est elle le grand centre,",
   "L'écran montre le résultat, l'imprimante aussi,",
   "Entrée, traitement, sortie, c'est bien compris !"
  ],
  "games": [
   {
    "type": "sort",
    "title": "Entrée ou sortie ?",
    "bins": [
     "Entrée",
     "Sortie"
    ],
    "items": [
     [
      "Clavier",
      0
     ],
     [
      "Écran",
      1
     ],
     [
      "Souris",
      0
     ],
     [
      "Imprimante",
      1
     ],
     [
      "Micro",
      0
     ],
     [
      "Haut-parleurs",
      1
     ]
    ]
   },
   {
    "type": "sort",
    "title": "Matériel ou logiciel ?",
    "bins": [
     "Matériel",
     "Logiciel"
    ],
    "items": [
     [
      "Un jeu vidéo",
      1
     ],
     [
      "L'écran",
      0
     ],
     [
      "Un navigateur",
      1
     ],
     [
      "La souris",
      0
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "Le cerveau",
    "q": "Quelle partie fait les calculs ?",
    "ch": [
     "L'écran",
     "Le processeur",
     "La souris"
    ],
    "a": 1
   },
   {
    "type": "order",
    "title": "Le chemin de l'information",
    "q": "Remets dans l'ordre.",
    "items": [
     "Entrée",
     "Traitement",
     "Sortie"
    ]
   }
  ],
  "exam": [
   {
    "q": "L'informatique, c'est le traitement automatique de…",
    "ch": [
     "l'information",
     "l'eau",
     "l'électricité"
    ],
    "a": 0
   },
   {
    "q": "Le clavier est un périphérique…",
    "ch": [
     "d'entrée",
     "de sortie"
    ],
    "a": 0
   },
   {
    "q": "L'imprimante est un périphérique de sortie.",
    "vf": true,
    "a": 0
   },
   {
    "q": "Un jeu vidéo est…",
    "ch": [
     "du matériel",
     "un logiciel"
    ],
    "a": 1
   },
   {
    "q": "Le processeur se trouve dans…",
    "ch": [
     "l'unité centrale",
     "l'écran",
     "la souris"
    ],
    "a": 0
   },
   {
    "q": "L'écran fait entrer l'information.",
    "vf": true,
    "a": 1
   },
   {
    "q": "Quel est un périphérique d'entrée ?",
    "ch": [
     "Le micro",
     "Les haut-parleurs",
     "L'écran"
    ],
    "a": 0
   },
   {
    "q": "La mémoire sert à…",
    "ch": [
     "garder les informations",
     "imprimer",
     "faire du bruit"
    ],
    "a": 0
   }
  ],
  "words": [
   [
    "le clavier",
    "لوحة المفاتيح",
    "⌨️"
   ],
   [
    "la souris",
    "الفأرة",
    "🖱️"
   ],
   [
    "l'écran",
    "الشاشة",
    "🖥️"
   ],
   [
    "l'imprimante",
    "الطابعة",
    "🖨️"
   ],
   [
    "le micro",
    "الميكروفون",
    "🎤"
   ],
   [
    "l'ordinateur",
    "الحاسوب",
    "💻"
   ]
  ]
 },
 "francais-0": {
  "title": "Lecture 1 : la structure d'un conte",
  "video": [
   {
    "t": "Le conte",
    "say": "Un conte est une histoire imaginaire, souvent avec de la magie. Il commence très souvent par : Il était une fois.",
    "img": [
     {
      "f": "Gustave Doré - Little Tom Thumb VI (1880).jpg",
      "cap": "Le Petit Poucet, un conte (gravure de Gustave Doré)",
      "capAr": "عقلة الإصبع، حكاية (رسم غوستاف دوريه)",
      "by": "Gustave Doré",
      "lic": "Domaine public"
     }
    ],
    "vis": {
     "k": "big",
     "v": "Il était une fois…"
    },
    "sayAr": "الحكاية قصة خيالية، فيها غالبا سحر. تبدأ في الغالب بعبارة: كان يا ما كان."
   },
   {
    "t": "1. La situation initiale",
    "say": "Au début, on présente le héros, le lieu et le moment. Tout est calme. Par exemple : il était une fois une petite tortue qui vivait près d'un lac.",
    "img": [
     {
      "f": "Tunisian tortoise (Testudo graeca nabeulensis) male Cap Bon 2.jpg",
      "cap": "Une tortue, comme Lila",
      "capAr": "سلحفاة مثل ليلى",
      "by": "Charles J. Sharp",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Qui ?",
       "le héros",
       "#DB3F8D"
      ],
      [
       "Où ?",
       "le lieu",
       "#2F7FE0"
      ],
      [
       "Quand ?",
       "le moment",
       "#C99400"
      ]
     ]
    },
    "sayAr": "في البداية نقدم البطل والمكان والزمان. كل شيء هادئ. مثال: كان يا ما كان سلحفاة صغيرة تعيش قرب بحيرة."
   },
   {
    "t": "2. L'élément perturbateur",
    "say": "Soudain, un problème arrive. On trouve souvent les mots : un jour, soudain, tout à coup. Par exemple : un jour, le lac devint sec.",
    "vis": {
     "k": "big",
     "v": "Un jour… ⚡"
    },
    "sayAr": "فجأة تظهر مشكلة. نجد غالبا كلمات: ذات يوم، فجأة. مثال: ذات يوم جفت البحيرة."
   },
   {
    "t": "3. Les péripéties",
    "say": "Ce sont les aventures du héros pour régler le problème. La tortue part chercher de l'eau, elle traverse la forêt, elle rencontre un oiseau.",
    "vis": {
     "k": "steps",
     "v": [
      "aventure 1",
      "aventure 2",
      "aventure 3"
     ]
    },
    "sayAr": "هذه مغامرات البطل لحل المشكلة. السلحفاة تذهب للبحث عن الماء، وتعبر الغابة، وتلتقي بطائر."
   },
   {
    "t": "4. L'élément de résolution",
    "say": "Le problème est réglé. Par exemple : l'oiseau lui montre une source d'eau fraîche.",
    "vis": {
     "k": "big",
     "v": "Enfin… ✔"
    },
    "sayAr": "تحل المشكلة. مثال: الطائر يدلها على عين ماء عذب."
   },
   {
    "t": "5. La situation finale",
    "say": "Le calme revient, la vie est souvent plus belle qu'avant. Et ils vécurent heureux. Retiens bien : cinq étapes.",
    "vis": {
     "k": "steps",
     "v": [
      "Début calme",
      "Problème",
      "Aventures",
      "Solution",
      "Fin calme"
     ]
    },
    "sayAr": "يعود الهدوء، وتصبح الحياة غالبا أجمل من قبل. وعاشوا سعداء. تذكر جيدا: خمس مراحل."
   }
  ],
  "ess": [
   "Le conte est une histoire imaginaire qui commence souvent par « Il était une fois ».",
   "Situation initiale : on présente le héros, le lieu, le moment.",
   "Élément perturbateur : un problème arrive (« Un jour », « Soudain »).",
   "Péripéties : les aventures du héros.",
   "Élément de résolution puis situation finale : le problème est réglé et le calme revient."
  ],
  "song": [
   "Il était une fois, tout commence en douceur,",
   "Un jour, soudain, arrive un grand malheur,",
   "Le héros part à l'aventure, il cherche la solution,",
   "Et tout finit très bien, c'est la conclusion !"
  ],
  "games": [
   {
    "type": "order",
    "title": "Les 5 étapes",
    "q": "Remets les étapes du conte dans l'ordre.",
    "items": [
     "Situation initiale",
     "Élément perturbateur",
     "Péripéties",
     "Élément de résolution",
     "Situation finale"
    ]
   },
   {
    "type": "order",
    "title": "La petite tortue",
    "q": "Remets l'histoire dans l'ordre.",
    "items": [
     "Il était une fois une tortue près d'un lac.",
     "Un jour, le lac devint sec.",
     "Elle traversa la forêt et rencontra un oiseau.",
     "L'oiseau lui montra une source.",
     "Elle vécut heureuse près de la source."
    ]
   },
   {
    "type": "quiz",
    "title": "Le début",
    "q": "Par quelle formule commence souvent un conte ?",
    "ch": [
     "Il était une fois",
     "Bonjour à tous",
     "Pour conclure"
    ],
    "a": 0
   },
   {
    "type": "match",
    "title": "Le mot et l'étape",
    "pairs": [
     [
      "Il était une fois",
      "Situation initiale"
     ],
     [
      "Soudain",
      "Élément perturbateur"
     ],
     [
      "Ils vécurent heureux",
      "Situation finale"
     ]
    ]
   }
  ],
  "exam": [
   {
    "q": "Un conte est une histoire…",
    "ch": [
     "vraie",
     "imaginaire",
     "scientifique"
    ],
    "a": 1,
    "qAr": "الحكاية قصة…",
    "chAr": [
     "حقيقية",
     "خيالية",
     "علمية"
    ]
   },
   {
    "q": "Combien d'étapes a le schéma du conte ?",
    "ch": [
     "3",
     "5",
     "7"
    ],
    "a": 1,
    "qAr": "كم عدد مراحل خطاطة الحكاية؟"
   },
   {
    "q": "« Un jour, soudain… » annonce…",
    "ch": [
     "la situation finale",
     "l'élément perturbateur",
     "la situation initiale"
    ],
    "a": 1,
    "qAr": "« ذات يوم، فجأة… » تعلن عن…",
    "chAr": [
     "الوضعية النهائية",
     "العنصر المخل",
     "الوضعية الأولية"
    ]
   },
   {
    "q": "Dans la situation initiale, on présente le héros.",
    "vf": true,
    "a": 0,
    "qAr": "في الوضعية الأولية نقدم البطل."
   },
   {
    "q": "Les aventures du héros s'appellent…",
    "ch": [
     "les péripéties",
     "la résolution",
     "le titre"
    ],
    "a": 0,
    "qAr": "مغامرات البطل تسمى…",
    "chAr": [
     "الأحداث",
     "الحل",
     "العنوان"
    ]
   },
   {
    "q": "La situation finale arrive au début du conte.",
    "vf": true,
    "a": 1,
    "qAr": "الوضعية النهائية تأتي في بداية الحكاية."
   },
   {
    "q": "Quand le problème est réglé, c'est…",
    "ch": [
     "l'élément de résolution",
     "l'élément perturbateur"
    ],
    "a": 0,
    "qAr": "عندما تحل المشكلة، هذا هو…",
    "chAr": [
     "عنصر الحل",
     "العنصر المخل"
    ]
   },
   {
    "q": "« Et ils vécurent heureux » est…",
    "ch": [
     "la situation finale",
     "une péripétie",
     "la situation initiale"
    ],
    "a": 0,
    "qAr": "« وعاشوا سعداء » هي…",
    "chAr": [
     "الوضعية النهائية",
     "حدث",
     "الوضعية الأولية"
    ]
   }
  ],
  "essAr": [
   "الحكاية قصة خيالية تبدأ غالبا بعبارة: كان يا ما كان.",
   "الوضعية الأولية: نقدم البطل والمكان والزمان.",
   "العنصر المخل: تظهر مشكلة (ذات يوم، فجأة).",
   "الأحداث: مغامرات البطل.",
   "عنصر الحل ثم الوضعية النهائية: تحل المشكلة ويعود الهدوء."
  ],
  "words": [
   [
    "le conte",
    "الحكاية",
    "📖"
   ],
   [
    "le héros",
    "البطل",
    "🦸"
   ],
   [
    "le problème",
    "المشكلة",
    "⚡"
   ],
   [
    "l'aventure",
    "المغامرة",
    "🗺️"
   ],
   [
    "la solution",
    "الحل",
    "🔑"
   ],
   [
    "la fin",
    "النهاية",
    "🏁"
   ]
  ]
 },
 "anglais-0": {
  "title": "Unit 1 : Our new things",
  "video": [
   {
    "t": "School things",
    "say": "Hello! Let's learn school things. A pen. A pencil. A book. A bag. A ruler. An eraser.",
    "img": [
     {
      "f": "Ballpoint Pen DS.jpg",
      "cap": "a pen · un stylo",
      "capAr": "قلم",
      "by": "Augustus Binu",
      "lic": "CC BY-SA 3.0"
     },
     {
      "f": "School Rulers.jpg",
      "cap": "a ruler · une règle",
      "capAr": "مسطرة",
      "by": "Estabiano",
      "lic": "CC0"
     }
    ],
    "fr": "Bonjour ! Apprenons les affaires d'école.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "a pen",
       "un stylo",
       "#C99400"
      ],
      [
       "a book",
       "un livre",
       "#2F7FE0"
      ],
      [
       "a ruler",
       "une règle",
       "#2E9E62"
      ],
      [
       "a bag",
       "un cartable",
       "#DB3F8D"
      ]
     ]
    },
    "sayAr": "مرحبا! لنتعلم أدوات المدرسة: قلم، قلم رصاص، كتاب، محفظة، مسطرة، ممحاة."
   },
   {
    "t": "This is…",
    "say": "This is for one thing near me. This is my pen.",
    "fr": "This = une chose près de moi.",
    "vis": {
     "k": "big",
     "v": "👉 This is my pen."
    },
    "sayAr": "This تستعمل لشيء واحد قريب مني. This is my pen تعني: هذا قلمي."
   },
   {
    "t": "That is…",
    "say": "That is for one thing far from me. That is your bag.",
    "fr": "That = une chose loin de moi.",
    "vis": {
     "k": "big",
     "v": "👉 … That is your bag."
    },
    "sayAr": "That تستعمل لشيء واحد بعيد عني. That is your bag تعني: تلك محفظتك."
   },
   {
    "t": "These are…",
    "say": "These is for many things near me. These are my books.",
    "fr": "These = plusieurs choses près de moi.",
    "vis": {
     "k": "big",
     "v": "👉 These are my books."
    },
    "sayAr": "These تستعمل لعدة أشياء قريبة مني. These are my books تعني: هذه كتبي."
   },
   {
    "t": "Those are…",
    "say": "Those is for many things far from me. Those are your pencils.",
    "fr": "Those = plusieurs choses loin de moi.",
    "vis": {
     "k": "big",
     "v": "👉 … Those are your pencils."
    },
    "sayAr": "Those تستعمل لعدة أشياء بعيدة عني. Those are your pencils تعني: تلك أقلامك."
   },
   {
    "t": "Remember",
    "say": "One thing near: this. One thing far: that. Many things near: these. Many things far: those. Well done!",
    "fr": "Le résumé en quatre mots.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "this",
       "1 · près",
       "#C99400"
      ],
      [
       "that",
       "1 · loin",
       "#EF6C3A"
      ],
      [
       "these",
       "+ · près",
       "#2F7FE0"
      ],
      [
       "those",
       "+ · loin",
       "#7B5CF0"
      ]
     ]
    },
    "sayAr": "تذكر: شيء واحد قريب: this. شيء واحد بعيد: that. أشياء قريبة: these. أشياء بعيدة: those."
   }
  ],
  "ess": [
   "this = une chose près de moi : This is my pen.",
   "that = une chose loin de moi : That is your bag.",
   "these = plusieurs choses près : These are my books.",
   "those = plusieurs choses loin : Those are your pencils.",
   "School things : pen, pencil, book, bag, ruler, eraser."
  ],
  "essLang": "fr",
  "song": [
   "This is my pen, my pen, my pen,",
   "That is your bag, over there again,",
   "These are my books, here in my hand,",
   "Those are your pencils, isn't that grand!"
  ],
  "games": [
   {
    "type": "match",
    "title": "English ↔ français",
    "pairs": [
     [
      "a pen",
      "un stylo"
     ],
     [
      "a ruler",
      "une règle"
     ],
     [
      "an eraser",
      "une gomme"
     ],
     [
      "a bag",
      "un cartable"
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "Near or far?",
    "q": "___ is my pen (près, 1 objet).",
    "ch": [
     "This",
     "Those",
     "These"
    ],
    "a": 0
   },
   {
    "type": "quiz",
    "title": "Many things",
    "q": "___ are your pencils (loin, plusieurs).",
    "ch": [
     "That",
     "Those",
     "This"
    ],
    "a": 1
   },
   {
    "type": "sort",
    "title": "Un ou plusieurs ?",
    "bins": [
     "Un seul objet",
     "Plusieurs objets"
    ],
    "items": [
     [
      "this",
      0
     ],
     [
      "these",
      1
     ],
     [
      "that",
      0
     ],
     [
      "those",
      1
     ]
    ]
   }
  ],
  "exam": [
   {
    "q": "« a ruler » veut dire…",
    "ch": [
     "un stylo",
     "une règle",
     "un livre"
    ],
    "a": 1,
    "qAr": "a ruler تعني…",
    "chAr": [
     "قلم",
     "مسطرة",
     "كتاب"
    ]
   },
   {
    "q": "___ is my book (près).",
    "ch": [
     "This",
     "These",
     "Those"
    ],
    "a": 0,
    "qAr": "___ is my book (قريب، شيء واحد)."
   },
   {
    "q": "___ are my pens (près, plusieurs).",
    "ch": [
     "That",
     "These",
     "This"
    ],
    "a": 1,
    "qAr": "___ are my pens (قريب، عدة أشياء)."
   },
   {
    "q": "« Those » = plusieurs choses loin.",
    "vf": true,
    "a": 0,
    "qAr": "Those تعني عدة أشياء بعيدة."
   },
   {
    "q": "___ is your bag (loin).",
    "ch": [
     "These",
     "That",
     "Those"
    ],
    "a": 1,
    "qAr": "___ is your bag (بعيد)."
   },
   {
    "q": "« an eraser » veut dire…",
    "ch": [
     "une gomme",
     "un cahier",
     "une trousse"
    ],
    "a": 0,
    "qAr": "an eraser تعني…",
    "chAr": [
     "ممحاة",
     "دفتر",
     "مقلمة"
    ]
   },
   {
    "q": "On dit « These is my pen ».",
    "vf": true,
    "a": 1,
    "qAr": "هل نقول « These is my pen »؟"
   },
   {
    "q": "« a pencil » veut dire…",
    "ch": [
     "un crayon",
     "un stylo",
     "une règle"
    ],
    "a": 0,
    "qAr": "a pencil تعني…",
    "chAr": [
     "قلم رصاص",
     "قلم",
     "مسطرة"
    ]
   }
  ],
  "essAr": [
   "this: شيء واحد قريب مني.",
   "that: شيء واحد بعيد عني.",
   "these: أشياء قريبة مني.",
   "those: أشياء بعيدة عني.",
   "أدوات المدرسة: قلم، قلم رصاص، كتاب، محفظة، مسطرة، ممحاة."
  ],
  "words": [
   [
    "a pen",
    "قلم",
    "🖊️"
   ],
   [
    "a pencil",
    "قلم رصاص",
    "✏️"
   ],
   [
    "a book",
    "كتاب",
    "📖"
   ],
   [
    "a bag",
    "محفظة",
    "🎒"
   ],
   [
    "a ruler",
    "مسطرة",
    "📏"
   ],
   [
    "an eraser",
    "ممحاة",
    "🧽"
   ]
  ]
 },
 "arabe-0": {
  "title": "الميزان الصرفي والمجرد والمزيد",
  "video": [
   {
    "t": "ما الميزان الصرفي؟",
    "say": "الميزان الصرفي مقياس نزن به الكلمات، لنعرف حروفها الأصلية وحروفها الزائدة. ونستعمل فيه ثلاثة أحرف: الفاء والعين واللام.",
    "vis": {
     "k": "big",
     "v": "ف · ع · ل"
    }
   },
   {
    "t": "كيف نزن الكلمة؟",
    "say": "نقابل الحرف الأول بالفاء، والحرف الثاني بالعين، والحرف الثالث باللام. مثال: كَتَبَ على وزن فَعَلَ.",
    "vis": {
     "k": "steps",
     "v": [
      "كَتَبَ",
      "ك ت ب",
      "فَعَلَ"
     ]
    }
   },
   {
    "t": "الحروف الزائدة",
    "say": "إذا كان في الكلمة حرف زائد، نكتبه في الميزان كما هو. مثال: كاتِب على وزن فاعِل، ومَكْتوب على وزن مَفْعول.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "كاتِب",
       "فاعِل",
       "#0D9488"
      ],
      [
       "مَكْتوب",
       "مَفْعول",
       "#2F7FE0"
      ]
     ]
    }
   },
   {
    "t": "الفعل المجرد",
    "say": "الفعل المجرد هو الذي كل حروفه أصلية، مثل: كَتَبَ، جَلَسَ، فَهِمَ.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "كَتَبَ",
       "فَعَلَ",
       "#0D9488"
      ],
      [
       "جَلَسَ",
       "فَعَلَ",
       "#0D9488"
      ],
      [
       "فَهِمَ",
       "فَعِلَ",
       "#0D9488"
      ]
     ]
    }
   },
   {
    "t": "الفعل المزيد",
    "say": "الفعل المزيد هو الذي زيد فيه حرف أو أكثر. مثل: أَكْرَمَ على وزن أَفْعَلَ، واسْتَغْفَرَ على وزن اسْتَفْعَلَ.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "أَكْرَمَ",
       "أَفْعَلَ",
       "#EF6C3A"
      ],
      [
       "اسْتَغْفَرَ",
       "اسْتَفْعَلَ",
       "#EF6C3A"
      ]
     ]
    }
   },
   {
    "t": "تذكر",
    "say": "الفاء للحرف الأول، والعين للحرف الثاني، واللام للحرف الثالث. والحرف الزائد نكتبه كما هو.",
    "vis": {
     "k": "steps",
     "v": [
      "ف",
      "ع",
      "ل"
     ]
    }
   }
  ],
  "ess": [
   "الميزان الصرفي هو: فَعَلَ.",
   "الحرف الأول يقابل الفاء، والثاني العين، والثالث اللام.",
   "الحرف الزائد يكتب في الميزان كما هو.",
   "الفعل المجرد: كل حروفه أصلية، مثل كَتَبَ.",
   "الفعل المزيد: فيه حرف زائد أو أكثر، مثل أَكْرَمَ."
  ],
  "song": [
   "فاءٌ وعينٌ ولام، ميزانُنا في الكلام،",
   "كَتَبَ على فَعَلَ، هيا نزن بانتظام،",
   "والحرف الزائد يبقى، كما هو في المقام،",
   "مجردٌ ومزيدٌ، فهمتُ الدرسَ تمام!"
  ],
  "games": [
   {
    "type": "match",
    "title": "الكلمة ووزنها",
    "pairs": [
     [
      "كاتِب",
      "فاعِل"
     ],
     [
      "مَكْتوب",
      "مَفْعول"
     ],
     [
      "أَكْرَمَ",
      "أَفْعَلَ"
     ],
     [
      "اسْتَغْفَرَ",
      "اسْتَفْعَلَ"
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "الوزن",
    "q": "ما وزن الفعل: جَلَسَ؟",
    "ch": [
     "فَعَلَ",
     "فاعَلَ",
     "أَفْعَلَ"
    ],
    "a": 0
   },
   {
    "type": "sort",
    "title": "مجرد أم مزيد؟",
    "bins": [
     "مجرد",
     "مزيد"
    ],
    "items": [
     [
      "كَتَبَ",
      0
     ],
     [
      "أَكْرَمَ",
      1
     ],
     [
      "جَلَسَ",
      0
     ],
     [
      "اسْتَغْفَرَ",
      1
     ],
     [
      "قاتَلَ",
      1
     ]
    ]
   },
   {
    "type": "order",
    "title": "رتب الميزان",
    "q": "رتب حروف الميزان.",
    "items": [
     "ف",
     "ع",
     "ل"
    ]
   }
  ],
  "exam": [
   {
    "q": "حروف الميزان الصرفي هي…",
    "ch": [
     "ف ع ل",
     "ك ت ب",
     "م ف ع"
    ],
    "a": 0
   },
   {
    "q": "وزن كَتَبَ هو…",
    "ch": [
     "فاعِل",
     "فَعَلَ",
     "مَفْعول"
    ],
    "a": 1
   },
   {
    "q": "وزن كاتِب هو…",
    "ch": [
     "فاعِل",
     "فَعَلَ",
     "أَفْعَلَ"
    ],
    "a": 0
   },
   {
    "q": "الفعل المجرد كل حروفه أصلية.",
    "vf": true,
    "a": 0
   },
   {
    "q": "أَكْرَمَ فعل…",
    "ch": [
     "مجرد",
     "مزيد"
    ],
    "a": 1
   },
   {
    "q": "وزن مَكْتوب هو…",
    "ch": [
     "مَفْعول",
     "فاعِل",
     "فَعَلَ"
    ],
    "a": 0
   },
   {
    "q": "الحرف الزائد لا يكتب في الميزان.",
    "vf": true,
    "a": 1
   },
   {
    "q": "وزن اسْتَغْفَرَ هو…",
    "ch": [
     "اسْتَفْعَلَ",
     "أَفْعَلَ",
     "فاعَلَ"
    ],
    "a": 0
   }
  ],
  "words": [
   [
    "الميزان",
    "la balance",
    "⚖️"
   ],
   [
    "فَعَلَ",
    "le modèle",
    "📐"
   ],
   [
    "كاتِب",
    "celui qui écrit",
    "✍️"
   ],
   [
    "مَكْتوب",
    "écrit",
    "✉️"
   ],
   [
    "مُجَرَّد",
    "simple",
    "1️⃣"
   ],
   [
    "مَزيد",
    "augmenté",
    "➕"
   ]
  ]
 },
 "hg-0": {
  "title": "حضارة بلاد الرافدين",
  "video": [
   {
    "t": "أين توجد بلاد الرافدين؟",
    "say": "توجد بلاد الرافدين بين نهري دجلة والفرات، في العراق حاليا. والرافدان يعني: النهران.",
    "img": [
     {
      "f": "The Old Bridge and The Tigris River-Mosul 01.jpg",
      "cap": "Le Tigre (Dijla) à Mossoul",
      "capAr": "نهر دجلة في الموصل",
      "by": "Abdulsalam Al Dabbagh",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "دجلة",
       "نهر",
       "#2F7FE0"
      ],
      [
       "الفرات",
       "نهر",
       "#2F7FE0"
      ]
     ]
    }
   },
   {
    "t": "الزراعة والري",
    "say": "استفاد السكان من مياه النهرين، فحفروا القنوات لسقي الأراضي، وزرعوا القمح والشعير والنخيل.",
    "vis": {
     "k": "steps",
     "v": [
      "النهر",
      "القنوات",
      "الحقول"
     ]
    }
   },
   {
    "t": "الكتابة المسمارية",
    "say": "اخترع السومريون الكتابة المسمارية حوالي سنة ثلاثة آلاف ومئتين قبل الميلاد، وكانوا يكتبون على ألواح من الطين.",
    "img": [
     {
      "f": "Cuneiform Akkadian clay tablet 2.jpg",
      "cap": "Une tablette en argile",
      "capAr": "لوح طيني بالكتابة المسمارية",
      "by": "Auteur inconnu",
      "lic": "Domaine public"
     }
    ],
    "vis": {
     "k": "big",
     "v": "𒀭 𒈗 𒆠"
    }
   },
   {
    "t": "قانون حمورابي",
    "say": "وضع حمورابي، ملك بابل، قانونا مكتوبا من مئتين واثنين وثمانين مادة، لتنظيم حياة الناس وتحقيق العدل.",
    "img": [
     {
      "f": "P1050763 Louvre code Hammurabi face rwk.JPG",
      "cap": "Le code de Hammurabi (musée du Louvre)",
      "capAr": "قانون حمورابي (متحف اللوفر)",
      "by": "Mbzt",
      "lic": "CC BY 3.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "حمورابي",
       "ملك بابل",
       "#A86B32"
      ],
      [
       "282",
       "مادة قانونية",
       "#A86B32"
      ]
     ]
    }
   },
   {
    "t": "الزقورة",
    "say": "بنى سكان بلاد الرافدين معابد عالية على شكل طبقات، تسمى الزقورات.",
    "img": [
     {
      "f": "Ziggurat of Ur Site in Nasiriyah 17.jpg",
      "cap": "La ziggourat d'Ur",
      "capAr": "زقورة أور",
      "by": "Alli Khalil",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "steps",
     "v": [
      "طبقة",
      "طبقة",
      "معبد"
     ]
    }
   },
   {
    "t": "العلوم",
    "say": "برعوا في الحساب وعلم الفلك. ومنهم وصلنا تقسيم الساعة إلى ستين دقيقة.",
    "vis": {
     "k": "big",
     "v": "60 دقيقة"
    }
   }
  ],
  "ess": [
   "بلاد الرافدين بين نهري دجلة والفرات (العراق حاليا).",
   "اعتمد السكان على الزراعة بفضل قنوات الري.",
   "اخترع السومريون الكتابة المسمارية على ألواح الطين.",
   "حمورابي ملك بابل وضع قانونا من 282 مادة.",
   "الزقورة معبد عال على شكل طبقات."
  ],
  "song": [
   "دجلةُ والفراتُ، نهرانِ عظيمان،",
   "زرعوا القمحَ والنخلَ، في أرض الرافدين،",
   "كتبوا بالمسمار، على لوحِ الطين،",
   "وحمورابي ملكٌ، وضعَ القوانين!"
  ],
  "games": [
   {
    "type": "quiz",
    "title": "النهران",
    "q": "بين أي نهرين توجد بلاد الرافدين؟",
    "ch": [
     "دجلة والفرات",
     "النيل والأمازون",
     "سبو وأم الربيع"
    ],
    "a": 0
   },
   {
    "type": "match",
    "title": "صل بين الكلمة ومعناها",
    "pairs": [
     [
      "المسمارية",
      "نوع من الكتابة"
     ],
     [
      "الزقورة",
      "معبد على شكل طبقات"
     ],
     [
      "حمورابي",
      "ملك بابل"
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "الكتابة",
    "q": "على ماذا كانوا يكتبون؟",
    "ch": [
     "الورق",
     "ألواح الطين",
     "الحاسوب"
    ],
    "a": 1
   },
   {
    "type": "order",
    "title": "من النهر إلى الحقل",
    "q": "رتب مراحل الري.",
    "items": [
     "النهر",
     "القنوات",
     "الحقول"
    ]
   }
  ],
  "exam": [
   {
    "q": "توجد بلاد الرافدين حاليا في…",
    "ch": [
     "العراق",
     "مصر",
     "المغرب"
    ],
    "a": 0
   },
   {
    "q": "اخترع السومريون الكتابة…",
    "ch": [
     "المسمارية",
     "الهيروغليفية",
     "العربية"
    ],
    "a": 0
   },
   {
    "q": "حمورابي كان ملك…",
    "ch": [
     "بابل",
     "روما",
     "أثينا"
    ],
    "a": 0
   },
   {
    "q": "الزقورة معبد على شكل طبقات.",
    "vf": true,
    "a": 0
   },
   {
    "q": "عدد مواد قانون حمورابي…",
    "ch": [
     "282",
     "28",
     "1000"
    ],
    "a": 0
   },
   {
    "q": "كانوا يكتبون على الورق.",
    "vf": true,
    "a": 1
   },
   {
    "q": "من محاصيلهم…",
    "ch": [
     "القمح والشعير",
     "البطاطس",
     "الذرة"
    ],
    "a": 0
   },
   {
    "q": "منهم وصلنا تقسيم الساعة إلى…",
    "ch": [
     "60 دقيقة",
     "100 دقيقة",
     "10 دقائق"
    ],
    "a": 0
   }
  ],
  "words": [
   [
    "دجلة",
    "le Tigre",
    "🏞️"
   ],
   [
    "الفرات",
    "l'Euphrate",
    "🌊"
   ],
   [
    "الكتابة المسمارية",
    "l'écriture cunéiforme",
    "🪨"
   ],
   [
    "حمورابي",
    "Hammurabi",
    "👑"
   ],
   [
    "الزقورة",
    "la ziggourat",
    "🏛️"
   ],
   [
    "الزراعة",
    "l'agriculture",
    "🌾"
   ]
  ]
 },
 "svt-1": {
  "worlds": [
   "foret",
   "peau"
  ],
  "title": "L'exploration des milieux naturels",
  "video": [
   {
    "t": "C'est quoi, un milieu naturel ?",
    "say": "Un milieu naturel est un endroit où vivent des êtres vivants : une forêt, une mare, une plage, un désert.",
    "sayAr": "الوسط الطبيعي مكان تعيش فيه الكائنات الحية: غابة، بركة، شاطئ، صحراء.",
    "img": [
     {
      "f": "Maamora Forest in Bouknadel - Morocco.jpg",
      "cap": "Une forêt : la Maâmora",
      "capAr": "غابة: المعمورة",
      "by": "Anass Sedrati",
      "lic": "CC BY-SA 4.0"
     },
     {
      "f": "Green pond frog (Euphlyctis hexadactylus).jpg",
      "cap": "Une mare : une grenouille",
      "capAr": "بركة: ضفدع",
      "by": "Charles J. Sharp",
      "lic": "CC BY-SA 4.0"
     },
     {
      "f": "Camel in Erg Chebbi.jpg",
      "cap": "Un désert : l'erg Chebbi",
      "capAr": "صحراء: عرق الشبي",
      "by": "ThartmannWiki",
      "lic": "CC BY-SA 4.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Forêt",
       "arbres, oiseaux",
       "#2E9E62"
      ],
      [
       "Mare",
       "grenouilles, algues",
       "#2F7FE0"
      ],
      [
       "Désert",
       "dromadaires, palmiers",
       "#C99400"
      ]
     ]
    },
    "ar": [
     [
      "milieu naturel",
      "الوسط الطبيعي"
     ]
    ]
   },
   {
    "t": "Le vivant et le non-vivant",
    "say": "Dans un milieu, il y a les êtres vivants, comme les animaux et les plantes. Ce sont les facteurs biotiques. Il y a aussi ce qui n'est pas vivant : l'eau, le sol, la lumière, la température. Ce sont les facteurs abiotiques.",
    "sayAr": "في الوسط الطبيعي توجد الكائنات الحية مثل الحيوانات والنباتات: هي العوامل الحية. وتوجد عناصر غير حية مثل الماء والتربة والضوء ودرجة الحرارة: هي العوامل غير الحية.",
    "img": [
     {
      "f": "Mushroom in Forest.jpg",
      "cap": "Un champignon : il est vivant",
      "capAr": "فطر: كائن حي",
      "by": "CookBooc",
      "lic": "CC BY 4.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Biotiques",
       "animaux, plantes, champignons",
       "#2E9E62"
      ],
      [
       "Abiotiques",
       "eau, sol, lumière, température",
       "#A86B32"
      ]
     ]
    },
    "ar": [
     [
      "êtres vivants",
      "الكائنات الحية"
     ],
     [
      "facteurs abiotiques",
      "العوامل الطبيعية"
     ]
    ]
   },
   {
    "t": "La sortie sur le terrain",
    "say": "Pour étudier un milieu, on fait une sortie. On observe, on mesure, on prend des échantillons et on note tout dans un carnet.",
    "sayAr": "لدراسة وسط طبيعي نقوم بخرجة. نلاحظ، ونقيس، ونأخذ عينات، ونسجل كل شيء في دفتر.",
    "vis": {
     "k": "steps",
     "v": [
      "Observer",
      "Mesurer",
      "Noter"
     ]
    },
    "ar": [
     [
      "échantillon",
      "عينة"
     ]
    ]
   },
   {
    "t": "Les outils de l'explorateur",
    "say": "On utilise une loupe pour observer les petits détails, un thermomètre pour la température, une boussole pour s'orienter, un appareil photo, et des sachets pour les échantillons.",
    "sayAr": "نستعمل العدسة المكبرة للملاحظة، والمحرار لقياس درجة الحرارة، والبوصلة لتحديد الاتجاه، وآلة التصوير، وأكياسا للعينات.",
    "img": [
     {
      "f": "Magnifying glass2.jpg",
      "cap": "La loupe",
      "capAr": "العدسة المكبرة",
      "by": "Heptagon",
      "lic": "Domaine public"
     },
     {
      "f": "CelsiusKelvinThermometer.jpg",
      "cap": "Le thermomètre",
      "capAr": "المحرار",
      "by": "Martinvl",
      "lic": "CC BY-SA 3.0"
     },
     {
      "f": "Plastic-compass.jpg",
      "cap": "La boussole",
      "capAr": "البوصلة",
      "by": "Evan-Amos",
      "lic": "Domaine public"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "Loupe",
       "observer",
       "#7B5CF0"
      ],
      [
       "Thermomètre",
       "température",
       "#EF6C3A"
      ],
      [
       "Boussole",
       "orientation",
       "#2F7FE0"
      ]
     ]
    },
    "ar": [
     [
      "loupe",
      "العدسة المكبرة"
     ],
     [
      "thermomètre",
      "المحرار"
     ],
     [
      "boussole",
      "البوصلة"
     ]
    ]
   },
   {
    "t": "Un exemple au Maroc",
    "say": "Dans la forêt de la Maâmora, près de Rabat, on trouve le chêne-liège, des champignons, des oiseaux et beaucoup d'insectes. Sous les arbres, il y a moins de lumière et plus d'humidité.",
    "sayAr": "في غابة المعمورة قرب الرباط نجد شجرة الفلين والفطريات والطيور وكثيرا من الحشرات. تحت الأشجار يقل الضوء وتزيد الرطوبة.",
    "img": [
     {
      "f": "Quercus suber Maamora Forest Morokko.jpg",
      "cap": "Le chêne-liège de la Maâmora",
      "capAr": "شجرة الفلين في المعمورة",
      "by": "Wikimedia Commons",
      "lic": "CC BY-SA 3.0"
     }
    ],
    "vis": {
     "k": "big",
     "v": "🌳 Maâmora"
    }
   },
   {
    "t": "Respecter le milieu",
    "say": "Pendant une sortie, on ne casse rien, on ne dérange pas les animaux, et on ne laisse aucun déchet.",
    "sayAr": "أثناء الخرجة لا نكسر شيئا، ولا نزعج الحيوانات، ولا نترك أي نفايات.",
    "vis": {
     "k": "big",
     "v": "🌍 ♥"
    }
   }
  ],
  "ess": [
   "Un milieu naturel est un lieu où vivent des êtres vivants.",
   "Les facteurs biotiques sont les êtres vivants : animaux, plantes, champignons.",
   "Les facteurs abiotiques sont non vivants : eau, sol, lumière, température.",
   "Sur le terrain, on observe, on mesure, on prélève et on note.",
   "On respecte toujours le milieu qu'on visite."
  ],
  "lex": [
   [
    "milieu naturel",
    "الوسط الطبيعي"
   ],
   [
    "êtres vivants",
    "الكائنات الحية"
   ],
   [
    "échantillon",
    "عينة"
   ],
   [
    "loupe",
    "العدسة المكبرة"
   ],
   [
    "thermomètre",
    "المحرار"
   ],
   [
    "boussole",
    "البوصلة"
   ]
  ],
  "essAr": [
   "الوسط الطبيعي مكان تعيش فيه الكائنات الحية.",
   "العوامل الحية هي الكائنات الحية: الحيوانات والنباتات والفطريات.",
   "العوامل غير الحية: الماء والتربة والضوء ودرجة الحرارة.",
   "في الميدان: نلاحظ، ونقيس، ونأخذ عينات، ونسجل.",
   "نحترم دائما الوسط الذي نزوره."
  ],
  "song": [
   "Dans la forêt je marche, ma loupe à la main,",
   "J'observe les insectes, les plantes du chemin,",
   "Je mesure, je note, la lumière et le sol,",
   "Et je laisse le milieu propre, c'est mon rôle !"
  ],
  "games": [
   {
    "type": "sort",
    "title": "Vivant ou non vivant ?",
    "bins": [
     "Biotique (vivant)",
     "Abiotique (non vivant)"
    ],
    "items": [
     [
      "Un oiseau",
      0
     ],
     [
      "La lumière",
      1
     ],
     [
      "Un chêne",
      0
     ],
     [
      "Le sol",
      1
     ],
     [
      "Un champignon",
      0
     ],
     [
      "La température",
      1
     ]
    ]
   },
   {
    "type": "match",
    "title": "L'outil et son rôle",
    "pairs": [
     [
      "Loupe",
      "Observer"
     ],
     [
      "Thermomètre",
      "Mesurer la température"
     ],
     [
      "Boussole",
      "S'orienter"
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "Le milieu",
    "q": "Lequel est un milieu naturel ?",
    "qAr": "أي واحد وسط طبيعي؟",
    "chAr": [
     "بركة",
     "دفتر",
     "سيارة"
    ],
    "ch": [
     "Une mare",
     "Un cahier",
     "Une voiture"
    ],
    "a": 0
   },
   {
    "type": "order",
    "title": "La sortie",
    "q": "Remets les étapes de la sortie dans l'ordre.",
    "items": [
     "Observer",
     "Mesurer",
     "Prélever",
     "Noter"
    ]
   },
   {
    "type": "match",
    "title": "Français ↔ arabe",
    "pairs": [
     [
      "loupe",
      "العدسة المكبرة"
     ],
     [
      "boussole",
      "البوصلة"
     ],
     [
      "échantillon",
      "عينة"
     ]
    ]
   }
  ],
  "exam": [
   {
    "q": "Un milieu naturel, c'est…",
    "qAr": "الوسط الطبيعي هو…",
    "chAr": [
     "مكان تعيش فيه الكائنات الحية",
     "متجر",
     "قاعة الدرس"
    ],
    "ch": [
     "un lieu où vivent des êtres vivants",
     "un magasin",
     "une salle de classe"
    ],
    "a": 0
   },
   {
    "q": "La lumière est un facteur…",
    "qAr": "الضوء عامل…",
    "chAr": [
     "حي",
     "غير حي"
    ],
    "ch": [
     "biotique",
     "abiotique"
    ],
    "a": 1
   },
   {
    "q": "Un champignon est un être vivant.",
    "qAr": "الفطر كائن حي.",
    "vf": true,
    "a": 0
   },
   {
    "q": "Pour mesurer la température, on utilise…",
    "qAr": "لقياس درجة الحرارة نستعمل…",
    "chAr": [
     "البوصلة",
     "المحرار",
     "العدسة المكبرة"
    ],
    "ch": [
     "une boussole",
     "un thermomètre",
     "une loupe"
    ],
    "a": 1
   },
   {
    "q": "La boussole sert à…",
    "qAr": "تستعمل البوصلة لـ…",
    "chAr": [
     "تحديد الاتجاه",
     "التكبير",
     "الوزن"
    ],
    "ch": [
     "s'orienter",
     "grossir",
     "peser"
    ],
    "a": 0
   },
   {
    "q": "Le sol est un facteur biotique.",
    "qAr": "التربة عامل حي.",
    "vf": true,
    "a": 1
   },
   {
    "q": "Le chêne-liège pousse dans la forêt de la…",
    "qAr": "شجرة الفلين تنمو في غابة…",
    "chAr": [
     "المعمورة",
     "الصحراء",
     "البحر المتوسط"
    ],
    "ch": [
     "Maâmora",
     "Sahara",
     "Méditerranée"
    ],
    "a": 0
   },
   {
    "q": "« المحرار » veut dire…",
    "qAr": "ماذا تعني كلمة « المحرار » بالفرنسية؟",
    "ch": [
     "loupe",
     "thermomètre",
     "boussole"
    ],
    "a": 1
   },
   {
    "q": "Pendant une sortie, on peut laisser ses déchets.",
    "qAr": "أثناء الخرجة يمكننا ترك النفايات.",
    "vf": true,
    "a": 1
   },
   {
    "q": "Un petit morceau qu'on ramène pour l'étudier s'appelle…",
    "qAr": "قطعة صغيرة نأخذها لدراستها تسمى…",
    "chAr": [
     "عينة",
     "وسط",
     "عامل"
    ],
    "ch": [
     "un échantillon",
     "un milieu",
     "un facteur"
    ],
    "a": 0
   }
  ],
  "words": [
   [
    "la forêt",
    "الغابة",
    "🌳"
   ],
   [
    "la mare",
    "البركة",
    "🐸"
   ],
   [
    "la loupe",
    "العدسة المكبرة",
    "🔍"
   ],
   [
    "le thermomètre",
    "المحرار",
    "🌡️"
   ],
   [
    "la boussole",
    "البوصلة",
    "🧭"
   ],
   [
    "un échantillon",
    "عينة",
    "🧪"
   ]
  ]
 },
 "islamique-4": {
  "title": "حق الله: التوحيد والإخلاص",
  "video": [
   {
    "t": "حق الله على العباد",
    "say": "من أعظم الحقوق حق الله تعالى على عباده: أن يعبدوه ولا يشركوا به شيئا.",
    "vis": {
     "k": "big",
     "v": "حق الله"
    }
   },
   {
    "t": "التوحيد",
    "say": "التوحيد هو الإيمان بأن الله واحد لا شريك له. قال الله تعالى: قل هو الله أحد.",
    "img": [
     {
      "f": "Allah Kufic Calligraphy.png",
      "cap": "Calligraphie coufique",
      "capAr": "خط كوفي",
      "by": "كلية الفنون والعمارة",
      "lic": "CC0"
     }
    ],
    "vis": {
     "k": "big",
     "v": "قُلْ هُوَ اللَّهُ أَحَدٌ"
    }
   },
   {
    "t": "الإخلاص",
    "say": "الإخلاص هو أن يقوم المسلم بأعماله ابتغاء وجه الله، لا من أجل مدح الناس.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "العمل",
       "لله وحده",
       "#4C5BD4"
      ],
      [
       "لا",
       "من أجل المدح",
       "#9AA6BA"
      ]
     ]
    }
   },
   {
    "t": "أمثلة من حياتي",
    "say": "أصلي لله. أساعد أمي دون أن أنتظر المدح. أجتهد في دراستي بنية صادقة.",
    "img": [
     {
      "f": "Sunshine on mosque Hassan II in Casablanca, Morocco - Flickr - Milamber's portfolio.jpg",
      "cap": "La mosquée Hassan II, Casablanca",
      "capAr": "مسجد الحسن الثاني، الدار البيضاء",
      "by": "Milamber's portfolio",
      "lic": "CC BY 2.0"
     }
    ],
    "vis": {
     "k": "cards",
     "v": [
      [
       "الصلاة",
       "لله",
       "#4C5BD4"
      ],
      [
       "مساعدة الأم",
       "بلا مدح",
       "#2E9E62"
      ],
      [
       "الدراسة",
       "بنية صادقة",
       "#C99400"
      ]
     ]
    }
   },
   {
    "t": "ثمرات التوحيد والإخلاص",
    "say": "التوحيد والإخلاص يمنحان القلب الطمأنينة، ويجعلان الأعمال مقبولة، ويعلمان حب الخير للناس.",
    "vis": {
     "k": "steps",
     "v": [
      "طمأنينة",
      "قبول العمل",
      "حب الخير"
     ]
    }
   }
  ],
  "ess": [
   "حق الله على العباد: أن يعبدوه ولا يشركوا به شيئا.",
   "التوحيد: الإيمان بأن الله واحد لا شريك له.",
   "الإخلاص: أن أعمل لله، لا من أجل مدح الناس.",
   "من أمثلة الإخلاص: مساعدة الوالدين دون انتظار المدح.",
   "من ثمراتهما: طمأنينة القلب وقبول الأعمال."
  ],
  "song": [
   "اللهُ واحدٌ أحد، لا شريكَ له أبدا،",
   "أعملُ الخيرَ لله، لا أنتظرُ مدحَ أحدا،",
   "أُخلصُ في صلاتي، وفي درسي مجتهدا،",
   "فيطمئنُّ قلبي، ويزدادُ نورا وهدى!"
  ],
  "games": [
   {
    "type": "match",
    "title": "صل بين المفهوم وتعريفه",
    "pairs": [
     [
      "التوحيد",
      "الله واحد لا شريك له"
     ],
     [
      "الإخلاص",
      "العمل لله وحده"
     ]
    ]
   },
   {
    "type": "sort",
    "title": "إخلاص أم لا؟",
    "bins": [
     "عمل بإخلاص",
     "ليس إخلاصا"
    ],
    "items": [
     [
      "أساعد أمي دون انتظار المدح",
      0
     ],
     [
      "أساعد فقط ليمدحني الناس",
      1
     ],
     [
      "أجتهد في دراستي بنية صادقة",
      0
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "الآية",
    "q": "أكمل: قُلْ هُوَ اللَّهُ …",
    "ch": [
     "أَحَدٌ",
     "الصَّمَدُ",
     "كَبِيرٌ"
    ],
    "a": 0
   }
  ],
  "exam": [
   {
    "q": "التوحيد هو الإيمان بأن الله…",
    "ch": [
     "واحد لا شريك له",
     "له شركاء"
    ],
    "a": 0
   },
   {
    "q": "الإخلاص هو العمل…",
    "ch": [
     "لله وحده",
     "من أجل مدح الناس"
    ],
    "a": 0
   },
   {
    "q": "من ثمرات الإخلاص طمأنينة القلب.",
    "vf": true,
    "a": 0
   },
   {
    "q": "أساعد صديقتي فقط ليمدحني الناس: هذا إخلاص.",
    "vf": true,
    "a": 1
   },
   {
    "q": "حق الله على العباد أن…",
    "ch": [
     "يعبدوه ولا يشركوا به شيئا",
     "يناموا كثيرا"
    ],
    "a": 0
   },
   {
    "q": "« قل هو الله أحد » آية تدل على…",
    "ch": [
     "التوحيد",
     "الصيام"
    ],
    "a": 0
   }
  ],
  "words": [
   [
    "التوحيد",
    "l'unicité de Dieu",
    "☝️"
   ],
   [
    "الإخلاص",
    "la sincérité",
    "💚"
   ],
   [
    "العبادة",
    "l'adoration",
    "🤲"
   ],
   [
    "الطمأنينة",
    "la sérénité",
    "😌"
   ]
  ]
 },
 "svt-0": {
  "worlds": [
   "peau",
   "foret"
  ],
  "title": "Introduction aux SVT",
  "video": [
   {
    "t": "Les SVT, c'est quoi ?",
    "say": "SVT veut dire Sciences de la Vie et de la Terre. On étudie les êtres vivants et notre planète, la Terre.",
    "sayAr": "SVT تعني علوم الحياة والأرض. ندرس الكائنات الحية وكوكبنا الأرض.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "Vie",
       "animaux, plantes, humains",
       "#2E9E62"
      ],
      [
       "Terre",
       "roches, eau, sol",
       "#A86B32"
      ]
     ]
    }
   },
   {
    "t": "Vivant ou non vivant ?",
    "say": "Un être vivant naît, se nourrit, respire, grandit, se reproduit et meurt. Un caillou ne fait rien de tout ça : il n'est pas vivant.",
    "sayAr": "الكائن الحي يولد، ويتغذى، ويتنفس، وينمو، ويتكاثر، ويموت. الحجر لا يفعل شيئا من هذا: إنه ليس حيا.",
    "vis": {
     "k": "steps",
     "v": [
      "Naître",
      "Grandir",
      "Se reproduire",
      "Mourir"
     ]
    },
    "ar": [
     [
      "être vivant",
      "كائن حي"
     ]
    ]
   },
   {
    "t": "La démarche scientifique",
    "say": "Le scientifique observe, pose une question, propose une hypothèse, fait une expérience, puis tire une conclusion.",
    "sayAr": "العالم يلاحظ، ويطرح سؤالا، ويقترح فرضية، ويقوم بتجربة، ثم يستنتج خلاصة.",
    "vis": {
     "k": "steps",
     "v": [
      "Observer",
      "Question",
      "Hypothèse",
      "Expérience",
      "Conclusion"
     ]
    },
    "ar": [
     [
      "hypothèse",
      "فرضية"
     ],
     [
      "expérience",
      "تجربة"
     ]
    ]
   },
   {
    "t": "Les outils du laboratoire",
    "say": "Au laboratoire, on utilise la loupe, le microscope pour voir les toutes petites choses, et des tubes à essai.",
    "sayAr": "في المختبر نستعمل العدسة المكبرة، والمجهر لرؤية الأشياء الصغيرة جدا، وأنابيب الاختبار.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "Loupe",
       "grossit un peu",
       "#7B5CF0"
      ],
      [
       "Microscope",
       "grossit beaucoup",
       "#2F7FE0"
      ],
      [
       "Tube à essai",
       "pour les expériences",
       "#EF6C3A"
      ]
     ]
    },
    "ar": [
     [
      "microscope",
      "المجهر"
     ]
    ],
    "img": [
     {
      "f": "Magnifying glass2.jpg",
      "cap": "La loupe",
      "capAr": "العدسة المكبرة",
      "by": "Heptagon",
      "lic": "Domaine public"
     }
    ]
   },
   {
    "t": "Le dessin d'observation",
    "say": "On dessine ce qu'on observe, au crayon, avec un titre et des légendes. C'est le dessin d'observation.",
    "sayAr": "نرسم ما نلاحظه بقلم الرصاص، مع عنوان وتسميات. هذا هو رسم الملاحظة.",
    "vis": {
     "k": "big",
     "v": "✏️ Titre + légendes"
    }
   },
   {
    "t": "La sécurité",
    "say": "Au laboratoire, on écoute le professeur, on ne goûte rien et on range son matériel.",
    "sayAr": "في المختبر نستمع للأستاذ، ولا نتذوق أي شيء، ونرتب أدواتنا.",
    "vis": {
     "k": "big",
     "v": "🥽 Sécurité"
    }
   }
  ],
  "ess": [
   "SVT : Sciences de la Vie et de la Terre.",
   "Un être vivant naît, se nourrit, respire, grandit, se reproduit et meurt.",
   "La démarche : observer, questionner, supposer, expérimenter, conclure.",
   "Le microscope permet de voir les très petites choses.",
   "Le dessin d'observation a un titre et des légendes."
  ],
  "essAr": [
   "علوم الحياة والأرض.",
   "الكائن الحي يولد ويتغذى ويتنفس وينمو ويتكاثر ويموت.",
   "المنهجية: ملاحظة، سؤال، فرضية، تجربة، خلاصة.",
   "المجهر يسمح برؤية الأشياء الصغيرة جدا.",
   "رسم الملاحظة له عنوان وتسميات."
  ],
  "lex": [
   [
    "être vivant",
    "كائن حي"
   ],
   [
    "hypothèse",
    "فرضية"
   ],
   [
    "expérience",
    "تجربة"
   ],
   [
    "microscope",
    "المجهر"
   ],
   [
    "observation",
    "ملاحظة"
   ]
  ],
  "words": [
   [
    "le microscope",
    "المجهر",
    "🔬"
   ],
   [
    "la loupe",
    "العدسة المكبرة",
    "🔍"
   ],
   [
    "l'expérience",
    "التجربة",
    "🧪"
   ],
   [
    "la plante",
    "النبتة",
    "🌱"
   ],
   [
    "l'animal",
    "الحيوان",
    "🐾"
   ],
   [
    "la roche",
    "الصخرة",
    "🪨"
   ]
  ],
  "song": [
   "J'observe, je me pose une question,",
   "Je propose une hypothèse, c'est ma réflexion,",
   "Je fais une expérience, je regarde bien,",
   "Et je conclus : je serai une scientifique demain !"
  ],
  "games": [
   {
    "type": "sort",
    "title": "Vivant ou non vivant ?",
    "bins": [
     "Vivant",
     "Non vivant"
    ],
    "items": [
     [
      "Un chat",
      0
     ],
     [
      "Un caillou",
      1
     ],
     [
      "Une fleur",
      0
     ],
     [
      "L'eau",
      1
     ],
     [
      "Un champignon",
      0
     ]
    ]
   },
   {
    "type": "order",
    "title": "La démarche scientifique",
    "q": "Remets les étapes dans l'ordre.",
    "items": [
     "Observer",
     "Poser une question",
     "Proposer une hypothèse",
     "Faire une expérience",
     "Conclure"
    ]
   },
   {
    "type": "quiz",
    "title": "Le bon outil",
    "q": "Pour voir une cellule, on utilise…",
    "qAr": "لرؤية خلية نستعمل…",
    "ch": [
     "un microscope",
     "une règle",
     "une boussole"
    ],
    "chAr": [
     "مجهرا",
     "مسطرة",
     "بوصلة"
    ],
    "a": 0
   },
   {
    "type": "match",
    "title": "Français ↔ arabe",
    "pairs": [
     [
      "hypothèse",
      "فرضية"
     ],
     [
      "expérience",
      "تجربة"
     ],
     [
      "microscope",
      "المجهر"
     ],
     [
      "être vivant",
      "كائن حي"
     ]
    ]
   }
  ],
  "exam": [
   {
    "q": "SVT veut dire…",
    "qAr": "SVT تعني…",
    "ch": [
     "Sciences de la Vie et de la Terre",
     "Sport, Voyage, Télé"
    ],
    "chAr": [
     "علوم الحياة والأرض",
     "رياضة، سفر، تلفاز"
    ],
    "a": 0
   },
   {
    "q": "Un caillou est un être vivant.",
    "qAr": "الحجر كائن حي.",
    "vf": true,
    "a": 1
   },
   {
    "q": "Un être vivant…",
    "qAr": "الكائن الحي…",
    "ch": [
     "grandit et se reproduit",
     "ne change jamais"
    ],
    "chAr": [
     "ينمو ويتكاثر",
     "لا يتغير أبدا"
    ],
    "a": 0
   },
   {
    "q": "La première étape de la démarche scientifique, c'est…",
    "qAr": "أول مرحلة في المنهجية العلمية هي…",
    "ch": [
     "observer",
     "conclure",
     "expérimenter"
    ],
    "chAr": [
     "الملاحظة",
     "الخلاصة",
     "التجربة"
    ],
    "a": 0
   },
   {
    "q": "Une hypothèse, c'est…",
    "qAr": "الفرضية هي…",
    "ch": [
     "une réponse possible à vérifier",
     "un outil"
    ],
    "chAr": [
     "جواب ممكن يجب التحقق منه",
     "أداة"
    ],
    "a": 0
   },
   {
    "q": "Le microscope grossit plus que la loupe.",
    "qAr": "المجهر يكبر أكثر من العدسة المكبرة.",
    "vf": true,
    "a": 0
   },
   {
    "q": "Au laboratoire, on peut goûter les produits.",
    "qAr": "في المختبر يمكننا تذوق المواد.",
    "vf": true,
    "a": 1
   },
   {
    "q": "Un dessin d'observation a…",
    "qAr": "رسم الملاحظة له…",
    "ch": [
     "un titre et des légendes",
     "beaucoup de couleurs"
    ],
    "chAr": [
     "عنوان وتسميات",
     "ألوان كثيرة"
    ],
    "a": 0
   }
  ]
 },
 "info-1": {
  "worlds": [
   "ordi"
  ],
  "title": "Le système d'exploitation",
  "video": [
   {
    "t": "C'est quoi ?",
    "say": "Le système d'exploitation est le logiciel principal de l'ordinateur. Il fait marcher l'ordinateur et les autres logiciels. Exemples : Windows, Linux, Android.",
    "sayAr": "نظام التشغيل هو البرنام الرئيسي للحاسوب. يشغل الحاسوب والبرامج الأخرى. أمثلة: ويندوز، لينكس، أندرويد.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "Windows",
       "ordinateur",
       "#2F7FE0"
      ],
      [
       "Linux",
       "ordinateur",
       "#C99400"
      ],
      [
       "Android",
       "téléphone",
       "#2E9E62"
      ]
     ]
    },
    "ar": [
     [
      "système d'exploitation",
      "نظام التشغيل"
     ]
    ]
   },
   {
    "t": "Le bureau",
    "say": "Quand l'ordinateur démarre, on voit le bureau : le fond d'écran, les icônes et la barre des tâches.",
    "sayAr": "عندما يشتغل الحاسوب نرى سطح المكتب: الخلفية، والأيقونات، وشريط المهام.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "Fond d'écran",
       "l'image derrière",
       "#7B5CF0"
      ],
      [
       "Icônes",
       "les petits dessins",
       "#DB3F8D"
      ],
      [
       "Barre des tâches",
       "en bas",
       "#2F7FE0"
      ]
     ]
    },
    "ar": [
     [
      "bureau",
      "سطح المكتب"
     ],
     [
      "icône",
      "أيقونة"
     ]
    ],
    "img": [
     {
      "f": "Computer monitor.jpg",
      "cap": "L'écran affiche le bureau",
      "capAr": "الشاشة تعرض سطح المكتب",
      "by": "Zzubnik",
      "lic": "Domaine public"
     }
    ]
   },
   {
    "t": "Les fenêtres",
    "say": "Chaque programme s'ouvre dans une fenêtre. En haut à droite, il y a trois boutons : réduire, agrandir et fermer.",
    "sayAr": "كل برنامج يفتح في نافذة. في الأعلى على اليمين توجد ثلاثة أزرار: تصغير، وتكبير، وإغلاق.",
    "vis": {
     "k": "steps",
     "v": [
      "— réduire",
      "☐ agrandir",
      "✕ fermer"
     ]
    },
    "ar": [
     [
      "fenêtre",
      "نافذة"
     ]
    ]
   },
   {
    "t": "Fichiers et dossiers",
    "say": "Un fichier contient une information : un texte, une image, un son. Un dossier est comme une boîte qui range les fichiers.",
    "sayAr": "الملف يحتوي على معلومة: نص، أو صورة، أو صوت. والمجلد مثل علبة نرتب فيها الملفات.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "📄 Fichier",
       "texte, image, son",
       "#EF6C3A"
      ],
      [
       "📁 Dossier",
       "une boîte qui range",
       "#C99400"
      ]
     ]
    },
    "ar": [
     [
      "fichier",
      "ملف"
     ],
     [
      "dossier",
      "مجلد"
     ]
    ]
   },
   {
    "t": "Éteindre l'ordinateur",
    "say": "Pour éteindre, on ne débranche pas ! On clique sur Démarrer, puis sur Arrêter.",
    "sayAr": "لإطفاء الحاسوب لا ننزع القابس! ننقر على ابدأ، ثم على إيقاف التشغيل.",
    "vis": {
     "k": "steps",
     "v": [
      "Démarrer",
      "Arrêter",
      "Écran noir"
     ]
    }
   }
  ],
  "ess": [
   "Le système d'exploitation fait marcher l'ordinateur (Windows, Linux, Android).",
   "Le bureau : fond d'écran, icônes, barre des tâches.",
   "Une fenêtre a trois boutons : réduire, agrandir, fermer.",
   "Un fichier contient une information ; un dossier range les fichiers.",
   "Pour éteindre : Démarrer, puis Arrêter."
  ],
  "essAr": [
   "نظام التشغيل يشغل الحاسوب (ويندوز، لينكس، أندرويد).",
   "سطح المكتب: الخلفية، الأيقونات، شريط المهام.",
   "للنافذة ثلاثة أزرار: تصغير، تكبير، إغلاق.",
   "الملف يحتوي على معلومة، والمجلد يرتب الملفات.",
   "للإطفاء: ابدأ ثم إيقاف التشغيل."
  ],
  "lex": [
   [
    "système d'exploitation",
    "نظام التشغيل"
   ],
   [
    "bureau",
    "سطح المكتب"
   ],
   [
    "icône",
    "أيقونة"
   ],
   [
    "fenêtre",
    "نافذة"
   ],
   [
    "fichier",
    "ملف"
   ],
   [
    "dossier",
    "مجلد"
   ]
  ],
  "words": [
   [
    "la fenêtre",
    "النافذة",
    "🪟"
   ],
   [
    "le dossier",
    "المجلد",
    "📁"
   ],
   [
    "le fichier",
    "الملف",
    "📄"
   ],
   [
    "l'icône",
    "الأيقونة",
    "🔷"
   ],
   [
    "fermer",
    "إغلاق",
    "✖️"
   ],
   [
    "le bureau",
    "سطح المكتب",
    "🖥️"
   ]
  ],
  "song": [
   "J'allume l'ordinateur, voici le bureau,",
   "Des icônes, une barre, un fond d'écran tout beau,",
   "J'ouvre une fenêtre, je range mes fichiers,",
   "Dans un joli dossier, tout est bien rangé !"
  ],
  "games": [
   {
    "type": "quiz",
    "title": "Le système",
    "q": "Lequel est un système d'exploitation ?",
    "qAr": "أيها نظام تشغيل؟",
    "ch": [
     "Windows",
     "Le clavier",
     "Une image"
    ],
    "chAr": [
     "ويندوز",
     "لوحة المفاتيح",
     "صورة"
    ],
    "a": 0
   },
   {
    "type": "match",
    "title": "Les boutons de la fenêtre",
    "pairs": [
     [
      "—",
      "Réduire"
     ],
     [
      "☐",
      "Agrandir"
     ],
     [
      "✕",
      "Fermer"
     ]
    ]
   },
   {
    "type": "sort",
    "title": "Fichier ou dossier ?",
    "bins": [
     "Fichier",
     "Dossier"
    ],
    "items": [
     [
      "Une photo",
      0
     ],
     [
      "Le dossier École",
      1
     ],
     [
      "Une chanson",
      0
     ],
     [
      "Mes documents",
      1
     ]
    ]
   },
   {
    "type": "order",
    "title": "Éteindre l'ordinateur",
    "q": "Remets dans l'ordre.",
    "items": [
     "Cliquer sur Démarrer",
     "Cliquer sur Arrêter",
     "L'écran devient noir"
    ]
   }
  ],
  "exam": [
   {
    "q": "Windows est…",
    "qAr": "ويندوز هو…",
    "ch": [
     "un système d'exploitation",
     "un périphérique"
    ],
    "chAr": [
     "نظام تشغيل",
     "ملحق"
    ],
    "a": 0
   },
   {
    "q": "Le bouton ✕ sert à…",
    "qAr": "الزر ✕ يستعمل لـ…",
    "ch": [
     "fermer la fenêtre",
     "agrandir la fenêtre"
    ],
    "chAr": [
     "إغلاق النافذة",
     "تكبير النافذة"
    ],
    "a": 0
   },
   {
    "q": "Un dossier range des fichiers.",
    "qAr": "المجلد يرتب الملفات.",
    "vf": true,
    "a": 0
   },
   {
    "q": "Pour éteindre l'ordinateur, on débranche le câble.",
    "qAr": "لإطفاء الحاسوب ننزع الكابل.",
    "vf": true,
    "a": 1
   },
   {
    "q": "Sur le bureau, on trouve…",
    "qAr": "على سطح المكتب نجد…",
    "ch": [
     "des icônes",
     "des cahiers"
    ],
    "chAr": [
     "أيقونات",
     "دفاتر"
    ],
    "a": 0
   },
   {
    "q": "Une photo est…",
    "qAr": "الصورة هي…",
    "ch": [
     "un fichier",
     "un dossier"
    ],
    "chAr": [
     "ملف",
     "مجلد"
    ],
    "a": 0
   },
   {
    "q": "Android est un système d'exploitation.",
    "qAr": "أندرويد نظام تشغيل.",
    "vf": true,
    "a": 0
   },
   {
    "q": "Le bouton — sert à…",
    "qAr": "الزر — يستعمل لـ…",
    "ch": [
     "réduire la fenêtre",
     "éteindre l'ordinateur"
    ],
    "chAr": [
     "تصغير النافذة",
     "إطفاء الحاسوب"
    ],
    "a": 0
   }
  ]
 },
 "anglais-1": {
  "title": "Unit 2 : They're happy now!",
  "essLang": "fr",
  "video": [
   {
    "t": "Feelings",
    "say": "Hello! Let's learn feelings. Happy. Sad. Angry. Tired. Scared. Hungry.",
    "fr": "Les sentiments.",
    "sayAr": "مرحبا! لنتعلم المشاعر: سعيد، حزين، غاضب، متعب، خائف، جائع.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "happy",
       "😊 content",
       "#C99400"
      ],
      [
       "sad",
       "😢 triste",
       "#2F7FE0"
      ],
      [
       "angry",
       "😠 en colère",
       "#D64545"
      ],
      [
       "tired",
       "😴 fatigué",
       "#7B5CF0"
      ]
     ]
    }
   },
   {
    "t": "I'm… / You're…",
    "say": "I am happy. I'm happy. You are sad. You're sad.",
    "fr": "I'm = je suis. You're = tu es.",
    "sayAr": "I'm تعني أنا. You're تعني أنت. I'm happy تعني: أنا سعيد.",
    "vis": {
     "k": "big",
     "v": "I'm happy 😊"
    }
   },
   {
    "t": "We're / They're",
    "say": "We are tired. We're tired. They are hungry. They're hungry.",
    "fr": "We're = nous sommes. They're = ils sont.",
    "sayAr": "We're تعني نحن. They're تعني هم. They're hungry تعني: هم جائعون.",
    "vis": {
     "k": "big",
     "v": "They're hungry 🍔"
    }
   },
   {
    "t": "Questions",
    "say": "Are you happy? Yes, I am. Are they sad? No, they aren't.",
    "fr": "Pour poser une question, on met Are au début.",
    "sayAr": "لطرح سؤال نضع Are في البداية. Are you happy تعني: هل أنت سعيد؟",
    "vis": {
     "k": "big",
     "v": "Are you happy? 🤔"
    }
   },
   {
    "t": "Sounds : ch, sh, th",
    "say": "Ch, like chair. Sh, like ship. Th, like three.",
    "fr": "Trois sons écrits avec deux lettres.",
    "sayAr": "ثلاثة أصوات بحرفين: ch مثل chair، و sh مثل ship، و th مثل three.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "ch",
       "chair 🪑",
       "#DB3F8D"
      ],
      [
       "sh",
       "ship 🚢",
       "#2F7FE0"
      ],
      [
       "th",
       "three 3️⃣",
       "#2E9E62"
      ]
     ]
    }
   }
  ],
  "ess": [
   "happy = content, sad = triste, angry = en colère, tired = fatigué.",
   "I'm = je suis ; you're = tu es.",
   "we're = nous sommes ; they're = ils sont.",
   "Question : Are you happy? — Yes, I am. / No, I'm not.",
   "Les sons : ch (chair), sh (ship), th (three)."
  ],
  "essAr": [
   "happy سعيد، sad حزين، angry غاضب، tired متعب.",
   "I'm أنا، you're أنت.",
   "we're نحن، they're هم.",
   "سؤال: Are you happy? هل أنت سعيد؟",
   "الأصوات: ch و sh و th."
  ],
  "words": [
   [
    "happy",
    "سعيد",
    "😊"
   ],
   [
    "sad",
    "حزين",
    "😢"
   ],
   [
    "angry",
    "غاضب",
    "😠"
   ],
   [
    "tired",
    "متعب",
    "😴"
   ],
   [
    "scared",
    "خائف",
    "😨"
   ],
   [
    "hungry",
    "جائع",
    "🍔"
   ]
  ],
  "song": [
   "I'm happy, happy, clap your hands with me,",
   "You're sad, sad, come and smile with me,",
   "We're tired, tired, let's go to bed,",
   "They're hungry, hungry, give them some bread!"
  ],
  "games": [
   {
    "type": "match",
    "title": "Emoji ↔ word",
    "pairs": [
     [
      "😊",
      "happy"
     ],
     [
      "😢",
      "sad"
     ],
     [
      "😠",
      "angry"
     ],
     [
      "😴",
      "tired"
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "We're or they're?",
    "q": "___ happy. (nous)",
    "qAr": "نحن سعداء.",
    "ch": [
     "We're",
     "They're",
     "I'm"
    ],
    "a": 0
   },
   {
    "type": "quiz",
    "title": "Short answer",
    "q": "Are you happy? — Yes, I ___.",
    "qAr": "هل أنت سعيد؟ نعم، أنا…",
    "ch": [
     "am",
     "is",
     "are"
    ],
    "a": 0
   },
   {
    "type": "sort",
    "title": "sh or ch?",
    "bins": [
     "sh",
     "ch"
    ],
    "items": [
     [
      "ship",
      0
     ],
     [
      "chair",
      1
     ],
     [
      "shoe",
      0
     ],
     [
      "cheese",
      1
     ]
    ]
   }
  ],
  "exam": [
   {
    "q": "« sad » veut dire…",
    "qAr": "sad تعني…",
    "ch": [
     "triste",
     "content",
     "fatigué"
    ],
    "chAr": [
     "حزين",
     "سعيد",
     "متعب"
    ],
    "a": 0
   },
   {
    "q": "« They're » veut dire…",
    "qAr": "They're تعني…",
    "ch": [
     "ils sont",
     "nous sommes",
     "je suis"
    ],
    "chAr": [
     "هم",
     "نحن",
     "أنا"
    ],
    "a": 0
   },
   {
    "q": "I ___ happy.",
    "qAr": "أنا سعيد.",
    "ch": [
     "am",
     "are",
     "is"
    ],
    "a": 0
   },
   {
    "q": "« tired » veut dire fatigué.",
    "qAr": "tired تعني متعب.",
    "vf": true,
    "a": 0
   },
   {
    "q": "Are they hungry? — Yes, they ___.",
    "qAr": "هل هم جائعون؟ نعم…",
    "ch": [
     "are",
     "am",
     "is"
    ],
    "a": 0
   },
   {
    "q": "« angry » veut dire…",
    "qAr": "angry تعني…",
    "ch": [
     "en colère",
     "content",
     "affamé"
    ],
    "chAr": [
     "غاضب",
     "سعيد",
     "جائع"
    ],
    "a": 0
   },
   {
    "q": "« ship » commence par le son « ch ».",
    "qAr": "كلمة ship تبدأ بصوت ch.",
    "vf": true,
    "a": 1
   },
   {
    "q": "We're = …",
    "qAr": "We're تعني…",
    "ch": [
     "nous sommes",
     "vous êtes",
     "ils sont"
    ],
    "chAr": [
     "نحن",
     "أنتم",
     "هم"
    ],
    "a": 0
   }
  ]
 },
 "islamique-3": {
  "title": "العبادة غاية الخلق – أركان الإسلام",
  "video": [
   {
    "t": "العبادة غاية الخلق",
    "say": "خلق الله الإنسان ليعبده. قال الله تعالى: وما خلقت الجن والإنس إلا ليعبدون.",
    "vis": {
     "k": "big",
     "v": "العبادة"
    }
   },
   {
    "t": "مفهوم العبادة",
    "say": "العبادة هي كل ما يحبه الله من الأقوال والأفعال: الصلاة، والصدق، ومساعدة الناس، وطلب العلم.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "الصلاة",
       "عبادة",
       "#4C5BD4"
      ],
      [
       "الصدق",
       "عبادة",
       "#2E9E62"
      ],
      [
       "طلب العلم",
       "عبادة",
       "#C99400"
      ]
     ]
    }
   },
   {
    "t": "أركان الإسلام",
    "say": "أركان الإسلام خمسة: الشهادتان، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت لمن استطاع إليه سبيلا.",
    "vis": {
     "k": "steps",
     "v": [
      "الشهادتان",
      "الصلاة",
      "الزكاة",
      "الصوم",
      "الحج"
     ]
    }
   },
   {
    "t": "الشهادتان والصلاة",
    "say": "الشهادتان: أشهد أن لا إله إلا الله وأشهد أن محمدا رسول الله. والصلاة خمس مرات في اليوم.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "الشهادتان",
       "الركن الأول",
       "#4C5BD4"
      ],
      [
       "الصلاة",
       "خمس مرات في اليوم",
       "#2F7FE0"
      ]
     ]
    },
    "img": [
     {
      "f": "Sunshine on mosque Hassan II in Casablanca, Morocco - Flickr - Milamber's portfolio.jpg",
      "cap": "La mosquée Hassan II, Casablanca",
      "capAr": "مسجد الحسن الثاني، الدار البيضاء",
      "by": "Milamber's portfolio",
      "lic": "CC BY 2.0"
     }
    ]
   },
   {
    "t": "الزكاة والصوم والحج",
    "say": "الزكاة جزء من المال يعطى للفقراء. والصوم هو الإمساك عن الأكل والشرب في رمضان من الفجر إلى المغرب. والحج زيارة مكة المكرمة مرة في العمر لمن استطاع.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "الزكاة",
       "مساعدة الفقراء",
       "#2E9E62"
      ],
      [
       "الصوم",
       "شهر رمضان",
       "#C99400"
      ],
      [
       "الحج",
       "مكة المكرمة",
       "#A86B32"
      ]
     ]
    }
   },
   {
    "t": "غايات الأركان",
    "say": "هذه الأركان تقوي الإيمان، وتعلم الصبر، وتنشر التضامن والمحبة بين الناس.",
    "vis": {
     "k": "steps",
     "v": [
      "الإيمان",
      "الصبر",
      "التضامن"
     ]
    }
   }
  ],
  "ess": [
   "خلق الله الإنسان لعبادته.",
   "العبادة كل ما يحبه الله من الأقوال والأفعال.",
   "أركان الإسلام خمسة: الشهادتان، الصلاة، الزكاة، الصوم، الحج.",
   "الصلاة خمس مرات في اليوم، والصوم في رمضان.",
   "الأركان تقوي الإيمان وتنشر التضامن."
  ],
  "words": [
   [
    "الصلاة",
    "la prière",
    "🕌"
   ],
   [
    "الزكاة",
    "l'aumône",
    "🤲"
   ],
   [
    "الصوم",
    "le jeûne",
    "🌙"
   ],
   [
    "الحج",
    "le pèlerinage",
    "🕋"
   ],
   [
    "الشهادتان",
    "les deux témoignages",
    "☝️"
   ]
  ],
  "song": [
   "خمسة أركان، بُني عليها الإسلام،",
   "شهادتان وصلاة، في كل يوم بانتظام،",
   "زكاة وصوم رمضان، وحج البيت الحرام،",
   "أحفظها في قلبي، وأعمل بها على الدوام!"
  ],
  "games": [
   {
    "type": "order",
    "title": "رتب أركان الإسلام",
    "q": "رتب الأركان الخمسة.",
    "items": [
     "الشهادتان",
     "الصلاة",
     "الزكاة",
     "الصوم",
     "الحج"
    ]
   },
   {
    "type": "quiz",
    "title": "العدد",
    "q": "كم عدد أركان الإسلام؟",
    "ch": [
     "خمسة",
     "ثلاثة",
     "سبعة"
    ],
    "a": 0
   },
   {
    "type": "match",
    "title": "صل بين الركن ومعناه",
    "pairs": [
     [
      "الصوم",
      "شهر رمضان"
     ],
     [
      "الزكاة",
      "مساعدة الفقراء"
     ],
     [
      "الحج",
      "مكة المكرمة"
     ],
     [
      "الصلاة",
      "خمس مرات في اليوم"
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "مفهوم العبادة",
    "q": "العبادة هي…",
    "ch": [
     "كل ما يحبه الله من الأقوال والأفعال",
     "الصلاة فقط"
    ],
    "a": 0
   }
  ],
  "exam": [
   {
    "q": "عدد أركان الإسلام…",
    "ch": [
     "خمسة",
     "أربعة",
     "ستة"
    ],
    "a": 0
   },
   {
    "q": "الركن الأول هو…",
    "ch": [
     "الشهادتان",
     "الحج",
     "الصوم"
    ],
    "a": 0
   },
   {
    "q": "الصلاة خمس مرات في اليوم.",
    "vf": true,
    "a": 0
   },
   {
    "q": "الصوم يكون في شهر…",
    "ch": [
     "رمضان",
     "شعبان",
     "محرم"
    ],
    "a": 0
   },
   {
    "q": "الحج واجب على كل شخص حتى لو لم يستطع.",
    "vf": true,
    "a": 1
   },
   {
    "q": "الزكاة جزء من المال يعطى…",
    "ch": [
     "للفقراء",
     "للأغنياء"
    ],
    "a": 0
   }
  ]
 },
 "arabe-1": {
  "title": "مزيد الثلاثي والرباعي ومعاني صيغ الزوائد",
  "video": [
   {
    "t": "الثلاثي المجرد",
    "say": "الفعل الثلاثي المجرد له ثلاثة أحرف أصلية، مثل: كَتَبَ، وخَرَجَ.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "كَتَبَ",
       "فَعَلَ",
       "#0D9488"
      ],
      [
       "خَرَجَ",
       "فَعَلَ",
       "#0D9488"
      ]
     ]
    }
   },
   {
    "t": "المزيد بحرف",
    "say": "نزيد على الثلاثي حرفا واحدا فيصير على وزن: أَفْعَلَ مثل أَخْرَجَ، أو فَعَّلَ مثل كَرَّمَ، أو فاعَلَ مثل شارَكَ.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "أَفْعَلَ",
       "أَخْرَجَ",
       "#EF6C3A"
      ],
      [
       "فَعَّلَ",
       "كَرَّمَ",
       "#EF6C3A"
      ],
      [
       "فاعَلَ",
       "شارَكَ",
       "#EF6C3A"
      ]
     ]
    }
   },
   {
    "t": "المزيد بحرفين",
    "say": "المزيد بحرفين له أوزان، منها: انْفَعَلَ مثل انْكَسَرَ، وافْتَعَلَ مثل اجْتَمَعَ، وتَفَعَّلَ مثل تَعَلَّمَ، وتَفاعَلَ مثل تَشارَكَ.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "انْفَعَلَ",
       "انْكَسَرَ",
       "#2F7FE0"
      ],
      [
       "افْتَعَلَ",
       "اجْتَمَعَ",
       "#2F7FE0"
      ],
      [
       "تَفَعَّلَ",
       "تَعَلَّمَ",
       "#2F7FE0"
      ],
      [
       "تَفاعَلَ",
       "تَشارَكَ",
       "#2F7FE0"
      ]
     ]
    }
   },
   {
    "t": "المزيد بثلاثة أحرف",
    "say": "المزيد بثلاثة أحرف، مثل وزن: اسْتَفْعَلَ، كما في اسْتَخْرَجَ واسْتَغْفَرَ.",
    "vis": {
     "k": "steps",
     "v": [
      "خَرَجَ",
      "اسْتَفْعَلَ",
      "اسْتَخْرَجَ"
     ]
    }
   },
   {
    "t": "الرباعي",
    "say": "الرباعي المجرد له أربعة أحرف أصلية، على وزن فَعْلَلَ مثل دَحْرَجَ. والرباعي المزيد بحرف على وزن تَفَعْلَلَ مثل تَدَحْرَجَ.",
    "vis": {
     "k": "steps",
     "v": [
      "دَحْرَجَ",
      "فَعْلَلَ",
      "تَدَحْرَجَ"
     ]
    }
   },
   {
    "t": "معاني الزيادة",
    "say": "للزيادة معان، منها: التعدية في أَخْرَجَ، والمشاركة في شارَكَ وتَشارَكَ، والطلب في اسْتَغْفَرَ أي طلب المغفرة.",
    "vis": {
     "k": "cards",
     "v": [
      [
       "التعدية",
       "أَخْرَجَ",
       "#7B5CF0"
      ],
      [
       "المشاركة",
       "تَشارَكَ",
       "#7B5CF0"
      ],
      [
       "الطلب",
       "اسْتَغْفَرَ",
       "#7B5CF0"
      ]
     ]
    }
   }
  ],
  "ess": [
   "الثلاثي المجرد: ثلاثة أحرف أصلية مثل كَتَبَ.",
   "المزيد بحرف: أَفْعَلَ، فَعَّلَ، فاعَلَ.",
   "المزيد بحرفين: انْفَعَلَ، افْتَعَلَ، تَفَعَّلَ، تَفاعَلَ.",
   "المزيد بثلاثة أحرف: اسْتَفْعَلَ مثل اسْتَخْرَجَ.",
   "الرباعي المجرد فَعْلَلَ (دَحْرَجَ)، والمزيد تَفَعْلَلَ (تَدَحْرَجَ)."
  ],
  "words": [
   [
    "أَخْرَجَ",
    "faire sortir",
    "🚪"
   ],
   [
    "تَعَلَّمَ",
    "apprendre",
    "📚"
   ],
   [
    "اجْتَمَعَ",
    "se réunir",
    "👥"
   ],
   [
    "اسْتَخْرَجَ",
    "extraire",
    "⛏️"
   ],
   [
    "دَحْرَجَ",
    "faire rouler",
    "⚽"
   ]
  ],
  "song": [
   "أَفْعَلَ وفَعَّلَ وفاعَلَ، بحرف واحد نزيد،",
   "انفعل افتعل تفعّل تفاعل، بحرفين من جديد،",
   "واستفعل بثلاثة، استخرج الكنز البعيد،",
   "ودحرج رباعي، وتدحرج للمزيد!"
  ],
  "games": [
   {
    "type": "match",
    "title": "الفعل ووزنه",
    "pairs": [
     [
      "أَخْرَجَ",
      "أَفْعَلَ"
     ],
     [
      "تَعَلَّمَ",
      "تَفَعَّلَ"
     ],
     [
      "اجْتَمَعَ",
      "افْتَعَلَ"
     ],
     [
      "اسْتَخْرَجَ",
      "اسْتَفْعَلَ"
     ]
    ]
   },
   {
    "type": "sort",
    "title": "بحرف أم بحرفين؟",
    "bins": [
     "مزيد بحرف",
     "مزيد بحرفين"
    ],
    "items": [
     [
      "أَكْرَمَ",
      0
     ],
     [
      "انْكَسَرَ",
      1
     ],
     [
      "شارَكَ",
      0
     ],
     [
      "تَعَلَّمَ",
      1
     ],
     [
      "كَرَّمَ",
      0
     ]
    ]
   },
   {
    "type": "quiz",
    "title": "الرباعي",
    "q": "وزن دَحْرَجَ هو…",
    "ch": [
     "فَعْلَلَ",
     "فاعَلَ",
     "أَفْعَلَ"
    ],
    "a": 0
   }
  ],
  "exam": [
   {
    "q": "وزن أَخْرَجَ هو…",
    "ch": [
     "أَفْعَلَ",
     "فَعَّلَ",
     "فاعَلَ"
    ],
    "a": 0
   },
   {
    "q": "اجْتَمَعَ مزيد بـ…",
    "ch": [
     "حرفين",
     "حرف",
     "ثلاثة أحرف"
    ],
    "a": 0
   },
   {
    "q": "اسْتَغْفَرَ تدل على الطلب.",
    "vf": true,
    "a": 0
   },
   {
    "q": "دَحْرَجَ فعل…",
    "ch": [
     "رباعي مجرد",
     "ثلاثي مزيد"
    ],
    "a": 0
   },
   {
    "q": "وزن تَعَلَّمَ هو…",
    "ch": [
     "تَفَعَّلَ",
     "تَفاعَلَ",
     "افْتَعَلَ"
    ],
    "a": 0
   },
   {
    "q": "كَتَبَ فعل مزيد.",
    "vf": true,
    "a": 1
   }
  ]
 }
};
