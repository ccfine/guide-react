import axios from "axios";

export const COMPANY_LIST = "COMPANY_LIST";

const companyList = (data) => {
  return { type: COMPANY_LIST, data: data};
};

export const getCompanyList = () => {
  return dispatch => {
    axios.post("/sys/api/guide_m/sel_cpy_name", {})
      .then((res) => {
        if (res.status === 200 && res.data.success === true) {
          dispatch(companyList(res.data.rows))
        }
      });
  };
};