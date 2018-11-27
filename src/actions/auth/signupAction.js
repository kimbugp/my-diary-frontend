import { SIGNUP, ERROR, LOADING } from "../actionTypes";
import axios from "axios";
import { SIGNUP_URL } from "../../appUrls";

const signup = data => dispatch => {
  axios
    .post(SIGNUP_URL, data)
    .then(res => {
      dispatch({
        type: SIGNUP,
        payload: res
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error.response
      });
      dispatch({ type: LOADING, isLoading: false });
    });
};
export default signup;