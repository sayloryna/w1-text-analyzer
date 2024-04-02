export const getTotalParagraphs = (text: string): number => {
  if (text === "") {
    return 0;
  } else {
    return text.split("\n").length;
  }
};
