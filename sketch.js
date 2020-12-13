const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var box,ground,back;

function preload(){
  back=loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

   
    box = new Box(800,570);
    box2 = new Box(1000,570);
    box3 = new Box(830,500);
    box4 = new Box(970,500);
    box5 = new Box(900,450);

    pig = new Pig(900,570);
    pig2 = new Pig(900,500);

    log = new Log(900,530,300,PI/2);
    log2= new Log(900,480,300,PI/2);
    log3 = new Log(830,470,150,PI/7);
    log4=new Log(970,470,150,-PI/7);
    

    bird = new Bird(200,570)

    ground = new Ground(600,590,1200,20);
    ground2 = new Ground(200,445,400,270);

    sling = new Slingshot(bird.body,{x:290,y:150});
}

function draw(){
    background(back);
  console.log(frameCount) 

    Engine.update(myEngine);
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
    ground2.display();
    sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}