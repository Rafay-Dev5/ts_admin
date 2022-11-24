import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AuthContextProvider from "./context/authcontext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);
const theme = createTheme({
  palette: {
    primary: {
      main: "#2C3D73",
    },
    secondary: {
      main: "#747474",
    },
    text: {
      main: "#2C3D73",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
