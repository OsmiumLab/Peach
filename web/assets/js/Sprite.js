class Sprite {
    constructor({pos, velocity, bounds}) {
        this.pos = pos;
        this.velocity = velocity;
        this.offset = 0;
        this.bounds = bounds;
        this.nbJump = 0;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.pos.x, this.pos.y, this.bounds.width, this.bounds.height);
    }

    update() {
        this.pos.y = canvas.height - 100 - this.bounds.height - this.offset;
        this.draw();
    }

    jump(){
        if(this.nbJump<10){
            this.offset += this.velocity.y*4;
            this.nbJump++;
        }
    }

    resetJump(){
        this.nbJump = 0;
    }

    moveLeft() {
        this.pos.x -= this.velocity.x;
    }

    moveRight() {
        this.pos.x += this.velocity.x;
    }

    fall() {
        if(this.pos.y < canvas.height-100-this.bounds.height) {
            this.offset -= this.velocity.y;
        }else{
            player.resetJump();
        }
    }

}
