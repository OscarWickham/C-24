class Ground{
    constructor(){
        var options= {

            isStatic: true
        
        
          }
        
        this.ground=Bodies.rectangle(200,390,400,20, options);
        World.add(world,this.ground)
    }
display(){
    rectMode(CENTER)
    rect( this.ground.position.x,this.ground.position.y,400,20)
    

    
}

    
}



