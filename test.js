var myArray = new Array();
myArray[0] = 8;
myArray[0] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){ console.log ('now driving"');};

myCar.drive();

varmyCar2 = {
    maxSpeed: 70,
    driver:"Net Ninja",
    drive: function(speed,time){console.log(speed+time);}

};

console.log(myCar2.maxSpeed);
myCar2.drive (50,3);