function clockCount() // Funkcja zegara
{
  var today = new Date(); // Inicjacja obecnej daty do zmiennej "today"

  var h = today.getHours(); // Pobranie godzin
  if (h < 10) h = "0" + h; // Godziny mniejsze od 10 będą wyświetlane jako "01", a nie jako "1"

  var m = today.getMinutes(); // Pobranie minut
  if (m < 10) m = "0" + m; // Minuty mniejsze od 10 będą wyświetlane jako "01", a nie jako "1"

  var s = today.getSeconds(); // Pobranie sekund
  if (s < 10) s = "0" + s; // Sekundy mniejsze od 10 będą wyświetlane jako "01", a nie jako "1"

  var d = today.getDay(); // Pobranie dnia
  var status = "OTWARTY"; // Ustawienie statusu sklepu na otwarty

  if (d >= 1) // Sprawdzenie czy jest to dzień tygodnia od Poniedziałku do Piątku
  {
    if (h >= 8 && h < 17) // Godzina 8-17
    {
      status = status; // Pozostawienie statusu sklepu na otwarty
    } else {
      status = "ZAMKNIĘTY"; // Jeśli inna godzina to sklep jest zamknięty
    }
  } else if (d == 6) // Sprawdzenie czy dziś jest Sobota
  {
    if (h >= 9 && h < 14) // Godzina 9-14
    {
      status = status; // Pozostawienie statusu sklepu na otwarty
    } else {
      status = "ZAMKNIĘTY"; // Jeśli inna godzina to sklep jest zamknięty
    }
  } else {
    status = "ZAMKNIĘTY"; // Jeśli jest Niedziela to sklep jest zamknięty
  }

  switch (d) // Przypisanie numeru dnia do nazwy
  {
    case 0:
      d = "Niedziela";
      break;
    case 1:
      d = "Poniedziałek";
      break;
    case 2:
      d = "Wtorek";
      break;
    case 3:
      d = "Środa";
      break;
    case 4:
      d = "Czwartek";
      break;
    case 5:
      d = "Piątek";
      break;
    case 6:
      d = "Sobota";
      break;
    default:
      d = "Null";
      break;
  }
 // Wyświetlenie zegara

    if(status == "OTWARTY") // Jeśli sklep jest otwarty to napis wyświetli się na zielono, a jeśli sklep jest zmaknięty to napis będzie czerwony
    {
      document.getElementById("date").innerHTML = "Dzisiaj jest: " + d + "<br />Sklep jest: " + status.fontcolor("#00ff00"); // Wyświetlenie dnia tygodnia + statusu sklepu
    }
    else
    {
      document.getElementById("date").innerHTML = "Dzisiaj jest: " + d + "<br />Sklep jest: " + status.fontcolor("#ff0000");; // Wyświetlenie dnia tygodnia + statusu sklepu
    }

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

  setTimeout("clockCount()", 1000); // Opóźnienie odliczania o 1 sekundę
}
