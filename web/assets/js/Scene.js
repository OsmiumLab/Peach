class Scene {
    constructor( gravity) {
        this.objects = [];
        this.offsets={
            offsetBg:0,
            offsetMg:0,
            offsetFg:0,
        };

        this.backgroundSrc = './js/images/back.png';
        this.foregroundSrc = './js/images/front.png';
        this.middlegroundSrc = './js/images/mid.png';

    }

    update() {
        this.background  = new Image();
        this.middleground  = new Image();
        this.foreground  = new Image();
        this.background.src = this.backgroundSrc;
        this.middleground.src = this.middlegroundSrc;
        this.foreground.src = this.foregroundSrc;
        ctx.drawImage(this.background, this.offsets.offsetBg, 0, canvas.width, canvas.height);
        ctx.drawImage(this.middleground, this.offsets.offsetMg, 0, canvas.width, canvas.height);
        ctx.drawImage(this.foreground, this.offsets.offsetFg, 0, canvas.width, canvas.height);
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
}
