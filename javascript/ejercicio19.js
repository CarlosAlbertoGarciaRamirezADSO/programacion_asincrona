// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

const filtro = x => x.nombre === "julian"
let llamar = async () => {
  let peticion = await fetch("../json/ejercicio19.json")
  let datos = await peticion.json();
  console.log(datos.filter(filtro))
};
llamar()