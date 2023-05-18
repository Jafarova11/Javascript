let DATA_URL = `http://localhost:8080/blogs`;
let form = document.querySelector("form");
let input = document.querySelector("input");
let textArea = document.querySelector("textarea");
let select = document.querySelector("select");

let selectName;
select.addEventListener("change", (e) => {
  selectName = e.target.value;
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (input.value !== "" && textArea.value !== "") {
    await fetch(DATA_URL, {
      method: "POST",
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
  } else {
    alert("Empty values!");
  }
});
