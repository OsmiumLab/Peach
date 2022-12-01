class Scene {
    constructor(backgroundColor, gravity) {
        this.objects = [];
        this.backgroundColor = backgroundColor;
    }

    update() {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.rect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < this.objects.length; i++) {

            this.objects[i].update();
        }

    }

    addObject(object) {
        this.objects.push(object);
    }
}
