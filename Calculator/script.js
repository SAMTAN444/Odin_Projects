const display = document.getElementById("display");
const buttonsContainer = document.getElementById("buttons");

const buttonValues = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", "C", "=", "+"
];

let currentInput = " ";

// Generate buttons dynamically
buttonValues.forEach(value => {
    const btn = document.createElement("button")
    btn.textContent = value
    btn.addEventListener("click", () => handleClick(value))
    buttonsContainer.appendChild(btn)
})

function handleClick(value) {
    if (value === "C") {
        currentInput = " ";
        display.textContent = "0";
    } else if (value === "=") {
        try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
        } catch {
            display.textContent = "Error"
            currentInput = " "
        }
    } else {
        currentInput += value;
        display.textContent = currentInput
    }
}