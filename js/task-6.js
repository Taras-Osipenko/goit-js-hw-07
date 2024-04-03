const controls = document.querySelector("controls");
const numberInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
boxesEl.style.display = "flex";
boxesEl.style.flexwrap = "wrap";
boxesEl.style.alignItems = "center";
boxesEl.style.marginTop = '30px';

numberInput.addEventListener("input", toogleValue);
createBtn.addEventListener("click", () => {
  createBoxes(number(numberInput.value));
});
destroyBtn.addEventListener("click", destroyBoxes);
let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

let boxsize = 0;
const newDiv = 0;

function createBoxes(amount) {
  boxesEl.innerHTML = "";

  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newdiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxesEl.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
  return boxesEl;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes () {
  numberInput.value = '';
  return (boxesEl.innerHTML = "")
}