import React, { createContext, useContext, useEffect, useState } from "react";

interface StandaloneContextProps {
  isStandalone: boolean;
}

const StandaloneContext = createContext<StandaloneContextProps | undefined>(
  undefined
);

const isStandalone = (): boolean => {
  return (
    (window.navigator as any).standalone || // For iOS Safari
    window.matchMedia("(display-mode: standalone)").matches || // For modern browsers
    window.location.search.includes("standalone") // Custom query parameter check
  );
};

export const StandaloneProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [standalone, setStandalone] = useState<boolean>(isStandalone());

  useEffect(() => {
    setStandalone(isStandalone());
  }, []);

  return (
    <StandaloneContext.Provider value={{ isStandalone: standalone }}>
      {children}
    </StandaloneContext.Provider>
  );
};

export const useStandalone = (): StandaloneContextProps => {
  const context = useContext(StandaloneContext);
  if (context === undefined) {
    throw new Error("useStandalone must be used within a StandaloneProvider");
  }
  return context;
};
