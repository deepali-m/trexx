var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = " green";
  movingRect =createSprite(300,200,50,50);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width /2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width /2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height /2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height /2 + movingRect.height/2){
    fixedRect.shapeColor = " red";
    movingRect.shapeColor = "red"
  }
  else{
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  console.log(movingRect.x);
  drawSprites();
}


