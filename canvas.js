// // REFERENCIA CANVAS 1200x800

const canvas = document.querySelector('canvas');
const pincel = canvas.getContext('2d');

pincel.fillStyle = "#3D3B30"
pincel.fillRect(0, 0, canvas.width, canvas.height)

pincel.fillStyle = "#E7E247"
pincel.beginPath()
pincel.moveTo(150,750)
pincel.lineTo(50,800)
pincel.lineTo(250,800)
pincel.fill()


pincel.fillStyle = "#E7E247"
pincel.fillRect(150,750,5,-600)
pincel.fillRect(150,150,200,-5)
pincel.fillRect(350,150,5,60)
