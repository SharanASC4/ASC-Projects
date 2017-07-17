var pokemon1 = {
    "name" : "Bulbasaur",   
    "attack" : "Razor Leaf",
    "def" : 49,
     "HP" : 45,
    "legendary" : false,
    "types" : ["Grass", "Poison"]
};

var pokemon2 = {
    "name" : "Ivysaur", 
    "attack" : "Frenzy Plant",
    "def" : 63,
    "HP" : 60,
    "legendary" : false,
    "types" : ["Grass", "Poison"]
};

var pokemon3 = {
    "name" : "Venusaur", 
    "attack" : "Grass Pledge",
    "def" : 83,
     "HP" : 80,
    "legendary" : false,
    "types" : ["Grass", "Poison"]
};

var pokemon4 = {
    "name" : "Charmander",   
    "attack" : "blaze",
    "def" : 43,
     "HP" : 78,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};

var pokemon5 = {
    "name" : "Charmeleon",  
    "attack" : "blast Burn",
    "def" : 58,
    "HP" : 58,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};

var pokemon6 = {
    "name" : "Charizard",  
    "attack" : "Wing Attack",
    "def" : 78,
    "HP" : 78,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};

var newArray = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];

function  printRoster(){
    console.log(newArray);
}

//printRoster();

function attackPoke(){
    for (var i = 0; i < newArray.length; i++){
        //console.log(newArray[i].HP)
        newArray[i].HP = newArray[i].HP - 10
        console.log(newArray[i])
    }
}

attackPoke()