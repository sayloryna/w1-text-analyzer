const isEmptyText = (text: string): boolean => {
  return text.trim() === "";
};

export const getTotalParagraphs = (text: string): number => {
  if (isEmptyText(text)) {
    return 0;
  } else {
    let lines = text.trim().split("\n");

    let totalParagraphs = [];
    lines.forEach((line) => {
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
    return text.split(" ").length;
  }
};
