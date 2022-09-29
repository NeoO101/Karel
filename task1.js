/* 
Overview
Karel’s world is a complete mess. There are tennis balls all over the place, and you need to clean them up. Karel will start in the bottom left corner of the world facing east, and should clean up all of the tennis balls in the world. This program should be general enough to work on any size world with tennis balls in any locations.

Once the world is clean, Karel needs to return to the bottom left corner and face east (the starting position).
*/

function start(){
    while(leftIsClear()){
        clearUp();
        goUp();
        goStart();
    }
    clearUp();
    goHome();
}

//Street cleaning function
function clearUp(){
    while(frontIsClear()){
        if(ballsPresent()){
            takeBall();
        }
        move();
    }
    if(ballsPresent()){
        takeBall();
    }
}
//Crossing function on the second street
function goUp(){
    turnLeft();
    move();
    turnLeft();
}
function goStart(){
    while(frontIsClear()){
        move();
    }
    turnAround();
}

//go start position
function goHome(){
    turnAround();
    while(frontIsClear()){
        move();
    }
    turnLeft();
     while(frontIsClear()){
        move();
    }
    turnLeft();
}