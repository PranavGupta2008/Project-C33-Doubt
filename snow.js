class Snow{
    constructor(x,y){
   var options={
       restitution: 1,
       friction: 0,
   }
      this.r=10;
      this.body=Bodies.circle(x,y,this.r,options);
      World.add(world,this.body);
      //this.image = loadImage("snow ball.png");
    }
     display(){
       var pos = this.body.position;
       var angle = this.body.angle;
    
       push();
       translate(pos.x,pos.y);
       rotate(angle);  
       imageMode(CENTER);
       ellipseMode(RADIUS);
       fill (225);
       stroke("white");
       ellipse(0,0,this.r,this.r);
       pop();
     }
   
   }
   