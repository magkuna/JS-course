var myPastDate = new Date (1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date (2515, 0, 31, 10, 30, 15);

console.log (myPastDate);
console.log(myFutureDate);

var birthday = new Date (1985, 0, 15, 11, 15, 25 );
var birthday2 = new Date (1985, 0, 15, 11, 15, 25 );

//get the month of fate (0-11)
console.log(birthday.getMonth());

//get the full year(YYYY)
console.log(birthday.getFullYear());

//get the date of month (1-31)
console.log(birthday.getDate());

//get the day of week (0-6)
console.log(birthday.getDay());

//get the hour of the date (0-23)
console.log(birthday.getHours());

//get the number milliseconds since 1st Jan 1978
console.log(birthday.getTime());

if (birthday.getTime == birthday2.getTime){
    console.log ("birthdays are equal");
}else {
    console.log ("birtgdays are not equal");
}

