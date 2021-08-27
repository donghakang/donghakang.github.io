import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./redux/store.js";
import { Provider } from "react-redux";

import "./i18n";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
