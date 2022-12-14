/* This program draws a magic 8 ball on the screen
 * and shakes it every 2 seconds.
 * Shaking means it changes the number and color of the ball.
 *
 * To do this, we set a timer because we can't use a loop because
 * you can't set a time delay in a loop.
 */

var RADIUS = 120;

var FONT = "48pt Arial";

var cicrle ;

var number;

function start(){
    circle = new Circle(RADIUS);
    circle.setPosition(getWidth() / 2, getHeight() / 2);
    add(circle);


    number = new Text(8, FONT);
    var x = getWidth() / 2 - number.getWidth() / 2;
    var y = getHeight() / 2 - numer.getHeight() / 2;

    number.setPosition(x, y);
    number.setColor(Color.white);
    add(number);


    setTimer(shake, 2000);

}


/* shake sets the text of number to a random number
 * and changes the color of the circle to a random
 * color.
 *
 * Note how it does not create a new Circle or new Text.
 * It just uses the ones we created in the start function.
 */

function shake(){
    var random_number = Randomizer.nextInt(1, 12);
    number.setText(random_number);

    cicrle.setColor(Randomizer.nextColor());


}

