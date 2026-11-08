// ===== Lumi : la petite fille qui explique (dessin SVG animé) =====
// Elle cligne des yeux, respire, bouge la bouche quand la voix parle, et réagit :
// heureuse quand la réponse est juste, pensive (elle aide) quand c'est faux. Jamais de visage triste.
function lumiSVG(cls=""){return `<span class="lumi ${cls}" aria-hidden="true"><svg viewBox="0 0 200 230" class="lumisvg">
 <g class="l-body">
  <path d="M52 230 Q56 168 100 160 Q144 168 148 230 Z" fill="#8E5BD8"/>
  <path d="M78 166 Q100 186 122 166 L118 160 Q100 172 82 160 Z" fill="#fff" opacity=".9"/>
  <g class="l-armL"><path d="M58 182 Q36 196 34 214" stroke="#f0b48c" stroke-width="15" stroke-linecap="round" fill="none"/></g>
  <g class="l-armR"><path d="M142 182 Q164 170 170 150" stroke="#f0b48c" stroke-width="15" stroke-linecap="round" fill="none"/><circle cx="171" cy="146" r="10" fill="#f0b48c"/></g>
 </g>
 <g class="l-head">
  <circle cx="44" cy="92" r="24" fill="#4a2c1d"/><circle cx="156" cy="92" r="24" fill="#4a2c1d"/>
  <circle cx="40" cy="70" r="9" fill="#FF6F61"/><circle cx="160" cy="70" r="9" fill="#FF6F61"/>
  <ellipse cx="100" cy="92" rx="58" ry="62" fill="#4a2c1d"/>
  <rect x="88" y="138" width="24" height="24" rx="8" fill="#f0b48c"/>
  <ellipse cx="100" cy="100" rx="48" ry="52" fill="#f6c6a1"/>
  <path d="M52 92 Q58 44 100 42 Q142 44 148 92 Q130 64 104 60 Q84 74 56 96 Z" fill="#4a2c1d"/>
  <path d="M64 58 Q100 30 136 58" stroke="#FFB547" stroke-width="7" fill="none" stroke-linecap="round"/>
  <g class="l-brows"><path d="M70 82 Q80 76 90 81" stroke="#4a2c1d" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M110 81 Q120 76 130 82" stroke="#4a2c1d" stroke-width="4" fill="none" stroke-linecap="round"/></g>
  <g class="l-eyes"><g class="l-eye"><ellipse cx="80" cy="98" rx="8" ry="10" fill="#2a1a12"/><circle cx="83" cy="94" r="3" fill="#fff"/></g><g class="l-eye"><ellipse cx="120" cy="98" rx="8" ry="10" fill="#2a1a12"/><circle cx="123" cy="94" r="3" fill="#fff"/></g></g>
  <g class="l-happyeyes"><path d="M71 100 Q80 89 89 100" stroke="#2a1a12" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M111 100 Q120 89 129 100" stroke="#2a1a12" stroke-width="4.5" fill="none" stroke-linecap="round"/></g>
  <ellipse cx="67" cy="116" rx="9" ry="6" fill="#ff8f8f" opacity=".55"/><ellipse cx="133" cy="116" rx="9" ry="6" fill="#ff8f8f" opacity=".55"/>
  <path class="l-smile" d="M86 122 Q100 134 114 122" stroke="#9b3b3b" stroke-width="4" fill="none" stroke-linecap="round"/>
  <ellipse class="l-talk" cx="100" cy="126" rx="9" ry="7" fill="#9b3b3b"/>
  <path class="l-o" d="M95 126 a5 6 0 1 0 10 0 a5 6 0 1 0 -10 0" fill="#9b3b3b"/>
 </g>
 <g class="l-think"><circle cx="176" cy="40" r="17" fill="#fff" stroke="#c9d3e2" stroke-width="3"/><text x="176" y="48" text-anchor="middle" font-size="24" font-family="Fredoka,sans-serif" font-weight="700" fill="#4C5BD4">?</text><circle cx="160" cy="62" r="5" fill="#fff" stroke="#c9d3e2" stroke-width="2"/></g>
 <g class="l-stars"><text x="20" y="40" font-size="26">✨</text><text x="160" y="30" font-size="22">⭐</text></g>
</svg></span>`}
let moodT=null;
function lumiMood(m,ms=1800){const b=document.body;b.classList.remove("lumi-happy","lumi-think");if(m)b.classList.add("lumi-"+m);clearTimeout(moodT);if(m)moodT=setTimeout(()=>b.classList.remove("lumi-"+m),ms)}
// Lumi réagit aux sons de réussite et d'erreur
{const _c=chime,_b=buzz;chime=function(){_c();lumiMood("happy")};buzz=function(){_b();lumiMood("think",2600)}}
