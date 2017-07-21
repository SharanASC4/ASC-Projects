function setup(){
    createCanvas(500,500);
 

}
var postX = 3;
var postY = 7;
var x = 3;
var y = 7;
function draw (){
    background('Black')
    ellipse(x,y,50,50);
    x = x + postX
    y = y + postY
    /*if(x > 470){
        postX = -24;
   }*/
   /*if (y >470){
        postY= -12;

    }*/
     if(x < 25){
        postX = 6;
   }
   if (y < 25){
        postY= 6;

    }


}


