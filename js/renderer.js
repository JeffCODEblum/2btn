var PSIZE = 16;
var graphics = new Image();
graphics.src = './graphics.png';
function Renderer() {
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	
	this.player, mobHandler, powerUpHandler;
	this.initialize = function(player, mobHandler, powerUpHandler) {
		this.player = player;
		this.mobHandler = mobHandler;
		this.powerUpHandler = powerUpHandler;
	}
	
	var bullets, mobs;
	this.render = function(gameMode) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		switch (gameMode) {
			case 0:
			
			case 1:
			
				context.drawImage(graphics, 0, 0, 480, 320, 0, 0, 480, 320);
				context.drawImage(graphics, 0, 480, 300, 200, 80, 0, 300, 200);
				
				break;
			case 2:
			
				context.drawImage(graphics, 0, 0, 480, 320, 0, 0, 480, 320);
			
				mobs = mobHandler.mobs;
				for (var i = 0; i < mobs.length; i++) {
					if (mobs[i].status == 1) {
						context.drawImage(graphics, mobs[i].frame * mobs[i].w, 320, 32, 32, mobs[i].x, mobs[i].y, 32, 32);
					}
					
				}
				
				if (powerUpHandler.powerUp.status == 1) {
					context.drawImage(graphics, 0, 320 + 64, 32, 32, powerUpHandler.powerUp.x, powerUpHandler.powerUp.y, 32, 32);
				}
				
				context.drawImage(graphics, player.frame * 32, 320 + 32, 32, 32, player.x - player.w/2, player.y - player.h/2, player.w, player.h);
				
				context.fillStyle = "#FF0000";
				bullets = player.gun.bullets;
				for (var i = 0; i < bullets.length; i++) {
					if (bullets[i].status == 1) context.fillRect(bullets[i].x, bullets[i].y, bullets[i].w, bullets[i].h);
				}
				
				context.fillStyle = "#222222";
				context.fillRect(0, 0, 480, 32);
				
				context.fillStyle = "#FF0000";
				context.fillRect(4, 4, 2 * player.hp, 24);
				
				context.drawImage(graphics, 0, 320 + 96, 128, 32, 480 - 256, 0, 128, 32);
				context.drawImage(graphics, 0, 320 + 128, 128, 30, 480 - 120, 2, 128, 30);
				
				context.fillStyle = "#FFFFFF";
				context.font = "30px Arial";
				context.fillText(player.score, 480 - 150, 24);
				
				context.fillStyle = "#FFCC00";
				context.fillText(player.best, 480 - 40, 24);
				break;
			default:
				break;
		}
			
	}
}