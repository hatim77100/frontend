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
    ctx.font = "50px serif";
    ctx.fillStyle = "green";
    ctx.fillText("Hello World", 10, 50);
}
