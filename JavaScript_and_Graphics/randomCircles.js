var MAX_RADIUS;

var MAX_CIRCLES;

var counter = 0;



function start(){

}


function addCircle(){

    jastCircle(Randomizer.nextInt(0, MAX_RADIUS), Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()), Randomizer.nextColor());

}


function jastCircle(radius, x1, y1, color){
    var circle = new Circle(radius);
    circle.setPosition(x1, y1);
    circle.setColor(color);
    add(circle);

}