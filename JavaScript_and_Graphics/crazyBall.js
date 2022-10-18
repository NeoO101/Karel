
var RADIUS = 100;
var ball = new Circle(RADIUS);
updateBall(); // set random initial position and color
add(ball); // add the ball to the screen once

function start() {
    setTimer(updateBall, 100); // update ball every 100ms
}

function updateBall() {
    ball.setPosition(Randomizer.nextInt(RADIUS,getWidth()-RADIUS), Randomizer.nextInt(RADIUS, getHeight()-RADIUS)); // set random position.
    ball.setColor(Randomizer.nextColor()); // set random color
}



/*var RADIUS = 100;

var circle ;

var color;

    



function start(){

    
    setTimer(drawCircle, 100);
	
}



function drawCircle(){
    var x1 = Randomizer.nextInt(0 + RADIUS, getWidth() - RADIUS);

    var y1 = Randomizer.nextInt(0 + RADIUS, getHeight() - RADIUS);

    color = Randomizer.nextColor();
    circle = new Circle(RADIUS);
    circle.setPosition(x1, y1);
    circle.setColor(color);
    add(circle);
}

*/