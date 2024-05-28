// 15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir 
// "Error: Promise rechazada". 


function promesa() {
    return new Promise((reject)=>{
        setTimeout(() => {
            reject(new Error("Promesa rechazada"))
        }, 2000);
    })
}

console.log(promesa().then((repuestas)=>{console.log(repuestas);}));

