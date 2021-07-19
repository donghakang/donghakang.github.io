import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./redux/store.js";
import { Provider } from "react-redux";

import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading..</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
