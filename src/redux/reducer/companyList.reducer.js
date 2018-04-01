import { COMPANY_LIST_DATA } from "action/companyList.action.js";

const initState = {
  companys: []
}

export const companyList = (state=initState, action) => {
  switch (action.type) {
    case COMPANY_LIST_DATA:
      return { ...state, companys: action.data }
    default:
      return state;
  }
};