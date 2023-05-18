////////1///////
const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
function getRandomLetter() {
  return arr1[Math.floor(Math.random() * arr1.length)];
}
console.log(getRandomLetter(arr1));

////////2///////
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sum = 0;
function calcSum() {
  for (let num of arr2) {
    if (num % 2 == 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(calcSum());

////////3///////
const arr3 = [-3, -5, -9, 3, 0, true, false, -22];
const newArr = [];
let getPositiveNum = function () {
  for (i = 0; i < arr3.length; i++) {
    newArr.push(Math.abs(arr3[i]));
  }
  return newArr;
};
console.log(getPositiveNum());

////////4///////
const arr4 = [4, 9, 16, 18, 30, 36, 50];
const newArr1 = [];
const calcSquareRoot = (x) => {
  for (let i = 0; i < x.length; i++) {
    newArr1.push(Math.floor(Math.sqrt(x[i])));
  }
  return newArr1;
};
console.log(calcSquareRoot());

////////5///////
