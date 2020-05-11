const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var color6,color7;
var ground,ground1;
var box3,box4,box5;
var color1,color2;
var color3,color4,color5;
var box6,box7,box8;
var color8,color9,color10;
var ball, sling;
var score = 0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box1(1100,320,50,50);
    box2 = new Box1(1100,300,50,50);
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(1200,200,600,10);
    box3 = new Box1(1100,300,50,50);
    box4 = new Box1(1050,260,50,50);
    box5= new Box1(1000,380,50,50);
    
    color1 = new Box2(1000,350);
    color2 = new Box2(1000,365);

     color3 = new Box2(1130,190);
     color4 = new Box2(1110,190);
     color5 = new Box2(1090,190);

     box6 = new Box1(1130,170,50,50);
     box7 = new Box1(1110,170,50,50);
     box8 = new Box1(1090,170,50,50);

     color6 = new Box3(1050,350);
     color7 = new Box3(1050,300);
     color8 = new Box3(1130,160);
     color9 = new Box3(1110,160);
     color10= new Box3(1090,160);

     var ball_options={
        restitution:1.0
    }
  
  
  
      //ball =  Bodies.circle(200,100,50,ball_options);
      ball = new Particle(200,50,20);
      //World.add(world,ball);
      
      
 // shooter = new Box1(350,390,20,100);
  
  
  sling= new Sling(ball.body,{x:200,y:50});

  
}

function draw(){
    background(200);
    Engine.update(engine);
    text("Score  " + score, width-300, 50);
   
   // ellipseMode(RADIUS);
    //ellipse(ball.position.x,ball.position.y,20,20);
    color6.display();
    box1.display();
    //box1.Score(ground1.body);
    box2.display();
    ground.display();
    ground1.display();
    color7.display();
    box3.display();
    box4.display();
    box5.display();
    color1.display();
    color2.display();
    color3.display();
    color4.display();
    color5.display();
    box6.display();
    box7.display();
    box8.display();
    color8.display();
    color9.display();
    color10.display();
    //shooter.display();
    ball.display();
    sling.display();
    color6.score();
    color7.score();
    color8.score();
    color10.score();
    color9.score();
    color1.score();
    color2.score();
    color3.score();
    color4.score();
    color5.score();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(ball.body);
    }
    
}
 

