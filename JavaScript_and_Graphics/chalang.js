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
    

    // This program introduces the !(not)
    //operator, which lets you take the 
    //opposite of a boolean value. Here
    //we simulate a light switch

    var ligth = true;
    prinln("Light on ? " + ligth);
    ligth = !ligth;
    println("Light on ? " + ligth);

    ligth = !ligth;
    println("Light on ? " + ligth);


    /*
        Here we wrote a rogram to determine 
        if someone meet the requirements to 
        become President of the United States.

        1. BE at least 35 yrars old

        and 

        2. Be a US Citizen


    */
    var areYouThirtyFive = readBoolean (" Are you at least thirty five years ?");

    var isUSCitizen = readBoolean ("Are you a US Citizen? ");

    var canBePresident = areYouThirtyFive && isUSCitizen;

    pritnln("Can be president: " + canBePresident);

    //this is boolean one more operator

    var enoughCredits = readBoolean("Do you have enough course credits? ");
	var requirements = readBoolean("Have you met all of your graduatin requirements? ");
	var canGraduate = enoughCredits && requirements;
	println("Can you gradute? " + canGraduate);


    //Write your code here

    var weekDay = readBoolean("Is today a weekday?");
    var holiday = readBoolean("Is today a holiday?");

    var isScool = !weekDay || holiday;

    println("There is no scool today :" + isScool);




    // We ise comparison operators to see
    //if someone is old enough to vote in 
    //the United states of america

    var age = readInt("What is your ager ?");
    var odlEnough = age >= 18;
    println("Can vote : " + oldEnough);
    
}