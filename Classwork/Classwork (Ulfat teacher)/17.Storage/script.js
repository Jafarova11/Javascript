//////////////1//////////////
let addBtn = document.querySelector(".addbtn");
let deleteBtn = document.querySelector(".deletebtn");
let clearBtn = document.querySelector(".clearbtn");

addBtn.addEventListener("click", function () {
  localStorage.setItem("firstName:", "Shahana");
  localStorage.setItem("lastName:", "Jafarova");
  localStorage.setItem("age:", "21");
});
///1.1
console.log("1.1--", localStorage.length);

//////////////2//////////////
for (let i = 0; i < localStorage.length; i++) {
  console.log("2--", localStorage.key(i));
}

//////////////3//////////////
for (let i = 0; i < localStorage.length; i++) {
  console.log("3--", localStorage.getItem(localStorage.key(i)));
}

//////////////4//////////////
console.log("4--", localStorage.key(0));
//4.1
let arr = [];
for (let i = 0; i < localStorage.length; i++) {
  arr.push(localStorage.key(i));
}
console.log("4.1--", arr);

//////////////5//////////////
console.log("5--", localStorage.getItem(localStorage.key(0)));
//5.1
let arr1 = [];
for (let i = 0; i < localStorage.length; i++) {
  arr1.push(localStorage.getItem(localStorage.key(i)));
}
console.log("5.1--", arr1);

//////////////6//////////////
deleteBtn.addEventListener("click", function () {
  localStorage.removeItem("firstName:");
});
//6.1
clearBtn.addEventListener("click", function () {
  localStorage.clear();
});
