import { AxiosInstance } from "axios";
import { UserType } from "../context/UserContext";

// Get the user profile (logged in user)
export const fetchUserProfile = async (apiClient: AxiosInstance): Promise<UserType> => {
  const response = await apiClient.get<UserType>("/users/me");
  return response.data;
};