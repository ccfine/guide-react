import axios from "axios";
import qs from "qs";

export const GROUP_LIST = "GROUP_LIST";

export const groupList = (data) => {
  return { type: GROUP_LIST, data: data};
};

export const getGroupList = (erpId) => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name/plan", qs.stringify({ erpId: erpId, statrDate: "", endDate: "", skey: "", if_reimbursement: "0" }))
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          dispatch(groupList(res.data.rows))
        }
      });
  };
};