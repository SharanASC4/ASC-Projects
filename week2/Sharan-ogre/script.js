$(document).ready(setup);

var hp = 100;
var gold = 0;
var slain = 0;

function setup(){
    $("body").append("<h1>Welcome to Ogre Fighter v1.0</h1>");
    $("body").append("<p>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</p>");
    $("body").append("<h2>STATS</h2>");
    $("body").append("<p class='stats'></p>");
    $("body").append("<button onclick='attack()'>Attack the Ogre!</button>");
    $("body").append("<div class='ogres'></div>");
}

function stats(){
    $(".stats").text("HP: "+hp+" // Gold: "+gold+" // Ogres Slain: "+slain);
}

function attack(){
    //Conditional to see whether or not you killed ogre
    //If you win, +10 gold, +1 slain, if you lose, -1 gold, -1 hp
    if (hp > 0){ //Player is still alive
        if(Math.random()*100 > gold){ //Player wins!
            gold = gold + 10;
            slain = slain + 1;
            $(".ogres").prepend("<p style='color: green'>You won! + 10 gold.</p>");
        } else { //Player loses :(
            gold = gold - 1;
            hp = hp - 1;
            $(".ogres").prepend("<p style='color: red'>You lost! -1 gold.</p>")
        }
        $(".ogres").prepend("<img width='100' src='https://vignette1.wikia.nocookie.net/honorbound-juicebox/images/0/07/Greenmist_Ogre.png/revision/latest?cb=20140222230516'>")
    } else {
        $(".ogres").prepend("<h3>You died!!!</h3>")
    }
    stats();
}

//Variables: hp, gold, slain
//Display stats header
//Display stats variables
//Display a button that refers to a function that attacks an ogre
//Display an ogre
//Function for attacking an ogre:
//  Return values: You either win or lose
//  If you win, you gain 10 gold.
//  If you lose, you lose 1 gold.
//  Regardless, a picture is added.