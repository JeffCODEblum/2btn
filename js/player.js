var TURN_SPEED = 0.2;
function Player() {
	this.x = 0;
	this.y = 0;
	this.h = 16;
	this.w = 16;
	this.theta = Math.PI;
	this.vx = 0;
	this.vy = 0;
	
	this.hp = 100;
	
	this.gun = new Gun();
	
	this.controller = {
		a: false,
		b: false
	};
	
	this.spawn = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	var bvx, bvy;
	this.update = function() {
		this.gun.update();
		this. vx = Math.sin(this.theta) * 4;
		this. vy = Math.cos(this.theta) * 4;
		
		this.x += this.vx;
		this.y += this.vy;
		
		if (this.x < 16) {
			this.x = 16;
		}
		if (this.x > 480 - 16) {
			this.x = 480 - 16;
		}
		if (this.y < 16) {
			this.y = 16;
		}
		if (this.y > 320 - 16) {
			this.y = 320 - 16;
		}
		
		if (this.controller.a) {
			this.theta += (Math.PI / 6) * TURN_SPEED;
		}
		if (this.controller.b) {
			bvx = Math.sin(this.theta) * 8;
			bvy = Math.cos(this.theta) * 8;
			this.gun.shoot(this.x, this.y, this.theta);
		}
				
		if (this.x > 480) this.x -= 480;
		if (this.x < 0) this.x += 480;
		if (this.y > 320) this.y -= 320;
		if (this.y < 0) this.y += 320;
	}
}