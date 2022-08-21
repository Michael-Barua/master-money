const income =  document.getElementById("income");
const food =  document.getElementById("food");
const rent =  document.getElementById("rent");
const clothes =  document.getElementById("clothes");






function getInputValue(inputValue){

    const inputValueField = inputValue.value;
    const inputValueFieldString = parseInt(inputValueField)
    return inputValueFieldString;
    
}





document.getElementById("calculate-Btn").addEventListener("click",function(){

    const incomeBox = getInputValue(income)
    const foodBox = getInputValue(food)
    const rentBox = getInputValue(rent)
    const clothesBox = getInputValue(clothes)
    const saveBox = getInputValue(save)





    const totalExpense = foodBox+rentBox+clothesBox;
    const remainingTotal = incomeBox - totalExpense;




    const savingMoney = saveBox - remainingTotal;

    




    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.innerText = totalExpense

    const totalBalnce = document.getElementById("total-Balnce");
    totalBalnce.innerText = remainingTotal;
    
   

    


    


    

    
});



document.getElementById("saveBtn").addEventListener("click",function(){
    const savingAmount = document.getElementById("saving-amount");



    const save =  document.getElementById("save").value;
    const totalBalnce = document.getElementById("total-Balnce").innerText;
    console.log(totalBalnce)

   const savingPercentage = save / 100;
   const allSavingReaming = savingPercentage * totalBalnce
   const savingPayment = totalBalnce - allSavingReaming;

   savingAmount.innerText= allSavingReaming;
   const remainingBalance =  document.getElementById("remaining-Balance");

   remainingBalance.innerText = savingPayment;


   
});