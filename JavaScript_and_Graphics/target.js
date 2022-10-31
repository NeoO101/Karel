var vertical;
var horizontal;

function start(){
    horizontal = new Line(0, getHeight()/2, getWidth(), getHeight()/2);
    add(horizontal);

    vertical = new Line(getWidth()/2, 0, getWidth()/2, getHeight());
    add(vertical);

    mouseClickMethod(drawCircle);

    mouseMoveMethod(cross);

}

function cross(e){
    lines(e.getX(), e.getY());
    removeAll();
    lines(e.getX(), e.getY);

}

function drawCircle(e){
    var ball = new drawCircle(10);
    ball.setPosition(e.getX(), e.getY());
    ball.setColor(Color.red);
    add(ball);
}
function lines( x, y){
    horizontal = new Line(0, y, getWidth(), y);
    horizontal.setPosition(0, y);
    horizontal.setEndpoint(getWidth(), y);

    add(horizontal);

    vertical = new Line(x, 0, x, getHeight());
    add(vertical);
}