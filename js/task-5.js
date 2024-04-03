


const button = document.querySelector(".change-color");

const span = document.querySelector(".color");

const body = document.querySelector("body");

button.addEventListener("click", handleClick);

function handleClick (event) {
  console.log("Ha кнопку було натиснуто")
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  let randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  
  span.textContent = randomColor;

};




