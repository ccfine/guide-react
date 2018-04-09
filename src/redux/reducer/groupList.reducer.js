import { GROUP_LIST_DATA } from "action/groupList.action.js";
import { SEARCH_GROUP_ERROR } from "action/search.action.js";

const initState = {
  groups: []
}

export const groupList = (state=initState, action) => {
  switch (action.type) {
    case GROUP_LIST_DATA:
      return { ...state, groups: action.data }
    case SEARCH_GROUP_ERROR:
      return { ...state, groups: [] };
    default:
      return state;
  }
};