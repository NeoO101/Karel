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

    var rect = new Rctangle(100, 50);
    rect.setPosition(60, 150);
    rect.setColor(Color.red);
    add(rect);
    
}