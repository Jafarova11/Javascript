const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const home = document.createElement("li");
const about = document.createElement("li");
const blog = document.createElement("li");
const contact = document.createElement("li");
const homeSection = document.createElement("section");
const aboutSection = document.createElement("section");
const blogSection = document.createElement("section");
const contactSection = document.createElement("section");

home.id = "homeid";
about.id = "aboutid";
blog.id = "blogid";
contact.id = "contactid";

///HEADER
document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(home);
ul.append(about);
ul.append(blog);
ul.append(contact);
home.append("Home");
about.append("About");
blog.append("Blog");
contact.append("Contact");

ul.style.backgroundColor = "#000";
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.alignItems = "center";
ul.style.height = "10vh";
ul.style.listStyle = "none";
home.style.color = "white";
home.style.cursor = "pointer";
about.style.color = "white";
about.style.cursor = "pointer";
blog.style.color = "white";
blog.style.cursor = "pointer";
contact.style.color = "white";
contact.style.cursor = "pointer";

home.addEventListener("click", function () {
  document.location = "#homeid";
});
about.addEventListener("click", function () {
  document.location = "#aboutid";
});
blog.addEventListener("click", function () {
  document.location = "#blogid";
});
contact.addEventListener("click", function () {
  document.location = "#contactid";
});

///HOME
document.body.append(homeSection);
homeSection.append("Home");
homeSection.style.border = "1px dashed #000";
homeSection.style.height = "100vh";
homeSection.style.display = "flex";
homeSection.style.justifyContent = "center";
homeSection.style.alignItems = "center";
homeSection.style.fontWeight = "bold";
homeSection.style.fontSize = "20px";

///ABOUT
document.body.append(aboutSection);
aboutSection.append("About");
aboutSection.style.border = "1px dashed black";
aboutSection.style.height = "100vh";
aboutSection.style.display = "flex";
aboutSection.style.justifyContent = "center";
aboutSection.style.alignItems = "center";
aboutSection.style.fontWeight = "bold";
aboutSection.style.fontSize = "20px";

///BLOG
document.body.append(blogSection);
blogSection.append("Blog");
blogSection.style.border = "1px dashed black";
blogSection.style.height = "100vh";
blogSection.style.display = "flex";
blogSection.style.justifyContent = "center";
blogSection.style.alignItems = "center";
blogSection.style.fontWeight = "bold";
blogSection.style.fontSize = "20px";

///CONTACT
document.body.append(contactSection);
contactSection.append("Contact");
contactSection.style.border = "1px dashed black";
contactSection.style.height = "100vh";
contactSection.style.display = "flex";
contactSection.style.justifyContent = "center";
contactSection.style.alignItems = "center";
contactSection.style.fontWeight = "bold";
contactSection.style.fontSize = "20px";
