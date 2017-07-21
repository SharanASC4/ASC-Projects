function setup(){
    createCanvas(800,800);



}
var rand = Math.floor(Math.random(words)*8)
var x =0;
 var words = [about,all,also,and,at,be,because,but,by,can,come,could,day,even,find,first,from,get,give,go,have,he,her,here,him,his,how,I,into,it,its,just,know,like,look,make,man,many,me,more,my,no,not,now,on,one,only,or,other,our,out,people,say,see,she,very,want,way,we,well,what,when,which,who,will,would,year,you,your];
//function definition
function draw(){
    background('black')
    for(var i=0; i<90; i++){
        s = console.log(rand)


    }
     s =  words
        fill(30);
    x++;
}

function keyTyped() {
  if (keyTyped()=== rand(words)) {
    value = 255;
  } else if (keyTyped() === 'Try again') {
    value = 0;
  }
