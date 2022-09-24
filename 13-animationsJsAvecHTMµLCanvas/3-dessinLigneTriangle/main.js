const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(100,75);
ctx.lineTo(100,25);
ctx.closePath(); // permet de fermer le chemein
// ctx.lineTo(75,50);
ctx.stroke(); // permet de dessiner les lignes
// ctx.fill();