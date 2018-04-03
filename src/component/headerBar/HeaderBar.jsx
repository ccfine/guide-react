import React, { Component } from "react";
import leftArrow from "./leftArrow.png";
import "css/global.css";
import style from "./headerBar.css";

export default class HeaderBar extends Component {
  render () {
    return (
      <div className="header-bar">
        <div className={ style["arrow-container"] }>
          <img src={ leftArrow }  className={ style["left-arrow"] } alt="左箭头返回首页" />
        </div>
      </div>
    );
  }
}