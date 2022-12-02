const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

//set width and height of canvas to the width and height of the window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


const player = new Player({
    pos: {x: canvas.width / 2, y: 500},
    velocity: {x: 10, y: 10},
    bounds: {
        height: 50,
        width: 50
    }
});

const pnj = new Pnj({
    posX: 0,
    bounds: {height: 50, width: 50},
    choices: {
        choice1: "Je suis timide",
        choice2: "Faisons l'amour",
    },
    name : "Roger",
    infected : 1
});

let currentPnj;

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
        case 'e':
            KEYS['e'] = true;
            break;
    }
});


document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            KEYS['up'] = false;
            break;
        case 'ArrowDown':
            KEYS['down'] = false;
            break;
        case 'ArrowLeft':
            KEYS['left'] = false;
            break;
        case 'ArrowRight':
            KEYS['right'] = false;
            break;
        case 'e':
            KEYS['e'] = false;
            break;

    }
});

document.getElementById("choix1").addEventListener("mousedown", function () {
    player.chose(document.getElementById("choix1").innerHTML, 1);
});

document.getElementById("choix2").addEventListener("mousedown", function () {
    player.chose(document.getElementById("choix2").innerHTML , 2);
});

//send a request to the server to provide the player's position with GET method


//background

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth * 2;

});

const scene = new Scene('blue', 2);
scene.addObject(player);
scene.addObject(pnj)

//listen to click once and use animate function
canvas.addEventListener('click', () => {
    animate();
}, {once: true});


function animate() {
    window.requestAnimationFrame(animate);
    if (KEYS['up']) {

        player.jump();
    }
    if (KEYS['down']) {

    }
    if (KEYS['left']) {
        player.moveLeft();
    }
    if (KEYS['right']) {
        player.moveRight();
    }
    player.fall();
    scene.update();
}

