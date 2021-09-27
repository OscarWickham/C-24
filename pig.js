class Pig{
constructor(x,y,w,h){

    var options={
        restituion:1
    }
    this.pig=Bodies.rectangle(x,y,w,h, options);
    this.w=w;
    this.h=h;
    World.add(world,this.pig)

}






display (){
    rectMode(CENTER);
fill("pink")
    rect(this.pig.position.x, this.pig.position.y, this.w,this.h)

}
}