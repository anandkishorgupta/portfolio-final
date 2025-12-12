import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SSRProvider } from "@react-aria/ssr";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SSRProvider>
        <App />
      </SSRProvider>
    </BrowserRouter>
  </StrictMode>
);
