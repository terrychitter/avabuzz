import { useMutation } from "react-query";
import { login } from "../api";
import useApiClient from "../api/apiClient";
import { useAuth } from "../context/AuthContext";
import { LoginRequest, LoginResponse } from "../types/Auth";

export const useLogin = () => {
    const {setAuthToken, setAuthRefreshToken} = useAuth();
    const apiClient = useApiClient();

    return useMutation<LoginResponse, Error, LoginRequest>(
        (credentials: LoginRequest) => login(apiClient, credentials),
        {
            onSuccess: (data) => {
                console.log("This ran");
                // Set the auth token
                setAuthToken(data.access_token);
                
                // Set the refresh token
                setAuthRefreshToken(data.refresh_token);

                // Redirect to the home page
                // window.location.href = '/';
                console.log("Login successful");
            }
        }
    );
};
