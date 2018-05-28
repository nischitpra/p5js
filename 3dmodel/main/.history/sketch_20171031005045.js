var aventador
function setup(){ 
  document.body.style.overflow = 'hidden';
  canvas=createCanvas(window.innerWidth, window.innerHeight,WEBGL);
  canvas.parent('sketch-holder')
  // noCursor()
  
  aventador=loadModel("assets/lighthouse/lighthouse.obj",true)


}
function draw(){
  background(color('hsb('+Math.floor(mouseX/width*35)  +',100%,'+(mouseY/height)*40+'%)'));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(aventador)

}
