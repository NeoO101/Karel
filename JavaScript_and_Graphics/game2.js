/* This program will play a simple guessing game.
 * The user will guess, and the computer should print if
 * the guess was too high, too low, or correct.
 * If the user enters '-1', the game should exit.
 */
function start() {
    
    
    println("This program plays a quessing game. ");
    println("The computer is thinking of a value between 0 and 100. ");
    println("Type '-1' ti exut the origram. ");
    var randomNumber = Randomizer.nextInt(0, 10);
    
    while(true){
        
        var selectedNumber = readLine("What is your guess? ");
        if(selectedNumber == -1){
            break;
        }
        
        else if(selectedNumber > randomNumber){
            println("Your guess was too high. ");
        }else if(selectedNumber == randomNumber){
            println("Correct!");
            println("game has concluded. ");
            break;
            
        }else{
            
            println("Your guess was too low. ");
        }

    }
    
}