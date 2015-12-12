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

function RunGame() {
	player.update();
	mobHandler.update();
	Draw();
	setTimeout(RunGame, 1000/60);
}
RunGame();

function Draw() {
	renderer.render();
}
