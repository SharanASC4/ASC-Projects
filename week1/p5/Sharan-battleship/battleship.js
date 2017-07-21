
var grid = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];



function setup(){
    createCanvas(485,485);
    background('blue');
}



function draw(){
    rectMode(CORNER);
    for(var i = 0; i < 8; i++){
     for(var x= 0; x < 8; x++){
        fill("white");
        strokeWeight(10);
        rect(i*60, x*60, 60 ,60);
    }

}

}

var ships = Math.floor(Math.random(grid))

// for hit/miss use if else statements





