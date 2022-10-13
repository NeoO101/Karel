// This program uses the doubleNumber() function to double a couple of
// numbers and prints out the results.
function start(){
	var numApples = 4;
	println("Before: " + numApples);
	var twiceAsMany = doubleNumber(numApples);
	println("After: " + twiceAsMany);
	
	var y = 11;
	println(doubleNumber(y));
}

//This function doubles a given number and returns the doubled value.
//Parameters:
// x: the number to double
//Returns:
// x * 2
function doubleNumber(x){
	var doubledX = 2 * x;
	return doubledX;

    var x = square(5);
	println(x);
}
function square(x){
    var result = x * x;
    return result;
}
function start() {
    var width = readLine("What is the width of the mat (in feet)? ");
    
    var length = readLine("What is the length of the mat (in feet)? ");
    
    var square = calculateArea(width, length);
    println("The area of each mat is " + square + " square feet.");
    
    
    var roomWidth = readLine("What is the width of the room (in feet)? ");
    
    var roomLength = readLine("What is the length of the mat (in feet)? ");
    
    var squareRoom = calculateArea(roomWidth, roomLength);
    
    println("The area of the room is" + squareRoom +"square feet. ");
    
    var mats = squareRoom / square;
    
    println("You'll need" + mats + "mats to cover the floor.");
}


// This function should calculate the area of a rectangle using
// the parameters of width and length.
function calculateArea(width, length){
    var result = width * length;
    return result;
}
