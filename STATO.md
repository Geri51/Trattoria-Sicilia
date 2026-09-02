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

## Da fare

1. **Dati piatti in `menu.html`** — presi dal vecchio sito, forse non aggiornati. Discussione "parliamo di menu" aperta (opzioni: solo highlights / solo nomi / menu completo da Lieferando / eliminare la pagina). Nessuna decisione.
2. **`galerie.html`** — servono foto e video veri (download in blocco da Facebook: "Deine Informationen herunterladen" o estensione tipo DownAlbum).
3. Verifica **mobile** reale (`background-attachment: fixed` a volte non va su telefono).
4. Eventuali altre recensioni vere a 5 stelle → aggiungere come `.quote` in `presse.html`.

## File chiave

| File | Cosa |
|---|---|
| `style.css` | stile unico, tutte le pagine |
| `index.html` | home (hero + 2 pannelli splash) |
| `ueber-uns / speisekarte / menu / galerie / presse / social / info / prenota .html` | pagine interne |
| `bg.jpg` | foto sfondo (ripulita) · `restaurant.jpg` originale intatto |
| `Imagines/Pasquale.jpg` | proprietario (sfondo ueber-uns) |
| `Imagines/lokal.jpg` | vetrina ripulita (sfondo info) |
| `Imagines/461927989_...n.jpg` | copertina pelle chiara (sfondo menu) |
| `Imagines/482071221_...n.jpg` | vecchio volantino, NON usato (solo riferimento) |

## Come riprendere

- Da questo PC: `claude --continue` nella cartella del progetto.
- Da altrove: nuova conversazione → "progetto GitHub Geri51/Trattoria-Sicilia, leggi STATO.md".
