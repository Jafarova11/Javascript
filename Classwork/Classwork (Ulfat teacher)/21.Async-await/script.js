let MOCK_API = `http://localhost:8080/users`;
const addUserBtn = document.querySelector(".btn");
let boxes = document.querySelector(".boxes");

addUserBtn.addEventListener("click", function () {
  window.location = "addUser.html";
});

async function getAllUsers() {
  let response = await fetch(MOCK_API);
  let data = await response.json();
  boxes.innerHTML = "";
  data.forEach((item) => {
    boxes.innerHTML += `
    <div class="col col-5 p-3 bg-light d-flex justify-content-between align-items-center">
              <div>
                <h4>${item.username}</h4>
                <p>${item.email}</p>
              </div>
              <div>
                <a href="editUser.html?id=${item.id}"><i class="fa-solid fa-pen text-success m-1 editBtn")></i></a>
                <a><i class="fa-solid fa-trash-can text-danger m-1 deleteBtn"  onclick= deleteCard("${item.id}")></i></a>
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

// async function editCard(id) {
//   window.location = `editUser.html?=${id}`;
// }
