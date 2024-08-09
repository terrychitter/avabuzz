import Post from "./Post";

const PostList = () => {
  const boxes = Array.from({ length: 2 }, (_, index) => <Post key={index} />);
  return boxes;
};

export default PostList;
