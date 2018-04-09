import { combineReducers } from "redux";
import { companyList } from "reducer/companyList.reducer.js";
import { groupList } from "reducer/groupList.reducer.js";
import { historyList } from "reducer/historyList.reducer.js";

export default combineReducers ({
  companyList,
  groupList,
  historyList
});