const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

//set width and height of canvas to the width and height of the window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth*2;
});

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

