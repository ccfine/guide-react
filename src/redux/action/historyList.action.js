import axios from "axios";
import qs from "qs";

export const HISTORY_LIST = "HISTORY_LIST";

export const historyList = (data) => {
  return { type: HISTORY_LIST, data: data};
};

export const getHistoryList = (erpId) => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name/plan", qs.stringify({ erpId: erpId, statrDate: "", endDate: "", skey: "", if_reimbursement: "0" }))
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          dispatch(historyList(res.data.rows))
        }
      });
  };
};