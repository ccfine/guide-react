import axios from "axios";

export const GROUP_LIST_DATA = "GROUP_LIST_DATA";

export const groupListData = (data) => {
  return { type: GROUP_LIST_DATA, data: data};
};

export const getGroupListData = () => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name/plan", { erpId: 1, statrDate: "", endDate: "", skey: "", if_reimbursement: 0 })
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          dispatch(groupListData(res.data.rows))
        }
      });
  };
};