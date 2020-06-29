import React from "react";
import ReactDOM from "react-dom";
//import react router, add by pegggy on 6/21
import { Provider } from "react-redux";

//import store by peggy 6/21
import store from "./Redux/store";
import App from "./App";
// import App from "./Test";

// import Modal from "react-modal";

import * as serviceWorker from "./serviceWorker";

// Modal.setAppElement("#yourAppElement");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
