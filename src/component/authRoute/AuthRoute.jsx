import { Component } from "react";
import axios from "axios";

export default class AuthRoute extends Component {
  componentDidMount () {
    axios.post("/sys/api/guide_m/sel_cpy_name", {})
     .then((res) => {
       //如果没有登录，则跳转到登录页
       if (!res.data.rows) {      
        window.location.href = window.location.origin + "/login.html";
       }
     });
  }
  render () {
    return null;
  }
}