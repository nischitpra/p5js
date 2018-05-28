
var tree

function setup(){ 
  document.body.style.overflow = 'hidden';
  canvas=createCanvas(window.innerWidth, window.innerHeight,WEBGL);
  canvas.parent('sketch-holder')
  noCursor()
  
 
  perspective(60 / 180 * PI, width/height, cameraZ * 0.1, cameraZ * 10);
  
  aventador=loadModel('assets/aventador/avantador.obj',true)
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
  model(aventador)
 

}
