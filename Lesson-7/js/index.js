document.getElementById("checkBrowser").addEventListener("click", function () {
  const browser = document.getElementById("browser").value;
  const p = document.getElementById("message");

  switch (Number(browser)) {
    case 0:
      p.textContent = "0";
      break;
    case 1:
      p.textContent = "1";
      break;
    case 2:
    case 3:
      p.textContent = "2,3";
      break;
    default:
      p.textContent = "Невідоме значення";
      break;
  }
});
