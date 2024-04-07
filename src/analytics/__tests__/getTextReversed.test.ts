import { geTextReverseed } from "../index.js";

console.log(`
If  the text is empty it sholud return ""`);

const emptyText = ``;

if (geTextReverseed(emptyText) === "") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the text is not empty it should return the text reversed`);

const text = `La clara, esta loca!`;
const reversedText = "!acol atse ,aralc aL";

if (geTextReverseed(text) === reversedText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
