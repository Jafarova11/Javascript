const colors = ["red", "green", "blue", "yellow", "orange", "brown"];
///1
$("#randomcolor").click(function () {
  $("h1").css({ color: colors[Math.floor(Math.random() * colors.length)] });
});

///2
$("#hidetitle").click(function () {
  $("h1").hide();
});
$("#showtitle").click(function () {
  $("h1").show();
});

///3
$.each(colors, function (item) {
  console.log(colors[item]);
});

///4
const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
let sum = 0;
$.map(numbers, function (value, index) {
  if (value) {
    sum += index;
  }
});
console.log(sum);

//ALGORITHM

////1
function capitalizeFirst(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
// function capitalizeFirst(str) {
//   return str
//     .split(" ")
//     .map((el) => el[0].toUpperCase() + el.slice(1))
//     .join(" ");
// }
console.log(capitalizeFirst("This is a title"));
console.log(capitalizeFirst("capitalize every word"));

////2
function encoded(str) {
  const arr = str.split` `;
  return arr.map((item) =>
    item.length > 4
      ? item.split``.map((item2) => item2.replace(item2, "*")).join``
      : item
  ).join` `;

  //   return arr.map((item) =>
  //     item.length > 4 ? item.split``.map((item2) => (item2 = "*")).join`` : item
  //   ).join` `;
}
console.log(encoded("The code is fourty"));
console.log(encoded("Two plus three is five"));
console.log(encoded("aaaa aaaaa 1234 123456"));
