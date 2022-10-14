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

function start(){
	var result = sum(5, 8);
	println(result);
	
	var x = sum(10, 20);
	println(x);
	
	var y = addOne(100);
	println(y);
	
	var z = addOne(y);
	println(z);
}


function sum(first, second){
	var total = first + second;
	return total;
}

function addOne(x){
	return x + 1;
}
var SENTINEL = 0;

// Prints whether the entered number is even or odd
function start(){
    while(true){
        var number = readInt("Enter a number (0 to exit): ");
        if(number == SENTINEL){
            println("Done!");
            break;
        }else if(isEven(number)){
            println("Even");
        }else{
            println("Odd");
        }

    }
    
	
}

function isEven(x){
  return ( x % 2 == 0);
}


function start(){
	var x = addOne(8);

	println(x);

	var y = addOne(10);
	println(y);

	var a = sum(10, 20);


}


function addOne(x){
	var result = x + 1;
	return result;
}
function sum(x, y){
	var resutl = x + y;
	return result;

}

