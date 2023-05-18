const input = document.querySelector("#exampleInput");
const addBtn = document.querySelector(".btn");
const ul = document.querySelector("ul");
let data = JSON.parse(localStorage.getItem("data")) || [];

function createValues() {
  ul.innerHTML = "";
  data.forEach((el) => {
    ul.innerHTML += `
    <li class="d-flex justify-content-between mb-2 p-3 rounded bg-light">
    <div class="align-items-center">
    <input type="checkbox" class="checkboxinput" />
    <span>${el.todoText}</span>
    </div>
    <div class="btns">
    <button type="button" class="bg-success p-1 border-0 rounded text-white" onclick=edit(${el.id})>Edit</button>
    <button class="bg-danger text-white border-0 p-1 rounded" onclick=remove(${el.id})>Delete</button>
    </div></li>`;
  });
}

createValues();
addBtn.addEventListener("click", function () {
  if (input.value != "") {
    let obj = {
      id: Date.now(),
      todoText: input.value,
    };
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
    input.value = "";
    createValues();
  } else {
    alert("Add any value");
  }
});

function remove(id) {
  data = data.filter((el) => el.id != id);
  localStorage.setItem("data", JSON.stringify(data));
  createValues();
}

function edit(id) {
  let index = data.findIndex((el) => el.id === id);
  let li = document.querySelectorAll("li")[index];
  let span = li.querySelector("span");
  input.value = span.innerText;
  span.style.display = "none";
  addBtn.innerText = "Edit";
  addBtn.addEventListener("click", function () {
    addBtn.innerText = "ADD";
  });
  input.focus();
}

function checked(id) {
  let checkBox = document.querySelector("#checkboxinput");
  let index = data.findIndex((el) => el.id === id);
  let span = document.querySelectorAll("span")[index];
  data[index].checked = checkBox.checked;
  localStorage.setItem("data", JSON.stringify(data));
  checkBox.checked = true;
  if (checkBox.checked) {
    span.style.textDecoration = "line-through";
  } else {
    span.style.textDecoration = "none";
  }
}

// window.addEventListener("keyup", function (event) {
//   if (event.code === "Enter") {
//     createValues();
//   }
// });
