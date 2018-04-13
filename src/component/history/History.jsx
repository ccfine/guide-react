import React, { Component } from "react";
import PropTypes from "prop-types";
import "css/global.css";
import style from "./history.css";

export default class History extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  render () {
    return (
      <li>
        <div className="items-center bor-bot1 padding10 bgcolor">
          <div>
            <h1 className={ style.title }>{ this.props.history.lineTitle }</h1>
            <div className="items-center flex-start font-color-1">
              <div className="let-spa24">团</div>号：
              <div className={ style["plan-code"] }>{ this.props.history.planCode }</div>
            </div>
          </div>
          <div className={ style.amount }>
            <div className="font-color-3 center mar-bot5"> 
              ￥
              <b className="font-size-1">{ this.props.history.guideAmount }</b>
            </div>
            <div className="font-color-1 font-size-1 nowrap">导游服务费</div>
          </div>
        </div>
        <div className="items-center mar-bot10 padding10 bgcolor font-color-1">
          <div>出团时间：{ this.props.history.planDate.slice(0, 10) }</div>
          <div>报账审结时间：{ this.props.history.backDate.slice(0, 10) }</div>
        </div>
      </li>
    );
  }
}