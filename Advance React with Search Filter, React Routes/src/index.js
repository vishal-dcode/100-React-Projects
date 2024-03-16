import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";

import App from "./App";
import { AppProvider } from "./context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </StrictMode>
);
