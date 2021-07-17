const interactionEvent = function () {
     const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
     return iOS ? 'touchstart' : 'click';
};


var namee = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')
const test = document.getElementById('test')
// var printname = document.getElementById('printname')

// namee.onkeyup = function () {
//      document.getElementById('printname').innerHTML = namee.value;
// }

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// var nameInput = getElementById('nameput')

const img = new Image()
img.src = 'main-img.png'
img.onload = function () {
     drawImage()
}

function drawImage() {
     ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
     ctx.font = '35px ammar'
     ctx.fillStyle = '#0b2a4a'
     ctx.class = 'test'
     ctx.fillText(namee.value, 240, 505)
}

function updateText() {
     const name = namee.value
     drawImage()
}


downloadBtn.addEventListener('click', function () {
     downloadBtn.href = canvas.toDataURL()
     downloadBtn.download = " تهنئة عيد " + namee.value
})