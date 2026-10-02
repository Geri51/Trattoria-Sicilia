console.log("JavaScript esterno collegato");
var h=document.querySelector('.site-header');
  var f=function(){h.classList.toggle('scrolled',window.scrollY>40);};
  f();addEventListener('scroll',f,{passive:true});
  function creaRiepilogo(nome, numero) {
    var riepilogo = nome + " - Persone: " + numero;
    return riepilogo;
}
  

  (function () {
    var WHATSAPP_NUMBER = "491792398447";
    var form = document.getElementById("reservation-form");
    var msgBox = document.getElementById("form-message");
    function creaTestoPersone(numero) {
    var testo = "Persone: " + numero;
    return testo;
}
function creaMessaggio(nome) {
    var messaggio = "Prenotazione di: " + nome;
    return messaggio;
}
    form.addEventListener("submit", function (e) {
      e.preventDefault();
     
      var data = new FormData(form);
      var personen = parseInt(data.get("personen"), 10);
      if (!Number.isInteger(personen) || personen < 1 || personen > 20) {
        msgBox.className = "error";
        msgBox.textContent = "Bitte eine gültige Personenzahl zwischen 1 und 20 angeben.";
        return;
      }
      var lines = [
        "Neue Reservierungsanfrage",
        creaRiepilogo(data.get("name"), personen),
        "Telefon: " + (data.get("telefon") || "").trim(),
        "E-Mail: " + ((data.get("email") || "").trim() || "-"),
        "Datum: " + data.get("datum"),
        "Uhrzeit: " + data.get("uhrzeit")
      ];
      var note = (data.get("anmerkungen") || "").trim();
      if (note) lines.push("Anmerkungen: " + note);
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");
      msgBox.className = "success";
      msgBox.textContent = "WhatsApp wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht ab, um Ihre Reservierung anzufragen.";
      
  });
  })();
  


