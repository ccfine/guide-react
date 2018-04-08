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
        <div className={ style.group }>
          <div className={ style.amount }>
            <div className="font-color-3 center"> 
              ￥
              <b className="font-size-1">{ this.props.group.guideAmount }</b>
            </div>
            <div className={ style.total }>报账合计</div>
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