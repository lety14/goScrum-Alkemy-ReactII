export const limitTextLong = (text: string) => {
  if (text.length > 16) {
    return { text: text.slice(0, 15).concat("..."), addSeeMoreButton: true };
  }
  return { text, addSeeMoreButton: false };
};
