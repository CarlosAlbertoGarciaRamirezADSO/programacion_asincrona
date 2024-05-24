// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true



arreglo = [5, 3, 8, 7, 9];// creamos un arreglo

function callback(x) { // creamos una function que recibe como parametro el arreglo
  if (x % 2===0) { //si un elemento de el arreglo es divisible por 0
    return true //return true
  }
  return false // de otra forma return false
}

console.log(arreglo.some(callback)) //el some devuelve true si una de las llamadas devuelve true