var TURN_SPEED = 0.2;
function Player() {
	this.x = 0;
	this.y = 0;
	this.h = 16;
	this.w = 16;
	
	this.theta = Math.PI / 2;
	
	this.gun = new Gun();
	
	this.controller = {
		a: false,
		b: false
	};
	
	this.spawn = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	var vx, vy, bvx, bvy;
	this.update = function() {
		this.gun.update();
		vx = Math.sin(this.theta) * 4;
		vy = Math.cos(this.theta) * 4;
		
		this.x += vx;
		this.y += vy;
		
		if (this.controller.a) {
			this.theta += (Math.PI / 6) * TURN_SPEED;
		}
		if (this.controller.b) {
			bvx = Math.sin(this.theta) * 8;
			bvy = Math.cos(this.theta) * 8;
			this.gun.shoot(this.x, this.y, bvx, bvy);
		}
				
		if (this.x > 480) this.x -= 480;
		if (this.x < 0) this.x += 480;
		if (this.y > 320) this.y -= 320;
		if (this.y < 0) this.y += 320;
	}
}