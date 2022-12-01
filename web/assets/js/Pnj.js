class Pnj{
    constructor({posX,bounds}) {
        this.bounds = bounds;
        this.pos = {x:posX,y:canvas.height-100-this.bounds.height};
        this.triggered = false;
    }

    draw() {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.pos.x,this.pos.y,this.bounds.width,this.bounds.height);
    }

    update() {
        this.pos.y = canvas.height-100-this.bounds.height;
        this.draw();
    }


    collide(player) {
        if (player.pos.x < this.pos.x + this.bounds.width &&
            player.pos.x + player.bounds.width > this.pos.x) {
                // collision detected!
                if(!this.triggered){
                    player.winPins();
                }
                this.triggered = true;

            }
    }



}