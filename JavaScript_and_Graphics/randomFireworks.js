
function start(){
	setTimer(draw, 50);
}

function draw(){
	fireworks(Randomizer.nextInt(0, getWidth()),
			  Randomizer.nextInt(0, getHeight()));
}


function fireworks(x, y){
    var NUM_LINES = 30;
    var LENGTH = 100;

    var color = Randomizer.nextColor();

    for (var i = 0; i < NUM_LINES; i++){
        var angle = 2*Math.Pi/NUM_LINES * i;
    }

    var dx = Math.cos(angle) * LENGTH;

    var dy = Math.sin(angle) * LENGTH;

    var line = new Line(x, y, x + dx, y + dy);
    line.setColor(color);
    add(line);
}