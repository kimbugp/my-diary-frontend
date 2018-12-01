import {
  GET_ENTRIES,
  ENTRY_ERROR,
  LOADING,
  ADD_ENTRIES,
  GET_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY
} from "./actionTypes";
import axios from "axios";
import { ENTRIES_URL } from "../appUrls";

const entriesAction = () => dispatch => {
  axios
    .get(ENTRIES_URL, headers())
    .then(res => {
      dispatch({
        type: GET_ENTRIES,
        payload: res.data
      });
      dispatch({ type: LOADING, isLoading: false });
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

export const addEntry = data => dispatch => {
  axios
    .post(ENTRIES_URL, data, headers())
    .then(res => {
      dispatch({
        type: ADD_ENTRIES,
        payload: res.data
      });
    dispatch({ type: LOADING, isLoading: false });

    })
    .catch(error => {
      dispatch({
        type: ENTRY_ERROR,
        payload: error.response
      });
      dispatch({ type: LOADING, isLoading: false });
    });
};

export const getEntry = id => dispatch => {
  axios
    .get(`${ENTRIES_URL}/${id}`, headers())
    .then(res => {
      dispatch({
        type: GET_ENTRY,
        payload: res.data.entries
      });
      dispatch({ type: LOADING, isLoading: false });
    })
    .catch(error => {
      dispatch({
        type: ENTRY_ERROR,
        payload: error.response
      });
      dispatch({ type: LOADING, isLoading: false });
    });
};

export const editEntry = (data, id) => dispatch => {
  axios
    .put(`${ENTRIES_URL}/${id}`, data, headers())
    .then(res => {
      dispatch({
        type: EDIT_ENTRY,
        payload: res.data
      });
      dispatch({ type: LOADING, isLoading: false });
    })
    .catch(error => {
      dispatch({
        type: ENTRY_ERROR,
        payload: error.response
      });
      dispatch({ type: LOADING, isLoading: false });
    });
};

export const deleteEntry = id => dispatch => {
  axios
    .delete(`${ENTRIES_URL}/${id}`, headers())
    .then(res => {
      dispatch({
        type: DELETE_ENTRY,
        payload: res.data
      });
      dispatch({ type: LOADING, isLoading: false });
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
