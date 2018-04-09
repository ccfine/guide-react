import React, { Component } from "react";
import "css/global.css";
import style from "./group.css";

export default class Group extends Component {
  render () {
    let account = "";
    switch (this.props.group.if_reimbursement) {
      case 0:
        account = "未报账";
        break;
      case 1:
        account = "计调已审";
        break;        
      case 2:
        account = "财务已审";
        break; 
      case -1:
        account = "计调拒绝";
        break; 
      case -2:
        account = "财务拒绝";
        break; 
      default:
        account = "";
    }
    let state = null;
    let today = +new Date();
    let backDate = +new Date(this.props.group.backDate);
    if (today < backDate) {
      state = <div className="do font-color-4">正在进行</div>
    } else {
      state = <div className="do font-color-3">行程结束</div>
    }
    return (
      <li>
        <div className="manner">
          <h1 className="title">{ this.props.group.lineTitle }</h1>
          { account? <span className={ style.account }>{ account }</span>: null }
        </div>
        <div className={ style.group }>
          <div className={ style.amount }>
            <div className="font-color-3 center"> 
              ￥
              <b className="font-size-1">{ this.props.group.guideAmount }</b>
            </div>
            <div className={ style.total }>报账合计</div>
          </div>
          <div className="font-color-1">
            <div className={ style.plan }>
              <div className={ style["plan-code"] }>团</div>号：
              <div className={ style.code }>{ this.props.group.planCode }</div>
              { state }
            </div>
            <div>
              往返时间：{ this.props.group.planDate.slice(0, 10) }/{ this.props.group.backDate.slice(0, 10) }
            </div>
            <div className={ style.op }>
              <div>线路OP：</div>
              <div className={ style["op-name"] }>{ this.props.group.opName }</div>
              <div className="separate">|</div>
              <div className="font-color-2">联系我</div>
            </div>
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