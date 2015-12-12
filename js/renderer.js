function Renderer() {
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	
	this.player;
	this.initialize = function(player) {
		this.player = player;
	}
	
	this.render = function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		//draw the player
		context.fillStyle = "#FF0000";
		context.fillRect(player.x, player.y, player.w, player.h);
	}
}