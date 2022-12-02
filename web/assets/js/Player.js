class Player {
    constructor({pos, velocity, bounds}) {
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
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.pos.x, this.pos.y, this.bounds.width, this.bounds.height);
    }

    update() {
        this.pos.y = canvas.height - 100 - this.bounds.height - this.offset;
        this.draw();
    }

    jump() {
        if (!this.isChoosing) {
            if (this.nbJump < 10) {
                this.offset += this.velocity.y * 3;
                this.nbJump++;
            }
        }

    }

    chose(choice, nb) {
        this.isChoosing = false;
        this.history.push({pnj: currentPnj.name, choice: choice});
        console.log(currentPnj.nbPepins)
        document.getElementById("choix").style.display = "none";
        if (nb === 2) {
            if(this.protected){
                if(Math.random()>0.85){
                    if(Math.random()<currentPnj.infecte){
                        this.infecte = true;
                    }
                }
                this.winPins(currentPnj.nbPepins);
            }else{
                if(this.infecte){
                    this.endGame();
                }else{
                    if(Math.random()<currentPnj.infected){
                        this.infecte = true;
                        this.winPins(-currentPnj.nbPepins);
                    }
                }

            }
        }else{
            this.nbPepins += currentPnj.nbPepins;
        }

        console.log(this.history, this.nbPepins, this.infecte);
    }

    resetJump() {
        this.nbJump = 0;
    }

    moveLeft() {
        if (!this.isChoosing) {
            this.pos.x -= this.velocity.x;

        }
    }

    moveRight() {
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
