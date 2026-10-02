<?php

if (isset($_POST["name"])) {
    $nome = $_POST["name"];
    $email = $_POST["email"];
    $telefono = $_POST["telefon"];
    $persone = $_POST["personen"];
    $data = $_POST["datum"];
    $ora = $_POST["uhrzeit"];

    echo "Prenotazione ricevuta per " . $nome . "<br>";
    echo "E-Mail: " . $email . "<br>";
    echo "Telefono: " . $telefono . "<br>";
    echo "Persone: " . $persone . "<br>";
    echo "Data: " . $data . "<br>";
    echo "Ora: " . $ora;
}
?>