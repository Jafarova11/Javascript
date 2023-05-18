let menu = document.querySelector(".menu-icon");
let header = document.querySelector("header");
let text = document.querySelector(".header");
let container = document.querySelector(".container");
let mobileMenu = document.querySelector(".mobile-menu");
let ul = document.querySelector(".mobile-ul");
let a = document.querySelectorAll(".mobile-li");

let statusClicked = false;
menu.addEventListener("click", function () {
  if (!statusClicked) {
    header.style.backgroundImage = "none";
    header.style.backgroundColor = "black";
    text.style.display = "none";
    mobileMenu.style.display = "block";
    mobileMenu.style.padding = "15% 0";
    ul.style.display = "flex";
    ul.style.flexDirection = "column";
    ul.style.gap = "25px";
    for (let i = 0; i < a.length; i++) {
      a[i].style.fontSize = "30px";
      a[i].style.fontWeight = "100";
      a[i].style.color = "white";
      a[i].addEventListener("mouseover", function () {
        a[i].style.paddingBottom = "3px";
        a[i].style.borderBottom = "2px solid white";
      });
      a[i].addEventListener("mouseout", function () {
        a[i].style.paddingBottom = "";
        a[i].style.borderBottom = "";
      });
    }
  } else {
    header.style.backgroundImage = "";
    header.style.backgroundColor = "";
    text.style.display = "";
    mobileMenu.style.display = "none";
  }
  statusClicked = !statusClicked;
});
