let stars = Number(prompt("Choose stars value"));

switch (stars) {
  case 1:
    console.log("20$");
    break;
  case 2:
    console.log("30$");
    break;
  case 3:
    console.log("50$");
    break;
  case 4:
    console.log("70$");
    break;
  case 5:
    console.log("120$");
    break;
  default:
    console.log('Такої кількості зірок немає');
    break;
}
