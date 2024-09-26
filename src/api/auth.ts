import { AxiosInstance } from "axios";
import { LoginRequest, LoginResponse } from "../types/Auth";

// Login the user
export const login = async (apiClient: AxiosInstance, data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/login', data);
  return response.data;
};

// TODO: Implement the logout function
// TODO: Implement the register function
// TODO: Implement the forgot password function