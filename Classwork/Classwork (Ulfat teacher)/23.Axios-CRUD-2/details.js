let DATA_URL = `http://localhost:8080/blogs`;
let div = document.querySelector("div");
let id = new URLSearchParams(window.location.search).get("id");

axios.get(`${DATA_URL}/${id}`).then((res) => {
  div.innerHTML = `
    <div class="card-details">
      <h2>Blog Title: <em>${res.data.title}</em></h2>
      <p>${res.data.body}</p>
      <h3>Author: ${res.data.author}</h3>
    </div>
    `;
});
