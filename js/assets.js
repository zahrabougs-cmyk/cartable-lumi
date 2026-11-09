// ===== Images 3D (Microsoft Fluent Emoji 3D, licence MIT, via jsDelivr) =====
// Ordre d'essai : copie locale (assets/emoji, après « npm run images ») → CDN → CDN avec FE0F → emoji texte.
const EMO_CDN="https://cdn.jsdelivr.net/npm/@lobehub/fluent-emoji-3d@1.1.0/assets/";
const hx=c=>c.codePointAt(0).toString(16);
function emoKey(e){return [...String(e)].map(hx).filter(h=>h!=="fe0f").join("-")}
function emoKeyFe(e){const p=[...String(e)].map(hx);if(p.includes("fe0f"))return p.join("-");p.splice(1,0,"fe0f");return p.join("-")}
function emoCands(e){const k=emoKey(e),c=[];if(window.EMOJI_DATA&&EMOJI_DATA[k])c.push(EMOJI_DATA[k]);if(window.EMO_LOCAL)c.push("assets/emoji/"+k+".webp");c.push(EMO_CDN+k+".webp",EMO_CDN+emoKeyFe(e)+".webp");return c}
function emoSrc(e){return emoCands(e)[0]}
function emoErr(img){const c=emoCands(img.dataset.e);const n=(+img.dataset.n||0)+1;if(n<c.length){img.dataset.n=n;img.src=c[n];return}
  const s=document.createElement("span");s.className=(img.className||"").replace("emoimg","emotxt");s.textContent=img.dataset.e||"";img.replaceWith(s)}
function emo(e,cls="",alt=""){if(!e)return "";if(e==="👧🏽"&&/girl/.test(cls)&&typeof lumiSVG==="function")return lumiSVG(cls);if(!/\p{Extended_Pictographic}/u.test(e))return `<span class="emotxt ${cls}">${esc(e)}</span>`;
  return `<img class="emoimg ${cls}" src="${emoSrc(e)}" alt="${esc(alt)}" data-e="${esc(e)}" draggable="false">`}
// images qui ne chargent pas : écouté ici, car la politique de sécurité (CSP) interdit onerror="…" dans le HTML
document.addEventListener("error",ev=>{const t=ev.target;if(!t||t.tagName!=="IMG")return;if(t.dataset.e!==undefined)emoErr(t);else{const f=t.closest("figure.ph");if(f)f.classList.add("noimg")}},true);
