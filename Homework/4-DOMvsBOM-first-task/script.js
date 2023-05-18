let startBtn = document.querySelector(".startbtn");
let stopBtn = document.querySelector(".stopbtn");
let resetBtn = document.querySelector(".resetbtn");
let number = document.querySelector(".number");
let incrementByOne = document.querySelector(".incrementbtn");
let decrementByOne = document.querySelector(".decrementbtn");
let inputNumber = document.querySelector(".inputnumber");
let incrementByX = document.querySelector(".incrementbyx");

let interval;
let counter = 0;
startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    counter++;
    number.innerText = counter;
  }, 1000);
  this.setAttribute("disabled", "true");
  this.setAttribute("class", "test");
  stopBtn.removeAttribute("disabled");
});
stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", "true");
});
resetBtn.addEventListener("click", function () {
  number.innerText = 0;
  counter = 0;
  clearInterval(interval);
});
incrementByOne.addEventListener("click", function () {
  counter++;
  number.innerText = counter;
});
decrementByOne.addEventListener("click", function () {
  counter--;
  number.innerText = counter;
});
incrementByX.addEventListener("click", function () {
  const inputValue = parseInt(inputNumber.value);
  counter += inputValue;
  inputNumber.value = counter;
});
