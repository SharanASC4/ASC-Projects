function setup(){
    createCanvas(1000,1000)
    background('white')

}

function draw(){
fill('#CE1B1B'); // color of Attack column
rect(0,700,800,600);// Attack column
fill('blue'); //color of side column
rect(0,0,200,700); //Side column
fill('black'); //color of pokemon 1
ellipse(295,383,100,100);//pokemon 1
fill('black'); //color of pokemon 2
ellipse(619,131,100,100);//pokemon 2
fill('Green');//HP color
rect(285,242,200,50);//HP bar
fill('Green');//HP 2 color
rect(356,50,200,50); //HP bar
textSize(12); //text size        
text("HP:"+" "+this.hp,296,229);//hp number and postion
text("HP:"+" "+ this.hp,366,36);// hp number and postion 
fill('black');// color of name
text("Name:"+" "+ this.name,296,198);// name 1 and postion 
text("Name:"+" "+ this.name,365,10);// name 2 and postion 
text("Type:"+" "+ this.types,363,24);// name 2 and postion
text("Type:"+" "+ this.types,294,215);// name 2 and postion
}


function mousePressed(){
    


}

var player1 = mousePressed(); //user choice

var player2 = Math.floor(Math.random()*Pokemon()) ; // random user choice 

function Pokemon(name,types,hp,attack){
    this.name= name;
    this.types = types;
    this.hp = hp;
    this.attack = attack;
}

var pokemon1 = new Pokemon("Bulbasaur", ["Grass", "Poison"],45,["Razor Leaf","Tackle","Take Down","Worry Seed"] );

var pokemon2 = new Pokemon("Ivysaur", ["Grass", "Poison"],60,["Frenzy Plant","Solar Beam","	Sweet Scent","Synthesis"]);

var pokemon3 = new Pokemon("Venusaur", ["Grass", "Poison"],80,["Grass Pledge","Sleep Powder","Leech Seed",'Vine Whip']);
    
var pokemon4 = new Pokemon("Charmander", ["Fire", "Flying"],78,["blaze",); 

var pokemon5 = new Pokemon("Charmeleon",["Fire", "Flying"],58,["blast Burn",);

var pokemon6 = new Pokemon("Charizard",["Fire", "Flying"],78,["Wing Attack",);

function mousePressed(){
    console.log("The mouse is at this x :" + mouseX + ".");
    console.log("The mouse is at this y :" + mouseY + ".");
}