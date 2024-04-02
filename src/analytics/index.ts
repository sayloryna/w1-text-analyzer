const isEmptyText = (text: string): boolean => {
  return text === "";
};

export const getTotalParagraphs = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  } else {
    return text.split("\n").length;
  }
};

export const getTotalWords = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  } else {
    return text.split(" ").length;
  }
};
