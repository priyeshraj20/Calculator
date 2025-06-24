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

const operators = ["+", "-", "*", "/"];

const parseExpression = (str) => {
  try {
    const result = new Function(`return ${str}`)();
    return parseFloat(result.toFixed(10)); // limit floating point issues
  } catch (e) {
    return "Error";
  }
};

const handleOperator = (operator) => {
  let display = inputDisplay.innerText;

  if (display === "") return; // Don't allow operator first

  const lastChar = display.slice(-1);

  if (operators.includes(lastChar)) {
    // Replace existing operator
    inputDisplay.innerText = display.slice(0, -1) + operator;
  } else {
    // Evaluate current expression, then add operator
    const evaluated = parseExpression(display);
    inputDisplay.innerText = evaluated + operator;
  }
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
1
plusBtn.addEventListener("click", () => handleOperator("+"));
minusBtn.addEventListener("click", () => handleOperator("-"));
multiplyBtn.addEventListener("click", () => handleOperator("*"));
divisionBtn.addEventListener("click", () => handleOperator("/"));


equalBtn.addEventListener("click", ()=>{
 const expression = inputDisplay.innerText;
  const lastChar = expression.slice(-1);

  if (operators.includes(lastChar)) {
    inputDisplay.innerText = "Error"; // Prevent evaluating incomplete expressions
    return;
  }

  try {
    const result = new Function(`return ${expression}`)();
    inputDisplay.innerText = parseFloat(result.toFixed(10));
  } catch (error) {
    inputDisplay.innerText = "Error";
  }
});


