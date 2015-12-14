

function PowerUpHandler() {
	this.powerUp = new PowerUp();
	
	this.lastSpawn = 0;
	
	this.initialize = function(player, mapHandler) {
		this.powerUp.initialize(player);
	}
	
	this.reset = function() {
		this.powerUp.reset();
	}
	
	this.spawn = function(x, y) {
		this.powerUp.spawn(x, y);
	}
	
	this.update = function() {
		this.powerUp.update();
	}
}

function PowerUp() {
	this.x = 0;
	this.y = 0;
	this.w = 32;
	this.h = 32;
	this.status = 0;
	
	this.player;
	this.initialize = function(player) {
		this.player =player;
	}
	
	this.reset = function() {
		this.x = 0;
		this.y = 0;
		this.status = 0;
	}
	
	this.spawn = function(x, y) {
		this.x = x;
		this.y = y;
		this.status = 1;
	}
	
	this.update = function() {
		if (this.player.x + this.player.w/2 > this.x && this.player.x - this.player.w/2 < this.x + this.w && this.player.y + this.player.h/2 > this.y && this.player.y - this.player.h/2 < this.y + this.h) {
			player.hp += 60;
			if (player.hp > 100) player.hp = 100;
			document.getElementById('powerUpSound').play();
			this.reset();
		}
	}
	
}