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

// Constants

/*
var WIDTH = 50;
var HEIGHT = 20;


function start() {
    
}

*/

// Constants

var WIDTH = 50;

var HEIGHT = 20;

var Y= getHeight()-HEIGHT;

var X=0;

var counter=0;



function start() {

setTimer(red, 50);

}



function red() {

var red = new Rectangle(WIDTH,HEIGHT);

red.setPosition(X, Y);

red.setColor(Color.randomRed());

//counter++;

add(red);

X+=WIDTH;



if (X>getWidth()) {

X=(0);

Y-=HEIGHT;

}

if(Y<0) {

stopTimer(red);

}

}