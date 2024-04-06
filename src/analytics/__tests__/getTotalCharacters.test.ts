import { getTotalCharacters } from "../index.js";

const emptyText = ``;

const isGetTotalCharacterZero = getTotalCharacters(emptyText) === 0;

console.log(`
If text is Empty it should return 0:`);
console.log(`so '${emptyText}' is: '${getTotalCharacters(emptyText)}'`);

if (isGetTotalCharacterZero) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If text is not empty it should return the total of characters:`);

const oneCharacterText = `A`;
const tenCharactersText = `1 2 3 4 5 6=7·8`; // space is not a character
const tenCharactersTextInTwoParagraphs = `ÁÉÍÓÚÑ
 7 8 9 0`;

const isGetTotalCharacterOne = getTotalCharacters(oneCharacterText) === 1;
const isGetTotalCharacterTen = getTotalCharacters(tenCharactersText) === 10;
const isGetTotalCharacterTenifDivided =
  getTotalCharacters(tenCharactersTextInTwoParagraphs) === 10;

if (
  isGetTotalCharacterOne &&
  isGetTotalCharacterTen &&
  isGetTotalCharacterTenifDivided
) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
