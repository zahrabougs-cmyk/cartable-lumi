#!/bin/bash
# Double-clique sur ce fichier (Mac). Il fabrique les voix de Lumi dans assets/audio.
# Il faut internet pendant la fabrication. Ensuite, les voix marchent sans internet.
cd "$(dirname "$0")"
echo "== Lumi : fabrication des voix (arabe, français, anglais) =="
command -v python3 >/dev/null || { echo "Installe Python : https://www.python.org/downloads/"; read -p "Entrée pour fermer"; exit 1; }
command -v node >/dev/null || { echo "Installe Node.js : https://nodejs.org"; read -p "Entrée pour fermer"; exit 1; }
python3 -m pip install --user --quiet edge-tts
node scripts/export-texts.js && python3 scripts/make_voices.py --all
echo ""; echo "Terminé ! Tu peux fermer cette fenêtre, puis remettre le dossier en ligne."
read -p "Entrée pour fermer"
