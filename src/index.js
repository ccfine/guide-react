import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "component/authRoute/AuthRoute.jsx";
import Home from "component/home/Home.jsx";
import reducer from "./redux/reducer.js";
import "css/index.css";
import registerServiceWorker from "./registerServiceWorker.js";

let store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension? window.devToolsExtension(): f => f
));

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/home" component={ Home }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
registerServiceWorker();