//Arrays and Loops
//https://classroom.google.com/u/0/c/NDU5MzM5OTI2MTIz/a/NDg3ODAyNDQ2Mzg4/details

console.log("------------ WELCOME TO TASK 1 ------------  ");              //task1 
var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(arr);

document.write("<h2>------------ WELCOME TO TASK 2 ------------ </h2> ");              //task2

document.write("<p>"+arr[0][0]+" "+arr[0][1]+" "+arr[0][2]+" "+arr[0][3])+"</p>";
document.write("<p>"+arr[1][0]+" "+arr[1][1]+" "+arr[1][2]+" "+arr[1][3])+"</p>";
document.write("<p>"+arr[2][0]+" "+arr[2][1]+" "+arr[2][2]+" "+arr[2][3])+"</p>";

console.log("------------ WELCOME TO TASK 3 ------------  ");              //task3
for(var i = 1; i<11; i++){
    console.log(i);
}

alert("------------ WELCOME TO TASK 4 ------------  ");              //task4
console.log("------TASK 4 -- Multiplication Table------");
var tbl_Number = +prompt("enter a number to show its multiplication table",5);
var tbl_length = +prompt("enter a length of multiplication table",15);
console.log("Multiplication Table of "+ tbl_Number + ":");
for(var i = 1; i<=tbl_length; i++){
    console.log(tbl_Number + " x "+i+ " = "+ (i*tbl_Number));
}

console.log("------------ WELCOME TO TASK 5 ------------  ");              //task5
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]); 
}
for(var i=0; i<fruits.length; i++){
    console.log("element at index "+i+" is "+fruits[i]); 
}


document.write("<h2>------------ WELCOME TO TASK 6 ------------ </h2> ");              //task6
document.write("<p><b>a. counting</b></p>");
for( var c = 1; c<=15; c++){
    document.write(c+", ");
}
document.write("<p><b>b. reverse counting</b></p>");
for( var c = 10; c>=1; c--){
    document.write(c+", ");
}
document.write("<p><b>c. even counting</b></p>");
for( var c = 0; c<=20; c){
    document.write(c+", ");
    c += 2;
}
document.write("<p><b>d. odd counting</b></p>");
for( var c = 1; c<=20; c){
    document.write(c+", ");
    c += 2;
}
document.write("<p><b>e. series </b></p>");
for( var c = 2; c<=20; ){
    document.write(c+"k, ");
    c += 2;
}

alert("------------ WELCOME TO TASK 7 ------------  ");              //task7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var x = prompt("search food","chips");
var flag = false;
for( var i = 0 ; i < A.length; i++){
    if( x === A[i]){
        alert(x+" is available at index "+i+" in our bakery");
        flag = true;
        break;
    }else{
        flag = false;
    }
}
if(flag === false){
    alert("we are sorry, "+x+" is not available in our bakery");
}

document.write("<h2>------------ WELCOME TO TASK 8 ------------ </h2> ");              //task8
var A = [24, 53, 78, 91, 12];
document.write("<p> Array Items:\n"+ A + "</p>");
A.sort();
document.write("<p> The largest number is: "+ A[A.length-1]);

document.write("<h2>------------ WELCOME TO TASK 9 ------------ </h2> ");              //task9
A = [24, 53, 78, 91, 12];
document.write("<p> Array Items:\n"+ A + "</p>");
A.sort();
document.write("<p> The Smallest number is: "+ A[0]);

document.write("<h2>------------ WELCOME TO TASK 10 ------------ </h2> ");              //task10
var tbl_Number = +prompt("enter a number to show its multiple till 20",5);
document.write("<p><i><u>multiples of "+tbl_Number+"</u></i></p>")
for(var i = 1; i<=20; i++){
    document.write((i*tbl_Number) +", ");
}


/* 
//CLASS PRACTICE TASK
// write a program without using any predefined method to check palindrome word.

var prom = prompt("insert any word to check if palindrom or not","abba");
var store = [];
var storeRev = [];
var flag = false;
for(var i=0; i<prom.length;i++){
    store.push(prom[i]);
}
for(var j=prom.length-1; j>=0; j--){
    storeRev.push(prom[j]);
}
console.log(store);
console.log(storeRev);
if(store.length === storeRev.length){
    for(var k=0;k<store.length;k++)
    {
         if(store[k]===storeRev[k]){
            flag = true;
        }else{
            flag = false;
        }
    }
    if(flag === true){
    console.log("its a palindrom word");
    }else{
        console.log("its not a palindrome");
    }
}else{
    console.log("its not a palindrome");
}
*/
/*
var prom = prompt("insert any word to check if palindrom or not","abba");
var flag = "";
for(var i = prom.length-1; i>=0; i--){
    flag += prom[i];
}
if( prom === flag){
    console.log("its a palindrome word");
}else{
    console.log("not a palindrome word");
}
*/