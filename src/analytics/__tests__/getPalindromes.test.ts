import { getPalindromes } from "../index.js";

console.log(`
If the text is empty it should return empty array`);

const emptyText = ``;
const palindromesofEmptyText = getPalindromes(emptyText);
const emptyArray: string[] = [];

if (palindromesofEmptyText.toString() === emptyArray.toString()) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If text has palindromes it should return all of them,(only more than 2 letters words)`);

const threePalidromesText = "Otto y Ana vuelan, ala!";
const palindromesInThreePalindromesText = getPalindromes(threePalidromesText);
const threePalindromes = ["Otto", "Ana", "ala"];

if (
  palindromesInThreePalindromesText.toString() === threePalindromes.toString()
) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
