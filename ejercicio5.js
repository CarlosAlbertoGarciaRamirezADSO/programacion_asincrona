// 5. Crear una función every que acepte un array y un callback y que:

// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

function callback(x) { // creamos una funcion que recibe como parametro a x(este caso el arreglo)
  return x > 0; //preguntamos si x es mayor que 0
}

arreglo = [1, 2, 3, 4, 5,5] //creamos un arreglo

console.table(arreglo.every(callback))/*con el every miramos si la pregunta que hicimos en la funcion
callback es true, todas tienen que cumplir para que de true, si no de resto da false */