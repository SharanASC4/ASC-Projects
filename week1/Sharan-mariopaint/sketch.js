function setup(){
    createCanvas(windowWidth, windowHeight);
    background("white");
}
function mouseDragged(){
    stroke(random(255),random(255),random(255));
    line(random(mouseX), random(mouseY),random(mouseX),random(mouseY));
    strokeWeight(2);
}

function mouseClicked(){
  stroke(random(255),random(255),random(255));
    ellipse(random(mouseX), random(mouseY),random(mouseX),random(mouseY));
    strokeWeight(2);

}


