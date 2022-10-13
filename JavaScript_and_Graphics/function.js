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