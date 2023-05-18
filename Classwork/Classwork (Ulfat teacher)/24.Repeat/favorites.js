let favorites = JSON.parse(localStorage.getItem("favoriteUser")) || [];
let allCards = document.querySelector(".all-cards");

function listFavs() {
  allCards.innerHTML = "";
  favorites.forEach((item) => {
    allCards.innerHTML += `
    <div class="card" style="width: 18rem">
          <img class="card-img-top" src=${item.photo} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title text-danger">${item.name} ${item.surname}</h5>
            <hr />
            <p class="card-text">${item.email}</p>
            <p class="card-text">${item.date}</p>
            <a href="#" class="btn btn-primary" onclick="removeFromFavs(${item.id})">Remove form favorites</a>
          </div>
        </div>
        `;
  });
}
listFavs();

function removeFromFavs(id) {
  favorites = favorites.filter((el) => el.id != id);
  localStorage.setItem("favoriteUser", JSON.stringify(favorites));
  listFavs();
}
