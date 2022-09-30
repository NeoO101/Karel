var PAN_RADIUS = getWidth()/3;
var HANDLE_WIDTH = getWidth()/2;
var HANDLE_HEIGHT = HANDLE_WIDTH/4;
var PAN_COLOR = Color.GRAY;

var PAN_BOTTOM_RADIUS = PAN_RADIUS-20;
var PAN_BOTTOM_COLOR = Color.BLACK;

var EGG_RADIUS = PAN_BOTTOM_RADIUS/4;
var EGG_WHITE_COLOR = Color.WHITE;
var EGG_YOL_COLOR = Color.YELLOW; 

var HIGHLIGHT_RADIUS = EGG_RADIUS/4;
var HIGHLIGHT_COLOR = Color.WHITE;


function start() {
    //const
    var centrX=getWidth()/2;
    var centrY=getHeight()/2;
    
    // base Circle
    var baseCircle = new Circle(getWidth()/3);
    baseCircle.setColor(PAN_COLOR);
    baseCircle.setPosition(200, 250);
    add(baseCircle);

    var hendlRect = new Rectangle(HANDLE_WIDTH, HANDLE_HEIGHT);
    hendlRect.setColor(PAN_COLOR);
    hendlRect.setPosition(200, 225);
    add(hendlRect);
    
    var blackCircle = new Circle(PAN_BOTTOM_RADIUS);
    blackCircle.setColor(Color.black);
    blackCircle.setPosition(200, 250);
    add(blackCircle);
    
    var proteinCircle = new Circle(EGG_RADIUS);
    proteinCircle.setColor(EGG_WHITE_COLOR);
    proteinCircle.setPosition(180, 200);
    add(proteinCircle);
    
    var proteinCircle2 = new Circle(EGG_RADIUS);
    proteinCircle2.setColor(EGG_WHITE_COLOR);
    proteinCircle2.setPosition(165, 220);
    add(proteinCircle2);
    
    var proteinCircle3 = new Circle(EGG_RADIUS);
    proteinCircle3.setColor(EGG_WHITE_COLOR);
    proteinCircle3.setPosition(220, 260);
    add(proteinCircle3);
    
    var proteinCircle4 = new Circle(EGG_RADIUS);
    proteinCircle4.setColor(EGG_WHITE_COLOR);
    proteinCircle4.setPosition(190, 290);
    add(proteinCircle4);
    
    var proteinCircle5 = new Circle(EGG_RADIUS);
    proteinCircle5.setColor(EGG_WHITE_COLOR);
    proteinCircle5.setPosition(200, 230);
    add(proteinCircle5);
    
    var proteinCircle6 = new Circle(EGG_RADIUS);
    proteinCircle6.setColor(EGG_WHITE_COLOR);
    proteinCircle6.setPosition(150, 270);
    add(proteinCircle6);
    
    var heartCircle1 = new Circle(PAN_BOTTOM_RADIUS/3);
    heartCircle1.setColor(EGG_YOL_COLOR);
    heartCircle1.setPosition(190, 250);
    add(heartCircle1);
    
    var heartCircle = new Circle(HIGHLIGHT_RADIUS);
    heartCircle.setColor(EGG_WHITE_COLOR);
    heartCircle.setPosition(200, 250);
    add(heartCircle);
    
}