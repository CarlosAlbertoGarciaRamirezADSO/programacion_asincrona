// 7. Crear una función find que acepte un array y un callback y que:

// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined




let arreglo = [1,2,3,5,4,6,19,50];

let recorrer = num => num >=15; 

let resultado = arreglo.find(recorrer) //devuelve el primer elemento de la matriz proporcionada

console.log(resultado)
