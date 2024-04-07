import { getRandomWords } from "../index.js";

console.log(`
If the text is empty it should return an empty list`);

const emptytext = ``;
const numberOfWords = 3;

if (getRandomWords(emptytext, numberOfWords).toString() === [].toString()) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If is not empty it should return as many random words as its ask to`);

const text = `Esto es un texto, que tiene varias palabras como miau! `;
console.log(getRandomWords(text, numberOfWords));

if (getRandomWords(text, numberOfWords).length === numberOfWords) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
