class Scene {
    constructor(  sceneNb) {

        this.objects = [];
        this.offsets={
            offsetBg:0,
            offsetMg:0,
            offsetFg:0,
        };
        this.sceneNb = sceneNb;


        this.changeScene(sceneNb);
    }

    update() {
        this.background  = new Image();
        /*
        this.middleground  = new Image();
        this.foreground  = new Image();*/
        this.background.src = this.backgroundSrc;
        /*this.middleground.src = this.middlegroundSrc;
        this.foreground.src = this.foregroundSrc;*/
        ctx.drawImage(this.background, this.offsets.offsetBg, 0, canvas.width, canvas.height);
        /*ctx.drawImage(this.middleground, this.offsets.offsetMg, 0, canvas.width, canvas.height);
        ctx.drawImage(this.foreground, this.offsets.offsetFg, 0, canvas.width, canvas.height);*/
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].update();
            if(this.objects[i] instanceof Pnj){
                this.objects[i].collide(player);
            }
        }

    }

    addObject(object) {
        this.objects.push(object);
    }

    removePnj() {
        for(let i = 0 ; i<this.objects.length;i++){
            if(this.objects[i] instanceof Pnj){
                this.objects.splice(i,1);
            }
        }
    }

    changeScene(nbScene){
        this.sceneNb = nbScene;
        name = SUITESCENE[nbScene];

        switch (name) {
            case "FORET":
                this.backgroundSrc = './js/images/backfull.png';
                pnj.name = "Kiwi";
                pnj.infected = false;
                break;
            case "MAGASIN":
                this.backgroundSrc = './js/images/bar.png';
                pnj.name = "Tomate";

                break;
            case "BIBLIO":
                this.backgroundSrc = './js/images/bar.png';
                pnj.name = "Pomme";
                break;
            case "BAR":
                this.backgroundSrc = './js/images/bar.png';
                pnj.name = "Poire";
                pnj.pos = {x: 300, y: 100};
                pnj.infected = false;

                player.protected = false;
                break;
        }
        for(let i=0; i<player.history.length; i++) {
            if (player.history.pnj === pnj.name) {
                pnj.triggered = true;
            }
        }
        document.getElementById("objectifName").innerText = "Aller parler à " + pnj.name;

    }


}
