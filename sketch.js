const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var snow = [];

var bgImg;
var boy,boyImg;
var invisibleGround,ground;

function preload(){
bgImg = loadImage("snow2.jpg");
boyImg = loadImage("boy.png");
}
function setup() {
  createCanvas(800,400);
  invisibleGround = createSprite(400, 100, 800, 20);
  invisibleGround.visible = false;

  boy = createSprite(700,300);
  boy.addImage(boyImg);
  boy.scale=0.6;

  ground = createSprite(400,380,800,20);
  ground.shapeColor="white";

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bgImg);
  drawSprites();



  if(frameCount%10===0){
    snow.push(new Snow(random(10,700),10,10));
  }

  for(var j = 0;j<snow.length;j++){
    snow[j].display();
  }

  boy.collide(invisibleGround);
  Engine.update(engine);
}

function keyPressed(){
if(keyCode === 32){
  boy.velocityY = -12;
}
if(keyCode === 37){
  boy.x=boy.x-22;
 // boy.mirrorX(boy.mirrorX() * +3 );
}
if(keyCode === 39){
  boy.x=boy.x+22;
 // boy.mirrorX(boy.mirrorX() * -3 );
}

}



