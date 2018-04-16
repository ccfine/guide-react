import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import DownArrow from "component/downArrow/DownArrow.jsx";
import leftArrow from "./leftArrow.svg";
import downArrow from "./downArrow.svg";
import { CSSTransition } from "react-transition-group";
import "css/global.css";
import style from "./headerBar.css";

@withRouter

export default class HeaderBar extends Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
    companys: PropTypes.array.isRequired
  }
  constructor () {
    super();
    this.state = {
      show: false
    };
  }
  handleBackHome () {
    this.props.history.push("/home");
  }
  handleSlideToggle () {
    this.setState({
      show: !this.state.show
    });
  }
  handleSwitchAcount () {
    if (this.props.account === "历史报账") {
      this.props.history.push(`/history/${this.props.match.params.erpId}`);
    } else if (this.props.account === "当前报账") {
      this.props.history.push(`/group/${this.props.match.params.erpId}`);
    }
  }
  render () {
    return (
      <div className="items-center header-bar padding5">
        <img src={ leftArrow } width="20" onClick={ this.handleBackHome.bind(this) } alt="左箭头返回首页" />
        <div className="items-center">
          <div className={ style["company-name"] }>{ this.props.companys.length === 0? "": this.props.companys.find(company => company.erpId === this.props.match.params.erpId * 1).cpyName }</div>
          <DownArrow downArrow={ downArrow } onSlide={ this.handleSlideToggle.bind(this) }></DownArrow>
        </div>
        <div className="font-size-1" onClick={this.handleSwitchAcount.bind(this)}>{ this.props.account }</div>
        <CSSTransition classNames="lists" timeout={ 300 } in={ this.state.show }>
          <div className="lists">
            <ul className="font-color-1">
              <li className="font-size-1 center padding5">全部</li>
              { this.props.companys.map(company => 
                <li key={ company.erpId } className={ style.list }>{ company.cpyName }</li>
              ) }
            </ul>
          </div>
        </CSSTransition>
      </div>
        
    );
  }
}