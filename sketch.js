const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var bobDiameter = 5;

function setup() {
	var canvas = createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(380,200,400,20);
	  bob1 = new Bob(260,500,40);
    bob2 = new Bob(320,500,40);
    bob3 = new Bob(380,500,40);
    bob4 = new Bob(440,500,40);
    bob5 = new Bob(500,500,40);
    rope1 = new Rope(bob1.body,{x:260,y:200});
    rope2 = new Rope(bob2.body,{x:320,y:200});
    rope3 = new Rope(bob3.body,{x:380,y:200});
    rope4 = new Rope(bob4.body,{x:440,y:200});
    rope5 = new Rope(bob5.body,{x:500,y:200});
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();  
  rope2.display();  
  rope3.display();  
  rope4.display();  
  rope5.display();  
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-300});
      //bob1.y = bob1.y + 0.5;
    }
  }
