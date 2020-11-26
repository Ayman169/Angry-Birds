 class Box {
     constructor(x,y){

        var abc = {
            restitution:1,
            density:1,
            friction:1
        }

         this.body = Bodies.rectangle(x,y,70,70,abc);
         this.width = 70;
         this.height = 70;
         World.add(myWorld,this.body);
     }

     display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);

        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
     }
 }