import { getTotalLongWords } from "../index.js";

const emptyText = "";

console.log(`
If the  text is empty it should retunr 0:`);

const areTotalLongtWordsZero = getTotalLongWords(emptyText, 8) === 0;

if (areTotalLongtWordsZero) {
  console.log("Test passed");
} else {
  console.log("Test Failed");
}

console.log(
  `
If the text is not empty it should return the total of long words(more than 8 letter or numbers)`
);

const fiveLongtWordsText = `en este texto, hay: 
5 palabra mega ¡largas! Electroencefalografista, Esternocleidomastoideo, Inconstitucionalidad Otorrinolaringológicamente ,  y Desoxirribonucleico `;

const areTotalShortWordsFive = getTotalLongWords(fiveLongtWordsText, 8) === 5;

if (areTotalShortWordsFive) {
  console.log("Test passed");
} else {
  console.log("Test Failed");
}
