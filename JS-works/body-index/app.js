let height = Number(prompt("Add your height with meter"));
let weight = Number(prompt("Add your weight with kg"));

let result = weight / (height * 2);

if (result < 18.5) {
  console.log("Under the ideal weight");
} else if (result >= 18.5 && result <= 24.9) {
  console.log("At ideal weight");
} else if (result > 25 && result <= 29.9) {
  console.log("Above ideal weight");
} else if (result > 30 && result <= 39.9) {
  console.log("Far above the ideal weight (obese)");
} else if (result > 40) {
  console.log("Far above the ideal weight (morbidly obese)");
}
