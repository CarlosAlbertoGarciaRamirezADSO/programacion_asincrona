// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.




let desde = parseInt(prompt("Ingrese el numero desde donde quiere que empiece"))
let hasta = parseInt(prompt("Ingrese el numero desde donde quiere que termine"))

let temporizador = function (desde, hasta) { // se crea una funcion expresada que va a almacenar una funcion que recibe 2 parametros 
  if (desde === hasta) { // hacemos una condicion, por si los numeros que sean ingresados son iguales
    console.log("LOS NUMEROS SON IGUALES") //imprimimos que son iguales
  }
  else if (desde < hasta) { // en esta condicion si desde es menor que hasta 
    setInterval(() => { // se va a ejecutar el interval cada segundo, que este interval tiene una condicion
      if (desde <= hasta) { // si desde es <= hasta 
        console.log(desde++) // va a mostrar desde y le va a incrementar 1
      }
    }, 1000);//se ejecuta cada segundo
  }
  else if (desde > hasta) { //en esta condicion si desde es mayor que hasta 
    setInterval(() => { //se va a ejecutar el interval cada segundo, que este interval tiene una condicion
      if (desde >= hasta) { // si desde siga siendo mayor que hasta 
        console.log(desde--) //se va a mostrar en pantalla y va a decrementar
      }
    }, 1000);//se ejecuta cada segundo
  }
}
temporizador(desde, hasta);// llamamos a la funcion expresada y le pasaremos los 2 parametros





// function imprimirNumeros(desde, hasta) {
//   let numero = desde // creamos una variable y le asignamos el valor de DESDE
//   setTimeout(function ejecutar() { //creamos un timeout y creamos una function que va almacenar una condicion
//     console.log(numero); // imprimimos el numero1
//     if (numero < hasta) { //si el numero sigue siendo menor que hasta 
//       setTimeout(ejecutar, 1000) // se va a activar la function ejecutar que lo que hace es mostrar el numero
//     }
//     numero++; // le añadimos uno mas a numero
//   })
// }
// imprimirNumeros(desde, hasta); //llamamos la function y le pasamos como parametros el DESDE y el hasta