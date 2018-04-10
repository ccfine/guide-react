import React, { Component } from "react";
import PropTypes from "prop-types";
import "css/global.css";

export default class History extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  render () {
    console.log(this.props.history)
    return (
      <li>
        <div></div>
        <div></div>
      </li>
    );
  }
}