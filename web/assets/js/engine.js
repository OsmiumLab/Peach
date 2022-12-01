const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

//set width and height of canvas to the width and height of the window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


const player = new Sprite({
    pos: {x: 0, y: 0},
    velocity: {x:10, y: 10}
});

const KEYS = [];

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            KEYS['up'] = true;
            break;
        case 'ArrowDown':
            KEYS['down'] = true;
            break;
        case 'ArrowLeft':
            KEYS['left'] = true;
            break;
        case 'ArrowRight':
            KEYS['right'] = true;
            break;
    }
});

let lastkey = '';

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            KEYS['up'] = false;
            lastkey = 'up';
            break;
        case 'ArrowDown':
            KEYS['down'] = false;
            lastkey = 'down';
            break;
        case 'ArrowLeft':
            KEYS['left'] = false;
            lastkey = 'left';
            break;
        case 'ArrowRight':
            KEYS['right'] = false;
            lastkey = 'right';
            break;
    }
});

//background

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth * 2;

});




const scene = new Scene('blue',2);
scene.addObject(player);


function animate() {
    window.requestAnimationFrame(animate);
    if(KEYS['up']) {

        player.jump();
    }
    if(KEYS['down']) {

    }
    if(KEYS['left']) {
        player.moveLeft();
    }
    if(KEYS['right']) {
        player.moveRight();
    }
    player.fall();
    scene.update();
}

animate();
