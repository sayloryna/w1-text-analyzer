const switcher = document.querySelector(".switch input") as HTMLInputElement;

switcher.addEventListener("change", () => {
  if (switcher.checked) {
    document.querySelector(".container")?.classList.add("dark");
  } else {
    document.querySelector(".container")?.classList.remove("dark");
  }
});
