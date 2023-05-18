let myName = "Shahana";
for (i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}

let m = 0;
for (; m < 8; m++) {
  if (m % 2 == 0) console.log(m);
}

let l = 1;
for (; l <= 7; l++) {
  if (l % 2 == 0) {
    console.log(`${l} this is even number`);
  } else {
    console.log(`${l} this is odd number`);
  }
}
