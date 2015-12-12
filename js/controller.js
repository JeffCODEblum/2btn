
document.addEventListener("keydown", function(e) {
	switch(e.keyCode) {
		case 70:
			player.controller.a = true;
			break;
		case 74:
			player.controller.b = true;
			break;
		default:
			break;
	}
}, true);

document.addEventListener("keyup", function(e) {
	switch (e.keyCode) {
		case 70:
			player.controller.a = false;
			break;
		case 74:
			player.controller.b = false;
			break;
		default:
			break;
	}
});