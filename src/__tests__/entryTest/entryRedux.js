import { ENTRIES_URL } from "../../appUrls";
import entriesAction from "../../actions/entriesActions";
import entriesReducer from "../../reducers/entriesReducer";
import {  ERROR, GET_ENTRIES } from "../../actions/actionTypes";
import {mockSetup} from "../authTest/loginRedux";

let store;
let mock;
describe("get entries action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches entrie action", () => {
    axiosMock(200, entriesAction, ENTRIES_URL, []);
  });
  it("dispatches error  action", () => {
    axiosMock(400, entriesAction, ENTRIES_URL, []);
  });
});
const action = action => {
  return {
    type: action,
    payload: { status: "", data: "" },
    isLoggedIn: true
  };
};
describe("entries reducer", () => {
  it("updates on succesful fetch", () => {
    expect(entriesReducer({}, action(GET_ENTRIES))).toEqual({
      entries: undefined
    });
  });
  it("updates on unsuccessful fetch", () => {
    expect(entriesReducer({}, action(ERROR))).toEqual({
      error: { data: "", status: "" }
    });
  });
});
export const axiosMock = (status, action, URL, data) => {
  mock.onGet(URL).reply(status, {});
  action({})(store.dispatch);
  expect(store.getActions()).toEqual(data);
};
