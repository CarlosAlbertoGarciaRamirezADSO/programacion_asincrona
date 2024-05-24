// 10. Crear una función takeWhile que acepte un array y un callback y que: 
//         • por cada elemento del array ejecute el callback pasándole dicho elemento como 
//         argumento 
//         • devuelva un array con los elementos hasta el primer callback que devolvió false 
//         • (Inverso del dropWhile)



let arreglo = [11,2,3,4,5,20,25,3,51,25,10]


function cal(x) {
    return _.takeWhile(x, (numero) =>{
        return numero >10
    }); 
}

let resultado = cal(arreglo)

console.log(resultado)