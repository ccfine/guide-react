import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "action/search.action.js";

@connect(
  null,
  { search }
)

export const account = (Comp) => {
  return class WrapperComp extends Component {
    searchSkey (skey, if_reimbursement) {
      this.props.search(this.props.match.params.erpId, skey, if_reimbursement);
    }
    render () {
      return (
        <Comp searchSkey={ this.searchSkey.bind(this) } { ...this.props }></Comp>
      );
    }
  }
};