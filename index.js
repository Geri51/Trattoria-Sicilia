var apri = document.getElementById('chat-apri');
var finestra = document.getElementById('chat-finestra');
var invia = document.getElementById('chat-invia');

apri.addEventListener('click', function (e) {
  e.preventDefault();
  if (finestra.style.display === 'block') {
    finestra.style.display = 'none';
  } else {
    finestra.style.display = 'block';
  }
});

invia.addEventListener('click', function () {
  var testo = document.getElementById('chat-casella').value;
  document.getElementById('chat-messaggi').innerHTML += testo;
  document.getElementById('chat-casella').value = '';
});
