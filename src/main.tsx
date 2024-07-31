import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swUrl = "/serviceWorker.js";

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
