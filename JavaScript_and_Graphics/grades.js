/*
Overview
Write a function that takes a number score from 0 to 100 and prints the grade.

You should print the letter grade A-F and the +/- sign if needed using these rules:

90-99: A
80-89: B
70-79: C
60-69: D
0-59: F

Special Cases:
100: A+
*/
unction start(){
	// Write your code here
	letterGrade(100);
    letterGrade(83);
    letterGrade(68);
    letterGrade(91);
    letterGrade(47);
    letterGrade(79);
}

function letterGrade(score){
    if(score < 59){
        println("F");
    }else if( score == 100){
        println("A+");
    }else if(score > 60 && score < 63){
          println("D-");
    }else if(score >= 63 && score < 67){
          println("D");
    }else if(score >=67 && score <=69 ){
        println("D+");
    }else if(score >= 70 && score <= 72){
          println("C-");
    }else if(score >= 73 && score <=76){
        println("C");
    }else if(score >= 77 && score <= 79){
        println("C+");
    }else if(score >= 80 && score <= 82){
        println("B-");
    }else if(score >= 83 && score <= 86){
        println("B");
    }else if(score >= 87 && score <= 89){
        println("B+") ;
    }else if(score >= 90 && score <= 92){
        return "A-";
    }else if(score >= 93 && score <= 99){
        println("A");
    }
}


