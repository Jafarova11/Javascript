/////////////1/////////////
const arr = [
  "d",
  7,
  "1",
  "7",
  7,
  0,
  "c",
  "a",
  undefined,
  7,
  "3",
  false,
  1,
  null,
];

//1.1
// console.log("1.1--", arr.splice(2, arr.length-3));

//1.2
// console.log("1.2--", arr.splice(arr.length - 3, arr.length));

//1.3
console.log("1.3--", arr.concat([true, "8", "myName"]));

//1.4
console.log("1.4--", arr.indexOf(7, 2));

//1.5
console.log(
  "1.5--",
  arr.filter((item) => item)
);

//1.6
console.log(
  "1.6--",
  arr.filter((el) => Number.isInteger(el)).reduce((sum, cur) => sum + cur, 0)
);

//1.7
console.log("1.7--", arr.filter((item) => !item).length);

/////////////2/////////////
//2.1
function findSmallest(inks) {
  return Math.min(...Object.values(inks));
}
console.log(
  "2.1--",
  findSmallest({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
);
console.log(
  "2.1--",
  findSmallest({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  })
);
console.log(
  "2.1--",
  findSmallest({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  })
);

//2.2
function maxNums(arr) {
  return arr.map((el) => Math.max(...el));
}
console.log(
  "2.2--",
  maxNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);
console.log(
  "2.2--",
  maxNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ])
);

//2.3
function findLetterIndex(text, letter) {
  return [text.indexOf(letter), text.lastIndexOf(letter)];
}
console.log(findLetterIndex("hello", "l"));
console.log(findLetterIndex("happy", "h"));

//2.4
function checkNum(arr, n) {
  return arr.some((item) => arr.includes(n - item));
}
console.log(checkNum([10, 12, 4, 7, 9, 11], 16));
console.log(checkNum([2, 8, 9, 12, 45, 78], 1));
console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39));
