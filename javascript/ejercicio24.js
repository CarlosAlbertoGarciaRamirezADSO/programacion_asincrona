// 24. Crear un objeto proxy usando la clase Proxy

let persona = {
  nombre: "carlos",
  edad: 18,
  aprendiz: true,
  correo: "carlosgarciaramirez2310@gmail.com"
}


let proxy = new Proxy(persona, {
  get(target, prop) {
    console.log(`la propiedad es ${prop}`)
    return target[prop]
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  }
})

proxy.nombre = "kevin"
console.log(proxy.nombre)
console.log(persona.edad)