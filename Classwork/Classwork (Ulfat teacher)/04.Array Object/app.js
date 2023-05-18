//ARRAY
//1
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("arr", arr);

//2
const arr1 = [7, true, "Avengers"];
console.log("arr1", arr1);

//3
const arr2 = [0, 1, 2, 3, 4, 5];
console.log("arr2", arr2);
const arr3 = arr2;
console.log("arr3", arr3);

//4
const arr4 = [0, 1, 2, 3, 4, 5, 6, 7];
arr4.push(8, 9);
console.log("arr4", arr4);

//5
const arr5 = [];
arr5.unshift(5, 6, 7);
arr5.shift(5);
arr5.unshift(1);
console.log("ar5", arr5);

//6
const arr6 = ["Shahana", "Jafarova", 21, "Quba"];
console.log("arr6", arr6);
arr6[3] = "Qusar";
console.log("arr6", arr6);

//7
for (let num of arr) {
  console.log(num);
}

//OBJECT
//8
const obj = {
  id: 1,
  firstName: "Shahana",
  lastName: "Jafarova",
  location: "GDU2",
};
console.log(obj);

//9
const obj2 = obj;
console.log(obj2);

//10
console.log((obj.id = 3));
console.log(obj);

//11
for (let value in obj) {
  console.log(obj[value]);
}

//12
for (let key in obj) {
  console.log(key);
}

//13
delete obj.location;
console.log(obj);
