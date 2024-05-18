// 9. Crear una función dropWhile que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • devuelva un array con los elementos a partir del primer callback que devolvió false 
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el 
// callback de true, no los agrega, cuando el callback da false por primera vez agrega 
// todos los elementos restantes a partir de dicho elemento inclusive) 



let arreglo = [1,5,6,2,4,9]

function drop(x) {
    return _.dropWhile(x, (numero) =>{/*mientras el dropwhile de true sigue recorriendo el arreglo
    pero si el dropwhile da false, se va a cortar y va a imprimir de ese elemnto en adelante*/
        return numero <= 5;
    })
}

let resultado = drop(arreglo)


console.log(resultado);