import { LOADING } from "./actionTypes";

export const Loading = toggle => dispatch => {
  dispatch({ type: LOADING, isLoading: toggle });
};
