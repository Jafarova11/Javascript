let DATA_URL = `http://localhost:8080/blogs`;
let section = document.querySelector("section");
let searchInput = document.querySelector("#search");

let id = new URLSearchParams(window.location.search).get("id");

async function getCards(arr) {
  let response = await axios.get(DATA_URL);
  let data = response.data;
  //   console.log(data);
  section.innerHTML = "";
  (arr || data).forEach((el) => {
    section.innerHTML += `
  <div class="cards">
    <h2>${el.title}</h2>
    <h4>${el.body.split("").slice(0, 100).join("")}...
      <a href="details.html?id=${el.id}">Read More</a>
    </h4>
    <p>Written by ${el.author}</p>
    <div>
    <button onclick="deleteData(${el.id})">Delete</button>
    <a id="edit" href="edit.html?id=${el.id}" >Edit</a>
    </div>
  </div>
  `;
  });
}
getCards();

searchInput.addEventListener("input", async function (event) {
  await axios(`${DATA_URL}`).then((res) => {
    let searched = res.data.filter((el) => {
      return `${el.title}`
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    // console.log(searched);
    getCards(searched);
  });
});

let delBtn = document.querySelector("button");
async function deleteData(id, btn) {
  await axios.delete(`${DATA_URL}/${id}`);
  btn.closest("div").remove();
}
