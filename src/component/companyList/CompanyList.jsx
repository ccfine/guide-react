import React, { Component } from "react";
import Company from "component/company/Company.jsx";
import style from "./companyList.css";

export default class CompanyList extends Component {
  render () {
    return (
      <div>
        <h2 className={ style["company-list"] }>公司列表</h2>
        <ul>
          { this.props.companys.map((company) => 
            <Company company={ company } key={ company.erpId }></Company>
          ) }
        </ul>
      </div>
    );
  }
}