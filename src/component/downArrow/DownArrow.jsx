import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./downArrow.css";

export default class DownArrow extends Component {
  static propTypes = {
    downArrow: PropTypes.string
  }
  render () {
    return (
      <img src={ this.props.downArrow }  className={ style["down-arrow"] } alt="下箭头" />
    );
  }
}