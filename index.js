//ejercicio uno Mía Pioli

let gmail = prompt("Registre su gmail");
let gmailtrue = "miapioli@gmail.com";
console.log(gmail);
for (let i = 0; i < gmail.length; i++) {
  if (gmail === gmailtrue) {
    console.log("Bienvenida miapioli@gmail.com");
    break;
  }
  if (gmail !== "@") {
    console.log("Su gmail no es válido");
    break;
  }
  if (gmail === "@") {
    console.log("Su gmail es incorrecto");
    break;
  }
}
