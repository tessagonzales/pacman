let canvas = document.getElementById("game")
let ctx = canvas.getContext("2d")

// create pacman
class Character {
    constructor() {
        this.alive = true;
        this.x= 0;
        this.y= 0;
        this.diameter = 15
        this.color = 'yellow'
    }
}

// create cherry
class Food {
    constructor(x,y, color) {
        this.alive = true;
        this.x = x;
        this.y = y;
        this.color = color;
        this.diameter = 5
    }
}

let pacman = new Character();
let cherry = new Food(300, 300, 'red', 5);

function createCherry() {
    let cherryArr = [];
    let randomX = Math.random() * canvas.width;
    let randonY = Math.random() * canvas.height;

    for (let i=0; i<=100; i++) {
        cherryArr.push(new Food(randomX, randonY, 'red'))
    }
    return cherryArr
}

// ctx draw
// pacman draw
function drawPacman() {
    ctx.beginPath();
    ctx.arc(pacman.x, pacman.y, pacman.diameter, 0, Math.PI * 2)
    ctx.fillStyle = pacman.color
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

// cherry drtaw
function drawCherry() {
    ctx.beginPath();
    ctx.arc(cherry.x, cherry.y, cherry.diameter, 0, Math.PI * 2)
    ctx.fillStyle = cherry.color
    ctx.fill()
    ctx.closePath()
}

function draw () {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawPacman();
    drawCherry();
    createCherry();
}

// identfy keys
document.addEventListener('keydown', (e) => {
    switch(e.key) {
       case "ArrowUp":
           pacman.y -= 10;
           break;
       case "ArrowDown":
           pacman.y += 10;
           break;
       case "ArrowRight":
           pacman.x += 10 ;
           break;
       case "ArrowLeft":
           pacman.x -= 10 ;
           break;
       default:
           break;
   }
})

setInterval(draw, 5)