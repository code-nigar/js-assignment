//task 1
var a =10;
document.write(
    "<b><i>TASK 1</i></b>"+"<br>"+
    "Result: \n"+"<br>"+"<br>"+
    "the value of a is: "+ a + "<br>"+
    "----------------------"+ "<br>"+"<br>"+

    "the value of ++a is: " + ++a + "<br>"+

    "now the value of a is: "+ a +"<br>"+"<br>"+

    "the value of a++ is: " + a++ +"<br>"+

    "now the value of a is: "+ a +"<br>"+"<br>"+

    "the value of --a is: " + --a +"<br>"+

    "now the value of a is: "+ a +"<br>"+"<br>"+

    "the value of a-- is: " + a-- +"<br>"+

    "now the value of a is: "+ a +"<br>"
);

//task2
a=2;
var b= 1;
document.write(
    "<br>"+"<br>"+
    "<b><i>TASK 2</i></b>"+"<br>"+
    "--a = "+ Number(--a) +"<br>"+
    "--a - --b = "+ Number(--a - --b) +"<br>"+
    "--a - --b + ++b = "+ Number(--a - --b + ++b) +"<br>"+
    "--a - --b + ++b + b-- = "+ Number(--a - --b + ++b + b--) +"<br>"+"<br>"
    +"<br>"
);

//task 3
document.write("<b><i>TASK 3</i></b>"+"<br>");
var name= prompt("whats your name?");
alert("hello "+name+" :)");

//task 4 aka 5
var tNum = prompt("input any number to print multiplication table",5);
console.log("table of " + tNum);
for(var i=0; i<=10; i++){
    console.log(tNum+" x "+ i + " = "+ tNum*i);
}

//task 6
var sub1,sub2,sub3,total,mark_sub1,mark_sub2,mark_sub3,p1,p2p,p3,percentage,sumOf3;
total=100;
sub1 = prompt("enter  1st first subject ","English");
mark_sub1 = Number(prompt("enter obtained marks of your 1st subject ",80));
sub2 = prompt("enter  2nd first subject ","Urdu");
mark_sub2 = Number(prompt("enter obtained marks of your 2nd subject ",76));
sub3 = prompt("enter  3rd first subject ","S.st");
mark_sub3 = Number(prompt("enter obtained marks of your 3rd subject ",70));
sumOf3= Number(mark_sub2 + mark_sub1 + mark_sub3);
p1 = (mark_sub1/total)*100;
p2 = (mark_sub2/total)*100;
p3 = (mark_sub3/total)*100;
percentage = (p1 + p2 + p3)/3;

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Subject.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Total Marks";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Obtained Marks";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Percentage";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = sub1;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = total;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = mark_sub1;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = p1+"%";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = sub2;
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = total;
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = mark_sub2;
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = p2+"%";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
tbody.appendChild(row_3);

// Creating and adding data to fourth row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = sub3;
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = total;
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = mark_sub3;
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = p3+"%";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
tbody.appendChild(row_4);

// Creating and adding data to fifth row of the table
let row_5 = document.createElement('tr');
row_5.setAttribute("id","foot");
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "TOTAL";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = total*3;
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = sumOf3;
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = percentage+"%";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
tbody.appendChild(row_5);