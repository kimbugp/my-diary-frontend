import { GET_ENTRIES, ENTRY_ERROR,ADD_ENTRIES} from "../actions/actionTypes";

const initialState = {
    entries:[],
    new:{}
};
  
export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
  case GET_ENTRIES:
    return {
      ...state,
      entries:action.payload.entries,
    };
  case ENTRY_ERROR:
  return {
    ...state,
    error:action.payload.data.message,
  };
  case ADD_ENTRIES:
  return {
    ...state,
    new:action.payload,
  };
  default:
    return state;
  }
}
