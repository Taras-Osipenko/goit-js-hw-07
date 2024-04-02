
const userInput = document.querySelector("#name-input");

const userSpan = document.querySelector("#name-output");

userInput.addEventListener("input", userInputEvent);


function userInputEvent (event) {
    
    if (event.currentTarget.value.trim() === "") {
        userSpan.textContent = "Anonymous"
    }
    else {
        userSpan.textContent = event.currentTarget.value.trim()   
    };
}