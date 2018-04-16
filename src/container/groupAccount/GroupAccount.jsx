import React, { Component } from "react";
import { connect } from "react-redux";
import { account } from "container/account/Account.js";
import HeaderBar from "container/headerBar/HeaderBar.jsx";
// import DownArrow from "component/downArrow/DownArrow.jsx";
// import downArrow from "./downArrow.svg";
import Search from "component/search/Search.jsx";
import GroupList from "component/groupList/GroupList.jsx";
import { getCompanyList } from "action/companyList.action.js";
import { getGroupList } from "action/groupList.action.js";
import "css/global.css";
// import style from "./groupAccount.css";

@connect(
  state => state,
  { getCompanyList, getGroupList }
)
@account

export default class GroupAccount extends Component {
  componentDidMount () {
    this.props.getCompanyList();
    this.props.getGroupList(this.props.match.params.erpId);
  }
  search (skey) {
    this.props.searchSkey(skey, "0");
  }
  render () {
    return (
      <div className="screen">
        <HeaderBar companys={ this.props.companyList.companys }account="历史报账"></HeaderBar>
        <div className="items-center bgcolor mar-top40 padding5">
          {/* <div className={ style["account-state"] }>
            <div className="font-size-1">报账状态</div>
            <DownArrow downArrow={ downArrow }></DownArrow>
          </div> */}
          <div></div>
          <Search onSearch={ this.search.bind(this) }></Search>
        </div>
        <GroupList groups={ this.props.groupList.groups }></GroupList>
        <div className="font-color-1 center">---已经见底了---</div>
      </div>
    );
  }
}