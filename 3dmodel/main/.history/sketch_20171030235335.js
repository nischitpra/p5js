
var aventador
var img
function setup(){ 
  document.body.style.overflow = 'hidden';
  canvas=createCanvas(window.innerWidth, window.innerHeight,WEBGL);
  canvas.parent('sketch-holder')
  // noCursor()
  
  // aventador=loadModel("assets/aventador/Avent.obj")
  img=loadImage('assets/aventador/Lamborghinilogo.jpg')


}
function draw(){
  background(color('hsb('+Math.floor(mouseX/width*35)  +',100%,'+(mouseY/height)*40+'%)'));
  // model(aventador)
  image(img,0,0)

}
