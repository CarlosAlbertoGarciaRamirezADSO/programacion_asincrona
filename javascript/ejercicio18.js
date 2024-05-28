// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios(por ejemplo,
//   mostrar solo los nombres que comiencen con "A").

const filtrar = x => x.nombre.startsWith("A")

function llamar() {
  fetch("../json/ejercicio18.json")
    .then((respuesta) => { return respuesta.json() })
    .then((datos) => {
      let filtro = datos.filter(filtrar)
      console.log(filtro)
    })

}

llamar()