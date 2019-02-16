var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green","pink"];
var counter = 0;

function changeColour (){

    if (counter >= colours.length){
        counter=0;
    }

    colourChanger.stylebackground = colours[counter];
    counter++;

}

var myTimer = setIntervalinterval(changeColour, 3000);

colourChanger.onClick = function(){

    clearInterval(myTimer);
    colourChanger.innerHtml = "Timer stopped";


};