import React, { createContext, useState, useContext, ReactNode } from "react";
import { UserType } from "./UserContext";

// Define the shape of the post data
export interface PostType {
  caption: string;
  category: {
    description: string;
    id: number;
    name: string;
  };
  created_at: string;
  hashtags: string[];
  id: number;
  media: {
    order: number;
    size_bytes: number;
    url: string;
  }[];
  reactions: {
    count: number;
    type: string;
  }[];
  type: string;
  view_count: number;
  poster: UserType;
  user_reaction_type?: string | null;
  event?: null;
}

// Define the shape of the context value
interface PostContextType {
  post: PostType;
  updatePost: (newData: Partial<PostType>) => void;
}

// Create the context with a default value of undefined
const PostContext = createContext<PostContextType | undefined>(undefined);

// Define the provider props type
interface PostProviderProps {
  children: ReactNode;
  postData: PostType;
}

// Create the provider component
const PostProvider: React.FC<PostProviderProps> = ({ children, postData }) => {
  const [post, setPost] = useState<PostType>(postData);

  const updatePost = (newData: Partial<PostType>) => {
    setPost((prevPost) => ({ ...prevPost, ...newData }));
  };

  return (
    <PostContext.Provider value={{ post, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook to use the PostContext
const usePost = (): PostContextType => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export { PostProvider, usePost };
