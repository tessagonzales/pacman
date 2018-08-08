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

// making more cherries
function createCherries() {
    let cherryArr = [];

    for (let i=0; i<=100; i++) {
        let randomX = Math.floor(Math.random() * canvas.width);
        let randomY = Math.floor(Math.random() * canvas.height);
        cherryArr.push(new Food(randomX, randomY, 'red'))
    }
    console.log(cherryArr)
    return cherryArr
}
createCherries();
let cherryList = createCherries()

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

// cherry draw
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