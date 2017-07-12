//defining the function
function hello(){
    console.log("hello, world");
}

hello(); //calling the function 

function add(num1, num2){
    return(num1+ num2);
}

console.log (add(5,7));

 var wholeNumber;
function rand(number){
      wholeNumber = Math.floor(Math.random() * number);
    return wholeNumber;
}

console.log(rand(2000));
