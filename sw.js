// Service worker de Cartable Lumi : garde le site et les images pour jouer sans internet.
const V="lumi-v14";
const CORE=["./","index.html","manifest.webmanifest","css/style.css","js/boot.js","js/assets.js","js/voix.js","js/lumi.js","assets/audio/index.js","js/emoji-list.js","js/config.js","js/data.js","js/mots-en.js","js/compte.js","js/lecons.js","js/lecons-maths.js","js/lecons-physique.js","js/lecons-svt-info.js","js/lecons-manuel.js","js/devoir.js","js/lecons-arabe.js","js/lecons-hg-islam.js","js/app.js","js/fle.js","js/music.js","js/world3d.js","js/rewards.js","js/arcade.js","js/hidden.js","js/mots.js","js/aventure.js","js/generateur.js","js/hub.js","js/offline.js","js/main.js","assets/emoji-ok.js","vendor/three.min.js","vendor/supabase.min.js","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>null)))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V&&k!=="lumi-ext").map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
  if(u.port==="11434"||u.pathname.startsWith("/api/"))return; // Ollama : jamais en cache
  if(u.hostname.endsWith("supabase.co"))return; // base de données : toujours en direct
  if(u.origin===location.origin){
    // fichiers du site : d'abord internet (toujours la dernière version). Connexion trop lente : après 3 s, la copie gardée s'affiche
    // et internet finit de la mettre à jour pour la prochaine fois. Les adresses de retour de connexion (?code=) ne sont jamais gardées.
    const net=caches.open(V).then(c=>fetch(r,{cache:"no-cache"}).then(res=>{if(res.status===200&&!u.searchParams.has("code"))c.put(r,res.clone()).catch(()=>{});return res})).catch(()=>null);
    e.waitUntil(net);
    e.respondWith(caches.open(V).then(async c=>{let hit=await c.match(r,{ignoreSearch:true});if(!hit&&r.mode==="navigate")hit=await c.match("index.html");
      const res=hit?await Promise.race([net,new Promise(ok=>setTimeout(()=>ok(null),3000))]):await net;
      if(res&&res.ok)return res;return hit||res||new Response("",{status:504})}));return}
  // images 3D, photos, polices : d'abord le cache
  e.respondWith(caches.open("lumi-ext").then(async c=>{const hit=await c.match(r);if(hit)return hit;try{const res=await fetch(r);if(res.status===200||res.type==="opaque")c.put(r,res.clone()).catch(()=>{});return res}catch(err){return new Response("",{status:504})}}));
});
