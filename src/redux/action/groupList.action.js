import axios from "axios";
import qs from "qs";

export const GROUP_LIST_DATA = "GROUP_LIST_DATA";

export const groupListData = (data) => {
  return { type: GROUP_LIST_DATA, data: data};
};

export const getGroupListData = (erpId) => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name/plan", qs.stringify({ erpId: erpId, statrDate: "", endDate: "", skey: "", if_reimbursement: "0" }))
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          dispatch(groupListData(res.data.rows))
        }
      });
  };
};