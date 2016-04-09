function clockCount() // Funkcja zegara
{
  var today = new Date(); // Inicjacja obecnej daty do zmiennej "today"

  var h = today.getHours(); // Pobranie godzin
  if (h < 10) h = "0" + h; // Godziny mniejsze od 10 będą wyświetlane jako "01", a nie jako "1"

  var m = today.getMinutes(); // Pobranie minut
  if (m < 10) m = "0" + m; // Minuty mniejsze od 10 będą wyświetlane jako "01", a nie jako "1"

  var s = today.getSeconds(); // Pobranie sekund
  if (s < 10) s = "0" + s; // Sekundy mniejsze od 10 będą wyświetlane jako "01", a nie jako "1"

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s; // Wyświetlenie zegara

  setTimeout("clockCount()", 1000); // Opóźnienie odliczania o 1 sekundę
}
