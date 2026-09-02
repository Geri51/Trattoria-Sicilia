# Stato del progetto — Trattoria Pizzeria Sicilia

Sito statico (GitHub Pages). Dominio: trattoria.gealoalor.com · Repo: github.com/Geri51/Trattoria-Sicilia

## Fatto (online)

- **Tutte le pagine con lo stesso stile** — commit `eef45d4`.
  - CSS unico condiviso in **`style.css`** (prima era inline in index.html; `old-style.css` rimosso).
  - Font **Petit Formal Script** (calligrafico) su logo, nav, titoli, footer; **Inter** per i testi.
  - **Logo** "Trattoria Pizzeria Sicilia": grande (`clamp(26px,3.4vw,44px)`), nero, grassetto finto (`-webkit-text-stroke`), **ombra lunga attaccata** alle lettere (tante `text-shadow` diagonali).
  - **Nav** coi colori bandiera alternati (`nth-child` → verde/bianco/rosso), font 14–18px, resta su una riga.
  - **Header**: trasparente sull'hero, allo scroll diventa **cappuccino "macchiato"** (`#a5854f` + radial-gradient color latte). JS: classe `.scrolled` oltre 40px.
  - **Bottoni**: `.btn` verde pieno, `.btn.ghost` rosso, ognuno con **bandierina** tricolore a sinistra (`::before` linear-gradient).
  - **Pannelli** contenuto = `.panel` → forma a **splash da fumetto** con `.panel::before` + `clip-path: polygon(...)` (esplosione), sfondo avorio semi-trasparente (home `.38`, pagine interne `.85`).
  - **Footer**: striscia tricolore in alto, © verde, Facebook bianco, WhatsApp rosso.
  - **Hero** (solo home): titolo "Italienische Küche mit Tradition", spessore metà del logo (`0.8px`), alone avorio sfumato (`h1::before` border-radius storto + blur).
  - Pagine interne: `<main class="subpage">` con padding-top per l'header fisso.
- Sfondo di tutte le pagine: `bg.jpg` (foto interno ripulita) fissa dietro, via `html { background: ... fixed }`.

## Da fare

1. **Orari di apertura** in `info.html` — ancora segnaposto ("Bitte Öffnungszeiten eintragen").
2. Verifica **mobile** (`background-attachment: fixed` a volte non va su telefono; nav/logo grande su schermi piccoli).
3. Eventuale rifinitura splash sulle pagine con molto testo (Speisekarte/Menu): la forma è grande e spigolosa.
4. `-webkit-box-reflect` / `-webkit-text-stroke` / `clip-path` = ottimo su Chrome/Edge/Safari, su Firefox alcune rese sono più povere (niente rotture).

## File chiave

| File | Cosa |
|---|---|
| `style.css` | stile unico, tutte le pagine |
| `index.html` | home (hero + 2 pannelli splash) |
| `speisekarte/menu/social/info/prenota.html` | pagine interne, struttura `main.subpage > section.panel` |
| `bg.jpg` | foto sfondo (ripulita) · `restaurant.jpg` originale intatto |
| `pizza.jpg` | non più usata nella home |

## Come riprendere

- Da questo PC: `claude --continue` nella cartella del progetto.
- Da altrove: nuova conversazione → "progetto GitHub Geri51/Trattoria-Sicilia, leggi STATO.md".
