// ===== Application mobile hors ligne (PWA) =====
// Actif seulement dans la version application (index.html du projet), pas dans la page Claude.
let installEvt=null;
function appInit(){if(!window.IS_APP||!("serviceWorker" in navigator)||!/^https?:/.test(location.protocol))return;
  navigator.serviceWorker.register("sw.js").catch(()=>{});
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installEvt=e;const b=$("#instb");if(b)b.hidden=false});}
function offlineBlock(){if(!window.IS_APP)return "";
  return `<div class="row"><span class="lb">📱 Application et hors ligne</span>
   <button class="ghost" id="instb" ${installEvt?"":"hidden"}>📲 Installer l'application sur l'écran d'accueil</button>
   <button class="ghost" id="offb">📥 Tout télécharger pour jouer sans internet</button>
   <div class="dlbar" aria-hidden="true"><span id="offbar"></span></div><small class="noteline" style="margin:0" id="offst">${S.offline?"✅ Déjà prêt pour jouer sans internet.":"Télécharge une fois avec le Wi-Fi : images 3D, photos, moteur 3D."}</small></div>`}
function offlineBind(){const ib=$("#instb");if(ib)ib.onclick=async()=>{if(!installEvt){toast("Sur iPhone : bouton Partager, puis « Sur l'écran d'accueil ».");return}installEvt.prompt();await installEvt.userChoice;installEvt=null;ib.hidden=true};
  const ob=$("#offb");if(ob)ob.onclick=downloadAll}
async function downloadAll(){const st=$("#offst"),bar=$("#offbar"),btn=$("#offb");if(!navigator.serviceWorker||!navigator.serviceWorker.controller){st.textContent="Recharge la page une fois, puis réessaie (l'application se prépare).";return}
  btn.disabled=true;const jobs=[];
  (window.EMOJI_LIST||[]).forEach(({key,alt})=>jobs.push(async()=>{const r=await fetch(EMO_CDN+key+".webp").catch(()=>null);if(!r||!r.ok)await fetch(EMO_CDN+alt+".webp").catch(()=>null)}));
  const photos=new Set();Object.values(LESSONS).forEach(L=>(L.video||[]).forEach(v=>(v.img||[]).forEach(im=>photos.add(im.f))));
  Object.entries(window.AUDIO_INDEX||{}).forEach(([l,v])=>(Array.isArray(v)?v:String(v).split(" ")).filter(Boolean).forEach(h=>jobs.push(()=>fetch(`assets/audio/${l}/${h}.mp3`).catch(()=>null))));
  photos.forEach(f=>jobs.push(()=>fetch("https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(f.replace(/ /g,"_"))+"?width=640",{mode:"no-cors"}).catch(()=>null)));
  let done=0;const total=jobs.length;const run=async()=>{while(jobs.length){const j=jobs.shift();await j();done++;bar.style.width=Math.round(100*done/total)+"%";st.textContent=`Téléchargement… ${done} / ${total}`}};
  await Promise.all([run(),run(),run(),run(),run()]);S.offline=1;save();btn.disabled=false;st.textContent="✅ Prêt ! Tu peux jouer sans internet (la voix du micro a quand même besoin d'internet sur Chrome).";chime()}
