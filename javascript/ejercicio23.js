// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.


async function llamado() {
  let peticion = await fetch("../json/ejercicio23.json")
  let datos = await peticion.json();
  try {
    let filtro = datos.filter(x => x.nombre.includes("c"))
    console.log(filtro);
  } catch (error) {
    console.log("ERROR" + error);
  }
}
llamado();
