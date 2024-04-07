import { convertTextToCamelCase } from "../index.js";

console.log(`
If  the text is empty it sholud return ""`);

const emptyText = ``;

if (convertTextToCamelCase(emptyText) === "") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the text is not in empty it should return the text in camelCase`);

const text = `Esto es: un texto separado por espacios.`;

const camelCaseText = "EstoEsUnTextoSeparadoPorEspacios";

if (convertTextToCamelCase(text) === camelCaseText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
