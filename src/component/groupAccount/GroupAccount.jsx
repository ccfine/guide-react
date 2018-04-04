import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderBar from "component/headerBar/HeaderBar.jsx";
import DownArrow from "component/downArrow/DownArrow.jsx";
import downArrow from "./downArrow.svg";
import Search from "component/search/Search.jsx";
import GroupList from "component/groupList/GroupList.jsx";
import { getGroupListData } from "action/groupList.action.js";
import "css/global.css";
import style from "./groupAccount.css";

@connect(
  state => ({ groups: state.groupList }),
  { getGroupListData }
)

export default class GroupAccount extends Component {
  componentDidMount () {
    this.props.getGroupListData();
  }
  render () {
    return (
      <div className="screen">
        <HeaderBar account="历史报账"></HeaderBar>
        <div className="bar">
          <div className={ style["account-state"] }>
            报账状态
            <DownArrow downArrow={ downArrow }></DownArrow>
          </div>
          <Search></Search>
        </div>
        <GroupList groups={ this.props.groups.groups }></GroupList>
      </div>
    );
  }
}