const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src ='https://source.unsplash.com/random';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function(){
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     initialisation();
   
})
var x = 200;
var v = 5;
function initialisation() {
    requestAnimationFrame(initialisation);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    ctx.beginPath();
    ctx.arc(x,200,60,0,Math.PI * 2);
    ctx.strokeStyle = "crimson";
    ctx.stroke();
    if(x + 60 > innerWidth || x - 60 < 0) {
        v = -v;
    }
    x += v;
}
initialisation();


