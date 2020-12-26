
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options = 
	{
	  isStatic : true
	}
	
	//Create the Bodies Here.
	object = Bodies.rectangle(400,700,800,20,options);
	log = new Log(400,650,20,200);
	log1 = new Log(300,610,100,20);
	log2 = new Log(500,610,100,20);
	paper = new Paper(100,600,70);
	World .add(world,object);
	World .add(world,paper);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 fill ("brown")
 rect(object.position.x ,object.position.y,700,20);
  background(0);
  paper.display();
  log.display();
  log1.display();
  log2.display();
  
  keyPressed();
  drawSprites();
 Engine.update(engine);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5,y:-2.5});
	}
}