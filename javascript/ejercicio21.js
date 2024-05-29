// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen.Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let valor1 = "Primera promesa RECHAZADA"
    console.error(valor1)
    reject(valor1)
  }, 1000);
})

let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let valor2 = "Segunda promesa"
    console.log(valor2)
    resolve(valor2)
  }, 2000);
})

let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let valor3 = "Tercera promesa RECHAZADA"
    console.error(valor3)
    reject(valor3)
  }, 3000);
})


Promise.allSettled([promesa1, promesa2, promesa3])
  .then((resultados) => { console.log(resultados) })
