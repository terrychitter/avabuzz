import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { AuthContextType } from "../types/Auth";

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "auth-token",
    "auth-refresh-token",
  ]);
  // The auth token state
  const [authToken, setAuthToken] = useState<string | null>(
    cookies["auth-token"] || null
  );
  // The auth refresh token state
  const [authRefreshToken, setAuthRefreshToken] = useState<string | null>(
    cookies["auth-refresh-token"] || null
  );

  const isProduction = import.meta.env.MODE === "production";

  // Effect to sync authToken with cookies
  useEffect(() => {
    if (authToken) {
      setCookie("auth-token", authToken, {
        path: "/",
        httpOnly: isProduction,
        secure: isProduction,
        sameSite: "strict",
      });
    } else {
      // Remove the cookie
      removeCookie("auth-token");
    }
  }, [authToken, setCookie]);

  // Effect to sync authRefreshToken with cookies
  useEffect(() => {
    if (authRefreshToken) {
      setCookie("auth-refresh-token", authRefreshToken, {
        path: "/",
        httpOnly: isProduction,
        secure: isProduction,
        sameSite: "strict",
      });
    } else {
      // Remove the cookie
      removeCookie("auth-refresh-token");
    }
  }, [authRefreshToken, setCookie]);

  // const refreshToken = async () => {
  // TODO: Implement token refresh
  // };

  // const logout = () => {
  //   setAuthToken(null);
  // TODO: Implement logout
  // };

  // Check if the user is logged in
  const isLoggedIn = !!authToken;

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        authRefreshToken,
        setAuthRefreshToken,
        isLoggedIn,
        // logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
