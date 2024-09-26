import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { StandaloneProvider } from "./components/StandaloneContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { CookiesProvider } from "react-cookie";

// Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <UserProvider userData={null}>
          <QueryClientProvider client={queryClient}>
            <StandaloneProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </StandaloneProvider>
          </QueryClientProvider>
        </UserProvider>
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
);
