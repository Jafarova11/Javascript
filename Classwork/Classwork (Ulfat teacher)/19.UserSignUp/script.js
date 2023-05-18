const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const form = document.querySelector("form");
const password = document.querySelector("#password");
const checkBox = document.querySelector("#check");
const btn = document.querySelector("button");

btn.disabled = true;
userName.addEventListener("change", function () {
  if (userName.value && email.value && password.value && checkBox.checked)
    btn.disabled = false;
});
email.addEventListener("change", function () {
  if (userName.value && email.value && password.value && checkBox.checked)
    btn.disabled = false;
});
password.addEventListener("change", function () {
  if (userName.value && email.value && password.value && checkBox.checked)
    btn.disabled = false;
});
checkBox.addEventListener("change", function () {
  if (userName.value && email.value && password.value && checkBox.checked)
    btn.disabled = false;
});

let dataUsers = JSON.parse(localStorage.getItem("dataUsers")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    id: Date.now(),
    Username: userName.value,
    Email: email.value,
    Password: password.value,
    Checkbox: checkBox.checked,
  };
  dataUsers.push(obj);
  localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
  window.location = "users.html";
});
