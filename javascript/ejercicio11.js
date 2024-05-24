// 11. ¿Cuál es el resultado del código a continuación? 


let i = 0;


setTimeout(()=> alert(i),2000)

for (let j = 0; j < 10000; j++) {
    i++;  
}

//el resultado que va a mostrar al final va a hacer 10.000, el bucle recorre y le agrega a i
// y el setTimeout mostrara despues de 2 segundos, la cantidad de i que en este caso seria 10.000