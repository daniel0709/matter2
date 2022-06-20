
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var chao;
var parede1;
var parede2;
var engine;
var world;
var raio = 40;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	
    ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2,
	}
	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);


	chao = new Chao(width/2,670,width,20);
	parede1 = new Chao(1100,600,20,120);
	parede2 = new Chao(1350,600,20,120);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,raio,raio);

  chao.display();
  parede1.display();  
  parede2.display();
  

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,{x : 0,y : 0},{x : 85,y : -85});
  
	}
}



