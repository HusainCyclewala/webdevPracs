var initialValue = 0; // Initialize a variable
var currentValue = initialValue; // Track the current value
var ans = document.querySelector("#ans");

if (ans) {
    ans.innerHTML = initialValue; // Display the initial value
}
var up = function () {
    currentValue++;
    ans.innerHTML = currentValue; // Update the displayed value
};
var down = function () {
    if (currentValue == 1) {
        ans.innerHTML = 'cart empty'; // Update the displayed value
    }
    else {
        currentValue--;
        ans.innerHTML = currentValue; // Update the displayed value
    }
};


