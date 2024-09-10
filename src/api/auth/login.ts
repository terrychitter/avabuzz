import apiClient from "../apiClient";

export const login = async (email: string, password: string) => {
  const response = await apiClient.post("/login", {
    email: email,
    password: password,
  });
  return response;
};