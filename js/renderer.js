function Renderer() {
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	
	this.player;
	this.initialize = function(player) {
		this.player = player;
	}
	
	var bullets;
	this.render = function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		//draw the player
		context.fillStyle = "#FF0000";
		context.fillRect(player.x, player.y, player.w, player.h);
		
		bullets = player.gun.bullets;
		for (var i = 0; i < bullets.length; i++) {
			if (bullets[i].status == 1) context.fillRect(bullets[i].x, bullets[i].y, bullets[i].w, bullets[i].h);
		}
	}
}