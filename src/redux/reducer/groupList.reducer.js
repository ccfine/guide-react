import { GROUP_LIST_DATA } from "action/groupList.action.js";

const initState = {
  groups: []
}

export const groupList = (state=initState, action) => {
  switch (action.type) {
    case GROUP_LIST_DATA:
      return { ...state, groups: action.data }
    default:
      return state;
  }
};