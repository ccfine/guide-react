import React, { Component } from "react";
import rightArrow from "./rightArrow.svg";

export default class Company extends Component {
  render () {
    return (     
      <img src={ rightArrow } width="15" hspace="5" alt="右箭头" />
    );
  }
}