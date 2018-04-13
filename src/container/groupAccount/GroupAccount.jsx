import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderBar from "component/headerBar/HeaderBar.jsx";
import DownArrow from "component/downArrow/DownArrow.jsx";
import downArrow from "./downArrow.svg";
import Search from "component/search/Search.jsx";
import GroupList from "component/groupList/GroupList.jsx";
import { getGroupList } from "action/groupList.action.js";
import { search } from "action/search.action.js";
import "css/global.css";
import style from "./groupAccount.css";

@connect(
  state => state.groupList,
  { getGroupList, search }
)

export default class GroupAccount extends Component {
  componentDidMount () {
    this.props.getGroupList(this.props.location.search.slice(-1));
  }
  searchSkey (skey) {
    this.props.search(this.props.location.search.slice(-1), skey, "0");
  }
  render () {
    return (
      <div className="screen">
        <HeaderBar account="历史报账"></HeaderBar>
        <div className="items-center bgcolor mar-top40 padding5">
          <div className={ style["account-state"] }>
            <div className="font-size-1">报账状态</div>
            <DownArrow downArrow={ downArrow }></DownArrow>
          </div>
          <Search onSearch={ this.searchSkey.bind(this) }></Search>
        </div>
        <GroupList groups={ this.props.groups }></GroupList>
        <div className="font-color-1 center">---已经见底了---</div>
      </div>
    );
  }
}