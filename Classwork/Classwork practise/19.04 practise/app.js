//reverse string
//1)
function reverseString(str) {
  return str.split("").reverse("").join("");
}
console.log(reverseString("hello"));

//2)
function reverseString2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString2("hello"));

//polidrom
//1)
function isPolidrom(word) {
  if (word == word.split("").reverse("").join("")) {
    return `yes, ${word} is polidrom`;
  } else return `no, ${word} is not polidrom`;
}
console.log(isPolidrom("refer"));

//2)
function isPolidrom2(word) {
  word == word.split("").reverse("").join("")
    ? console.log(`yes, ${word} is polidrom`)
    : console.log(`no, ${word} is not polidrom`);
}
isPolidrom2("refer");

//remove dublicated
//1)
let arr1 = [1, 2, 2, 11, 4, 5, 4, 11];
function removeDublicated(arr) {
  return arr.filter((el, index) => arr.indexOf(el) == index);
}
console.log(removeDublicated(arr1));

//2)
function removeDublicated2(arr) {
  let result = [];
  arr.forEach((element) => {
    !result.includes(element) && result.push(element);
  });
  return result;
}
console.log(removeDublicated2(arr1));

//3)
function removeDublicated3(arr) {
  return [...new Set(arr)];
}
console.log(removeDublicated3(arr1));

//generate otp
function generateOtp() {
  let digits = "0123456789";
  let num = "";
  for (let i = 0; i < 4; i++) {
    num += digits[Math.floor(Math.random() * 10)];
  }
  return num;
}
console.log(generateOtp());

//find truth values
let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];
console.log(myArr.filter(Boolean));
console.log(myArr.filter((el) => !Boolean(el)));
