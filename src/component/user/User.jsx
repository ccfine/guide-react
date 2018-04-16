import React, { Component } from "react";
import PropTypes from "prop-types";
import help from "./help.svg";
import earphone from "./earphone.svg";
import logout from "./logout.svg";
import erweima from "./erweima.png";
import "css/global.css";
import style from "./user.css";

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  handleLogout () {
    window.location.href = window.location.origin + "/login.html";
  }
  render () {
    return (
      <div className={ style.container }>
        <div className={ style.user }>
          <div className={ style["user-name"] }>韩京佑</div>
          <div className="items-center">
            <div>
              <div className="mar-bot10 nowrap">导服费(人民币)</div>
              <div className="font-size-1">{ this.props.user.guideAmount }</div>
            </div>
            <div>
              <div className="mar-bot10 nowrap">带团数(个)</div>
              <div className="font-size-1">{ this.props.user.planNum }</div>
            </div>
          </div>
        </div>
        <div className="items-center flex-start padding10 bor-bot1">
          <img src={ help } width="20" hspace="5" alt="帮助中心" />
          <div className="font-size-1">帮助中心</div>
        </div>
        <div className="padding10 bor-bot1">
          <div className="items-center flex-start">
            <img src={ earphone } width="20" hspace="5" alt="问题反馈" />
            <div className="font-size-1">问题反馈</div>
          </div>
          <div className={ style.erweima }>
            <img src={ erweima } width="80" alt="二维码" />
            <div className="padding10 font-color-1">
              <div className="mar-bot5 nowrap">长按左方的二维码</div>
              <div className="nowrap">进入问题交流群</div>
            </div>
          </div>
        </div>
        <div className="items-center flex-start padding10" onClick={ this.handleLogout.bind(this) }>
          <img src={ logout } width="20" hspace="5" alt="退出账号" />
          <div className="font-size-1">退出账号</div>
        </div>
      </div>
    );
  }
}