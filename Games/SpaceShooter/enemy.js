class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 1.5;
        this.w = 47;
        this.h = 33;
        this.health = 10;
        this.timer = 0
    }
    draw() {
        img(sprites.Enemy, this.x, this.y, 0, 1, -1);
    }

    update() {
        this.y += this.speed;
        this.timer++;
        if (this.timer === 75) {
            this.timer = 0;
            enemybullets.push(new Enemybullet(this.x - 17, this.y));
            enemybullets.push(new Enemybullet(this.x + 17, this.y));
        }
        for (var i = 0; i < bullets.length; i++) {
            if (rectrect(this, bullets[i])) {
                this.health--;
                bullets.splice(i, 1);
                scores++;
            }

        }
    }

}

var enemies = [];

function drawEnemy() {
    if (dead === false) {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].draw();
        }
    } else {
        text("Game Over", 450, 300, "white", 3);
        text("Your Score was " + scores, 450, 350, "white", 3);
    }
}

function updateEnemy() {
    if (dead === false) {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].update();
            if (enemies[i].health <= 0) {
                enemies.splice(i, 1);
            }
            if (rectrect(enemies[i], player)) {
                player.health = 0;
            }
        }
    }
}
