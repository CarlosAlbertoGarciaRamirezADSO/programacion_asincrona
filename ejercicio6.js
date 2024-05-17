// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true



arreglo = [5, 3, 8, 7, 9];


function callback(x) {
  if (x % 2===0) {
    return true
  }
  return false
}

console.log(arreglo.some(callback))