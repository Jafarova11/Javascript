//1
let year = 65;
let day = 365;
function calcAge(age) {
  return year * day;
}
console.log(calcAge(65));

// //2
// let names="Front-End Developer"
// for(n=0;n<names.length;n++){
//   if()
// }console.log(names);

//3
let sum = 0;
for (let t = 1; t < 10; t++) {
  if (t % 2 == 0) sum += t;
}
console.log("t", sum);

//4
let multipy = 1;
for (let f = 1; f < 17; f++) {
  if (f % 2 != 0) multipy *= f;
}
console.log("f", multipy);

//5
let multipy2 = 1;
for (let c = 10; c <= 18; c++) {
  multipy2 *= c;
}
console.log("c", multipy2);

//6
let sum2 = 0;
for (let b = 17; b <= 30; b++) {
  if (b == 19 || b == 20) {
    continue;
  }
  sum2 += b;
}
console.log("b", sum);

//7

//8
for (let d = 1; d <= 16; d++) {
  if (d % 2 == 0) {
    console.log(d, d ** 2);
  }
}
