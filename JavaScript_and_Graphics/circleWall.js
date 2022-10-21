// Constants
var RADIUS = 20;
var DELAY = 40;

// Define your global variables here

var x = RADIUS;
var y = RADIUS;

var bidg = 0;

var maxWidth = getWidth() - RADIUS;
var maxHeight = getHeight();

function start(){
    drawCircle();
    
    setTimer(drawCircle, DELAY);
	
}


function drawCircle(){
    var circle = new Circle(RADIUS);
    circle.setPosition(x, y);
    if(bidg % 2 == 0){
        circle.setColor(Color.red);
    }else{
        circle.setColor(Color.black);
    }
    add(circle);
    
    bidg++;
    x+= 2 * RADIUS;
    println(bidg);
    
    if(x > maxWidth ){
        x = RADIUS;
        y += 2 * RADIUS;
        println(y);
    }
    if(y > maxHeight){
        stopTimer(drawCircle);
    }

}