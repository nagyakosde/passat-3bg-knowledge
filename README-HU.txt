PASSAT 3BG NEXUS – RELEASE 05 (LAPOS FELTÖLTÉS)

A csomag minden fájlja a GitHub repository gyökerébe tölthető fel.

Fájlok:
- index.html – új, látványtervhez igazított teljes felület
- manifest.webmanifest – PWA telepítési adatok
- sw.js – offline cache, a szükséges képekkel
- passat-variant.webp – fő Passat Variant látványkép
- wireframe-car.webp – a látványtervből származó interaktív járműgrafika
- module-*.webp – az öt fő modul alkatrész-képei
- icon-192.png és icon-512.png – alkalmazásikonok

GitHub Pages:
1. A ZIP-et bontsd ki a telefonodon.
2. A fájlokat a repository gyökerébe töltsd fel, az index.html, manifest.webmanifest és sw.js fájlokat felülírva.
3. A képfájlokat új fájlként add hozzá. A régi assets mappát nem kell törölni.
4. A Pages frissülése után nyisd meg újra a weboldalt és frissíts rá. A PWA-t nem kell törölni vagy újratelepíteni.

Egyszerűbb csere:
A PASSAT_3BG_NEXUS_INDEX_SINGLEFILE.html fájl a teljes főoldalt és minden helyi képet egyetlen HTML-be ágyazva tartalmazza. Ezzel csak a meglévő index.html-t kell lecserélni. A már létező manifest.webmanifest és sw.js használható tovább.

Működés és pontosság:
- 11 navigálható oldal, reszponzív nézet, animált Sedan/Variant választó, kattintható műszaki zónák, kereshető alkatrészcsoportok, hibakódkereső, helyi járműprofil és szerviznapló.
- A járműprofil és a szerviznapló kizárólag a böngésző helyi tárhelyére kerül.
- Az interaktív modell szemléltető grafika, nem valódi forgatható 3D/CAD modell vagy gyári robbantott rajz.
- A katalógus csoportokat és illesztési szempontokat tartalmaz, nem teljes ETKA/OE-adatbázis. Nem talál ki gyári cikkszámokat.
- A Variant képe helyben tárolt. A Sedan fotó külső forrásokból töltődik be; ha nem elérhető, a felület visszavált a Variant képre.
