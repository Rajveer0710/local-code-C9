var rajveer, mom;


function setup() {
  createCanvas(600,400);
rajveer = createSprite(150, 200, 100, 50);
rajveer.shapeColor="green";

mom = createSprite(250, 300, 70, 80);
mom.shapeColor="purple";
}



function draw() 
{
  background(0);

  rajveer.x = mouseX;
  rajveer.y = mouseY;

  drawSprites();

}




