// Télécharge les images 3D dans assets/emoji pour que le site marche sans internet.
// Utilisation : npm run images
const fs=require("fs"),path=require("path"),https=require("https");
const CDN="https://cdn.jsdelivr.net/npm/@lobehub/fluent-emoji-3d@1.1.0/assets/";
const list=require("./emoji-list.json");const dir=path.join(__dirname,"..","assets","emoji");fs.mkdirSync(dir,{recursive:true});
const get=u=>new Promise(r=>https.get(u,res=>{if(res.statusCode!==200){res.resume();return r(null)}const b=[];res.on("data",d=>b.push(d));res.on("end",()=>r(Buffer.concat(b)))}).on("error",()=>r(null)));
(async()=>{let ok=0,miss=[];for(const {key,alt} of list){const out=path.join(dir,key+".webp");if(fs.existsSync(out)){ok++;continue}
  let buf=await get(CDN+key+".webp");if(!buf)buf=await get(CDN+alt+".webp");if(buf){fs.writeFileSync(out,buf);ok++}else miss.push(key);await new Promise(r=>setTimeout(r,120))}
  fs.writeFileSync(path.join(dir,"..","emoji-ok.js"),"window.EMO_LOCAL=true;\n");
  console.log(`${ok} images prêtes dans assets/emoji.`+(miss.length?` Introuvables : ${miss.join(", ")}`:""))})();
