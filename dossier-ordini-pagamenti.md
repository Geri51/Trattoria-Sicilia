# Dossier: Ordini e Pagamenti Online — Trattoria Pizzeria Sicilia (Gevelsberg)

*Ricostruito il 12/09/2026 dalla trascrizione della sessione "ordini e pagamenti online" del 2–3/09/2026 (esisteva solo come chat, non era mai stato salvato come documento). Dove qualcosa è rimasto indeciso o non implementato, è segnalato come **PUNTO APERTO**.*

---

## 0. Contesto di partenza

- Sito attuale: **trattoria.gealoalor.com**, statico su **GitHub Pages** (repo `Trattoria-Sicilia`) — nessun server, nessun database. Qualsiasi pagamento deve appoggiarsi a un servizio esterno (Stripe/PayPal/piattaforma ordini), perché GitHub Pages non può gestire pagamenti in sicurezza.
- Sistema di prenotazione già esistente: un **form sul sito che manda i dati via WhatsApp** (nome, data, ora, persone). Nessun pagamento, nessun account. Resta attivo, non è stato deciso di sostituirlo.

## 1. Confronto iniziale delle opzioni

| # | Opzione | Account clienti | Sforzo | Costo tipico |
|---|---|---|---|---|
| **1** | Piattaforma ristorante integrata (**GloriaFood**, resmio, Sitedish…) | incluso | basso (ore) | GloriaFood: ordini gratis, fee solo sul pagamento online · resmio ~30–70 €/mese |
| **2** | Backend su misura (Firebase/Supabase + Stripe) | da costruire | alto (settimane + manutenzione) | infra ~0–25 €/mese + Stripe 1,5% + 0,25 € |
| **3** | Form ordine + Stripe Payment Link, senza login | nessuno | basso-medio | solo commissioni Stripe |
| **4** | Cambio piattaforma sito (Wix Restaurants, Squarespace) | incluso | medio (si perde il codice attuale) | ~15–35 €/mese |

Lieferando/Wolt scartate (commissioni 13–30% a ordine, marketplace). **Scelta fatta: opzione 1 con GloriaFood.**

## 2. GloriaFood — piattaforma scelta

Sistema **gratuito** (di Oracle) di ordini online + prenotazione tavoli. Non è un marketplace: non porta clienti nuovi, dà solo lo strumento.

**Come si integra**: ci si registra sul pannello GloriaFood, si costruisce il menù lì, poi si incolla nel sito il **codice widget** (Publish → "Add to your existing website", puro JavaScript, compatibile con GitHub Pages). Sul sito compaiono due pulsanti — **"Menü & Bestellen"** e **"Tisch reservieren"** — che aprono una finestra di GloriaFood sopra il sito.

**Cosa è gratis / a pagamento**:
| Voce | Costo |
|---|---|
| Menù, carrello, ordini ritiro/consegna, prenotazione tavolo, account cliente | gratis |
| Pagamento contanti al ritiro/consegna | gratis |
| Pagamento online (carta/Apple Pay/PayPal via Stripe) | add-on ~20–30 € + IVA/mese + commissioni Stripe |

**Account GloriaFood — dati usati in chat per la registrazione**: email `b.brancato@hotmail.de` · tel `+49 2332 6660888` · Trattoria Pizzeria Sicilia · Rosendahler Straße 12, 58285 Gevelsberg.

**Limiti importanti**:
- Nessun acconto parziale sugli ordini (tutto online o tutto alla consegna).
- La prenotazione tavolo è solo un modulo di richiesta — **nessun acconto/caparra possibile dentro GloriaFood.**

## 3. Pagamenti: Stripe (non PayPal da solo)

Conclusione: PayPal da solo non basta; **Stripe** copre carte + Apple/Google Pay + Klarna + PayPal in un'unica pagina.

- Apertura conto: 0 €, nessun canone fisso. Serve: dati ditta, Steuernummer/USt-IdNr, IBAN, documento del titolare.
- Commissione: carte UE ~1,5% + 0,25 € · extra-UE ~2,5–3,25% + 0,25 € · PayPal/Klarna via Stripe ~2–3% + fisso.
- Bonifico sul conto tedesco: gratis, ogni 2–3 giorni. Chargeback: ~15 €.
- Esempio: ordine 25 € con carta UE → commissione ~0,63 € → arrivano ~24,37 €.

**Conto Stripe non risulta mai aperto** — resta da fare.

## 4. ⚠️ Acconto prenotazioni ("Anzahlung Reservierung") — PUNTO APERTO, mai deciso

- GloriaFood non lo supporta.
- Alternative sul tavolo, **nessuna scelta finale**:
  1. resmio/Quandoo (piattaforme prenotazione con caparra, ~30–70 €/mese, mai approfondito oltre questo numero);
  2. Pagina custom sul sito + **Stripe Payment Link** riutilizzabile (es. "Anzahlung Reservierung", importo fisso o a scelta) con modulo (nome/tel/data/ora/persone) + bottone "Anzahlung zahlen". Limite: nessun collegamento automatico pagamento↔prenotazione, va abbinato a mano su Stripe.

## 5. Chatbot

Non discusso in questa conversazione — nessun riferimento a un chatbot per il ristorante.

## 6. Raccomandazione finale

> **GloriaFood** (menù/ordini/prenotazione tavolo/account clienti, gratis) **+ Stripe** collegato dentro GloriaFood per i pagamenti online **+ contanti** per ritiro/consegna.

L'acconto sulle prenotazioni (punto 4) resta separato e aperto.

## 7. Riepilogo costi

**Una tantum**: sito/dominio/GloriaFood/Stripe = 0 €.

**Canoni mensili**:
| Voce | Costo | Necessario per |
|---|---|---|
| GloriaFood base | 0 € | sempre incluso |
| GloriaFood "Accept Payments" | ~20–30 € + IVA (≈23–33 €) | solo se pagamento carta online |
| Stripe | 0 € | solo commissioni |
| IT-Recht Kanzlei (testi legali) | ~9,90 € + IVA ≈ 11,90 € | obbligatorio se si vende online |

**Per ordine**: contanti 0 € · carta online ~1,5–3% + 0,25 € (Stripe) · GloriaFood non prende % sugli ordini.

**Scenario A (solo contanti)**: ~12 €/mese fisso. **Scenario B (anche carta online)**: ~35–45 €/mese fisso + commissioni per ordine.

## 8. Obblighi legali collegati alla vendita online

- Sito solo informativo (oggi): bastano Impressum + Datenschutzerklärung.
- Sito con ordini online: servono anche **AGB** e **Widerrufsbelehrung**.
- **Scelto**: IT-Recht Kanzlei (~9,90 €+IVA/mese, tutti e 4 i testi + aggiornamenti automatici) — **non ancora sottoscritto**.
- Stato pagine legali sul sito: ✅ Impressum e Datenschutzerklärung completati e online. ❌ `agb.html`/`widerruf.html` esistono solo come bozze locali con segnaposto minimi (vedi nota sotto — nel frattempo compilate anche su Jimdo, non su questo sito), da rifare seriamente con IT-Recht Kanzlei quando si attivano gli ordini online su **questo** sito GitHub.
- Da verificare col commercialista: autorità esatta in Impressum (Stadt Gevelsberg vs Ennepe-Ruhr-Kreis) e se serve una USt-IdNr.

## 9. Stato avanzamento

**Fatto/deciso**: confronto piattaforme fatto, GloriaFood scelto, combinazione GloriaFood+Stripe+contanti definita, IT-Recht Kanzlei scelto (non sottoscritto), Impressum/Datenschutz del sito pubblicati, Google Fonts locali e Google Maps click-to-load pubblicati.

**Da fare**:
- Completare la configurazione GloriaFood (menù, prezzi, sezione ordini, prenotazione tavolo) — l'utente aveva iniziato da solo ma non ha mai confermato il completamento né condiviso il codice del widget.
- Incollare il widget nel sito (pagina tipo `bestellen.html`, pulsanti "Menü & Bestellen" / "Tisch reservieren") — mai creata.
- Decidere se attivare l'add-on GloriaFood "Accept Payments".
- **Aprire l'account Stripe** e collegarlo a GloriaFood.
- **Decidere come gestire l'acconto prenotazioni** (nessuno / resmio-Quandoo / pagina custom + Payment Link manuale).
- Sottoscrivere IT-Recht Kanzlei e compilare AGB+Widerrufsbelehrung veri quando si attivano gli ordini online su questo sito.
- Decidere zona di consegna, costo, ordine minimo, orari accettazione ordini, tempo di preparazione — mai discussi con numeri concreti in quella conversazione (nel frattempo trovati sul volantino del menu ufficiale, vedi STATO.md: Gevelsberg da 16,50€+1€, Gevelsberg-Knapp/Silschede +2€, Schwelm+Ennepetal da 22,50€+3€).
- C'era anche un **QR "Jetzt auch online bestellen!"** sul retro del volantino ufficiale (STATO.md, trovato l'11/09) — non ancora capito che sistema fosse; potrebbe essere utile confrontarlo con GloriaFood prima di aprire un account nuovo.

## 10. Dati del ristorante usati in questo dossier

Trattoria Pizzeria Sicilia · Rosendahler Straße 12, 58285 Gevelsberg · Titolare Maria Brancato (Einzelunternehmen) · email GloriaFood `b.brancato@hotmail.de` · tel `+49 2332 6660888`.
