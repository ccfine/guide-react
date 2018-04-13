import axios from "axios";

export const USER_DATA = "USER_DATA";

const userData = (data) => {
  return { type: USER_DATA, data: data };
};

export const getUserData = () => {
  return dispatch => {
    axios.post("/sys/api/guide_m/user_core")
      .then(res => {
        if (res.status === 200 && res.data.success) {
          dispatch(userData(res.data.rows));
        }
      })
  };
};