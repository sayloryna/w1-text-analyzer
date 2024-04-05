const isEmptyText = (text: string): boolean => {
  return text.trim() === "";
};

export const getTotalParagraphs = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  } else {
    let paragraphs = text.trim().split("\n");

    let totalParagraphs = [];

    paragraphs.forEach((line) => {
      if (!isEmptyText(line)) {
        totalParagraphs.push(line);
      }
    });
    return totalParagraphs.length;
  }
};

export const getTotalWords = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  } else {
    const totalWords = [];
    const words = text.split(/\W/);
    words.forEach((word) => {
      if (!isEmptyText(word)) {
        totalWords.push(word);
      }
    });
    return totalWords.length;
  }
};

const getTotalCharacters = (text: string): number => {
  const characters = text.split(/\S/);
  return characters.length;
};
