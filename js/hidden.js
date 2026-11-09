// ===== Cherche et trouve : scènes illustrées =====
// objet : [emoji, français, arabe, anglais, x, y, taille, rotation]
const SVGDEFS=`<defs>
<filter id="hs" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#1b1030" flood-opacity=".32"/></filter>
<filter id="blur6"><feGaussianBlur stdDeviation="6"/></filter>
<linearGradient id="wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c98b58"/><stop offset="1" stop-color="#9c6339"/></linearGradient>
<linearGradient id="woodL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3b083"/><stop offset="1" stop-color="#c48a5a"/></linearGradient>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc4ff"/><stop offset="1" stop-color="#d7efff"/></linearGradient>
<linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".55"/><stop offset=".5" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
<radialGradient id="lampglow"><stop offset="0" stop-color="#fff6c4" stop-opacity=".9"/><stop offset="1" stop-color="#fff6c4" stop-opacity="0"/></radialGradient>
</defs>`;
const sv={
 rect:(x,y,w,h,f,o="")=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" ${o}/>`,
 wall:(c1,c2)=>`<linearGradient id="wl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient><rect width="1000" height="440" fill="url(#wl)"/>`,
 floor:(c1,c2,y=430)=>{let s=`<linearGradient id="fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient><rect y="${y}" width="1000" height="${620-y}" fill="url(#fl)"/>`;
   for(let i=-6;i<=16;i++){s+=`<line x1="${500+(i*70-500)*.55}" y1="${y}" x2="${i*70}" y2="620" stroke="#000" stroke-opacity=".08" stroke-width="2"/>`}
   s+=`<rect y="${y-8}" width="1000" height="10" fill="#000" opacity=".12"/>`;return s},
 window:(x,y,w,h,curt="#e8a0b4")=>`<g><rect x="${x-8}" y="${y-8}" width="${w+16}" height="${h+24}" rx="6" fill="#fff" filter="url(#hs)"/>
   <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#sky)"/>
   <ellipse cx="${x+w*.3}" cy="${y+h*.3}" rx="${w*.16}" ry="${h*.07}" fill="#fff" opacity=".9"/><ellipse cx="${x+w*.42}" cy="${y+h*.26}" rx="${w*.12}" ry="${h*.08}" fill="#fff" opacity=".9"/>
   <path d="M${x} ${y+h} Q${x+w*.3} ${y+h*.7} ${x+w*.6} ${y+h*.82} T${x+w} ${y+h*.75} V${y+h} Z" fill="#8fd18f"/>
   <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#glass)"/>
   <rect x="${x+w/2-4}" y="${y}" width="8" height="${h}" fill="#fff"/><rect x="${x}" y="${y+h/2-4}" width="${w}" height="8" fill="#fff"/>
   <rect x="${x-14}" y="${y+h+8}" width="${w+28}" height="12" rx="3" fill="#f3f3f3" filter="url(#hs)"/>
   <path d="M${x-30} ${y-20} H${x+w*.28} Q${x+w*.12} ${y+h*.5} ${x+w*.22} ${y+h+10} H${x-30} Z" fill="${curt}" opacity=".95"/>
   <path d="M${x+w+30} ${y-20} H${x+w*.72} Q${x+w*.88} ${y+h*.5} ${x+w*.78} ${y+h+10} H${x+w+30} Z" fill="${curt}" opacity=".95"/>
   <rect x="${x-40}" y="${y-26}" width="${w+80}" height="8" rx="4" fill="#8a6a4a"/></g>`,
 shelf:(x,y,w)=>`<g filter="url(#hs)"><rect x="${x}" y="${y}" width="${w}" height="12" rx="2" fill="url(#woodL)"/><path d="M${x+20} ${y+12} v18 h10 Z M${x+w-20} ${y+12} v18 h-10 Z" fill="#8f6440"/></g>`,
 frame:(x,y,w,h,inner)=>`<g filter="url(#hs)"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#c08a4f"/><rect x="${x+8}" y="${y+8}" width="${w-16}" height="${h-16}" fill="#fdf6e8"/>${inner}</g>`,
 rug:(cx,cy,rx,ry,c1,c2)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c1}"/><ellipse cx="${cx}" cy="${cy}" rx="${rx*.8}" ry="${ry*.7}" fill="none" stroke="${c2}" stroke-width="6" stroke-dasharray="14 10"/>`,
 plant:(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-22 0 h44 l-6 40 h-32 Z" fill="#d9774b"/><g fill="#3f9b4b"><ellipse cx="-14" cy="-22" rx="10" ry="26" transform="rotate(-25 -14 -22)"/><ellipse cx="14" cy="-22" rx="10" ry="26" transform="rotate(25 14 -22)"/><ellipse cx="0" cy="-30" rx="10" ry="30"/></g></g>`,
 tree:(x,y,s=1,c="#3f8f3f")=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-14 0 Q-10 -90 -6 -150 H6 Q10 -90 16 0 Z" fill="#7a5130"/><g fill="${c}"><circle cx="0" cy="-190" r="70"/><circle cx="-60" cy="-150" r="50"/><circle cx="60" cy="-150" r="52"/><circle cx="-30" cy="-235" r="45"/><circle cx="35" cy="-230" r="48"/></g><g fill="#000" opacity=".08"><circle cx="20" cy="-150" r="60"/></g></g>`,
 bush:(x,y,s=1,c="#4ea84a")=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${c}"><circle cx="-50" cy="-20" r="45"/><circle cx="0" cy="-40" r="55"/><circle cx="55" cy="-22" r="45"/><rect x="-95" y="-20" width="190" height="40" rx="20"/><g fill="#fff" opacity=".12"><circle cx="-10" cy="-60" r="20"/></g></g>`
};
const SCENES=[
 {id:"chambre",t:"La chambre",ar:"غرفة النوم",ico:"🛏️",c:"#8E5BD8",story:"Aide Lumi à ranger sa chambre : trouve les objets !",storyAr:"ساعد لومي على ترتيب غرفتها: ابحث عن الأشياء!",
  bg:()=>sv.wall("#efe2fb","#dccaf2")+sv.floor("#d9a774","#b97f4f")+sv.window(70,70,210,180)+sv.shelf(380,160,250)+sv.shelf(380,280,250)
   +sv.frame(690,60,150,110,`<path d="M698 158 L740 100 L770 135 L790 115 L832 158 Z" fill="#7bb37b"/><circle cx="805" cy="88" r="12" fill="#ffcf4a"/>`)
   +sv.rug(450,575,280,34,"#f4a6c0","#fff")
   +`<g filter="url(#hs)"><rect x="300" y="420" width="250" height="16" rx="3" fill="url(#wood)"/><rect x="312" y="436" width="12" height="130" fill="#8a5a35"/><rect x="526" y="436" width="12" height="130" fill="#8a5a35"/></g>`
   +`<g filter="url(#hs)"><rect x="560" y="440" width="85" height="120" rx="6" fill="#e9c393"/><rect x="570" y="470" width="65" height="30" rx="4" fill="#d8ac78"/><circle cx="602" cy="485" r="4" fill="#8a5a35"/></g>`
   +`<g filter="url(#hs)"><rect x="660" y="250" width="34" height="320" rx="10" fill="#9b6ad6"/><rect x="680" y="380" width="320" height="95" rx="16" fill="#fff"/><ellipse cx="745" cy="378" rx="62" ry="26" fill="#fdf0ff"/></g>`,
  front:()=>`<g filter="url(#hs)"><path d="M672 405 Q760 392 1000 400 V530 Q840 545 672 520 Z" fill="#b48be8"/><path d="M700 430 Q820 420 1000 428" stroke="#fff" stroke-width="5" fill="none" opacity=".5"/><path d="M700 470 Q820 462 1000 468" stroke="#fff" stroke-width="5" fill="none" opacity=".5"/></g>
   <g filter="url(#hs)"><rect x="50" y="478" width="200" height="125" rx="10" fill="#f7b84b"/><rect x="50" y="478" width="200" height="22" rx="8" fill="#e59d2a"/><text x="150" y="560" text-anchor="middle" font-family="Fredoka,sans-serif" font-size="34" font-weight="700" fill="#fff">JOUETS</text></g>`,
  objs:[["📖","le livre","الكتاب","the book",425,128,58,-6],["🎧","le casque","السماعة","the headphones",560,126,56,0],["🧸","la peluche","الدمية","the teddy bear",770,345,72,0],["⏰","le réveil","المنبه","the alarm clock",605,414,50,0],
   ["💡","la lampe","المصباح","the lamp",350,382,66,0],["🖍️","le crayon de couleur","قلم التلوين","the crayon",470,404,44,40],["🎒","le cartable","المحفظة","the school bag",290,532,82,0],["👟","la chaussure","الحذاء","the shoe",560,588,56,0],
   ["🧦","les chaussettes","الجوارب","the socks",900,560,52,18],["⚽","le ballon","الكرة","the ball",110,468,70,0],["🪁","le cerf-volant","الطائرة الورقية","the kite",190,452,66,-20],["🕶️","les lunettes","النظارات","the glasses",175,262,44,0],
   ["🎁","le cadeau","الهدية","the present",425,248,58,0],["🧢","la casquette","القبعة","the cap",560,252,56,12]]},
 {id:"cuisine",t:"La cuisine",ar:"المطبخ",ico:"🍳",c:"#EF6C3A",story:"Lumi prépare le petit-déjeuner. Trouve ce qu'il faut !",storyAr:"لومي تحضر الفطور. ابحث عما تحتاجه!",
  bg:()=>{let t="";for(let i=0;i<20;i++)for(let j=0;j<9;j++)t+=`<rect x="${i*50+1}" y="${j*50+1}" width="48" height="48" fill="${(i+j)%2?"#fbf3e4":"#f3e6cf"}"/>`;
   return t+sv.floor("#e9e4dc","#cfc6b8")+sv.window(390,60,220,150,"#ffd36b")
   +`<g filter="url(#hs)"><rect x="30" y="40" width="300" height="130" rx="6" fill="#7fbfa6"/><line x1="180" y1="46" x2="180" y2="164" stroke="#5e9e86" stroke-width="4"/><circle cx="165" cy="105" r="5" fill="#fff"/><circle cx="195" cy="105" r="5" fill="#fff"/></g>`
   +`<g filter="url(#hs)"><rect x="0" y="380" width="640" height="18" fill="#e6ddd0"/><rect x="0" y="398" width="640" height="170" fill="#7fbfa6"/><line x1="160" y1="405" x2="160" y2="560" stroke="#5e9e86" stroke-width="4"/><line x1="320" y1="405" x2="320" y2="560" stroke="#5e9e86" stroke-width="4"/><line x1="480" y1="405" x2="480" y2="560" stroke="#5e9e86" stroke-width="4"/></g>`
   +`<g filter="url(#hs)"><rect x="790" y="110" width="180" height="455" rx="14" fill="#eef2f6"/><line x1="790" y1="260" x2="970" y2="260" stroke="#c7cfd8" stroke-width="4"/><rect x="805" y="190" width="10" height="50" rx="5" fill="#b0b9c4"/><rect x="805" y="285" width="10" height="70" rx="5" fill="#b0b9c4"/></g>`
   +sv.shelf(660,200,110)+sv.shelf(660,300,110)+`<circle cx="360" cy="230" r="6" fill="#8a6a4a"/>`},
  front:()=>`<g filter="url(#hs)"><path d="M220 352 Q275 395 335 352 Z" fill="#e05a47"/><path d="M216 350 H340" stroke="#c94a37" stroke-width="6" stroke-linecap="round"/></g>
   <g filter="url(#hs)"><ellipse cx="440" cy="512" rx="250" ry="46" fill="#ffffff"/><path d="M190 512 Q190 560 230 570 L650 570 Q690 560 690 512" fill="#f7d1d1"/><rect x="300" y="565" width="18" height="60" fill="#8a5a35"/><rect x="560" y="565" width="18" height="60" fill="#8a5a35"/></g>`,
  objs:[["🍎","la pomme","التفاحة","the apple",255,342,46,0],["🍌","la banane","الموزة","the banana",305,336,50,-20],["🍊","l'orange","البرتقالة","the orange",90,356,46,0],["🥛","le lait","الحليب","the milk",150,346,58,0],
   ["🍞","le pain","الخبز","the bread",530,352,62,0],["☕","la tasse","الفنجان","the cup",712,176,46,0],["🍽️","l'assiette","الصحن","the plate",715,276,50,0],["🧀","le fromage","الجبن","the cheese",880,90,52,0],
   ["🥚","l'œuf","البيضة","the egg",345,488,40,0],["🥕","la carotte","الجزرة","the carrot",450,486,52,30],["🍅","la tomate","الطماطم","the tomato",560,490,44,0],["🍳","la poêle","المقلاة","the frying pan",360,262,58,-30],
   ["🥄","la cuillère","الملعقة","the spoon",600,360,42,40],["🫖","la théière","البراد","the teapot",420,346,58,0],["🫒","les olives","الزيتون","the olives",250,22,42,0]]},
 {id:"classe",t:"La salle de classe",ar:"القسم",ico:"🏫",c:"#2E9E62",story:"La maîtresse a besoin de ses affaires. Trouve-les vite !",storyAr:"المعلمة تحتاج أدواتها. ابحث عنها بسرعة!",
  bg:()=>sv.wall("#e5f3e8","#d2e9d7")+sv.floor("#cfb48f","#a98a62")+sv.window(805,150,150,170,"#7fb2ff")
   +`<g filter="url(#hs)"><rect x="250" y="55" width="510" height="210" rx="8" fill="#8a5a35"/><rect x="262" y="67" width="486" height="186" fill="#2f5f45"/><text x="505" y="175" text-anchor="middle" font-family="Fredoka,sans-serif" font-size="46" fill="#f2f2e8" opacity=".9">Bonjour ${esc(S.name||"")} !</text><rect x="255" y="262" width="500" height="10" fill="#a8774b"/></g>`
   +`<g filter="url(#hs)"><rect x="20" y="110" width="190" height="420" rx="6" fill="url(#wood)"/><rect x="32" y="122" width="166" height="396" fill="#6e4628"/></g><rect x="32" y="222" width="166" height="10" fill="#c98b58"/><rect x="32" y="322" width="166" height="10" fill="#c98b58"/><rect x="32" y="422" width="166" height="10" fill="#c98b58"/>`
   +`<g filter="url(#hs)"><circle cx="880" cy="85" r="42" fill="#fff" stroke="#3a3a3a" stroke-width="6"/><line x1="880" y1="85" x2="880" y2="58" stroke="#333" stroke-width="5"/><line x1="880" y1="85" x2="900" y2="95" stroke="#333" stroke-width="4"/></g>
   <g filter="url(#hs)"><rect x="610" y="420" width="300" height="16" fill="url(#wood)"/></g>`,
  front:()=>`<g filter="url(#hs)"><rect x="616" y="436" width="288" height="130" fill="#b47a48"/><rect x="636" y="456" width="248" height="90" fill="#c98b58"/></g>
   <g filter="url(#hs)"><rect x="110" y="500" width="380" height="14" fill="url(#woodL)"/><rect x="120" y="514" width="360" height="90" fill="#e3b083"/><rect x="140" y="604" width="14" height="20" fill="#8a5a35"/><rect x="446" y="604" width="14" height="20" fill="#8a5a35"/></g>`,
  objs:[["📚","les livres","الكتب","the books",115,190,62,0],["🌍","le globe","الكرة الأرضية","the globe",115,290,60,0],["🧮","le boulier","العداد","the abacus",115,392,60,0],["🖍️","la craie","الطباشير","the chalk",310,252,40,80],
   ["📏","la règle","المسطرة","the ruler",520,254,62,8],["🧽","l'éponge","الإسفنجة","the sponge",690,250,40,0],["📓","le cahier","الدفتر","the notebook",200,482,52,-10],["✏️","le crayon","قلم الرصاص","the pencil",280,486,46,40],
   ["✂️","les ciseaux","المقص","the scissors",360,482,46,0],["🖊️","le stylo","القلم","the pen",430,486,46,-30],["🎒","le cartable","المحفظة","the school bag",560,575,76,0],["💻","l'ordinateur","الحاسوب","the computer",720,392,62,0],
   ["📐","l'équerre","المثلث","the set square",830,402,46,0],["🗺️","la carte","الخريطة","the map",880,240,0,0]].filter(o=>o[6])},
 {id:"foret",t:"La forêt",ar:"الغابة",ico:"🌳",c:"#2E9E62",story:"Des animaux se cachent dans la forêt de la Maâmora. Trouve-les !",storyAr:"حيوانات تختبئ في غابة المعمورة. ابحث عنها!",
  bg:()=>`<rect width="1000" height="330" fill="url(#sky)"/><circle cx="880" cy="70" r="40" fill="#ffd84a" opacity=".9"/>
   <path d="M0 260 Q200 180 420 250 T1000 230 V400 H0 Z" fill="#9fd38c"/><path d="M0 300 Q300 250 600 300 T1000 290 V620 H0 Z" fill="#6fbf5a"/><rect y="380" width="1000" height="240" fill="#63b04f"/>
   <path d="M420 620 Q470 470 520 380" stroke="#d8c08a" stroke-width="60" fill="none" opacity=".7"/>`
   +sv.tree(130,420,1.05,"#2f7d3a")+sv.tree(400,400,.9,"#3c8f43")+sv.tree(850,420,1.1,"#2f7d3a")
   +`<ellipse cx="600" cy="515" rx="160" ry="48" fill="#4aa0d8"/><ellipse cx="580" cy="505" rx="100" ry="22" fill="#fff" opacity=".25"/>
   <g filter="url(#hs)"><path d="M870 480 Q880 430 930 432 Q975 435 980 482 Z" fill="#9aa0aa"/></g>`,
  front:()=>sv.bush(250,600,1,"#3f9a3e")+sv.bush(720,625,.9,"#48a347")+sv.bush(970,600,.8,"#3f9a3e")
   +`<g fill="#2f7d3a"><circle cx="105" cy="230" r="34"/><circle cx="160" cy="220" r="26"/></g><g fill="#2f7d3a"><circle cx="880" cy="230" r="26"/></g>`,
  objs:[["🦉","la chouette","البومة","the owl",130,190,58,0],["🐿️","l'écureuil","السنجاب","the squirrel",405,290,50,0],["🐦","l'oiseau","الطائر","the bird",835,165,46,0],["🦊","le renard","الثعلب","the fox",250,478,74,0],
   ["🐗","le sanglier","الخنزير البري","the boar",735,450,76,0],["🐸","la grenouille","الضفدع","the frog",540,500,46,0],["🐢","la tortue","السلحفاة","the turtle",690,565,52,0],["🐌","l'escargot","الحلزون","the snail",925,435,40,0],
   ["🦋","le papillon","الفراشة","the butterfly",520,330,46,15],["🐞","la coccinelle","الدعسوقة","the ladybug",330,560,32,0],["🐝","l'abeille","النحلة","the bee",470,240,36,0],["🦔","le hérisson","القنفذ","the hedgehog",945,560,52,0],
   ["🐇","le lapin","الأرنب","the rabbit",370,440,56,0],["🍄","le champignon","الفطر","the mushroom",165,525,46,0],["🪺","le nid","العش","the nest",870,214,50,0]]},
 {id:"labo",t:"Le laboratoire",ar:"المختبر",ico:"🔬",c:"#1FA3C9",story:"Le professeur prépare une expérience. Trouve le matériel !",storyAr:"الأستاذ يحضر تجربة. ابحث عن الأدوات!",
  bg:()=>{let t="";for(let i=0;i<25;i++)for(let j=0;j<11;j++)t+=`<rect x="${i*40+1}" y="${j*40+1}" width="38" height="38" fill="${(i*j)%3?"#eef7fb":"#e4f1f7"}"/>`;
   return t+sv.floor("#cfd8de","#aab6be")+sv.shelf(60,160,390)+sv.shelf(60,270,390)+sv.window(770,60,180,170,"#9fd3e8")
   +`<g filter="url(#hs)"><rect x="520" y="50" width="190" height="200" rx="4" fill="#fff"/><circle cx="615" cy="150" r="70" fill="#ffd2dc" stroke="#e57a96" stroke-width="5"/><circle cx="625" cy="145" r="24" fill="#8e5bd8"/><text x="615" y="240" text-anchor="middle" font-family="Fredoka,sans-serif" font-size="20" fill="#555">La cellule</text></g>
   <g filter="url(#hs)"><rect x="0" y="420" width="1000" height="18" fill="#3f4b57"/></g><rect x="800" y="410" width="120" height="14" rx="6" fill="#b9c4cc"/><path d="M860 410 V370 H885" stroke="#8a97a2" stroke-width="7" fill="none"/>`},
  front:()=>`<g filter="url(#hs)"><rect x="0" y="438" width="1000" height="150" fill="#5a6a78"/><rect x="40" y="460" width="280" height="110" rx="6" fill="#677887"/><rect x="360" y="460" width="280" height="110" rx="6" fill="#677887"/><rect x="680" y="460" width="280" height="110" rx="6" fill="#677887"/></g>`,
  objs:[["🔬","le microscope","المجهر","the microscope",300,370,84,0],["🔍","la loupe","العدسة المكبرة","the magnifying glass",425,398,46,-20],["🧪","le tube à essai","أنبوب الاختبار","the test tube",115,128,48,10],["⚗️","l'alambic","جهاز التقطير","the still",215,125,56,0],
   ["🧫","la boîte de Petri","طبق بتري","the Petri dish",320,140,44,0],["🌡️","le thermomètre","المحرار","the thermometer",405,126,46,-10],["🧭","la boussole","البوصلة","the compass",120,246,46,0],["🧲","l'aimant","المغناطيس","the magnet",215,246,46,20],
   ["🔋","la pile","البطارية","the battery",320,244,46,90],["⚖️","la balance","الميزان","the scales",560,372,74,0],["🥽","les lunettes de protection","نظارات الوقاية","the goggles",680,398,46,0],["🌱","la plante","النبتة","the plant",860,216,52,0],
   ["🦠","le microbe","الميكروب","the germ",560,108,40,0],["📓","le carnet","الدفتر","the notebook",150,400,46,-10],["💡","l'ampoule","المصباح","the light bulb",955,384,50,0]]},
 {id:"bureau",t:"Le coin ordinateur",ar:"ركن الحاسوب",ico:"🖥️",c:"#7B5CF0",story:"Le bureau est en désordre. Trouve chaque appareil !",storyAr:"المكتب غير مرتب. ابحث عن كل جهاز!",
  bg:()=>sv.wall("#e3e8f7","#cfd7ef")+sv.floor("#b9a17f","#94795a")+sv.window(660,60,260,190,"#9db0ef")+sv.shelf(70,175,300)+sv.plant(960,560,1.2)
   +`<g filter="url(#hs)"><rect x="140" y="400" width="780" height="18" fill="url(#wood)"/></g><rect x="930" y="470" width="40" height="50" rx="6" fill="#fff" stroke="#c9cfdc" stroke-width="3"/>`,
  front:()=>`<g filter="url(#hs)"><rect x="150" y="418" width="760" height="150" fill="#a8714a"/><rect x="620" y="440" width="270" height="55" rx="4" fill="#bd8559"/><rect x="620" y="502" width="270" height="55" rx="4" fill="#bd8559"/><rect x="740" y="462" width="30" height="8" rx="4" fill="#7a4d2e"/><rect x="740" y="524" width="30" height="8" rx="4" fill="#7a4d2e"/></g>`,
  objs:[["🖥️","l'écran","الشاشة","the screen",480,320,130,0],["⌨️","le clavier","لوحة المفاتيح","the keyboard",470,394,96,0],["🖱️","la souris","الفأرة","the mouse",600,388,48,0],["🖨️","l'imprimante","الطابعة","the printer",820,350,92,0],
   ["🎤","le micro","الميكروفون","the microphone",300,356,60,0],["🎧","le casque","السماعة","the headphones",220,380,52,15],["📱","le téléphone","الهاتف","the phone",680,388,42,-20],["💾","la disquette","القرص المرن","the floppy disk",130,140,46,0],
   ["💿","le CD","القرص المدمج","the CD",225,142,46,0],["📷","l'appareil photo","آلة التصوير","the camera",320,140,52,0],["🔊","le haut-parleur","مكبر الصوت","the speaker",640,330,50,0],["📁","le dossier","المجلد","the folder",385,392,46,0],
   ["🔌","la prise","القابس","the plug",950,500,42,0]]},
 {id:"mer",t:"La mer et le ciel",ar:"البحر والسماء",ico:"🌊",c:"#2F7FE0",story:"Le cycle de l'eau se cache ici. Trouve tout ce qui parle d'eau et de ciel !",storyAr:"دورة الماء مختبئة هنا. ابحث عن كل ما يتعلق بالماء والسماء!",
  bg:()=>`<linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a8fd8"/><stop offset="1" stop-color="#1b5fa8"/></linearGradient><linearGradient id="sand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6dfa4"/><stop offset="1" stop-color="#e8c47c"/></linearGradient>
   <rect width="1000" height="340" fill="url(#sky)"/><path d="M720 340 L840 150 L900 220 L960 130 L1000 190 V340 Z" fill="#8a7f78"/><path d="M840 150 L815 190 L850 185 L870 200 L900 220 L870 180 Z M960 130 L940 165 L975 160 L1000 190 V170 Z" fill="#fff"/>
   <rect y="330" width="1000" height="160" fill="url(#sea)"/>`+[0,1,2,3].map(i=>`<path d="M0 ${360+i*32} Q60 ${350+i*32} 120 ${360+i*32} T240 ${360+i*32} T360 ${360+i*32} T480 ${360+i*32} T600 ${360+i*32} T720 ${360+i*32} T840 ${360+i*32} T960 ${360+i*32} T1080 ${360+i*32}" stroke="#fff" stroke-opacity=".25" stroke-width="3" fill="none"/>`).join("")
   +`<path d="M0 480 Q250 455 500 478 T1000 470 V620 H0 Z" fill="url(#sand)"/>`,
  front:()=>`<g filter="url(#hs)" fill="#8d8f96"><path d="M40 620 Q60 560 120 565 Q180 570 200 620 Z"/><path d="M800 620 Q820 575 870 572 Q920 575 940 620 Z"/></g>`,
  objs:[["☀️","le soleil","الشمس","the sun",110,90,92,0],["☁️","le nuage","السحابة","the cloud",370,90,92,0],["🌧️","la pluie","المطر","the rain",620,110,80,0],["🌈","l'arc-en-ciel","قوس قزح","the rainbow",520,240,92,0],
   ["❄️","le flocon de neige","ندفة الثلج","the snowflake",890,110,40,0],["💧","la goutte d'eau","قطرة الماء","the drop of water",290,250,40,0],["🌊","la vague","الموجة","the wave",230,400,72,0],["🐟","le poisson","السمكة","the fish",480,430,46,10],
   ["🐬","le dauphin","الدلفين","the dolphin",660,392,66,-10],["⛵","le bateau","المركب","the boat",400,320,72,0],["🐚","le coquillage","الصدفة","the shell",300,560,46,0],["🦀","le crabe","السلطعون","the crab",560,575,46,0],
   ["🧊","le glaçon","مكعب الثلج","the ice cube",720,555,46,0],["🪣","le seau","الدلو","the bucket",860,555,52,0]]}
];
const SCENE_FOR={francais:["chambre","cuisine","classe"],anglais:["classe","cuisine","chambre"],svt:["foret","labo"],physique:["mer","labo"],info:["bureau"],maths:["classe"],arabe:["chambre","cuisine"],hg:["mer"],islamique:["chambre"]};

// ----- jeu -----
function sceneCards(ids){return `<div class="wcards">${ids.map(id=>{const d=SCENES.find(s=>s.id===id);const best=(S.hid||{})[id];return `<a class="scard" href="#cherche-${id}" style="--c:${d.c}">${emo(d.ico,"sico")}<b>${esc(d.t)}</b><span class="ar">${esc(d.ar)}</span><small>${best?"⭐ réussi "+best+" fois":"Nouveau !"}${d.boxes?" · cachettes à ouvrir":""}</small></a>`}).join("")}</div>`}
function objSVG(o,i,diff){if(diff&&diff.miss.includes(i))return "";const [e,,,,x,y,s,r]=o;const hue=diff&&diff.hue.includes(i)?` style="filter:hue-rotate(150deg) saturate(1.4)"`:"";const flip=diff&&diff.flip.includes(i)?` scale(-1 1)`:"";
  return `<g class="hobj" data-i="${i}" transform="translate(${x} ${y}) rotate(${r})${flip}"${hue}><circle r="${s*.62}" fill="transparent"/><image href="${emoSrc(e)}" x="${-s/2}" y="${-s/2}" width="${s}" height="${s}" filter="url(#hs)" data-e="${esc(e)}"/></g>`}
function doorSVG(b){const {x,y,w,h,c="#7fbfa6",kind}=b;const d=`stroke="#00000033" stroke-width="3"`;
  if(kind==="bush")return `<g class="door k-bush" data-b="${b.id}" role="button" aria-label="${esc(b.fr)}">${sv.bush(x+w/2,y+h,w/190,c)}</g>`;
  if(kind==="lid")return `<g class="door k-lid" data-b="${b.id}" role="button" aria-label="${esc(b.fr)}" filter="url(#hs)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}" ${d}/><rect x="${x+w/2-18}" y="${y+h-14}" width="36" height="10" rx="4" fill="#00000040"/></g>`;
  if(kind==="drawer")return `<g class="door k-drawer" data-b="${b.id}" role="button" aria-label="${esc(b.fr)}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${c}" ${d}/><rect x="${x+w/2-20}" y="${y+h/2-4}" width="40" height="8" rx="4" fill="#00000055"/></g>`;
  const hx=kind==="door-r"?x+14:x+w-16;
  return `<g class="door k-${kind}" data-b="${b.id}" role="button" aria-label="${esc(b.fr)}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${c}" ${d}/><rect x="${x+8}" y="${y+8}" width="${w-16}" height="${h-16}" rx="4" fill="none" stroke="#ffffff55" stroke-width="3"/><rect x="${hx-4}" y="${y+h/2-22}" width="8" height="44" rx="4" fill="#00000055"/></g>`}
function innerSVG(b){if(b.kind==="bush"||b.kind==="lid")return "";const {x,y,w,h,inner="#3b2f2a"}=b;let s=`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${inner}"/>`;
  if(b.shelves)for(let k=1;k<=b.shelves;k++)s+=`<rect x="${x+4}" y="${y+h*k/(b.shelves+1)}" width="${w-8}" height="5" fill="#ffffff88"/>`;
  if(inner.startsWith("#f")||inner.startsWith("#e"))s+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#glass)" opacity=".5"/>`;return s}
function sceneSVG(sc,mode,diff){const B=sc.boxes||[];const free=[],inside=[];sc.objs.forEach((o,i)=>(o[8]?inside:free).push([o,i]));
  return `<svg class="hsvg" viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(sc.t)}">${SVGDEFS}${sc.bg()}
   ${B.map(innerSVG).join("")}${free.map(([o,i])=>objSVG(o,i,diff)).join("")}
   ${sc.front()}${sc.front2?sc.front2():""}${inside.map(([o,i])=>objSVG(o,i,null)).join("")}${B.map(doorSVG).join("")}<g class="marks"></g></svg>`}
function svgImgFallback(root){root.querySelectorAll("image[data-e]").forEach(im=>im.addEventListener("error",()=>{const c=emoCands(im.dataset.e);const n=(+im.dataset.n||0)+1;if(n<c.length){im.dataset.n=n;im.setAttribute("href",c[n]);return}
  const t=document.createElementNS("http://www.w3.org/2000/svg","text");const w=+im.getAttribute("width");t.setAttribute("font-size",w*.8);t.setAttribute("x",im.getAttribute("x")-(-w/2));t.setAttribute("y",im.getAttribute("y")-(-w/2));t.setAttribute("text-anchor","middle");t.setAttribute("dominant-baseline","central");t.textContent=im.dataset.e;im.replaceWith(t)}))}
function hiddenView(id){const sc=SCENES.find(s=>s.id===id);
  return `<a class="back" href="#cherche">← Cherche et trouve</a><div class="hwrap" id="hw" style="--c:${sc.c}"></div>`}
function mountHidden(id,mode="find"){
  const sc=SCENES.find(s=>s.id===id),hw=$("#hw");if(!hw)return;const lang=S.hidLang||"fr";
  const nameOf=o=>lang==="en"?o[3]:lang==="ar"?o[2]:o[1],langV=lang;
  if(mode==="diff")return mountDiff(sc,hw);
  const hidIdx=shuffle(sc.objs.map((o,i)=>i).filter(i=>sc.objs[i][8])).slice(0,3);const targets=shuffle([...hidIdx,...shuffle(sc.objs.map((o,i)=>i).filter(i=>!sc.objs[i][8])).slice(0,8-hidIdx.length)]);const opened=new Set();let found=new Set(),hints=3,cur=null,busy=false;const run=newRun(targets.length);
  hw.innerHTML=hudHTML(run)+`<div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub" id="hbub"></div></div>
     <div class="hbtns"><button class="ghost" id="hhint">🔍 Indice (${hints})</button><button class="ghost" id="hdiff">🧩 Les différences</button>
     <div class="seg"><button data-hl="fr" aria-pressed="${lang==="fr"}">FR</button><button data-hl="en" aria-pressed="${lang==="en"}">EN</button><button data-hl="ar" aria-pressed="${lang==="ar"}" class="ar">عربي</button></div></div></div>
   <div class="hscene" id="hsc">${sceneSVG(sc)}</div>
   <div class="htray" id="htr">${targets.map(i=>{const o=sc.objs[i];return `<button class="hitem" data-t="${i}">${emo(o[0],"ti")}<b${lang==="ar"?' class="ar" dir="rtl"':""}>${langV==="fr"?nameOf(o).split(" ").map(x=>colorWord(x,"fr")).join(" "):esc(nameOf(o))}</b><small${lang==="ar"?"":' class="ar"'}>${esc(lang==="ar"?o[1]:o[2])}</small></button>`}).join("")}</div>
   <div id="hrep"></div>`;
  svgImgFallback(hw);
  const bub=t=>{$("#hbub").textContent=t};
  const sayBoth=(fr,ar)=>{if(lang==="ar"){bub(ar||fr);speakSeq([{text:ar||fr}],"ar");return}bub(fr);speakSeq([{text:fr},...(S.readAr&&ar?[{text:ar,lang:"ar"}]:[])],langV)};
  sayBoth(`${sc.story} ${lang==="en"?"Find the things in English!":""}`.trim(),sc.storyAr);
  hw.querySelectorAll("[data-hl]").forEach(b=>b.onclick=()=>{S.hidLang=b.dataset.hl;save();mountHidden(id)});
  $("#hdiff").onclick=()=>mountHidden(id,"diff");
  hw.querySelectorAll(".hitem").forEach(b=>b.onclick=()=>{const o=sc.objs[+b.dataset.t];sayBoth((lang==="en"?"Find ":"Trouve ")+nameOf(o)+".","ابحث عن "+o[2])});
  $("#hhint").onclick=()=>{if(hints<=0||busy)return;const left=targets.filter(i=>!found.has(i));if(!left.length)return;hints--;$("#hhint").textContent=`🔍 Indice (${hints})`;
    const o=sc.objs[left[0]];const bx=o[8]&&!opened.has(o[8])&&(sc.boxes||[]).find(b=>b.id===o[8]);if(bx){ring(bx.x+bx.w/2,bx.y+bx.h/2,Math.max(bx.w,bx.h)*.55,"hint");sayBoth(`Regarde dans ${bx.fr} !`,`انظر في ${bx.ar}!`)}else{ring(o[4],o[5],o[6],"hint");sayBoth(`Regarde ici : ${nameOf(o)} !`,"انظر هنا: "+o[2])}};
  function ring(x,y,s,cls){const g=hw.querySelector(".marks");const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("cx",x);c.setAttribute("cy",y);c.setAttribute("r",s*.75);c.setAttribute("class","ring "+cls);g.appendChild(c);if(cls==="hint")setTimeout(()=>c.remove(),2600);return c}
  hw.querySelectorAll(".door").forEach(g=>g.addEventListener("click",()=>{const b=(sc.boxes||[]).find(x=>x.id===g.dataset.b);ac();
    if(g.classList.contains("open")){g.classList.remove("open");opened.delete(b.id);tone(midi(60),0,.15,.06);return}
    g.classList.add("open");opened.add(b.id);tone(midi(67),0,.12,.08);tone(midi(74),.1,.15,.08);
    const inside=sc.objs.filter(o=>o[8]===b.id).length;sayBoth(`Tu ouvres ${b.fr} ! ${inside?"Qu'est-ce qu'il y a dedans ?":"C'est vide."}`,`فتحت ${b.ar}! ${inside?"ماذا يوجد في الداخل؟":"إنه فارغ."}`)}));
  hw.querySelectorAll(".hobj").forEach(g=>g.addEventListener("click",()=>{if(busy)return;const i=+g.dataset.i,o=sc.objs[i];ac();
    if(targets.includes(i)&&!found.has(i)){found.add(i);busy=true;chime();ring(o[4],o[5],o[6],"ok");g.classList.add("got");
      const card=hw.querySelector(`.hitem[data-t="${i}"]`);card.classList.add("found");runHit(run);run.done=found.size;hudDraw(run);fxBurst(card);
      const word=nameOf(o);sayBoth(lang==="en"?`${bravo("en")} It's ${word}. Say: ${word}!`:`${bravo("fr")} C'est ${word}. Dis : ${word} !`,`${bravo("ar")} هذا ${o[2]}. قل: ${o[2]}`);
      const box=$("#hrep");box.innerHTML=`<div class="hrep-in">${emo(o[0],"repimg")}<div id="rp"></div></div>`;
      repeatBlock($("#rp"),word,langV,()=>{addStars(1);box.innerHTML="";busy=false;if(found.size===targets.length)finish()});box.scrollIntoView({behavior:"smooth",block:"nearest"})}
    else if(found.has(i)){bub("Déjà trouvé !")}
    else{buzz();runMiss(run);hudDraw(run);g.classList.add("nope");setTimeout(()=>g.classList.remove("nope"),500);sayBoth(`Ça, c'est ${nameOf(o)}.`,"هذا "+o[2])}}));
  function finish(){S.hid=S.hid||{};S.hid[id]=(S.hid[id]||0)+1;save();const faux=(3-hints)+run.miss;
    gameEnd(hw,{run,id:"cherche-"+id,stars:faux<=1?3:faux<=3?2:1,c:sc.c,title:`Bravo ${S.name} !`,sub:"Tu as tout trouvé.",again:()=>mountHidden(id),more:[["🧩 Les différences",()=>mountHidden(id,"diff")]],back:["#cherche","Autres scènes"]});
    sayBoth(`Bravo ${S.name} ! Tu as tout trouvé.`,"أحسنت! وجدت كل شيء.")}
}
// ----- trouve les différences -----
function mountDiff(sc,hw){
  const idx=shuffle(sc.objs.map((o,i)=>i).filter(i=>!sc.objs[i][8]));const miss=idx.slice(0,2),hue=idx.slice(2,4),flip=idx.slice(4,5);const all=[...miss,...hue,...flip];const found=new Set(),run=newRun(5);
  hw.innerHTML=hudHTML(run)+`<div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub" id="hbub">Il y a 5 différences entre les deux images. Touche-les dans l'image du bas !</div></div>
    <div class="hbtns"><button class="ghost" id="hback">🔎 Revenir à « Cherche et trouve »</button><span class="dcount" id="dc">0 / 5</span></div></div>
   <div class="hscene"><div class="dlab">Image 1</div>${sceneSVG(sc)}</div><div class="hscene"><div class="dlab">Image 2 : touche les différences</div><div id="d2">${sceneSVG(sc,"diff",{miss,hue,flip})}</div></div><div id="hrep"></div>`;
  svgImgFallback(hw);sayOne("Il y a 5 différences entre les deux images. Touche-les dans l'image du bas !","fr");
  $("#hback").onclick=()=>mountHidden(sc.id);
  const svg=$("#d2 svg");
  svg.addEventListener("click",e=>{const pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;const p=pt.matrixTransform(svg.getScreenCTM().inverse());
    let hit=null,bd=1e9;all.forEach(i=>{const o=sc.objs[i];const d=Math.hypot(p.x-o[4],p.y-o[5]);if(d<o[6]*.8+18&&d<bd){bd=d;hit=i}});
    if(hit==null||found.has(hit)){buzz();if(hit==null){runMiss(run);hudDraw(run)}return}found.add(hit);chime();runHit(run);run.done=found.size;hudDraw(run);const o=sc.objs[hit];
    [svg,hw.querySelector(".hscene svg")].forEach(s=>{const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("cx",o[4]);c.setAttribute("cy",o[5]);c.setAttribute("r",o[6]*.75);c.setAttribute("class","ring ok");s.querySelector(".marks").appendChild(c)});
    $("#dc").textContent=`${found.size} / 5`;const what=miss.includes(hit)?`${o[1]} a disparu !`:hue.includes(hit)?`${o[1]} a changé de couleur !`:`${o[1]} est tourné de l'autre côté !`;
    $("#hbub").textContent=what+" Dis : "+o[1];speakSeq([{text:what+" Dis : "+o[1]},...(S.readAr?[{text:o[2],lang:"ar"}]:[])],"fr");
    const box=$("#hrep");box.innerHTML=`<div class="hrep-in">${emo(o[0],"repimg")}<div id="rp"></div></div>`;repeatBlock($("#rp"),o[1],"fr",()=>{addStars(1);box.innerHTML="";
      if(found.size===5){gameEnd(hw,{run,id:"diff-"+sc.id,stars:run.miss<=1?3:run.miss<=4?2:1,c:sc.c,title:`Bravo ${S.name} !`,sub:"Tu as trouvé les 5 différences.",again:()=>mountHidden(sc.id,"diff"),back:["#cherche","Autres scènes"]});sayOne(`Bravo ${S.name} ! Tu as trouvé les 5 différences.`,"fr")}})});
}

// ----- cachettes : frigo, placards, tiroirs, coffres, buissons -----
const HIDE={
 cuisine:{boxes:[{id:"congel",kind:"door-l",x:790,y:110,w:180,h:150,c:"#eef2f6",inner:"#e3f2fb",shelves:1,fr:"le congélateur",ar:"المجمد"},
   {id:"frigo",kind:"door-l",x:790,y:262,w:180,h:303,c:"#eef2f6",inner:"#f2fbff",shelves:2,fr:"le frigo",ar:"الثلاجة"},
   {id:"placard1",kind:"door-l",x:30,y:40,w:150,h:130,c:"#7fbfa6",inner:"#4c7f6c",shelves:1,fr:"le placard",ar:"الخزانة"},
   {id:"placard2",kind:"door-r",x:180,y:40,w:150,h:130,c:"#7fbfa6",inner:"#4c7f6c",shelves:1,fr:"le placard",ar:"الخزانة"},
   {id:"placard3",kind:"door-l",x:0,y:398,w:160,h:170,c:"#7fbfa6",inner:"#4c7f6c",shelves:1,fr:"le placard du bas",ar:"الخزانة السفلى"},
   {id:"tiroir",kind:"drawer",x:480,y:398,w:160,h:66,c:"#8fcbb4",inner:"#6b4a33",fr:"le tiroir",ar:"الدرج"}],
  move:{"🧀":[930,505,46,0,"frigo"],"🫒":[105,135,44,0,"placard1"],"🥄":[530,432,40,40,"tiroir"]},
  add:[["🍦","la glace","المثلجات","the ice cream",880,200,54,0,"congel"],["🧃","le jus","العصير","the juice",840,330,46,0,"frigo"],["🍓","la fraise","الفراولة","the strawberry",850,430,42,0,"frigo"],
   ["🍯","le miel","العسل","the honey",255,135,48,0,"placard2"],["🥫","la boîte de conserve","علبة المصبرات","the tin can",80,520,50,0,"placard3"],["🍴","la fourchette","الشوكة","the fork",600,432,40,-30,"tiroir"]]},
 chambre:{boxes:[{id:"jouets",kind:"lid",x:44,y:418,w:212,h:62,c:"#f2a93b",fr:"la boîte à jouets",ar:"صندوق الألعاب"},
   {id:"tiroirN",kind:"drawer",x:570,y:470,w:65,h:30,c:"#d8ac78",inner:"#5b3d27",fr:"le tiroir de la table de nuit",ar:"درج الطاولة الصغيرة"},
   {id:"tiroirB",kind:"drawer",x:330,y:436,w:190,h:36,c:"#b9824f",inner:"#5b3d27",fr:"le tiroir du bureau",ar:"درج المكتب"}],
  move:{"⚽":[110,450,62,0,"jouets"],"🪁":[195,448,60,-20,"jouets"]},
  add:[["🔑","la clé","المفتاح","the key",602,485,28,20,"tiroirN"],["📎","le trombone","مشبك الورق","the paper clip",380,454,30,30,"tiroirB"],["🎲","le dé","النرد","the dice",470,454,30,0,"tiroirB"]]},
 classe:{boxes:[{id:"tiroirP",kind:"drawer",x:636,y:456,w:248,h:44,c:"#d39a63",inner:"#5b3d27",fr:"le tiroir de la maîtresse",ar:"درج المعلمة"}],
  add:[["🔔","la cloche","الجرس","the bell",700,478,36,0,"tiroirP"],["📎","le trombone","مشبك الورق","the paper clip",790,478,32,20,"tiroirP"]]},
 labo:{boxes:[{id:"arm1",kind:"door-l",x:40,y:460,w:280,h:110,c:"#677887",inner:"#2c343c",shelves:0,fr:"l'armoire",ar:"الخزانة"},{id:"arm2",kind:"door-l",x:360,y:460,w:280,h:110,c:"#677887",inner:"#2c343c",fr:"l'armoire",ar:"الخزانة"},{id:"arm3",kind:"door-r",x:680,y:460,w:280,h:110,c:"#677887",inner:"#2c343c",fr:"l'armoire",ar:"الخزانة"}],
  add:[["🧤","les gants","القفازات","the gloves",180,515,48,0,"arm1"],["🧴","le flacon","القارورة","the bottle",500,515,48,0,"arm2"],["🧯","l'extincteur","مطفأة الحريق","the fire extinguisher",820,515,54,0,"arm3"]]},
 bureau:{boxes:[{id:"t1",kind:"drawer",x:620,y:440,w:270,h:55,c:"#bd8559",inner:"#4a3020",fr:"le premier tiroir",ar:"الدرج الأول"},{id:"t2",kind:"drawer",x:620,y:502,w:270,h:55,c:"#bd8559",inner:"#4a3020",fr:"le deuxième tiroir",ar:"الدرج الثاني"}],
  add:[["🔦","la lampe de poche","المصباح اليدوي","the torch",700,467,40,-20,"t1"],["📎","le trombone","مشبك الورق","the paper clip",820,467,32,0,"t1"],["🎮","la manette","يد التحكم","the game controller",755,530,46,0,"t2"]]},
 mer:{boxes:[{id:"coffre",kind:"lid",x:86,y:500,w:148,h:42,c:"#8a5a35",fr:"le coffre au trésor",ar:"صندوق الكنز"}],
  front2:()=>`<g filter="url(#hs)"><rect x="90" y="538" width="140" height="70" rx="8" fill="#a0693d"/><rect x="90" y="560" width="140" height="10" fill="#e3b04b"/><rect x="152" y="548" width="16" height="22" rx="3" fill="#e3b04b"/></g>`,
  add:[["💎","le diamant","الماسة","the diamond",130,522,34,0,"coffre"],["🪙","la pièce","القطعة النقدية","the coin",190,524,34,0,"coffre"]]},
 foret:{boxes:[{id:"b1",kind:"bush",x:420,y:540,w:150,h:70,c:"#3b9440",fr:"le buisson",ar:"الشجيرة"},{id:"b2",kind:"bush",x:20,y:545,w:150,h:70,c:"#3b9440",fr:"le buisson",ar:"الشجيرة"}],
  move:{"🦔":[490,585,50,0,"b1"]},add:[["🐍","le serpent","الثعبان","the snake",90,588,48,0,"b2"]]}
};
Object.entries(HIDE).forEach(([id,m])=>{const sc=SCENES.find(s=>s.id===id);if(!sc)return;sc.boxes=m.boxes;if(m.front2)sc.front2=m.front2;
  sc.objs.forEach(o=>{const mv=m.move&&m.move[o[0]];if(mv){o[4]=mv[0];o[5]=mv[1];o[6]=mv[2];o[7]=mv[3];o[8]=mv[4]}});(m.add||[]).forEach(a=>sc.objs.push(a))});
