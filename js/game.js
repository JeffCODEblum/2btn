//
//
//		My Game Yo!
//
//			-JeffCODEblum

var mobHandler = new MobHandler();
var player = new Player();
var renderer = new Renderer();

renderer.initialize(player, mobHandler);
mobHandler.initialize(player);

player.spawn(480/2, 320/2);

var gameMode = 0;

document.addEventListener("keydown", function(e) {
	gameMode = 1;
}, true);

function RunGame() {
	if (gameMode == 0) {
		
	}
	else if (gameMode == 1) {
		player.update();
		mobHandler.update();
		
		if (player.hp <= 0) {
			player.hp = 0;
			gameMode = 0;
		}
	}
	Draw();
	setTimeout(RunGame, 1000/60);
}
RunGame();

function Draw() {
	renderer.render(gameMode);
}
