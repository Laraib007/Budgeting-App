
function budgetInp(){

    if(document.getElementById("budgetInp").value !== ""){
      
let newDate = new Date();
let month = newDate.getMonth();
let date = newDate.getDate();
let year = newDate.getFullYear();

switch(month){
case 0 :
    month = "January";
    break;
case 1 :
    month = "Feburary";
    break;
case 2 :
    month = "March";
    break;
case 3 :
    month = "April";
    break;
case 4 :
    month = "May";
    break;
case 5 :
    month = "June";
    break;
case 6 :
    month = "July";
    break;
case 7 :
    month = "Augest";
    break;
case 8 :
    month = "September";
    break;
case 9 :
    month = "Octuber";
    break;
case 10 :
    month = "November";
    break;
case 11 :
    month = "December";
    break;
}
document.getElementById("dateExp").innerText = month + " " + date + " " + year;;
let target = document.getElementById("expListID");
target.setAttribute("class", "openDis");
let userInp = document.getElementById("budgetInp").value;
document.getElementById("valueExp").innerText = "Value: $" + userInp;
document.getElementById("totalBud").innerText = userInp;

} else alert("Please Enter Value First");

}


function AddExpOpen(){
    let target = document.getElementById("AddexpClose");
    target.setAttribute("class", "openDis2");
}



// <!--------------------- Add Expense Form ----------------------->

function addExpToList(){



    if(document.getElementById("selectOk").value === "Restaurants & Cafe") {
    let userInp = document.getElementById("dueDate").value;
    document.getElementById("resDueDate").innerText = userInp;

    let userInp1 =  document.getElementById("totalAmount").value;
    document.getElementById("ExpAmmoun").innerText = userInp1;

    let usrDes = document.getElementById("Descript").value;
    document.getElementById("descripDet").innerText = "DESCRIPTION: " + usrDes;

    if(document.getElementById("mySelect").value === "Yes") {
        document.getElementById("Recurring").innerText = "Recurring: YES"
    } else { document.getElementById("Recurring").innerText = "Recurring: NO"}

    let target = document.getElementById("DisNo");
    target.setAttribute("class", "ExpDiv2");

    

} 

else if(document.getElementById("selectOk").value === "Cloths & Shopping") {
    let userInp = document.getElementById("dueDate").value;
    document.getElementById("resDueDate1").innerText = userInp;


    let userInp1 = document.getElementById("totalAmount").value;
    userInp14 = Number(userInp1);
    let ok = document.getElementById("ExpAmmoun1").innerText = userInp1;

    let usrDes = document.getElementById("Descript").value;
    document.getElementById("descripDet1").innerText = "DESCRIPTION: " + usrDes;

    if(document.getElementById("mySelect").value === "Yes") {
        document.getElementById("Recurring1").innerText = "Recurring: YES"
    } else { document.getElementById("Recurring1").innerText = "Recurring: NO"}

    let target = document.getElementById("DisNo1");
    target.setAttribute("class", "ExpDiv2");
 
} 


else if(document.getElementById("selectOk").value === "Credit & Loans") {
    let userInp = document.getElementById("dueDate").value;
    document.getElementById("resDueDate2").innerText = userInp;


    let userInp1 = document.getElementById("totalAmount").value;
    userInp15 = Number(userInp1);
    document.getElementById("ExpAmmoun2").innerText = userInp1;

    let usrDes = document.getElementById("Descript").value;
    document.getElementById("descripDet2").innerText = "DESCRIPTION: " + usrDes;

    if(document.getElementById("mySelect").value === "Yes") {
        document.getElementById("Recurring2").innerText = "Recurring: YES"
    } else { document.getElementById("Recurring2").innerText = "Recurring: NO"}

    let target = document.getElementById("DisNo2");
    target.setAttribute("class", "ExpDiv2");
} 

else if(document.getElementById("selectOk").value === "Gift Card") {
    let userInp = document.getElementById("dueDate").value;
    document.getElementById("resDueDate3").innerText = userInp;


    let userInp1 = document.getElementById("totalAmount").value;
    userInp16 = Number(userInp1);
    document.getElementById("ExpAmmoun3").innerText = userInp1;

    let usrDes = document.getElementById("Descript").value;
    document.getElementById("descripDet3").innerText = "DESCRIPTION: " + usrDes;

    if(document.getElementById("mySelect").value === "Yes") {
        document.getElementById("Recurring3").innerText = "Recurring: YES"
    } else { document.getElementById("Recurring3").innerText = "Recurring: NO"}

    let target = document.getElementById("DisNo3");
    target.setAttribute("class", "ExpDiv2");
}

else if(document.getElementById("selectOk").value === "Other Expenses") {
    let userInp = document.getElementById("dueDate").value;
    document.getElementById("resDueDate4").innerText = userInp;


    let userInp1 = document.getElementById("totalAmount").value;
    userInp17 = Number(userInp1);
    document.getElementById("ExpAmmoun4").innerText = userInp1;

    let usrDes = document.getElementById("Descript").value;
    document.getElementById("descripDet4").innerText = "DESCRIPTION: " + usrDes;

    if(document.getElementById("mySelect").value === "Yes") {
        document.getElementById("Recurring4").innerText = "Recurring: YES"
    } else { document.getElementById("Recurring4").innerText = "Recurring: NO"}

    let target = document.getElementById("DisNo4");
    target.setAttribute("class", "ExpDiv2");
}





setInterval(function(){
let totalBdg = document.getElementById("budgetInp").value;
let arr = [];

let totalBdga = document.getElementById("ExpAmmoun").innerText;
totalBdga = parseInt(totalBdga);

arr.push(totalBdga);

let totalBdga1 = document.getElementById("ExpAmmoun1").innerText;
totalBdga1 = parseInt(totalBdga1);

arr.push(totalBdga1);

let totalBdga2 = document.getElementById("ExpAmmoun2").innerText;
totalBdga2 = parseInt(totalBdga2);

arr.push(totalBdga2);

let totalBdga3 = document.getElementById("ExpAmmoun3").innerText;
totalBdga3 = parseInt(totalBdga3);

arr.push(totalBdga3);

let totalBdga4 = document.getElementById("ExpAmmoun4").innerText;
totalBdga4 = parseInt(totalBdga4);

arr.push(totalBdga4);

const sum = arr.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);


var nums = arr.map(function(str) {
    return parseInt(str); });
    
    document.getElementById("blanExp").innerHTML = totalBdg - sum;
   document.getElementById("totlExp").innerHTML = sum;


}, 100);

let target = document.getElementById("AddexpClose");
    target.setAttribute("class", "noDispr1");


}

function Del (){

    let target = document.getElementById("DisNo");
    target.setAttribute("class", "noDispr1");
    var ok = document.getElementById("ExpAmmoun").innerText;
    document.getElementById("ExpAmmoun").innerText = ok - ok;

    document.getElementById("blanExp").innerText;
}

function Del1(){
    let target = document.getElementById("DisNo1");
    target.setAttribute("class", "noDispr1");
    var ok = document.getElementById("ExpAmmoun1").innerText;
    document.getElementById("ExpAmmoun1").innerText = ok - ok;

    document.getElementById("blanExp").innerText;
}

function Del2(){
    let target = document.getElementById("DisNo2");
    target.setAttribute("class", "noDispr1");
    var ok = document.getElementById("ExpAmmoun2").innerText;
    document.getElementById("ExpAmmoun2").innerText = ok - ok;

    document.getElementById("blanExp").innerText;
}

function Del3(){
    let target = document.getElementById("DisNo3");
    target.setAttribute("class", "noDispr1");
    var ok = document.getElementById("ExpAmmoun3").innerText;
    document.getElementById("ExpAmmoun3").innerText = ok - ok;

    document.getElementById("blanExp").innerText;
}
function Del4(){
    let target = document.getElementById("DisNo4");
    target.setAttribute("class", "noDispr1");
    var ok = document.getElementById("ExpAmmoun4").innerText;
    document.getElementById("ExpAmmoun4").innerText = ok - ok;

    document.getElementById("blanExp").innerText;
}

