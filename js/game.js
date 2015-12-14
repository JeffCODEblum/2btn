//
//
//		My Game Yo!
//
//			-JeffCODEblum

var mobHandler = new MobHandler();
var powerUpHandler = new PowerUpHandler;
var player = new Player();
var renderer = new Renderer();

renderer.initialize(player, mobHandler, powerUpHandler);
mobHandler.initialize(player, powerUpHandler);
powerUpHandler.initialize(player);

var gameMode = 0;
var lastEnd = 0;

function RunGame() {
	if (gameMode == 0) {
		if (Date.now() - lastEnd > 1200) {
			gameMode = 1;
		}
	}
	if (gameMode == 1) {
		if(player.controller.a || player.controller.b) {
			gameMode = 2;
			mobHandler.reset();
			player.spawn(480/2, 320/2);
		}
	}
	else if (gameMode == 2) {
		player.update();
		mobHandler.update();
		powerUpHandler.update();
		if (player.status == 3) {
			gameMode = 0;
			lastEnd = Date.now();
		}
	}
	Draw();
	setTimeout(RunGame, 1000/60);
}
RunGame();

function Draw() {
	renderer.render(gameMode);
}
