import { useQuery } from "react-query";
import { fetchUserProfile } from "../api";
import useApiClient from "../api/apiClient";
import { UserType } from "../context/UserContext";

export const usefetchLoggedInUser = () => {
    const apiClient = useApiClient();

    return useQuery<UserType, Error>(
        "me",
        () => fetchUserProfile(apiClient),
    );
};