// 13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise 
//         resuelta" cuando se cumpla. 


function segundos(seg) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(seg ===3000){
                resolve("RESUELTA")
            }else{
                reject("NO SE RESOLVIO")
            }
        }, seg);
    })
}

segundos(3000)
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((error)=>{
        console.log(error);
    })