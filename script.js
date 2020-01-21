alert("Willkommen beim Rentenrechner!");

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}
function jahreBisRente(birthYear, firstName) {
  let jetzt = new Date().getFullYear();
  let alter = calculateAge(birthYear);
  let arbeitsJahre = 64 - alter;
  if (arbeitsJahre > 0) {
    document.getElementById("output").innerHTML =
      firstName +
      " hat noch " +
      arbeitsJahre +
      " Jahre zu arbeiten. Er geht im Jahre " +
      (jetzt + arbeitsJahre) +
      " in Rente.";
  } else {
    document.getElementById("output").innerHTML =
      firstName +
      " ist bereits seit " +
      Math.abs(arbeitsJahre) +
      " Jahren in Rente.";
  }
}

jahreBisRente(prompt("Wann bist du geboren?"), prompt("Wie heißt du?"));
