// import { Stack, Skeleton } from "@mui/material";
// import { loadable } from "../../utils/loadable";
// // import { posts } from "./PostList";
// // import { PostProps } from "./Posts/Post";

// const EventPostSkeleton = () => {
//   return (
//     <Stack direction={"column"} gap={1}>
//       <Stack direction={"row"} width={"100%"} gap={1}>
//         <Skeleton
//           animation={"wave"}
//           variant="circular"
//           width={"50px"}
//           height={"50px"}
//         />
//         <Stack direction={"column"}>
//           <Skeleton variant="text" width={"150px"} sx={{ fontSize: "1rem" }} />
//           <Skeleton variant="text" width={"100px"} sx={{ fontSize: "1rem" }} />
//         </Stack>
//       </Stack>
//       <Skeleton animation={"wave"} variant="rounded" height={"200px"} />
//     </Stack>
//   );
// };

// // Explicitly type the Post component to inform TypeScript about its expected props
// const Post: React.FC<PostProps> = loadable(() => import("./Posts/Post"), {
//   fallback: <EventPostSkeleton />,
// });

// const EventList = () => {
//   const allEvents = posts
//     .filter((post) => post.type === "event")
//     .map((post) => <Post key={post.postId} post={post} />);
//   return allEvents;
// };

// export default EventList;
