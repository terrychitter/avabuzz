import axios from "axios";
import { useAuth } from "../context/AuthContext";

const useApiClient = () => {
    const { authToken, setAuthToken , setAuthRefreshToken } = useAuth();

    const apiClient = axios.create({
        baseURL: import.meta.env.VITE_AVABUZZ_API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.VITE_AVABUZZ_API_KEY,
            ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        timeout: 10000 // 10 seconds
    });

    // Add request interceptor
    apiClient.interceptors.request.use((config) => {
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    // Add response interceptor
    apiClient.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                // Clear tokens
                setAuthToken(null);
                setAuthRefreshToken(null);
            }
            return Promise.reject(error);
        }
    );

    return apiClient;
};

export default useApiClient;
