let BASE_URL = `https://restcountries.com/v2/all`;
let cardRow = document.querySelector(".row");
let searchInput = document.querySelector("#search");
let filterByRegion = document.querySelector("select");
let darkMode = document.querySelector(".darkMode");
let body = document.querySelector("body");

axios(BASE_URL).then((res) => {
  //   console.log(res.data);
  getAllData(res.data);
});

function getAllData(arr) {
  cardRow.innerHTML = "";
  arr.forEach((el) => {
    cardRow.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3">
      <a href="./details.html?name=${el.name}">
      <div class="card" style="width: 18rem;border:none">
          <img class="card-img-top" src="${el.flags.svg}" height="200px" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">${el.name}</h4>
            <h6>Population:${el.population}</h6>
            <h6>Region:${el.region}</h6>
            <h6>Capital:${el.capital}</h6>
          </div>
        </div>
      </a>
    </div>
        `;
  });
}

searchInput.addEventListener("input", function (event) {
  event.preventDefault();
  axios.get(`${BASE_URL}`).then((res) => {
    let searched = res.data.filter((el) => {
      return `${el.name}`
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    getAllData(searched);
  });
});

filterByRegion.addEventListener("change", function (event) {
  axios(`${BASE_URL}`).then((res) => {
    let filtered = res.data.filter(
      (el) =>
        el.region.toLocaleLowerCase() == event.target.value.toLocaleLowerCase()
    );
    getAllData(filtered);
    // console.log(filtered);
  });
});

window.onload = function () {
  localStorage.getItem("dark") && document.body.classList.add("darkmode");
  darkMode.addEventListener("click", () => {
    if (localStorage.getItem("dark")) {
      localStorage.removeItem("dark");
      document.body.classList.remove("darkmode");
    } else {
      document.body.classList.add("darkmode");
      localStorage.setItem("dark", "mode");
    }
  });
};