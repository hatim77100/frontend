const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src ='https://source.unsplash.com/random';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function(){
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     dessin();
   
})
var soleil = new Image();
var lune = new Image();
var terre = new Image();

soleil.src = './img/soleil.jpg';
lune.src = './img/lune.gif';
terre.src = './img/terre.jpg';
function dessin() {
    ctx.globaCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,300,300);
    // dessin de l'orbite de la terre;
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,153,255,.4)'
    ctx.arc(150,150,105,0,Math.PI * 2);
    ctx.stroke();
    //garder le translate par defaut:
    ctx.save();
    ctx.translate(150,150);

    var time = new Date();
    ctx.rotate(((2 * Math.PI/60) * time.getSeconds()));
    // mettre la terre sur orbite
    ctx.translate(105,0);
    ctx.drawImage(terre,-12,-12)
}
dessin();


