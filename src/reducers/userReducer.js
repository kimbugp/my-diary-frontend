import { LOGIN, ERROR,SIGNUP} from "../actions/actionTypes";

const initialState = {
  user:{},
  isLoggedIn:false
};
  
export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      user:action.payload,
      isLoggedIn:action.isLoggedIn
    };
  case ERROR:
  return {
    ...state,
    error:action.payload.data.message,
    status:action.payload.status
  };
  case SIGNUP:
  return {
    ...state,
    signup:action.payload,
    status:action.payload.status
  };
  default:
    return state;
  }
}
