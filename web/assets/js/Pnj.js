class Pnj {
    constructor({posX, bounds, choices, name, infected}) {
        this.bounds = bounds;
        this.pos = {x: posX, y: canvas.height - 100 - this.bounds.height};
        this.triggered = false;
        this.nbPepins = 3;
        this.choices = choices;
        this.name = name;
        this.infected = infected;
        if(this.infected) {
            this.legend = "Je suis perimé mais quand même croquable !";
        }else{
            this.legend = "Je suis frais et croquable !";
        }
        this.curFrame = 0;
    }

    draw() {
        switch (this.name) {
            case "Tomate":
                this.animateTomate(this.curFrame);
                this.curFrame++;
                if (this.curFrame > 33) this.curFrame = 0;
                break;
            case "Poire":
                this.animatePoire(this.curFrame);
                this.curFrame++;
                if (this.curFrame > 30) this.curFrame = 0;
                break;
            case "Pomme":
                this.animatePomme(this.curFrame);
                this.curFrame++;
                if (this.curFrame > 22) this.curFrame = 0;
                break;
            case "Orange":
                this.animateOrange(this.curFrame);
                this.curFrame++;
                if (this.curFrame > 25) this.curFrame = 0;
                break;
            case "Kiwi":
                this.animateKiwi(this.curFrame);
                this.curFrame++;
                if (this.curFrame > 25) this.curFrame = 0;
                break;


        }
        if(this.infected) {
            this.legend = "Je suis perimé mais quand même croquable !";
        }else{
            this.legend = "Je suis frais et croquable !";
        }
    }

    animateOrange(frameIndex){
        const spritesheet = new Image();
        spritesheet.src = "./js/images/orange-run.png";
        ctx.drawImage(
            spritesheet,
            frameIndex * 47,
            0,
            47,
            57,
            this.pos.x,
            this.pos.y,
            47,
            57
        )
    }

    animatePomme(frameIndex) {
        const spritesheet = new Image();
        spritesheet.src = "./js/images/pomme.png";

        ctx.drawImage(
            spritesheet,
            frameIndex * 70,
            0,
            70,
            69,
            this.pos.x,
            this.pos.y,
            70,
            69
        );
    }

    animateTomate(frameIndex) {
        const spritesheet = new Image();
        spritesheet.src = "./js/images/tomato.png";

        ctx.drawImage(
            spritesheet,
            frameIndex * 59, 0, 59, 67, this.pos.x, this.pos.y, 59, 67
        )
    }

    animatePoire(frameIndex) {
        const spritesheet = new Image();
        spritesheet.src = "./js/images/poire.png";

        ctx.drawImage(
            spritesheet,
            frameIndex * 38, 0, 38, 62, this.pos.x, this.pos.y, 38, 62
        )
    }

    animateKiwi(frameIndex) {
        const spritesheet = new Image();
        spritesheet.src = "./js/images/kiwi.png";

        ctx.drawImage(
            spritesheet,
            frameIndex * 48, 0, 48, 59, this.pos.x, this.pos.y, 48, 59
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
                document.getElementById("keysInstruction").innerHTML = "<p>Appuyez sur la touche 'E' pour parler" +"<br>"+ this.legend+"</p>";
                document.getElementById("keysInstruction").classList.remove("hidden");
                document.getElementById("keysInstruction").style.left = this.pos.x + player.pos.x * 0.1 + "px";
                document.getElementById("keysInstruction").style.top = this.pos.y-20 - this.bounds.height + "px";
                if (KEYS['e']) {
                    player.winPins(1);
                    currentPnj = this;
                    document.getElementById("choix").classList.remove("hidden");
                    document.getElementById("choix1").innerText = this.choices.choice1;
                    document.getElementById("choix2").innerText = this.choices.choice2;

                    player.isChoosing = true;
                }
            } else {
                if (!player.isChoosing) {
                    document.getElementById("keysInstruction").classList.remove("hidden");
                    document.getElementById("keysInstruction").innerHTML = "<p>Ah ! Tu as déjà parlé avec moi !</p>";
                }

            }
        } else {
            if (!document.getElementById("keysInstruction").classList.contains("hidden")) {
                document.getElementById("keysInstruction").classList.add("hidden");
            }
        }
    }


}