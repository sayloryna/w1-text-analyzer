import { calculateWordIncidence } from "../index.js";

console.log(`
If the word to match is not in the text it should return 0`);

const text = `esto es un texto, en este texto se repite la palabra "texto" 3 veces`;

const notMatchingWord = "perroflauta";

if (calculateWordIncidence(text, notMatchingWord) === 0) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the word matches it should return the matching incidence`);

const threeTimesMatchingWord = "texto";
if (calculateWordIncidence(text, threeTimesMatchingWord) === 3) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
