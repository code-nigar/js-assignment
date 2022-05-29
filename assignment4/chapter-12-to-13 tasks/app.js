//IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
//https://drive.google.com/file/d/10i5GD8pjjFAVEr1_loZLQglcl_a1ZxGJ/view


alert("WELCOME TO TASK 1");//task 1
var input = prompt("insert any character or number");
// convert into ASCII value
const result = input.charCodeAt(0);
                                        //comparsion with ASCII :
if( result>=48 && result<=57){          //48-57 -- Numbers(0-9)
    alert("its a number");
}
else if (result>=65 && result<=90){     //65-90 -- Uppercase letter(A-Z)
    alert("its an Uppercase letter");
}
else if (result>=97 && result<=122){
    alert("its an Lowercase letter");   //97-122 -- Lowercase letter(a-z)
}
else{
    alert("please input a number or a letter");
}

alert("WELCOME TO TASK 2");//task 2
const num1 = +prompt("input 1st number");
const num2 = +prompt("input 2nd number");
if(num1 === num2){
    alert("both numbers are equal");
}
else if(num1>num2){
    alert(num1+" is greater than "+num2);
}
else if(num2>num1){
    alert(num2+" is greater than "+num1);
}
else{
    alert("insert correct input");
}

alert("WELCOME TO TASK 3");//task3
const num3 = +prompt("input number");
if(num3 < 0){
    alert("number is negative");
}
else if(num3 > 0){
    alert("number is positive");
}
else if(num3 === 0){
    alert("number is equal to zero");
}
else{
    alert("insert correct input");
}

alert("WELCOME TO TASK 4");//task4
const ch = prompt("insert any single character").toLowerCase().charCodeAt(0);
                                        //comparsion with ASCII :
if( ch===97 || ch===101 || ch===105 || ch===111 || ch===117){  //97-a, 101-e, 105-i, 111-o, 117-u 
    alert(true+" ,its a vowel");
}
else{
    alert(false+" ,it's not a vowel");
}


alert("WELCOME TO TASK 5");//task5
var pass = prompt("enter new password");
if(pass === ""){
    pass = prompt("enter new password please");
    var rePass = prompt("repeat your password");
    if(rePass === ""){
        rePass = prompt("please repeat your password please")
    }
}else{
        var rePass = prompt("repeat your password");
        if(rePass === ""){
            rePass = prompt("please repeat your password please")
        }
}

if(pass != "" && rePass !=""){
    if(pass === rePass){
        alert("“Correct! The password you entered matches the original password”.");
    }else{
        alert("“Incorrect password”");
    }
}else{
    console.log("error: task 5");
}

alert("WELCOME TO TASK 6");//task6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

alert("WELCOME TO TASK 7");//task7
var time = +prompt("enter time in 24hr format",19);
var num=0;
if(time>=0 && time<=11){
    for(num=0; num++; num<=11){
        if(time === num){
            alert("it's "+time+" A.M.");
            break;
        }
    }
}else{
    for(num=12; num++; num<=24){
        if(time === num){
            var resTime = time-12;
            alert("it's "+ resTime +" P.M.");
            break;
        }
    }
}
