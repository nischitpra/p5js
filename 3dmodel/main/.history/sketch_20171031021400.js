var house
var zoomAmount=0
var hoveColor=(255,150,150,255)
var defaultColor=(255,0,0,100)
var radius = 200;

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
  var y=-(width*0.5-mouseX)/(width) * PI *0.2
  var x=-(height*0.5-mouseY)/(height)* PI *0.2 
 
  // rotateX(PI)
  rotateY(y);
  rotateX(x);
  model(house)
  
  if(inRange(mouseX,width*0.45,width*0.55)&&inRange(mouseY,height*0.20,height*0.85))
    directionalLight(255, 0, 0, x, y, 1);
  else
    directionalLight(204, 150, 150, x, y, 1);
}
function inRange(value,min,max){
  return value>=min&&value<=max
}
function mouseWheel(event) {
  if(zoomAmount<250 && event.delta>0)
    zoomAmount += event.delta*0.4;
  if(zoomAmount>-250 && event.delta<0)
    zoomAmount += event.delta*0.4;

}
function Object(){
  var model
  var posX,posY,wdth,hght
  var hoverColor
  var defaultColor
  
  function Object(hoveColor,defaultColor,posX,posY,wdth,hght){
    this.hoverColor=hoverColor
    this.defaultColor=defaultColor
    this.posX=posX
    this.posY=posY
    this.wdth=wdth
    this.hght=hght
  }

  function mouseOver(){
    return inRange(mouseX,this.posX,this.posX+this.wdth)&&inRange(mouseY,this.posY,this.posY+this.hght)
  }


}
