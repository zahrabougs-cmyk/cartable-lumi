@echo off
chcp 65001 >nul
REM Double-clique sur ce fichier (Windows). Il fabrique les voix de Lumi dans assets\audio.
REM Il faut internet pendant la fabrication. Ensuite, les voix marchent sans internet.
cd /d "%~dp0"
echo == Lumi : fabrication des voix (arabe, francais, anglais) ==
where python >nul 2>nul || (echo Installe Python : https://www.python.org/downloads/ ^(coche "Add to PATH"^) & pause & exit /b)
where node >nul 2>nul || (echo Installe Node.js : https://nodejs.org & pause & exit /b)
python -m pip install --quiet edge-tts
node scripts\export-texts.js && python scripts\make_voices.py --all
echo.
echo Termine ! Tu peux fermer cette fenetre, puis remettre le dossier en ligne.
pause
