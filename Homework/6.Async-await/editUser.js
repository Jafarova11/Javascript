let MOCK_API = `http://localhost:8080/users`;
const editUserForm = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
let usersSelfId = localStorage.getItem("usersId");

async function setInitialValues() {
  let response = await fetch(`${MOCK_API}/${usersSelfId}`);
  let data = await response.json();
  nameInput.value = data.username;
  emailInput.value = data.email;
  console.log(data);
}
setInitialValues();

async function editCard(id) {
  await fetch(`${MOCK_API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: nameInput.value,
      email: emailInput.value,
    }),
  });
}
editUserForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  await editCard(usersSelfId);
  window.location.href = "index.html";
});
