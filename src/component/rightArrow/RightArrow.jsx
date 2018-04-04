import React, { Component } from "react";
import rightArrow from "./rightArrow.svg";
import style from "./rightArrow.css";

export default class Company extends Component {
  render () {
    return (
      <div className={ style["arrow-container"] }  onClick={ this.props.onSwitch }>
        <img src={ rightArrow } className={ style["right-arrow"] } alt="右箭头" />
      </div>
    );
  }
}