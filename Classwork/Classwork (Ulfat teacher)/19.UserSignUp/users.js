const boxes = document.querySelector(".boxes");
const addUsers = document.querySelector("#addbtn");

addUsers.addEventListener("click", function () {
  window.location = "index.html";
});

let dataUsers = JSON.parse(localStorage.getItem("dataUsers")) || [];

function createCards() {
  boxes.innerHTML = "";
  dataUsers.forEach((el) => {
    const box = document.createElement("div");
    boxes.append(box);
    box.innerHTML = `
  <h2 class="text-center mb-4">User</h2>
  <h5 class="mb-3">User:${el.Username}</h5>
  <h5 class="mb-3">Name:${el.Email}</h5>
  <button style="background-color:red;padding:8px;border:transparent;border-radius:6px;color:white" onclick="remove (${el.id})">Delete</button>
  `;
    box.classList.add("box");
  });
}
createCards();

function remove(id) {
  dataUsers = dataUsers.filter((el) => el.id !== id);
  localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
  createCards();
}
