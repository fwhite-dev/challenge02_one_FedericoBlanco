
const letraIngresada = document.getElementById('input-nueva-palabra');

var palabras = ["hola","chau","perro","gato","devs","oracle"];

const btnIniciarJuego = document.getElementById('iniciar-juego');

// AGREGAR PALABRA
const btnNuevaPalabra = document.getElementById('nueva-palabra');

btnNuevaPalabra.addEventListener('click',(event)=>{
    event.preventDefault();
    return palabras.push(letraIngresada.value)
})

// SELECCIONAR PALABRA

const selcionarPalabra = () =>{
    let palabraRamdon = palabras[Math.round(Math.random()*(palabras.length-1))]
    return palabraRamdon
} 

btnIniciarJuego.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log('anda el evento')
    selcionarPalabra()

})



// const letra = document.createElement("li")


