const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(75,75,50,0, 2*Math.PI);
ctx.moveTo(75,75);
ctx.lineTo(125,75);
// ctx.stroke();
ctx.fillStyle = "red";
ctx.fill()