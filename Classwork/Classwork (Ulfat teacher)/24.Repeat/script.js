let menuBar = document.querySelector(".fa-bars");
let menuSection = document.querySelector(".mobile-menu");
let closeBtn = document.querySelector("#closebtn");

menuBar.addEventListener("click", () => {
  menuSection.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  menuSection.style.display = "none";
});

////////////////////////////////////////////////

let BASE_URL = `http://localhost:8080/users`;
let tBody = document.querySelector("tbody");
let cards = document.querySelector(".cards");

async function getData() {
  let res = await axios(BASE_URL);
  let dataArr = await res.data;
  getAllUsers(dataArr);
}
getData();

async function getAllUsers(arr) {
  tBody.innerHTML = "";
  cards.innerHTML = "";
  await arr.forEach((el) => {
    tBody.innerHTML += `
    <tr>
        <td scope="row">${el.id}</td>
        <td><img src="${el.photo}" alt="" /></td>
        <td>${el.name}</td>
        <td>${el.surname}</td>
        <td>${el.email}</td>
        <td>${el.date}</td>
        <td>
          <a href="adduser.html?id=${el.id}" class="btn btn-success">Edit</a>
          <button class="btn btn-danger" onclick="deleteUser(${el.id})">Delete</button>
          <button class="btn btn-primary" onclick="addFav(${el.id})">Add Fav</button>
        </td>
    </tr>
    `;

    cards.innerHTML += `
    <div class="card mb-4">
            <div class="card-left">
              <div class="card-top mb-3">
                <span id="id">${el.id}</span>
                <span id="date">Date: ${el.date}</span>
              </div>
              <div class="card-bottom d-flex">
                <img src="${el.photo}" alt="" />
                <div class="card-info ms-3">
                  <div>${el.name} ${el.surname}</div>
                  <div>${el.email}</div>
                </div>
              </div>
            </div>
            <div class="card-right">
              <a href="adduser.html?id=${el.id}" class="btn btn-success">Edit</a>
              <button class="btn btn-danger" onclick="deleteUser(${el.id})">Delete</button>
              <button class="btn btn-primary" onclick="addFav(${el.id})">Add Fav</button>
            </div>
          </div>
    `;
  });
}

async function deleteUser(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("tr").remove();
}

let favorites = JSON.parse(localStorage.getItem("favoriteUser")) || [];
let favBtn = document.querySelectorAll(".btn-primary");

async function addFav(id) {
  let res = await axios.get(`${BASE_URL}/${id}`);
  let data = await res.data;
  let isAdded = favorites.find((item) => item.id === data.id);
  if (!isAdded) {
    favorites.push(data);
    localStorage.setItem("favoriteUser", JSON.stringify(favorites));
    console.log(favorites);
  } else {
    alert("Added already this character!");
  }
}
