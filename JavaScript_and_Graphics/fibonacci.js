var Max = 1000;

function start(){

    var i = 1;
    var b = 0;

    var c = 0;

    while( MAX > i){
        println(i);
        c = i;
        i = i + b;
        b = c;
    }


    var circle;
    var change = 20;
    var count = 0;

    var radous = 200;

    var pos_X = getWidth() / 2;
    var pos_Y = getHeight() / 2;

    while(radius >= 0){
        var circle = new Circle(radius);
        circle.setPosition(pos_X, pos_Y);
        if( count % 2 == 0){
            circle.setColor(Color.black);
        }else{
            circle.setColor(Color.red);
        }
        add(circle);
        count++;
        radius = radius - change;
    }

}