import React, { Component } from "react";
import { connect } from "react-redux";
import CompanyList from "component/companyList/CompanyList.jsx";
import { getCompanyListData } from "action/companyList.action.js";
import "css/global.css";

@connect(
  state => ({ companys: state.companyList }),
  { getCompanyListData }
)

export default class Home extends Component {
  componentDidMount () {
    this.props.getCompanyListData();
  }
  render () {
    return (
      <div className="screen">
        <CompanyList companys={ this.props.companys.companys }></CompanyList>
      </div>
    );
  }
}