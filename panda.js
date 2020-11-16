//dynamic change
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
   const loginAreas = document.getElementById("loginArea");
   loginAreas.style.display = "none";
   console.log("Done");
   const transactionArea = document.getElementById("transactionArea")
   transactionArea.style.display = "block";
})

//deposit
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function(){
   const depositNumber = getInputNumber("depositAmount")
   updateSpanText("currentDeposit", depositNumber);

   updateSpanText("currentBalance", depositNumber);
   
   document.getElementById("depositAmount").value = "";
})

//function for deposit calculation
function updateSpanText(id, depositNumber){
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   total = currentNumber + depositNumber;
   document.getElementById(id).innerText = total;
}

//input function
function getInputNumber(id){
   const Amount = document.getElementById(id).value;
   const amountNumber = parseFloat(Amount);
   return amountNumber;
}

const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function(){
   const withdrawNumber = getInputNumber("withdrawAmount");
   
   updateSpanText("currentWithdraw", withdrawNumber);
   updateSpanText("currentBalance", -1 * withdrawNumber)



   document.getElementById("withdrawAmount").value = "" ;
})
