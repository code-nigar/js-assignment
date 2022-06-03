//User Input & Conditional Statement | JAVASCRIPT
//https://drive.google.com/file/d/18p0_VDp0Rcxr2gUs4ylBGIu0xa2tK-tU/view

//task 1
var city = prompt("enter city name", "Karachi");
if(city.toLowerCase() === "karachi")
    {
    alert("welcome to city of lights");
    }else{
        alert("welcome to "+city);
}

//task 2
var gender = prompt("Enter your Geender");
if( gender === "male"){
    alert("Good Morning Sir!");
}
else if ( gender === "female"){
    alert("Good Morning Maam!");
}
else{
    alert("Good Morning !");
}

//task3
var color = prompt("Type a signal color to know the message accordingly");
if( color === "red"){
    alert("Must stop");
}
else if ( color === "green"){
    alert("Move now");
}
else if ( color === "yellow"){
    alert("Hold");
}
else{
    alert("type correct signal color in lowercase");
}

//task4
var fuel = +prompt("enter crrent amount of fuel in Litres", "0.10");
if(fuel < 0.25)
    {
    alert("your fuel level is low! fill it up now");
    }else{
        alert("your fuel level is aboce 0.25 litre");
}

//task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true"); //does not show output
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true"); //does not show output
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true"); //does not show output
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");     //does not show output
}

if("car" < "cat"){
alert("car is smaller than cat");   //because r comes before t
}

//task 6
var sub1,sub2,sub3,total,mark_sub1,mark_sub2,mark_sub3,p1,p2p,p3,percentage,sumOf3;
total=100;
mark_sub1 = Number(prompt("enter obtained marks of your 1st subject ",80));
mark_sub2 = Number(prompt("enter obtained marks of your 2nd subject ",76));
mark_sub3 = Number(prompt("enter obtained marks of your 3rd subject ",70));
sumOf3= Number(mark_sub2 + mark_sub1 + mark_sub3);
p1 = (mark_sub1/total)*100;
p2 = (mark_sub2/total)*100;
p3 = (mark_sub3/total)*100;
percentage = (p1 + p2 + p3)/3;

alert("keep going \n you'll get to see the result on page body in the end")
document.write("<h2>"+"Mark Sheet"+"</h2>");
document.write("<p>"+"Total marks: "+(total*3)+"</p>");
document.write("<p>"+"Marks Obtained: "+sumOf3+"</p>");
document.write("<p>"+"Percentage: "+percentage+"%"+"</p>");
if(percentage >= 80){
    document.write("<p>"+"Grade: A-one "+"</p>");
    document.write("<p>"+"Remarks: Excellent "+"</p>");

}
else if( percentage >= 70){
    document.write("<p>"+"Grade: A "+"</p>");
    document.write("<p>"+"Remarks: Good "+"</p>");
}
else if( percentage >= 60){
    document.write("<p>"+"Grade: B "+"</p>");
    document.write("<p>"+"Remarks: need improvement "+"</p>");
}
else{
    document.write("<p>"+"Grade: F "+"</p>");
    document.write("<p>"+"Remarks: Fail "+"</p>");
}

//task 7
var secretNum= 7;
var guessNum = +prompt("welcome to guess game\n guess any number between 1 - 10");
if(guessNum===secretNum){
    alert("Bingo! Correct answer");
}
else if ( guessNum === (secretNum-1)){
    alert("thats close :0");
}
else if ( guessNum === (secretNum+1)){
    alert("thats close :0");
}
else{
    alert("you lose");
}
//task 8
var num = +prompt("enter any number","9");
if(num%3 === 0 ){
    alert("number you entered is divisible by 3");
}
else{
    alert("number you entered is not divisible by 3");
}

//task 9
num = +prompt("enter any number","2");
if(num%2 ===0 ){
    alert("the entered number was EVEN");
}else{
    alert("the entered number was ODD");
}

//task 10
var t = +prompt("insert WEATHER TEMPERATURE in celcius","40")
if(t>=40){
    alert("“It is too hot outside.”");
}
else if(t>30 && t<40){
    alert("“The Weather today is Normal.”");
}
else if(t>20 && t<30){
    alert("“Today’s Weather is cool.”");
}
else if(t>10 && t<20){
    alert("“OMG! Today’s weather is so Cool.”");
}
else{
    alert("temperature out of scale");
}

//task 10

var opt = prompt("insert your operator","/");
var num1 = +prompt("insert 1st number","20");
var num2 = +prompt("insert 2nd number","10");
if(opt==="+"){
alert( num1+"+"+num2+" = "+Number(num1 + num2) );
}
else if(opt==="-"){
alert( num1+"-"+num2+" = "+Number(num1 - num2) );
}
else if(opt==="*"){
alert( num1+"*"+num2+" = "+Number(num1 * num2) );
}
else if(opt==="/"){
alert( num1+"/"+num2+" = "+Number(num1 / num2) );
}
else if(opt==="%"){
alert( num1+"%"+num2+" = "+Number(num1 % num2) );
}else{
    alert("use one of the correct math operator from following:\n + \n - \n * \n / \n %");
}