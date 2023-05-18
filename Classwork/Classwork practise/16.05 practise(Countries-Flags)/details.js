let container = document.querySelector(".detail");
let BASE_URL = `https://restcountries.com/v3.1/name/`;
let goBack = document.querySelector(".goBack");
let darkMode = document.querySelector(".darkMode");
let body = document.querySelector("body");

let name = new URLSearchParams(window.location.search).get("name");

axios(`${BASE_URL}/${name}`).then((res) => {
  detailData(res.data);
  console.log(res.data);
});

goBack.addEventListener("click", function () {
  window.location = "index.html";
});

function detailData(arr) {
  container.innerHTML = "";
  arr.forEach((el) => {
    container.innerHTML += `
    <div class="detail-card " style="max-width: 100%; padding:10% 1%; border:none">
  <div class="row g-0  d-flex align-items-center">
    <div class="col-12 col-lg-4">
      <img src="${el.flags.svg}" class="img-fluid rounded-start" width="100%" alt="flag">
    </div>
    <div class="col-8 p-5">
          <div class="row">
          <h3 class="card-title">${el.name.common}</h3>
          <div class=" col-12 col-lg-4 card-body">
            <h5>Native name: ${el.altSpellings[1]}</h5>
            <h5>Population: ${el.population}</h5>
            <h5>Region: ${el.region}</h5>
            <h5>Sub Region: ${el.subregion}</h5>
            <h5>Capital: ${el.capital}</h5>
          </div>
          <div class=" col-12 col-lg-4 mt-3">
            <h5>Top Level Domain: ${el.tld}</h5>
            <h5>Currencies: ${el.currencies[0]}</h5>
            <h5>Languages: ${el.languages[0]}</h5>
          </div>
          </div>
        </div>
  </div>
</div>

`;
  });
}

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
