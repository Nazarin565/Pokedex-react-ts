import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { AppProvider } from "./store/AppProvider.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
