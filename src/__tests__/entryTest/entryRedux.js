import { ENTRIES_URL } from "../../appUrls";
import entriesAction, { addEntry } from "../../actions/entriesActions";
import entriesReducer from "../../reducers/entriesReducer";
import {
  GET_ENTRIES,
  ENTRY_ERROR,
  ADD_ENTRIES
} from "../../actions/actionTypes";
import { mockSetup } from "../authTest/loginRedux";

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
describe("add entries action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches entries add action", () => {
    Mock(201, addEntry, ENTRIES_URL, []);
  });
  it("dispatches error  action", () => {
    Mock(400, addEntry, ENTRIES_URL, []);
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
    expect(entriesReducer({}, action(ENTRY_ERROR))).toEqual({
      error: undefined
    });
  });
  it("add new entry", () => {
    expect(entriesReducer({}, action(ADD_ENTRIES))).toEqual({
      new: { data: "", status: "" }
    });
  });
});

export const axiosMock = (status, action, URL, data) => {
  mock.onGet(URL).reply(status, {});
  action({})(store.dispatch);
  expect(store.getActions()).toEqual(data);
};
export const Mock = (status, action, URL, data) => {
  mock.onPost(URL).reply(status, {});
  action({})(store.dispatch);
  expect(store.getActions()).toEqual(data);
};
