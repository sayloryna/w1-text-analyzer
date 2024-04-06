import { listWords } from "../index.js";

console.log(`
If the words list is empty it shoul return an empty string`);

const noWords: string[] = [];
const arelistedWordsEmptyString = listWords(noWords) === "";

if (arelistedWordsEmptyString) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the list has words it should return a string with the words separated by ","`);

const words = ["clara", "caballo", "pepito", "granja", "iaiao"];

const arewordsListed = listWords(words) === "clara,caballo,pepito,granja,iaiao";

if (arewordsListed) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
