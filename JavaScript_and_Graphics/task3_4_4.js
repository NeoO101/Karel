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