/* DUDAS 
!1) ver como llamar a una funcion dentro de un evento

!2) EN EL CODIGO DE ABAJO NO ANDA EL RETURN PERO SI EL CONSOLE.LOG

var palabras = ["hola","chau","perro","gato","devs","oracle"];
let palabraRamdon = palabras[Math.round(Math.random()*(palabras.length-1))]
    return palabraRamdon
    console.log(palabraRamdon)

!3)

*/

const letraIngresada = document.getElementById('input-nueva-palabra');



// SELECCIONAR PALABRA
var palabras = ["hola","chau","perro","gato","devs","oracle"];
const btnIniciarJuego = document.getElementById('iniciar-juego');

btnIniciarJuego.addEventListener('click', () =>{
    let palabraRamdon = palabras[Math.round(Math.random()*(palabras.length-1))]
    console.log(palabraRamdon)  
})

// AGREGAR PALABRA
const btnAgregarPalabra = document.getElementById('nueva-palabra');

btnAgregarPalabra.addEventListener('click',(event)=>{
    event.preventDefault();
    palabras.push(letraIngresada.value)
    
})

// CREAR LI SEGUN PALABRA




