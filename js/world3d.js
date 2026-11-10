// ===== Mondes 3D (Three.js) =====
const WORLDS={
 eau:{t:"Le voyage de la goutte d'eau",ar:"رحلة قطرة الماء",ico:"🌍",c:"#2F7FE0",sub:"Physique · la Terre, la mer, le nuage, la pluie",build:worldEau},
 etats:{t:"Le labo des états de l'eau",ar:"مختبر حالات الماء",ico:"🧊",c:"#1FA3C9",sub:"Physique · solide, liquide, gazeux",build:worldEtats},
 foret:{t:"La forêt des animaux",ar:"غابة الحيوانات",ico:"🦊",c:"#2E9E62",sub:"SVT · trouve et nomme les animaux",build:worldForet},
 peau:{t:"Zoom dans la peau",ar:"تكبير الجلد",ico:"🔬",c:"#DB3F8D",sub:"SVT · de la main jusqu'à la cellule",build:worldPeau},
 ordi:{t:"L'ordinateur en 3D",ar:"الحاسوب ثلاثي الأبعاد",ico:"🖥️",c:"#7B5CF0",sub:"Informatique · entrée, traitement, sortie",build:worldOrdi}
};
let W=null; // monde actif
function disposeWorld(){if(!W)return;W.dead=true;cancelAnimationFrame(W.raf);try{W.ro&&W.ro.disconnect();W.renderer.dispose();W.renderer.forceContextLoss&&W.renderer.forceContextLoss()}catch(e){}W=null}

function mountWorld(host,id){
  disposeWorld();
  if(typeof THREE==="undefined"){host.innerHTML=`<div class="w3d-err">Le moteur 3D n'a pas pu se charger. Vérifie la connexion internet, puis recharge la page.</div>`;return}
  const def=WORLDS[id];
  host.innerHTML=`<div class="w3d" id="w3d" style="--c:${def.c}">
    <canvas></canvas><div class="w3d-labels"></div><div class="w3d-fade"></div>
    <div class="w3d-top"><b>${def.ico} ${esc(def.t)}</b><span class="ar">${esc(def.ar)}</span><span style="flex:1"></span>
      <button class="w3d-b" data-w="say" aria-label="Réécouter">🔊</button><button class="w3d-b" data-w="reset" aria-label="Recommencer">↺</button><button class="w3d-b" data-w="full" aria-label="Plein écran">⛶</button></div>
    <div class="w3d-hud"><div class="w3d-msg"><div class="fr"></div><div class="ar" dir="rtl"></div></div><div class="w3d-btns"></div><div class="w3d-extra"></div></div>
    <div class="w3d-hint">Glisse pour tourner · pince ou molette pour zoomer · touche les objets</div></div>`;
  const wrap=$("#w3d",host),canvas=wrap.querySelector("canvas");
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
  renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
  if("outputEncoding" in renderer)renderer.outputEncoding=THREE.sRGBEncoding;
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(55,1,.05,500);
  const w={id,def,wrap,renderer,scene,camera,clickables:[],updates:[],labels:[],dead:false,t:0,
    orbit:{theta:0,phi:1.2,r:10,target:new THREE.Vector3(),minR:1,maxR:60,minPhi:.15,maxPhi:1.5},tween:null,lastSay:null};
  W=w;
  // --- orbite à la main ---
  w.applyOrbit=()=>{const o=w.orbit;o.phi=Math.max(o.minPhi,Math.min(o.maxPhi,o.phi));o.r=Math.max(o.minR,Math.min(o.maxR,o.r));
    camera.position.set(o.target.x+o.r*Math.sin(o.phi)*Math.sin(o.theta),o.target.y+o.r*Math.cos(o.phi),o.target.z+o.r*Math.sin(o.phi)*Math.cos(o.theta));camera.lookAt(o.target)};
  w.flyTo=(to,ms=1400,done)=>{const o=w.orbit;const from={theta:o.theta,phi:o.phi,r:o.r,tx:o.target.x,ty:o.target.y,tz:o.target.z};
    const dest={theta:to.theta??o.theta,phi:to.phi??o.phi,r:to.r??o.r,tx:to.target?to.target.x:o.target.x,ty:to.target?to.target.y:o.target.y,tz:to.target?to.target.z:o.target.z};
    let dt=dest.theta-from.theta;while(dt>Math.PI)dt-=2*Math.PI;while(dt<-Math.PI)dt+=2*Math.PI;dest.theta=from.theta+dt;
    w.tween={from,dest,t0:performance.now(),ms,done}};
  const ptrs=new Map();let down=null,moved=0,pinch0=0;
  canvas.addEventListener("pointerdown",e=>{canvas.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});down={x:e.clientX,y:e.clientY};moved=0;if(ptrs.size===2){const [a,b]=[...ptrs.values()];pinch0=Math.hypot(a.x-b.x,a.y-b.y)}});
  canvas.addEventListener("pointermove",e=>{if(!ptrs.has(e.pointerId))return;const p=ptrs.get(e.pointerId);const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;moved+=Math.abs(dx)+Math.abs(dy);
    if(ptrs.size===2){const [a,b]=[...ptrs.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);if(pinch0){w.orbit.r*=pinch0/d;pinch0=d}}
    else if(!w.lockOrbit){w.orbit.theta-=dx*.008;w.orbit.phi-=dy*.006;w.tween=null}});
  const up=e=>{ptrs.delete(e.pointerId);if(ptrs.size<2)pinch0=0;if(down&&moved<8&&ptrs.size===0)tap(e);down=null};
  canvas.addEventListener("pointerup",up);canvas.addEventListener("pointercancel",e=>{ptrs.delete(e.pointerId)});
  canvas.addEventListener("wheel",e=>{e.preventDefault();w.orbit.r*=1+Math.sign(e.deltaY)*.08;w.tween=null},{passive:false});
  const ray=new THREE.Raycaster(),v2=new THREE.Vector2();
  function tap(e){const r=canvas.getBoundingClientRect();v2.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(v2,camera);
    const list=w.clickables.filter(c=>c.on!==false&&c.obj.visible!==false&&visibleUp(c.obj)).sort((a,b)=>(b.prio||0)-(a.prio||0));
    let best=null,bd=1e9,bp=-1e9;for(const c of list){const h=ray.intersectObject(c.obj,true);if(h.length){const p=c.prio||0;if(p>bp||(p===bp&&h[0].distance<bd)){best=c;bd=h[0].distance;bp=p}}}
    if(best){ac();best.fn(best.obj)}else if(w.onMiss)w.onMiss()}
  function visibleUp(o){while(o){if(o.visible===false)return false;o=o.parent}return true}
  // --- UI ---
  w.say=(fr,ar,then)=>{w.lastSay=[fr,ar];wrap.querySelector(".w3d-msg .fr").innerHTML=readable(fr,"fr");const a=wrap.querySelector(".w3d-msg .ar");a.innerHTML=ar&&S.trAr?readable(ar,"ar"):"";a.hidden=!(ar&&S.trAr);
    readEl(wrap.querySelector(".w3d-msg .fr"),"fr",()=>{if(S.readAr&&ar)readEl(a,"ar",then);else then&&then()})};
  w.buttons=list=>{const b=wrap.querySelector(".w3d-btns");b.innerHTML="";list.forEach(([label,fn,cls])=>{const x=document.createElement("button");x.className="w3d-btn "+(cls||"");x.innerHTML=label;x.onclick=()=>{ac();fn(x)};b.appendChild(x)})};
  w.extra=html=>{const e=wrap.querySelector(".w3d-extra");e.innerHTML=html||"";return e};
  w.fade=(mid)=>{const f=wrap.querySelector(".w3d-fade");f.classList.add("on");setTimeout(()=>{mid();setTimeout(()=>f.classList.remove("on"),80)},450)};
  w.label=(obj,html,dy=0,cls="")=>{const d=document.createElement("div");d.className="lab3d "+cls;d.innerHTML=html;wrap.querySelector(".w3d-labels").appendChild(d);const L={obj,d,dy,on:true};w.labels.push(L);return L};
  w.clearLabels=()=>{w.labels.forEach(l=>l.d.remove());w.labels=[]};
  w.click=(obj,fn,prio)=>{const c={obj,fn,prio};w.clickables.push(c);return c};
  w.xp=n=>{S.xp+=n;save();if(n>=10)addStars(1)};
  wrap.querySelector('[data-w="say"]').onclick=()=>w.lastSay&&w.say(...w.lastSay);
  wrap.querySelector('[data-w="reset"]').onclick=()=>mountWorld(host,id);
  wrap.querySelector('[data-w="full"]').onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():wrap.requestFullscreen().catch(()=>toast("Le plein écran n'est pas possible ici."))}catch(e){toast("Le plein écran n'est pas possible ici.")}};
  // --- taille & boucle ---
  const resize=()=>{const r=wrap.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/Math.max(1,r.height);camera.updateProjectionMatrix()};
  w.ro=new ResizeObserver(resize);w.ro.observe(wrap);resize();
  const vp=new THREE.Vector3();let last=performance.now();
  const loop=now=>{if(w.dead)return;if(!document.body.contains(wrap)){disposeWorld();return}
    const dt=Math.min(.05,(now-last)/1000);last=now;w.t+=dt;
    if(w.tween){const k=Math.min(1,(now-w.tween.t0)/w.tween.ms),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,f=w.tween.from,d=w.tween.dest,o=w.orbit;
      o.theta=f.theta+(d.theta-f.theta)*e;o.phi=f.phi+(d.phi-f.phi)*e;o.r=f.r+(d.r-f.r)*e;o.target.set(f.tx+(d.tx-f.tx)*e,f.ty+(d.ty-f.ty)*e,f.tz+(d.tz-f.tz)*e);
      if(k>=1){const dn=w.tween.done;w.tween=null;dn&&dn()}}
    w.applyOrbit();w.updates.forEach(u=>u(dt,w.t));
    const r=canvas.getBoundingClientRect();
    w.labels.forEach(L=>{if(!L.on||!visibleUp(L.obj)){L.d.style.display="none";return}L.obj.getWorldPosition(vp);vp.y+=L.dy;vp.project(camera);
      if(vp.z>1||vp.z<-1){L.d.style.display="none";return}L.d.style.display="";L.d.style.transform=`translate(-50%,-100%) translate(${(vp.x+1)/2*r.width}px,${(1-vp.y)/2*r.height}px)`});
    renderer.render(scene,camera);w.raf=requestAnimationFrame(loop)};
  w.raf=requestAnimationFrame(loop);
  def.build(w);
  return w;
}

// ----- petits outils 3D -----
const M=(c,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.8,metalness:0},o));
function mesh(g,m,x=0,y=0,z=0){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);return o}
function emojiTex(e){const c=document.createElement("canvas");c.width=c.height=128;const x=c.getContext("2d");x.textAlign="center";x.textBaseline="middle";x.font='100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';x.fillText(e,64,70);const t=new THREE.CanvasTexture(c);return t}
function emoji(e,size=1.5){const mat=new THREE.SpriteMaterial({map:emojiTex(e),transparent:true,depthWrite:false});try{const L=new THREE.TextureLoader();L.setCrossOrigin("anonymous");const cs=emoCands(e);const tryN=n=>{if(n>=cs.length)return;L.load(cs[n],t=>{if("encoding" in t)t.encoding=THREE.sRGBEncoding;mat.map=t;mat.needsUpdate=true},undefined,()=>tryN(n+1))};tryN(0)}catch(_){}const s=new THREE.Sprite(mat);s.scale.set(size,size,1);return s}
function rnd(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296}}
function lab(fr,ar){return `<b>${esc(fr)}</b>${ar&&S.trAr?`<span class="ar">${esc(ar)}</span>`:""}`}
function quiz3d(w,qs,done){let k=0;const step=()=>{if(k>=qs.length){done&&done();return}const q=qs[k];w.say(q.q,q.qa);
  w.buttons(shuffle(q.ch.map((c,i)=>[c,i])).map(([c,i])=>[`${esc(c[0])}${S.trAr&&c[1]?`<small class="ar">${esc(c[1])}</small>`:""}`,b=>{if(i===q.a){chime();b.classList.add("good");w.xp(10);k++;setTimeout(step,700)}else{buzz();b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),500)}}]))};step()}

// ===== 1. Le voyage de la goutte d'eau =====
function worldEau(w){
  const {scene}=w;scene.background=new THREE.Color("#050816");
  const sunL=new THREE.DirectionalLight("#ffffff",1.2);sunL.position.set(-8,6,6);scene.add(sunL,new THREE.AmbientLight("#8899bb",.45));
  // --- espace ---
  const space=new THREE.Group();scene.add(space);
  const tc=document.createElement("canvas");tc.width=1024;tc.height=512;const x=tc.getContext("2d");
  const og=x.createLinearGradient(0,0,0,512);og.addColorStop(0,"#1b4f9c");og.addColorStop(.5,"#2a73c9");og.addColorStop(1,"#1b4f9c");x.fillStyle=og;x.fillRect(0,0,1024,512);
  const R=rnd(7);for(let i=0;i<16;i++){const cx=R()*1024,cy=110+R()*290,n=10+R()*20;for(let j=0;j<n;j++){x.fillStyle=R()<.25?"#c9a76b":R()<.5?"#4d9a45":"#3c8a3a";x.beginPath();x.arc(cx+(R()-.5)*150,cy+(R()-.5)*90,10+R()*34,0,7);x.fill()}}
  x.fillStyle="#f4f8ff";x.fillRect(0,0,1024,30);x.fillRect(0,482,1024,30);
  const earth=mesh(new THREE.SphereGeometry(2,64,48),new THREE.MeshStandardMaterial({map:new THREE.CanvasTexture(tc),roughness:.9}));space.add(earth);
  const cc=document.createElement("canvas");cc.width=1024;cc.height=512;const y=cc.getContext("2d");for(let i=0;i<220;i++){y.fillStyle=`rgba(255,255,255,${.25+R()*.4})`;y.beginPath();y.ellipse(R()*1024,40+R()*430,20+R()*60,8+R()*16,0,0,7);y.fill()}
  const clouds=mesh(new THREE.SphereGeometry(2.06,64,48),new THREE.MeshStandardMaterial({map:new THREE.CanvasTexture(cc),transparent:true,depthWrite:false}));space.add(clouds);
  const atm=mesh(new THREE.SphereGeometry(2.25,48,32),new THREE.MeshBasicMaterial({color:"#5fb4ff",transparent:true,opacity:.12,side:THREE.BackSide}));space.add(atm);
  const sg=new THREE.BufferGeometry(),sp=[];for(let i=0;i<1200;i++){const v=new THREE.Vector3(R()-.5,R()-.5,R()-.5).normalize().multiplyScalar(60+R()*40);sp.push(v.x,v.y,v.z)}
  sg.setAttribute("position",new THREE.Float32BufferAttribute(sp,3));space.add(new THREE.Points(sg,new THREE.PointsMaterial({color:"#ffffff",size:.35})));
  w.orbit.r=7.5;w.orbit.phi=1.35;w.orbit.minR=2.6;w.orbit.maxR=20;
  const L70=w.label(earth,lab("70 % d'eau","70٪ ماء"),2.4);
  w.updates.push(dt=>{earth.rotation.y+=dt*.15;clouds.rotation.y+=dt*.19});
  w.say(`Voici la Terre, ${S.name}. Elle tourne sur elle-même. L'eau couvre 70 % de sa surface : c'est la planète bleue ! Touche la Terre pour plonger dans la mer.`,"هذه هي الأرض. إنها تدور حول نفسها. يغطي الماء 70٪ من سطحها: إنها الكوكب الأزرق! المس الأرض لنغوص في البحر.");
  w.buttons([["🌊 Plonger dans la mer",()=>dive()]]);
  const dc=w.click(earth,()=>dive());
  function dive(){dc.on=false;w.buttons([]);w.flyTo({r:2.65,phi:1.3},1300,()=>w.fade(()=>{space.visible=false;L70.on=false;buildSea()}))}
  // --- la mer, le soleil, la montagne ---
  function buildSea(){
    scene.background=new THREE.Color("#9fd3ff");scene.fog=new THREE.Fog("#9fd3ff",40,90);
    const sea=new THREE.Group();scene.add(sea);
    const og=new THREE.PlaneGeometry(34,30,70,60);og.rotateX(-Math.PI/2);const ocean=mesh(og,M("#2a7fd4",{roughness:.35,flatShading:true}),-9,0,0);sea.add(ocean);
    const base=og.attributes.position.array.slice();
    w.updates.push((dt,t)=>{const p=og.attributes.position.array;for(let i=0;i<p.length;i+=3)p[i+1]=Math.sin(base[i]*.6+t*1.6)*.12+Math.cos(base[i+2]*.5+t*1.2)*.1;og.attributes.position.needsUpdate=true});
    const ground=mesh(new THREE.BoxGeometry(18,2.4,30),M("#6fb45a",{transparent:true,opacity:.92}),16,-1.12,0);sea.add(ground);
    const beach=mesh(new THREE.BoxGeometry(2.4,2.3,30),M("#e6cf8f"),7.6,-1.1,0);sea.add(beach);
    const nappe=mesh(new THREE.BoxGeometry(14,.7,10),M("#3d8fe0",{transparent:true,opacity:.75}),15,-1.7,2);sea.add(nappe);nappe.visible=false;
    const mount=mesh(new THREE.ConeGeometry(5,8,7),M("#8a6d4b",{flatShading:true}),17,4,-4);sea.add(mount);
    const snow=mesh(new THREE.ConeGeometry(1.9,3,7),M("#ffffff",{flatShading:true}),17,6.6,-4);sea.add(snow);
    const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(15,.15,-1),new THREE.Vector3(13,.12,1),new THREE.Vector3(11,.12,0),new THREE.Vector3(9.5,.1,2),new THREE.Vector3(7.5,.08,1.5)]);
    const river=mesh(new THREE.TubeGeometry(curve,40,.45,8,false),M("#3d9be9",{roughness:.3}));river.scale.y=.25;sea.add(river);
    const sun=mesh(new THREE.SphereGeometry(1.6,32,24),new THREE.MeshBasicMaterial({color:"#ffd23f"}),-12,14,-10);sea.add(sun);
    const glow=emoji("☀️",6);glow.position.copy(sun.position);sea.add(glow);
    for(let i=0;i<7;i++){const tr=new THREE.Group();tr.add(mesh(new THREE.CylinderGeometry(.15,.2,1.2),M("#7a5230"),0,.6,0),mesh(new THREE.IcosahedronGeometry(.8,0),M("#2f7d3a",{flatShading:true}),0,1.6,0));tr.position.set(10+Math.random()*12,0,6+Math.random()*7);sea.add(tr)}
    const cloud=new THREE.Group();[[0,0,0,1.6],[1.5,.3,.2,1.2],[-1.5,.2,0,1.3],[.6,.9,0,1.1],[-.7,.8,.3,1],[2.6,-.1,0,.9],[-2.5,-.1,0,.8]].forEach(([a,b,c,r])=>cloud.add(mesh(new THREE.SphereGeometry(r,20,16),M("#ffffff",{roughness:1}),a,b,c)));
    cloud.position.set(6,10,-2);cloud.scale.setScalar(.01);sea.add(cloud);
    // particules
    const mk=(n,col,sz)=>{const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.Float32BufferAttribute(new Float32Array(n*3),3));const p=new THREE.Points(g,new THREE.PointsMaterial({color:col,size:sz,transparent:true,opacity:.9}));p.visible=false;sea.add(p);return p};
    const evap=mk(160,"#e3f3ff",.35),rain=mk(320,"#2f6fd0",.22),flow=mk(70,"#bfe4ff",.3),inf=mk(50,"#1d5fb8",.3);
    const ed=[...Array(160)].map(()=>({x:-18+Math.random()*22,z:-10+Math.random()*16,h:Math.random()*10}));
    const rd=[...Array(320)].map(()=>({x:3+Math.random()*7,z:-4+Math.random()*4,h:Math.random()*9}));
    const fd=[...Array(70)].map(()=>({u:Math.random()})),idd=[...Array(50)].map(()=>({x:11+Math.random()*8,z:-1+Math.random()*6,h:Math.random()}));
    let phase="sun",ph=0;
    w.orbit.target.set(2,3,0);w.orbit.r=30;w.orbit.phi=1.2;w.orbit.theta=.25;w.orbit.minR=8;w.orbit.maxR=55;w.orbit.maxPhi=1.45;w.applyOrbit();
    const LS=w.label(sun,lab("Le soleil","الشمس"),2.2);
    w.say("Nous voici au bord de la mer. Le soleil brille. Touche le soleil pour chauffer l'eau de la mer !","نحن الآن قرب البحر. الشمس مشرقة. المس الشمس لتسخين ماء البحر!");
    const csun=w.click(sun,()=>{if(phase!=="sun")return;csun.on=false;phase="evap";ph=0;evap.visible=true;sun.scale.setScalar(1.3);chime();w.xp(5);
      w.label(ocean,lab("Évaporation","التبخر"),3,"big");
      w.say("Bravo ! La chaleur du soleil transforme l'eau en vapeur. La vapeur monte dans le ciel : c'est l'évaporation.","أحسنت! حرارة الشمس تحول الماء إلى بخار. يصعد البخار إلى السماء: هذا هو التبخر.")},1);
    w.click(glow,()=>csun.on!==false&&csun.fn());
    const ccl=w.click(cloud,()=>{if(phase!=="cloud")return;phase="rain";ph=0;rain.visible=true;chime();w.xp(5);w.label(cloud,lab("Précipitations","التساقطات"),-3.2,"big");
      w.say("Le nuage est trop lourd. L'eau tombe en pluie, et en neige sur la montagne : ce sont les précipitations.","السحابة ثقيلة جدا. ينزل الماء مطرا، وثلجا فوق الجبل: هذه هي التساقطات.")},2);
    const criv=w.click(river,()=>{if(phase!=="river")return;phase="flow";ph=0;flow.visible=true;inf.visible=true;nappe.visible=true;chime();w.xp(5);
      w.label(river,lab("Ruissellement","الجريان السطحي"),1.4,"big");w.label(nappe,lab("Infiltration → nappe souterraine","التسرب ← الفرشة المائية"),.8,"big");
      w.say("L'eau de pluie coule dans la rivière jusqu'à la mer : c'est le ruissellement. Une partie entre dans le sol : c'est l'infiltration. Elle forme une nappe souterraine.","يجري ماء المطر في النهر حتى البحر: هذا هو الجريان السطحي. وجزء منه يدخل في التربة: هذا هو التسرب، ويكون الفرشة المائية.")},2);
    w.updates.push((dt,t)=>{ph+=dt;glow.material.rotation+=dt*.2;
      if(phase==="evap"||phase==="cloud"||phase==="rain"||phase==="flow"){const p=evap.geometry.attributes.position.array;ed.forEach((d,i)=>{d.h+=dt*(1.6+i%5*.2);if(d.h>9){d.h=0}const k=d.h/9;p[i*3]=d.x+(6-d.x)*k*k;p[i*3+1]=.2+d.h;p[i*3+2]=d.z+(-2-d.z)*k*k});evap.geometry.attributes.position.needsUpdate=true;
        const s=Math.min(1,cloud.scale.x+dt*.12);cloud.scale.setScalar(s)}
      if(phase==="evap"&&ph>6){phase="cloud";w.label(cloud,lab("Condensation : un nuage","التكاثف: سحابة"),2.4,"big");
        w.say("En haut, il fait froid. La vapeur se refroidit et forme des gouttelettes : c'est la condensation. Un nuage est né ! Touche le nuage.","في الأعلى الجو بارد. يبرد البخار ويكون قطيرات: هذا هو التكاثف. لقد ولدت سحابة! المس السحابة.");w.flyTo({target:new THREE.Vector3(6,7,-2),r:22},1600)}
      if(phase==="rain"||phase==="river"||phase==="flow"){cloud.position.x+=(13-cloud.position.x)*dt*.5;cloud.children.forEach(m=>m.material.color.lerp(new THREE.Color("#8a96a8"),dt*.6));const p=rain.geometry.attributes.position.array;rd.forEach((d,i)=>{d.h-=dt*9;if(d.h<0)d.h=9;p[i*3]=d.x+cloud.position.x-6.5;p[i*3+1]=d.h;p[i*3+2]=d.z});rain.geometry.attributes.position.needsUpdate=true}
      if(phase==="rain"&&ph>5){phase="river";w.flyTo({target:new THREE.Vector3(11,1,0),r:20,phi:1.0},1500);w.say("La pluie arrive sur la terre. Où va cette eau ? Touche la rivière !","وصل المطر إلى الأرض. أين يذهب هذا الماء؟ المس النهر!")}
      if(phase==="flow"){const p=flow.geometry.attributes.position.array;fd.forEach((d,i)=>{d.u=(d.u+dt*.18)%1;const v=curve.getPoint(d.u);p[i*3]=v.x;p[i*3+1]=v.y+.25;p[i*3+2]=v.z});flow.geometry.attributes.position.needsUpdate=true;
        const q=inf.geometry.attributes.position.array;idd.forEach((d,i)=>{d.h=(d.h+dt*.35)%1;q[i*3]=d.x;q[i*3+1]=-d.h*1.6;q[i*3+2]=d.z});inf.geometry.attributes.position.needsUpdate=true;
        if(ph>7){phase="end";w.flyTo({target:new THREE.Vector3(2,3,0),r:34,phi:1.15,theta:.6},1800);
          w.say(`Et l'eau retourne à la mer… le cycle recommence ! Bravo ${S.name}. Petit quiz ?`,"ويعود الماء إلى البحر… وتبدأ الدورة من جديد! أحسنت. هل نلعب مسابقة صغيرة؟");
          w.buttons([["🎯 Le quiz",()=>quiz3d(w,[
            {q:"Quand le soleil chauffe la mer et que l'eau devient vapeur, c'est…",qa:"عندما تسخن الشمس البحر ويصير الماء بخارا، هذا هو…",ch:[["l'évaporation","التبخر"],["la condensation","التكاثف"],["l'infiltration","التسرب"]],a:0},
            {q:"Le nuage se forme grâce à…",qa:"تتكون السحابة بفضل…",ch:[["la condensation","التكاثف"],["le ruissellement","الجريان السطحي"],["l'évaporation","التبخر"]],a:0},
            {q:"L'eau qui entre dans le sol, c'est…",qa:"الماء الذي يدخل في التربة هو…",ch:[["l'infiltration","التسرب"],["les précipitations","التساقطات"],["l'évaporation","التبخر"]],a:0}],
            ()=>{w.say(`Super ${S.name} ! Tu connais le cycle de l'eau.`,"رائع! أنت تعرف دورة الماء.");w.buttons([["↺ Recommencer le voyage",()=>w.wrap.querySelector('[data-w="reset"]').click()]])})]])}}
      sun.scale.setScalar(phase==="sun"?1+Math.sin(t*3)*.06:1.25)});
  }
}

// ===== 2. Le labo des états de l'eau =====
function worldEtats(w){
  const {scene}=w;scene.background=new THREE.Color("#eaf3fb");
  scene.add(new THREE.HemisphereLight("#ffffff","#a8c0d8",.9));const dl=new THREE.DirectionalLight("#ffffff",.7);dl.position.set(4,8,6);scene.add(dl);
  const B=4;const box=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(B,B,B)),new THREE.LineBasicMaterial({color:"#33507a"}));box.position.y=B/2;scene.add(box);
  const glass=mesh(new THREE.BoxGeometry(B,B,B),new THREE.MeshStandardMaterial({color:"#bcd7f2",transparent:true,opacity:.12,depthWrite:false}),0,B/2,0);scene.add(glass);
  const plate=mesh(new THREE.CylinderGeometry(3.4,3.6,.4,40),M("#5b6475"),0,-.2,0);scene.add(plate);
  const flame=emoji("🔥",2.2);flame.position.set(0,-.9,2.6);scene.add(flame);
  const N=64,parts=[],g=new THREE.SphereGeometry(.2,16,12);
  for(let i=0;i<N;i++){const m=mesh(g,M("#2f7fe0",{roughness:.3}));const lx=(i%4)-1.5,ly=Math.floor(i/16),lz=Math.floor(i/4)%4-1.5;
    m.userData={lat:new THREE.Vector3(lx*.5,.35+ly*.5,lz*.5),v:new THREE.Vector3((Math.random()-.5),(Math.random()-.5),(Math.random()-.5))};m.position.copy(m.userData.lat);scene.add(m);parts.push(m)}
  w.orbit.target.set(0,2,0);w.orbit.r=11;w.orbit.phi=1.1;w.orbit.theta=.5;w.orbit.minR=5;w.orbit.maxR=25;
  let T=20,state="";const cS=new THREE.Color("#cfeaff"),cL=new THREE.Color("#2f7fe0"),cG=new THREE.Color("#e9f1fa");
  const ex=w.extra(`<div class="thermo"><span>❄</span><input type="range" id="tmp" min="-20" max="120" value="20" aria-label="Température"><span>🔥</span><b id="tval">20 °C</b></div>`);
  const tl=w.label(box,"",B/2+.6,"big");
  const setState=()=>{const ns=T<=0?"s":T<100?"l":"g";$("#tval",ex).textContent=`${T} °C`;flame.visible=T>60;flame.scale.setScalar(T>100?3:2);
    if(ns===state)return;state=ns;
    const d={s:["Solide : la glace","صلبة: الجليد",`Il fait ${T} degrés. Les petites particules d'eau sont serrées et rangées. Elles bougent à peine : c'est l'état solide, la glace.`,"الجسيمات الصغيرة للماء متراصة ومرتبة، ولا تتحرك تقريبا: هذه هي الحالة الصلبة، الجليد."],
      l:["Liquide : l'eau","سائلة: الماء","Entre 0 et 100 degrés, les particules glissent les unes sur les autres. L'eau coule : c'est l'état liquide.","بين 0 و100 درجة، تنزلق الجسيمات فوق بعضها. الماء يسيل: هذه هي الحالة السائلة."],
      g:["Gazeux : la vapeur","غازية: البخار","Au-dessus de 100 degrés, l'eau bout ! Les particules sont libres et vont partout : c'est l'état gazeux, la vapeur d'eau.","فوق 100 درجة، يغلي الماء! الجسيمات حرة وتذهب في كل مكان: هذه هي الحالة الغازية، بخار الماء."]}[ns];
    tl.d.innerHTML=lab(d[0],d[1]);w.say(d[2],d[3]);if(!setState.first)setState.first=1;else w.xp(3)};
  $("#tmp",ex).oninput=e=>{T=+e.target.value;setState()};
  w.buttons([["❄ Très froid : −10 °C",()=>{T=-10;$("#tmp",ex).value=T;setState()}],["💧 Normal : 20 °C",()=>{T=20;$("#tmp",ex).value=T;setState()}],["🔥 Très chaud : 110 °C",()=>{T=110;$("#tmp",ex).value=T;setState()}]]);
  w.updates.push((dt,t)=>{const h=B/2-.2;parts.forEach((m,i)=>{const u=m.userData;
    if(state==="s"){m.position.lerp(u.lat,Math.min(1,dt*4));m.position.x+=Math.sin(t*20+i)*.004;m.material.color.lerp(cS,dt*3);m.material.opacity=1}
    else{const sp=state==="l"?1.1:4.2;u.v.y-=state==="l"?dt*3:0;m.position.addScaledVector(u.v,dt*sp);
      const top=state==="l"?1.7:B-.2;["x","z"].forEach(a=>{if(m.position[a]>h){m.position[a]=h;u.v[a]=-Math.abs(u.v[a])}if(m.position[a]<-h){m.position[a]=-h;u.v[a]=Math.abs(u.v[a])}});
      if(m.position.y<.2){m.position.y=.2;u.v.y=Math.abs(u.v.y)*.9+(state==="g"?.3:0)}if(m.position.y>top){m.position.y=top;u.v.y=-Math.abs(u.v.y)}
      if(state==="l"){u.v.x+=(Math.random()-.5)*dt*4;u.v.z+=(Math.random()-.5)*dt*4;u.v.clampLength(0,1.2)}else{u.v.clampLength(.6,1.4)}
      m.material.color.lerp(state==="l"?cL:cG,dt*3)}})});
  setState();
}

// ===== 3. La forêt des animaux =====
const ANIMAUX=[["le renard","🦊","الثعلب"],["le sanglier","🐗","الخنزير البري"],["la chouette","🦉","البومة"],["l'oiseau","🐦","الطائر"],["la grenouille","🐸","الضفدع"],["l'escargot","🐌","الحلزون"],["le papillon","🦋","الفراشة"],["la coccinelle","🐞","الدعسوقة"],["le hérisson","🦔","القنفذ"],["l'écureuil","🐿️","السنجاب"],["la tortue","🐢","السلحفاة"],["le lapin","🐇","الأرنب"],["l'abeille","🐝","النحلة"],["le champignon","🍄","الفطر"]];
function worldForet(w){
  const {scene}=w;scene.background=new THREE.Color("#a8dcff");scene.fog=new THREE.Fog("#a8dcff",30,70);
  scene.add(new THREE.HemisphereLight("#ffffff","#557a3a",.8));const dl=new THREE.DirectionalLight("#fff6dd",.9);dl.position.set(-10,20,8);scene.add(dl);
  const hgt=(x,z)=>Math.sin(x*.18)*.8+Math.cos(z*.15)*.7+Math.sin((x+z)*.09)*.6;
  const gg=new THREE.PlaneGeometry(70,70,70,70);gg.rotateX(-Math.PI/2);const gp=gg.attributes.position.array;
  for(let i=0;i<gp.length;i+=3){const d=Math.hypot(gp[i]-6,gp[i+2]-4);gp[i+1]=d<5?-.6:hgt(gp[i],gp[i+2])}gg.computeVertexNormals();
  const ground=mesh(gg,M("#6aa84f",{flatShading:true}));scene.add(ground);
  const pond=mesh(new THREE.CircleGeometry(4.6,40),M("#3b8fd6",{roughness:.2,transparent:true,opacity:.9}),6,-.15,4);pond.rotation.x=-Math.PI/2;scene.add(pond);
  const rock=mesh(new THREE.DodecahedronGeometry(1.3,0),M("#8b8f98",{flatShading:true}),-6,hgt(-6,-5)+.6,-5);scene.add(rock);
  const sun=emoji("☀️",5);sun.position.set(-18,22,-20);scene.add(sun);
  const R=rnd(11);const trees=[];
  for(let i=0;i<55;i++){let x=(R()-.5)*56,z=(R()-.5)*56;if(Math.hypot(x-6,z-4)<6.5||Math.hypot(x,z)<4){i--;continue}
    const t=new THREE.Group();const cork=R()<.5;t.add(mesh(new THREE.CylinderGeometry(.25,.4,2.6,7),M(cork?"#b2643a":"#6d4a2f",{flatShading:true}),0,1.3,0));
    t.add(mesh(new THREE.IcosahedronGeometry(1.6+R()*.6,0),M(R()<.5?"#2f7a36":"#3d8b40",{flatShading:true}),0,3.4,0));t.position.set(x,hgt(x,z),z);scene.add(t);trees.push(t)}
  w.label(trees[0],lab("Chêne-liège","شجرة الفلين"),4.8);
  const animals=ANIMAUX.map((a,i)=>{const s=emoji(a[1],a[1]==="🐝"||a[1]==="🦋"||a[1]==="🐞"?1.3:1.9);let x,z;
    if(a[1]==="🐸"||a[1]==="🐢"){const ang=R()*6.28;x=6+Math.cos(ang)*5;z=4+Math.sin(ang)*5}else{do{x=(R()-.5)*34;z=(R()-.5)*34}while(Math.hypot(x-6,z-4)<5.5)}
    const fly=a[1]==="🦋"||a[1]==="🐝"||a[1]==="🐦"||a[1]==="🦉";const y0=hgt(x,z)+(fly?3+R()*2:.9);s.position.set(x,y0,z);s.userData={a,y0,ph:R()*6,fly};scene.add(s);return s});
  w.updates.push((dt,t)=>animals.forEach(s=>{const u=s.userData;s.position.y=u.y0+Math.sin(t*2+u.ph)*(u.fly?.35:.08);if(u.fly){s.position.x+=Math.sin(t*.6+u.ph)*dt*.6}}));
  w.orbit.target.set(0,1,0);w.orbit.r=30;w.orbit.phi=1.05;w.orbit.minR=4;w.orbit.maxR=45;w.orbit.maxPhi=1.42;
  let mode="explore",mission=[],mk=0,miss=0,curL=null;
  const show=(s)=>{const [n,e,ar]=s.userData.a;if(curL){curL.d.remove();w.labels=w.labels.filter(l=>l!==curL)}curL=w.label(s,lab(n,ar),1.4,"big");
    w.flyTo({target:s.position.clone(),r:7,phi:1.2},1100)};
  const repeatUI=(word,done)=>{const e=w.extra('<div class="w3d-rep"></div>');repeatBlock(e.firstChild,word,"fr",()=>{chime();w.xp(5);w.extra("");done&&done()})};
  const explore=()=>{mode="explore";w.say(`Bienvenue dans la forêt, ${S.name} ! Il y a beaucoup d'êtres vivants. Tourne la forêt avec ton doigt et touche un animal pour entendre son nom.`,"مرحبا بك في الغابة! يوجد كثير من الكائنات الحية. أدر الغابة بإصبعك والمس حيوانا لتسمع اسمه.");
    w.buttons([["🔎 Mission : trouve les animaux",startMission],["🔙 Vue d'ensemble",()=>{w.extra("");w.flyTo({target:new THREE.Vector3(0,1,0),r:30,phi:1.05},1200)}]])};
  const startMission=()=>{mode="mission";mission=shuffle(ANIMAUX.filter(a=>a[1]!=="🍄")).slice(0,6);mk=0;askNext()};
  const askNext=()=>{w.extra("");miss=0;if(mk>=mission.length){mode="explore";w.say(`Mission réussie, ${S.name} ! Tu as trouvé tous les animaux. Ce sont des êtres vivants : des facteurs biotiques.`,"نجحت المهمة! وجدت كل الحيوانات. إنها كائنات حية: عوامل حية.");w.xp(20);chime();
      w.buttons([["↺ Nouvelle mission",startMission],["👀 Explorer",explore]]);w.flyTo({target:new THREE.Vector3(0,1,0),r:30,phi:1.05},1200);return}
    const a=mission[mk];w.say(`Trouve : ${a[0]}.`,"ابحث عن: "+a[2]);w.buttons([[`🔊 ${esc(a[0])}`,()=>sayOne(a[0],"fr")],["💡 Aide",()=>{const s=animals.find(x=>x.userData.a===a);w.flyTo({target:s.position.clone(),r:12,phi:1.1},1200)}]])};
  animals.forEach(s=>w.click(s,()=>{const a=s.userData.a;
    if(mode==="explore"){show(s);w.say(`C'est ${a[0]}. ${a[1]==="🍄"?"Le champignon n'est ni un animal ni une plante, mais il est vivant.":"C'est un animal : il est vivant."} Répète : ${a[0]}.`,"هذا "+a[2]+". إنه كائن حي.");repeatUI(a[0])}
    else{const tgt=mission[mk];if(a===tgt){show(s);chime();w.xp(10);w.say(`Oui ! C'est ${a[0]}. Répète : ${a[0]}.`,"نعم! هذا "+a[2]+".");w.buttons([]);repeatUI(a[0],()=>{mk++;askNext()})}
      else{miss++;buzz();w.say(`Ça, c'est ${a[0]}. Cherche ${tgt[0]}.`,"هذا "+a[2]+". ابحث عن "+tgt[2]+".");if(miss>=2){const t=animals.find(x=>x.userData.a===tgt);w.flyTo({target:t.position.clone(),r:12,phi:1.1},1200)}}}},2));
  const abio=(obj,fr,ar,lb)=>w.click(obj,()=>{chime();w.label(obj,lab(lb[0],lb[1]),obj===sun?3:1.5,"big");w.say(fr,ar)},1);
  abio(pond,"C'est l'eau de la mare. L'eau n'est pas vivante : c'est un facteur abiotique.","هذا ماء البركة. الماء ليس كائنا حيا: إنه عامل غير حي.",["L'eau : abiotique","الماء: غير حي"]);
  abio(rock,"C'est un rocher. Il n'est pas vivant : c'est un facteur abiotique.","هذه صخرة. إنها ليست حية: عامل غير حي.",["Le rocher : abiotique","الصخرة: غير حية"]);
  abio(sun,"C'est le soleil. Il donne la lumière et la chaleur : ce sont des facteurs abiotiques.","هذه الشمس. تعطي الضوء والحرارة: إنها عوامل غير حية.",["La lumière : abiotique","الضوء: غير حي"]);
  explore();
}

// ===== 4. Zoom dans la peau =====
function worldPeau(w){
  const {scene}=w;scene.background=new THREE.Color("#fff3ee");
  scene.add(new THREE.HemisphereLight("#ffffff","#e7b7a8",.9));const dl=new THREE.DirectionalLight("#ffffff",.8);dl.position.set(3,6,5);scene.add(dl);
  const levels=[new THREE.Group(),new THREE.Group(),new THREE.Group(),new THREE.Group()];levels.forEach((g,i)=>{g.visible=i===0;scene.add(g)});
  // niveau 0 : la main
  const hand=emoji("✋",7);hand.position.set(0,0,0);levels[0].add(hand);const lens=emoji("🔍",2.6);lens.position.set(2.4,1.6,1);levels[0].add(lens);
  // niveau 1 : la surface de la peau (loupe)
  const sg=new THREE.PlaneGeometry(16,16,140,140);sg.rotateX(-Math.PI/2);const p=sg.attributes.position.array;
  for(let i=0;i<p.length;i+=3){const x=p[i],z=p[i+2];p[i+1]=Math.sin(x*2.4+Math.sin(z*.8)*1.6)*.12+Math.sin(z*7)*.02}sg.computeVertexNormals();
  levels[1].add(mesh(sg,M("#e9ab92",{flatShading:false,roughness:.9})));
  for(let i=0;i<26;i++){const d=mesh(new THREE.CircleGeometry(.12,16),new THREE.MeshBasicMaterial({color:"#9a5a48"}),(Math.random()-.5)*14,.16,(Math.random()-.5)*14);d.rotation.x=-Math.PI/2;levels[1].add(d)}
  // niveau 2 : les cellules (microscope)
  const cells=[];for(let i=-4;i<=4;i++)for(let j=-4;j<=4;j++){const c=new THREE.Group();const x=i*1.9+(j%2?0.95:0),z=j*1.65;
    c.add(mesh(new THREE.SphereGeometry(.9,24,16),M("#f39bb0",{transparent:true,opacity:.75,roughness:.5})));c.children[0].scale.set(1,.55,1);
    c.add(mesh(new THREE.SphereGeometry(.3,16,12),M("#6b2f8f",{roughness:.4}),0,.12,0));c.position.set(x,0,z);levels[2].add(c);cells.push(c)}
  // niveau 3 : une cellule en grand
  const memb=mesh(new THREE.SphereGeometry(5,48,32),M("#f6a4b8",{transparent:true,opacity:.28,side:THREE.DoubleSide,depthWrite:false}));levels[3].add(memb);
  const nuc=mesh(new THREE.SphereGeometry(1.6,40,28),M("#6b2f8f",{roughness:.35}),.6,.2,0);levels[3].add(nuc);
  const nucleole=mesh(new THREE.SphereGeometry(.5,24,16),M("#3c1557"),.9,.5,.9);levels[3].add(nucleole);
  const cy=new THREE.BufferGeometry(),cp=[];for(let i=0;i<500;i++){const v=new THREE.Vector3(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*2.7);cp.push(v.x,v.y,v.z)}
  cy.setAttribute("position",new THREE.Float32BufferAttribute(cp,3));const cyto=new THREE.Points(cy,new THREE.PointsMaterial({color:"#c2456b",size:.09}));levels[3].add(cyto);
  const anchor=new THREE.Object3D();anchor.position.set(-3.2,-2.2,2.4);levels[3].add(anchor);
  let lvl=0;const L=[];
  const go=n=>{w.fade(()=>{levels.forEach((g,i)=>g.visible=i===n);lvl=n;w.clearLabels();w.extra("");
    if(n===0){w.orbit.target.set(0,0,0);w.orbit.r=12;w.orbit.phi=1.4;w.orbit.theta=0;w.orbit.minR=6;w.orbit.maxR=20;w.orbit.minPhi=1;w.orbit.maxPhi=1.7;
      w.label(hand,lab("La peau de la main","جلد اليد"),3.8,"big");w.say(`Regarde ta main, ${S.name}. Elle est couverte de peau. Que voit-on si on regarde de très, très près ? Touche la loupe pour zoomer !`,"انظر إلى يدك. إنها مغطاة بالجلد. ماذا نرى إذا نظرنا من قريب جدا؟ المس العدسة للتكبير!");
      w.buttons([["🔍 Zoomer avec la loupe",()=>go(1)]])}
    if(n===1){w.orbit.target.set(0,0,0);w.orbit.r=9;w.orbit.phi=.9;w.orbit.minR=4;w.orbit.maxR=14;w.orbit.minPhi=.3;w.orbit.maxPhi=1.35;
      w.label(levels[1].children[0],lab("Des sillons et des pores","أخاديد ومسام"),.6,"big");w.say("Avec une loupe, on voit de petits sillons et des trous minuscules : les pores. Mais la peau est faite de quelque chose de plus petit. Prenons le microscope !","بالعدسة المكبرة نرى أخاديد صغيرة وثقوبا دقيقة: المسام. لكن الجلد مكون من شيء أصغر. لنأخذ المجهر!");
      w.buttons([["🔬 Microscope : zoomer encore",()=>go(2)],["⬅ Revenir",()=>go(0)]])}
    if(n===2){w.orbit.target.set(0,0,0);w.orbit.r=16;w.orbit.phi=.85;w.orbit.minR=5;w.orbit.maxR=24;w.label(cells[40],lab("Une cellule","خلية"),1,"big");w.label(cells[40].children[1],lab("Le noyau","النواة"),.5);
      w.say("Au microscope, on voit plein de petites cases : ce sont les cellules ! La peau est faite de milliards de cellules. Touche une cellule pour entrer dedans.","بالمجهر نرى خانات صغيرة كثيرة: إنها الخلايا! يتكون الجلد من ملايير الخلايا. المس خلية لتدخل إليها.");
      w.buttons([["➡ Entrer dans une cellule",()=>go(3)],["⬅ Revenir",()=>go(1)]])}
    if(n===3){w.orbit.target.set(0,0,0);w.orbit.r=14;w.orbit.phi=1.2;w.orbit.minR=7;w.orbit.maxR=22;w.orbit.minPhi=.2;w.orbit.maxPhi=2.9;
      w.label(nuc,lab("Le noyau","النواة"),2);w.label(anchor,lab("Le cytoplasme","السيتوبلازم"),0);const top=new THREE.Object3D();top.position.set(0,5,0);levels[3].add(top);w.label(top,lab("La membrane","الغشاء السيتوبلازمي"),.4);
      w.say("Voici une cellule en grand. Autour, la membrane. Dedans, le cytoplasme. Et au centre, le noyau : c'est le chef de la cellule ! La cellule est la plus petite partie du vivant.","هذه خلية مكبرة. حولها الغشاء. وفي داخلها السيتوبلازم. وفي الوسط النواة: إنها قائدة الخلية! الخلية أصغر وحدة في الكائن الحي.");
      w.buttons([["🎯 Le jeu : touche la bonne partie",()=>game()],["⬅ Revenir",()=>go(2)]])}
  })};
  const game=()=>{const qs=shuffle([["le noyau","النواة","nuc"],["la membrane","الغشاء","memb"],["le cytoplasme","السيتوبلازم","cyto"]]);let k=0;
    const ask=()=>{if(k>=qs.length){w.say(`Bravo ${S.name} ! Tu connais les parties de la cellule.`,"أحسنت! تعرف أجزاء الخلية.");w.xp(15);chime();w.buttons([["↺ Recommencer",()=>go(0)]]);w.onPick=null;return}
      w.say(`Touche ${qs[k][0]}.`,"المس "+qs[k][1]);w.buttons([]);w.onPick=part=>{if(part===qs[k][2]){chime();w.xp(5);k++;setTimeout(ask,600)}else{buzz();w.say(`Non, ça c'est ${({nuc:"le noyau",memb:"la membrane",cyto:"le cytoplasme"})[part]}. Touche ${qs[k][0]}.`,"المس "+qs[k][1])}}};ask()};
  w.click(nuc,()=>{if(lvl===3){if(w.onPick)w.onPick("nuc");else w.say("C'est le noyau, le chef de la cellule.","هذه النواة، قائدة الخلية.")}},3);
  // membrane ou cytoplasme : selon la distance du rayon au centre de la cellule
  let lastHitR=0;const ray=new THREE.Raycaster();
  w.wrap.querySelector("canvas").addEventListener("pointerdown",e=>{if(lvl!==3)return;const r=w.wrap.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),w.camera);
    lastHitR=ray.ray.distanceToPoint(new THREE.Vector3(0,0,0))});
  w.click(memb,()=>{if(lvl!==3)return;const part=lastHitR>3.9?"memb":"cyto";if(w.onPick)w.onPick(part);else w.say(part==="memb"?"C'est la membrane : elle entoure la cellule.":"C'est le cytoplasme : il remplit la cellule.",part==="memb"?"هذا الغشاء: يحيط بالخلية.":"هذا السيتوبلازم: يملأ الخلية.")},0);
w.click(hand,()=>lvl===0&&go(1));w.click(lens,()=>lvl===0&&go(1),1);
  cells.forEach(c=>w.click(c,()=>lvl===2&&go(3)));
  w.updates.push((dt,t)=>{lens.position.x=2.4+Math.sin(t*1.5)*.3;nuc.rotation.y+=dt*.3;cyto.rotation.y+=dt*.05;cells.forEach((c,i)=>c.children[0].scale.y=.55+Math.sin(t*2+i)*.03)});
  go(0);
}

// ===== 5. L'ordinateur en 3D =====
function worldOrdi(w){
  const {scene}=w;scene.background=new THREE.Color("#eef0fb");
  scene.add(new THREE.HemisphereLight("#ffffff","#b9bdd8",.85));const dl=new THREE.DirectionalLight("#ffffff",.8);dl.position.set(5,10,8);scene.add(dl);
  scene.add(mesh(new THREE.BoxGeometry(16,.4,7),M("#c58c5c"),0,-.2,0));
  [[-7.5,-2.8],[7.5,-2.8],[-7.5,2.8],[7.5,2.8]].forEach(([x,z])=>scene.add(mesh(new THREE.BoxGeometry(.4,4,.4),M("#9a6a43"),x,-2.4,z)));
  const dev={};
  const add=(k,obj,fr,ar,kind,desc,descAr)=>{dev[k]={obj,fr,ar,kind,desc,descAr};scene.add(obj);return obj};
  // écran
  const sc=document.createElement("canvas");sc.width=512;sc.height=300;const sx=sc.getContext("2d");const stex=new THREE.CanvasTexture(sc);let typed="";
  const drawScreen=()=>{sx.fillStyle="#1d2a44";sx.fillRect(0,0,512,300);sx.fillStyle="#7fb2ff";sx.font="28px sans-serif";sx.fillText("Écran · الشاشة",20,44);sx.fillStyle="#ffffff";sx.font="bold 64px sans-serif";sx.fillText(typed+(Math.floor(performance.now()/500)%2?"|":""),20,170);stex.needsUpdate=true};
  const mon=new THREE.Group();mon.add(mesh(new THREE.BoxGeometry(5.4,3.3,.25),M("#2b2f3a"),0,0,0));const scr=mesh(new THREE.PlaneGeometry(5,2.9),new THREE.MeshBasicMaterial({map:stex}),0,0,.13);mon.add(scr);
  mon.add(mesh(new THREE.CylinderGeometry(.15,.15,1.2),M("#2b2f3a"),0,-2.1,-.1),mesh(new THREE.BoxGeometry(1.8,.12,1),M("#2b2f3a"),0,-2.7,-.1));mon.position.set(0,2.75,-1.6);
  add("ecran",mon,"l'écran","الشاشة","sortie","Il montre les images et les lettres.","تعرض الصور والحروف.");
  const kb=new THREE.Group();kb.add(mesh(new THREE.BoxGeometry(4.8,.22,1.6),M("#d9dce6")));
  const keyG=new THREE.BoxGeometry(.3,.12,.3),keyM=M("#ffffff");const keys=[];for(let r=0;r<4;r++)for(let c=0;c<12;c++){const k=mesh(keyG,keyM,-2.05+c*.373,.15,-.55+r*.37);kb.add(k);keys.push(k)}
  kb.position.set(-.4,.15,1.5);add("clavier",kb,"le clavier","لوحة المفاتيح","entree","Il sert à écrire des lettres.","تستعمل لكتابة الحروف.");
  const mouse=new THREE.Group();const mb=mesh(new THREE.SphereGeometry(.45,24,16),M("#f2f3f7",{roughness:.4}));mb.scale.set(.8,.45,1.2);mouse.add(mb,mesh(new THREE.BoxGeometry(.04,.2,.4),M("#9aa"),0,.18,-.25));mouse.position.set(3.1,.2,1.6);
  add("souris",mouse,"la souris","الفأرة","entree","Elle sert à bouger la flèche et à cliquer.","تستعمل لتحريك السهم والنقر.");
  const tower=new THREE.Group();tower.add(mesh(new THREE.BoxGeometry(1.5,3.4,3),M("#3a3f4d")));const led=mesh(new THREE.SphereGeometry(.09,12,8),new THREE.MeshBasicMaterial({color:"#3cff7a"}),.5,1.3,1.51);tower.add(led);
  tower.add(mesh(new THREE.CircleGeometry(.25,20),new THREE.MeshBasicMaterial({color:"#8fa3c8"}),0,1.3,1.51));tower.position.set(-5.8,1.7,-.6);
  add("uc",tower,"l'unité centrale","الوحدة المركزية","traitement","C'est le cerveau : le processeur calcule, la mémoire garde.","إنها الدماغ: المعالج يحسب والذاكرة تحفظ.");
  const pr=new THREE.Group();pr.add(mesh(new THREE.BoxGeometry(2.6,1.1,2),M("#e4e6ee")),mesh(new THREE.BoxGeometry(1.8,.04,1.2),M("#ffffff"),0,.57,.6));pr.position.set(5.9,.55,-1);
  add("imprimante",pr,"l'imprimante","الطابعة","sortie","Elle met le texte sur une feuille de papier.","تطبع النص على ورقة.");
  const spk=new THREE.Group();[-3.6,3.6].forEach(x=>{const s=new THREE.Group();s.add(mesh(new THREE.BoxGeometry(.8,1.5,.8),M("#2b2f3a")),mesh(new THREE.CylinderGeometry(.25,.25,.05,20),M("#6b7385"),0,.2,.41));s.children[1].rotation.x=Math.PI/2;s.position.set(x,.75,-1.4);spk.add(s)});
  add("hp",spk,"les haut-parleurs","مكبرات الصوت","sortie","Ils font sortir le son.","تخرج الصوت.");
  const mic=new THREE.Group();mic.add(mesh(new THREE.CylinderGeometry(.08,.08,1),M("#555"),0,.5,0),mesh(new THREE.SphereGeometry(.28,16,12),M("#333",{roughness:.3}),0,1.1,0),mesh(new THREE.CylinderGeometry(.35,.35,.08,20),M("#555")));mic.position.set(-3.6,0,1.6);
  add("micro",mic,"le micro","الميكروفون","entree","Il fait entrer la voix.","يدخل الصوت.");
  const KIND={entree:["Entrée","إدخال"],sortie:["Sortie","إخراج"],traitement:["Traitement","معالجة"]};
  w.orbit.target.set(0,1.2,0);w.orbit.r=15;w.orbit.phi=1.05;w.orbit.theta=0;w.orbit.minR=6;w.orbit.maxR=26;w.orbit.maxPhi=1.45;
  // signal lumineux clavier → UC → écran
  const sig=mesh(new THREE.SphereGeometry(.18,16,12),new THREE.MeshBasicMaterial({color:"#ffd84a"}));sig.visible=false;scene.add(sig);
  const path=new THREE.CatmullRomCurve3([new THREE.Vector3(-.4,.4,1.5),new THREE.Vector3(-3,.3,.8),new THREE.Vector3(-5.8,1.7,.9),new THREE.Vector3(-3,2.6,-1),new THREE.Vector3(0,2.75,-1.4)]);
  let sigT=-1,pending="";const NAME=(S.name||"LUMI").toUpperCase();
  const glowOn=(o,on)=>o.traverse(m=>{if(m.isMesh&&m.material.emissive){m.material=m.material.clone();m.material.emissive.set(on?"#4b5bff":"#000000");m.material.emissiveIntensity=on?.45:0}});
  let lit=null,mode="explore",round=null,rk=0;
  const pick=k=>{const d=dev[k];if(lit)glowOn(lit,false);lit=d.obj;glowOn(lit,true);w.clearLabels();w.label(d.obj,lab(d.fr+" · "+KIND[d.kind][0],d.ar+" · "+KIND[d.kind][1]),1.9,"big")};
  Object.entries(dev).forEach(([k,d])=>w.click(d.obj,()=>{
    if(mode==="explore"){pick(k);w.say(`C'est ${d.fr}. ${d.desc} C'est ${d.kind==="traitement"?"le traitement":"un périphérique de "+KIND[d.kind][0].toLowerCase()}.`,`هذه ${d.ar}. ${d.descAr}`);
      if(k==="clavier"){const i=typed.length%NAME.length;pending=NAME[i];sigT=0;sig.visible=true;keys[Math.floor(Math.random()*keys.length)].position.y=.08}}
  }));
  const explore=()=>{mode="explore";w.extra("");w.say(`Voici un ordinateur, ${S.name}. Touche chaque appareil pour connaître son nom. Touche le clavier : la lettre va voyager jusqu'à l'écran !`,"هذا حاسوب. المس كل جهاز لتعرف اسمه. المس لوحة المفاتيح: سيسافر الحرف حتى الشاشة!");
    w.buttons([["🎯 Jeu : entrée ou sortie ?",game]])};
  const game=()=>{mode="game";round=shuffle(Object.keys(dev));rk=0;ask()};
  const ask=()=>{if(rk>=round.length){w.say(`Bravo ${S.name} ! Tu connais tous les appareils.`,"أحسنت! تعرف كل الأجهزة.");w.xp(15);chime();mode="explore";w.buttons([["↺ Rejouer",game],["👀 Explorer",explore]]);return}
    const k=round[rk],d=dev[k];if(lit)glowOn(lit,false);lit=d.obj;glowOn(lit,true);w.clearLabels();w.label(d.obj,`<b>?</b>`,1.9,"big");w.flyTo({target:d.obj.position.clone().add(new THREE.Vector3(0,.5,0)),r:10},900);
    w.say(`Regarde l'appareil qui brille. C'est ${d.fr}. C'est une entrée, une sortie ou le traitement ?`,`انظر إلى الجهاز الذي يلمع. هذه ${d.ar}. هل هو إدخال أم إخراج أم معالجة؟`);
    w.buttons(Object.entries(KIND).map(([kk,v])=>[`${v[0]}${S.trAr?`<small class="ar">${v[1]}</small>`:""}`,b=>{if(kk===d.kind){chime();w.xp(5);b.classList.add("good");rk++;setTimeout(ask,700)}else{buzz();b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),500)}}]))};
  w.updates.push((dt)=>{led.material.color.setHSL(.38,1,.45+Math.sin(performance.now()/300)*.15);keys.forEach(k=>k.position.y+=(.15-k.position.y)*dt*8);
    if(sigT>=0){sigT+=dt*.55;if(sigT>=1){sigT=-1;sig.visible=false;typed=(typed+pending).slice(-12);chime()}else sig.position.copy(path.getPoint(sigT))}drawScreen()});
  explore();
}

// ----- intégration dans le site -----
function worldCards(ids){return `<div class="wcards">${ids.map(id=>{const d=WORLDS[id];return `<a class="wcardx" href="#monde-${id}" style="--c:${d.c}"><span class="wico">${d.ico}</span><b>${esc(d.t)}</b><small>${esc(d.sub)}</small><span class="ar">${esc(d.ar)}</span></a>`}).join("")}</div>`}
function mountWorldTab(P,s,L){P.innerHTML=`<p style="margin-top:0">Choisis un jeu en 3D. Tu peux tourner, zoomer et toucher les objets.</p>${worldCards(L.worlds)}<div id="wh"></div>`;
  P.querySelectorAll(".wcardx").forEach(a=>a.onclick=e=>{e.preventDefault();mountWorld($("#wh"),a.getAttribute("href").slice(7));$("#wh").scrollIntoView({behavior:"smooth",block:"start"})})}
