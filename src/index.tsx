import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App";

import GlobalStyles from "styles/globalStyles";
import { globalTheme } from "styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
