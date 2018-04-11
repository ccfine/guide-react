import React, { Component } from "react";
import PropTypes from "prop-types";
import phone from "./phone.svg";
import "css/global.css";
import style from "./group.css";

export default class Group extends Component {
  static propTypes = {
    group: PropTypes.object
  }
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
        <div className="items-center bgcolor mar-bot1 padding5">
          <h1 className={ style.title }>{ this.props.group.lineTitle }</h1>
          { account? <span className={ style.account }>{ account }</span>: null }
        </div>
        <div className="items-center flex-start bgcolor mar-bot1 padding10 relative">
          <div className={ style.amount }>
            <div className="font-color-3 center mar-bot5"> 
              ￥
              <b className="font-size-1">{ this.props.group.guideAmount }</b>
            </div>
            <div className="font-color-1 font-size-1 nowrap">报账合计</div>
          </div>
          <div className="font-color-1">
            <div className="items-center flex-start mar-bot5">
              <div className="let-spa24">团</div>号：
              <div className={ style["plan-code"] }>{ this.props.group.planCode }</div>
              { state }
            </div>
            <div className="mar-bot5">
              往返时间：{ this.props.group.planDate.slice(0, 10) }/{ this.props.group.backDate.slice(0, 10) }
            </div>
            <div className="items-center flex-start items-start">
              <div>线路OP：</div>
              <div className={ style["op-name"] }>{ this.props.group.opName }</div>
              <div className="separate">|</div>
              <div className="font-color-2">联系我</div>
              <div>
                <img src={ phone } width="20" height="20" hspace="5" alt="手机" />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center bgcolor padding5 mar-bot10">
          <div className="font-color-1">深圳市同天下科技有限公司</div>
          <div className={ style.record }>记一笔</div>
        </div>
      </li>
    );
  }
}