import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import RightArrow from "component/rightArrow/RightArrow";
import "css/global.css";

@withRouter

export default class Company extends Component {
  static propTypes = {
    company: PropTypes.object
  }
  handleSwitchGroup () {
    this.props.history.push(`/group/${this.props.company.erpId}`);
  }
  render () {
    let separate = null;
    if (this.props.company.ctProvince && this.props.company.ctCity) {
      separate = <span className="separate">|</span>;
    }
    return (
      <li className="items-center bor-bot1 bgcolor padding10" onClick={ this.handleSwitchGroup.bind(this) }>
        <div>
          <h3 className="font-size-1 mar-bot5">{ this.props.company.cpyName }</h3>
          <div className="font-color-1">
            { this.props.company.ctProvince? this.props.company.ctProvince: null }
            { separate }
            { this.props.company.ctCity? this.props.company.ctCity: null }
          </div>
        </div>   
        <div className="items-center flex-start">
          <div>{ this.props.company.planNum }个团期</div>
          <RightArrow></RightArrow>
        </div>           
      </li>
    );
  }
}