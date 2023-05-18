let search = document.querySelector("input");
let tBody = document.querySelector("tbody");
let spinner = document.querySelector(".loading");

axios("http://universities.hipolabs.com/search?country=azerbaijan").then(
  (res) => drawTable(res.data)
);

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((el) => {
    tBody.innerHTML += `
        <tr>
            <td>${el.name}</td>
            <td>${el.country}</td>
            <td>${el.domains}</td>
            <td><a href="${el.web_pages}" target="_blank">${el.web_pages}</a></td>
        </tr>
        `;
  });
}

window.onload = function () {
  spinner.style.display = "flex";
  axios(`http://universities.hipolabs.com/search?country=azerbaijan`).then(
    (res) => {
      drawTable(res.data);
      spinner.style.display = "none";
    }
  );
};

search.addEventListener("input", function (event) {
  spinner.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${event.target.value}`
  ).then((res) => {
    drawTable(res.data);
    spinner.style.display = "none";
  });
});
