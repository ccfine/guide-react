import React, { Component } from "react";
import RightArrow from "component/rightArrow/RightArrow";
import "css/global.css";
import style from "./company.css";

export default class Company extends Component {
  handleSwitchRoute () {
    console.log("切换到公司详情页");
  }
  render () {
    return (
      <li className="manner">
        <h3>{ this.props.company.cpyName }</h3>
        <div className={ style.ct }>
          { this.props.company.ctProvince }
          <span className={ style.separate }>|</span>
          { this.props.company.ctCity }
        </div>
        <span className={ style["plan-num"] }>{ this.props.company.planNum }个团期</span>
        <RightArrow onSwitch={ this.handleSwitchRoute.bind(this) }></RightArrow>
      </li>
    );
  }
}