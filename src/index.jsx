import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DegreContextProvider from "./context/DegreContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DegreContextProvider>
      <App />
    </DegreContextProvider>
  </React.StrictMode>
);
