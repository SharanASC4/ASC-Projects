function setup(){
    createCanvas(800,800);
    background('black');
}

var x = 350;
var y = 740;
var w = 10;
var h = 10;

var Projectile=[];

function draw(){
    strokeWeight(0);
    fill('#00ff50'); //color of ship
    background('black'); // fix for the multiple rects forming
    rect(x+30,740,15,15);//top base
    rect(x,750,75,30);//base 
    if (keyIsDown(LEFT_ARROW)){
            x = x - 10;
    }
if (keyIsDown(RIGHT_ARROW)){
            x = x + 10;
    }
        if (x < 0){
        x = 0;
    }
        if (x > 725){
        x = 725;
    }
    for(i = 0; i < Projectile.length; i++){
        fill('red');
  rect(Projectile[i].x, Projectile[i].y, w, h);
  Projectile[i].y = Projectile[i].y-5;

}
}


function projectile1(x,y,width,height){
    this.x = x + 32.5;
    this.y = y;
    this.width= w;
    this.height= h;
}


function keyPressed(){
  if (keyCode === 32 ) {
    Projectile.push(new projectile1(x,y-5,w,h));
    
  }


function keyPressed(){
    background('black')
    rect(x,x-30,15,20);//projectile 
    if(keyCode === LEFT_ARROW){
        x=x-20;
    }
    if(keyCode === RIGHT_ARROW){
        x=x+20;

    }

}

}
