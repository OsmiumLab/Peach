class Sprite {
    constructor({pos, velocity}) {
        this.pos = pos;
        this.velocity = velocity;
        this.offset = 0;
        this.bounds = {width: 100, height: 100};
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
        this.offset += this.velocity.y*4;

    }

    moveLeft() {
        this.pos.x -= this.velocity.x;
    }

    moveRight() {
        this.pos.x += this.velocity.x;
    }

    fall() {
        if(this.pos.y < canvas.height-100) {
            this.offset -= this.velocity.y;
        }
    }

}
