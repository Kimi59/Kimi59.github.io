function onAssetsLoaded() {
    if (screenSize == "1:1") {
        canvasScale = 1;
    }
}

function draw() {
    
    img(sprites.map, 450, 300, 0, 1, 1);
    img(sprites.weakpartner, weakpartner.x, weakpartner.y, weakpartner.direction, 1, 1);
    img(sprites.player, player.x, player.y, player.direction, 1, 1);
    img(sprites.bow, (player.x - bow.x), (player.y - bow.y), bow.direction, 1, 1);
    drawArrow();
    drawEnemy();
    text("Score " + scores, border.x, border.y + 300, "white", 1, );
    text("Health:" + weakpartner.hp, weakpartner.x - 10,weakpartner.y + 5, "white", 1);
}

function update() {
    if (dead === false) {
        if (keyDown[k.w]) {
            player.y -= player.speed;
            player.direction = 0;
            weakpartner.y -= weakpartner.speed;
            weakpartner.direction = 0;
            bow.direction = 1.57;
            bow.x = 10; bow.y = 5;
            dirmove = 0;
        }
        if (keyDown[k.s]) {
            player.y += player.speed;
            player.direction = 3.14;
            weakpartner.y += weakpartner.speed;
            weakpartner.direction = 3.14;
            bow.direction = -1.57;
            bow.x = 10; bow.y = -5;
            dirmove = 1;
        }
        if (keyDown[k.d]) {
            player.x += player.speed;
            player.direction = 1.57;
            weakpartner.x += weakpartner.speed;
            weakpartner.direction = 1.57;
            bow.direction = -3.14;
            bow.x = -5; bow.y = -10;
            dirmove = 2;
        }

        if (keyDown[k.a]) {
            player.x -= player.speed;
            player.direction = -1.57;
            weakpartner.x -= weakpartner.speed;
            weakpartner.direction = -1.57;
            bow.direction = 6.28;
            bow.x = 5; bow.y = -10;
            dirmove = 3;
        }
        if (mousePress[0]) {
            parrow.push(new PlayerArrow(player.x, player.y));
        }
        if (player.x + player.w / 2 > border.right) {
            player.x -= player.speed;
        }
        if (player.x - player.w / 2 < border.left) {
            player.x += player.speed;
        }
        if (player.y + player.h / 2 > border.bottom) {
            player.y -= player.speed;
        }
        if (player.y - player.h / 2 < border.top) {
            player.y += player.speed;
        }
        if (weakpartner.x + weakpartner.w / 2 > border.right) {
            weakpartner.x -= weakpartner.speed;
        }
        if (weakpartner.x - weakpartner.w / 2 < border.left) {
            weakpartner.x += weakpartner.speed;
        }
        if (weakpartner.y + weakpartner.h / 2 > border.bottom) {
            weakpartner.y -= weakpartner.speed;
        }
        if (weakpartner.y - weakpartner.h / 2 < border.top) {
            weakpartner.y += weakpartner.speed;
        }
        if (weakpartner.hp <= 0 || player.hp <= 0) {
            camera.zoom -= 5;
            text("Your score is " + scores, 400, 300, "white", 1,);
            player.x = 400; player.y = 550;
            weakpartner.x = 1000; weakpartner.y = 1000;
            dead = true;
            enemies = [];
            parrow = [];
        }
        centerCameraOn(player.x, player.y)
        if (rand(1, 150) === 42) {
            spawnEnemy();
        }
        updateEnemy();
        enemyPartner();
        drawArrow();
        enemyPlayer();
        parrowborder();
        updatePlayerArrow();
    }
}
function spawnEnemy() {
    enemies.push(new Enemy(rand(border.left, border.right), rand(border.top, (border.bottom - 50))));
}

function enemyAI(enemy) {
    enemy.angle = pointTo(enemy, weakpartner);
    enemy.v = { x: Math.cos(enemy.angle) * enemy.speed, y: Math.sin(enemy.angle) * enemy.speed };
    enemy.x += enemy.v.x;
    enemy.y += enemy.v.y;
}

function enemyPartner() {
    for (var i = 0; i < enemies.length; i++) {
        if (rectrect(weakpartner, enemies[i])) {
            enemies.splice(i, 1);
            weakpartner.hp--;
            // play(sounds.hit);
        }
    }
}

function parrowborder() {
    for (var i = 0; i < parrow.length; i++) {
        if (parrow[i].x >= border.right || parrow[i].x <= border.left || parrow[i].y >= border.bottom || parrow[i].y <= border.top) {
            parrow.splice(i, 1);
        }
    }
}

function enemyPlayer() {
    for (var i = 0; i < enemies.length; i++) {
        if (rectrect(player, enemies)) {
            enemies.splice(i, 1);
            player.health--;
        }
    }
}
//camera.zoom += 2;

setup(60);