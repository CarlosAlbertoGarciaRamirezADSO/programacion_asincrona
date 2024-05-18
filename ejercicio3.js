// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.



let arreglo = [5,10,20,30,40,50];// creamos un arreglo

let recorrer = numero => numero * 2; /* creamos una variable recorrer que lo que va a hacer es recibir el 
numero de el arreglo y lo va a multiplicar * 2 */


let resultado = arreglo.map(recorrer)/* una variable que va a almacenar el valor del arreglo que esta recorriendo7
el map y le pasamos como parametro un callback*/

console.table(resultado)// imprimimos el resultado

alert(resultado)