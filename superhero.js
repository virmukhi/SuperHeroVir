class Superhero {
    constructor(x,y,width,height,angle) {
      var options = {
        isStatic:false,
        restitution:0,
          density:1.2,
          frictionAir:1
      };
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/Superhero-01.png");
      World.add(world, this.body);
    }
    display(){
      var angle =this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      ellipse(0,0,this.width,this.height);
      pop();
    }
  };