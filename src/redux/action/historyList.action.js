import axios from "axios";

export const HISTORY_LIST_DATA = "HISTORY_LIST_DATA";

export const historyListData = (data) => {
  return { type: HISTORY_LIST_DATA, data: data};
};

export const getHistoryListData = (erpId) => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name/plan", { erpId: erpId, statrDate: "", endDate: "", skey: "", if_reimbursement: 1 })
      .then((res) => {
        console.log(res.data)
        if (res.status === 200 && res.data.success) {
          dispatch(historyListData(res.data.rows))
        }
      });
  };
};