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
    ctx.translate(50,50);
    ctx.fillRect(0,0,100,150);
    ctx.fillRect(100,150,100,150);
    // on'utulise le setTransform réinitialiser
    ctx.setTransform(1,0,0,1,0,0); // 1:l'échelle horizontal revient à 1| 0,0: sur les déformations | 1:échelle vértical | 0:deplacement horizontal |0:deplacement vertical
    ctx.fillRect(0,0,100,150); 
}


