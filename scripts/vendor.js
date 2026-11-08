// Copie three.min.js de node_modules vers vendor/ (pour marcher sans internet)
const fs=require("fs"),path=require("path");
const src=path.join(__dirname,"..","node_modules","three","build","three.min.js");
const dst=path.join(__dirname,"..","vendor","three.min.js");
if(fs.existsSync(src)){fs.copyFileSync(src,dst);console.log("three.min.js copié dans vendor/");}
else console.log("three n'est pas installé : le site utilisera le CDN.");
