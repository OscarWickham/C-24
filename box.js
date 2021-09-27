class Box {

   constructor(x,y,w,h){

        var ball_options={
            restitution:1
          }   

        this.ball=Bodies.rectangle(x,y,w,h, ball_options);
        this.w=w;
          this.h=h;
        World.add(world,this.ball)
    }



display(){
    rectMode(CENTER);
    rect(this.ball.position.x, this.ball.position.y, this.w,this.h)
}
}