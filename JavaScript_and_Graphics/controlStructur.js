var STARTING_IN_INVENTORY = 20;

function start(){
    var numItems = STARTING_IN_INVENTORY;

    /* Here is my code */

    while(numItems > 0){
        println("We have " + numItems + " items in inventory.");

        var buyItems = readLine("How many would you like to buy ?");

        if( buyItems > numItems){
            println("There is not enough in inventory for that purchase.");
            println("");
        }else{
            numItems = numItems - buyItems;
            println("Now we have " + numItems + " left");
            println("");
        }


        if(numItems == 0){
            println("All out!");
        }
    }



}
