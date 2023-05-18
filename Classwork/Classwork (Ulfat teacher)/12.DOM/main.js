//1
function isAnogram(str1, str2) {
  return (
    str1
      .toLocaleLowerCase()
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("") ===
    str2
      .toLocaleLowerCase()
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
  );
}
console.log(isAnogram("Sevil", "EvilS"));
console.log(isAnogram("Maqa", "qaqam"));

//2
function maxChar(str) {
  let max = 0;
  let commonLetter = "";
  str.toLowerCase().split("").forEach((char) => {
    if ((str.toLowerCase().split(char).length - 1 > max)) {
      max = str.toLowerCase().split(char).length - 1;
      commonLetter = char;
    }
  });
  return commonLetter;
}
console.log(maxChar("Gence"));
console.log(maxChar("Shahana"));
