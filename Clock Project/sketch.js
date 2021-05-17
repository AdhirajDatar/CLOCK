var h,s,m

var scAngle,mAngle,hrAngle

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)  
  
  
}

function draw() {
  background(255,255,255);

  translate(windowWidth/2,windowHeight/2)
  rotate(-90)

  h = hour()
  m = minute()
  s = second()
  console.log(h)
  scAngle = map(s, 0, 60, 0, 360)
  mAngle = map(m,0, 60, 0, 360)
  hrAngle = map(h%12, 0, 12, 0, 360 )

  push();
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0, 0, 500, 0)
  pop();

  push();
  rotate(mAngle)
  stroke(0, 255, 0)
  strokeWeight(7)
  line(0, 0, 300, 0)
  pop();

  push();
  rotate(hrAngle)
  stroke(0, 0, 255)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop();
  drawSprites();
}