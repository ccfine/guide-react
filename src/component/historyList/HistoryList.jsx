import React, { Component } from "react";
import PropTypes from "prop-types";
import History from "component/history/History.jsx";
import daofu from "./daofu.svg";
import tuanshu from "./tuanshu.svg";
import "css/global.css";
import style from "./historyList.css";

export default class HistoryList extends Component {
  static propTypes = {
    historys: PropTypes.array
  }
  render () {
    let daoFu = 0;
    for (let i = 0; i < this.props.historys.length; i++) {
      daoFu += this.props.historys[i].guideAmount;
    }
    return (
      <div>
        <div className="items-center bgcolor mar-bot10 padding10">
          <div className={  style.statistics }>
            <img src={ daofu } width="20" height="20" alt="导服费" />
            <div>
              <div className="font-color-1 font-size-1 mar-bot5">导服费(人民币)</div>
              <b className="font-size-1">{ daoFu }</b>
            </div>
          </div>
          <div className={ style.separate }></div>
          <div className={  style.statistics }>
            <img src={ tuanshu } width="20" height="20" alt="历史带团数" />
            <div>
              <div className="font-color-1 font-size-1 mar-bot5">历史带团数(个)</div>
              <b className="font-size-1">{ this.props.historys.length }</b>
            </div>
          </div>
        </div>
        <ul>
          { this.props.historys.map((history) => 
            <History history={ history } key={ history.id }></History>
          ) }
        </ul>
      </div>
    );
  }
}