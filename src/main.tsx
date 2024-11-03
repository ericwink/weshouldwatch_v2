import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import TrpcProvider from "./components/TrpcProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TrpcProvider>
        <App />
      </TrpcProvider>
    </ThemeProvider>
  </StrictMode>
);
