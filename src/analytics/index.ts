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

export const getPalindromes = (text: string): string[] => {
  const words = splitTextInWords(text);

  const palindromes = words.filter(
    (word) => word.toLowerCase() === reverseString(word).toLowerCase()
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

export const hideForbbidenWords = (
  text: string,
  forbbidenWords: string[]
): string => {
  if (isEmptyText(text)) {
    return "";
  }

  const words = text.split(spacesAndNewLines);
  console.log(words);

  const censoredText = words.map((word) => {
    if (forbbidenWords.includes(word)) {
      return word.replaceAll(letter, "*");
    }
    return word;
  });
  console.log(censoredText);

  return censoredText.join(" ");
};

export const convertTextToCamelCase = (text: string): string => {
  if (isEmptyText(text)) {
    return "";
  }
  const words = splitTextInWords(text);
  const camelCaseText = words.map(
    (word) => word.slice(0, 1).toUpperCase() + word.slice(1)
  );
  return camelCaseText.join("");
};

export const convertTextToKebabCase = (text: string) => {
  if (isEmptyText(text)) {
    return "";
  }
  console.log(splitTextInWords(text));
  return splitTextInWords(text).join("-");
};

export const convertTextToSnakeCase = (text: string) => {
  if (isEmptyText(text)) {
    return "";
  }
  return splitTextInWords(text).join("_");
};

const reverseString = (word: string): string =>
  word.split("").reverse().join("");

const getRandomNumber = (higherNumber: number) =>
  Math.floor(Math.random() * (higherNumber + 1));

const isLongerThanTwoLetters = (word: string): boolean => word.length > 2;

const isEmptyText = (text: string): boolean => text === "";

const removeNotLetters = (word: string): string =>
  word.replaceAll(notLetter, "");

const IsNotEmptyText = (word: string): boolean => !isEmptyText(word);

const splitTextInWords = (text: string): string[] => {
  return text
    .split(spacesAndNewLines)
    .filter(IsNotEmptyText)
    .map(removeNotLetters);
};

const spacesAndNewLines = /[\s\n]/;
const notLetter = /[^a-z à-ü \d A-Z À-Ü]/g;
const letter = /[a-z à-ü \d A-Z À-Ü]/g;
