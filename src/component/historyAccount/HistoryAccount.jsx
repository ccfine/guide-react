import React, { Component } from "react";
import HeaderBar from "component/headerBar/HeaderBar.jsx";
import "css/global.css";

export default class HistoryAccount extends Component {
  render () {
    return (
      <div className="screen">
        <HeaderBar account="团期报账"></HeaderBar>    
      </div>
    );
  }
}