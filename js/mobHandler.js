var NUM_MOBS = 8;

function MobHandler() {
	this.mobs = [];
	this.lastSpawn = 0;
	var mob;
	for (var i = 0; i < NUM_MOBS; i++) {
		mob = new Mob();
		this.mobs.push(mob);
	}
	
	this.initialize = function(player) {
		for (var i = 0; i < this.mobs.length; i++) {
			this.mobs[i].initialize(player);
		}
	}
	
	this.update = function() {
		for (var i = 0; i < this.mobs.length; i++) {
			this.mobs[i].update();
		}
		
		if (Date.now() - this.lastSpawn > 4000) {
			if (Math.floor(Math.random() * 2) == 1) {
				this.spawn();
				this.lastSpawn = Date.now();
			}
		}
	}
	
	this.spawn = function() {
		
		var randx, randy;
		
		while (1) {
			randx = (Math.floor(Math.random() * 28) + 1) * 16;
			randy = (Math.floor(Math.random() * 19) + 1) * 16;
			
			var spotFree = true;
			for (var i =0; i< this.mobs.length; i++) {
				if (this.mobs[i].status != 0) {
					if (this.mobs[i].x == randx && this.mobs[i].y == randy) {
						spotFree = false;
					}
				}
			}
			if (spotFree) break;
		}
		
		for (var i = 0; i < NUM_MOBS; i++) {
			if (this.mobs[i].status == 0) {
				this.mobs[i].spawn(randx, randy);
				break;
			}
		}
	}
}

function Mob() {
	this.x = 0;
	this.y = 0;
	this.hp = 0;
	this.status = 0;
	
	this.player;
	this.initialize = function(player) {
		this.player = player;
	}
	
	var bullets;
	this.update = function() {
		bullets = this.player.gun.bullets;
		for (var i = 0; i < bullets.length; i++) {
			if (bullets[i].status == 1) {
				if (bullets[i].x < this.x + 16 && bullets[i].x + 4 > this.x && bullets[i].y < this.y + 16 && bullets[i].y + 4 > this.y) {
					this.kill();
					bullets[i].unset();
				}
			}
		}
	}
	
	this.spawn = function(x, y) {
		this.x = x;
		this.y = y;
		this.hp = 10;
		this.status = 1;
	}
	
	this.kill = function() {
		this.x = 0;
		this.y = 0;
		this.hp = 0;
		this.status = 0;
	}
}