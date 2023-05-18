/////////////1/////////////
const arr1 = [1, 2, 3];
const arr2 = [80, 5, 100];
const arr3 = [-500, 0, 50];
const firstArr = [];
function getFirstValue(arr) {
  return arr[0];
}
console.log("1:", getFirstValue(arr1));
console.log("1:", getFirstValue(arr2));
console.log("1:", getFirstValue(arr3));

/////////////2/////////////
const arr4 = [1, 2, 3];
const arr5 = ["cat", "dog", "duck"];
const arr6 = [true, false, true];
function getLastItem(arr) {
  return arr[arr.length - 1];
}
console.log("2:", getLastItem(arr4));
console.log("2:", getLastItem(arr5));
console.log("2:", getLastItem(arr6));

/////////////3/////////////
const arr7 = ["hi", "edabit", "fgh", "abc"];
const arr8 = ["Red", "blue", "Blue", "Green"];
const arr9 = ["a", "g", "y", "d"];
const arr10 = ["Pineapple", "Orange", "Grape", "Apple"];
let count = 0;
let findIndex = function (arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "fgh") {
      console.log("index 3.1 ", i);
      count++;
      return arr[i];
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "blue") {
      console.log("index 3.2 ", i);
      count++;
      return arr[i];
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "d") {
      console.log("index 3.3 ", i);
      count++;
      return arr[i];
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "Pineapple") {
      console.log("index 3.4 ", i);
      count++;
      return arr[i];
    }
  }
};
console.log("3:", findIndex(arr7));
console.log("3:", findIndex(arr8));
console.log("3:", findIndex(arr9));
console.log("3:", findIndex(arr10));

/////////////4/////////////
const arrr1 = [3, 2];
const arrr2 = [-3, -6];
const arrr3 = [7, 3];
function addition(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("4:", addition(arrr1));
console.log("4:", addition(arrr2));
console.log("4:", addition(arrr3));

/////////////5/////////////
const arrr4 = [22, 15];
const arrr5 = [83, 34];
const arrr6 = [3, 77];
let lessThan100 = (arr) => {
  let sum1 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum1 += arr[i];
  }
  if (sum1 < 100) {
    return true;
  } else {
    return false;
  }
};
console.log("5:", lessThan100(arrr4));
console.log("5:", lessThan100(arrr5));
console.log("5:", lessThan100(arrr6));

/////////////6/////////////
const obj1 = { width: 2, length: 5, height: 1 };
const obj2 = { width: 4, length: 2, height: 2 };
const obj3 = { width: 2, length: 3, height: 5 };
let multiply = 1;
function volumeBox(obj) {
  multiply = obj.width * obj.length * obj.height;
  return multiply;
}
console.log("6:", volumeBox(obj1));
console.log("6:", volumeBox(obj2));
console.log("6:", volumeBox(obj3));

/////////////7/////////////
const arrr7 = [1, 1];
const arrr8 = [7, 5];
const arrr9 = [38, 8];
function points(twoPointers, threePointers) {
  let totalPoint = 0;
  let multiply1 = 1;
  let multiply2 = 1;
  for (i = 0; i < twoPointers.length; i++) {
    multiply1 *= twoPointers[0] * 2;
  }
  for (i = 0; i < threePointers.length; i++) {
    multiply2 *= (threePointers.length - 1) * 3;
  }
  totalPoint = multiply1 + multiply2;
  return totalPoint;
}
console.log("7:", points(arrr7));
console.log("7:", points(arrr8));
console.log("7:", points(arrr9));

/////////////8/////////////
const arrr10 = [
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
];
function fillInfo() {
  for (let obj of arrr10) {
    obj.name = "Ulfat";
    obj.surname = "Zakirli";
    obj.city = "Baku";
  }
  return;
}
fillInfo();
console.log(arrr10);
