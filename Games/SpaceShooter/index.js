images = [
	"Art/",
	"Enemy.png",
	"EnemyBullet.png",
	"MainCharacter.png",
	"PlayerBullet.png",
	"texture.png"
];

function onAssetsLoaded() {
	cursor.player = player.cursor;
	if (screenSize == "1:1") {
		canvasScale = 1
	}
}

function draw() {
	img(sprites.texture, 50, 50, 1, 6, 7);
	drawBullets();
	drawEnemyBullets();
	drawEnemy();
	score();
	img(sprites.MainCharacter, player.x, player.y, 0, 1, 1);
}

function update() {
	if (dead === false) {
		if ((keyDown[k.w] || keyDown[k.UP])) {
			player.y -= 2.5;
		}
		if ((keyDown[k.s] || keyDown[k.DOWN])) {
			player.y += 2.5;
		}
		if ((keyDown[k.d] || keyDown[k.RIGHT])) {
			player.x += 2.5;
		}
		if ((keyDown[k.a] || keyDown[k.LEFT])) {
			player.x -= 2.5;
		}
		if ((keyPress[k.SPACE]) || mousePress[0]) {
			bullets.push(new bullet(player.x - 17, player.y));
			bullets.push(new bullet(player.x + 17, player.y));
		}
		if (player.x + player.w / 2 > border.right) {
			player.x -= 2.5;
		}
		if (player.x - player.w / 2 < border.left) {
			player.x += 2.5;
		}
		if (player.y + player.h / 2 > border.bottom) {
			player.y -= 2.5;
		}
		if (player.y - player.h / 2 < border.top) {
			player.y += 2.5;
		}
		if (player.health <= 0) {
			player.x = 450;
			player.y = 550;
			dead = true;
			bullets =[];
			enemybullets =[];
			enemies = [];
		}
	}
	if (dead === false) {
		updateBullets();
		updateEnemy();
		updateEnemyBullets();
		score();
		if (rand(1, 150) === 42) {
			spawnEnemy();
		}
	}
}

function spawnEnemy() {
	enemies.push(new Enemy(rand(border.left, border.right), border.top));
}

function score() {
	text("Score: " + scores, 0, 0, "white", 2);
	text("HP: " + player.health, 0, 20, "red", 2);
}

setup(60);

