class Bob {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:1,
        friction:0.8,
        density:1
      }
      this.body = Bodies.circle(x,y,30,options);
      this.radius = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("violet");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }
