import axios from "axios";

export const COMPANY_LIST_DATA = "COMPANY_LIST_DATA";

const companyListData = (data) => {
  return { type: COMPANY_LIST_DATA, data: data};
};

export const getCompanyListData = () => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name", {})
      .then((res) => {
        if (res.status === 200 && res.data.success === true) {
          dispatch(companyListData(res.data.rows))
        }
      });
  };
};