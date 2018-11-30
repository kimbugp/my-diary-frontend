import { ENTRIES_URL } from "../../appUrls";
import entriesAction, {
  addEntry,
  editEntry,
  deleteEntry,
  getEntry
} from "../../actions/entriesActions";
import entriesReducer from "../../reducers/entriesReducer";
import {
  GET_ENTRIES,
  ENTRY_ERROR,
  ADD_ENTRIES,
  GET_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY
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
describe("edit entry action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches entries edit action", () => {
    let id = 1;
    MockEdit(200, editEntry, `${ENTRIES_URL}/${id}`, [], "put");
  });
  it("dispatches error action", () => {
    let id = 1;
    MockEdit(400, editEntry, `${ENTRIES_URL}/${id}`, [], "put");
  });
});
describe("delete action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches entries delete action", () => {
    let id = 1;
    MockEdit(200, deleteEntry, `${ENTRIES_URL}/${id}`, [], "del");
  });
  it("dispatches error action", () => {
    let id = 1;
    MockEdit(400, deleteEntry, `${ENTRIES_URL}/${id}`, [], "del");
  });
});
it("gets entry error", () => {
  let id = 1;
  ({ mock, store } = mockSetup(mock, store));
  Mock(400, getEntry, `${ENTRIES_URL}/${id}`, []);
});
const action = action => {
  return {
    type: action,
    payload: { status: "", data: "", entries: [] },
    isLoggedIn: true
  };
};
const initialState = {
  entries: [],
  new: {},
  one: {},
  delete: [],
  edit: []
};
describe("entries reducer", () => {
  it("updates on succesful fetch", () => {
    expect(entriesReducer(initialState, action(GET_ENTRIES))).toEqual({
      delete: [],
      edit: [],
      entries: [],
      header: "You have no entries",
      new: {},
      one: {}
    });
  });
  it("updates on unsuccessful fetch", () => {
    expect(entriesReducer({}, action(ENTRY_ERROR))).toEqual({ error: "" });
  });
  it("add new entry", () => {
    expect(entriesReducer(initialState, action(ADD_ENTRIES))).toEqual({
      delete: [],
      edit: [],
      entries: [],
      new: { data: "", entries: [], status: "" },
      one: {}
    });
  });
  it("get one entry", () => {
    expect(entriesReducer(initialState, action(GET_ENTRY))).toEqual({
      delete: [],
      edit: [],
      entries: [],
      new: {},
      one: undefined
    });
  });
  it("edit an entry", () => {
    expect(entriesReducer(initialState, action(EDIT_ENTRY))).toEqual({
      delete: [],
      edit: [{ data: "", entries: [], status: "" }],
      entries: [],
      new: {},
      one: {}
    });
  });
  it("delete an entry", () => {
    expect(entriesReducer(initialState, action(DELETE_ENTRY))).toEqual({
      delete: [{ data: "", entries: [], status: "" }],
      edit: [],
      entries: [],
      new: {},
      one: {}
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
const MockEdit = (status, action, URL, data, method) => {
  if (method === "put") {
    mock.onPut(URL).reply(status, {});
    action({}, 1)(store.dispatch);
  } else {
    mock.onDelete(URL).reply(status, {});
    action(1)(store.dispatch);
  }
  expect(store.getActions()).toEqual(data);
};
