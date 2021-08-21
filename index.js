let billInput = document.querySelector(".bill-box input");
let numInput = document.querySelector(".numPeople-box input");
let tipAmount = document.querySelector(".tip-amount-right-box h1");
let totalAmount = document.querySelector(".total-amount-right-box h1");
let resetButton = document.querySelector(".reset-box button");
let getTipBoxButtons = document.querySelectorAll(".select-tip-box button");
var tipPercent = 15;

billInput.addEventListener("change",function(event){
    console.log("Change text box");
    calcTip();
    calcTotal();
});

billInput.addEventListener("focus",function(event){
    this.value="";
});

numInput.addEventListener("focus", function(event){
    this.value="";
});

numInput.addEventListener("change",function(event){
    console.log("Change text box");
    calcTip();
    calcTotal();
});

//Click Tip button
for(var i=0; i<getTipBoxButtons.length; i++){
    getTipBoxButtons[i].addEventListener("click", function(event){
        var tip3 = parseInt(this.textContent);
        console.log(tip3);
        tipPercent = tip3;
        resetButtons();
        document.querySelector(".select-tip-box input").value="";
        this.classList.add("pushed");
        calcTip();
        calcTotal();
    });
}

document.querySelector(".select-tip-box input").addEventListener("change", function(event){
    tipPercent=parseInt(this.value);
    calcTip();
    calcTotal();
});

resetButton.addEventListener("click", function(){
    console.log("Resetting");
    var resetArray = [billInput,numInput,totalAmount,tipAmount];
    const zero = 0;
    billInput.value="";
    tipAmount.textContent="$"+zero.toFixed(2);
    totalAmount.textContent="$"+zero.toFixed(2);
    numInput.value=1;
    resetButtons();
});

function calcTip(){
    try {
        var tip2 = parseFloat(billInput.value)*(tipPercent/100)/(parseInt(numInput.value));
        tipAmount.textContent="$"+Number(tip2).toFixed(2);
    } catch (error) {
        console.log(error);
    }
    return Number(tip2).toFixed(2);
}

function calcTotal(){
    try {
        var total2 = parseFloat(billInput.value)/(parseInt(numInput.value));
        total2 = total2 + Number(calcTip());
        console.log(total2);
        totalAmount.textContent="$"+Number(total2).toFixed(2);
    } catch (error) {
        console.log(error);
    }
    return Number(total2).toFixed(2);
}
function resetButtons(){
    for(var i =0; i<getTipBoxButtons.length; i++){
        //console.log(this.classList[0]==="pushed");
        // console.log(this.classList.includes("pushed"));
        if(getTipBoxButtons[i].classList[0]==="pushed"){
             getTipBoxButtons[i].classList.remove("pushed");
         }
    }
}