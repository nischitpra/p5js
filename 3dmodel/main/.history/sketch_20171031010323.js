var house
var zoomAmount=0

function setup(){ 
  document.body.style.overflow = 'hidden';
  canvas=createCanvas(window.innerWidth, window.innerHeight,WEBGL);
  canvas.parent('sketch-holder')
  // noCursor()
  
  house=loadModel("assets/lighthouse/lighthouse.obj",true)

}
function draw(){
  // background(color('hsb('+Math.floor(mouseX/width*35)  +',100%,'+(mouseY/height)*40+'%)'));
  background(200,100,100,255)
  camera(0, 0, sin(frameCount * 0.01) * 100, 0, 0, 0, 0, 1, 0);
  rotateX(PI)
  rotateY((width*0.5-mouseX)/(width) );
  rotateX(-(height*0.5-mouseY)/(height) );
  model(house)

}
function mouseWheel(event) {
  zoomAmount += event.delta;
}
