//task 1
var num1,num2;
num1= Number(prompt("enter first number"));
num2= Number(prompt("enter second number"));
// addition
num3 = num1+num2;
alert("sum of "+num1+" and "+num2+" is "+ num3);


//task 2
//subtraction
num3 = num1-num2;
alert("difference of "+num1+" and "+num2+" is "+ num3);
//multiplication
num3 = num1*num2;
alert("multiple of "+num1+" and "+num2+" is "+ num3);
//division
num3 = num1/num2;
alert("divion of "+num1+" and "+num2+" is "+ num3);
//modulus
num3 = num1%num2;
alert("remainder of "+num1+" and "+num2+" is "+ num3);


//task3
var number;
alert("a. declared number "+number);
number= 5;
alert("b. initial value = "+ number);
number = number + 1;
alert("c. incremented value = "+ number);
number = number + 7;
alert("d. value after addition = "+ number);
number = --number;
alert("e. decremented value = "+ number);
number = number%3;
alert("f. value after division = "+ number);


//task4
var ticket = 600;
alert("the price of 5 ticket is "+ ticket*5 + "PKR");

//task 5
console.log("table of four");
for(var i=0; i<=10; i++){
    console.log("4 x "+ i + " = "+ 4*i);
}


//task 6
var celTemp=prompt("insert a temperature in celsuis");
var convertToF = (celTemp*9/5)+32;
alert(celTemp+" C = " +convertToF+" F");

var ferTemp=prompt("insert a temperature in fahrenheit");
var convertToC = (ferTemp-32)*5/9;
alert(ferTemp+" F = " +convertToC+" C");


//task 7
var priceOfItem1 = 650;
var qtty1 = 3;
var priceOfItem2 = 100;
var qtty2 = 7;
var shippingCharges = 100;
alert(
    "price of item 1 is "+priceOfItem1+"\n"
    +"price of item 2 is "+ priceOfItem2+"\n"
    +"qtty of item 1 is "+ qtty1 +"\n"
    +"qtty of item 2 is "+ qtty2 +"\n"
    +"\n total cost of your order is "+ Number((priceOfItem1*qtty1)+(priceOfItem2*qtty2)+shippingCharges)
);


//task 8
var totalMarks = 980;
var obtMarks = 804;
var percentage = (obtMarks/totalMarks)*100;
alert(
    "total marks: "+totalMarks +"\n"+
    "obtained marks: "+obtMarks+ "\n"+
    "percentage: "+ percentage +"%"
);


//task 9
var usd_amount = 10;
var saudi_amount = 25;
var pkr_amount = (10*194)+(25*28);
alert("Total currency in pkr: "+ pkr_amount);


//task 10
var $num = 20;
alert("nummber is "+ $num + "\n"
    +"add 5 multiply 10 divide 2 =  "+ Number((($num+5)*10)/2)   
);


//task 11
var currentYear = 2022;
var birthyear = prompt("whats your birth year","1999");
var  yourAge= currentYear-birthyear;
alert("your current age is "+ yourAge);


//task 12
var radius = 20;
alert("radius of a circle = "+ radius+"\n"
    +"\n circumference of circle = "+ Number(radius*2*3.14)
    +"\n area of circle = "+ Number(radius*radius*3.14)
);


//task 13
var favSnk = prompt("your favourite snack ","chocolatechip");
var current_age = prompt("what is your current age ",21);
var estimAge = prompt("what would be your estimated age ",65);
var amount = prompt("Amount of snacks you eat perday ",3);
alert("you will need "
    + Number(((estimAge-current_age)*365)*amount) + " "+
    favSnk+" to last until the ripe at age of "+ estimAge
);