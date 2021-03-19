
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(400,200,50,50);
  gameObject1.shapeColor = "yellow"

  gameObject2 = createSprite(1000,200, 50, 150);
  gameObject2.shapeColor = "red"

  gameObject1.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
 if(isTouching(gameObject1,gameObject2)){
gameObject2.shapeColor = "pink";

 }
 

BounceOff(gameObject1,gameObject2);
  drawSprites();
}

