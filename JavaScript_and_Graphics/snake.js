var SNAKE_WIDTH = 40;
var SNAKE_HEIGHT = 40;
var SNAKE_COLOR = Color.green;

// Constants to represent the directions
var EAST = 0;
var SOUTH = 1;
var WEST = 2;
var NORTH = 3;

var dx = 2;
var dy = 0;

var square;

var centerX = getWidth() / 2 - SNAKE_WIDTH / 2;
var centerY = getHeight() / 2 - SNAKE_HEIGHT / 2;





function start(){
	square = new Rectangle(SNAKE_WIDTH, SNAKE_HEIGHT);
	square.setPosition(centerX, centerY);
	square.setColor(SNAKE_COLOR);
	add(square);
	
	//square.move(dx, dy);
	//setTimer(move, 20);
	keyDownMethod(snake);
	
	
}

function snake(e){
    if(e.KeyCode == Keyboard.UP){
        dx = 0;
        dy = -2;
        
    }
    if(e.KeyCode == Keyboard.DOWN){
        dx = 0;
        dy = 2;
    }
    if(e.KeyCode == Keyboard.LEFT){
        dx = -2;
        dy = 0;
    }
    if(e.KeyCode == Keyboard.RIGHT){
        dx = 2;
        dy = 0; 
    }
}