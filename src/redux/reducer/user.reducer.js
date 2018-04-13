import { USER_DATA } from "action/user.action.js";

const initState = {
  user: [{}]
};

export const user = (state=initState, action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, user: action.data };
    default:
      return state;
  }
};