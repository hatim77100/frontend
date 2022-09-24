const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

for (let i = 0; i < 6; i++) {
  for (j = 0; j < 6; j++) {
    ctx.fillStyle = `rgb(${255 - 42.5 * i}, ${255 - 42.5 * j}, ${42.5 * i})`
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
