var hr,mn,sc;
var scAngles




function setup() {
  createCanvas(800,400);
  hr = hour()
mn = minute()
sc = second()

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  scAngles = map(hr,0,60,0,360)
  scAngles = map(mn,0,60,0,360)
  scAngles = map(sc,0,60,0,360)
  push()
  rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()
  drawSprites();
}