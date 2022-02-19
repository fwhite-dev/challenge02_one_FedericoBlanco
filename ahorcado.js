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

btnInciarJuego.addEventListener("click", () => {
    console.log("incia el juego")

//* CREAR UN ARRAY CON LAS SILABAS   
    let arraySilabas = palabraElegida.split("")
    // console.log(arraySilabas)
    
//* CREAR SPAN SEGUN palabrArray
    for (i of arraySilabas){
        const letra = document.createElement("span")

        letra.textContent=i
        letra.classList.add(i)
        letra.style.borderBottom = "2px solid #E7E247"
        letra.style.paddingLeft= "8px"
        letra.style.paddingRight= "8px"
        letra.style.fontFamily="Oswald, sans-serif";
        letra.style.fontSize="24px";
        letra.style.color="#3D3B30"
        
        espaciosSilabas.appendChild(letra)
    }

    letraIngresada.addEventListener("keypress", (event) => {

        function checkAvailability(arr, val) {
        return  arr.some((arrVal) => val === arrVal );
        }
        // console.log(arraySilabas)
        // console.log(event.key)
        // console.log(checkAvailability(arraySilabas, event.key))
        
        if(checkAvailability(arraySilabas, event.key)) {
            
            console.log("acerto")

            let pintar = document.querySelector("."+event.key)
            pintar.style.color="#E7E247"
        
            // let arrayDeSpan = document.querySelectorAll("span")
            // console.log(arrayDeSpan)
            // console.log(Array.from(arrayDeSpan))
            // arrayDeSpan.forEach((x)=>console.log(x))



        } else {
            console.log("no acerto")
            // const canvas = document.querySelector('canvas');
            // const pincel = canvas.getContext('2d');
            
            // pincel.fillStyle = "red"
            // pincel.fillRect(0, 0, canvas.width, canvas.height)
            
            
            // pincel.fillStyle = "green"
            // pincel.fillRect(200,750,15,-600)
            // pincel.fillRect(200,150,0,15) 
        }
    })
})


//? for (let i in palabraElegida)
//? if (event.key == document.querySelector("ul").children[i].textContent) {
    //? console.log("acerto")
    //? } else {
        
    //? console.log("NO acerto")











