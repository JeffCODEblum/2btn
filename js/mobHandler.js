var NUM_MOBS = 8;

function MobHandler() {
	this.mobs = [];
	var mob;
	for (var i = 0; i < NUM_MOBS; i++) {
		mob = new Mob();
		this.mobs.push(mob);
	}
	
	this.spawn = function() {
		
		var randx = Math.floor(Math.random() * (480 / 16)) * 16;
		var randy = Math.floor(Math.random() * (320 / 16)) * 16;
		
		for (var i = 0; i < NUM_MOBS; i++) {
			if (this.mobs[i].status == 0) {
				this.mobs[i].spawn(randx, randy);
			}
		}
	}
}

function Mob() {
	this.x = 0;
	this.y = 0;
	this.hp = 0;
	this.status = 0;
	
	this.spawn = function(x, y) {
		this.x = x;
		this.y = y;
		this.hp = 10;
		this.status = 1;
	}
}