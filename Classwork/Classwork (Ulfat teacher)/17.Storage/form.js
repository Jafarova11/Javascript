const form = document.querySelector("form");
const userName = document.querySelector("#firstName");
const email = document.querySelector("#exampleInputEmail1");
const password = document.querySelector("#exampleInputPassword1");
const checkBox = document.querySelector("#exampleCheck1");

let dataUsers = JSON.parse(localStorage.getItem("dataUsers")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (userName.value && email.value && password.value) {
    let user = {
      fisrtName: userName.value,
      email: email.value,
      password: password.value,
      checkBox: checkBox.checked,
    };
    let userExists = false;
    for (let i = 0; i < dataUsers.length; i++) {
      if (dataUsers[i].email === user.email) {
        userExists = true;
        continue;
      }
    }
    if (!userExists) {
      dataUsers.push(user);
      localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
    }
  }
});

//8
console.log(JSON.parse(localStorage.getItem("dataUsers")));
