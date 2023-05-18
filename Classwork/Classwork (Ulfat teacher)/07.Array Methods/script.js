////////////1////////////
const arr1 = ["a", "b", "c", "d", "e"];
//1.1
// console.log('1.1--',arr1.slice(arr1.splice(1, 1)));

//1.2
// console.log('1.2--',arr1.slice(arr1.splice(2,2)));

//1.3
// console.log('1.3--',arr1.slice(arr1.splice(arr1.length-1)));

//1.4
// console.log('1.4--',arr1.slice(arr1.splice(arr1.length-3)));

//1.5
// console.log(
//   "1.5--",
//   arr1.slice(arr1.splice(arr1.length - 2, arr1.length, 3, 4))
// );

//1.6
console.log(arr1.slice("1.6--", arr1.splice(0, 2, "A", "B")));

////////////2////////////
const arr2 = ["user1", "user2", "user3", 11, 3, 5];
//2.1
const newArr = arr2.slice();
console.log("2.1--", newArr);

//2.2
let newArr1 = arr2.slice(1, arr2.length - 1);
console.log("2.2--", newArr1);

//2.3
let newArr2 = arr2.slice(2, arr2.length);
console.log("2.3--", newArr2);

////////////3////////////
const arr3 = [1, 2, 3];
const arr33 = [4, 5, 6];
//3.1
console.log("3.1--", arr3.concat(arr33));

//3.2
console.log("3.2--", arr3.concat("a", "b"));

////////////4////////////
const arr4 = ["name", "surname", 10, "age", "city", "uni", 80, 20];
//4.1
console.log(
  "4.1--",
  arr4.forEach((el) => el)
);

//4.2
console.log(
  "4.2--",
  arr4.forEach((el) => (typeof el === "number" ? console.log(el * 2) : -1))
);

////////////5////////////
const arr5 = [4, 5, 6, "2", 6, true, undefined, "55"];
//5.1
console.log(
  "5.1--",
  arr5.map((el) => console.log(el))
);

//5.2
console.log(
  "5.2--",
  arr5.map((el) =>
    typeof el === "number" ? console.log(el * 5) : console.log(el)
  )
);

//5.3
console.log(
  "5.3--",
  arr5.map((el) => el + "")
);

//5.4
console.log(
  "5.4--",
  arr5.map((el) => !!el)
);

//5.5
console.log(
  "5.5--",
  arr5.map((el) => +el)
);

////////////6////////////
const mixArray = [
  "1",
  2,
  4,
  "a",
  false,
  "9",
  12,
  "42",
  undefined,
  3,
  true,
  null,
];
//6.1
console.log(
  "6.1--",
  mixArray.filter((item) => typeof item === "number")
);

//6.2
console.log(
  "6.2--",
  mixArray.filter((item) => typeof item === "string")
);

//6.3
console.log(
  "6.3--",
  mixArray.filter((item) => typeof item === "boolean")
);

//6.4
console.log(
  "6.4--",
  mixArray.filter((item) => item === false)
);

////////////7////////////
const arr7 = [44, 3, 6, "2", 6, true, undefined, "55", null];
console.log(
  "7--",
  Math.max(...arr7.filter((item) => Number(item)).map((item) => Number(item)))
);
