import React, { Component } from "react";
import Company from "component/company/Company.jsx";

export default class CompanyList extends Component {
  render () {
    return (
      <ul>
        <Company></Company>
      </ul>
    );
  }
}