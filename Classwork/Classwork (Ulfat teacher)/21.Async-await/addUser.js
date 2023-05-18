const addUserForm = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

addUserForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: nameInput.value,
      email: emailInput.value,
    }),
  });
  window.location = "index.html";
});
