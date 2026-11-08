// ===== Chansons rythmées : boîte à rythme + basse + mélodie + karaoké =====
const STYLES={
  pop:{n:"Pop",bpm:100,kick:"x...x...x...x...",snare:"....x.......x...",hat:"x.x.x.x.x.x.x.x.",perc:""},
  darbouka:{n:"Darbouka",bpm:96,kick:"",snare:"",hat:"..x...x...x...x.",perc:"D.T.TD..D.T.TD.."},
  rap:{n:"Rap",bpm:86,kick:"x..x..x...x..x..",snare:"....x.......x...",hat:"xxxxxxxxxxxxxxxx",perc:""},
  calme:{n:"Calme",bpm:78,kick:"x.......x.......",snare:"........x.......",hat:"..x...x...x...x.",perc:""}
};
let MZ={on:false,timer:null,step:0,next:0,style:"pop",voice:true,slow:false,lines:[],tune:[],lang:"fr",onLine:null,onBeat:null,startAt:0,spb:0};
let noiseBuf=null;
function noise(){const a=ac();if(!a)return null;if(noiseBuf)return noiseBuf;const b=a.createBuffer(1,a.sampleRate*.5,a.sampleRate);const d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;return noiseBuf=b}
function env(g,t,v,d){g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d)}
function kick(t){const a=ac(),o=a.createOscillator(),g=a.createGain();o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(40,t+.15);env(g,t,.5,.3);o.connect(g).connect(a.destination);o.start(t);o.stop(t+.35)}
function snare(t){const a=ac(),s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=noise();f.type="bandpass";f.frequency.value=1800;env(g,t,.25,.18);s.connect(f).connect(g).connect(a.destination);s.start(t);s.stop(t+.2);tone(190,t-a.currentTime,.1,.08,"triangle")}
function hat(t,v=.06){const a=ac(),s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=noise();f.type="highpass";f.frequency.value=7000;env(g,t,v,.05);s.connect(f).connect(g).connect(a.destination);s.start(t);s.stop(t+.06)}
function doum(t){const a=ac(),o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.setValueAtTime(110,t);o.frequency.exponentialRampToValueAtTime(65,t+.25);env(g,t,.45,.4);o.connect(g).connect(a.destination);o.start(t);o.stop(t+.45)}
function tek(t){const a=ac(),s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=noise();f.type="bandpass";f.frequency.value=3500;f.Q.value=2;env(g,t,.3,.07);s.connect(f).connect(g).connect(a.destination);s.start(t);s.stop(t+.08)}
function note(m,t,d,v,type){const a=ac(),o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.value=midi(m);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(a.destination);o.start(t);o.stop(t+d+.05)}
function musicStart(o){musicStop();const a=ac();if(!a)return;Object.assign(MZ,o,{on:true,step:0});const st=STYLES[MZ.style];
  const bpm=st.bpm*(MZ.slow?.82:1);MZ.spb=60/bpm/2; // durée d'une croche
  MZ.next=a.currentTime+.15;MZ.startAt=MZ.next+16*MZ.spb; // 1 mesure d'intro (2 temps × 8 croches)
  MZ.timer=setInterval(sched,25)}
function sched(){const a=ac();if(!MZ.on||!a)return;const st=STYLES[MZ.style];
  while(MZ.next<a.currentTime+.12){const t=MZ.next,s=MZ.step,i=s%16;
    if(st.kick[i]==="x")kick(t);if(st.snare[i]==="x")snare(t);if(st.hat[i]==="x")hat(t);
    if(st.perc[i]==="D")doum(t);if(st.perc[i]==="T")tek(t);
    const intro=s<16;const ls=intro?-1:s-16;
    // basse : note fondamentale toutes les noires
    if(i%4===0){const root=MZ.tune[Math.floor(ls/4+16)%MZ.tune.length]||60;note(root-24,t,MZ.spb*3.6,.16,"triangle")}
    // mélodie douce sur les temps, après l'intro
    if(!intro&&i%2===0)note(MZ.tune[(ls/2)%MZ.tune.length],t,MZ.spb*1.8,.045,"square");
    if(i%4===0){const beat=(s/4)%4;setTimeout(()=>MZ.on&&MZ.onBeat&&MZ.onBeat(beat,intro),Math.max(0,(t-a.currentTime)*1000))}
    if(!intro&&ls%16===0){const li=ls/16;if(li<MZ.lines.length)setTimeout(()=>MZ.on&&MZ.onLine&&MZ.onLine(li),Math.max(0,(t-a.currentTime)*1000));
      else if(li===MZ.lines.length){setTimeout(()=>{if(MZ.on){musicStop();MZ.onEnd&&MZ.onEnd()}},Math.max(0,(t-a.currentTime)*1000)+300)}}
    MZ.next+=MZ.spb;MZ.step++}}
function musicStop(){MZ.on=false;clearInterval(MZ.timer)}
function stopSong(){songOn=false;clearTimeout(songTimer);musicStop()}

function mountSong(P,s,L){
  const lang=s.lang;const rtl=lang==="ar"?' dir="rtl"':"";let combo=0,score=0;
  const seg=(k,opts,cur)=>`<div class="seg">${opts.map(([v,l])=>`<button data-m="${k}" data-v="${v}" aria-pressed="${String(cur)===String(v)}">${l}</button>`).join("")}</div>`;
  const opt={style:S.songStyle||"pop",voice:S.songVoice!==false,slow:!!S.songSlow};
  const draw=()=>{P.innerHTML=`<div class="song" style="--c:${s.c}"${rtl}>
   <div class="beats" id="bts"><i></i><i></i><i></i><i></i></div>
   ${L.song.map((l,k)=>`<div class="line" id="sl${k}">${esc(l)}</div>`).join("")}
   <div class="ctrl" style="justify-content:center"><button class="play" id="sp" style="--c:${s.c}">♪ Jouer la chanson</button><button class="ghost" id="clap">👏 Tape le rythme</button></div>
   <div class="clapscore" id="cs" aria-live="polite"></div></div>
   <div class="song-opts" dir="ltr">
    <div><span class="lb">Rythme</span>${seg("style",Object.entries(STYLES).map(([k,v])=>[k,v.n]),opt.style)}</div>
    <div><span class="lb">Voix</span>${seg("voice",[[true,"🎤 Lumi chante"],[false,"Karaoké : je chante seule"]],opt.voice)}</div>
    <div><span class="lb">Vitesse</span>${seg("slow",[[false,"Normale"],[true,"Lente"]],opt.slow)}</div></div>
   <p class="noteline">Une mesure pour compter « 1, 2, 3, 4 », puis chaque ligne s'allume au bon moment. Tape dans tes mains (ou sur le bouton 👏) sur les temps !</p>`;
   P.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{let v=b.dataset.v;if(v==="true")v=true;else if(v==="false")v=false;opt[b.dataset.m]=v;S["song"+b.dataset.m.charAt(0).toUpperCase()+b.dataset.m.slice(1)]=v;save();stopSong();stopSpeak();draw()});
   $("#sp").onclick=()=>{if(MZ.on){stopSong();stopSpeak();draw();return}
     $("#sp").textContent="■ Arrêter";score=0;combo=0;
     musicStart({style:opt.style,slow:opt.slow,voice:opt.voice,lines:L.song,tune:s.tune,lang,
       onBeat:(b,intro)=>{const d=$("#bts");if(!d)return;[...d.children].forEach((x,k)=>x.classList.toggle("on",k===b));d.classList.toggle("intro",intro);if(intro&&b<4)$("#cs").textContent=intro?["1","2","3","4"][b]+" …":""},
       onLine:i=>{P.querySelectorAll(".line").forEach((x,k)=>x.classList.toggle("now",k===i));$("#cs").textContent=score?`👏 ${score} points`:"";if(opt.voice){speakSeq([{text:L.song[i]}],lang,null,opt.slow?.9:1.05)}},
       onEnd:()=>{P.querySelectorAll(".line").forEach(x=>x.classList.remove("now"));const b=$("#sp");if(b)b.textContent="♪ Rejouer";chime();if(score)$("#cs").textContent=`Bravo ${S.name} ! 👏 ${score} points de rythme`}})};
   $("#clap").onclick=()=>{const a=ac();if(!MZ.on||!a){$("#cs").textContent="Lance d'abord la chanson ♪";return}
     const q=MZ.spb*2;const ph=((a.currentTime-MZ.next)%q+q)%q;const off=Math.min(ph,q-ph);
     if(off<.11){combo++;score+=10+combo;$("#cs").textContent=`✨ Parfait ! ×${combo}`;hat(a.currentTime,.12)}else if(off<.2){combo=0;score+=4;$("#cs").textContent="👍 Presque !"}else{combo=0;$("#cs").textContent="Écoute le boum… et tape !"}};
  };
  draw();
}
