
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5;
var stone;
var ground;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
boy.display();
stone.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();



  drawSprites();
 
}



