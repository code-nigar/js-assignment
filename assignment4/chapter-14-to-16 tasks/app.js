//arrays
//https://classroom.google.com/u/0/c/NDU5MzM5OTI2MTIz/a/NTIxNzQzMjEyODgy/details

console.log("------------ WELCOME TO TASK 1 ------------" );//task1
var arr1 = [];
console.log(arr1);

console.log("------------ WELCOME TO TASK 2 ------------" );//task2
let arr2 = new Array();
console.log(arr2);

console.log("------------ WELCOME TO TASK 3 ------------" );//task3
var strArr = ["banana","mango","appple"];
console.log(strArr);

console.log("------------ WELCOME TO TASK 4 ------------" );//task4
var numArr = [1,2,3,69,888,1234];
console.log(numArr);

console.log("------------ WELCOME TO TASK 5 ------------" );//task5
var boolArr = [true,false,true,false,true];
console.log(boolArr);

console.log("------------ WELCOME TO TASK 6 ------------" );//task6
var mixArr = [true,"Mix Prickle","1234"];
console.log(mixArr);

document.write("<h2>"+"TASK 7 - LIST OF QUALIFICATIONS"+"</h2>");//task7
let qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Ph.D"];
for(var i=0; i<qualifications.length; i++){
    document.write("<p>"+"("+(i+1)+")"+ qualifications[i]+"</p>");
}

document.write("<h2>"+"TASK 8 - Student Percentages"+"</h2>");//task8
alert("------------ WELCOME TO TASK 8 ------------" );
let students = [];
students[0]= prompt("enter name of 1st student","Michael");
students[1]= prompt("enter name of 2nd student","John");
students[2]= prompt("enter name of 3rd student","Tony");
let scores = [];
scores[0]= +prompt("enter score of 1st student",320);
scores[1]= +prompt("enter score of 2nd student",230);
scores[2]= +prompt("enter score of 3rd student",480);
let percentages = [];
percentages[0] = (scores[0]/500)*100;
percentages[1] = (scores[1]/500)*100;
percentages[2] = (scores[2]/500)*100; 

for(var i=0; i<students.length; i++){
    document.write("<p>"+"Score of "+students[i]+" is "+scores[i]+". Percentage: "+percentages[i]+"%"+"</p>");
}


alert("------------ WELCOME TO TASK 9 ------------" );                     //task9
console.log("------------ WELCOME TO TASK 9 ------------" );
let colors = ["red","green","blue,","brown","white"];
//a
console.log(colors);
console.log("adding element to beginning");
colors.unshift(prompt("what color you wanna see in the beginning of array","maroon"));
console.log(colors);
//b
console.log("adding element to ending");
colors.push(prompt("what color you wanna see in the ending of array","grey"));
console.log(colors);
//c
console.log("adding elemnets to beginning");
colors.unshift("beige","off-white","matte-blue");
console.log(colors);
//d
console.log("removing element from beginning");
colors.shift();
console.log(colors);
//e
console.log("removing element from end");
colors.pop();
console.log(colors);
//f
console.log("adding element via splice()");
let startIndex  = +prompt("at what index you want to add an elemnt in array?",2);
let elemntAdd = prompt("write element you wanna add in array","sky-blue")
colors.splice(startIndex,0,elemntAdd);
console.log(colors);
//g
console.log("removing element via splice()");
startIndex  = +prompt("at what index you want to delete an elemnt in array?",2);
endIndex = +prompt("how many elements you want to delete from array",2)
colors.splice(startIndex,endIndex);
console.log(colors);

console.log("------------ WELCOME TO TASK 10 ------------ ");              //task10
console.log("scores of students: "+scores);
scores.sort();
console.log("sorted scores of students: "+scores);

console.log("------------ WELCOME TO TASK 11 ------------  ");              //task11
let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
console.log("Cities list \n "+cities);
let selectedCiti = cities.slice(2,4);
console.log("Selected Cities \n"+selectedCiti);

console.log("------------ WELCOME TO TASK 12 ------------  ");              //task12
var ar = ["This ", " is ", " my ", " cat"];
console.log("Array: \n"+ ar);
var joined = ar.join('');
console.log("String: \n"+ joined);

console.log("------------ WELCOME TO TASK 13 ------------  ");              //task13
let arr13 = [];
console.log("inserting elements array one by one");
arr13.push(1);
console.log(arr13);
arr13.push(2);
console.log(arr13);
arr13.push(3);
console.log(arr13);
console.log("removing A/C to FIFO Queue");
arr13.shift();  //outputs fifo manner
console.log(arr13);

console.log("------------ WELCOME TO TASK 14 ------------  ");              //task14
let arr14 = ["keyboard","mouse","printer","monitor"];
console.log("Devices: \n"+arr14);
console.log("removing A/C to LIFO Queue");
console.log("Out: \n"+arr14.pop());     //output lifo manner
console.log("Out: \n"+arr14.pop());     //output lifo manner
console.log("Out: \n"+arr14.pop());     //output lifo manner
console.log("Out: \n"+arr14.pop());     //output lifo manner

document.write("<h2>"+"TASK 15 - DROPDOWN MENU of manufacturers"+"</h2>");//task15
var manuf = ["Apple", "Samsung", "Nokia", "Motorola", "Sony", "Haier"];
document.write("<form><select name=\"manufacturer\"><option value=\"iphone\">"+manuf[0]+"</option><option value=\"sam\">"+manuf[1]+"</option><option value=\"nokia\">"+manuf[2]+"</option><option value=\"motorola\">"+manuf[3]+"</option><option value=\"sony\">"+manuf[4]+"</option><option value=\"haier\">"+manuf[5]+"</option></select></form>");

console.log("------------ WELCOME TO TASK 15 ------------  ");              //task15
//Check whether the input word is palindrome or not
var word = prompt("insert word","noon");
var check = word.split("").reverse().join("");

if (word === check){
    alert("its a palindrome");
}
else{
    alert("-not a palindrome");
}