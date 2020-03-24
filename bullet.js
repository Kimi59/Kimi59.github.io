class bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.w = 10;
        this.h = 10;

    }
    draw() {
        img(sprites.PlayerBullet, this.x, this.y);
    }

    move() {
        if (dead === false) {
            this.y -= this.speed;
            for (var i = 0; i < enemybullets.length; i++) {
                if (rectrect(this, enemybullets[i])) {
                    enemybullets.splice(i, 1);
                }
            }
        } 
        }
    }

var bullets = [];

function updateBullets() {
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].move();
    }
}

function drawBullets() {
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].draw();
    }
}
