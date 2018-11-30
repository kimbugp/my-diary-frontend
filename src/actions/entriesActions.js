import {GET_ENTRIES,ENTRY_ERROR,LOADING,ADD_ENTRIES } from "./actionTypes";
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
        type: ENTRY_ERROR,
        payload: error.response
      });
      dispatch({ type: LOADING, isLoading: false });
    });
};
export default entriesAction;


export const addEntry = (data) => dispatch => {
  axios
    .post(ENTRIES_URL,data,headers())
    .then(res => {
      dispatch({
        type: ADD_ENTRIES,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ENTRY_ERROR,
        payload: error.response
      });
      dispatch({ type: LOADING, isLoading: false });
    });
};
function headers() {
    const token = localStorage.getItem("token");
    return {
      headers: { Token: `${token}` }
    };
  }