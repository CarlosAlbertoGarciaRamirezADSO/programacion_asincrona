// 17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.


let llamada = async () => {
  let peticion = await fetch("../json/ejercicio17.json")
  let datos = await peticion.json()
  console.log(datos)

}
llamada()