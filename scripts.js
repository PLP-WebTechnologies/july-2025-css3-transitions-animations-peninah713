// -------------------------------
// Part 2: JavaScript Functions
// -------------------------------

// Global scope variable
let globalVar = "I'm global!";

// Function with parameter + return value
function squareNumber(num) {
  let result = num * num; // local scope variable
  console.log("Global variable inside function:", globalVar);
  return result;
}

// Event: Button click to calculate
document.getElementById("calcBtn").addEventListener("click", function() {
  let number = 5;
  let squared = squareNumber(number); // call function
  document.getElementById("calcResult").textContent = 
    `The square of ${number} is ${squared}`;
});


// -------------------------------
// Part 3: Combining CSS + JS
// -------------------------------

// Event: Animate the box when button is clicked
document.getElementById("triggerAnimationBtn").addEventListener("click", function() {
  const box = document.getElementById("animatedBox");

  // Add animation class
  box.classList.add("animate");

  // Remove animation class after it ends, so it can be re-triggered
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
});
