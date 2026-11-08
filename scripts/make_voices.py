"""Fabrique les voix enregistrées de Cartable Lumi (voix naturelles, une fois pour toutes).

Utilisation (dans le dossier du projet) :
    pip install edge-tts
    npm run voix            # arabe seulement (le plus important : beaucoup d'appareils n'ont pas de voix arabe)
    npm run voix -- --all   # arabe + français + anglais

Les fichiers vont dans assets/audio/<langue>/<code>.mp3 et la liste dans assets/audio/index.js.
On peut relancer : les fichiers déjà faits sont gardés. Voix utilisées (Microsoft, via edge-tts) :
arabe du Maroc « Mouna », français « Eloise » (voix d'enfant), anglais « Maisie » (voix d'enfant).
"""
import asyncio, json, os, sys, argparse, shutil, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FFMPEG = shutil.which("ffmpeg")
VOICES = {"ar": "ar-MA-MounaNeural", "fr": "fr-FR-EloiseNeural", "en": "en-GB-MaisieNeural"}


def vhash(text: str) -> str:
    """Même calcul que vHash() dans js/voix.js (FNV-1a 32 bits sur les caractères)."""
    h = 0x811C9DC5
    for ch in text:
        h ^= ord(ch)
        h = (h * 16777619) & 0xFFFFFFFF
    return f"{h:08x}"


def norm(t: str) -> str:
    return " ".join(str(t).split())


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--all", action="store_true", help="aussi le français et l'anglais")
    ap.add_argument("--voice-ar", default=VOICES["ar"], help="ex. ar-SA-ZariyahNeural, ar-MA-JamalNeural")
    ap.add_argument("--rate", default="-5%", help="vitesse, ex. -10%% ou +0%%")
    ap.add_argument("--jobs", type=int, default=4)
    ap.add_argument("--no-compress", action="store_true", help="garder la qualité d'origine (fichiers plus lourds)")
    a = ap.parse_args()
    try:
        import edge_tts
    except ImportError:
        sys.exit("Installe d'abord edge-tts :  pip install edge-tts")
    VOICES["ar"] = a.voice_ar
    langs = ["ar", "fr", "en"] if a.all else ["ar"]
    texts = json.load(open(os.path.join(ROOT, "scripts", "texts.json"), encoding="utf-8"))
    todo = [(t["lang"], norm(t["text"])) for t in texts if t["lang"] in langs]
    out = os.path.join(ROOT, "assets", "audio")
    for l in langs:
        os.makedirs(os.path.join(out, l), exist_ok=True)
    sem = asyncio.Semaphore(a.jobs)
    done, fail = 0, []

    async def one(lang, text):
        nonlocal done
        path = os.path.join(out, lang, vhash(text) + ".mp3")
        if os.path.exists(path) and os.path.getsize(path) > 500:
            done += 1
            return
        async with sem:
            for essai in range(3):
                try:
                    tmp = path + ".tmp.mp3"
                    await edge_tts.Communicate(text, VOICES[lang], rate=a.rate).save(tmp)
                    # plus léger pour le téléphone : mono 32 kb/s (la voix reste claire)
                    if FFMPEG and not a.no_compress:
                        r = await asyncio.to_thread(subprocess.run, [FFMPEG, "-y", "-loglevel", "error", "-i", tmp, "-ac", "1", "-b:a", "32k", path])
                        if r.returncode == 0 and os.path.getsize(path) > 500:
                            os.remove(tmp)
                        else:
                            os.replace(tmp, path)
                    else:
                        os.replace(tmp, path)
                    break
                except Exception as e:  # réseau ou limite : on réessaie
                    await asyncio.sleep(2 + essai * 3)
            else:
                fail.append(text)
        done += 1
        if done % 50 == 0:
            print(f"{done}/{len(todo)} phrases")

    await asyncio.gather(*(one(l, t) for l, t in todo))
    index = {}
    for l in ["ar", "fr", "en"]:
        d = os.path.join(out, l)
        if os.path.isdir(d):
            index[l] = " ".join(sorted(f[:-4] for f in os.listdir(d) if f.endswith(".mp3") and os.path.getsize(os.path.join(d, f)) > 500))
    with open(os.path.join(out, "index.js"), "w", encoding="utf-8") as f:
        f.write("// Liste des voix enregistrées (fabriquée par scripts/make_voices.py)\nwindow.AUDIO_INDEX=" + json.dumps(index) + ";\n")
    size = sum(os.path.getsize(os.path.join(out, l, f)) for l in index for f in os.listdir(os.path.join(out, l)) if f.endswith(".mp3"))
    print(f"Terminé : {done} phrases ({size/1e6:.0f} Mo). Échecs : {len(fail)}")
    if fail:
        print("Relance la commande pour réessayer les échecs.")


if __name__ == "__main__":
    asyncio.run(main())
