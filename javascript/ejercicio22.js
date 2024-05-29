// 22. Crea un bucle que realice llamadas asincrónicas utilizando async / await para procesar una
// lista de elementos uno por uno.


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


async function llamados(numero) {
  let valor = await numero * 2
  console.log(`El resultado es: ${valor}`)
}

lista.map((e) => {
  console.log(e)
  llamados(e)
})



