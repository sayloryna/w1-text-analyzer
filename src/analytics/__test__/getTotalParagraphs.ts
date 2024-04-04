import { getTotalParagraphs } from "../index.js";

const emptyText = "";

console.log("getTotalParagraphs should return 0 if text is empty.");

if (getTotalParagraphs(emptyText) === 0) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

const oneParagraphText = "Este es un texto de 1 párrafo";
console.log("getTotalParagraphs should return 1 if text has 1 paragraph.");
if (getTotalParagraphs(oneParagraphText) === 1) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

const twoParagraphsText =
  "Este es un texto de prueba \n Que incluye 2 parrafos";

console.log("getTotalParagraphs should return 2 if text has 2 paragraphs.");

if (getTotalParagraphs(twoParagraphsText) === 2) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
