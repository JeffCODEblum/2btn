var NUM_BULLETS = 8;
function Gun() {
	var fireRate = 400;
	this.lastShot = 0;
	this.bullets = [];
	for (var i = 0; i < NUM_BULLETS; i++){
		this.bullets.push(new Bullet());
	}
	
	this.shoot = function(x, y, theta) {
		if (Date.now() - this.lastShot > fireRate) {
			var randVal, vx, vy;
			for (var j = 0; j < 4; j++) {
				randVal = (Math.floor(Math.random() * 8) - 4)  * Math.PI / 120;
			//	randVal = 0;
				vx = Math.sin(theta + randVal) * 10;
				vy = Math.cos(theta + randVal) * 10;
				
				for (var i = 0; i < this.bullets.length; i++) {
					if (this.bullets[i].status == 0) {
						this.bullets[i].set(x, y, vx, vy);
						this.lastShot = Date.now();
						break;
					}
				}
			}
		}
	}
	
	this.update = function() {
		for (var i = 0; i < this.bullets.length; i++) {
			if (this.bullets[i].status == 1) {
				this.bullets[i].update();
			}
		}
	}
}

function Bullet() {
	this.x = 0;
	this.y = 0;
	this.w = 4;
	this.h = 4;
	this.vx = 0;
	this.vy = 0;
	
	this.status = 0;
	
	this.set = function(x,y,vx,vy) {
		this.x =x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		
		this.status = 1;
	}
	
	this.unset = function() {
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.status = 0;
	}
	
	this.update = function() {
		this.x += this.vx;
		this.y += this.vy;
		
		if (this.x > 480 || this.x < 0 || this.y > 320 || this.y < 0) {
			this.unset();
		}
	}
}