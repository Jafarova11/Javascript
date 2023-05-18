const MOCK_API = `http://localhost:8080/users`;
const form = document.querySelector("form");
const firstNameInput = document.querySelector("#firstnameinput");
const lastNameInput = document.querySelector("#lastnameinput");
const emailInput = document.querySelector("#emailinput");
const searchInput = document.querySelector("#searchInput");
const tBody = document.querySelector("tbody");
const submitBtn = document.querySelector("#submitBtn");
const notification = document.querySelector("#notification");
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");
const firstname = document.querySelector("#firstname");
const cardNumberInput = document.querySelector("#passwordinput");
let date = new Date();

axios(MOCK_API).then((res) => {
  dataArray = res.data;
  getTable(dataArray);
});
// async function getUsers() {
//   const res = await axios(MOCK_API);
//   return res.data;
// }

async function getTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((el) => {
    tBody.innerHTML += `
        <tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.email}</td>
        <td>${el.card
          .split("")
          .fill("*", 0, cardNumberInput.value.length - 4)
          .join("")}</td>
        <td>
          <div class="d-flex">
            <button class="btn btn-warning me-2"  onclick="editData(${
              el.id
            })">Edit</button>
            <a href="#" class="btn btn-danger me-2" onclick="deleteData(${
              el.id
            })">Delete</a>
            <a href="#" class="btn btn-primary" onclick="detailsData(${
              el.id
            })">Details</a>
          </div>
        </td>
        </tr>
        `;
  });
}

let statusBool = false;
let editİd;
async function editData(id) {
  statusBool = true;
  sortedArray = dataArray.find((el) => el.id == id);
  // console.log(sortedArray);
  firstNameInput.value = sortedArray.firstName;
  lastNameInput.value = sortedArray.lastName;
  emailInput.value = sortedArray.email;
  cardNumberInput.value = sortedArray.card;
  submitBtn.value = "Edit";
  editİd = id;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let obj = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    card: cardNumberInput.value,
    date: date.toLocaleDateString(),
  };
  if (
    firstNameInput.value !== "" &&
    lastNameInput.value !== "" &&
    emailInput.value != "" &&
    cardNumberInput.value !== ""
  ) {
    if (statusBool) {
      axios.patch(`${MOCK_API}/${editİd}`, obj).then(() => {
        console.log(`fdsvc`);
        showAlert(
          `User: ${dataArray.firstName} ${dataArray.lastName} edited successfully`,
          `success`
        );
      });
    } else {
      axios.post(MOCK_API, obj).then(() => {
        showAlert(
          `User: ${dataArray.firstName} ${dataArray.lastName} added successfully`,
          `info`
        );
      });
    }
  } else {
    alert("Empty values!");
  }
});
async function deleteData(id, btn) {
  await axios.delete(`${MOCK_API}/${id}`);
  btn.closest("tr").remove();
  showAlert(`Delete user`, `danger`);
}

async function detailsData(id) {
  const res = await axios.get(`${MOCK_API}/${id}`);
  const data = res.data;
  showAlert(
    `User: ${data.firstName} ${data.lastName} created on: ${data.date}`,
    `primary`
  );
}

function showAlert(alert, className) {
  notification.innerHTML = alert;
  notification.className = `alert alert-${className}`;
  notification.removeAttribute("hidden", "");
  setTimeout(() => {
    notification.setAttribute("hidden", "");
  }, 4000);
}

searchInput.addEventListener("input", function (event) {
  filtered = dataArray.filter((el) => {
    return `${el.firstName} ${el.lastName}`
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase());
  });
  // dataArray = filtered;
  getTable(filtered);
});

let bool = true;
firstname.addEventListener("click", function () {
  bool = !bool;
  let sorted;
  if (!bool) {
    sorted = dataArray.sort((a, b) => a.firstName.localeCompare(b.firstName));
    arrowDown.setAttribute("hidden", "true");
    arrowUp.removeAttribute("hidden", "");
    arrowUp.style.color = "red";
    getTable(sorted);
  } else {
    sorted = dataArray.sort((a, b) => b.firstName.localeCompare(a.firstName));
    arrowUp.setAttribute("hidden", "true");
    arrowDown.removeAttribute("hidden", "");
    arrowDown.style.color = "green";
    getTable(sorted);
  }
});
