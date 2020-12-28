class Line{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.string=Constraint.create(options);
        MyWorld.add(world,this.string);
        this.color=color(random(0,255),random(0,255) , random(0,255));
    }

    attach(body){
        this.string.bodyA = body;
    }

    fly(){
        this.string.bodyA = null;
    }

    display(){
         if(this.string.bodyA){
            var PointA = this.string.bodyA.position;
            var PointB= this.string.pointB;
            
            push();

            //this.color=color(random(0,255),random(0,255) , random(0,255));

            stroke(this.color);

            if(PointA.x < 200 || PointA.x >400 || PointA.y < 200 || PointA.y > 400){
                strokeWeight(3);
                line(PointA.x,PointA.y,PointB.x,PointB.y);
            }else if (PointA.x < 199 || PointA.x > 401 || PointA.y < 100 || PointA.y > 500) {
                console.log("working");
                strokeWeight(10);
                line(PointA.x,PointA.y,PointB.x,PointB.y);
            }
            else if (PointA.x < 299 || PointA.x >299 || PointA.y < 250 || PointA.y > 350){
                strokeWeight(5);
                line(PointA.x,PointA.y,PointB.x,PointB.y);
            }


            pop();
         }
    }
}