import { convertTextToKebabCase } from "../index.js";

console.log(`
If  the text is empty it sholud return ""`);

const emptyText = ``;

if (convertTextToKebabCase(emptyText) === "") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the text is not in empty it should return the text in kebabCase`);

const text = `En un lugar de la mancha:
mi gato dijo guau`;
const kebabCaseText = `En-un-lugar-de-la-mancha-mi-gato-dijo-guau`;

console.log(convertTextToKebabCase(text));

if (convertTextToKebabCase(text) === kebabCaseText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
