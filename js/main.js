var my_canvas = document.createElement("canvas");
my_canvas.width = 500;
my_canvas.height = 500;
document.body.appendChild(my_canvas);
var ctx = my_canvas.getContext('2d');

var x = my_canvas.width/2;
var y = my_canvas.height/2;
var h = 40;
var fps = 60;

setInterval(animationLoop, 1000/fps);
function animationLoop(){
  ctx.clearRect(0,0,my_canvas.width,my_canvas.height);
    x += 1;
    y += 1;
    ctx.fillRect(x-h/2, y-h/2, h, h);
}
