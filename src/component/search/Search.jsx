import React, { Component } from "react";
import "css/global.css";
import style from "./search.css";

export default class Search extends Component {
  constructor () {
    super();
    this.state = {
      skey: ""
    };
  }
  handleChangeSkey (e) {
    this.setState({
      skey: e.target.value
    });
  }
  handleSearchSkey () {
    this.props.onSearch(this.state.skey);
  }
  render () {
    return (
      <div className={ style.search }>
        <div className={ style["search-container"] }> 
          <input className={ style["search-area"] } placeholder="线路名称、团号" onChange={ this.handleChangeSkey.bind(this) } />
        </div>
        <div className="font-color-1 font-size-1" onClick={ this.handleSearchSkey.bind(this) }>搜索</div>
      </div>
    );
  }
}