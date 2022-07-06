//https://docs.google.com/document/d/1nHvg6rpYiYnEQfyloQLr2f7VwzLnf5asucjUGuTbU20/edit
//DATE METHODS

alert("------------ WELCOME TO TASK 1 ------------  "); //task1
let date_now = new Date();
alert(date_now);

console.log(date_now.toDateString());

alert("------------ WELCOME TO TASK 2 ------------  "); //task2
let months = ["January","Feruary","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: "+ months[date_now.getMonth()]);

alert("------------ WELCOME TO TASK 3 ------------  "); //task3
alert("Today is "+ date_now.toDateString().slice(0,3));

alert("------------ WELCOME TO TASK 4 ------------  "); //task4
let day_now = date_now.toDateString().slice(0,3);
if(day_now.toLowerCase() == "sat" || day_now.toLowerCase() == "sun"){
    alert("Today is fun day");
}

alert("------------ WELCOME TO TASK 5 ------------  "); //task5
if(date_now.toDateString().slice(8,10) <= 15){
    alert("“First fifteen days of the month”");
}else{
    alert("“Last days of the month”.");
}

alert("------------ WELCOME TO TASK 6 ------------  "); //task6
let elapse_ms = date_now.getTime();
alert("Current Date: "+date_now+"\nElapsed miliseconds since January 1st 1970: "+elapse_ms +"\nElapsed minutes since January 1st 1970: "+ elapse_ms/(1000*60));

alert("------------ WELCOME TO TASK 7 ------------  "); //task7
if( date_now.getHours() >= 12){
    alert("it's PM");
}else{
    alert("it's AM");
}

alert("------------ WELCOME TO TASK 8 ------------  "); //task8
var later_date = new Date("12/31/2022");
alert("later date: "+later_date);

alert("------------ WELCOME TO TASK 9 ------------  "); //task9
let ramazan15time = new Date("06/18/2015").getTime();
let dayspassed = Math.floor((date_now - ramazan15time) / (24 * 60 * 60 * 1000));
alert(dayspassed+" days passed since 1st Ramazan 2015");


alert("------------ WELCOME TO TASK 10 ------------  "); //task10
let ref_date_prompt = prompt("enter refrence date in a format mm/dd/yyyy","1/1/2022");
let ref_date = new Date(ref_date_prompt);
let ref_date_sec = Math.floor(((date_now.getTime())/1000)-((ref_date.getTime())/1000));
alert("on refrence date "+ref_date+ ref_date_sec +" seconds had passed since the beginning of "+ref_date.toDateString());

alert("------------ WELCOME TO TASK 11 ------------  "); //task11
const md = new Date((date_now.getMonth()+1) + " "+date_now.getDate()+", "+date_now.getFullYear()+" "+(date_now.getHours()-1)+":"+date_now.getMinutes()+":"+date_now.getSeconds());
alert("current date: "+date_now+"\n1 hour ago it was: "+md);

alert("------------ WELCOME TO TASK 12 ------------  "); //task12
const md2 = new Date((date_now.getMonth()+1) + " "+date_now.getDate()+", "+(date_now.getFullYear()-100)+" "+(date_now.getHours()-1)+":"+date_now.getMinutes()+":"+date_now.getSeconds());
alert("current date: "+date_now+"\n100 years ago it was: "+md2);


alert("------------ WELCOME TO TASK 13 ------------  "); //task13
let user_Age = Math.ceil(+prompt("enter your exact age",21.5));
alert("your birth year is "+ (date_now.getFullYear()-user_Age));

alert("------------ WELCOME TO TASK 14 ------------  "); //task14
document.write("<h1>Electric Bill</h1>");

let customer_name= prompt("insert customer name","Sharjeel");
let num_of_units = 350;
let charges_p_unit = 16;

document.write("<p>Customer name: "+customer_name+"</p>");
document.write("<p>Month: "+months[date_now.getMonth()]+"</p>");
document.write("<p>Number of units: "+num_of_units+"</p>");
document.write("<p>Charges per unit: "+charges_p_unit+"</p>");
document.write("");
document.write("<p>net amount payable (within due date): "+(charges_p_unit*num_of_units)+"</p>");
document.write("<p>Late Payment Surcharge: "+250+"</p>");
document.write("<p>Gross Amount Payable (after Due Date): "+((charges_p_unit*num_of_units)+250)+"</p>");

//class task
//tell days of your birthday for next 10 years
startyear = 2023;
day = ["sunday","monday","tuesday","wednessday","thursday","friday","saturday"]
for(let i=0; i<10; i++){
    bithdate = new Date("November 27, "+startyear).getDay();
    console.log("for "+ startyear+"\n"+"your birthday will be on " + day[bithdate]);
    startyear += 1;
}

//tell your age by taking birthdate as an input
let bithmonth = prompt("insert your birthmonth \n 1-12",);
let birthdate = prompt("insert your birthdate \n 1-31");
let birthyear = prompt("insert your birthyear");

var birthTime = new Date(bithmonth+"/"+birthdate+"/"+birthyear).getTime();
var currentTime = new Date().getTime();
var diff = currentTime-birthTime;
var yrDiff = Math.round(diff / (1000*3600*24*365));
console.log(diff);
console.log(yrDiff);