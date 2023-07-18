//ejercicio uno Mía Pioli

let gmail = prompt("Registre su gmail");
let mia = "miapioli@gmail.com";

if (gmail === null) {
  alert("Operación cancelada");
} else {
  for (let i = 0; i < gmail.length; i++) {
    if (gmail[i] === "@") {
      tieneArroba = true;
      break;
    } else gmail[i] !== "@";
    tieneArroba = false;
  }
}
if (tieneArroba) {
  if (tieneArroba == true && mia === gmail) {
    alert("Bienvenida Mía");
  } else if (tieneArroba == true) {
    alert("Su gmail es incorrecto");
  }
} else alert("Esto no es un gmail");
