//After a lot of pains I was able to do it

var STARTING_SIZE = getWidth();
var MIN_SIZE = 5;

function start() {
	// Write your code here
	
	
	while(true){
	    
	    //var startSize = STARTING_SIZE;
	    
	    var X = 0;
	    var color = Randomizer.nextColor();
	    var co2 =  Randomizer.nextColor();
	    
	    var rect = new Rectangle(STARTING_SIZE, STARTING_SIZE);
	    rect.setPosition((getWidth() - STARTING_SIZE) / 2, (getHeight() - STARTING_SIZE) / 2);
	    rect.setColor(color);
	    add(rect);
	    
	    var radius = STARTING_SIZE / 2;
	    var circle = new Circle(radius);
	    circle.setPosition(getWidth() / 2, getHeight() / 2);
	    circle.setColor(co2);
	    add(circle);
	   
	    
	    STARTING_SIZE = (2 *  radius) / Math.sqrt(2);
	    
	    X = X + STARTING_SIZE;
	    println(STARTING_SIZE);
	    if(STARTING_SIZE <= MIN_SIZE){
	        break;
	    }
	    
	    
	}function start(){
		var x = 2;
		var y = 5;
		var value1 = product(x, y);
		var value2 = difference(y, x);
	
		var result = difference(value1, value2);
		println(result);
	}
	
	function product(x, y){
		return x * y;
	}
	
	function difference(x, y){
		return x - y;
	}

	function start(){
		println(doubleNumber(doubleNumber(10)));
	}
	
	function doubleNumber(x){
		var doubledX = 2 * x;
		return doubledX;
	}
	
}