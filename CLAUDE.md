# Trattoria Pizzeria Sicilia — istruzioni per Claude

Sito statico su GitHub Pages. Niente framework, niente build: HTML/CSS/JS puri.
Dominio: trattoria.gealoalor.com · Repo: github.com/Geri51/Trattoria-Sicilia

## Prima di lavorare

- Leggi **STATO.md** per la storia del progetto e le decisioni prese finora.
- L'utente sta imparando sviluppo web: preferisce procedere **una modifica alla volta**,
  non più cose insieme.
- Risposte brevi, un passo alla volta. Niente promemoria o consigli non richiesti.

## Struttura

- Pagine HTML nella cartella principale, tutte con lo stesso `style.css`.
- `scroll.js`: script condiviso da tutte le pagine (effetto header allo scroll).
- `index.js`: solo il codice della chat del sito (solo in `index.html`).
- `Backend/`: prototipo separato (PHP/SQLite), non collegato al sito pubblico.
  **Non toccare senza che l'utente lo chieda esplicitamente.**

## Regole

- Niente file di test lasciati nel repository (es. `indexprova.*`): o si finalizzano o si cancellano.
- Il numero WhatsApp (`491792398447`) va solo negli `href="wa.me/..."`, mai come testo visibile.
- Prima di cancellare file serve il permesso esplicito dell'utente (richiesto a parte per questa cartella).
- Il push su GitHub da questa sessione è bloccato dal proxy di rete: il commit si fa qui,
  il push lo fa l'utente dal suo PC.
