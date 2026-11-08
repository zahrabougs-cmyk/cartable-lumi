// ===== Jeux de mots : mot mélangé, memory, bulles =====
function wordThemes(){
  const t=SCENES.map(s=>({id:s.id,t:s.t,ico:s.ico,c:s.c,words:s.objs.map(o=>[o[1],o[2],o[0]])}));
  FLE.filter(u=>u.words).forEach(u=>t.push({id:u.id,t:u.t,ico:u.ico,c:u.c,words:u.words.map(w=>[w[0],w[2],w[1]])}));
  return t}
const MGAMES=[["melange","🔤","Le mot mélangé","Remets les lettres dans l'ordre"],["memory","🃏","Le memory","Trouve les paires image + mot"],["bulles","🫧","Les bulles","Touche la bulle du mot entendu"]];
function motsHome(){const th=wordThemes();const cur=S.motsTheme&&th.find(x=>x.id===S.motsTheme)?S.motsTheme:th[0].id;
  return `<a class="back" href="#jeux">← Les jeux</a><div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub">Choisis un thème, puis un jeu de mots !</div></div></div>
  <h2 class="sec">1. Le thème</h2><div class="chipsel">${th.map(x=>`<button data-th="${x.id}" aria-pressed="${x.id===cur}" style="--c:${x.c}">${emo(x.ico,"ci")} ${esc(x.t)}</button>`).join("")}</div>
  <h2 class="sec">2. La langue</h2><div class="chipsel">${[["fr","🇫🇷 Français"],["ar","عربي"],["en","🇬🇧 English"]].map(([k,l])=>`<button data-ml="${k}" aria-pressed="${(S.motsLang||"fr")===k}" style="--c:#7B5CF0">${l}</button>`).join("")}</div>
  <h2 class="sec">3. Le jeu</h2><div class="wcards">${MGAMES.map(g=>`<a class="wcardx" href="#mots-${g[0]}-${cur}" style="--c:${th.find(x=>x.id===cur).c}">${emo(g[1],"sico")}<b>${g[2]}</b><small>${g[3]}</small></a>`).join("")}</div>`}
document.addEventListener("click",e=>{const b=e.target.closest("[data-th]");if(b){S.motsTheme=b.dataset.th;save();render()}const l=e.target.closest("[data-ml]");if(l){S.motsLang=l.dataset.ml;save();render()}});
function coreWord(w){return w.replace(/^(le |la |les |l'|l’|un |une |des |the |a |an )/i,"").replace(/^ال(?=\S{2,})/,"")}
function mountMots(game,themeId,host,words,lang="fr"){
  const th=wordThemes().find(x=>x.id===themeId);words=words||th.words;
  if(!host.dataset.fixed&&!arguments[4]){lang=S.motsLang||"fr";if(lang==="ar")words=words.filter(w=>w[1]).map(w=>[stripAr(w[1]),w[0],w[2]]);if(lang==="en"){const sc=th&&SCENES.find(s=>s.id===themeId);if(sc)words=sc.objs.map(o=>[o[3],o[2],o[0]]);else lang="fr"}}const c=th?th.c:"#7B5CF0";host.style.setProperty("--c",c);
  const top=t=>`<div class="htop"><div class="lumi-girl small">${emo("👧🏽","girl")}<div class="bub" id="mbub">${esc(t)}</div></div></div>`;
  const tell=(fr,ar)=>{const b=$("#mbub");if(b)b.textContent=fr;const L2=lang==="ar"?"fr":"ar";speakSeq([{text:fr},...((S.readAr||lang==="ar")&&ar?[{text:ar,lang:L2}]:[])],lang)};
  if(game==="melange"){const list=shuffle(words.filter(w=>coreWord(w[0]).length<=10)).slice(0,6);let k=0;
    const step=()=>{if(k>=list.length){addStars(2);host.innerHTML=top(`Bravo ${S.name} ! Tu as reconstruit tous les mots.`)+`<div class="ctrl" style="justify-content:center"><button class="play" id="again">↻ Rejouer</button><a class="ghost" href="#mots">Autres jeux</a></div>`;chime();$("#again").onclick=()=>mountMots(game,themeId,host,words,lang);return}
      const [w,ar,e]=list[k];const core=coreWord(w),art=w.slice(0,w.length-core.length);const letters=shuffle([...core].map((ch,i)=>[ch,i]));let pos=0;
      host.innerHTML=top("Écoute le mot et remets les lettres dans l'ordre.")+`<p class="noteline">Mot ${k+1} sur ${list.length}</p>
       <div class="mcard">${emo(e,"mimg")}<button class="say" id="mhear">🔊</button><span class="ar">${esc(ar||"")}</span></div>
       ${lang==="ar"?`<div class="built ar" dir="rtl" id="built">…</div>`:""}<div class="slots"${lang==="ar"?' dir="rtl"':""}>${art?`<span class="art">${esc(art.trim())}</span>`:""}${[...core].map((ch,i)=>`<span class="slot${ch===" "||ch==="-"||ch==="'"?" fixed":""}" data-s="${i}">${ch===" "||ch==="-"||ch==="'"?esc(ch):""}</span>`).join("")}</div>
       <div class="tiles">${letters.filter(([ch])=>!(ch===" "||ch==="-"||ch==="'")).map(([ch,i])=>`<button class="tile" data-ch="${esc(ch)}">${esc(ch)}</button>`).join("")}</div><div id="rp"></div>`;
      const say=()=>tell(w,ar);say();$("#mhear").onclick=say;
      const adv=()=>{while(pos<core.length&&(core[pos]===" "||core[pos]==="-"||core[pos]==="'"))pos++};adv();
      host.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{if(t.dataset.ch.toLowerCase()===core[pos].toLowerCase()){host.querySelector(`.slot[data-s="${pos}"]`).textContent=core[pos];host.querySelector(`.slot[data-s="${pos}"]`).classList.add("on");t.remove();tone(midi(72+pos%8),0,.15,.07);pos++;adv();if($("#built"))$("#built").textContent=art+core.slice(0,pos);
          if(pos>=core.length){chime();lang==="ar"?speakSeq([{text:`أحسنت! ${w}. كرر: ${w}`}],"ar"):tell(`Bravo ! ${w}. Répète : ${w}.`,ar);repeatBlock($("#rp"),w,lang,()=>{addStars(1);k++;setTimeout(step,600)})}}
        else{buzz();t.classList.remove("bad");void t.offsetWidth;t.classList.add("bad")}})};
    step();return}
  if(game==="memory"){const list=shuffle(words).slice(0,6);const cards=shuffle(list.flatMap((w,i)=>[{i,img:1,w},{i,img:0,w}]));let open=[],done=0,lock=false,tries=0;
    host.innerHTML=top("Retourne deux cartes : trouve l'image et son mot.")+`<div class="mem">${cards.map((c,k)=>`<button class="mc" data-k="${k}"><span class="back">?</span><span class="face">${c.img?emo(c.w[2],"memimg"):`<b>${esc(c.w[0])}</b><small class="ar">${esc(c.w[1]||"")}</small>`}</span></button>`).join("")}</div><p class="noteline" id="mtr"></p>`;
    host.querySelectorAll(".mc").forEach(b=>b.onclick=()=>{if(lock||b.classList.contains("up"))return;const c=cards[+b.dataset.k];b.classList.add("up");open.push([b,c]);if(!c.img)sayOne(c.w[0],lang);
      if(open.length===2){tries++;lock=true;const [[b1,c1],[b2,c2]]=open;if(c1.i===c2.i&&c1.img!==c2.img){setTimeout(()=>{b1.classList.add("ok");b2.classList.add("ok");chime();tell(c1.w[0],c1.w[1]);open=[];lock=false;done++;if(done===list.length){addStars(3);$("#mtr").textContent=`Bravo ${S.name} ! Toutes les paires en ${tries} essais.`;sayOne(`Bravo ${S.name} ! Toutes les paires !`,"fr")}},400)}
        else setTimeout(()=>{b1.classList.remove("up");b2.classList.remove("up");open=[];lock=false},1000)}});
    return}
  if(game==="bulles"){let k=0,score=0;const rounds=8;
    const step=()=>{if(k>=rounds){addStars(Math.max(1,Math.round(score/3)));host.innerHTML=top(`Bravo ${S.name} ! ${score} bulles sur ${rounds}.`)+`<div class="ctrl" style="justify-content:center"><button class="play" id="again">↻ Rejouer</button><a class="ghost" href="#mots">Autres jeux</a></div>`;chime();$("#again").onclick=()=>mountMots(game,themeId,host,words,lang);return}
      const opts=shuffle(words).slice(0,4);const good=opts[Math.floor(Math.random()*opts.length)];let first=true;
      host.innerHTML=top("Écoute le mot et touche la bonne bulle !")+`<div class="bubbles">${opts.map((w,i)=>`<button class="bubble" data-w="${esc(w[0])}" style="--x:${8+i*23}%;--d:${(i*.7).toFixed(1)}s;--t:${6+Math.random()*2}s">${emo(w[2],"bimg")}<b>${esc(w[0])}</b></button>`).join("")}</div>
       <div class="ctrl" style="justify-content:center"><button class="ghost" id="bh">🔊 Réécouter</button><span class="clapscore">🫧 ${score}</span></div>`;
      const say=()=>tell(good[0],good[1]);say();$("#bh").onclick=say;
      host.querySelectorAll(".bubble").forEach(b=>b.onclick=()=>{if(b.dataset.w===good[0]){b.classList.add("pop");chime();if(first)score++;k++;setTimeout(step,500)}else{first=false;buzz();sayOne(b.dataset.w,lang);b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),400)}})};
    step()}
}
