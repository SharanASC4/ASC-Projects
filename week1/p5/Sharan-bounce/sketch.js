function setup(){
    createCanvas(500,500);
 

}
var postX =80;
var postY =76;
var x = 80;
var y = 76;
function draw (){
    background('Blue')
    ellipse(x,y,100,100);
    x = x + postX
    y = y + postY
    if(x > 470){
        postX = -24;
   }
   if (y >470){
        postY= -12;

    }
     if(x < 25){
        postX = 6;
   }
   if (y < 25){
        postY= 10;

    }


}


