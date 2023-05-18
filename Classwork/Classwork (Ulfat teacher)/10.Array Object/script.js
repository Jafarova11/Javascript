////////////////1////////////////
function filterArray(arr) {
  return arr.filter((item) => typeof item == "number");
  //   return arr.filter((item) => Number.isInteger(el));
}
console.log(filterArray([1, "c", 2, "a", "b"]));
console.log(filterArray(["4", 1, "a", "b", 0, 15]));

////////////////2////////////////
function sliceSum(arr, n) {
  return arr.slice(0, n).reduce((sum, el) => sum + el, 0);
}
console.log(sliceSum([9, 8, 7, 6], 3));
console.log(sliceSum([1, 3, 2], 2));
console.log(sliceSum([3, 6, 2], 0));

////////////////3////////////////
function spelling(str) {
  return str.split``.map((_, index) => str.slice(0, ++index));
}
console.log(spelling("bee"));
console.log(spelling("happy"));

////////////////4////////////////
let hashes = 0;
let pluses = 0;
function hashPlusCount(str) {
  str.split("").map((item) => (item === "#" ? ++hashes : pluses++));
  return [hashes, pluses];
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));

////////////////5////////////////
function reverseCase(str) {
  return str.split``.map((item) =>
    item.toLowerCase() === item ? item.toUpperCase() : item.toLowerCase()
  ).join``;
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));
