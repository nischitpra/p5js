var angle
var particleSystem
var xback,xmid,xnear
var back,mid,near
var prevMouseX
var vel
var strk
function setup(){ 
    createCanvas(window.innerWidth*0.99, window.innerHeight*0.99);
    angle=PI/4
    particleSystem = new ParticleSystem(createVector(width/2, 50));

    xback=width/2
    xmid=width/2
    xnear=width/2

    back=2*5
    mid=4*5
    near=6*5
    prevMouseX=width/2
  strk=50
}
function draw() {
    background (51);

    particleSystem.addParticle();
    particleSystem.run();
    
    //handing angle
    angle=clamp(PI*0.05,PI*0.28,(mouseY/height)/2.8 * PI)
    if(mouseX!=prevMouseX){
      var del=(mouseX-prevMouseX)/width
      xback += del*back
      xmid += del*mid
      xnear += del*near
    }
    prevMouseX=mouseX
    //back
    push()
    translate(xnear,height)   
    stroke(200,50,50,255)
    branch(200,strk)
    pop()
    //mid
    push()
    translate(xmid,height)   
    stroke(200,50,50,255)
    branch(200,strk)
    pop()

    //near    
    push()
    translate(xback,height)   
    stroke(200,200,200,255)
    branch(200,strk)
    pop()


}
function branch(length,stweight){
    if(length<4)return
    
    strokeWeight(stweight)
    line(0,0,0,-length)

    push()
    translate(0,-length)
    rotate(angle)
    branch(length*0.67,stweight*0.67)
    pop()
    push()
    translate(0,-length)
    rotate(-angle)
    branch(length*0.67,stweight*0.67)
    pop()
}
function clamp(min,max,value){
    if(value<min) return min
    if(value>max) return max
    return value
}


// A simple Particle class
var Particle = function(position) {
    this.acceleration = createVector(-0.001, 0.001);
    this.velocity = createVector(random(-3, -1), random(-1, 1));
    this.position = position.copy();
    this.lifespan = 255.0;
    this.size = random(12,24)
  };
  
  Particle.prototype.run = function() {
    this.update();
    this.display();
  };
  
  // Method to update position
  Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 0.5;
  };
  
  // Method to display
  Particle.prototype.display = function() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  };
  
  // Is the particle still useful?
  Particle.prototype.isDead = function(){
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
    if(this.position.x<0 || this.position.y<0|| this.position.y>height){
        return true;
    }else {
        return false
    }
  };

  
  var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
    this.lastGenerate = createVector(100,random(1,8))
  };
  
  ParticleSystem.prototype.addParticle = function() {
    if(this.lastGenerate.x<=0){
        this.particles.push(new Particle(createVector(width,random(height*0.0,height*0.5))));
        this.lastGenerate.x = 100
    }else{
        this.lastGenerate.x-=this.lastGenerate.y
    }
  };
  
  ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
