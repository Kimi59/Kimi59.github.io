class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 1.25;
        this.w = 10;
        this.h = 10;
        this.timer = 0;
        this.angle = 0;
        this.v = { x: 0, y: 0 };
    }

    draw() {
        rect(this.x, this.y, this.w, this.h, "red");
    }

    update() {
        enemyAI(this);
    }

    checkIfHittingArrow() {
        for (var j = 0; j < parrow.length; j++) {
            if (rectrect(this, parrow[j])) {
                return true;
            }
        }
        return false;
    }
}
var enemies = [];

function drawEnemy() {
    if (dead === false) {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].draw();
        }
    }
}

function updateEnemy() {
    if (dead === false) {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].update();
            // if hitting arrow, remove enemy
            if(enemies[i].checkIfHittingArrow()) {
                enemies.splice(i,1);
                scores++;
                i--;
            }
        }
    }
}

class PlayerArrow {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 3.5;
        this.w = 14;
        this.h = 3;
        this.direction = 0;
        this.dirmove = 0;
        this.timer = 0;
    }
    draw() {
        img(sprites.arrow,(this.x - changevaluex),(this.y - changevaluey), (player.direction + 1.57), 1, 1);
    }

    update() {
        if (dirmove === 0) {//up
            this.y -= this.speed;
            changevaluex = 10;
            changevaluey = 5;
        }
        if (dirmove === 1) {//down
            this.y += this.speed;
            changevaluex = 10;
            changevaluey = -5;
        }
        if (dirmove === 2) {//right
            this.x += this.speed;
            changevaluey = -10;
            changevaluex = -5;
        }
        if (dirmove === 3) {//left
            this.x -= this.speed;
            changevaluey = -10;
            changevaluex = 5;
        }
        this.timer++;
        if (this.timer === 50) {
            this.timer = 0;
            parrow = [];
        }
    }
}

var parrow = [];

function drawArrow() {
    for (var i = 0; i < parrow.length; i++) {
        parrow[i].draw();
    }
}

function updatePlayerArrow() {
    if (dead === false) {
        for (var i = 0; i < parrow.length; i++) {
            parrow[i].update();
        }
    }
}
