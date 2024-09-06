import axios from "axios";

// Create an axios instance
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_AVABUZZ_API_BASE_URL,
    headers: {
        'x-api-key': import.meta.env.VITE_AVABUZZ_API_KEY
    }
});

// Add a response interceptor
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Customize error handling based on status codes
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    throw new Error("Access forbidden");
                default:
                    throw new Error(error.response.data.message || "An error occurred");
            }
        } else {
            throw new Error("Network error");
        }
    }
);

export default apiClient;
