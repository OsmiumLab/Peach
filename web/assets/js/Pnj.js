class Pnj {
    constructor({posX, bounds, choices, name , infected}) {
        this.bounds = bounds;
        this.pos = {x: posX, y: canvas.height - 100 - this.bounds.height};
        this.triggered = false;
        this.nbPepins = 3;
        this.choices = choices;
        this.name = name;
        this.infected = infected;

        this.curFrame = 0;
    }

    draw() {
        switch(this.name){
            case "Tomate":
                this.animateTomate(this.curFrame);
                this.curFrame++;
                if(this.curFrame > 33) this.curFrame = 0;
                break;
            default:
                console.log("test");
                break;

        }
    }

    animateTomate(frameIndex) {
        const spritesheet = new Image();
        spritesheet.src = "./js/images/tomato.png";

        ctx.drawImage(
            spritesheet,
            frameIndex * 59, 0 , 59, 67, this.pos.x, this.pos.y, 59, 67
        )
    }

    update() {
        this.pos.y = canvas.height - 100 - this.bounds.height;
        this.draw();
    }


    collide(player) {
        if (player.pos.x < this.pos.x + this.bounds.width &&
            player.pos.x + player.bounds.width > this.pos.x) {
            // collision detected!
            if (!this.triggered) {
                document.getElementById("keysInstruction").classList.remove("hidden");
                document.getElementById("keysInstruction").style.left = this.pos.x + player.pos.x * 0.1 + "px";
                document.getElementById("keysInstruction").style.top = this.pos.y - this.bounds.height + "px";
                if (KEYS['e']) {
                    player.winPins(1);
                    currentPnj = this;
                    document.getElementById("choix").classList.remove("hidden");
                    document.getElementById("choix1").innerText = this.choices.choice1;
                    document.getElementById("choix2").innerText = this.choices.choice2;
                    this.triggered = true;
                    player.isChoosing = true;
                }
            }else{
                if(!player.isChoosing){
                    document.getElementById("keysInstruction").classList.remove("hidden");
                    document.getElementById("keysInstruction").innerHTML = "<p>Ah ! Tu as déjà parlé avec moi !</p>";
                }

            }
        }else{
            if(!document.getElementById("keysInstruction").classList.contains("hidden")){
                document.getElementById("keysInstruction").classList.add("hidden");
            }

        }
    }


}