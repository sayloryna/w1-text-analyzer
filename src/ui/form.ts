import { Storage } from "../Storage/Storage.js";
import { analyzeText } from "./analysis.js";

const textTextArea = document.querySelector("#text") as HTMLTextAreaElement;
const textForm = document.querySelector(".form-text") as HTMLFormElement;
const analysisContainer = document.querySelector(".analysis");

if (!textTextArea || !textForm || !analysisContainer) {
  throw new Error("Missing elements");
}

textTextArea.value = Storage.getItem("originalText");

textForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (textTextArea.value === "") {
    return;
  }

  Storage.setItem("originalText", textTextArea.value);

  analysisContainer.classList.add("show");

  analyzeText(textTextArea.value);
});
