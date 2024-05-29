// 25. Usar un proxy para la validación de los valores de propiedades

// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
//  números

// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras

// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos

// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas

// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola


let espacios = /\s/
let numeros = /[0-9]/
let email = /[a-zA-Z][0-9]{0,}\@gmail.com/
let dato = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/

let persona = {
  nombre: "carlos",
  edad: 18,
  correo: "carlos23@gmail.com",
  nacimiento: "20/10/2024"
}



let proxy = new Proxy(persona, {
  set(target, prop, value) {
    if (espacios.test(value) === true) {

      if (prop === 'nombre' && typeof value != 'string') {
        throw new Error('Solo caracteres alfanumericos');
      }
      if (prop === 'edad' && typeof value != 'number' && numeros.test(value) === true) {
        throw new Error('Solo numeros');
      }

      if (prop === 'correo' && email.test(value) === false) {
        throw new Error('No se acepta el correo');
      }

      if (prop === 'nacimiento' && dato.test(value) === false) {
        throw new Error('No acepta esa fecha');
      }
    }
  }
})


proxy.nombre = "carlos3"
proxy.edad = 23
proxy.correo = "carlos23@gmail.com"
proxy.nacimiento = 20 / 12 / 2024