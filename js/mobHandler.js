var NUM_MOBS = 48;
var MSIZE = 32;
function MobHandler() {
	this.mobs = [];
	this.lastSpawn = 0;
	
	var reservex = -1;
	var reservey = -1;
	
	var mob;
	for (var i = 0; i < NUM_MOBS; i++) {
		mob = new Mob();
		this.mobs.push(mob);
	}
	
	this.initialize = function(player, powerUpHandler) {
		for (var i = 0; i < this.mobs.length; i++) {
			this.mobs[i].initialize(player, powerUpHandler);
		}
	}
	
	this.reset = function() {
		for (var i =0; i < this.mobs.length; i++) {
			this.mobs[i].reset();
		}
	}
	
	this.update = function() {
		for (var i = 0; i < this.mobs.length; i++) {
			if (this.mobs[i].status == 1) this.mobs[i].update();
		}
		
		if (Date.now() - this.lastSpawn > 1000) {
			if (Math.floor(Math.random() * 2) == 1) {
				this.spawn();
				this.lastSpawn = Date.now();
			}
		}
	}
	
	this.reserve = function(x, y) {
		reservex = x;
		reservey = y;
	}
	
	this.spawn = function() {
		
		var randx, randy;
		
		while (1) {
			randx = (Math.floor(Math.random() * 11)) * MSIZE;
			randy = (Math.floor(Math.random() * 6) + 4) * MSIZE;
			
			var spotFree = this.checkSpace(randx, randy);
			if (spotFree) break;
		}
		
		for (var i = 0; i < NUM_MOBS; i++) {
			if (this.mobs[i].status == 0) {
				this.mobs[i].spawn(randx, randy);
				break;
			}
		}
	}
	
	this.checkSpace = function(x, y) {
		var spotFree = true;
		if (x == reservex && y == reservey) return false;
		for (var i = 0; i < this.mobs.length; i++) {
			if (this.mobs[i].status != 0) {
				if (this.mobs[i].x == x && this.mobs[i].y == y) {
					spotFree = false;
				}
			}
		}
		return spotFree;
	}
}

function Mob() {
	this.x = 0;
	this.y = 0;
	this.w = MSIZE;
	this.h = MSIZE;
	this.hp = 0;
	this.status = 0;
	this.frame = 0;
	this.time = 0;
	
	this.lastAttack = 0;
	
	this.player, powerUpHandler;
	this.initialize = function(player, powerUpHandler) {
		this.player = player;
		this.powerUpHandler = powerUpHandler;
	}
	
	var bullets;
	this.update = function() {
		
		if (this.frame > 0) {
			this.time++;
			if(this.time > 16) {
				this.time = 0;
				this.frame--;
				if (this.frame <0) {
					this.frame = 0;
				}
			}
		}
		
		bullets = this.player.gun.bullets;
		for (var i = 0; i < bullets.length; i++) {
			if (bullets[i].status == 1) {
				if (bullets[i].x < this.x + this.w && bullets[i].x + bullets[i].w > this.x && bullets[i].y < this.y + this.h && bullets[i].y + bullets[i].h > this.y) {
					bullets[i].unset();
					if (Math.floor(Math.random() * 7) == 0) {
						this.powerUpHandler.spawn(this.x, this.y)
					}
					this.player.score++;
					if (this.player.score > this.player.best) {
						this.player.best = this.player.score;
					}
					this.kill();
				}
			}
		}
		
		if (this.player.x + this.player.w/2 > this.x && this.player.x - this.player.w/2 < this.x + this.w && this.player.y + this.player.h/2 > this.y && this.player.y - this.player.h/2 < this.y + this.h) {
			if (Date.now() - this.lastAttack > 200) {
				this.lastAttack = Date.now();
				if (this.player.hp > 0) document.getElementById('hitSound').play();
				this.player.damage();
			}
		}
	}
	
	this.reset = function() {
		this.x = 0;
		this.y = 0;
		this.status = 0;
	}
	
	this.spawn = function(x, y) {
		this.x = x;
		this.y = y;
		this.hp = 10;
		this.status = 1;
		this.frame = 2;
		this.time = 0;
	}
	
	this.kill = function() {
		this.x = 0;
		this.y = 0;
		this.hp = 0;
		this.status = 0;
		document.getElementById('explosionSound').play();
	}
}
