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

}
