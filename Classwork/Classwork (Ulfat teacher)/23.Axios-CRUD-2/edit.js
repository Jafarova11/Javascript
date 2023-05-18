let DATA_URL = `http://localhost:8080/blogs`;
let form = document.querySelector("form");
let input = document.querySelector("input");
let textArea = document.querySelector("textarea");
let select = document.querySelector("select");

let id = new URLSearchParams(window.location.search).get("id");

axios(`${DATA_URL}/${id}`).then((res) => {
  (input.value = res.data.title),
    (textArea.value = res.data.body),
    (select.value = res.data.author);
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  await fetch(`${DATA_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: input.value,
      body: textArea.value,
      author: select.value || "Lorem",
    }),
  });
  window.location = "index.html";
});
