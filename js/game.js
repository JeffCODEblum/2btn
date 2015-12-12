//
//
//		My Game Yo!
//
//			-JeffCODEblum

var mobHandler = new MobHandler();
var player = new Player();
var renderer = new Renderer();

renderer.initialize(player, mobHandler);

player.spawn(480/2, 320/2);
mobHandler.spawn();

function RunGame() {
	player.update();
	Draw();
	setTimeout(RunGame, 1000/60);
}
RunGame();

function Draw() {
	renderer.render();
}
