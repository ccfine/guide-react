import axios from "axios";
import { groupListData } from "action/groupList.action.js";
import { historyListData } from "action/historyList.action.js";

const layer = window.layer;
export const SEARCH_GROUP_ERROR = "SEARCH_GROUP_ERROR";
export const SEARCH_HISTORY_ERROR = "SEARCH_HISTORY_ERROR";

const searchGroupError = (msg) => {
  layer.msg(msg, { shift: 6 });
  return { type: SEARCH_GROUP_ERROR };
};

const searchHistoryError = (msg) => {
  layer.msg(msg, { shift: 6 });
  return { type: SEARCH_HISTORY_ERROR };
};

export const search = (skey, if_reimbursement) => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name/plan", { erpId: 1, statrDate: "", endDate: "", skey: skey, if_reimbursement: if_reimbursement })
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          if (if_reimbursement === 0) {
            dispatch(groupListData(res.data.rows));
          } else {
            dispatch(historyListData(res.data.rows));            
          }       
        } else {
          if (if_reimbursement === 0) {
            dispatch(searchGroupError("没有您想要的内容！"));
          } else {
            dispatch(searchHistoryError("没有您想要的内容！"));            
          }          
        }
      });
  };
};