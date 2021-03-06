import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "component/authRoute/AuthRoute.jsx";
import Home from "container/home/Home.jsx";
import GroupAccount from "container/groupAccount/GroupAccount.jsx";
import HistoryAccount from "container/historyAccount/HistoryAccount.jsx";
import reducer from "./redux/reducer.js";
import "css/index.css";
import registerServiceWorker from "./registerServiceWorker.js";

let store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension? window.devToolsExtension(): f => f
));

ReactDom.render(
  <Provider store={ store }>
    <HashRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/home" component={ Home }></Route>
          <Route path="/group/:erpId" component={ GroupAccount }></Route>
          <Route path="/history/:erpId" component={ HistoryAccount }></Route>
        </Switch>
      </div>
    </HashRouter>
  </Provider>
  ,
  document.getElementById("root")
);
registerServiceWorker();