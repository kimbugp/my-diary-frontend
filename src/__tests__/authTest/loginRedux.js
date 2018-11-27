import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import { LOGIN_URL } from "../../appUrls";
import loginAction from "../../actions/auth/loginAction";
import userReducer from "../../reducers/userReducer";
import { LOGIN, ERROR } from "../../actions/actionTypes";
import { Loading } from "../../actions/loadingAction";

let store;
let mock;
describe("login action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches login action", () => {
    axiosMock(200, loginAction);
  });
  it("dispatches login error action", () => {
    axiosMock(400, loginAction);
  });
  it("dispatches loading action", () => {
    Loading(true)(store.dispatch);
    expect(store.getActions()).toEqual([{ isLoading: true, type: "LOADING" }]);
  });
});

let initialState = {
  user: {},
  isLoggedIn: false
};
const action = action => {
  return {
    type: action,
    payload: { status: "", data: "" },
    isLoggedIn: true
  };
};
describe("login reducer", () => {
  it("updates on succesful login", () => {
    expect(userReducer(initialState, action(LOGIN))).toEqual({
      isLoggedIn: true,
      user: { data: "", status: "" }
    });
  });
  it("updates on unsuccessful login", () => {
    expect(userReducer(initialState, action(ERROR))).toEqual({
      error: "",
      isLoggedIn: false,
      status: "",
      user: {}
    });
  });
});
const mockSetup = (mock, store) => {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
  return { mock, store };
};
const axiosMock = (status, action) => {
  mock.onPost(LOGIN_URL).reply(status, {});
  action({})(store.dispatch);
  expect(store.getActions()).toEqual([]);
};
