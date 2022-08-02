import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./App.style";
import ThemeProvider from "./context/themeProvider.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
