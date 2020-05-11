class Box1 {
  constructor(x,y){
    var options ={
        restitution:0.8,
        friction:0.2,
        density:0.4
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
   this.Visiblility = 255;
    World.add(world,this.body);
}
display(){
    if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       // strokeWeight(4);
        //stroke("green");
        fill("green");
       // fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }

else{
  //  this.Visiblity = this.Visiblity - 5;
   // tint(255,this.Visiblity);
// World.remove(world,this.body);
World.remove(world, this.body);
// score=score+1;
//this.body.speed=0;
push();
this.Visiblility = this.Visiblility - 5;
tint(255,this.Visiblility);
//image( this.body.position.x, this.body.position.y, 50, 50);
pop();
//push();

//pop();

}
}
score(){
    console.log(this.Visiblility);
    if (this.Visiblility < 0 && this.Visiblility > -20){
        
      score++;
    }   
}
  
}