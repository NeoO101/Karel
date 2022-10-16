// This program draws some balloons

var MIN_RADIUS = 20;
var MAX_RADIUS = 40;
var NUM_BALLOONS = 25;


var lineConstX = getWidth() / 2;
var lineConstY = getHeight() - (getHeight() / 3);

function start() {

    for( var i = 0; i < NUM_BALLOONS; i++){
    var x2 = Randomizer.nextInt(0, getWidth());
    var y2 = Randomizer.nextInt(0, lineConstY);
    lineArtist(lineConstX, lineConstY, x2, y2);
    
    var radius = Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS);
    var color = Randomizer.nextColor();
    
    ballArtist(radius, color, x2, y2);
    }	
}

function lineArtist(x1, y1, x2, y2){

    var line = new Line(x1, y1, x2, y2);
    line.setColor(Color.black);
    add(line);
}

function ballArtist(radius, color, x1, y1){
    
    var circle = new Circle(radius);
    circle.setColor(color);
    circle.setPosition(x1, y1);
    add(circle);
    
}