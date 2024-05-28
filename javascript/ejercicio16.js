// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo
// y devuelva un número diferente.Luego, encadena las tres Promises para sumar los resultados
//y mostrar el resultado final.


let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
})
  .then((respuesta) => {
    return new Promise((resolve, reject) => {
      resolve(respuesta * 2)
      console.log(respuesta)
    })
  })
  .then((respuesta2) => {
    return new Promise((resolve, reject) => {
      resolve(respuesta2 * 2)
      console.log(respuesta2)
    })
  })
  .then((respuesta3) => {
    return new Promise((resolve, reject) => {
      resolve(respuesta3 * 2)
      console.log(respuesta3)
    })
  })

