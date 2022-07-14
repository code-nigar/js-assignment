//Functions
//https://docs.google.com/document/d/1IgJ6_24gEiQg2dDpYOhs0hj0smFukcIh0QxVs-VrvL0/edit

console.log("------------ WELCOME TO TASK 1 ------------  ");              //task1
function showDate() {
  let date = new Date();
  console.log(date);
}
showDate();

console.log("------------ WELCOME TO TASK 2 ------------  ");              //task2
function showName(fn, ln) {
  console.log("hello " + fn + " " + ln);
}
let fn = prompt("enter your first name");
let ln = prompt("enter your last name");
showName(fn, ln);

console.log("------------ WELCOME TO TASK 3 ------------  ");              //task3
function showSum() {
  let fnum = +prompt("enter first number");
  let lnum = +prompt("enter last number");
  console.log("sum = " + (fnum + lnum));
}
showSum();

console.log("------------ WELCOME TO TASK 4 ------------  ");              //task4
function calculator(opt,num1,num2) {
  if (opt === "+") {
    return num1 + "+" + num2 + " = " + Number(num1 + num2);
  } else if (opt === "-") {
    return num1 + "-" + num2 + " = " + Number(num1 - num2);
  } else if (opt === "*") {
    return num1 + "*" + num2 + " = " + Number(num1 * num2);
  } else if (opt === "/") {
    return num1 + "/" + num2 + " = " + Number(num1 / num2);
  } else if (opt === "%") {
    return num1 + "%" + num2 + " = " + Number(num1 % num2);
  } else {
    return "use one of the correct math operator from following:\n + \n - \n * \n / \n %";
  }
}
var opt = prompt("insert your operator", "/");
var num1 = +prompt("insert 1st number", "20");
var num2 = +prompt("insert 2nd number", "10");
console.log(calculator(opt,num1,num2));

console.log("------------ WELCOME TO TASK 5 ------------  ");              //task5
function makeSqr(num){
    return num*num;
}
console.log(makeSqr(5));

console.log("------------ WELCOME TO TASK 6 ------------  ");              //task6
function factorial(num) {
    // If the number is less than 0, reject it.
    if (num < 0) 
          return -1;
    // If the number is 0, its factorial is 1.
    else if (num == 0) 
        return 1;
    // Otherwise, call the recursive procedure again
      else {
          return (num * factorial(num - 1));
      }
}
console.log(factorial(5));

console.log("------------ WELCOME TO TASK 7 ------------  ");              //task7
function counting(startnum, endnum){
    for(let x=startnum; x<=endnum; x++){
        console.log(x);
    }
}
console.log(counting(85,99));

console.log("------------ WELCOME TO TASK 8 ------------  ");              //task8
function calcHypotenus(base,perp){
    return  Math.sqrt(makeSqr(base)+makeSqr(perp));
}
let base = +prompt("enter base of triangle",9);
let perp = +prompt("enter perpendicular of triangle",5);
console.log(calcHypotenus(base,perp));

console.log("------------ WELCOME TO TASK 10 ------------  ");              //task10
function checkPalindrome(stringgg){
    let checkstringgg = stringgg.split('').reverse().join('');
    if(checkstringgg === stringgg){
        return true;
    }else{
        return false;
    }
}
console.log(checkPalindrome("madam"));

console.log("------------ WELCOME TO TASK 11 ------------  ");              //task11
function sentenceCase(stringgg){
    let firstletter = stringgg[0];
    return firstletter.toUpperCase()+stringgg.slice(1,stringgg.length);
}
console.log(sentenceCase("my name is sharjeel"));

console.log("------------ WELCOME TO TASK 12 ------------  ");              //task12
function wholeSentenceCase(stringgg){
    let words = stringgg.split(' ');
    let arr = [];
    for(let x=0; x<words.length; x++){
        let firstletter = words[x].charAt(0);
     arr.push(firstletter.toUpperCase()+words[x].slice(1,words[x].length));
    }
    return arr.join(' ');
}
console.log(wholeSentenceCase("my name is sharjeel"));



console.log("------------ WELCOME TO TASK 12 ------------  ");              //task12
function longestword(stringgg){
    let words = stringgg.split(' ');
    words.sort();
    return words[words.length - 1];
}
console.log(longestword("my name is sharjeel"));


console.log("------------ WELCOME TO TASK 13 ------------  ");              //task13
function countOccurences(stringgg,letter){
      return stringgg.split(letter).length-1;
}
console.log(countOccurences("sharjeel sultan is smart","s"));


console.log("------------ WELCOME TO TASK 14 ------------  ");              //task14
function calcCircumference(radius){
  return 2*3.14*radius;
}
function calcArea(radius){
  return 3.14*radius*radius;
}
console.log("Circumference of circle = 2π(5) = "+ calcCircumference(5).toFixed(2));
console.log("Area of circle = π(5)2 = "+ calcArea(5).toFixed(2));