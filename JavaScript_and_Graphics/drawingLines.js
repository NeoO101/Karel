var line;

function down(e){
    line = new line(e.getX(), e.getY(), 
                    e.getX(), e.getY());
    add(line);

}

function drag(e){
    line.setEndpoint(e.getX(), e.getY());

}


function start(){
    mouseDownMethod(down);
    mouseDragMethod(drag);
}