import { COMPANY_LIST } from "action/companyList.action.js";

const initState = {
  companys: []
}

export const companyList = (state=initState, action) => {
  switch (action.type) {
    case COMPANY_LIST:
      return { ...state, companys: action.data }
    default:
      return state;
  }
};