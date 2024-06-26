import { getTotalShortWords } from "../index.js";

const emptyText = "";

console.log(`
If the text is empty it should return 0:`);

const areTotalShortWordsZero = getTotalShortWords(emptyText, 4).length === 0;

if (areTotalShortWordsZero) {
  console.log("Test passed");
} else {
  console.log("Test Failed");
}

console.log(
  `
If the text is not empty it should return the total of short words(less than 4 letter or numbers)`
);

const fiveShourtWordsText = `
En este texto, hay: 
5 palabras mega! cortas`;

const areTotalShortWordsFive =
  getTotalShortWords(fiveShourtWordsText, 4).length === 5;

if (areTotalShortWordsFive) {
  console.log("Test passed");
} else {
  console.log("Test Failed");
}
