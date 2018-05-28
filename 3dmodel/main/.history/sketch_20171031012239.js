var house
var zoomAmount=0
var hoveColor=(255,255,255,255)
var defaultColor=(255,0,0,100)
var col

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
  camera(0, 0, zoomAmount, 0, 0, 0, 0, 1, 0);
  rotateX(PI)
  rotateY((width*0.5-mouseX)/(width) * PI *0.2);
  rotateX(-(height*0.5-mouseY)/(height)* PI *0.2 );
  
  if(house.mouseOver())
    col=hoveColor
  else
    col=defaultColor
  fill(col)  
  model(house)
}
function mouseWheel(event) {
  if(zoomAmount<250 && event.delta>0)
    zoomAmount += event.delta*0.4;
  if(zoomAmount>-250 && event.delta<0)
    zoomAmount += event.delta*0.4;

}
