class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }


        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        image(this.sling1,140,25)
        image(this.sling2,115,25)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB; 
            push();

            stroke(255,255,255)

        if(pointA.x<220){

            strokeWeight(4);
           
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x,pointA.y,pointB.x+20,pointB.y-3);
            image(this.sling3,pointA.x-10,pointA.y-10,15,30)

        }
else {
    strokeWeight(4);
           
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    line(pointA.x,pointA.y,pointB.x+20,pointB.y-3);
    image(this.sling3,pointA.x+15,pointA.y-10,15,30)
}
            
            pop();
        }
    }
    
}