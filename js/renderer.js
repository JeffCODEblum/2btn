function Renderer() {
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	
	this.player, mobHandler;
	this.initialize = function(player, mobHandler) {
		this.player = player;
		this.mobHandler = mobHandler;
	}
	
	var bullets, mobs;
	this.render = function(gameMode) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		switch (gameMode) {
			case 0:
				context.fillStyle = "#000000";
				context.fillRect(20, 20, 440, 280);
				context.fillStyle = "#FFFFFF";
				context.fillRect(30, 30, 420, 260);
				context.fillStyle = "#000000";
				context.fillText("Press 'f' to turn and 'j' to shoot. Press any key to begin.", 50, 50);
				break;
			case 1:
				mobs = mobHandler.mobs;
				for (var i = 0; i < mobs.length; i++) {
					if (mobs[i].status == 1) {
						context.fillStyle = "#00FF00";
						context.fillRect(mobs[i].x, mobs[i].y, 16, 16);
					}
					
				}
				
				context.fillStyle = "#FF0000";
				context.fillRect(player.x - player.w/2, player.y - player.h/2, player.w, player.h);
				
				bullets = player.gun.bullets;
				for (var i = 0; i < bullets.length; i++) {
					if (bullets[i].status == 1) context.fillRect(bullets[i].x, bullets[i].y, bullets[i].w, bullets[i].h);
				}
				
				context.fillStyle = "#222222";
				context.fillRect(0, 0, 480, 16);
				context.fillRect(0, 320 - 16, 480, 16);
				
				context.fillStyle = "#FF0000";
				context.fillRect(2, 2, 2 * player.hp, 12);
				break;
			default:
				break;
		}
			
	}
}