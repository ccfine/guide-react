import React, { Component } from "react";
import style from "./downArrow.css";

export default class DownArrow extends Component {
  render () {
    return (
      <img src={ this.props.downArrow }  className={ style["down-arrow"] } alt="下箭头" />
    );
  }
}