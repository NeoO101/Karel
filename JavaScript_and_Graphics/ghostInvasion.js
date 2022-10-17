// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8; // This is how far left the pupil should be from the center of the ghost
var PUPIL_RIGHT_OFFSET = 20; // This is how far right the pupil should be from the center of the ghost
var EYE_RADIUS = 10;
var EYE_OFFSET = 14; // This is how far left or right the eye should be from the center of the ghost

/* Write a comment here about your overall program */
function start(){
	// Add your code and your own functions
    var centerX = getWidth()/2;
    var centerY = getHeight()/2;
    drawGhost(centerX, centerY, Color.red);
    drawGhost(100,100, Color.green);
    drawGhost(300, 200, Color.black);
    drawGhost(40, 300, Color.orange);
    drawGhost(300, 50, Color.yellow);

	
}

function drawGhost(centerX, centerY, color){
    drawBody(centerX, centerY, color);
    drawEyeLeft(centerX, centerY);
    drawEyeRight(centerX, centerY);
    drawLeftPupil(centerX, centerY);
    drawRightPupil(centerX, centerY);
    drawFootOne(centerX, centerY, color);
    drawFootTwo(centerX, centerY, color);
    drawFootThree(centerX, centerY, color);
}

function drawFootThree(x1, y1, color){
    var circle = new Circle(FOOT_RADIUS);
    circle.setPosition(x1 + FOOT_RADIUS + (2* FOOT_RADIUS) + (2* FOOT_RADIUS), y1 + BODY_HEIGHT);
    circle.setColor(color);
    add(circle);     
}

function drawFootTwo(x1, y1, color){
    var circle = new Circle(FOOT_RADIUS);
    circle.setPosition(x1 + FOOT_RADIUS + (2* FOOT_RADIUS), y1 + BODY_HEIGHT);
    circle.setColor(color);
    add(circle);     
}


function drawFootOne(x1, y1, color){
    var circle = new Circle(FOOT_RADIUS);
    circle.setPosition(x1 + FOOT_RADIUS, y1 + BODY_HEIGHT);
    circle.setColor(color);
    add(circle);     
}



function drawRightPupil(x1, y1){
    var circle = new Circle(PUPIL_RADIUS);
    circle.setPosition(x1 + HEAD_RADIUS + PUPIL_RIGHT_OFFSET , y1);
    circle.setColor(Color.blue);
    add(circle);   
}

function drawLeftPupil(x1, y1){
    var circle = new Circle(PUPIL_RADIUS);
    circle.setPosition(x1 + HEAD_RADIUS - PUPIL_LEFT_OFFSET, y1);
    circle.setColor(Color.blue);
    add(circle);
    
}


function drawEyeLeft(x1, y1){
    var circle = new Circle(EYE_RADIUS);
    circle.setPosition(x1 + HEAD_RADIUS - EYE_OFFSET, y1);
    circle.setColor(Color.white);
    add(circle);
}

function drawEyeRight(x1, y1){
    var circle = new Circle(EYE_RADIUS);
    circle.setPosition(x1 + HEAD_RADIUS + EYE_OFFSET , y1);
    circle.setColor(Color.white);
    add(circle);  
}


//funtion: Draws a body by combining a rectangle and a circle
function drawBody(centerX, centerY, color){
    drawRect(centerX, centerY, color);
    drawCircle(centerX, centerY, color);    
}


function drawCircle(x1, y1, color){
    var circle = new Circle(HEAD_RADIUS);
    circle.setPosition(x1 + HEAD_RADIUS, y1);
    circle.setColor(color);
    add(circle);
}


function drawRect(x1, y1 ,color){
    var rect = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    rect.setPosition(x1, y1);
    rect.setColor(color);
    add(rect);
}