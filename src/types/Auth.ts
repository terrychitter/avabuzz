// The shap of the Login Request from the client
export interface LoginRequest {
    email: string;
    password: string;
}

// The shape of the Login Response from the server
export interface LoginResponse {
    access_token: string;
    refresh_token: string;
}

// The shape of the AuthContextType
export interface AuthContextType {
    authToken: string | null;
    authRefreshToken: string | null;
    setAuthToken: (token: string | null) => void;
    setAuthRefreshToken: (token: string | null) => void;
    isLoggedIn: boolean;
    // logout: () => void;
  }

