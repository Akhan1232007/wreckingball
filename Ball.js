class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':4.0
        }
        this.bdy = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.bdy);
      }
      display(){
        var angle = this.bdy.angle;
        push();
        fill("yellow")
        translate(this.bdy.position.x, this.bdy.position.y);
        rotate(angle);
        circle(0, 0,  2*this.radius);
        pop(); 
      }
} 