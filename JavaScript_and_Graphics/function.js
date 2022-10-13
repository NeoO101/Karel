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