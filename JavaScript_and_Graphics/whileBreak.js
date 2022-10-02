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


    function start(){
        var count = 0;
    
        while(true){
            //var count = 0;
            
            var rollOne = Randomizer.nextInt(1, 6);
            var rollTwo = Randomizer.nextInt(1, 6);
            
            println("rolled: " + rollOne + " " + rollTwo);
            count += 1;
            if(rollOne == 1 && rollTwo == 1){
                println("It took you " + count +" rolls to get snake eyes");
                break;
            }
        }
    
    }
}