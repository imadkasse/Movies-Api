import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import index from "./index.css";
import { Provider } from "react-redux";
import { storeRed } from "./redux/store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeRed}>
      <App />
    </Provider>
  </React.StrictMode>
);
