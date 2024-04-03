import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecepieProvider } from "./context/RecepieProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RecepieProvider>
          <App />
        </RecepieProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
