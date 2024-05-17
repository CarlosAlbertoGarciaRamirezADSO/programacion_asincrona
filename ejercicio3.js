// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.



let arreglo = [5,10,20,30,40,50];

let recorrer = numero => numero * 2;


let resultado = arreglo.map(recorrer)

console.table(resultado)

alert(resultado)