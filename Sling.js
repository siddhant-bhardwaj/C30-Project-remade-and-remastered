class Sling{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        lenght:0 
    }
    this.pointB = pointB;
    this.sling= Constraint.create(options);
    World.add(world,this.sling);
    this.sling1 = loadImage('Pictures/sling1.png');
    this.sling2 = loadImage('Pictures/sling2.png');
    this.sling3 = loadImage('Pictures/sling3.png');
}
fly(){
    this.sling.bodyA = null;
}

attach(ballbody){
    //birdbody is a variable that stores the bird's position;
    //console.log("bird's body"+birdbody);
    this.sling.bodyA = ballbody; 
}

display(){
    image(this.sling1,200,20);
    image(this.sling2,170,20);
   

if(this.sling.bodyA){

   
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(84,39,15);
        if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-5);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
            else{
                strokeWeight(3);
               line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
               line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-5);
               image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
          pop();

    
}

}

}