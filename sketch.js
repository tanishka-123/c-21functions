var frect,mrect,box1,box2;
function setup() {
  createCanvas(800,400);
 frect= createSprite(400, 200, 50, 50);
 frect.shapeColor="green";
 frect.debug=true;
 mrect= createSprite(200, 200, 50, 50);
 mrect.shapeColor="green";
 mrect.debug=true;
 box1=createSprite(300,50,50,50);
 box1.shapeColor="yellow";
 box1.debug=true;
 box1.velocityY=2;
 box2=createSprite(300,350,50,50);
box2.shapeColor="yellow";
box2.debug=true;
box2.velocityY=-2;
}

function draw() {
  background(255,255,255); 
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  if(isTouching(box1,box2)){box1.shapeColor= "blue";
box2.shapeColor="blue";}
 bounceoff(box1,box2);
  drawSprites();
}
