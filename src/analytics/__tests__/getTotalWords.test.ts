import { getTotalWords } from "../index.js";

const emptyText = "";
console.log("getTotalWords should return 0 if text is empty");

if (getTotalWords(emptyText) === 0) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

const fourWordsText = "esto son 4 palabras";
console.log("getTotalWords should return 4 if text has 4 words");

if (getTotalWords(fourWordsText) === 4) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
