import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/styles.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);
