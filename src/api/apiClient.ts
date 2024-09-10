import axios from "axios";

// Create an axios instance
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_AVABUZZ_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_AVABUZZ_API_KEY
    }
});

export default apiClient;
