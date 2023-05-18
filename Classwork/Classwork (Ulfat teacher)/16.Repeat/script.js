const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];

///////////1///////////
const falsyValue = (myArr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
};
console.log("1--", falsyValue(arr));

///////////2///////////
const stringValues = (myArr) => {
  let newArr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr1.push(myArr[i]);
    }
  }
  return newArr1;
};
console.log("2--", stringValues(arr));

///////////3///////////
const sliceArr = (myArr) => {
  let newArr2 = [];
  for (let i = 3; i <= 7; i++) {
    newArr2.push(myArr[i]);
  }
  return newArr2;
};
console.log("3--", sliceArr(arr));

///////////4///////////
const sumArr = (myArr) => {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] == "number" && arr[i]) {
      sum += arr[i];
    }
  }
  return sum;
};
console.log("4--", sumArr(arr));

///////////5///////////
const findLastIndex = (myArr) => {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === 8) {
      return i;
    }
  }
};
console.log("5--", findLastIndex(arr));

///////////6///////////
const reverseArr = (myArr) => {
  let newArr3 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr3.push(myArr[i]);
  }
  return newArr3;
};
console.log("6--", reverseArr(arr));

///////////7///////////
const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51];
const sortArr = (myArr) => {
  let done = true;
  while (done) {
    done = false;
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] > myArr[i + 1]) {
        done = true;
        let a = myArr[i];
        myArr[i] = myArr[i + 1];
        myArr[i + 1] = a;
      }
    }
  }
  return myArr;
};
console.log("7--", sortArr(arrNum));

///////////8///////////
const arrLetters = ["g", "d", "a", "c", "j", "b", "e"];
function sortLetters(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let b = 0; b < arr.length - i - 1; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("8--", sortLetters(arrLetters));

// ///////////9///////////
const arr9 = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];
function flatArr(arr) {
  let newArr4 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr[i].length; a++) {
      newArr4.push(arr[i][a]);
    }
  }
  return newArr4;
}
console.log("9--", flatArr(arr9));

///////////////////////Algorithm
///1
function numberSplit(n) {
  if (n % 2 === 0) {
    return [n / 2, n / 2];
  } else {
    return [(n - 1) / 2, (n + 1) / 2];
  }
}
console.log("'4'", numberSplit(4));
console.log("'11'", numberSplit(11));
console.log("'-9'", numberSplit(-9));

// 2.Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.
// function reorderDigits(arr, direction) {}
// console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));
