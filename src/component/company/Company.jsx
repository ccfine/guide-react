import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RightArrow from "component/rightArrow/RightArrow";
import "css/global.css";
import style from "./company.css";

@withRouter
export default class Company extends Component {
  handleSwitchRoute () {
    this.props.history.push("/group");
  }
  render () {
    let separate = null;
    if (this.props.company.ctProvince && this.props.company.ctCity) {
      separate = <span className={ style.separate }>|</span>;
    }
    return (
      <li className="manner">
        <h3>{ this.props.company.cpyName }</h3>
        <div className={ style.ct }>
          { this.props.company.ctProvince? this.props.company.ctProvince: null }
          { separate }
          { this.props.company.ctCity? this.props.company.ctCity: null }
        </div>
        <span className={ style["plan-num"] }>{ this.props.company.planNum }个团期</span>
        <RightArrow onSwitch={ this.handleSwitchRoute.bind(this) }></RightArrow>
      </li>
    );
  }
}