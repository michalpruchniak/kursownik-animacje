var my_canvas = document.createElement("canvas");
my_canvas.width = 500;
my_canvas.height = 500;
document.body.appendChild(my_canvas);
var ctx = my_canvas.getContext('2d');

var x = my_canvas.width/2;
var y = my_canvas.height/2;
var h = rand(10, 30);
var r = rand(0, 255);
var g = rand(0, 255);
var b = rand(0, 255);
var speedX = rand(1, 5);
var speedY = rand(1, 5);
var fps = 60;

var lastTime = 0;
// setInterval(animationLoop, 1000/fps);
animationLoop();
function animationLoop(time){
  requestAnimationFrame(animationLoop);
  if(x<my_canvas.width-h/2 && y<my_canvas.height-h/2){
    if(time -lastTime >= 1000/fps){
      lastTime = time;
      ctx.clearRect(0,0,my_canvas.width,my_canvas.height);
        x += speedX;
        y += speedY;
        ctx.fillStyle = "rgb("+r+","+g+","+b+")";
        ctx.fillRect(x-h/2, y-h/2, h, h);
    }
  }
}
function rand(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
