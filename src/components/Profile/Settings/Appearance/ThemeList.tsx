import ThemeItem from "./ThemeItem";

const ThemeList = () => {
  const boxes = Array.from({ length: 10 }, (_, index) => (
    <ThemeItem key={index} />
  ));
  return boxes; // Return the array of elements
};

export default ThemeList;
