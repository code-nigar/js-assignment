alert("Welcome to the Icecream Shop");

let price = 0;
let pricecategory = ""
let flavorName = "";
let scoopName = "";
var items = [];
let run = 9;
for(let i =0; i<=run; i++){
    let flavour = +prompt("We have Assortment of different flavours, which one you wanna buy\n insert   1   for VANILLA\n insert   2   for MANGO\n insert   3   for PINEAPPLE\n insert   4   for KING KULFA\n insert   5   for PISTACHIO QUEEN\n insert   6   for SPECIAL OREO ORANGE\n");
    let scoop = +prompt("insert 1 for SINGLE SCOOP \n insert 2 for DOUBLE SCOOP");
    
    if(flavour === 1 || flavour === 2 || flavour === 3){
        if(scoop === 1){
            price += 100;
            items.push(flavour+" "+scoop+" "+"PKR 100");
        }
        else if(scoop === 2){
            price += 150;
            items.push(flavour+" "+scoop+" "+"PKR 150");
        }
    }
    else if(flavour === 4 || flavour === 5){
        if(scoop === 1){
            price += 120;
            items.push(flavour+" "+scoop+" "+"PKR 120");
        }
        else if(scoop === 2){
            price += 180;
            items.push(flavour+" "+scoop+" "+"PKR 180");
        }
    }
    else if(flavour === 6){
        if(scoop === 1){
            price += 150;
            items.push(flavour+" "+scoop+" "+"PKR 150");
        }
        else if(scoop === 2){
            price += 250;
            items.push(flavour+" "+scoop+" "+"PKR 250");
        }
    }
    i = +prompt("Do you want to keep purchasing ? \n insert  1  to CONTINUE \n insert  10   to TERMINATE");
}
for(let k = 0; k<items.length; k++){
    let flavourNum = parseInt(items[k].charAt(0));
    let scoopNum = parseInt(items[k].charAt(2));
    let priceCatNam = items[k].slice(4,items[k].length);

    if(flavourNum === 1){
        flavorName = "VANILLA";
    }
    else if(flavourNum === 2){
        flavorName = "MANGO";
    }
    else if(flavourNum === 3){
        flavorName = "PINEAPPLE";
    }
    else if(flavourNum === 4){
        flavorName = "KING KULFA";
    }
    else if(flavourNum === 5){
        flavorName = "PISTACHIO QUEEEN";
    }
    else if(flavourNum === 6){
        flavorName = "SPECIAL OREO ORANGE";
    }
    else {
        flavorName = "";
    }

    if(scoopNum === 1){
        scoopName = "single scp.";
    }
    else if(scoopNum === 2){
        scoopName = "double scp.";
    }
    else{
        scoopName = "";
    }


    items[k] = flavorName+" "+scoopName+" ------ "+priceCatNam;
}
alert("ITEMS YOU PURCHASED:"+"\n"+items+"\n"+"\n"+"TOTAL: PKR "+ price);
console.log(items);
console.log(price);

const result = document.getElementById("reciept");

for(let i=0; i<items.length; i++){
    var item_el = document.createElement("p");
        item_el.classList.add("items_list");
        item_el.innerText = items[i];

        result.appendChild(item_el);
}
var item_el = document.createElement("p");
item_el.classList.add("items_list");
item_el.classList.add("totalprice");
item_el.innerText = "Total: PKR "+price;
result.appendChild(item_el);




//console.log("cart");
/*
var singlescoop = document.getElementsByClassName("btn-outline-success");
console.log(singlescoop); // store all single-scoop bujttons in jsobject array collection

for(let i = 0; i<singlescoop.length; i++){
    let button = singlescoop[i];            //for each buutton assigning function
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        //target points to whatever button we clicked
    })
}



================================================================================


        if(i===0){
            price += 100;
            flavorName = "VANILLA";
            scoopName = "single"
        }
        else if (i===1){
            price += 150;
            flavorName = "VANILLA";
            scoopName = "double"
        }
        else if (i===2){
            price += 100;
            flavorName = "VANILLA";
            scoopName = "single"
        }
        else if (i===3){
            price += 150;
            flavorName = "VANILLA";
            scoopName = "double"
        }
        else if (i===4){
            price += 100;
            flavorName = "VANILLA";
            scoopName = "single"
        }
        else if (i===5){
            price += 150;
            flavorName = "VANILLA";
            scoopName = "double"
        }
        else if (i===6){
            price += 120;
            flavorName = "VANILLA";
            scoopName = "single"
        }
        else if (i===7){
            price += 180;
            flavorName = "VANILLA";
            scoopName = "double"
        }
        else if (i===8){
            price += 120;
            flavorName = "VANILLA";
            scoopName = "single"
        }
        else if (i===9){
            price += 180;
            flavorName = "VANILLA";
            scoopName = "double"
        }
        else if (i===10){
            price += 150;
            flavorName = "VANILLA";
            scoopName = "single"
        }
        else if (i===11){
            price += 250;
            flavorName = "VANILLA";
            scoopName = "double"
        }else{
            alert("potato");
            
        }
        items.push(flavourName+" "+scoopName);

=================================================

alert("Welcome to the Icecream Shop");

let price = 0;
let flavorName = "";
let scoopName = "";
var items = [];
const result = document.getElementById("reciept");
let btn = document.getElementsByClassName("btn-outline-success");
console.log(btn);
for(let i=0; i<btn.length; i++){
    var btn_buy = btn[i];
    btn_buy.addEventListener('click', (e)=> {
        e.preventDefault();
        
        let parentdiv = btn_buy.parentElement;
        console.log(parentdiv);
        let flavorName =  parentdiv.children[0].innerHTML;
        let scoopName = parentdiv.children[1].innerHTML;
        console.log(flavorName);
        console.log(btn_buy.innerHTML);

        const item_el = document.createElement("p");
        //item_el.classList.add("items_list");
        item_el.innerText = flavorName+" "+scoopName;

        result.appendChild(item_el);
    })
}
*/
