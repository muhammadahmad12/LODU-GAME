var a = Math.floor(Math.random() * 6);
var b = Math.floor(Math.random() * 6);
if (a == 0) {
	var a = 1;
}
if (b == 0) {
	var b = 1;
}
if (a !== 0 || b !== 0) {
	$("#one").append(`<img src='dice${a}.png'>`);
	$("#two").append(`<img src='dice${b}.png'>`);
}
if (a > b) {
	$("#play").text("player one win");
}
if (a < b) {
	$("#play").text("player two win");
}
if (a == b) {
	$("#play").text("match draw");
}