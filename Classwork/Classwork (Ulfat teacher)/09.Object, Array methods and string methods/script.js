////////////1////////////
let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"
function secretName(anyArr) {
  const newArr = anyArr.map((anyArr) => anyArr[0]);
  return newArr.sort().join("");
}
console.log("1--", secretName(names1));
console.log("1--", secretName(names2));
console.log("1--", secretName(names3));

////////////2////////////
//2.1
const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];
console.log(
  "2.1--",
  users.filter((el) => el.uni === "UNEC" && el.surname[0] === "R")
);

//2.2
console.log(
  "2.2--",
  users.filter((el) => el.age == 22 && el.name[0] === "A")
);

//2.3
const genderName = users.map((el) =>
  el.gender === "female" ? "Ms " + `${el.name}` : "Mr " + `${el.name}`
);
console.log("2.3--", genderName);

//2.4
console.log(
  "2.4--",
  users.sort((a, b) => a.age - b.age)
);

////////////3////////////
const letters = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5, 6, 7];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}
console.log("3--", shuffle(letters));
console.log("3--", shuffle(numbers));

////////////4////////////
const arr4 = [
  {
    product: "Lenova",
    price: 1900,
  },
  {
    product: "HP",
    price: 1300,
  },
  {
    product: "Acer",
    price: 1600,
  },
];
arr4.forEach((item) => {
  console.log("4--", item.price / 2);
});

////////////5////////////
let num1 = [246]; //246642
let num2 = [102]; //102201
let num3 = [152]; //152251
function reverseNum(num) {
  const reversed = parseInt(num.toString().split("").reverse().join(""));
  return parseInt(`${num}${reversed}`);
}
console.log("5--", reverseNum(246));
console.log("5--", reverseNum(102));
console.log("5--", reverseNum(152));
