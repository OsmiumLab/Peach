class Player {
    constructor({pos, velocity, bounds, scale = 1, framesMax = 1}) {
        this.pos = pos;
        this.velocity = velocity;
        this.offset = pos.y;
        this.bounds = bounds;
        this.nbJump = 0;
        this.nbPepins = 0;
        this.isChoosing = false;
        this.history = [];
        this.infecte = false;
        this.protected = true;

        this.curFrame = 0;
        this.state = "idle";
    }

    //animate the player according to the tile sheet and the direction
    animateIdle(ctx, spritesheet, frameIndex) {
        spritesheet.src = './js/images/idle.png';
        ctx.drawImage(
            spritesheet,
            frameIndex * 47, 0, 47, 97, this.pos.x, this.pos.y, 47, 97
        );
    }



    animateRun(ctx, spritesheet, frameIndex) {
        spritesheet.src = './js/images/aubergine-run.png';

        //draw the image according to the direction
        if (this.velocity.x < 0) {
            ctx.drawImage(
                spritesheet,
                frameIndex * 66, 0, 66, 97, this.pos.x, this.pos.y, 66, 97
            );
        } else {
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(
                spritesheet,
                frameIndex * 66, 0, 66, 97, -this.pos.x - 66, this.pos.y, 66, 97
            );
            ctx.restore();
        }

        // reverse drawn image

    }

    draw() {
        switch (this.state) {
            case "idle":
                this.animateIdle(ctx, new Image(), this.curFrame);
                this.curFrame++;
                if (this.curFrame > 33) {
                    this.curFrame = 0;
                }
                break;
            case "run":
                this.animateRun(ctx, new Image(), this.curFrame);
                this.curFrame++;
                if (this.curFrame > 33) {
                    this.curFrame = 0;
                }
                break;
        }

    }


    update() {
        this.pos.y = canvas.height - 100 - this.bounds.height - this.offset;
        this.draw();
    }

    jump() {
        if (!this.isChoosing) {
            if (this.nbJump < 11) {
                this.offset += this.velocity.y * 3;
                this.nbJump++;
            }
        }

    }

    idle() {
        this.state = "idle";
    }

    chose(choice, nb) {
        this.isChoosing = false;
        this.history.push({pnj: currentPnj.name, choice: choice});
        console.log(currentPnj.nbPepins)
        document.getElementById("choix").style.display = "none";
        if (nb === 2) {
            if (this.protected) {
                if (Math.random() > 0.85) {
                    if (Math.random() < currentPnj.infecte) {
                        this.infecte = true;
                    }
                }
                this.winPins(currentPnj.nbPepins);
            } else {
                if (this.infecte) {
                    this.endGame();
                } else {
                    if (Math.random() < currentPnj.infected) {
                        this.infecte = true;
                        this.winPins(-currentPnj.nbPepins);
                    }
                }

            }
        } else {
            this.nbPepins += currentPnj.nbPepins;
        }

        console.log(this.history, this.nbPepins, this.infecte);
    }

    resetJump() {
        this.nbJump = 0;
    }

    move() {
        this.state = "run";
        if (!this.isChoosing) {
            this.pos.x += this.velocity.x;
        }
    }

    fall() {
        if (this.pos.y < canvas.height - 100 - this.bounds.height) {
            this.offset -= this.velocity.y;
        } else {
            player.resetJump();
        }
    }

    winPins(nbPins) {
        this.nbPepins += nbPins;
        document.getElementById("pepin").innerText = this.nbPepins + " : pepins";
    }

    endGame() {

    }
}
