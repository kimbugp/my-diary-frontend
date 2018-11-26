import { LOGIN, ERROR } from "../actionTypes";
import axios from "axios";
import { LOGIN_URL } from "../../appUrls";

const loginAction = data => dispatch => {
  axios
    .post(LOGIN_URL, data)
    .then(res => {
      dispatch({
        type: LOGIN,
        payload: res.data,
        isLoggedIn: true
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error.response
      });
    });
};
export default loginAction;
