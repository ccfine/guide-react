import React, { Component } from "react";
import "css/global.css";
import style from "./group.css";

export default class Group extends Component {
  render () {
    let state = "";
    switch (this.props.group.if_reimbursement) {
      case 0:
        state = "未报账";
        break;
      case 1:
        state = "计调已审";
        break;        
      case 2:
        state = "财务已审";
        break; 
      case -1:
        state = "计调拒绝";
        break; 
      case -2:
        state = "财务拒绝";
        break; 
      default:
        state = "";
    }
    return (
      <li>
        <div className="manner">
          <h1 className="title">{ this.props.group.lineTitle }</h1>
          { state? <span className={ style.state }>{ state }</span>: null }
        </div>
        <div className="manner">
          <div>
          </div>
          <div>
          </div>
        </div>
        <div className={ style.company }>
          深圳市同天下科技有限公司
          <span className={ style.write }>记一笔</span>
        </div>
      </li>
    );
  }
}