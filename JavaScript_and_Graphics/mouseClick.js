function start(){
    mouseClickMethod(drawCircle);
}

function drawCircle(e){
    var circle = New circle(20);
    circle.setPosition(e.getX(), e.getY());
    add(circle);
}


// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8;
var PUPIL_RIGHT_OFFSET = 20;
var EYE_RADIUS = 10;
var EYE_OFFSET = 14;

/* This program draws a randomly colored ghost
 * whenever the user clicks the mouse. */
function start(){
	mouseClickMethod(makeGhost);
}

/* This is the callback drawing function. All we do here
 * is make a call to our drawGhost function with a random
 * position and random color. 
 *
 * The parameter e describes information about the click event.
 * More specifically, e has information about the x and y location
 * of the click, and we can get access to those coordinates using
 * e.getX() and e.getY().
 */
function makeGhost(e){
	drawGhost(e.getX(), e.getY(),
                  Randomizer.nextColor());
}

/* This is a general draw circle function, which accepts any
 * radius, color, and x, y position. */
function drawCircle(radius, color, x, y){
	var circle = new Circle(radius);
	circle.setColor(color);
	circle.setPosition(x, y);
	add(circle);
}

/* This is a general draw rectangle function, which takes as
 * parameters the width, height, color, and (x,y) location of
 * the top left corner of the rectangle. */
function drawRect(width, height, color, x, y){
	var rect = new Rectangle(width, height);
	rect.setColor(color);
	rect.setPosition(x, y);
	add(rect);
}

/* This function draws a ghost whose head is centered at position
 * (cx, cy) and whose body is determined by the color parameter.
 */
function drawGhost(cx, cy, color){
	drawCircle(HEAD_RADIUS, color, cx, cy);
	drawRect(BODY_WIDTH, BODY_HEIGHT, 
			 color, cx - BODY_WIDTH / 2, cy);
		
	// This is a bit more confusing since it
	// draws a ghost with any number of feet
	for(var i = 0; i < NUM_FEET; i++){
		var start = -NUM_FEET + 1 + (i*2);
		drawCircle(FOOT_RADIUS, color, 
				   cx + start*FOOT_RADIUS, 
				   cy + BODY_HEIGHT);
	}
	
	drawCircle(EYE_RADIUS, Color.white, 
               cx - EYE_OFFSET, cy);
	drawCircle(EYE_RADIUS, Color.white, 
			   cx + EYE_OFFSET, cy);
	
	drawCircle(PUPIL_RADIUS, Color.blue, 
			   cx - PUPIL_LEFT_OFFSET, cy);
	drawCircle(PUPIL_RADIUS, Color.blue, 
			   cx + PUPIL_RIGHT_OFFSET, cy); 
}