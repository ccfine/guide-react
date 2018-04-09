import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderBar from "component/headerBar/HeaderBar.jsx";
import Search from "component/search/Search.jsx";
// import HistoryList from "component/historyList/HistoryList.jsx";
import { getHistoryListData } from "action/historyList.action.js";
import { search } from "action/search.action.js";
import "css/global.css";

@connect(
  state => state.historyList,
  { getHistoryListData, search }
)

export default class HistoryAccount extends Component {
  componentDidMount () {
    this.props.getHistoryListData();
  }
  searchSkey (skey) {
    this.props.search(skey, 1);
  }
  render () {
    return (
      <div className="screen">
        <HeaderBar account="当前报账"></HeaderBar>    
        <div className="bar">
          <div></div>
          <Search onSearch={ this.searchSkey.bind(this) }></Search>
        </div>
        {/* <HistoryList historys={ this.props.historys }></HistoryList> */}
        <div className="font-color-1 center">---已经见底了---</div>
      </div>
    );
  }
}