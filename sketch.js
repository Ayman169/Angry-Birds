const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box,ground;

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

   
    box = new Box(800,570);
    box2 = new Box(1000,570);

    pig = new Pig(900,570);

    log = new Log(900,530,300,PI/2)

    ground = new Ground(600,590,1200,20);
}

function draw(){
    background(0);
   

    Engine.update(myEngine);
    box.display();
    box2.display();
    pig.display();
    log.display();
    ground.display();
}