const canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

// ctx.strokeRect(50,50,100,50);
// ctx.fillStyle = 'brown';
// ctx.fillRect(30,30,100,50);
// ctx.clearRect(0,0,302,152);

ctx.beginPath();
ctx.lineWidth ="28";
ctx.strokeStyle = "green";
ctx.rect(50,50,100,50);
ctx.stroke();
ctx.fill();


