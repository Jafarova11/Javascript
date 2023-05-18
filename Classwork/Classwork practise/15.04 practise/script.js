// 1
let arr = [2, 4, -3, -43, 41, -3];
console.log(
  "1--",
  arr.filter((el) => el > 0)
);

// 2
function isRectangular(a, b, c) {
  if (
    a ** 2 == b ** 2 + c ** 2 ||
    b ** 2 == a ** 2 + c ** 2 ||
    c ** 2 == a ** 2 + b ** 2
  ) {
    return "yes";
  } else {
    return "no";
  }
}
console.log("2--", isRectangular(3, 4, 5));
console.log("2--", isRectangular(3, 5, 4));
console.log("2--", isRectangular(3, 6, 4));

// 3
function factorial(n) {
  let result = 1;
  for (let i = 0; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("3--", factorial(5));
console.log("3--", factorial(3));
console.log("3--", factorial(9));

// 4
const countries = [
  "Finland",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
];
function findMaxLength(array) {
  let lengthArray = array.map((el) => el.length);
  return array.find((el) => el.length == Math.max(...lengthArray));
}
console.log("4--", findMaxLength(countries));

// 5
const webTechs = ["html", "CSS", "js", "React", "Redux", "Node", "MongDB"];
console.log(
  "5--",
  webTechs.find((el) => el == el.toLocaleUpperCase())
);

// 6
let arr2 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "little",
    key: 10,
  },
];
console.log(
  "6.1--",
  arr2.filter((el) => el.name[0] === "t")
);

console.log(
  "6.2--",
  arr2.filter((el) => el.name[0] === "t" && el.name[el.name.length - 1] == "t")
);

let lengthh = arr2.map((el) => el.name.length);
let selectedObj = arr2.find((el) => el.name.length == Math.max(...lengthh));
console.log("6.3--", selectedObj.key);

console.log(
  "6.4--",
  arr2.find((el) => el.key > 10 && el.name.startsWith("l"))
);

let selected = arr2.map((el) => el.key);
let length2 = arr2.find((el) => el.key == Math.max(...selected));
console.log("6.5--", length2);

console.log(
  "6.6--",
  arr2.filter(
    (el) =>
      el.name.toLocaleLowerCase().indexOf("t") !==
      el.name.toLocaleLowerCase().lastIndexOf("t")
  )
);
