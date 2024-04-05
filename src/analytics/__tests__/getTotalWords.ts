import { getTotalWords } from "../index.js";

const emptyText = "";
console.log("getTotalWords should return 0 if text is empty");

if (getTotalWords(emptyText) === 0) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

const threeWordsText = "esto son 4 palabras";
console.log("getTotalWords should return 4 if text has 4 words");
console.log(threeWordsText.split(" ").length);
console.log(getTotalWords(threeWordsText));

if (getTotalWords(threeWordsText) === 4) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
