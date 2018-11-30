import Entries from "../../views/entries";
import { shallow, mount } from "enzyme";
import React from "react";
import HomePage, { Home } from "../../components/homepage/";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../../reducers/rootReducer";
import { MemoryRouter } from "react-router-dom";

export const store = createStore(rootReducer, applyMiddleware(thunk));
it("renders entry list card", () => {
  let substring = jest.fn();
  let props = {
    entry_content: { substring }
  };
  expect(shallow(<Entries {...props} />)).toBeDefined();
});
describe("homepage component", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
  });
  it("renders entry card", () => {
    expect(component).toBeDefined();
  });
});

describe("index file", () => {
  let deleteEntry = jest.fn();
  let push = jest.fn();
  let props = {
    entries: [{ entry_id: 1 }, { entry_id: 2 }],
    entriesAction: jest.fn(),
    delete: [{}],
    deleteEntry,
    history: { push },
    Loading: jest.fn()
  };
  it("renders entry card", () => {
    let wrap = shallow(<Home {...props} />);
    wrap.setProps({ props, delete: [{}, {}] });
    expect(wrap.state()).toBeDefined();
  });
  it("no entries for a user ", () => {
    let props = {
      entries: [],
      entriesAction: jest.fn(),
      delete: [],
      Loading: jest.fn()
    };
    let wrap = shallow(<Home {...props} />);
    wrap.setProps({ props });
    expect(wrap.state()).toBeDefined();
  });
  it("delete button is clicked", () => {
    let wrap = shallow(<Home {...props} />);
    wrap.instance().delete({ target: { id: 1 } });
    expect(deleteEntry).toBeCalled();
  });
  it("edit button is clicked", () => {
    let wrap = shallow(<Home {...props} />);
    wrap.instance().edit({ target: { id: 1 } });
    expect(push).toBeCalled();
  });
});
