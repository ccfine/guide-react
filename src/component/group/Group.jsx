import React, { Component } from "react";
import HeaderBar from "component/headerBar/HeaderBar.jsx";
import "css/global.css";

export default class Group extends Component {
  render () {
    return (
      <div className="screen">
        <HeaderBar history="历史报账"></HeaderBar>
      </div>
    );
  }
}