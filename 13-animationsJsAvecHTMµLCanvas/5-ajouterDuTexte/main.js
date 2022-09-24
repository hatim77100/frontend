const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "50px serif";
// ctx.strokeText("Hello", 10, 50); // 10=>Axe X (distance entre le debut du canvas et la première lettre)
                                 // 50=>Axe Y (distance entre la base de la première lettre et le côté haut du canvas);
ctx.fillStyle = "green";
ctx.fillText("Hello World", 10, 50);
