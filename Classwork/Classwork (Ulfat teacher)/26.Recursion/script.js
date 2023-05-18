//////Task 1
function fun1(num) {
  return num > 0 ? num * fun1(num - 1) : 1;
  //   let factorial = 1;
  //   for (let i = 1; i <= num; i++) {
  //     factorial *= i;
  //   }
  //   return factorial;
}
console.log(fun1(4));
console.log(fun1(5));
console.log(fun1(0));
console.log(fun1(-1));

//////Task 2
function fun2(num) {
  return num > 2 ? num * fun2(num - 2) : 1;
  //   let factorial = 1;
  //   for (let i = 1; i <= num; i += 2) {
  //     factorial *= i;
  //   }
  //   return factorial;
}
console.log(fun2(5));
console.log(fun2(9));
console.log(fun2(1));

//////Task 3
function sumArray(arr) {
  return arr.reduce(
    (acc, curr) => (Array.isArray(curr) ? acc + sumArray(curr) : acc + curr),
    0
  );
  //   return num.flat(Infinity).reduce((acc, sum) => (acc += sum));
  //   return num
  //     .toString()
  //     .split(",")
  //     .map((n) => +n)
  //     .reduce((acc, sum) => (acc += sum));
}
console.log(sumArray([4, [2, [1]], 8]));
