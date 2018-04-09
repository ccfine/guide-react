import { HISTORY_LIST_DATA } from "action/historyList.action.js";
import { SEARCH_HISTORY_ERROR } from "action/search.action.js";

const initState = {
  historys: []
}

export const historyList = (state=initState, action) => {
  switch (action.type) {
    case HISTORY_LIST_DATA:
      return { ...state, historys: action.data }
    case SEARCH_HISTORY_ERROR:
      return { ...state, historys: [] };
    default:
      return state;
  }
};