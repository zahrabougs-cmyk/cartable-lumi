// ===== Espace jeux : tous les types de jeux au même endroit =====
const HUB_AR=["الدرس باللعب","ابحث وجد","الاختلافات الخمسة","الكلمة المبعثرة","لعبة الذاكرة","الفقاعات","فرنسيتي خطوة بخطوة","العوالم ثلاثية الأبعاد","ألبوم رسومي"];
const HUB=[
 ["#jeu-cours","🗺️","Le cours en jeu","Choisis une leçon : Lumi explique, puis tu gagnes chaque niveau.","#2F7FE0"],
 ["#cherche","🔎","Cherche et trouve","Ouvre le frigo, les tiroirs, les placards… et trouve les objets !","#EF6C3A"],
 ["#diff-chambre","🧩","Les 5 différences","Compare deux images et trouve ce qui a changé.","#8E5BD8"],
 ["#mots-melange-cuisine","🔤","Le mot mélangé","Remets les lettres dans l'ordre (français, arabe, anglais).","#DB3F8D"],
 ["#mots-memory-foret","🃏","Le memory","Retrouve les paires image + mot.","#C99400"],
 ["#mots-bulles-mer","🫧","Les bulles","Écoute le mot et touche la bonne bulle.","#1FA3C9"],
 ["#francais-debutant","🏠","Mon français pas à pas","Les sons, la maison, les couleurs, gauche et droite…","#2E9E62"],
 ["#monde-eau","🌍","Les mondes 3D","La goutte d'eau, la forêt, la cellule, l'ordinateur.","#4C5BD4"],
 ["#album","📒","Mon album de dessins","Regarde les dessins que tu as gagnés.","#E3A008"]];
function gamesHub(){const st=S.stars||0,lv=Math.floor(st/25)+1,pr=Math.round((st%25)/25*100);
  return `<a class="back" href="#accueil">← Accueil</a>
  <section class="arc-hero"><div class="lumi-girl small">${emo("👧🏽","girl")}</div><div class="arc-p"><small>${ts("اللاعب","Joueur")}</small><h1>${esc(S.name)}</h1><div class="arc-lv"><b>${ts("المستوى","Niveau")} ${lv}</b><div class="arc-bar"><span style="width:${pr}%"></span></div></div></div><a class="arc-st" href="#album"><b>⭐ ${st}</b><small>🎨 ${S.stickers.length} / ${STICKERS.length}</small></a></section>
  <div class="jhub">${HUB.map(([h,e,t,d,c],i)=>`<a class="jtile" href="${h}" style="--c:${c}">${emo(e,"jico")}<b>${tt(HUB_AR[i],t)}</b><small>${d}</small><span class="jplay">▶</span></a>`).join("")}</div>
  <h2 class="sec">🔎 ${tt("ابحث وجد","Cherche et trouve")}</h2>${sceneCards(SCENES.map(s=>s.id))}
  <h2 class="sec">🔤 ${tt("ألعاب الكلمات","Jeux de mots")}</h2><div class="wcards">${MGAMES.map(g=>`<a class="wcardx" href="#mots" style="--c:#DB3F8D">${emo(g[1],"sico")}<b>${g[2]}</b><small>${g[3]}</small></a>`).join("")}</div>
  <h2 class="sec">🎮 ${tt("ألعاب ثلاثية الأبعاد","Jeux en 3D")}</h2>${worldCards(Object.keys(WORLDS))}`}
function coursePick(){return `<a class="back" href="#jeux">← Espace jeux</a><h1 style="font-size:1.6em">🗺️ Le cours en jeu</h1><p style="color:var(--soft);margin-top:0">Choisis une leçon. Chaque leçon devient une carte avec des niveaux.</p>
  <div class="lessonpick">${SUBJECTS.map(s=>{const L=allLessons(s).map((t,n)=>[t,n]).filter(([t,n])=>LESSONS[s.id+"-"+n]);if(!L.length)return "";
   return `<div style="--c:${s.c}"><h3>${esc(s.name)}</h3><div class="row2">${L.map(([t,n])=>{const d=(S.adv||{})[s.id+"-"+n];return `<a href="#l-${s.id}-${n}"${isAr(t)?' dir="rtl"':""}>${d?"⭐":"▶"} ${esc(t)}</a>`}).join("")}</div></div>`}).join("")}</div>`}
