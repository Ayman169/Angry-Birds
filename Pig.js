class Pig extends Baseclass{

    constructor(x,y){
      super(x,y,70,70);
      this.image = loadImage("sprites/enemy.png");
      this.Visiblity=255;
    }

    display(){
      console.log(this.body.speed);
      if(this.body.speed<2){
      super.display();
      }
    
     else{
       World.remove(myWorld,this.body);
       push();
       this.Visiblity=this.Visiblity-5;
       tint(255,this.Visiblity);
       image(this.image,this.body.position.x,this.body.position.y,70,70);
       pop();
     }
    }
}