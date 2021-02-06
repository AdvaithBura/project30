const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var polyPic;
function preload(){

}

function setup(){
    engine = Engine.create();
    world = engine.world;
    
    var canvas = createCanvas(1200,800);
    var options = {
        restitution: 1
    }
ball = Bodies.circle(100,100,20, options);
World.add(world, ball);
   ground1 = new Ground(600,780,1200,20);
   ground2 = new Ground(1000,275,300,20);
   ground4 = new Ground(1000, 750,300,20);
   polygon1 = new Polygon(200,200,50,50);
   box1 = new Box(1030,225,60,60);
   box2 = new Box(970,225,60,60);
   box3 = new Box(910,225,60,60);
   box4 = new Box(1090,225,60,60);
   box5 = new Box(1060,175,60,60);
   box6 = new Box(940,175,60,60);
   box7 = new Box(1000,175,60,60);
   box8 = new Box(970,125,60,60);
   box9 = new Box(1030,125,60,60);
   box10 = new Box(1000,75,60,60);
   box21 = new Box(970,600,60,60);
   box22 = new Box(1030,700,60,60);
   box23 = new Box(970,700,60,60);
   box24 = new Box(910,700,60,60);
   box25 = new Box(1090,700,60,60);
   box26 = new Box(1060,650,60,60);
   box27 = new Box(940,650,60,60);
   box28 = new Box(1000,650,60,60);
   box29 = new Box(1030,600,60,60);
   box30 = new Box(1000,550,60,60);
   slingshot1 = new Slingshot(polygon1.body, {x:200,y:300});
}

function draw(){
    background(0,0,0);

    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20);
  ground1.display();
  ground2.display();
  ground4.display();
  polygon1.display();
  fill("blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  slingshot1.display();
  textSize(25);
  text("Press space to play to get another try", 200,100);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(polygon1.body, {x:200, y:400});
		slingshot1.attach(polygon1.body);
	}
}