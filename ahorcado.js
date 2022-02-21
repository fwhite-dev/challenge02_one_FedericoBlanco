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


//*---------------------------------------------------------------EVENTO AGREGAR PALABRA------------------
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
let elegirPalabraRandom = () => {
    return palabras[Math.round(Math.random()*(palabras.length-1))]
}
let palabraElegida = elegirPalabraRandom()

const btnInciarJuego = document.getElementById('iniciar-juego')




//*---------------------------------------------------------------EVENTO INICAR EL JUEGO------------------------------------------
btnInciarJuego.addEventListener("click", (event) => {
    
//* CREAR UN ARRAY CON LAS SILABAS   
    let arraySilabas = palabraElegida.split("")
    console.log(arraySilabas)
    
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
            if(checkAvailability(arraySilabas, event.key)) {
                    let pintar = document.querySelectorAll("."+event.key)
                    pintar.forEach((x,index) => pintar[index].style.color="#E7E247")
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




/* 
-MENSAJE DE GANO EL JUEGO 
-RESETEAR LA PALABRA CUANDO SE DA CLICK EN EL BOTON INICIAL
-DIBUJO INCIAL DEL CANVAS
-DIBUJO CUANDO ERRA UNA LETRA



*/

