import {GET_ENTRIES,ERROR,LOADING } from "./actionTypes";
import axios from "axios";
import { ENTRIES_URL } from "../appUrls";

const entriesAction = () => dispatch => {
  axios
    .get(ENTRIES_URL,headers())
    .then(res => {
      dispatch({
        type: GET_ENTRIES,
        payload: res.data,
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
export default entriesAction;

function headers() {
    const token = localStorage.getItem("token");
    return {
      headers: { Token: `${token}` }
    };
  }