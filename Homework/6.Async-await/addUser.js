let MOCK_API = `http://localhost:8080/users`;
const addUserForm = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addBtn = document.querySelector(".btn");

addBtn.setAttribute("disabled", "");

addUserForm.addEventListener("input", function () {
  if (nameInput.value !== "" && emailInput.value !== "") {
    addBtn.removeAttribute("disabled");
  } else {
    addBtn.setAttribute("disabled", "");
  }
});

addUserForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  if (nameInput.value != "" && emailInput.value != "") {
    await fetch(MOCK_API, {
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
  }
});
