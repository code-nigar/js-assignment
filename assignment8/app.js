//https://docs.google.com/document/d/1IC7lyeCYg62LYNWXS1vnAbbe4eVVK0KT25NIB-l0sGA/edit
//MATH METHODS

alert("------------ WELCOME TO TASK 1 ------------  "); //task1
let positive_int = +prompt("Inser a positive Integer", 983.121);
alert("number: " + positive_int);
alert("round-of value: " + Math.round(positive_int));
alert("floor value: " + Math.floor(positive_int));
alert("ceil value: " + Math.ceil(positive_int));

alert("------------ WELCOME TO TASK 2 ------------  "); //task2
let negative_int = +prompt("Inser a positive Integer", -12.512);
alert("number: " + negative_int);
alert("round-of value: " + Math.round(negative_int));
alert("floor value: " + Math.floor(negative_int));
alert("ceil value: " + Math.ceil(negative_int));

alert("------------ WELCOME TO TASK 3 ------------  "); //task3
alert("the absolute value of " + negative_int + "is" + Math.abs(negative_int));

//document.write("------------ WELCOME TO TASK 4 ------------  "); //task4
document.getElementById("dice").addEventListener("click", diceFunc);

function diceFunc() {
    let value = Math.ceil((Math.random()*10)%6);
    const para = document.createElement("p");
    para.innerText = "Random dice value: "+ value;
    document.getElementById("diceValues").appendChild(para);
}

//document.write("------------ WELCOME TO TASK 5 ------------  "); //task5
document.getElementById("coin").addEventListener("click", coinFunc);

function coinFunc() {
    let value = Math.round((Math.random()));
    if(value === 0 ){
        value = "Head"; 
    }else{
        value = "Tails";
    }
    const para = document.createElement("p");
    para.innerText = "Random coin value: "+ value;
    document.getElementById("coinValues").appendChild(para);
}

//document.write("------------ WELCOME TO TASK 6------------  "); //task6
document.getElementById("randNum").addEventListener("click", randNumFunc);

function randNumFunc() {
    let value = Math.ceil((Math.random()*100));
    const para = document.createElement("p");
    para.innerText = "Random dice value: "+ value;
    document.getElementById("randNumValues").appendChild(para);
}
alert("------------ WELCOME TO TASK 7 ------------  "); //task7
let input = prompt("insert your weight","56.54 kiloGrams");
let weight = parseFloat(input.slice(0,input.indexOf("k")));
alert("THE WEIGHT OF USER IS "+weight+" KILOGRAMS");

alert("------------ WELCOME TO TASK 8 ------------  "); //task8
let input2 = parseInt(prompt("guess secret number between 1-10"));
let secretNum = Math.ceil((Math.random()*10));
console.log("task8 - secret number was "+secretNum);
if(input2 === secretNum){
    alert("Congratulations!! \n number matches " + secretNum);
}else{
    alert("number not matches")
}