import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import "./index.css";
import { Provider } from "react-redux";
//providing store to the react application is react js
import appStore from "./src/utils/appStore";
//if we want to provide the store to the body only not header, we can then provide it to that portion only, by covering body component inside the app.js file

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
