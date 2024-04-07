import { hideForbbidenWords } from "../index.js";

console.log(`
If the text is empty it should return empty array`);
const emptyText = "";
const forbbidenWords = ["clara", "pedo"];

if (
  hideForbbidenWords(emptyText, forbbidenWords).toString() === [].toString()
) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the text is not empty is should return the same text censored`);

const text = `La clara, esta loca porque se tira un pedo`;
const censoredText = `La ***** esta loca porque se tira un ****`;

if (hideForbbidenWords(text, forbbidenWords) === censoredText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
