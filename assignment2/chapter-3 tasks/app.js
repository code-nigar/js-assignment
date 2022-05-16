//task 1
var age = 21;
alert("i am "+age+" years old");

//task 2
var visitCount = localStorage.getItem("page_view");
// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
alert("you have visited this site "+visitCount+" time");

//task3
var myBirthYear = 2000;
alert("my birth year is "+myBirthYear +"\n"+"data type of my declared variable is "+ typeof(myBirthYear));

//task4
var visitor_name, prod_title, qtty;
visitor_name = prompt("whats your name?");
prod_title = prompt("what product you want \n * PJs,\n * Shorts,\n * Shirts,\n * Tees,\n * TankTops");
qtty= prompt("how many products you want?");
alert(visitor_name + " ordered "+qtty+" "+prod_title+"(s) on XYZ clothing store");
