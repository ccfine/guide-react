import React, { Component } from "react";
import { connect } from "react-redux";
import my from "./my.svg";
import help from "./help.svg";
import CompanyList from "component/companyList/CompanyList.jsx";
import User from "component/user/User.jsx";
import { getUserData } from "action/user.action.js";
import { getCompanyList } from "action/companyList.action.js";
import { CSSTransition } from "react-transition-group";
import "css/global.css";
import "./home.css";

@connect(
  state => state,
  { getUserData, getCompanyList }
)

export default class Home extends Component {
  constructor () {
    super();
    this.state = {
      show: false,
    }
  }
  componentDidMount () {
    this.props.getUserData();
    this.props.getCompanyList();
  }
  handleSwitchUser () {
    this.setState({
      show: !this.state.show
    });
  }
  render () {
    return (
      <div className="screen">
        <div className="items-center header-bar padding5">
          <div className="items-center" onClick={ this.handleSwitchUser.bind(this) }>
            <img src={ my } width="25" alt="我的" />
            <div>我的</div>
          </div>
          <div className="font-size-1">首页</div>
          <div className="items-center">
            <div>帮助</div>
            <img src={ help } width="20" alt="帮助" />
          </div>
        </div>
        <CompanyList companys={ this.props.companyList.companys }></CompanyList>
        <CSSTransition classNames="user" timeout={ 300 } in={ this.state.show }>
          <User user={ this.props.user.user[0] }></User>
        </CSSTransition>
        <CSSTransition classNames="mask" timeout={ 0 } in={ this.state.show }>
          <div className="mask" onClick={ this.handleSwitchUser.bind(this) }></div>
        </CSSTransition>
      </div>
    );
  }
}