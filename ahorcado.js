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

// ARRAY INICIAL
let palabras = ["hola","chau","perro","gato"];

// REFERECNIA INPUT
const letraIngresada = document.getElementById('input-nueva-palabra');

// REFERENCIA BOTON INCIAR
const btnAgregarPalabra = document.getElementById('nueva-palabra');

btnAgregarPalabra.addEventListener('click',(event)=>{
    event.preventDefault();
    // !no funciona el if para validar string vacio
    if (letraIngresada==" "){
        return;
    } else {
        palabras.push(letraIngresada.value)
        console.log(palabras)
        
    }
})


//* SELECCIONAR PALABRA

const btnInciarJuego = document.getElementById('iniciar-juego')
// !FUNCION PARA LLAMAR EN EL ENVENTO DEL btnInciarJuego. NO PUEDO LLAMARLA DESDE EL EVENTO
// let elegirPalabraRandom = () => {
//     return palabras[Math.round(Math.random()*(palabras.length-1))]
// }

//* PALABRA ELEGIDA
let palabraElegida = palabras[Math.round(Math.random()*(palabras.length-1))]
console.log(palabraElegida)

btnInciarJuego.addEventListener("click", ()=>{
    console.log("incia el juego")


    //* CREAR UN ARRAY CON LAS SILABAS
    
    let arraySilabas = palabraElegida.split("")
    console.log(arraySilabas)
    
    
    //* CREAR LI SEGUN palabrArray
    
    for (let i of arraySilabas){
    const letra = document.createElement("span")
    letra.textContent=i
    espaciosSilabas.appendChild(letra)
}
    //!falta eliminar los li creados o replazarlos por li nvos
    // espaciosSilabas.removeChild(letra)
    // parentElement
    // BORRAR CHILD



})

//* VALIDAR COINCIDENCIA DE LETRAS 

letraIngresada.addEventListener("keypress", (event) => {
    if (palabraElegida != palabraElegida.replace(/event.key/g,1)){
        console.log("acerto")
    }






    //? for (let i in palabraElegida)
    //? if (event.key == document.querySelector("ul").children[i].textContent) {
    //? console.log("acerto")
    //? } else {
        
    //? console.log("NO acerto")

    // const canvas = document.querySelector('canvas');
    // const pincel = canvas.getContext('2d');

    // pincel.fillStyle = "red"
    // pincel.fillRect(0, 0, canvas.width, canvas.height)


    // pincel.fillStyle = "green"
    // pincel.fillRect(200,750,15,-600)
    // pincel.fillRect(200,150,0,15)


    
    
})









