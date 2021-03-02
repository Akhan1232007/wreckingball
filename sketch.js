const Constraint=Matter.Constraint
const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
var engine, world
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world  
  ground = new Ground(400,390,800,10)
  box1 = new Box(700,385,40,40)
  box2 = new Box(700,380,40,40)
  box3 = new Box(730,375,40,40)
  box4 = new Box(730,370,40,40)
  box5 = new Box(670,375,40,40)
  box6 = new Box(670,370,40,40)
  box7 = new Box(670,365,40,40)
  box8 = new Box(670,360,40,40)
  box9 = new Box(700,355,40,40)
  box10 = new Box(700,350,40,40)
  box11 = new Box(730,365,40,40)
  box12 = new Box(730,360,40,40)
  box13 = new Box(700,350,40,40)
  box14 = new Box(730,355,40,40)
  box15 = new Box(670,355,40,40)
  box16 = new Box(700,345,40,40)
  box17 = new Box(730,350,40,40)
  box18 = new Box(670,350,40,40)
  ball = new Ball(300,385,20)
  slingShot = new SlingShot(ball.bdy,{x:600 ,y:150})
}

function draw() {
  background("black");  
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box6.display()
  box17.display()
  box18.display()
  ball.display()
  slingShot.display()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.bdy, {x: mouseX , y: mouseY});
}
