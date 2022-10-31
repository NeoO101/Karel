var RADIUS = 100;

var OFF_SCREEN = -200;

var DELEY = 500;

var ball;

function start(){
    setupBall();
    setTimer(changeBall, DELEY);
}



function changeBall(){
    var x = Randomizer.nextInt(ball.getRadius(), getWidth() - ball.getRadius());
    var y = Randomizer.nextInt(ball.getRadius(), getHeight() - ball.getRadius());

    ball.setPosition(x, y);
    changeColor;
}

function changeColor(){
    var colorCode = Randomizer.netxtInt(0, 2);

    var color;

    if(colorCode == 0){
        color = Color.red;
    }
    else if(colorCode == 1){
        color = Color.green;
    }else {
        color = Color.yellow;
    }

    ball.setColor(color);
}

function setupBall(){

    ball = new Circle(RADIUS);
    ball.setPosition(OFF_SCREEN, OFF_SCREEN);
    add(ball);
}