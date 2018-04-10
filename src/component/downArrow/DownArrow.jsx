import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DownArrow extends Component {
  static propTypes = {
    downArrow: PropTypes.string
  }
  render () {
    return (
      <img src={ this.props.downArrow } width="20" hspace="5" alt="下箭头" />
    );
  }
}