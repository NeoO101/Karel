var baseX = 10;
var baseY = getHeight() - (getHeight() / 3) ;
var NUM_CIRCLES = 15;

var width = getWidth() - 20;
var height = getHeight() / 3;

var standX = 5;
var standY = getHeight() - (getHeight() / 3 * 0.2);
var standWidth = getWidth() ;
var standHeight = height - (height * 0.8);

//var radius = 20;

var radius = getWidth() / NUM_CIRCLES / 2;
var chocX = radius ;
var chocY = getHeight() - (getHeight() / 3) ;


var candleX = getWidth() / 2;
var candleY = getHeight() / 2;

//
//
//

function start(){
    
    
    var numberCandle = readLine("How old are you ?");
    
    
    for(var i = 0; i < numberCandle; i++){
        var candle = new Rectangle(10, 70);
        candle.setColor(Color.yellow);
        candle.setPosition(candleX, candleY);
        add(candle);
        if(i % 2 == 0){
            candle.setPosition(candleX + 10, candleY);
        }else{
            candle.setPosition(candleX - 10, candleY);
        }
    }
    
    //base
    var base = new Rectangle(width, height );
    base.setColor(Color.gray);
    base.setPosition(baseX, baseY );
    add(base);
    
    
    //stand
    var stand = new Rectangle( standWidth, standHeight);
    stand.setColor(Color.red);
    stand.setPosition(standX, standY);
    add(stand);
    
    
    for(var i = 0; i < NUM_CIRCLES; i++){
        var Chocolate = new Circle(radius);
        Chocolate.setPosition(chocX, chocY);
        Chocolate.setColor(Color.black);
        add(Chocolate);
        chocX += 2 * radius;
    }
    
}