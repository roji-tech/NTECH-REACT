import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const loadingScreen = document.getElementById("loading");
if (loadingScreen) {
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 500); // 2000 milliseconds = 2 seconds
}
