import React, { Component } from "react";
import CompanyList from "component/companyList/CompanyList.jsx";
import "css/global.css";
import style from "./home.css";

export default class Home extends Component {
  render () {
    return (
      <div className="bg">
        <h2 className={style["company-list"]}>公司列表</h2>
        <CompanyList></CompanyList>
      </div>
    );
  }
}