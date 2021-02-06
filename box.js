class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.color=255;
    }
    display(){

        if(this.body.speed>5){
            World.remove(world,this.body);
            push();
            this.color = this.color-10;
            tint(255,this.color);
            pop();
        } else {
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
    }
}