

var LENGTH = 150;

var DELAY = 30;


var X_CENTER = getWidth() / 2;
var Y_CENTER = getHeight() / 2;

var line;
var time = 0;

function start(){

    line = new Line(X_CENTER, Y_CENTER, X_CENTER, Y_CENTER);
    add(line);

    setTimer(rotateLine, DELAY);


}

function rotateLine(){
    time += 0.1;

    var dx = LENGTH * Math.cos(time);
    var dy = LENGTH * Math.sin(time);

    line.setEndpoint(X_CENTER + dx, Y_CENTER - dy);
}