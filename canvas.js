// // REFERENCIA CANVAS 1200x800

const canvas = document.querySelector('canvas');
const pincel = canvas.getContext('2d');
const body = canvas.getContext("2d");

pincel.fillStyle = "#3D3B30"
pincel.fillRect(0, 0, canvas.width, canvas.height)

// CORDENADAS CURSOR
document.body.addEventListener("mousemove",(event)=>{
    console.log(((event.clientX)-350)+";"+((event.clientY)-300))
})


// BASE
pincel.fillStyle = "#E7E247"
pincel.beginPath()
pincel.moveTo(150,750)
pincel.lineTo(50,800)
pincel.lineTo(250,800)
pincel.fill()

// POSTE
pincel.fillStyle = "#E7E247"
pincel.fillRect(150,750,5,-600)
pincel.fillRect(150,150,200,-5)
pincel.fillRect(350,150,5,60)

// CABEZA

pincel.fillStyle= "#E7E247"
pincel.moveTo(350,90)
pincel.arc(350,220,40,0,2*3.14)
pincel.fill()

// CUELLO

pincel.fillStyle = "#E7E247"
pincel.beginPath()
pincel.moveTo(350,160)
pincel.fillRect(350,260,5,20)





