var SENTINEL = -1;

function start(){
    var sum = 0;

    while(true){
        var num = readInt("Enter a number :");
        if(num == SENTINEL){
            break;
        }
        sum += num;


    }

    println("The total was: " + sum);



}