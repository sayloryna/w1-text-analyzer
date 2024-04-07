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
  return words.join(", ");
};

export const getPalindromes = (text: string) => {
  if (isEmptyText(text)) {
    return [];
  }
  const words = splitTextInWords(text);
  const reverseWord = (word: string): string =>
    word.split("").reverse().join("");

  const invertedWords = words.map(reverseWord);

  const palindromes = words.filter(
    (word, index) => word.toLowerCase() === invertedWords[index].toLowerCase()
  );
  return palindromes.filter(isLongerThanTwoLetters);
};

export const calculateWordIncidence = (
  text: string,
  wordToMatch: string
): number => {
  const words = splitTextInWords(text);
  const matchingWords = words.filter((word) => word === wordToMatch);

  return matchingWords.length;
};

export const getRandomWords = (text: string, maxWords: number): string[] => {
  if (isEmptyText(text)) {
    return [""];
  }
  const words = splitTextInWords(text);
  const randomWords: string[] = [];

  for (let wordTotal = 0; wordTotal < maxWords; wordTotal++) {
    randomWords.push(words[getRandomNumber(words.length)]);
  }

  return randomWords;
};

export const getWordsReversed = (text: string): string => {
  if (isEmptyText(text)) {
    return "";
  }

  const words = text.split(spacesAndNewLines);
  const reversedWords = words.map(reverseString);
  return reversedWords.join(" ");
};

export const geTextReverseed = (text: string): string => {
  if (isEmptyText(text)) {
    return "";
  }
  return reverseString(text);
};

////Guardar aqui reusables y borrar antes de entregar
const reverseString = (word: string): string =>
  word.split("").reverse().join("");
const getRandomNumber = (higherNumber: number) =>
  Math.floor(Math.random() * (higherNumber + 1));

const isLongerThanTwoLetters = (word: string): boolean => word.length > 2;

const isEmptyText = (text: string): boolean => text === "";

const removeNotLetters = (word: string): string =>
  word.replaceAll(notLetter, "");

const splitTextInWords = (text: string): string[] => {
  return text.split(spacesAndNewLines).map(removeNotLetters);
};

const spacesAndNewLines = /[\s\n]/;
const notLetter = /[^a-z à-ü \d A-Z À-Ü]/g;
