import { getWordsReversed } from "../index.js";

console.log(`
If  the text is empty it sholud return ""`);

const emptyText = ``;

if (getWordsReversed(emptyText) === "") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the text is not empty it should return the text with each word reversed`);

const text = `La clara, esta loca!`;
const reversedText = "aL ,aralc atse !acol";

if (getWordsReversed(text) === reversedText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
