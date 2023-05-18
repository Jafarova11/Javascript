let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = `http://localhost:8080/users`;
let firstNameInput = document.querySelector("#firstname");
let lastNameInput = document.querySelector("#lastname");
let emailInput = document.querySelector("#email");
let photoInput = document.querySelector("#photofile");
let form = document.querySelector("form");
let submit = document.querySelector("button");

async function getDatas() {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  firstNameInput.value = data.name;
  lastNameInput.value = data.surname;
  emailInput.value = data.email;
  submit.innerHTML = "Edit";
}
if (id) {
  getDatas();
}

let date = new Date();
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    photo: `./images/${photoInput.value.split("\\")[2]}`,
    name: firstNameInput.value,
    surname: lastNameInput.value,
    email: emailInput.value,
    date: date.toLocaleString(),
  };
  console.log(photoInput.value);
  if (id) {
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    axios.post(BASE_URL, obj);
  }
  // window.location.href = "index.html";
});
