import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";
import AuthProvider from "react-auth-kit/AuthProvider";
import { authStore } from "./utils/auth/index.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { StandaloneProvider } from "./components/StandaloneContext.tsx";

// Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider store={authStore}>
      <QueryClientProvider client={queryClient}>
        <StandaloneProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StandaloneProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
