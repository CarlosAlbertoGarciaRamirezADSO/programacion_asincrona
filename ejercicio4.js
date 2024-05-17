// 4.Crear una función filter que acepte un array y un callback y que:

// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro"



let arreglo = [5, 10, 5, 15, 20, 5]

function callback(x) {
  if (x === 5) {
    return true;
  }
}
console.log(`arreglo original ${arreglo}`);
console.table(arreglo.filter(callback))
