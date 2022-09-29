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
    
    partOfDay = "afrernoon";
    time = 12;
    
    println("In the " + partOfDay + ",I eat lunch at "+ time);
    
    partOfDay = " evening";
    time = 11;
    
    println("In the " + ",I go to bad at " + time);

}
