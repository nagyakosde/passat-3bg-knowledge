PASSAT 3BG KNOWLEDGE – PWA prototípus
=====================================

Mi található benne?
- Magyar nyelvű, reszponzív kezelőfelület
- Járműprofil (motorcsalád, motorkód, évjárat, karosszéria, hajtás, PR-kód)
- Fékrendszer-katalógus váz
- Példa OBD hibakódok
- Helyi járműprofil-mentés
- PWA manifest és offline cache (service worker)

FONTOS:
Ez egy telepíthető PWA ALAP-PROTOTÍPUS, nem teljes gyári alkatrészkatalógus.
A fékalkatrészeknél szándékosan nem szerepelnek ellenőrizetlen OE cikkszámok.
A kompatibilitást VIN, PR-kód, gyártási idő, motorkód és hajtás szerint kell igazolni.
A képernyőn látható mintaadatok nem helyettesítik a VW gyári javítási dokumentációt.

Telepítés:
1. A ZIP tartalmát töltsd fel HTTPS-t támogató tárhelyre (pl. saját webtárhely).
2. Nyisd meg a webcímet Androidon Chrome-ban, majd válaszd az „Alkalmazás telepítése”
   vagy „Hozzáadás a kezdőképernyőhöz” lehetőséget.
3. iPhone-on nyisd meg Safariban, majd Megosztás → Főképernyőhöz adás.
4. Az első online megnyitás után az alkalmazás gyorsítótárazott részei offline is elérhetők.

Fejlesztői megjegyzés:
A böngészős telepítéshez HTTPS szükséges (localhost kivétel fejlesztéskor).
A Google Play / Apple App Store kiadáshoz külön csomagolás, aláírás,
tesztelés és áruházi publikálás szükséges.
