var car ;
var wall;
var speed=Math.random(55,90);
var weight=Math.random(400,1500);
var deform;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor (80,80,80);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x <wall.width +car.width){
    deform=0.5*weight*speed*speed/22500
    if(deform<100){
      car.shapeColor ("green");

    }
    if(deform===100 ){
      car.shapeColor ("yellow");

    }
    if(deform<100){
      car.shapeColor ("red");

    }
  }
  drawSprites();
}