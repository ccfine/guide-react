import React, { Component } from "react";
import style from "./search.css";

export default class Search extends Component {
  render () {
    return (
      <div className={ style.search }>
        <div className={ style["search-container"] }> 
          <input className={ style["search-area"] } placeholder="线路名称、团号" />
        </div>
       <span className={ style["search-btn"] }>搜索</span>
      </div>
    );
  }
}