import { useQuery } from "react-query";
import useApiClient from "../api/apiClient"
import { PostType } from "../context/PostContext";
import { fetchUserPosts } from "../api/post";

export const useFetchUserPosts = (privateUserId: string) => {
    const apiClient = useApiClient();

    return useQuery<PostType[], Error>(
        ["userPosts", privateUserId],
        () => fetchUserPosts(apiClient, privateUserId)
    );

}