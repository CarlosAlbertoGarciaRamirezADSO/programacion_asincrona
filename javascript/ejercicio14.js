// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que 
// diga "Operación completada". Utiliza async/await. 


async function esperar(){
    return await new Promise((resolve)=>{
        setTimeout(() => {
            resolve("se resolvio")
        }, 1000);
    })
}


console.log(esperar()
    .then((resultado)=>{
        console.log(resultado);
    }));