/* DUDAS 
!1) ver como llamar a una funcion dentro de un evento

!2) EN EL CODIGO DE ABAJO NO ANDA EL RETURN PERO SI EL CONSOLE.LOG

var palabras = ["hola","chau","perro","gato","devs","oracle"];
let palabraRamdon = palabras[Math.round(Math.random()*(palabras.length-1))]
    return palabraRamdon
    console.log(palabraRamdon)

!3) PORQUE EN EL CODIGO NO LLAMA A LA FUNCION palabraArray MIENTRAS Q SI LA LLAMO EN CONSOLA SI FUNCIONA

*/

const letraIngresada = document.getElementById('input-nueva-palabra');



// SELECCIONAR PALABRA
let palabras = ["hola","chau","perro","gato"];

let elegirPalabraRandom = () => {
    return palabras[Math.round(Math.random()*(palabras.length-1))]
}

// DIVIDIR PALABRA EN SILABAS

let palabraArray = () =>{
    let arraySilabas = elegirPalabraRandom().split("")
    return arraySilabas
}

// CREAR LI SEGUN palabrArray

for (let i of palabraArray()){
const letra = document.createElement("li")
letra.textContent=i
espaciosSilabas.appendChild(letra)
}

// AGREGAR PALABRA
const btnAgregarPalabra = document.getElementById('nueva-palabra');

btnAgregarPalabra.addEventListener('click',(event)=>{
    event.preventDefault();
    palabras.push(letraIngresada.value)
    
})






