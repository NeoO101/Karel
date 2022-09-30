//This program reads a number from the user and prints if it is negative

function start(){
    var number = readInt("Number : ");
    if(number < 0){
        println("number is negative.");
    }

    var name = readLine("Enter name please: ");
    if(name == "Rezo"){
        println("Oh Great name.");
    }

    var num = readInt("Number: ")
    if(num % 2 ==0){
        pritnln("Number is even");
    }else{
        println("Number is odd");
    }

    ///************** */
    var secretPassword = "abc123";
    var password = readLinke("Password: ");
    if(password == secretPassword){
        println("Passwords match.");
    }else{
        pritnln("passwords don't match.");
    }


    //************ */
    var age = readInt("What is your age?");
    if(age <= 19 && age >=13){
        println("Yes, you are a teenager.");
    }else{
        println("No, you are not a teenager.");
    }


    //********** */
    function start(){
        var lactoInto = "lactose intolerant";
        var vege = "vegetarian";
        var nothing = "none";
        var food = readLine("Any dietary restrictions ?: ");
        
        if( food == lactoInto){
            println("No cheese!");
        }else if( food == vege){
            println("Veggie burger."); 
            }
        else if(food == nothing){
            println("No alterations.");
        }
    }


    var NUM_CIRCLES = 19;

    var CIRCLE_RADIUS = getWidth() / NUM_CIRCLES / 2;

    var X_position = CIRCLE_RADIUS;

    var Y_position = getHeight() / 3;

    for( var i = 0; i < NUM_CIRCLES; i++){
        var circle = new Circle(CIRCLE_RADIUS);
        circle.setPosition(X_position, Y_position);
        circle.setColor(Color.green);
        add(circle);

        X_position += 2*CIRCLE_RADIUS;
    }
}

