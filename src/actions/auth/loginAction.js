import { LOGIN, ERROR, LOADING } from "../actionTypes";
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
      dispatch({ type: LOADING, isLoading: false });
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error.response
      });
      dispatch({ type: LOADING, isLoading: false });
    });
};
export default loginAction;
