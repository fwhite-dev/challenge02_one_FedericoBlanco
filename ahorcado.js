/* DUDAS 
!1) ver como llamar a una funcion dentro de un evento

!2) EN EL CODIGO DE ABAJO NO ANDA EL RETURN PERO SI EL CONSOLE.LOG

var palabras = ["hola","chau","perro","gato","devs","oracle"];
let palabraRamdon = palabras[Math.round(Math.random()*(palabras.length-1))]
return palabraRamdon
console.log(palabraRamdon)

!3) PORQUE EN EL CODIGO NO LLAMA A LA FUNCION palabraArray MIENTRAS Q SI LA LLAMO EN CONSOLA SI FUNCIONA. TENGO QUE CREAR LA FUNCION DENTRO DEL EVENTO PARA LLAMARLA ??

!4) RETURN FUNCIONA EN ENVENTOS
*/

// AGREGAR PALABRA
let palabras = ["hola","chau","perro","gato"];
const letraIngresada = document.getElementById('input-nueva-palabra');

const btnAgregarPalabra = document.getElementById('nueva-palabra');

btnAgregarPalabra.addEventListener('click',(event)=>{
    event.preventDefault();
    palabras.push(letraIngresada.value)
    console.log(palabras)
    
})


// SELECCIONAR PALABRA

const btnInciarJuego = document.getElementById('iniciar-juego')
// !FUNCION PARA LLAMAR EN EL ENVENTO DEL btnInciarJuego. NO PUEDO LLAMARLA DESDE EL EVENTO
// let elegirPalabraRandom = () => {
//     return palabras[Math.round(Math.random()*(palabras.length-1))]
// }

btnInciarJuego.addEventListener("click", ()=>{
    console.log("incia el juego")
    let palabraElegida = palabras[Math.round(Math.random()*(palabras.length-1))]
    console.log(palabraElegida)


    // DIVIDIR PALABRA EN SILABAS
    
    let arraySilabas = palabraElegida.split("")
    console.log(arraySilabas)
    
    
    // CREAR LI SEGUN palabrArray
    
    for (let i of arraySilabas){
    const letra = document.createElement("li")
    letra.textContent=i
    espaciosSilabas.appendChild(letra)
    }

    parentElement
    // BORRAR CHILD
    // window.removeChild(espaciosSilabas)



})









