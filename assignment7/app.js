//https://drive.google.com/file/d/1cQwGwIcGjB7BbC1DeNGFl1lsLWb7yGGZ/view
//STRING METHODS

alert("------------ WELCOME TO TASK 1 ------------  ");              //task1 
var x = prompt("Enter your first name");
var y = prompt("Enter your Last name");
var fullName = x+" "+y;
alert("HELLO "+fullName.toUpperCase()+" !");

alert("------------ WELCOME TO TASK 2 ------------  ");              //task2
let mobName = prompt("Enter you Favourite Mobile Phone","iPhone 7 plus");
alert("Favourite phone is: "+mobName+"\n"+"String Length: "+ mobName.length);

alert("------------ WELCOME TO TASK 3 ------------  ");              //task3
alert("String: Pakistani \n Index of 'n': "+ "pakistani".indexOf("n"));

alert("------------ WELCOME TO TASK 4 ------------  ");              //task4
let hw = "Hello World !";
alert("String: "+hw+"\n Index of 'n': "+ hw.lastIndexOf("l"));

alert("------------ WELCOME TO TASK 5 ------------  ");              //task5 
var pk = "Pakistani";
alert("String: "+pk+" \n Character of index 3 is: "+ pk.charAt(3));

alert("------------ WELCOME TO TASK 6 ------------  ");              //task6 
var arrX = [];
arrX.push(prompt("Enter your first name"));
var arrY = [];
arrY.push(prompt("Enter your Last name"));
var fullName = arrX.concat(" ", arrY);
alert("HELLO "+fullName+" !");

alert("------------ WELCOME TO TASK 7 ------------  ");              //task7
var city  = "Hyderabad";
alert(city.replace("Hyder","Islam"));

alert("------------ WELCOME TO TASK 8 ------------  ");              //task8
var message = "Ali and Sami are best friends. They play cricket andfootball together.";
alert(message.replace(/and/g,"&"));

alert("------------ WELCOME TO TASK 9 ------------  ");              //task9
var strin = "472";
var num = parseInt(strin);
alert("value : "+num);
alert("type : "+ typeof(num));

alert("------------ WELCOME TO TASK 10 ------------  ");              //task10
var abc = prompt("insert your input","input");
var ABC = abc.toUpperCase();
alert("user input: "+ abc);
alert("upper case: "+ ABC);

alert("------------ WELCOME TO TASK 11 ------------  ");              //task11
//var abc = prompt("insert your input","input");
var A = abc.charAt(0);
var bc = abc.slice(1,abc.length);
alert("user input: "+ abc);
alert("title case: "+ A.toUpperCase()+ bc.toLowerCase());

alert("------------ WELCOME TO TASK 12 ------------  ");              //task12
var num = 35.36;
num = num.toString();
alert("Number:  "+num+"\nResult:  "+num.split(".").join(""));

alert("------------ WELCOME TO TASK 13 ------------  ");              //task13
var un  = prompt("Insert your username","oyo@123.py");
for(let i=0; i<un.length; i++){
    if(un.charCodeAt(i) === 33 || un.charCodeAt(i) === 44 || un.charCodeAt(i) === 46 || un.charCodeAt(i) === 64){
        alert("INSERT CORRECT USERNAME.\n invalid symbol detected at index "+ i + " ; "+ un[i]);
    }
}

alert("------------ WELCOME TO TASK 14 ------------  ");              //task14
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var pqr =prompt("WELCOME TO OUR BACKERY \n What do you want to order?","cOOkiE").toLowerCase();
var found = false;
for(let i=0; i<A.length; i++){
   if(A[i] === pqr){
    alert(A[i]+" is available at index "+ i + " in our bakery");
    found = true;
   }
}
if(found === false){
    alert(pqr + " not found in our bakery");
}

alert("------------ WELCOME TO TASK 15 ------------  ");              //task15
let passw  = prompt("Enter Password ");
let flagAlpha = false;
let flagNum = false;
let start = true;
if(passw.length < 6){
    alert("your password must be longer than 6 characters. \n insert new password again");
    //passw  = prompt("Enter Password ");
}
if( passw.charCodeAt(0) >= 48 &&  passw.charCodeAt(0) <= 57){
    alert("password can not begin with a number");
    start = false;
}else{
    start = true;
}

for(let i=0; i<passw.length; i++){
    if((passw.charCodeAt(i) >= 65 && passw.charCodeAt(i) <= 90) || (passw.charCodeAt(i) >= 97 && passw.charCodeAt(i) <= 122)){
        flagAlpha = true;
    }
    if(passw.charCodeAt(i) >= 48 &&  passw.charCodeAt(i) <= 57){
        flagNum = true;
    }
}

if( flagAlpha === true && flagNum === true && start === true && passw.length >= 6){
    alert("PASSWORD SUCCEFULL");
}

console.log("------------ WELCOME TO TASK 16 ------------  ");              //task16
var university = "University of Karachi";
console.log(university.split(""));

alert("------------ WELCOME TO TASK 17 ------------  ");              //task17
var variable  = prompt("insert your Country name","Pakistan");
alert("Country Name: "+ variable+"\n"+"last character: "+ variable.charAt(variable.length-1));


alert("------------ WELCOME TO TASK 18 ------------  ");              //task18
var str = "the quick brown fox jumps over the lazy dog";
let thecount = str.split("the");
alert("string = "+ str +"\n"+ "Count of 'the' =  " + (thecount.length-1));

console.log("------------ WELCOME TO TASK 19 ------------  ");              //task19
//var str = "the quick brown fox jumps over the lazy dog";
console.log(str.split("the").join("A"));