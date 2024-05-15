// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.




let desde = parseInt(prompt("Ingrese el numero desde donde quiere que empiece"))
let hasta = parseInt(prompt("Ingrese el numero desde donde quiere que termine"))

// let temporizador = function (desde, hasta) {
//   if (desde === hasta) {
//     console.log("LOS NUMEROS SON IGUALES")
//   }
//   else if (desde < hasta) {
//     setInterval(() => {
//       if (desde <= hasta) {
//         console.log(desde++)
//       }
//     }, 1000);
//   }
//   else if (desde > hasta) {
//     setInterval(() => {
//       if (desde >= hasta) {
//         console.log(desde--)
//       }
//     }, 1000);
//   }
// }
// temporizador(desde, hasta);



function imprimirNumeros(desde, hasta) {
  let numero = desde
  setTimeout(function ejecutar() {
    console.log(numero);
    if (numero < hasta) {
      setTimeout(ejecutar, 1000)
    }
    numero++;
  })
}
imprimirNumeros(desde, hasta);