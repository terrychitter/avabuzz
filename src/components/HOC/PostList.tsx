import GeneralPost from "./Posts/GeneralPost";
import ImagePost from "./Posts/ImagePost";

const PostList = () => {
  // const boxes = Array.from({ length: 1 }, (_, index) => (
  //   <GeneralPost key={index} />
  // ));
  const boxes = [
    <GeneralPost key={0} />,
    <ImagePost key={1} />,
    <GeneralPost key={2} />,
  ];
  return boxes;
};

export default PostList;
