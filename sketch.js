
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground1_table=loadAnimation("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 ground = createSprite(200,180,400,20)
ground.addAnimation("table",ground1_table)
trex.scale=0.5
}

function draw(){
  background("yellow")
  if(keyDown("space")) {
trex.velocityY = -4;
  }
drawSprites()
}
