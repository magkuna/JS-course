function getAvarage (a,b){
    var average = (a+b)/2; //local variable
    console.log(average);
    return average;

}
var myResults=getAverage (7,11);//global variable

function logResults (){
   
console.log("the average is" + myResults + "inside the function"); 
}

logResults();