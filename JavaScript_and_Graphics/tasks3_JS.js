/*
Write a program that prints out your name on one line, and then on the next line says a hobby you have.

Your output must be in this format:
*/

/* This program prints out "Hello, world" */

function start(){
    println("Hello world");
    /* This function should print out your 
    * name, and a hobby you have */
    println("My name is Rezo");
    println("I like to Basketball and reading");



    // Basic Variables

    var name = "Rezo";
    println("My name is "+ name);

    //Initializes numApples with value 5

    var numApples = 5;

    println("number of apples: " + numApples);

    println(name + "ate " + numApples + "apples.");

    //Eat all apples
    numApples = 0;
    println( "Number of apples: " + numApples);


    //3.2.4 Daily activities
    var partOfDay = "morning";
	var time = 8;
	
    println("In the " + partOfDay + ",I wake up at " + time);
    
    partOfDay = "afternoon";
    time = 12;
    
    println("In the " + partOfDay + ",I eat lunch at "+ time);
    
    partOfDay = " evening";
    time = 11;
    
    println("In the " + ",I go to bad at " + time);

    /* This program prompts the user for their name
    * and age, and then prints it back out. */

    var name = readLine("What is your name? ");
    println("Hello " + name + ", nice to meet you!");

    var age = readInt("What is your age? ");
    println("You are " + " years old");
    
    /*
    What is your name? Zach
    What time should we meet for dinner? 5
    Hi Zach, I will meet you at 5 o'clock.
*/
    var Name = readLine("What is your name? ");
	var Time = readLine("What time should we meet for dinner?");
	
	println("Hi " + Name + ", I will meet you " + Time +"o'clock");


    var first = readInt("First number: ");
    var second = readInt("Second number: ");
    var sum = first + second;
    println(sum);


    //Let's write a program thit adds two numbers

    var first = readInt("First number: ");
    var second = readInt("Second number");
    var sum = first + second;
    println(sum);


}
