// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.


let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let valor1 = "Primera promesa"
    console.log(valor1)
    resolve(valor1)
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
    let valor3 = "Tercera promesa"
    console.log(valor3)
    resolve(valor3)
  }, 3000);
})

Promise.all([promesa1, promesa2, promesa3]).then((respuestas) => { console.log(respuestas) })