export const getTotalParagraphs = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  }

  const newLine = "\n";

  const paragraphs = text.split(newLine);
  const totalParagraphs = paragraphs.filter(
    (paragraph) => !isEmptyText(paragraph)
  );

  return totalParagraphs.length;
};

export const getTotalWords = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  }

  const words = splitTextInWords(text);
  const totalWords = words.filter((word) => !isEmptyText(word));

  return totalWords.length;
};

export const getTotalCharacters = (text: string) => {
  if (isEmptyText(text)) {
    return 0;
  }

  const characters = text.split("");
  const characterWithoutSpaces = characters.filter(
    (character) => !spacesAndNewLines.test(character)
  );

  return characterWithoutSpaces.length;
};

export const getTotalShortWords = (text: string, limit: number): string[] => {
  if (isEmptyText(text)) {
    return [];
  }

  const words = splitTextInWords(text);

  const isShortWord = (word: string): boolean =>
    word.length <= limit && !isEmptyText(word);

  const shortWords = words.filter(isShortWord);

  return shortWords;
};

export const getTotalLongWords = (text: string, limit: number): string[] => {
  if (isEmptyText(text)) {
    return [];
  }

  const words = splitTextInWords(text);

  const isLongWord = (word: string): boolean =>
    word.length >= limit && !isEmptyText(word);

  const longWords = words.filter(isLongWord);

  return longWords;
};

export const listWords = (words: string[]): string => {
  if (isEmptyText(words.toString())) {
    return "";
  }
  return words.join(",");
};

const isEmptyText = (text: string): boolean => {
  return text.trim() === "";
};

const removeNotLetters = (word: string): string =>
  word.replaceAll(notLetter, "");

const splitTextInWords = (text: string): string[] => {
  return text.split(spacesAndNewLines).map(removeNotLetters);
};

const spacesAndNewLines = /[\s\n]/;
const notLetter = /[^a-z à-ü \d A-Z À-Ü]/g;
