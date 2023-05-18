const obj = {
  id: 1,
  firstName: "Shahana",
  lastName: "Jafarova",
  location: "GDU 2",
};
console.log(obj);

const obj2 = obj;
console.log(obj2);

obj2.id = 3;
console.log(obj2);

delete obj.location;
console.log(obj);
