

var id = "3753a7e6";

var key = "933caf191daea69346693460cd47457e";

var foodURL ="https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories"+
              "&appId="+id + "&appKey="+key; 

$.ajax({
    url:foodURL,
    success:function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $('body').append("<h2>This "+ name + " has " +cals+ "kcal!!! </h2>");
    }

});