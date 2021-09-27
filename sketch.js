// name spacing 

const Engine= Matter.Engine // helps us create Physics Engine
const World= Matter.World  // helps create world following physics rules
const Bodies= Matter.Bodies // helps create objects residing in world 

var engine, world, ground ;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  
 



box1=new Box(300,300,50,50)
box2=new Box(100,100,50,50)

ground=new Ground()

pig=new Pig(200,50,50,50)
}

function draw() {
  background(0);  
  Engine.update(engine)
  

  box1.display();
  box2.display();
  ground.display();
  pig.display();
}

