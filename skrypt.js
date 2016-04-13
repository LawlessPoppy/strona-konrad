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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Opcl() // Funkcja wyświetlająca za ile sklep będzie zamknięty otwarty
{

  var hdz; // godzin do zamknięcia
  var mdz; // minut do zamknięcia
  var sdz; // sekund do zamknięcia

  var hdo; // godzin do otwarcia
  var mdo; // minut do  otwarcia
  var sdo; // sekund do otwarcia


  var today = new Date(); // Inicjacja obecnej daty do zmiennej "today"

  var h = today.getHours(); // Pobranie godzin


  var m = today.getMinutes(); // Pobranie minut


  var s = today.getSeconds(); // Pobranie sekund


  var d = today.getDay(); // Pobranie dnia

  if (d > 0) // Czy dzień to Poniedziałek do Czwartek
  {
    if (h >= 8 && h < 17) // Kiedy będzie zamknięty
    {
      hdz = 17 - h;
      mdz = 60 - m;
      sdz = 60 - s;

      if (s > 0)
      {
          mdz = mdz - 1;
      }

      if (m > 0)
      {
        hdz = hdz - 1;
      }

      if (hdz < 10) hdz = "0" + hdz;
      if (mdz < 10) mdz = "0" + mdz;
      if (sdz < 10) sdz = "0" + sdz;
      if (mdz == 60) mdz = "00";
      if (sdz == 60) sdz = "00";

      document.getElementById("opcl").innerHTML = "Czas do zamknięcia sklepu:<br />" + hdz + ":" + mdz + ":" + sdz;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę

    }

    else // Kiedy będzie otwarty
    {
      if(h < 8)
      {
        hdo = 8 - h;
        mdo = 60 - m;
        sdo = 60 - s;

        if (s > 0)
        {
          mdo = mdo - 1;
        }

        if (m > 0)
        {
          hdo = hdo - 1;
        }

        if (hdo < 10) hdo = "0" + hdo;
        if (mdo < 10) mdo = "0" + mdo;
        if (sdo < 10) sdo = "0" + sdo;
        if (mdo == 60) mdo = "00";
        if (sdo == 60) sdo = "00";

        document.getElementById("opcl").innerHTML = "Czas do otwarcia sklepu:<br />" + hdo + ":" + mdo + ":" + sdo;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę
      }

      else if (h >= 17)
      {
        hdo = 32 - h;
        mdo = 60 - m;
        sdo = 60 - s;

        if (s > 0)
        {
          mdo = mdo - 1;
        }

        if (m > 0)
        {
          hdo = hdo - 1;
        }

        if (hdo < 10) hdo = "0" + hdo;
        if (mdo < 10) mdo = "0" + mdo;
        if (sdo < 10) sdo = "0" + sdo;
        if (mdo == 60) mdo = "00";
        if (sdo == 60) sdo = "00";

        document.getElementById("opcl").innerHTML = "Czas do otwarcia sklepu:<br />" + hdo + ":" + mdo + ":" + sdo;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę
      }
    }

  }

  else if (d == 5) // Czy dzień to Piątek
  {
    if (h >= 8 && h < 17) // Kiedy będzie zamknięty
    {
      hdz = 17 - h;
      mdz = 60 - m;
      sdz = 60 - s;

      if (s > 0)
      {
        mdz = mdz - 1;
      }

      if (m > 0)
      {
        hdz = hdz - 1;
      }

      if (hdz < 10) hdz = "0" + hdz;
      if (mdz < 10) mdz = "0" + mdz;
      if (sdz < 10) sdz = "0" + sdz;
      if (mdz == 60) mdz = "00";
      if (sdz == 60) sdz = "00";

      document.getElementById("opcl").innerHTML = "Czas do zamknięcia sklepu:<br />" + hdz + ":" + mdz + ":" + sdz;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę

    }

    else // Kiedy będzie otwarty
    {
      if(h < 8)
      {
        hdo = 8 - h;
        mdo = 60 - m;
        sdo = 60 - s;

        if (s > 0)
        {
          mdo = mdo - 1;
        }

        if (m > 0)
        {
          hdo = hdo - 1;
        }

        if (hdo < 10) hdo = "0" + hdo;
        if (mdo < 10) mdo = "0" + mdo;
        if (sdo < 10) sdo = "0" + sdo;
        if (mdo == 60) mdo = "00";
        if (sdo == 60) sdo = "00";

        document.getElementById("opcl").innerHTML = "Czas do otwarcia sklepu:<br />" + hdo + ":" + mdo + ":" + sdo;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę
      }

      else if (h >= 17)
      {
        hdo = 33 - h;
        mdo = 60 - m;
        sdo = 60 - s;

        if (s > 0)
        {
          mdo = mdo - 1;
        }

        if (m > 0)
        {
          hdo = hdo - 1;
        }

        if (hdo < 10) hdo = "0" + hdo;
        if (mdo < 10) mdo = "0" + mdo;
        if (sdo < 10) sdo = "0" + sdo;
        if (mdo == 60) mdo = "00";
        if (sdo == 60) sdo = "00";

        document.getElementById("opcl").innerHTML = "Czas do otwarcia sklepu:<br />" + hdo + ":" + mdo + ":" + sdo;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę
      }
    }

  }
  else if (d == 6) // Czy dzień to Sobota
  {

    if (h >= 9 && h < 14) // Kiedy będzie zamknięty
    {
      hdz = 14 - h;
      mdz = 60 - m;
      sdz = 60 - s;

      if (s > 0)
      {
        mdz = mdz - 1;
      }

      if (m > 0)
      {
        hdz = hdz - 1;
      }

      if (hdz < 10) hdz = "0" + hdz;
      if (mdz < 10) mdz = "0" + mdz;
      if (sdz < 10) sdz = "0" + sdz;
      if (mdz == 60) mdz = "00";
      if (sdz == 60) sdz = "00";

      document.getElementById("opcl").innerHTML = "Czas do zamknięcia sklepu:<br />" + hdz + ":" + mdz + ":" + sdz;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę

    }

    else // Kiedy będzie otwarty
    {
      if(h < 9)
      {
        hdo = 9 - h;
        mdo = 60 - m;
        sdo = 60 - s;

        if (s > 0)
        {
          mdo = mdo - 1;
        }

        if (m > 0)
        {
          hdo = hdo - 1;
        }

        if (hdo < 10) hdo = "0" + hdo;
        if (mdo < 10) mdo = "0" + mdo;
        if (sdo < 10) sdo = "0" + sdo;
        if (mdo == 60) mdo = "00";
        if (sdo == 60) sdo = "00";

        document.getElementById("opcl").innerHTML = "Czas do otwarcia sklepu:<br />" + hdo + ":" + mdo + ":" + sdo;

        setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę
    }

    else if (h >= 14)
    {
      hdo = 32 + (24 - h);
      mdo = 60 - m;
      sdo = 60 - s;

      if (s > 0)
      {
        mdo = mdo - 1;
      }

      if (m > 0)
      {
        hdo = hdo - 1;
      }

      if (hdo < 10) hdo = "0" + hdo;
      if (mdo < 10) mdo = "0" + mdo;
      if (sdo < 10) sdo = "0" + sdo;
      if (mdo == 60) mdo = "00";
      if (sdo == 60) sdo = "00";

      document.getElementById("opcl").innerHTML = "Czas do otwarcia sklepu:<br />" + hdo + ":" + mdo + ":" + sdo;

      setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę
    }

  }
}

  else if (d == 0) // Czy dzień to Niedziela, Cały dzień jest zamknięty
  {
    hdo = 32 - h;
    mdo = 60 - m;
    sdo = 60 - s;

    if (s > 0)
    {
      mdo = mdo - 1;
    }

    if (m > 0)
    {
      hdo = hdo - 1;
    }

    if (hdo < 10) hdo = "0" + hdo;
    if (mdo < 10) mdo = "0" + mdo;
    if (sdo < 10) sdo = "0" + sdo;
    if (mdo == 60) mdo = "00";
    if (sdo == 60) sdo = "00";

    document.getElementById("opcl").innerHTML = "Czas do otwarcia sklepu:<br />" + hdo + ":" + mdo + ":" + sdo;

    setTimeout("Opcl()", 1000); // Opóźnienie odliczania o 1 sekundę

  }

}
function Stopka()
{
  today = new Date();

  var y = today.getYear();

  y = Number(y+1900);

  document.getElementById("footer").innerHTML = "KOWAMET " + y + "&copy";
}
