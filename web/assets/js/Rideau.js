class Rideau{
    constructor(){
        this.altitude = -500;
    }

    draw(){
        const spritesheet = new Image();
        spritesheet.src = "./js/images/rideau.png";
        ctx.drawImage(spritesheet, 0, 0, 320, 180, 0, this.altitude, screen.width, screen.height);


    }

    update(){
        if(this.altitude < 30){
            this.draw();
            this.altitude += 30;
        }



    }
}
