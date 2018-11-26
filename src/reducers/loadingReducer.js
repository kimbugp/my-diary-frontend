import { LOADING} from "../actions/actionTypes";

const initialState = {
  isLoading:false
};
  
export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      isLoading:action.isLoading
    };
  default:
    return state;
  }
}
