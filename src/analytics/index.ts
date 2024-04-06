const isEmptyText = (text: string): boolean => {
  return text.trim() === "";
};

export const getTotalParagraphs = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  }

  const paragraphs = text.split("\n");
  const totalParagraphs = paragraphs.filter(
    (paragraph) => !isEmptyText(paragraph)
  );

  return totalParagraphs.length;
};

export const getTotalWords = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  }

  const words = text.split(/[\s\n]/);
  const totalWords = words.filter((word) => !isEmptyText(word));

  return totalWords.length;
};

export const getTotalCharacters = (text: string) => {
  if (isEmptyText(text)) {
    return 0;
  }

  const characters = text.split("");
  const characterWithoutSpaces = characters.filter(
    (character) => character !== "\n" && character !== " "
  );
  return characterWithoutSpaces.length;
};
