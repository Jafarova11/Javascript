const resultValue = document.querySelector("p");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const addBtn = document.querySelector(".addition");
const subBtn = document.querySelector(".substract");
const multiBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".division");
const resetBtn = document.querySelector(".reset");

addBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let sum = parseInt(value1.value) + parseInt(value2.value);
    resultValue.innerText = sum;
  } else alert("Add value!");
});

subBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let sub = parseInt(value1.value) - parseInt(value2.value);
    resultValue.innerText = sub;
  } else alert("Add value!");
});

multiBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let multi = parseInt(value1.value) * parseInt(value2.value);
    resultValue.innerText = multi;
  } else alert("Add value!");
});

divBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let div = parseInt(value1.value) / parseInt(value2.value);
    resultValue.innerText = div;
  } else alert("Add value!");
});

resetBtn.addEventListener("click", function () {
  value1.value = "";
  value2.value = "";
  resultValue.innerText = "0";
});
