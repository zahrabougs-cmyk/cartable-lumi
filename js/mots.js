// ===== Jeux de mots : l'atelier des lettres, le memory, la chasse aux bulles =====
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
  const alive=()=>document.body.contains(host);
  const tip=t=>`<p class="atip" id="mbub">${esc(t)}</p>`;
  const tell=(fr,ar)=>{const b=$("#mbub");if(b)b.textContent=fr;const L2=lang==="ar"?"fr":"ar";speakSeq([{text:fr},...((S.readAr||lang==="ar")&&ar?[{text:ar,lang:L2}]:[])],lang)};
  const again=()=>mountMots(game,themeId,host,words,lang);
  const fin=(run,stars,title,sub)=>{gameEnd(host,{run,id:"mots-"+game+"-"+(themeId||"lecon"),stars,c,title,sub,again,back:themeId?["#mots","Autres jeux"]:null});sayOne(title,"fr")};

  // ----- l'atelier des lettres -----
  if(game==="melange"){const list=shuffle(words.filter(w=>coreWord(w[0]).length<=10)).slice(0,6);if(!list.length)return;const run=newRun(list.length);let k=0;
    const fixe=ch=>ch===" "||ch==="-"||ch==="'";
    const step=()=>{if(!alive())return;if(k>=list.length)return fin(run,run.miss===0?3:run.miss<=Math.ceil(list.length/2)?2:1,`Bravo ${S.name} !`,"Tu as reconstruit tous les mots.");
      const [w,ar,e]=list[k];const core=coreWord(w),art=w.slice(0,w.length-core.length);const letters=shuffle([...core].map((ch,i)=>[ch,i]));let pos=0,faute=false;
      host.innerHTML=hudHTML(run)+`<div class="arena">${tip("Écoute le mot et remets les lettres dans l'ordre.")}
       <div class="mcard">${emo(e,"mimg")}<button class="say" id="mhear" aria-label="Écouter">🔊</button><span class="ar">${esc(ar||"")}</span></div>
       ${lang==="ar"?`<div class="built ar" dir="rtl" id="built">…</div>`:""}<div class="slots"${lang==="ar"?' dir="rtl"':""}>${art?`<span class="art">${esc(art.trim())}</span>`:""}${[...core].map((ch,i)=>`<span class="slot${fixe(ch)?" fixed":""}" data-s="${i}">${fixe(ch)?esc(ch):""}</span>`).join("")}</div>
       <div class="tiles">${letters.filter(([ch])=>!fixe(ch)).map(([ch])=>`<button class="tile" data-ch="${esc(ch)}">${esc(ch)}</button>`).join("")}</div><div id="rp"></div></div>`;
      const say=()=>tell(w,ar);say();$("#mhear").onclick=say;
      const adv=()=>{while(pos<core.length&&fixe(core[pos]))pos++};adv();
      host.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{if(pos>=core.length)return;
        if(t.dataset.ch.toLowerCase()===core[pos].toLowerCase()){const sl=host.querySelector(`.slot[data-s="${pos}"]`);sl.textContent=core[pos];sl.classList.add("on");t.remove();tone(midi(72+pos%8),0,.15,.07);pos++;adv();if($("#built"))$("#built").textContent=art+core.slice(0,pos);
          if(pos>=core.length){const pts=faute?(run.combo=0,run.score+=50,50):runHit(run);run.done=k+1;hudDraw(run,host);sfxHit(run.combo);fxBurst(host.querySelector(".slots"));fxPts(host.querySelector(".slots"),"+"+pts);lang==="ar"?speakSeq([{text:`أحسنت! ${w}. كرر: ${w}`}],"ar"):tell(`Bravo ! ${w}. Répète : ${w}.`,ar);repeatBlock($("#rp"),w,lang,()=>{addStars(1);k++;setTimeout(step,600)})}}
        else{buzz();if(!faute){faute=true;run.miss++;run.combo=0;hudDraw(run,host)}t.classList.remove("bad");void t.offsetWidth;t.classList.add("bad")}})};
    step();return}

  // ----- le memory -----
  if(game==="memory"){const list=shuffle(words).slice(0,6);const n=list.length,cards=shuffle(list.flatMap((w,i)=>[{i,img:1,w},{i,img:0,w}]));let open=[],lock=false,tries=0;const run=newRun(n);
    host.innerHTML=hudHTML(run)+`<div class="arena">${tip("Retourne deux cartes : trouve l'image et son mot.")}<div class="mem">${cards.map((c,k)=>`<button class="mc" data-k="${k}" aria-label="Carte ${k+1}"><span class="back">✦</span><span class="face">${c.img?emo(c.w[2],"memimg"):`<b dir="auto">${esc(c.w[0])}</b><small class="ar">${esc(c.w[1]||"")}</small>`}</span></button>`).join("")}</div></div>`;
    host.querySelectorAll(".mc").forEach(b=>b.onclick=()=>{if(lock||b.classList.contains("up"))return;const c=cards[+b.dataset.k];b.classList.add("up");tone(midi(67),0,.08,.06);open.push([b,c]);if(!c.img)sayOne(c.w[0],lang);
      if(open.length<2)return;tries++;lock=true;const [[b1,c1],[b2,c2]]=open;open=[];
      if(c1.i===c2.i&&c1.img!==c2.img){setTimeout(()=>{if(!alive())return;b1.classList.add("ok");b2.classList.add("ok");const pts=runHit(run);run.done++;hudDraw(run,host);sfxHit(run.combo);fxBurst(b1);fxBurst(b2);fxPts(b2,"+"+pts);tell(c1.w[0],c1.w[1]);lock=false;
          if(run.done===n){setTimeout(()=>{if(alive())fin(run,tries<=n+2?3:tries<=n*2?2:1,`Bravo ${S.name} !`,`Toutes les paires en ${tries} essais.`)},1200)}},400)}
      else{runMiss(run);hudDraw(run,host);setTimeout(()=>{b1.classList.remove("up");b2.classList.remove("up");lock=false},1000)}});
    return}

  // ----- la chasse aux bulles : les bulles montent, on écoute, on touche la bonne. 3 vies, pas de chrono -----
  if(game==="bulles"){const rounds=8,run=newRun(rounds,3);let good=null,bubs=[],lock=true,raf=0,lastT=0;
    host.innerHTML=hudHTML(run)+`<div class="arena sea">${tip("Écoute le mot et touche la bonne bulle !")}<div class="bpool" id="bp"><span class="fish f1">🐠</span><span class="fish f2">🐟</span><span class="fish f3">🐡</span><div class="sand"></div></div>
      <div class="ctrl" style="justify-content:center"><button class="ghost" id="bh">🔊 Réécouter</button></div></div>`;
    const bp=$("#bp"),GAP=130;
    const place=(b,t)=>{const W=bp.clientWidth,size=b.el.offsetWidth,x=(W-size)*b.lane+Math.sin(t/900+b.ph)*Math.min(14,W*.03);b.el.style.transform=`translate3d(${x}px,${b.y}px,0)`};
    const frame=t=>{if(!alive()||run.ended)return;const dt=Math.min(50,t-(lastT||t));lastT=t;const H=bp.clientHeight,span=Math.max(H+150,bubs.length*GAP);
      bubs.forEach(b=>{b.y-=dt*.05;if(b.y<-150)b.y+=span;place(b,t)});raf=requestAnimationFrame(frame)};
    const clear=()=>{bubs.forEach(b=>b.el.remove());bubs=[]};
    const end=()=>{cancelAnimationFrame(raf);const won=run.hearts>0;fin(run,!won?1:run.miss===0?3:2,won?`Bravo ${S.name} !`:`Encore une fois, ${S.name} !`,`${run.done} bulles sur ${rounds}.`)};
    const say=()=>{if(good)tell(good[0],good[1])};
    const round=()=>{if(!alive())return;if(run.done>=rounds||run.hearts<=0)return end();clear();const opts=shuffle(words).slice(0,4);good=opts[Math.floor(Math.random()*opts.length)];lock=false;
      const lanes=shuffle(opts.map((_,i)=>opts.length>1?i/(opts.length-1):.5)),H=bp.clientHeight;
      opts.forEach((w,i)=>{const el=document.createElement("button");el.className="bb";el.innerHTML=`${emo(w[2],"bimg")}<b dir="auto">${esc(w[0])}</b>`;bp.appendChild(el);
        const b={el,w,lane:lanes[i],y:calm()?20+(i%2)*(H*.42):H+20+i*GAP,ph:Math.random()*6};bubs.push(b);
        el.onclick=()=>{if(lock||el.disabled)return;
          if(w===good){lock=true;const pts=runHit(run);run.done++;hudDraw(run,host);sfxHit(run.combo);fxBurst(el,["🫧","✨","⭐"]);fxPts(el,"+"+pts);el.classList.add("pop");setTimeout(round,650)}
          else{buzz();runMiss(run);hudDraw(run,host);el.disabled=true;el.classList.add("bad");sayOne(w[0],lang);if(run.hearts<=0){lock=true;setTimeout(end,900)}}}});
      if(calm())bubs.forEach(b=>place(b,0));say()};
    $("#bh").onclick=say;round();if(!calm())raf=requestAnimationFrame(frame)}
}
