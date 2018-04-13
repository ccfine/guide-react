import React, { Component } from "react";
import PropTypes from "prop-types";
import Company from "component/company/Company.jsx";
import "css/global.css";

export default class CompanyList extends Component {
  static propTypes = {
    companys: PropTypes.array
  }
  render () {
    return (
      <div className="mar-top40">
        <h2 className="font-color-1 padding10">公司列表</h2>
        <ul>
          { this.props.companys.map((company) => 
            <Company company={ company } key={ company.erpId }></Company>
          ) }
        </ul>
      </div>
    );
  }
}