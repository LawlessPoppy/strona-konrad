function clockCount()
{
  var today = new Date();

  var h = today.getHours();
  if (h < 10) h = "0" + h;
  var m = today.getMinutes();
  if (m < 10) m = "0" + m;
  var s = today.getSeconds();
  if (s < 10) s = "0" + s;

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

  setTimeout("clockCount()", 1000);
}
