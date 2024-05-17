// 5. Crear una función every que acepte un array y un callback y que:

// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

function callback(x) {
  return x > 0;
}

arreglo = [1, 2, 3, 4, 5,5]

console.table(arreglo.every(callback))