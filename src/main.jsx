import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LenisScrollProvider from "./Components/layout/LenisScrollProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LenisScrollProvider>
      <App />
    </LenisScrollProvider>
  </StrictMode>
);
