
const letraIngresada = document.getElementById('input-nueva-palabra');

let palabras = ["hola","chau","perro","gato","devs","oracle"];

const btnIniciarJuego = document.getElementById('iniciar-juego');

const btnNuevaPalabra = document.getElementById('nueva-palabra');

btnNuevaPalabra.addEventListener('click',(event)=>{
    event.preventDefault();
    palabras.push(letraIngresada.value)
    localStorage.setItem('nueva-array',palabras)

    // console.log(palabras)

})

let aa = localStorage.getItem('nueva-array');

console.log(aa)


btnIniciarJuego.addEventListener('click', () =>{
    
    let selcionarPalabra = palabras[Math.floor(Math.random()*6)]

    console.log(selcionarPalabra)






    console.log(letraIngresada);


const letra = document.createElement("li")
letra.textContent="8"
document.getElementById("palabra")

palabra.appendChild(letra)

// palabra.appendChild(letra)


})



// const letra = document.createElement("li")


