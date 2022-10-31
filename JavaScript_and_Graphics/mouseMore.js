function start(){
    mouseMoveMethod(paint);
}

function paint(e){
    var circle = new Circle(15);
    circle.setPosition(e.getX(), e.getY());
    circle.setColor(Randomizer.nextColor);
    add(circle);
}

function start(){

    mouseDragMethod(paint);
}

function paint(e){
    var circle = new Circle(15);
    circle.setColor.Randomizer.nextColor();
    circle.setPosition(e.getX(), e.getY());
    add(circle);
    
}

var coords;

function start(){

    mouseMoveMethod(checkCoords);


}
function checkCoords(e){
    remove(coords);
    coords = new Text( "(" + e.getX() + "," + e.getY() + ")");
    coords.setPosition(100, 100);
    add(coords);
}




