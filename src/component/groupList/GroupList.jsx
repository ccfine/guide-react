import React, { Component } from "react";
import PropTypes from "prop-types";
import Group from "component/group/Group.jsx";
import "css/global.css";
import style from "./groupList.css";

export default class GroupList extends Component {
  static PropTypes = {
    groups: PropTypes.array
  }
  render () {
    let num = 0;
    let today = +new Date();
    for (let i = 0; i < this.props.groups.length; i++) {
      let backDate = +new Date(this.props.groups[i].backDate);
      if (this.props.groups[i].if_reimbursement === 0 && today > backDate) {
        num += 1;
      }
    }
    return (
      <div>
        <div className="font-color-2 padding10">
          团量：{ this.props.groups? this.props.groups.length: 0 } 个
          <span className={ style.separate }>|</span>
          行程结束需报账：{ this.props.groups? num: 0 } 个
        </div>
        <ul>
          { this.props.groups.map((group) => 
            <Group group={ group } key={ group.id }></Group>
          ) }
        </ul>
      </div>
    );
  }
}