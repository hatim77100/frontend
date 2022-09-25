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
     ctx.drawImage(img, 50, 50);
})

function initialisation() {
  img.addEventListener('load', function() {
    ctx.drawImage(img, 50, 50);
  })
}
initialisation();


