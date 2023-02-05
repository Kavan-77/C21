var ball;
var groundobj
var leftside
var rightside
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = Matter.Bodies.circle(30,30,40,ball_options )

groundobj= new ground(width/2,670,width,20)
leftside = new ground(1100,600,20,120)
rightside = new ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  
  groundobj.display()
  leftside.display()
  rightside.display()
	rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{
			x:85,y:-85
		})
	}
}

