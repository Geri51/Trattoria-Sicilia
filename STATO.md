# Stato del progetto — Trattoria Pizzeria Sicilia

Sito statico (GitHub Pages). Dominio: trattoria.gealoalor.com · Repo: github.com/Geri51/Trattoria-Sicilia

## Fatto (online)

- **Tutte le pagine con lo stesso stile** — commit `eef45d4`.
  - CSS unico condiviso in **`style.css`** (prima era inline in index.html; `old-style.css` rimosso).
  - Font **Petit Formal Script** (calligrafico) su logo, nav, titoli, footer; **Inter** per i testi.
  - **Logo** "Trattoria Pizzeria Sicilia": `clamp(22px,2.7vw,38px)`, nero, grassetto finto (`-webkit-text-stroke`), **ombra lunga attaccata** alle lettere (tante `text-shadow` diagonali).
  - **Nav** coi colori bandiera alternati (`nth-child` → verde/bianco/rosso), font `clamp(14px,1.35vw,17px)`.
  - **Header**: trasparente sull'hero, allo scroll diventa **cappuccino "macchiato"** (`#a5854f` + radial-gradient color latte). JS: classe `.scrolled` oltre 40px.
  - **Bottoni**: `.btn` verde pieno, `.btn.ghost` rosso, ognuno con **bandierina** tricolore a sinistra (`::before` linear-gradient).
  - **Pannelli** contenuto = `.panel` → forma a **splash da fumetto** con `.panel::before` + `clip-path: polygon(...)`, sfondo avorio semi-trasparente (home `.38`, pagine interne `.85`).
  - **Footer**: striscia tricolore in alto, © verde, Facebook bianco, WhatsApp rosso.
  - **Hero** (solo home): titolo "Italienische Küche mit Tradition", alone avorio sfumato (`h1::before`).
  - Pagine interne: `<main class="subpage">` con padding-top per l'header fisso.
- Sfondo di tutte le pagine: `bg.jpg` (foto interno ripulita) fissa dietro, via `html { background: ... fixed }`.

### Aggiornamenti sessione 03/09/2026

- **Navigazione su una riga, logo a sinistra + menu a destra** (niente logo impilato sopra).
  - Testo a grandezza piena; spazio recuperato riducendo margini (`padding:14px 12px`), gap logo↔menu (`10px`), gap voci (`clamp(8px,0.85vw,14px)`).
  - `.brand{flex:0 0 auto}` (logo non si stringe); `.site-nav{flex:0 1 auto;min-width:0}` (se serve scorre dentro sé stesso).
  - **Rimossa** la `mask-image` che sfumava/nascondeva l'ultima voce.
  - Entra su una riga fino a ~1000px; sotto scorre col dito. Voci: Home · Über uns · Speisekarte · Menu · Galerie · Presse · Social · Info · Reservieren.
- **`ueber-uns.html`** (nuova) — testo originale (famiglia, 40+ anni, "nei nostri piatti la passione della nostra terra", niente forno a legno). Sfondo = foto del proprietario `Imagines/Pasquale.jpg` (`.aboutbg`), **niente splash**.
- **`galerie.html`** (nuova) — `.gallery` (colonne) con lokal/bg/Pasquale/pizza + 2 segnaposto video. Da riempire con foto/video veri di Facebook.
- **`presse.html`** (nuova) — "Das sagen andere über uns": **5 recensioni vere Google a 5 stelle** (Antonia, İbrahim Var, G. G., Jörg Veeningen, Marco Zwick). NIENTE recensioni inventate. Bottoni "Auf Google bewerten" / "Auf Tripadvisor ansehen".
- **`info.html`** — orari reali (Lun Ruhetag; Mar–Dom 11–14 · sera, mer/gio/ven/sab fino alle 23), 3 telefoni fissi (`+49 2332 6660888 / 6659977 / 6659988`), e-mail `b.brancato@hotmail.de`, **Web `trattoria.gealoalor.com`**, mappa Google embed, "So finden Sie uns".
- **`menu.html`** — `<body class="page-menu">`, sfondo = copertina in pelle chiara `Imagines/461927989_...n.jpg`.
- **WhatsApp**: il numero mobile `491792398447` appare SOLO negli href `wa.me/...` e nella variabile dello script di `prenota.html`. **Mai come testo visibile.**

### Aggiornamenti sessione 09–11/09/2026

- **`allergene.html`** (nuova) — legenda allergeni A–N + additivi (2 = Konservierungsstoff, 7 = Phosphat), lista completa codificata per ogni piatto, box Hinweise (LMIV). Basi confermate dalla cucina: niente soia/malto nel teig, sedano in salsa pomodoro **e** in salsa bolognese, fosfati nel formaggio pizza, nitrito+fosfato nei salumi, salse alla panna = solo panna, gamberi veri, French-Dressing con senape+uovo, friggitrice non condivisa. Teigwaren (Bandnudeln/Tortellini/Cannelloni) assunte con uovo (C).
- **`speisekarte.html`** — codice allergeni sotto ogni piatto, link ad `allergene.html`.
- **`style.css`** — `.menu-row .alg`.
- **`datenschutz.html`** — corretto punto 4: i font sono **locali**, non Google Fonts (era scritto sbagliato).
- Commit: `62b3094`, `146ed60` (+ eventuali commit successivi da controllare, vedi git log).

### Il sito Jimdo (parallelo, NON questo repo)

Esiste un **secondo sito**, vecchio, su un'altra piattaforma: **`trattoriapizzeriasicilia.de`**, gestito su **Jimdo** (abbonamento "Grow" ~440 €/anno: pacchetto + Jimdo Local + dominio + add-on "Abmahnsichere Rechtstexte" con Trusted Shops). Il dominio è registrato **dentro** Jimdo.

Era quasi tutto template mai compilato (Impressum vuoto = rischio serio). Sessione 09–11/09: sistemato **dentro l'editor Jimdo** (non in questo repo, io non ci ho accesso diretto — solo pagine pubbliche via browser):

- **Impressum**: compilato col wizard Trusted Shops. Titolare **Maria Brancato** (Einzelunternehmen, Gewerbe-Anmeldung Stadt Gevelsberg, GewA1: nata 27.10.2002 a Hagen, cittadinanza italiana; niente Handelsregister). Indirizzo Rosendahler Straße 12, 58285 Gevelsberg. **Aufsichtsbehörde**: Ordnungsamt der Stadt Gevelsberg, Rathausplatz 1, 58285 Gevelsberg (necessaria: il locale serve alcolici). USt-IdNr: nessuna dichiarata (da riverificare con Steuerberater).
- **Datenschutzerklärung**: compilata (Google Maps sì, Smart Forms no, niente altro).
- **AGB + Widerrufsbelehrung**: riempite **al minimo** solo per sbloccare il tool (Trusted Shops obbliga tutte e 4 le pagine) — non servono davvero, nessun negozio online. Link `Lieferbedingungen`/`Widerrufsbelehrung`/`AGB` **tolti dal footer**; resta solo "Vertrag widerrufen" (bottone obbligatorio, non rimovibile).
- **Pagina Menü**: sezioni demo cancellate, sostituite con **testo vero** (tutte le pizze e paste, prezzi) incollato come blocco Text — leggibile ma grezzo (nomi in grassetto, niente colonne). File di riferimento mandati all'utente: `Speisekarte-Sicilia.txt` / `.docx` in Download.
- **Pagina Info**: mancavano orari e indirizzo — aggiunti (7 giorni, indirizzo, 3 telefoni, e-mail). File di riferimento: `Info-Sicilia.txt` in Download. Resta un riquadro mappa vuoto/non configurato da rimuovere.
- **Home**: **ancora piena di template demo** (Onlineshop finto, Online buchen finto, "Unser Team/Haufen Experten", Unsere Motivation, Unsere Geschichte, sezione Menü finta) — NON sistemata.

**Decisione aperta, non presa**: se un giorno conviene spostare il dominio `trattoriapizzeriasicilia.de` su GitHub Pages (questo sito, già fatto meglio) e chiudere Jimdo, oppure continuare a rifinire Jimdo. L'utente ha scelto finora di sistemare Jimdo com'è.

C'è anche un dossier su ordini/pagamenti online (canali, provider pagamento, GloriaFood/Stripe, acconti prenotazioni), discusso il 2–3/09 ma mai salvato — **ricostruito il 12/09 e salvato in [`dossier-ordini-pagamenti.md`](dossier-ordini-pagamenti.md)**. Riassunto: scelta fatta = GloriaFood (ordini/prenotazioni, gratis) + Stripe (pagamenti carta) + contanti; account GloriaFood/Stripe **mai aperti**; acconto sulle prenotazioni ancora senza soluzione decisa; IT-Recht Kanzlei scelto per i testi legali (AGB/Widerrufsbelehrung) ma non sottoscritto.

### ⚠️ Trovato l'11/09: menu ufficiale vero + foto rotte (commit esterni)

Due commit fatti **fuori da questa chat** l'11/09 mattina (`4549868`, `4829ca3`, già pushati) hanno riorganizzato le immagini:

- **Cancellata tutta `Imagines/`**, sostituita da **`Galerie - pronte/`** (53 foto rinominate `galerie_01.jpg`…`galerie_53.jpg` + 6 scan `menu_1.jpg`…`menu_6.jpg`).
- **`style.css` e `galerie.html` puntano ancora a `Imagines/...`** → **rotto e già online**: sfondi mancanti su Über uns/Info/Menu, foto rotte su tutta `galerie.html`. Da rifare i riferimenti pescando dai nuovi file (le foto in `Galerie - pronte/` non sono ancora abbinate a "chi è chi" — va guardato quale foto è cosa).
- `style - Copia.css` (doppione accidentale, 412 righe) committato poi ri-cancellato — risulta `D` in `git status`, va solo confermato il commit di rimozione.

**`menu_1.jpg`…`menu_6.jpg` sono la scansione del menu stampato ufficiale, valido dal 15 maggio 2024** — fonte più autorevole di `speisekarte.html`:
- **Numerazione POS reale** (Pizza 01–46, Nudelgerichte 101–144, Salate 202–213) con **prezzi che differiscono** da quelli nel sito, e **pizze mancanti nel sito** (Margherita, Cipolla, Paprica, Diavolo, Peperoni, Salami, Carciofi, Romana, San Remo, Roki, Quattro Formaggi, Primavera, Sicilia, Parmaschinken/Rucola…).
- **Codici allergeni già ufficiali e stampati** — vedi legenda vera trovata su `menu_6.jpg`, sotto.
- **Retro del volantino**: Inhaber storico "Rocco Brancato" (**superato** — l'attuale titolare è **Maria Brancato**, confermato dall'utente l'11/09); Instagram `trattoriasicilia_`; **zone/costi di consegna reali** (Gevelsberg da 16,50 € + 1 €; Gevelsberg-Knapp/Silschede +2 €; Schwelm+Ennepetal da 22,50 € +3 €); orari di consegna (Di–Sa 11–14/17–22:30, Do+Festivi 12–14/17–22:30, Lun Ruhetag); **40 posti interni + 25 esterni**; un **QR "Jetzt auch online bestellen!"** — da capire che sistema fosse (utile per il dossier ordini/pagamenti).

### ✅ Fatto l'11/09 (seconda parte): foto rotte sistemate, legenda allergeni corretta

- **`galerie.html`**: tutte le 53 foto ora da `Galerie - pronte/` (path con spazio, encodato `%20`), captions vere solo dove verificate a vista, generiche altrove.
- **`style.css`**: sfondi `Imagines/*` sostituiti — Über uns → `galerie_25.jpg` (foto di gruppo/famiglia), Menu → `galerie_04.jpg` (sala), Info → `galerie_15.jpg` (facciata col cartello). Nessun riferimento a `Imagines/` rimasto (verificato con grep).
- **`allergene.html`**: **legenda riscritta con quella VERA stampata su `menu_6.jpg`** — attenzione, lettere I–N diverse da quelle che avevo inventato: **I=Lupine, J=Weichtiere, K=Sellerie, L=Senf, M=Sesamsamen, N=Schwefeloxid/Sulfite** (non più I=Sellerie ecc.). Additivi 1–17 completi (prima ne avevo solo 2 e 7).
- **Tolti i codici allergene per piatto** sia da `allergene.html` che da `speisekarte.html` (i miei, dedotti in cucina, usavano lettere con significato diverso dalla legenda vera — pericoloso lasciarli). La pagina ora dice chiaramente: per il codice esatto di ogni piatto, chiedere al personale o guardare il menu stampato, finché qualcuno non trascrive con calma i codici veri dalle foto (testo minuscolo, letto da telefono → rischio di errore, es. ho letto "18"/"19" che non esistono nella legenda a 17 punti).
- Commit: `fc02433` (foto) + un commit successivo per allergene/speisekarte puliti (vedi `git log`).

### ✅ Fatto il 12/09: codici allergene per piatto trascritti e pubblicati su allergene.html

- Trascritti a mano tutti i codici dai 6 scan (`menu_1.jpg`…`menu_6.jpg`): Pizza 01–46, Nudelgerichte/Gnocchi/Tortellini/Cannelloni 101–144, Salate 202–213, Fleischgerichte 304–312. Punti dubbi verificati con zoom fino a 20x (ritagli via PIL) prima di trascrivere — vedi metodo e tabella grezza non ripulita in `scratch_allergeni_trascrizione.md`.
- **Due anomalie reali trovate sulla carta stampata stessa** (non errori di lettura, verificate a zoom alto):
  1. Molti piatti riportano additivi **"18" e "19"**, ma la legenda stampata sulla stessa carta (e su allergene.html) arriva solo a **17** — significato non dichiarato da nessuna parte. Su allergene.html questi numeri sono marcati con **\*** e rimandano al personale.
  2. Quasi ogni piatto porta un prefisso **"AA1"** (lettera A + un token "A1" incollato) anche su piatti semplicissimi (es. Spaghetti Aglio Olio) — sembra un artefatto del software di stampa più che un vero doppio allergene. Su allergene.html è stato semplificato a "A" (una volta) + additivo "1" reale. Cannelloni (128) e Tris (132) sono gli unici due piatti senza questo prefisso.
- **Da chiarire con la cucina/gestionale cassa (POS)**, non risolvibile da foto: cosa sono 18/19, e se "AA1" va davvero interpretato come sopra. Finché non chiarito, il personale resta il riferimento vincolante (come già indicato in pagina).
- Commit: vedi `git log` (dopo `fe11b8c`).

## Da fare

1. **Aggiornare `speisekarte.html` con nomi/numeri/prezzi ufficiali** dal menu vero — mancano pizze (Margherita, Cipolla, Paprica, Diavolo, Peperoni, Salami, Carciofi, Romana, San Remo, Roki, Quattro Formaggi, Primavera, Sicilia, Parmaschinken/Rucola) e alcuni prezzi sono cambiati. Una volta risistemata, aggiungere anche lì i codici allergene per piatto (stessi dati già su allergene.html).
2. **Chiedere in cucina/al gestionale POS** cosa significano gli additivi 18 e 19 (non nella legenda stampata) e se il prefisso "AA1" è reale o un refuso del programma usato per stampare il menu — vedi sopra. Utile anche chiedere a un legale/Steuerberater se l'attuale soluzione (codici certi in chiaro + "*" per i dubbi + "chiedere al personale") è sufficiente per la LMIV.
3. **Jimdo — Home**: cancellare le sezioni demo (Onlineshop, Online buchen, Unser Team, Unsere Motivation, Unsere Geschichte, Menü finto).
4. **Jimdo — Menü**: rifare con blocco Jimdo dedicato **"Speisekarte"**, dati dal menu ufficiale (punto 1) — anche lì i codici allergene vanno rifatti (stesso motivo del punto 2).
5. **Jimdo — Info**: rimuovere il riquadro mappa vuoto.
6. **LUCID / Verpackungsregister / Einwegkunststofffonds**: da verificare con lo Steuerberater.
7. Capire cos'era il **QR "Jetzt auch online bestellen!"** sul volantino — forse rilevante per il dossier ordini/pagamenti.
8. Verifica **mobile** reale (`background-attachment: fixed` a volte non va su telefono).
9. Eventuali altre recensioni vere a 5 stelle → aggiungere come `.quote` in `presse.html`.

## File chiave

| File | Cosa |
|---|---|
| `style.css` | stile unico, tutte le pagine — sfondi ora su `Galerie - pronte/` |
| `index.html` | home (hero + 2 pannelli splash) |
| `ueber-uns / speisekarte / menu / galerie / presse / social / info / prenota / allergene .html` | pagine interne |
| `bg.jpg` | foto sfondo (ripulita) · `restaurant.jpg` originale intatto |
| `Galerie - pronte/menu_1..6.jpg` | **scan del menu ufficiale stampato** — fonte vera per prezzi/piatti/allergeni |
| `Galerie - pronte/galerie_01..53.jpg` | foto vere del locale, da abbinare alle sezioni che usavano `Imagines/*` (proprietario, vetrina, copertina menu, galleria) |
| ~~`Imagines/*`~~ | **cancellata l'11/09**, non esiste più — non usare più questi percorsi |
| `scratch_allergeni_trascrizione.md` | tabella grezza (non ripulita) di tutti i codici allergene/additivi come stampati sul menu, con le due anomalie spiegate — riferimento per chi rivede allergene.html |

## Come riprendere

- Da questo PC: `claude --continue` nella cartella del progetto.
- Da altrove: nuova conversazione → "progetto GitHub Geri51/Trattoria-Sicilia, leggi STATO.md".
