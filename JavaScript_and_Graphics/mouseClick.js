function start(){
    mouseClickMethod(drawCircle);
}

function drawCircle(e){
    var circle = New circle(20);
    circle.setPosition(e.getX(), e.getY());
    add(circle);
}