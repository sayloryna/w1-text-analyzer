import { getTotalParagraphs } from "../index";

const testingText = "Este es un texto de prueba \n Que incluye 2 parrafos";
console.log(testingText);
console.log(getTotalParagraphs(testingText));
if (getTotalParagraphs(testingText) === 2) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
