var count = 0;

function start(){
	// Write your code here
	var nam = readInt("Enter number: ");
	while(true){
	    if(nam == 1){
    	    break;
    	}
    	nam = hailstone(nam);
    	println(nam);
    	
    	count++;
	}
	println("It took " + count + " steps to complete.")
}




function hailstone(x){
        if(x % 2 == 0){
            x = x / 2;
        }else{
            x = x * 3 + 1;
        }
        return x;
    }