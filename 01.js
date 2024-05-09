//CON GLI IF

let v = 25;
if (v >= 0 && v < 18) {
  console.log("insufficiente");
} else if (v >= 18 && v < 21) {
  console.log("sufficiente");
} else if (v >= 21 && v < 27) {
  console.log("distinto");
} else if (v >= 27 && v <= 29) {
  console.log("ottimo");
} else if (v == 30) {
  console.log("eccellente");
} else {
  console.log("input non valido");
}

// //CON GLI SWITCH
let v1 = 28;
switch (true) {
  case (v1 >= 0 && v1 < 18):
    console.log("insufficiente");
    break;

  case (v1 >= 18 && v1 < 21):
    console.log("sufficiente");
    break;

  case (v1 >= 21 && v1 < 27):
    console.log("distinto");
    break;

  case (v1 >= 27 && v1 <= 29):
    console.log("ottimo");
    break;

  case 30:
    console.log("eccellente");
    break;

  default:
    console.log("Input non valido");
    break;
}
