var npsURL ="https://developer.nps.gov/api/v0/alerts?parkCode=yell,yose";

$.ajaxSetup({
    headers: {
        "Authorization": "F877AA68-2D7B-461A-94E1-6F847FDF1F59"
    }
});

$.ajax({
    url:npsURL,
    success:function(data){
        console.log(data);
     
    }
});