
var array
var distance=300
var accX,accY
var velX=100,velY=100
var prevX,prevY
var full=false
var a,s
function setup(){ 
  document.body.style.overflow = 'hidden';
  canvas=createCanvas(window.innerWidth, window.innerHeight,WEBGL);
  canvas.parent('sketch-holder')
  noCursor()
  
  var fov = 60 / 180 * PI;
  var cameraZ = (height*0.5) / tan(fov*0.5);
  perspective(60 / 180 * PI, width/height, cameraZ * 0.1, cameraZ * 10);
  
  array=new Cubes(8,8,10);
  array.populateRandom()
  r = 255;
  g = 0;
  br = 0;
  a = 255;
  bh = (r + g + br) / 3;
  s = map(dist(bh, bh, bh, r, g, br), 0, 208.20662813657012, 0, 255);
	a=255
}
// function mousePressed(){
//   full=!full
//   fullscreen(full);
// }
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw(){
  background(color('hsb('+Math.floor(mouseX/width*35)  +',100%,'+(mouseY/height)*40+'%)'));
  // fill(s,a)
  // stroke(s,a)
  ellipse(mouseX-width/2,-mouseY+height/2,10,10)

  rotateY(-(width*0.5-mouseX)/(width) );
  rotateX(-(height*0.5-mouseY)/(height) );
  
  ambientLight(color( col='hsb('+Math.floor(mouseX/width*35)  +',100%,'+(mouseY/height)*300+'%)'))  
  pointLight(255, 255, 255,255,mouseX,mouseY);
  pointLight(0, 255, 0,100,0,0,-300);
  pointLight(255, 0, 0,100,width,height);
  specularMaterial(255,255,0,255)
  array.render()

  prevX=mouseX
  prevY=mouseY

}
function Cubes(length,bredth,height){
  this.LENGTH=length
  this.BREDTH=bredth
  this.HEIGHT=height
  this.randomX=[]
  this.randomY=[]
  this.randomZ=[]

  this.render = function(){
    var count=0
    for(var i = -this.LENGTH*0.5; i < this.LENGTH*0.5; i++){
      for(var j = -this.BREDTH*0.5; j < this.BREDTH*0.5; j++){
        for(var k = -this.HEIGHT*0.25; k < this.HEIGHT*0.75; k++){

          rotateX(frameCount*0.000002)
          rotateY(frameCount*0.000002)

          push()
          translate(i*distance-this.randomX[count],j*distance-this.randomY[count],k*distance-this.randomZ[count])
          // sphere(10,50,50);

          rotateX(frameCount*this.randomX[count]/10000)
          rotateY(frameCount*this.randomY[count]/10000)
          
          push()
          rotateX(PI)
          rotateY(60/180*PI)
          translate(0,-10,0)
          cone(20,20,2,2);
          pop()
          translate(0,-10,0)
          cone(20,20,2,2);

          
          pop()
          count++
        }
      }
    }
  }
  this.populateRandom = function(){
    for(var i=0;i<(this.LENGTH*this.BREDTH*this.HEIGHT);i++){
      this.randomX.push(Math.random()*distance/2)
      this.randomY.push(Math.random()*distance/2)
      this.randomZ.push(Math.random()*distance/2)
    }
  }

}

