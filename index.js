import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import "./index.css";
// Remove this line
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If there is a call to reportWebVitals, remove it
// reportWebVitals();
