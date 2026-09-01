# Stato del progetto — Trattoria Pizzeria Sicilia

Sito statico (GitHub Pages) del ristorante di Gevelsberg.
Dominio: trattoria.gealoalor.com · Repo: github.com/Geri51/Trattoria-Sicilia

## Fatto

- **Home (`index.html`) rifatta** — commit `62f5cba`, online.
  - Sfondo unico: foto del ristorante (`bg.jpg`) fissa dietro tutta la pagina, con velo scuro sfumato.
  - `bg.jpg` = `restaurant.jpg` ripulita: data della fotocamera clonata via + lato destro ritagliato per togliere la giacca appesa. L'originale `restaurant.jpg` è intatto.
  - Sezioni "Was uns ausmacht" e "Kontakt" = pannelli traslucidi ("vetro", `backdrop-filter: blur`).
  - Header trasparente sopra l'hero, diventa solido allo scroll (piccolo JS).
  - Bottoni terracotta. Footer traslucido (`background: rgba(20,14,10,.20)`, `blur(3px)`).
  - Titolo hero "Italienische Küche mit Tradition" con l'alone bianco sfumato (invariato dal design precedente).
  - CSS **inline** dentro `index.html`. `style.css` NON è usato dalla home ma resta per le altre pagine.
  - Link header/bottoni collegati alle pagine esistenti.

## Da fare

1. **Adeguare le altre pagine** allo stile della nuova home: `speisekarte.html`, `menu.html`, `social.html`, `info.html`, `prenota.html` — ora hanno ancora lo stile vecchio (font Inter, header bianco fisso, `style.css`).
2. **Orari di apertura** in `info.html` — ancora segnaposto ("Bitte Öffnungszeiten eintragen").
3. Valutare: la foto di sfondo fissa sotto l'hero mostra sempre la stessa fascia (pavimento). Opzioni: pannelli più stretti, seconda foto, o foto del ristorante più grande/nuova.
4. Mobile: `background-attachment: fixed` su telefono a volte non funziona bene — verificare / gestire.
5. La banda con `pizza.jpg` c'era nel vecchio design, non è nella home nuova. Decidere se rimetterla.

## File chiave

| File | Cosa |
|---|---|
| `index.html` | home nuova (CSS inline) |
| `style.css` | stile vecchio, usato dalle altre 5 pagine |
| `bg.jpg` | foto sfondo home (ripulita) |
| `restaurant.jpg` | foto interno originale (intatta) |
| `pizza.jpg` | foto pizza |
| `CNAME` | dominio custom |

## Come riprendere

- Da questo PC: `claude --continue` nella cartella del progetto.
- Da altrove / telefono: nuova conversazione, dì "progetto GitHub Geri51/Trattoria-Sicilia, leggi STATO.md" e si riparte da qui.
