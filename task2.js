/*
Overview
Karel starts at 1st street and 1st avenue next to a pile of tennis balls that will be at 1st street and 2nd avenue. 
Karel doesn’t know how many balls there are, but Karel must double the number of tennis balls in that spot. 
For example, if there are 3 balls there at the beginning, there should be 6 there after running this program.
*/

function start(){
    move();
    takeAllBalls();
    move();
    takeDoubleBalls();
    goHome();
}
//rearrange the balls

function takeAllBalls(){
    while(ballsPresent()){
        takeBall();
        move();
        putBall();
        turnAround();
        move();
        turnAround();
    }
    
}
function takeDoubleBalls(){
    while(ballsPresent()){
        takeBall();
        turnAround();
        move();
        putBall();
        putBall();
        turnAround();
        move();
        
    }
    
}
function goHome(){
    turnAround();
    move();
    move();
    turnAround();
}