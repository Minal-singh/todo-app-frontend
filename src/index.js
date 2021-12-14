import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import App from "./App";
import { store } from "./redux/store";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <CssBaseline>
    <Provider store={store}>
      <App />
    </Provider>
  </CssBaseline>,
  document.getElementById("root")
);

// reportWebVitals(console.log);
