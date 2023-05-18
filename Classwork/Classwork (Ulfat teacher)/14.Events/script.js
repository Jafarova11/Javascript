const loginForm = document.querySelector("#loginform");
const nameInput = document.querySelector("#nameInput");
const surnameInput = document.querySelector("#surnameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const checkVisibility = document.querySelector("#checked");
const checkLabel = document.querySelector("#check");
const submitBtn = document.querySelector("#submit");
const radios = document.querySelectorAll(".radios");

nameInput.addEventListener("mousedown", function () {
  this.style.backgroundColor = "gray";
  this.style.color = "white";
});
nameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});
surnameInput.addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
});
surnameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});
emailInput.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
emailInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});
const defaultV = 123456;
passwordInput.addEventListener("focus", function () {
  this.defaultValue = defaultV;
});
passwordInput.addEventListener("mouseout", function () {
  this.defaultValue = "";
});
checkVisibility.addEventListener("click", function () {
  if (this.checked) {
    checkLabel.style.visibility = "visible";
  } else {
    checkLabel.style.visibility = "hidden";
  }
});

radios.forEach((item) =>
  item.addEventListener("click", function () {
    alert("Finish!");
  })
);
submitBtn.setAttribute("disabled", "");

nameInput.addEventListener("change", function () {
  if (
    nameInput.value !== "" &&
    surnameInput.value !== "" &&
    checkVisibility.checked
  ) {
    submitBtn.removeAttribute("disabled", "");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});
surnameInput.addEventListener("change", function () {
  if (
    nameInput.value !== "" &&
    surnameInput.value !== "" &&
    checkVisibility.checked
  ) {
    submitBtn.removeAttribute("disabled", "");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});
checkVisibility.addEventListener("change", function () {
  if (
    nameInput.value !== "" &&
    surnameInput.value !== "" &&
    checkVisibility.checked
  ) {
    submitBtn.removeAttribute("disabled", "");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});
