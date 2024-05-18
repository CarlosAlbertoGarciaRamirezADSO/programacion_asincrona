// 4.Crear una función filter que acepte un array y un callback y que:

// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro"



let arreglo = [5, 10, 5, 15, 20, 5]// creamos un arreglo

function callback(x) { //creamos una funcion que va a recibir como parametro el arreglo
  if (x === 5) { // si un elemento de el arreglo es igual a 5 
    return true; // retorna true
  }
}
console.log(`arreglo original ${arreglo}`);//hacemos una interpolacion y mostramos el arreglo original
console.table(arreglo.filter(callback))//con el filter ingresamos al arreglo y como parametro le pasamos el callback
