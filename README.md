# Cartable Lumi

Site et application d'apprentissage pour la 1ère année collège (programme marocain), pensé pour une élève qui a du mal avec la lecture et l'attention :

- vidéos animées qui parlent, avec les mots qui s'allument,
- sons complexes en couleurs (on ⚽, oi 🐦, ou 🐺…), cartes mentales, pauses 20 / 5 minutes,
- **jeux 3D** (Three.js) : le voyage de la goutte d'eau, le labo des états de l'eau, la forêt des animaux, le zoom dans la peau jusqu'à la cellule, l'ordinateur en 3D,
- **chansons rythmées** (pop, darbouka, rap, calme) avec karaoké et jeu « tape le rythme »,
- photos (Wikimedia Commons) et traduction arabe,
- **Le cours en jeu** (onglet ouvert par défaut) : un générateur transforme chaque leçon en carte d'aventure. Chaque étape = Lumi explique, puis un défi créé automatiquement à partir du cours (remettre dans l'ordre, relier, phrase à trous + répéter le mot), et un grand défi final. Ça marche aussi pour les leçons préparées par le prof IA.
- **Espace jeux** (bouton 🎮 en haut) : tous les types de jeux au même endroit.
- **Cherche et trouve** : des cachettes à ouvrir (frigo, congélateur, placards, tiroirs, boîte à jouets, coffre au trésor, buissons). 7 scènes illustrées (chambre, cuisine, classe, forêt, labo, coin ordinateur, mer). L'élève trouve l'objet, puis dit son nom au micro. Mode « Trouve les 5 différences ».
- **Jeux de mots** : mot mélangé, memory, bulles,
- **Lumi**, une petite fille en image 3D qui parle et bouge pendant les explications,
- images 3D **Microsoft Fluent Emoji 3D** (licence MIT), chargées depuis jsDelivr ; `npm run images` les copie dans `assets/emoji` pour jouer sans internet.
- parcours « Mon français, pas à pas » façon Duolingo (jeu de la maison, répétition au micro),
- **les 159 leçons du programme sont prêtes**, sans Ollama (fichiers `js/lecons-*.js`),
- prof IA local avec **Ollama** (facultatif) pour poser des questions,
- jeu « 🎤 Répète les mots » dans chaque leçon, **étoiles** et **album de 30 dessins** à débloquer (1 dessin toutes les 5 étoiles),
- voix en français **puis en arabe** dans les vidéos, l'écoute et les questions (réglable).
  Sur ordinateur, ouvre Lumi avec **Microsoft Edge** : la voix arabe y est déjà, rien à installer. Sur un téléphone Android, Chrome utilise la voix arabe de Google.

Tout est en HTML, CSS et JavaScript, sans framework. Pas besoin de compiler.

## La voix intégrée (arabe, français, anglais) — comme les applications éducatives

Lumi a **ses propres voix enregistrées** : une voix naturelle marocaine pour l'arabe (« Mouna »), une voix d'enfant pour le français (« Eloise ») et pour l'anglais (« Maisie »). Chaque phrase des leçons et des exercices est un petit fichier son dans `assets/audio/`. Ils sont **dans l'application** : pas besoin des voix Google ou du téléphone, et ça marche **sans internet** une fois installé. Une phrase qui n'a pas encore de fichier (par exemple une leçon préparée par le prof IA) utilise la voix de l'appareil.

Les fichiers se fabriquent **une fois** (≈ 10 000 phrases, ≈ 150 Mo), avec internet. Trois façons, de la plus automatique à la plus manuelle :

1. **Automatique avec GitHub (rien à installer)** : mets le dossier dans un dépôt GitHub. Le fichier `.github/workflows/voix-et-site.yml` fabrique les voix tout seul à chaque modification (seulement les phrases nouvelles), les enregistre dans le dépôt, puis publie le site.
   Réglages du dépôt : *Settings → Actions → General → Workflow permissions → Read and write* et *Settings → Pages → Source : GitHub Actions*. Le premier passage prend environ 1 heure (onglet **Actions**). Le site est ensuite sur `https://<ton-nom>.github.io/<dépôt>/`. Si tu préfères Netlify, relie Netlify au dépôt GitHub : il publiera la version avec les voix.
2. **Double-clic sur l'ordinateur** : `Fabriquer-les-voix-Mac.command` (Mac) ou `Fabriquer-les-voix-Windows.bat` (Windows). Il faut Python et Node.js installés.
3. **Terminal** : `pip install edge-tts` puis `npm run voix`.

Si la fabrication s'arrête (réseau), relance : ce qui est fait est gardé. Les fichiers sont compressés (mono 32 kb/s) si `ffmpeg` est installé.
Les voix viennent du service de lecture de Microsoft Edge via l'outil libre `edge-tts` : gratuit pour un usage familial et scolaire, mais ce n'est pas un service officiel. Pour une application commerciale, il faudrait une licence de synthèse vocale.

La page **🔊 Voix** (Réglages) montre quelle voix est utilisée sur l'appareil et combien de phrases sont enregistrées.

## Français et anglais : les mêmes leçons que les manuels

- **Français** (`js/lecons-manuel.js`) : le manuel « Période 1 – D'un monde à l'autre », unité par unité : conte merveilleux (Le gros navet, Le pêcheur et le génie, Le Petit Chaperon Rouge, Cendrillon), légende, utopie, nouvelle réaliste, nouvelle fantastique, fable, et les ressources linguistiques de chaque unité. Les fiches du prof sont reprises à l'identique : *Les emplois du présent de l'indicatif* et *Les connecteurs spatiaux et temporels*.
- **Anglais** : le Student's Book (Welcome, Units 1 à 8), la leçon du prof *Adverbs of frequency*, et un **examen d'entraînement dans le format de l'application du prof** : 4 sections (Reading, Vocabulary, Grammar, Writing), compteur sur 30 points, réponses en phrase complète avec « Check ».
- Chaque leçon a l'onglet **📝 Exercices du prof** (`js/devoir.js`) : texte à écouter, QCM, vrai/faux, réponses écrites (petites fautes acceptées, dictée au micro, indice), textes à trous avec des étiquettes à toucher, classement en deux boîtes, mots à relever en les touchant. Après une erreur, Lumi montre la bonne réponse et explique la règle. La note sur 20 compte dans les étoiles.
- Ajouter un exercice : dans une leçon `K("francais-8",{… d:{title, sec:[{t, text, help, it:[{k:"mcq",q,ch:[bonne, fausse]}, {k:"write",q,keys:[["mot"]],model}, {k:"fill",text:"… [1] …",bank,ans}, {k:"sort",box,items}, {k:"spot",text:"… [mot à trouver] …"}]}]}})`.

## La pédagogie (pensée avec une démarche d'orthophonie)

- **Expliquer avant de demander** : chaque niveau du cours en jeu commence par Lumi qui explique, dans la langue des explications d'abord (l'arabe), puis le mot technique dans la 2e langue.
- **Écouter d'abord** : les réponses restent grisées pendant que Lumi lit la question (« 👂 Écoute d'abord la question »). On ne peut plus répondre au hasard sans écouter.
- **Prendre son temps** : une réponse fausse donnée trop vite déclenche « ⏳ Prends ton temps, on relit ensemble ».
- **1re erreur** : Lumi réexplique (💡) puis relit la question. **2e erreur** : apprentissage sans erreur — Lumi montre la bonne réponse, explique pourquoi, et l'enfant la touche elle-même.
- **La question revient plus tard**, avec les réponses dans un autre ordre, pour vérifier qu'elle a vraiment compris.
- **Les étoiles ne comptent que les bonnes réponses du premier coup** : deviner ne rapporte rien.
- **Lumi** (petite fille animée en SVG) parle, cligne des yeux, saute de joie quand c'est juste, et réfléchit avec elle quand c'est faux. Elle n'est jamais triste ni fâchée.
- Le reste : phrases courtes, syllabes et sons en couleur, une idée à la fois, pauses toutes les 20 minutes, répétition au micro des mots techniques.

## Application mobile, sans internet

Le projet est une **application web installable** (PWA). Elle garde tout dans le téléphone et marche ensuite sans internet.

1. Mets le site en ligne (Netlify, voir plus bas). Le service worker ne marche pas en ouvrant le fichier directement.
2. Sur le téléphone Android, ouvre le lien dans **Chrome**, puis **Réglages (Aa) → 📲 Installer l'application**, ou menu ⋮ → « Installer l'application ».
   Sur iPhone : Safari → bouton Partager → « Sur l'écran d'accueil ».
3. Avec le Wi-Fi, une seule fois : **Réglages → 📥 Tout télécharger pour jouer sans internet**. Ça garde les images 3D, les photos et le moteur 3D.

Ensuite, les leçons, les jeux, les étoiles et la voix (synthèse vocale du téléphone) marchent sans internet.
Il faut encore internet pour la reconnaissance du micro (Chrome l'envoie à Google) : sans internet, le bouton « J'ai répété » la remplace.

**Faire un vrai fichier APK Android** : une fois le site en ligne, va sur https://www.pwabuilder.com, colle le lien, puis « Package for stores → Android ». Tu obtiens un APK à installer sur le téléphone.

## Ouvrir dans VS Code

1. Dézippe le dossier, puis dans VS Code : **Fichier > Ouvrir le dossier… > cartable-lumi**.
2. Installe l'extension conseillée **Live Server** (VS Code la propose tout seul).
3. Clic droit sur `index.html` > **Open with Live Server**. Le site s'ouvre sur `http://localhost:5173`.

Avec Node.js, tu peux aussi lancer un terminal dans le dossier :

```bash
npm install      # copie Three.js dans vendor/ pour marcher sans internet
npm run images   # télécharge les images 3D dans assets/emoji (une seule fois)
npm start        # serveur local sur http://localhost:5173
```

Le micro (répétition des mots) marche dans **Chrome** ou **Edge**, sur `localhost` ou en `https`.

## Structure

```
cartable-lumi/
├── index.html          la page
├── sw.js               service worker (hors ligne)
├── manifest.webmanifest  nom, couleurs et icônes de l'application
├── css/style.css       tout le style (thème clair/sombre, réglages dyslexie)
├── js/
│   ├── data.js         le programme et le contenu des leçons (SUBJECTS, LESSONS)
│   ├── app.js          moteur : voix, couleurs des sons, vidéo, jeux, examen, réglages
│   ├── voix.js         voix : fichiers enregistrés, meilleure voix de l'appareil, page « Voix »
│   ├── lumi.js         Lumi animée (SVG) et ses réactions
│   ├── fle.js          français débutant, jeu de la maison, carte mentale, Pomodoro, prof IA
│   ├── music.js        chansons rythmées (boîte à rythme Web Audio)
│   ├── world3d.js      les mondes 3D (Three.js)
│   ├── assets.js       images 3D (Fluent Emoji 3D) avec solutions de secours
│   ├── hidden.js       Cherche et trouve + Trouve les différences
│   ├── mots.js         jeux de mots (français, arabe, anglais)
│   ├── aventure.js     générateur « Le cours en jeu »
│   ├── hub.js          espace jeux
│   ├── offline.js      application installable et téléchargement hors ligne
│   ├── rewards.js      étoiles, album de dessins, lecture bilingue, leçons préparées par l'IA
│   └── main.js         démarrage
├── vendor/             three.min.js (après npm install)
├── netlify.toml        déploiement Netlify
└── vercel.json         déploiement Vercel
```

## Ajouter une leçon

Format court (le plus simple) : dans un fichier `js/lecons-*.js`, appelle `K("matière-numéro",{v,e,ea,w,s,x})`. Le format est expliqué en haut de `js/lecons.js` ; les jeux sont créés tout seuls.

Format complet : dans `js/data.js`, ajoute une entrée dans `LESSONS` avec la clé `"<matière>-<numéro>"` (le numéro commence à 0, dans l'ordre de la liste de la matière). Exemple minimal :

```js
"physique-1":{
  title:"Les états physiques de la matière",
  worlds:["etats"],                       // jeux 3D liés (facultatif)
  video:[{t:"Titre de l'étape", say:"Texte lu par la voix.", sayAr:"الترجمة", vis:{k:"big",v:"🧊 💧 ☁️"},
          img:[{f:"Nom du fichier sur Commons.jpg", cap:"Légende", capAr:"التعليق", by:"Auteur", lic:"CC BY-SA 4.0"}]}],
  ess:["Phrase essentielle 1"], essAr:["الجملة 1"],
  song:["Ligne 1","Ligne 2","Ligne 3","Ligne 4"],
  games:[{type:"quiz",title:"…",q:"…",ch:["A","B","C"],a:0}],
  exam:[{q:"…",ch:["A","B"],a:1},{q:"Vrai ou faux…",vf:true,a:0}]
}
```

Ajoute aussi `words:[["mot","traduction","emoji"]]` : le jeu « Répète les mots » se crée tout seul.

Le générateur de `aventure.js` lit `video[].vis` : `steps`/`cycle` → jeu d'ordre, `cards` → jeu « relier », sinon une phrase à trous tirée de `say` (il choisit en priorité un mot de `words` ou `lex`).

Types de jeux : `quiz`, `match` (paires), `order` (remettre dans l'ordre), `sort` (classer dans 2 boîtes).
Types de visuels : `big`, `steps`, `cards`, `bars`, `cycle`.

## Ajouter un monde 3D

Dans `js/world3d.js`, ajoute une entrée dans `WORLDS` avec une fonction `build(w)`. L'objet `w` donne :
`w.scene`, `w.camera`, `w.orbit` (caméra qui tourne), `w.flyTo()`, `w.click(objet, fonction)`, `w.label(objet, html)`, `w.say(fr, ar)`, `w.buttons([...])`, `w.updates.push(fonction)`.

## Mettre en ligne

- **Netlify** (le plus simple) : va sur https://app.netlify.com/drop et glisse le dossier `cartable-lumi`. Tu reçois un lien.
- **GitHub Pages** : crée un dépôt, envoie les fichiers, puis *Settings > Pages > Deploy from branch*.
- **Vercel** : `npx vercel` dans le dossier.

## Comptes et espace parents

Au début, on choisit l'enfant (on peut en avoir plusieurs) et ses deux langues :
1. la **langue des explications** (العربية ou Français) ;
2. la **2e langue des mots techniques** (Français, English ou العربية) : l'enfant apprend et répète les mots dans cette langue.

L'appli note chaque jour le temps passé (étude, jeu, examen), les matières, les leçons ouvertes, les mots répétés, les jeux et les notes d'examen. L'**espace parents** (lien en bas de l'accueil, protégé par un code à 4 chiffres) montre tout ça.

Sans réglage, tout reste dans l'appareil. Pour garder la progression **en ligne**, avec un compte email par famille, sur tous les appareils :

1. Crée un compte gratuit sur https://supabase.com, puis **New project**. Choisis un mot de passe et la région **Europe**.
2. Dans le projet : **SQL Editor → New query**, colle tout le fichier `supabase.sql`, puis **Run**.
3. **Project Settings → API** : copie **Project URL** et la clé **anon public**, et colle-les dans `js/config.js` :
   `window.LUMI_CFG={url:"https://xxxx.supabase.co",key:"eyJ..."};`
4. **Authentication → URL Configuration** (très important, sinon le lien de l'email « bloque ») :
   - **Site URL** : le lien Netlify du site, par exemple `https://cartable-lumi.netlify.app`.
   - **Redirect URLs** : ajoute `https://cartable-lumi.netlify.app/**` et `http://localhost:5173/**`.
5. **Authentication → Email Templates** : dans **Confirm signup** et dans **Magic Link**, ajoute la ligne
   `Ton code : {{ .Token }}`. Le parent peut alors **écrire le code à 6 chiffres dans l'appli** au lieu de cliquer le lien : ça marche même si l'email est ouvert sur un autre téléphone.
6. **Sécurité (avant d'ouvrir au public)** : laisse **Authentication → Sign In / Providers → Email → Confirm email : ON** (sinon n'importe qui peut créer un compte au nom d'une autre personne). Dans la même page, mets la longueur minimale du mot de passe à **8** et active **Prevent use of leaked passwords** si ton offre le propose.
7. Le service gratuit de Supabase n'envoie que **quelques emails par heure**. Si l'appli dit « trop d'emails », attends, ou branche un vrai service d'email (**Project Settings → Authentication → SMTP**, par exemple Brevo ou Resend, gratuits).
8. Remets le dossier en ligne sur Netlify.

Dans l'appli : **Créer un compte** (email + mot de passe), puis le code reçu par email. Bouton **« Recevoir un code par email »** si le parent n'a pas ou a oublié son mot de passe. Les erreurs sont expliquées en français.

Les données des enfants restent privées : chaque parent ne voit que ses enfants (règles dans `supabase.sql`).

## Prof IA avec Ollama

1. Installe un modèle : `ollama pull qwen2.5:7b` (ou `ollama pull llama3.2` pour un PC plus léger).
2. Autorise **seulement ton site** à parler à Ollama (ne mets pas `*` : tous les sites web visités depuis cet ordinateur pourraient alors l'utiliser). Remplace l'adresse par celle de ton site :
   - Windows (PowerShell) : `setx OLLAMA_ORIGINS "https://cartable-lumi.netlify.app"`, puis quitte et relance Ollama.
   - Mac : `launchctl setenv OLLAMA_ORIGINS "https://cartable-lumi.netlify.app"`, puis relance l'application.
   - Linux : `sudo systemctl edit ollama`, ajoute `Environment="OLLAMA_ORIGINS=https://cartable-lumi.netlify.app"` sous `[Service]`, puis `sudo systemctl restart ollama`.
3. Dans le site : **Réglages > Prof IA > Tester et choisir le modèle**.

Le prof IA marche sur l'ordinateur où Ollama est installé. Si Chrome demande l'accès au réseau local, accepte.

## Photos et licences

Les photos viennent de Wikimedia Commons et se chargent depuis internet. L'auteur et la licence sont affichés sous chaque photo et dans « Crédits des photos ». Garde ces mentions si tu publies le site.

## Vie privée

Sans compte, le prénom, les étoiles et les notes restent dans le navigateur de l'appareil (localStorage), et les messages au prof IA vont seulement à ton Ollama. Avec un compte, l'email du parent, le prénom de l'enfant et son suivi (temps, leçons, notes) sont gardés chez Supabase. Les images et polices viennent de jsDelivr, Wikimedia et Google Fonts, qui voient donc l'adresse IP du visiteur.
