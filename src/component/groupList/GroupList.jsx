import React, { Component } from "react";
import Group from "component/group/Group.jsx";

export default class GroupList extends Component {
  render () {
    return (
      <div>
        <div>团量：</div>
        <ul>
          { this.props.groups.map((group) => 
            <Group group={ group } key={ group.erpId }></Group>
          ) }
        </ul>
      </div>
    );
  }
}