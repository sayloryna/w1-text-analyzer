import { getTotalWords } from "../index.js";

const emptyText = "";
console.log("getTotalWords should return 0 if text is empty");

if (getTotalWords(emptyText) === 0) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log("getTotalWords should return 4 if text has 4 words");
const threeWordsText = "esto son 4 palabras";

if (getTotalWords(threeWordsText) === 4) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
