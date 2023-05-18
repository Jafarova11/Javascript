let MOCK_API = `http://localhost:8080/users`;
const addUserBtn = document.querySelector(".btn");
let boxes = document.querySelector(".boxes");

addUserBtn.addEventListener("click", function () {
  window.location = "addUser.html";
});

async function getAllUsers() {
  let response = await fetch(MOCK_API);
  let data = await response.json();
  data.forEach((item) => {
    boxes.innerHTML += `
    <div class="col col-5 p-3 bg-light d-flex justify-content-between align-items-center">
              <div>
                <h4>${item.username}</h4>
                <p>${item.email}</p>
              </div>
              <div>
                <a><i class="fa-solid fa-pen me-2" onclick= editCard("${item.id}" style = "cursor: pointer")></i></a>
                <a><i class="fa-regular fa-trash-can m-1" onclick= deleteCard("${item.id}" style = "cursor: pointer")></i></a>
              </div>
            </div>`;
  });
}
getAllUsers();

async function deleteCard(id) {
  await fetch(`${MOCK_API}/${id}`, {
    method: "DELETE",
  });
  getAllUsers();
}

async function editCard(id) {
  localStorage.setItem("usersId", id);
  window.location = "editUser.html";
}
