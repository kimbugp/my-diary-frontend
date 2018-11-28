import { GET_ENTRIES, ERROR} from "../actions/actionTypes";

const initialState = {
    entries:[]
};
  
export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
  case GET_ENTRIES:
    return {
      ...state,
      entries:action.payload.entries,
    };
  case ERROR:
  return {
    ...state,
    error:action.payload,
  };
  default:
    return state;
  }
}
