////1
function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const n = sortedArr.length;
  const middle = Math.floor(n / 2);
  if (n % 2 == 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
}
console.log(findMedian([3, 1, 4, 2, 5]));

////2
function countCharacters(str) {
  return [...str] === str.split("").reverse().join("");
}
console.log(countCharacters("hello world"));
