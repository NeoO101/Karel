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
}
