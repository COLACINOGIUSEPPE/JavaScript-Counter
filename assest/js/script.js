let display = document.createElement("div");
document.getElementById("box").appendChild(display);
display.classList.add("display");


let num = document.createElement("p");
let displayNumber = document.createTextNode("0");
num.appendChild(displayNumber);
display.appendChild(num);


let counterBox = document.createElement("div");
counterBox.classList.add("counterBox");
display.after(counterBox);

// Buttons start here!

let decreaseButton = document.createElement("button");
let decreaseText = document.createTextNode("-");
decreaseButton.classList.add("minus");
decreaseButton.appendChild(decreaseText);
counterBox.appendChild(decreaseButton);


let resetButton = document.createElement("button");
let resetText = document.createTextNode("RESET");
resetButton.classList.add("reset");
resetButton.appendChild(resetText);
counterBox.appendChild(resetButton);

let increaseButton = document.createElement("button");
let increaseText = document.createTextNode("+");
increaseButton.classList.add("plus");
increaseButton.appendChild(increaseText);
counterBox.appendChild(increaseButton);

// Counter starts working pressing on the buttons.
// Increase Button.

let i = 0;

increaseButton.addEventListener("click", () => {
    i++; 
    num.innerHTML = i;
});

// Decrease Button.
decreaseButton.addEventListener("click", () => {
    i--;
    num.innerHTML = i;
})

// Reset Button.
resetButton.addEventListener("click", () => {
    i=0;
    num.innerHTML = i;
})

