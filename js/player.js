var TURN_SPEED = 0.2;
function Player() {
	this.x = 0;
	this.y = 0;
	this.h = 32;
	this.w = 32;
	this.theta = Math.PI;
	this.vx = 0;
	this.vy = 0;
	this.frame = 0;
	this.time = 0;
	
	this.score = 0;
	this.best = 0;
	
	this.lastDeath = 0;
	
	this.status = 0;
	
	this.hp = 100;
	
	this.gun = new Gun();
	
	this.controller = {
		a: false,
		b: false,
	};
	
	this.spawn = function(x, y) {
		this.x = x;
		this.y = y;
		this.hp = 100;
		this.status = 1;
		this.frame = 0;
		this.time = 0;
	}
	
	var bvx, bvy;
	this.update = function() {
		
		if (this.time > 0) {
			this.time--;
			if (this.time == 0) {
				this.frame = 0;
			}
		}
		
		this.gun.update();
		
		this. vx = Math.sin(this.theta) * 4;
		this. vy = Math.cos(this.theta) * 4;
		
		if (this.status == 1) {
			this.x += this.vx;
			this.y += this.vy;
			
			if (this.x < 0) {
				this.x =0;
			}
			if (this.x >480 - this.w/2) {
				this.x =480 - this.w/2;
			}
			if (this.y < 130) {
				this.y = 130;
			}
			if (this.y > 320 - this.h/2) {
				this.y = 320 - this.h/2;
			}
			
			if (this.controller.a) {
				this.theta += (Math.PI / 6) * TURN_SPEED;
			}
			if (this.controller.b) {
				bvx = Math.sin(this.theta) * 8;
				bvy = Math.cos(this.theta) * 8;
				this.gun.shoot(this.x, this.y, this.theta);
			}
		}
		
		else if (this.status == 2 && Date.now() - this.lastDeath > 1200) {
			this.status = 3;
		}
	}
	
	this.damage = function() {
		this.hp -= 20;
		this.frame = 1;
		this.time = 4;
		if (this.hp < 0 && this.status == 1) {
			this.hp = 0;
			this.status = 2;
			this.score = 0;
			this.lastDeath = Date.now();
		}
	}
}