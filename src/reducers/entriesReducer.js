import {
  GET_ENTRIES,
  ENTRY_ERROR,
  ADD_ENTRIES,
  GET_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY
} from "../actions/actionTypes";

const initialState = {
  entries: [],
  new: {},
  one: {},
  delete: [],
  edit: [],
  error:[]
};

export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
        entries: action.payload.entries.reverse()
      };
    case ENTRY_ERROR:
      return {
        ...state,
        error: action.payload.status
      };
    case ADD_ENTRIES:
      return {
        ...state,
        new: action.payload
      };
    case GET_ENTRY:
      return {
        ...state,
        one: action.payload[0]
      };
    case DELETE_ENTRY:
      return {
        ...state,
        delete: state.delete.concat(action.payload)
      };
    case EDIT_ENTRY:
      return {
        ...state,
        edit: state.edit.concat(action.payload)
      };
    default:
      return state;
  }
}
