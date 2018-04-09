import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import leftArrow from "./leftArrow.svg";
import "css/global.css";
import style from "./headerBar.css";

@withRouter

export default class HeaderBar extends Component {
  handleBackHome () {
    this.props.history.push("/home");
  }
  handleSwitchAcount () {
    if (this.props.account === "历史报账") {
      this.props.history.push("/history");
    } else if (this.props.account === "当前报账") {
      this.props.history.push("/group");
    }
  }
  render () {
    return (
      <div className={ style["header-bar"] }>
        <div className={ style["arrow-container"] } onClick={ this.handleBackHome.bind(this) }>
          <img src={ leftArrow }  className={ style["left-arrow"] } alt="左箭头返回首页" />
        </div>
        <div>同天下科技公司</div>
        <div className={ style.account } onClick={this.handleSwitchAcount.bind(this)}>{ this.props.account }</div>
      </div>
    );
  }
}