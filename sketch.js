var trex,trex_running,trex_collide;
var ground,invisible_ground,groundImage;

function preload(){
  
  trex_running=loadAnimation("trex1.png","trex2.png","trex3.png");
  
  
  
}

function setup() {
  createCanvas(400, 400);
  trex = createSprites(200,200,10,10);
  trex.addAnimation("running",trex_running);
  
  
  
}

function draw() {
  background(220);
  
  drawSprites();
  
  
}