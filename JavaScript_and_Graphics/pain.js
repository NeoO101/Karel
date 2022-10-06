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
	    
	    
	}
	
}