
var RADIUS = 100;


function start() {
    var ball = new Circle(RADIUS);
    updateBall(); // set random initial position and color
    add(ball); // add the ball to the screen once   
    setTimer(updateBall, 100); // update ball every 100ms
    
}

function updateBall() {
    ball.setPosition(Randomizer.nextInt(RADIUS,getWidth()-RADIUS), Randomizer.nextInt(RADIUS, getHeight()-RADIUS)); // set random position.
    ball.setColor(Randomizer.nextColor()); // set random color
}



/*
var RADIUS = 100;

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

// Constants
var CIRCLES_PER_SPLATTER = 20;
var MIN_RADIUS = 5;
var MAX_RADIUS = 25;
var DELAY = 500;

/* This program creates a paint splatter.
* It's art. */
function start(){
   setTimer(updateCircle, DELAY);
}


function updateCircle(){
   drawCircle(Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS),
               Randomizer.nextColor(),
               Randomizer.nextInt(0, getWidth()),
               Randomizer.nextInt(0, getHeight()));
               
 

}

function drawCircle(radius, color, x, y){
   var circle = new Circle(radius);
   circle.setPosition(x,y);
   circle.setColor(color);
   add(circle);
}