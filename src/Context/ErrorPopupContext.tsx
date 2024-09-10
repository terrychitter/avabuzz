import React, { createContext, useContext, useState, useCallback } from "react";
import AppErrorPopup from "../components/ErrorHandling/AppErrorPopup";

interface ErrorPopupContextType {
  showError: (message: string, duration?: number) => void;
}

const ErrorPopupContext = createContext<ErrorPopupContextType | undefined>(
  undefined
);

// Custom hook to use the error popup context
export const useErrorPopup = () => {
  const context = useContext(ErrorPopupContext);
  if (!context) {
    throw new Error("useErrorPopup must be used within an ErrorPopupProvider");
  }
  return context;
};

export const ErrorPopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [popupDuration, setPopupDuration] = useState<number>(5000);

  const showError = useCallback((message: string, duration: number = 5000) => {
    setErrorMessage(message);
    setPopupDuration(duration);
  }, []);

  return (
    <ErrorPopupContext.Provider value={{ showError }}>
      {children}
      {errorMessage && (
        <AppErrorPopup message={errorMessage} duration={popupDuration} />
      )}
    </ErrorPopupContext.Provider>
  );
};
