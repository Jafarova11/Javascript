////////////////1////////////////
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
const getUpper = arr1.map(
  (arr1) =>
    arr1[0].toUpperCase() + arr1.slice(1, -1) + arr1.at(-1).toUpperCase()
);
console.log("1--", getUpper);

////////////////2////////////////
//1
let text = "We are MERN-Stack developers";
let replace = text.replace("MERN-Stack", "Front-end");
console.log("2.1--", replace);

//2
let replaceAll = text.toLocaleLowerCase().replaceAll("e", "a");
console.log("2.2--", replaceAll);

//3
let concat = text.concat(" in Microsoft!");
console.log("2.3--", concat);

//4
let newArr = [];
text
  .split("")
  .map((el, index) =>
    el.toLocaleLowerCase() === "r" ? newArr.push(index) : newArr
  );
console.log("2.4--", newArr);

//5
let getFirstIndex = text.toLocaleLowerCase().indexOf("r", 5);
console.log("2.5--", getFirstIndex);

//6
let vowels = ["a", "i", "o", "u", "e"];
let newText = [];
for (let i = 0; i < text.length; i++) {
  let vowelSound = text[i].toLowerCase();
  if (vowels.includes(vowelSound) && !newText.includes(vowelSound)) {
    newText.push(vowelSound);
  }
}
console.log("2.6--", newText);
// 2) console.log(Array.from(new Set(newText)));
// 3)BEST solution   text.split("").map((item) => vowels.includes(item) && newArr.push(item));

////////////////3////////////////
const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];
let calcArea = () => {
  let sumArea = 0;
  arr3.forEach((el) => {
    if (el.region.length === 6) {
      sumArea += el.area;
    }
  });
  return sumArea;
};
console.log("3--", calcArea());
// BEST solution
// const newArr1 = arr3.reduce(
//   (sum, item) => (item.region.length === 6 ? (sum += item.area) : sum),
//   0
// );
// console.log(newArr1);

////////////////4////////////////
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
let sortNumber = arr4.sort((a, b) => a - b);
console.log("4--", sortNumber);

////////////////5////////////////
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
let gatherAllArray = arr5.flat(Infinity);
console.log("5--", gatherAllArray);

////////////////6////////////////
const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];

colors.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
});

console.log("6--", colors);
