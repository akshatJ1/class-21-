var movingRect , fixedRect, gameObject1;
var gameObject2 , gameObject3 , gameObject4;

function setup() {
  createCanvas(1200,800);
movingRect = createSprite(100,400,50,50);
movingRect.shapeColor = "green";
fixedRect = createSprite(1100,400,70,30);
fixedRect.shapeColor = "green";

gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor ="green";
gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "green";
gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor = "green";
gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor = "green";

movingRect.velocityX = 3;
fixedRect.velocityX = -3;
}

function draw() {
  background("black");  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

//  if(isTouching(movingRect, gameObject3)){
//   movingRect.shapeColor = "red";
//   gameObject3.shapeColor = "yellow";
//  }
//  else{
//   movingRect.shapeColor = "green";
//   gameObject3.shapeColor = "green";
//  }
bounceOff(movingRect , fixedRect);


``
  drawSprites();

}

