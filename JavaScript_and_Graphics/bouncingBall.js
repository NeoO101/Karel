var ball;

var dx = 4;
var dy = 4;



function start(){
    checkWalls();
    ball.move(dx, dy);

}

function draw(){
    checkWalls();
    ball.move(dx, dy);
}

function checkWalls(){
    if(ball.getX() + ball.getRadius() > getWidth()){
        dx = -dx;
    }

    if(ball.getX() - ball.getRadius() < 0){
        dx = -dx;
    }

    if(ball.getY() + ball.getRadius > getHeight()){
        dy = -dy;
    }

    if(ball.getY() - ball.getRadius() < 0){
        dy = -dy;
    }
}
