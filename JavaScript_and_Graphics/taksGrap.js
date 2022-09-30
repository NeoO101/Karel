//This program will add text that 
//says "Hello world" at 100 , 100

function start(){
    var text = new Text("Hello world");
    text.setPosition(100, 100);
    add(text);


    var circle = new Circle(30);
    circle.setPosition(100, 50);
    circle.setColor(Color.blue);
    add(circle);

    var rect = new Rectangle(100, 50);
    rect.setPosition(60, 150);
    rect.setColor(Color.red);
    add(rect);


    /// Ball
    var ball = new Circle(100);
	var centerX = getWidth() / 2;
	var centerY = getHeight() / 2;
	ball.setPosition(centerX, centerY);
	add(ball);
	
	var number = new Text("8");
	number.setFont("50pt Arial");
	number.setColor(Color.white);
	number.setPosition(centerX - number.getWidth()/2, centerY + number.getHeight()/2);
	add(number);


    var redRect = new Rectangle(getWidth(), getHeight() / 3);
	redRect.setColor(Color.red);
	redRect.setPosition(0, 0);
	add(redRect);
	
	// white color
	
	var whiteRect = new Rectangle(getWidth(), getHeight() / 3);
	whiteRect.setColor(Color.white);
	whiteRect.setPosition(0, getHeight() / 3);
	add(whiteRect);
	
	var blueRect = new Rectangle(getWidth(), getHeight() / 3);
	blueRect.setColor(Color.blue);
	blueRect.setPosition(0, getHeight() / 3 * 2 );
	add(blueRect);
}