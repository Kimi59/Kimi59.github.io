class Enemybullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.w = 10;
        this.h = 10;

    }
    draw() {
        img(sprites.EnemyBullet, this.x, this.y);
    }

    move() {
        this.y += this.speed;
    }
}



var enemybullets = [];

function updateEnemyBullets() {
    if (dead === false) {


        for (var i = 0; i < enemybullets.length; i++) {
            enemybullets[i].move();
            if (rectrect(enemybullets[i], player)) {
                player.health--;
                enemybullets.splice(i);
            }
        }
    } 
}

function drawEnemyBullets() {
    if (dead === false) {
        for (var i = 0; i < enemybullets.length; i++) {
            enemybullets[i].draw();
        }
    }
}

