// import apiClient from "./apiClient";

// export const refresh = async (refreshToken: string) => {
//     try {
//         const response = await apiClient.post("/refresh", {}, {
//             headers: {
//                 Authorization: `Bearer ${refreshToken}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error refreshing token:", error);
//         throw error;
//     }
// };
