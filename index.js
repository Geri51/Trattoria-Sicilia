var apri = document.getElementById('chat-apri');
var finestra = document.getElementById('chat-finestra');
var invia = document.getElementById('chat-invia');

apri.addEventListener('click', function (e) {
  e.preventDefault();
  if (finestra.style.display === 'flex') {
    finestra.style.display = 'none';
  } else {
    finestra.style.display = 'flex';
  }
});
function rispondi(testo) {
  var t = testo.toLowerCase();
    if (t.includes('speisekarte') || t.includes('karte')) {
    return 'Hier finden Sie unsere Speisekarte: <a href="speisekarte.html">Speisekarte</a>';
  }
  if (t.includes('menù') || t.includes('carta')) {
    return 'Ecco il nostro menu: <a href="speisekarte.html">Menu</a>';
  }
  if (t.includes('menu')) {
    return 'Here is our menu: <a href="speisekarte.html">Menu</a>';
  }
    if (t.includes('facebook') || t.includes('social')) {
    return '<a href="https://www.facebook.com/PizzeriaSicilia/" target="_blank">Facebook</a> · <a href="social.html">Social</a>';
  }

  if (t.includes('reservieren') || t.includes('tisch')) {
    return 'Hier können Sie einen Tisch reservieren: <a href="prenota.html">Reservieren</a>';
  }
  if (t.includes('prenot') || t.includes('tavolo')) {
    return 'Qui può prenotare un tavolo: <a href="prenota.html">Prenota</a>';
  }
  if (t.includes('book') || t.includes('table')) {
    return 'You can book a table here: <a href="prenota.html">Book a table</a>';
  }

  if (t.includes('adresse') || t.includes('anfahrt') || t.includes('öffnungszeiten') || t.includes('kontakt')) {
    return 'Adresse, Öffnungszeiten und Kontakt: <a href="info.html">Info</a>';
  }
  if (t.includes('dove') || t.includes('indirizzo') || t.includes('orari') || t.includes('contatt')) {
    return 'Indirizzo, orari e contatti: <a href="info.html">Info</a>';
  }
  if (t.includes('where') || t.includes('address') || t.includes('opening') || t.includes('contact')) {
    return 'Address, opening hours and contact: <a href="info.html">Info</a>';
  }

  if (t.includes('galerie') || t.includes('bilder')) {
    return 'Unsere Bilder: <a href="galerie.html">Galerie</a>';
  }
  if (t.includes('galleria') || t.includes('foto')) {
    return 'Le nostre foto: <a href="galerie.html">Galleria</a>';
  }
  if (t.includes('gallery') || t.includes('photo')) {
    return 'Our photos: <a href="galerie.html">Gallery</a>';
  }

  if (t.includes('über uns')) {
    return 'Mehr über uns: <a href="ueber-uns.html">Über uns</a>';
  }
  if (t.includes('chi siamo') || t.includes('chi siete')) {
    return 'Chi siamo: <a href="ueber-uns.html">Chi siamo</a>';
  }
  if (t.includes('about')) {
    return 'About us: <a href="ueber-uns.html">About us</a>';
  }

  if (t.includes('allergene') || t.includes('allergie')) {
    return 'Unsere Allergene-Liste: <a href="allergene.html">Allergene</a>';
  }
  if (t.includes('allergeni') || t.includes('allergia')) {
    return 'La nostra lista degli allergeni: <a href="allergene.html">Allergeni</a>';
  }
  if (t.includes('allergen') || t.includes('allergy')) {
    return 'Our allergen list: <a href="allergene.html">Allergens</a>';
  }

  if (t.includes('bewertung') || t.includes('presse')) {
    return 'Das sagen unsere Gäste: <a href="presse.html">Bewertungen</a>';
  }
  if (t.includes('recension')) {
    return 'Cosa dicono i nostri clienti: <a href="presse.html">Recensioni</a>';
  }
  if (t.includes('review')) {
    return 'What our guests say: <a href="presse.html">Reviews</a>';
  }

  if (t.includes('impressum') || t.includes('datenschutz') || t.includes('privacy') || t.includes('agb') || t.includes('widerruf')) {
    return '<a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a> · <a href="agb.html">AGB</a> · <a href="widerruf.html">Widerruf</a>';
  }
    // se il testo contiene "hallo" oppure "guten" E è corto (meno di 15 caratteri) → saluto tedesco
  if ((t.includes('hallo') || t.includes('guten')) && t.length < 15) {
    return 'Guten Tag! Wie können wir Ihnen helfen?';
  }
  // se il testo contiene "hello" E è corto → saluto inglese
  if (t.includes('hello') && t.length < 15) {
    return 'Good day! How can we help you?';
  }
  // se il testo contiene "ciao" E è corto → saluto italiano
  if (t.includes('ciao') && t.length < 15) {
    return 'Buongiorno! Come possiamo aiutarla?';
  }
    // risposta per tutto il resto: elenco puntato con 3 lingue + link WhatsApp
  return '<ul style="margin:6px 0;padding-left:18px;">' +
    '<li><strong>DE:</strong> Für weitere Informationen kontaktieren Sie bitte unseren Service.</li>' +
    '<li><strong>IT:</strong> Per ulteriori informazioni contatti il nostro servizio assistenza.</li>' +
    '<li><strong>EN:</strong> For more information, please contact our support team.</li>' +
    '</ul>' +
    '<a href="https://wa.me/491792398447" target="_blank"><strong>WhatsApp</strong></a>';
}
invia.addEventListener('click', function () {
  var testo = document.getElementById('chat-casella').value;
  document.getElementById('chat-messaggi').innerHTML += '<div class="msg-cliente">' + testo + '</div>';
  var risposta = rispondi(testo);
  document.getElementById('chat-messaggi').innerHTML += '<div class="msg-chat">' + risposta + '</div>';
   // prendi la finestra dei messaggi...
  var scatola = document.getElementById('chat-messaggi');
  // ...e falla scorrere fino in fondo, all'ultimo messaggio
  scatola.scrollTop = scatola.scrollHeight;
  document.getElementById('chat-casella').value = '';
});

// quando si preme un tasto nella casella...
document.getElementById('chat-casella').addEventListener('keydown', function (e) {
  // ...se il tasto è Invio, fai come se avessi cliccato il bottone "Invia"
  if (e.key === 'Enter') {
    invia.click();
  }
});