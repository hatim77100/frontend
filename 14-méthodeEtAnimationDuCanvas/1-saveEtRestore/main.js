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
// save et restore
    ctx.fillRect(0,0,150,150);
    ctx.save();

    ctx.fillStyle = "red";
    ctx.fillRect(15,15,120,120);

    ctx.save();

    ctx.fillStyle = "blue";
    ctx.fillRect(30,30,90,90);

    ctx.restore();
    ctx.fillRect(45,45,60,60)
}


