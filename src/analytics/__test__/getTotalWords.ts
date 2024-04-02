import { getTotalWords } from "../index.js";

const emptyText = "";
console.log("getTotalWords should return 0 if text is empty");

if (getTotalWords(emptyText) === 0) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

const threeWordsText = "esto son palabras";
console.log("getTotalWords should return 3 if text has 3 words");

if (getTotalWords(threeWordsText) === 3) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
