const inputDisplay = document.getElementById("input-display");
const oneBtn = document.getElementById("1-button");
const twoBtn = document.getElementById("2-button");
const threeBtn = document.getElementById("3-button");
const fourBtn = document.getElementById("4-button");
const fiveBtn = document.getElementById("5-button");
const sixBtn = document.getElementById("6-button");
const sevenBtn = document.getElementById("7-button");
const eightBtn = document.getElementById("8-button");
const nineBtn = document.getElementById("9-button");
const zeroBtn = document.getElementById("0-button");
const clearBtn = document.getElementById("clear-button");
const plusBtn = document.getElementById("plus-button");
const minusBtn = document.getElementById("minus-button");
const multiplyBtn = document.getElementById("multiply-button");
const divisionBtn = document.getElementById("division-button");
const equalBtn = document.getElementById("equal-button");

inputDisplay.innerText = "";


const buttonToDisplay = (value) => {   
inputDisplay.innerText += value;
}

const clearDisplay = () => {
    inputDisplay.innerText = "";
}


//calculator functions

const addition = () => {

};

oneBtn.addEventListener("click", ()=>buttonToDisplay(oneBtn.value));
twoBtn.addEventListener("click", ()=>buttonToDisplay(twoBtn.value));
threeBtn.addEventListener("click", ()=>buttonToDisplay(threeBtn.value));
fourBtn.addEventListener("click", ()=>buttonToDisplay(fourBtn.value));
fiveBtn.addEventListener("click", ()=>buttonToDisplay(fiveBtn.value));
sixBtn.addEventListener("click", ()=>buttonToDisplay(sixBtn.value));
sevenBtn.addEventListener("click", ()=>buttonToDisplay(sevenBtn.value));
eightBtn.addEventListener("click", ()=>buttonToDisplay(eightBtn.value));
nineBtn.addEventListener("click", ()=>buttonToDisplay(nineBtn.value));
zeroBtn.addEventListener("click", ()=>buttonToDisplay(zeroBtn.value));
clearBtn.addEventListener("click", ()=>clearDisplay());

plusBtn.addEventListener("click",()=>{
    buttonToDisplay(plusBtn.value);
});

minusBtn.addEventListener("click", ()=>{
    buttonToDisplay(minusBtn.value);
});

multiplyBtn.addEventListener("click", ()=>{
    buttonToDisplay(multiplyBtn.value);
});

divisionBtn.addEventListener("click", ()=>{
    buttonToDisplay(divisionBtn.value);
});

equalBtn.addEventListener("click", ()=>{
   return; 
});


clearBtn.addEventListener("click", ()=>clearDisplay());