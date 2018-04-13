import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import leftArrow from "./leftArrow.svg";
import "css/global.css";

@withRouter

export default class HeaderBar extends Component {
  static propTypes = {
    account: PropTypes.string.isRequired
  }
  handleBackHome () {
    this.props.history.push("/home");
  }
  handleSwitchAcount () {
    if (this.props.account === "历史报账") {
      this.props.history.push("/history?id=" + this.props.location.search.slice(-1));
    } else if (this.props.account === "当前报账") {
      this.props.history.push("/group?id=" + this.props.location.search.slice(-1));
    }
  }
  render () {
    return (
      <div className="items-center header-bar padding5">
        <img src={ leftArrow } width="20" onClick={ this.handleBackHome.bind(this) } alt="左箭头返回首页" />
        <div>同天下科技公司</div>
        <div className="font-size-1" onClick={this.handleSwitchAcount.bind(this)}>{ this.props.account }</div>
      </div>
    );
  }
}