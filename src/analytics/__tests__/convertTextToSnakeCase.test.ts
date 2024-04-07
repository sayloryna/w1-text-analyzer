import { convertTextToSnakeCase } from "../index.js";

console.log(`
If  the text is empty it sholud return ""`);

const emptyText = ``;

if (convertTextToSnakeCase(emptyText) === "") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log(`
If the text is not in empty it should return the text in snakeCase`);

const text = `El zorro marrón rápido salta sobre el perro perezoso`;
console.log(convertTextToSnakeCase(text));
const snakeCaseText = `El_zorro_marrón_rápido_salta_sobre_el_perro_perezoso`;

if (convertTextToSnakeCase(text) === snakeCaseText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
