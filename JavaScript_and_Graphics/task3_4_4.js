// This constant represents our currency
// conversion rate
var DOLLARS_TO_POUNDS = 0.6462

//This program will concert dollars to pound


funciton start(){
    println("This program converts USD to GBP.");
    var dollars = readFloat("How many dollars do you want to change pounds");
    // This is how we can convert fro dollars
    //to pounds
    var pound = dollars * DOLLARS_TO_POUNDS;

    println("$" + dollars + "=" + pound + "British pounds");

}


/* This program helps us divide a large number
 * of people into groups. We tell it how many
 * total people there are, and how many people
 * there are per group, and we figure out
 * how many groups there are, and how many
 * are left over. */

function start(){
    var people = redInt("Number of people: ");
    var peoplePerGroup = redInt("People per group: ");

    var groups = Math.floor(people / peoplePerGroup);
    //var group = Math.floor(people / peoplePerGroup);
    println("There are " + groups + " groups " + "with " + peopleLeft + " left over.");
}

