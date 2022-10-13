//This program doubles several


function start(){

doubleNumber(5);

doubleNumber(12);

var y = 3;

doubleNubmer(y);

    square(5);
	square(10);
	
	var number = 12;
	
	square(number);
    triple(4);
	
	triple(12);
	
	
	var testNumber = 153;
	
	triple(testNumber);

}


var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var DIST_BETWEEN_LIGHTS = 100;
var GRAY_COLOR = "#737071";

function start(){
    
    drawRect(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
    
    drawCircle(LIGHT_RADIUS, Color.red, getWidth() / 2, (getHeight() / 2) - DIST_BETWEEN_LIGHTS);
    
    drawCircle(LIGHT_RADIUS, Color.yellow, getWidth() / 2, getHeight() / 2);
    
    drawCircle(LIGHT_RADIUS, Color.green, getWidth() / 2, (getHeight() / 2) + DIST_BETWEEN_LIGHTS);
    	
}

function drawCircle(radius, color, x, y){
    var circle = new Circle(radius);
    circle.setPosition(x, y);
    circle.setColor(color);
    add(circle);
}

function drawRect(width, height){
    var rect = new Rectangle(width, height);
    rect.setPosition((getWidth() / 2) - (width / 2), (getHeight() / 2) - (height / 2));
    rect.setColor(GRAY_COLOR);
    add(rect);
}

//This function doubles a giv number
//parameters

function doubleNubmer (x){
    var doubleX = 2 * x;
    println(doubleX);
}

//funtion for number square
function square(x){
    
    var squareNumber = x * x;
    println(squareNumber);
}

//tripled function

function triple(x){
    var tripleNumber = x * 3;
    println(tripleNumber);
}

function sum(first, second){
    var total = first + second;
    println(total);
}

function printTriangleArea(base, height){
    var area = 1 / 2 * base * height;
    println(area);
}

var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;

function start(){
    convertHeightToMeters(6, 4);
    convertHeightToMeters(5, 8);
    convertHeightToMeters(5, 2);
	
}

function convertHeightToMeters(feet, inches){
    var feetToInches = FEET_TO_INCHES * feet;
    
    var feetToCm = INCHES_TO_CM * feetToInches; 
    var inchesToCm = INCHES_TO_CM * inches;
    
    var result = (feetToCm + inchesToCm) * CM_TO_METERS;
    
    println(result);

    verticalLine(100, 200);
    verticalLine(200, 100);
    verticalLine(300, 20);

    
}

//Function creates a circle ad adds it to the cavaas
//Prameters: radius, color, X and y of cirlce's center
function drawCircle(radius, color, x, y){
    var circle = new Circle(radius);
    circle.setColor(color);
    circle.setPosition(x, y);
    add(circle);

}
function verticalLine(first, second){
    var line = new Line(first, 0, first, second);
    line.setColor(Color.black);
    add(line);
    
}

var POOL_BALL_RADIUS = 40;
var POOL_BALL_FONT = "30pt Arial";

function start(){
	drawPoolBall(Color.orange, 5, 100, 100);
	drawPoolBall(Color.green, 6, 50, 200);
	drawPoolBall(Color.red, 3, 150, 350);
	drawPoolBall(Color.blue, 2, 250, 140);

	// Add some more pool balls!
}


function drawPoolBall(color, num, x, y){
	var circle = new Circle(POOL_BALL_RADIUS);
	circle.setColor(color);
	circle.setPosition(x, y);
	add(circle);
	
	var text = new Text(num, POOL_BALL_FONT);
	text.setColor(Color.white);
	text.setPosition(x, y);
	add(text);
	
