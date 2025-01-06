const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);
const getRandomHexColor = () => {
  return `#${Array.from({ length: 6 }).map(getRandomHexNumber).join("")}`;
};
export const getRandomHexColorList = (length: number) =>
  Array.from({ length: length }).map(getRandomHexColor);
