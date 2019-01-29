import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import ReactDOM from "react-dom";
//  import { Provider } from "react-redux";
//  import store from "./store";
import Home from "./views/Home";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  // <Provider store={store}>
  <Home />,
  //</Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
