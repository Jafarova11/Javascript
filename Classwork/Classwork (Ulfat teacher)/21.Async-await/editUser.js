const editUserForm = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

let id = new URLSearchParams(window.location.search).get("id");
axios.get(`http://localhost:8080/users/${id}`).then((response) => {
  nameInput.value = response.data.username;
  emailInput.value = response.data.email;
});

editUserForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  await axios.patch(`http://localhost:8080/users/${id}`, {
    username: nameInput.value,
    email: emailInput.value,
  });
  window.location = "index.html";
});
