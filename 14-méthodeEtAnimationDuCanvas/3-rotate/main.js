const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     initialisation();
})

function initialisation() {
    ctx.beginPath();
    ctx.arc(150,150,1,0,2 * Math.PI);
    ctx.stroke();
    ctx.translate(150,150)
    ctx.rotate(300* Math.PI / 180)
   ctx.fillRect(50,50,100,50)
}
initialisation();


