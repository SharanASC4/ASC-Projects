var Bulbasaur = ["Bulbasaur",45,1,"Grass","Overgrow",false,49];
var Dragonite = ["Dragonite",91,149,"Ice","Blizzard",false,50];
var Ivysaur = ["Ivysaur",60,2,"Grass","Solar Beam",false,62];
var Squirtle = ["Squirtle",44,7,"Water","Torrent",false,48];
var ditto = ["Ditto",48,132,"Normal","Transform",true,48];
var raichu = ["Raichu",60,26, "Static", "Brick Break",false,90];
var lastArray = [Bulbasaur,Dragonite,Ivysaur,Squirtle,ditto,raichu]
for(var i=0; i<lastArray.length; i++){
    console.log("#"+ (i + 1) + " " + lastArray[i][0] + " " +"TYPE:"+lastArray[i][3]+ " " +"HP:"+ lastArray[i][1]+ " " +"ATK:"+ lastArray[i][4]+ " " +"DEF:"+ lastArray[i][6] + " " + "Legend:"+ lastArray[i][5]);
}
