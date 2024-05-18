// 8. Crear una función findIndex que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • devuelva el índice del elemento pasado como argumento del primer callback que 
// devuelva true 
// • sí ningún callback devuelve true, devuelva undefined 

let arreglo = [0,5,6,2,50]


let devuelva = numero => numero > 10; //preguntamos si el numero de el arreglo es mayor a 10

console.log(arreglo.findIndex(devuelva));/*el findIndex lo que hace es mirar si en el arreglo 
hay un numero mayor a 10, si el numero es mayor lo que hace es mostrar solo ese en que posicion esta
de el arreglo, si no encuntra lo que hace es devolver -1*/

