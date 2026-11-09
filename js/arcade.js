// ===== Moteur commun des jeux : barre de score, effets, écran de fin =====
// Aucun jeu n'a de chrono : l'enfant prend son temps.
const calm=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;
// une partie : hearts = 0 veut dire « pas de vies » (le jeu ne s'arrête jamais sur une erreur)
function newRun(total,hearts=0){return {total,done:0,score:0,combo:0,miss:0,hearts,max:hearts,ended:false}}
function runHit(r){r.combo++;const pts=100+Math.min(r.combo-1,5)*20;r.score+=pts;return pts}
function runMiss(r){r.combo=0;r.miss++;if(r.hearts>0)r.hearts--}
function hudIn(r){const pct=r.total?Math.min(100,Math.round(100*r.done/r.total)):0;
  return `${r.max?`<span class="hud-h" aria-label="${r.hearts} vies">${"❤️".repeat(r.hearts)}${"🖤".repeat(r.max-r.hearts)}</span>`:""}<div class="hud-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>${r.combo>1?`<span class="hud-c">🔥 x${r.combo}</span>`:""}<span class="hud-s" aria-label="Score">${r.score}</span>`}
const hudHTML=r=>`<div class="hud">${hudIn(r)}</div>`;
function hudDraw(r,root=document){const h=root.querySelector(".hud");if(h)h.innerHTML=hudIn(r)}

// ----- sons -----
function sfxHit(combo=1){const m=72+Math.min(combo,10);tone(midi(m),0,.12,.09);tone(midi(m+7),.07,.16,.08)}
function sfxWin(){[60,64,67,72,76,79,84].forEach((m,i)=>tone(midi(m),i*.09,.32,.09));tone(midi(48),0,.7,.06,"sine")}

// ----- effets : étincelles et points qui s'envolent depuis un élément -----
function fxBurst(el,items=["⭐","✨","💫"],n=12){if(!el||calm())return;const b=el.getBoundingClientRect(),cx=b.left+b.width/2,cy=b.top+b.height/2;
  for(let i=0;i<n;i++){const p=document.createElement("span");p.className="fxp";p.textContent=items[i%items.length];p.style.left=cx+"px";p.style.top=cy+"px";document.body.appendChild(p);
    const a=Math.random()*Math.PI*2,d=70+Math.random()*90;
    p.animate([{transform:"translate(-50%,-50%) scale(.5)",opacity:1},{transform:`translate(calc(-50% + ${Math.cos(a)*d}px),calc(-50% + ${Math.sin(a)*d}px)) scale(1.2) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:650+Math.random()*250,easing:"cubic-bezier(.15,.7,.3,1)"}).onfinish=()=>p.remove()}}
function fxPts(el,txt){if(!el||calm())return;const b=el.getBoundingClientRect(),p=document.createElement("span");p.className="fxpts";p.textContent=txt;p.style.left=b.left+b.width/2+"px";p.style.top=b.top+"px";document.body.appendChild(p);
  p.animate([{transform:"translate(-50%,0) scale(.7)",opacity:1},{transform:"translate(-50%,-70px) scale(1.15)",opacity:0}],{duration:800,easing:"ease-out"}).onfinish=()=>p.remove()}

// ----- écran de fin : 1 à 3 étoiles, données une seule fois par partie -----
// o = {run, id, stars, c, title, sub, again(), more:[[texte, fn]], back:[lien, texte]}
function gameEnd(host,o){const r=o.run;if(r.ended)return;r.ended=true;const st=Math.max(1,Math.min(3,o.stars));S.arc=S.arc||{};const rec=r.score>0&&r.score>(S.arc[o.id]||0);if(rec)S.arc[o.id]=r.score;
  host.innerHTML=`<div class="gend" style="--c:${o.c||"#7B5CF0"}"><div class="gend-st">${[1,2,3].map(i=>`<span class="${i<=st?"on":""}" style="--i:${i}">★</span>`).join("")}</div>
    <h2>${esc(o.title)}</h2>${o.sub?`<p dir="auto">${esc(o.sub)}</p>`:""}<div class="gend-sc"><small>${ts("النقاط","Score")}</small><b>${r.score}</b></div>${rec?`<div class="gend-rec">🏆 ${ts("رقم قياسي جديد!","Nouveau record !")}</div>`:""}
    <div class="ctrl" style="justify-content:center"><button class="play" id="gend-a" style="--c:${o.c||"#7B5CF0"}">↻ ${ts("إعادة","Rejouer")}</button>${(o.more||[]).map((m,i)=>`<button class="ghost" data-gm="${i}">${esc(m[0])}</button>`).join("")}${o.back?`<a class="ghost" href="${o.back[0]}">${esc(o.back[1])}</a>`:""}</div></div>`;
  $("#gend-a",host).onclick=o.again;host.querySelectorAll("[data-gm]").forEach(b=>b.onclick=o.more[+b.dataset.gm][1]);
  addStars(st);sfxWin();const box=$(".gend-st",host);[0,300,600].forEach(t=>setTimeout(()=>{if(box.isConnected)fxBurst(box,["⭐","✨","🎉"],14)},t))}
