const startBtn = document.createElement("button");
const nextBtn = document.createElement("button");
const timer = document.createElement("p");
const loginForm = document.createElement("form");
const nameLabel = document.createElement("label");
const surnameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const surnameInput = document.createElement("input");
const checkInput = document.createElement("input");
const radio1Input = document.createElement("input");
const radio2Input = document.createElement("input");
const submitBtn = document.createElement("button");

document.body.append(startBtn);
document.body.append(timer);
document.body.append(loginForm);
loginForm.append(nameLabel);
loginForm.append(nameInput);
loginForm.append(surnameLabel);
loginForm.append(surnameInput);
loginForm.append(checkInput);
loginForm.append(radio1Input);
loginForm.append(radio2Input);
loginForm.append(submitBtn);
document.body.append(nextBtn);

startBtn.innerText = "Let's start...";
submitBtn.innerText = "Submit";
nextBtn.innerText = "Next Page >";
nameLabel.innerHTML = "<strong>Name<strong>";
surnameLabel.innerHTML = "<strong>Surname<strong>";
timer.innerText = `00:15`;
submitBtn.setAttribute("disabled", "");
nextBtn.setAttribute("disabled", "");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("required", "");
surnameInput.setAttribute("type", "text");
surnameInput.setAttribute("required", "");
checkInput.setAttribute("type", "checkbox");
checkInput.setAttribute("required", "");
radio1Input.setAttribute("type", "radio");
radio1Input.setAttribute("required", "");
radio1Input.setAttribute("name", "radio");
radio2Input.setAttribute("type", "radio");
radio2Input.setAttribute("required", "");
radio2Input.setAttribute("name", "radio");

loginForm.style.height = "85vh";
loginForm.style.border = "1px dashed black";
loginForm.style.flexDirection = "column";
loginForm.style.display = "flex";
loginForm.style.justifyContent = "center";
loginForm.style.alignItems = "center";
loginForm.style.gap = "10px";
timer.style.border = "1px solid black";
timer.style.width = "100px";
timer.style.textAlign = "center";
checkInput.style.accentColor = "red";
radio1Input.style.accentColor = "blue";
radio2Input.style.accentColor = "blue";

let interval;
startBtn.addEventListener("click", function () {
  clearInterval(interval);
  let counter = 15;
  interval = setInterval(() => {
    counter -= 1;
    timer.style.borderColor = "blue";
    timer.style.color = "blue";
    timer.innerText = `00:${counter}`;
    submitBtn.removeAttribute("disabled", "");
    this.setAttribute("disabled", "true");
    if (counter < 10) {
      timer.style.borderColor = "red";
      timer.style.color = "red";
    }
    if (counter === 0) {
      clearInterval(interval);
      timer.innerText = "You missed :(";
      timer.style.color = "red";
      submitBtn.setAttribute("disabled", "");
      this.removeAttribute("disabled", "");
    }
  }, 1000);
});

submitBtn.addEventListener("click", function () {
  nextBtn.removeAttribute("disabled", "");
});

nextBtn.addEventListener("click", function () {
  alert("You finished!");
});
