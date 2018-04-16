import React, { Component } from "react";
import { connect } from "react-redux";
import { account } from "container/account/Account.js";
import HeaderBar from "component/headerBar/HeaderBar.jsx";
import Search from "component/search/Search.jsx";
import HistoryList from "component/historyList/HistoryList.jsx";
import { getCompanyList } from "action/companyList.action.js";
import { getHistoryList } from "action/historyList.action.js";
import "css/global.css";

@connect(
  state => state,
  { getCompanyList, getHistoryList }
)
@account

export default class HistoryAccount extends Component {
  componentDidMount () {
    this.props.getCompanyList();
    this.props.getHistoryList(this.props.match.params.erpId);
  }
  search (skey) {
    this.props.searchSkey(skey, "1");
  }
  render () {
    return (
      <div className="screen">
        <HeaderBar companys={ this.props.companyList.companys } account="当前报账"></HeaderBar>    
        <div className="items-center bgcolor bor-bot1 mar-top40 padding5">
          <div></div>
          <Search onSearch={ this.search.bind(this) }></Search>
        </div>
        <HistoryList historys={ this.props.historyList.historys }></HistoryList>
        <div className="font-color-1 center">---已经见底了---</div>
      </div>
    );
  }
}