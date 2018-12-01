import { shallow, mount } from "enzyme";
import React from "react";
import { EditEntry } from "../../components/homepage/editView";
import OneEntry,{Entry} from "../../components/homepage/viewOne";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../../reducers/rootReducer";
import { MemoryRouter } from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));
describe("edit component", () => {
  let getEntry = jest.fn();
  let editEntry = jest.fn();
  let push = jest.fn();
  let props = {
    match: {
      params: { id: 1 }
    },
    getEntry,
    editEntry,
    Loading: jest.fn(),
    edit: [],
    history: {
      push
    },
    entry: { entry_id: 1 }
  };
  let component;
  beforeEach(() => {
    component = shallow(<EditEntry {...props} />);
  });
  it("renders edit card", () => {
    expect(component).toBeDefined();
  });
  it("submits edited content", () => {
    component.instance().handleSubmit();
    expect(editEntry).toBeCalled();
  });
  it("gets input from user ", () => {
    component.instance().getInput("input");
    expect(component.state()).toEqual({ entry: "input", title: "" });
  });
  it("succesfully  update ", () => {
    component.setProps({ edit: [{}, {}], entry: {} });
    expect(push).toBeCalled();
  });
  it("gets nextprops after update ", () => {
    component.setProps({
      edit: [],
      entry: { entry_content: "content", entry_name: "name" }
    });
    expect(component.state()).toEqual({ entry: "content", title: "name" });
  });
});

describe("viewone component", () => {
  let component;
  let wrap;
  let getEntry = jest.fn();
  let deleteEntry = jest.fn();
  let push = jest.fn();
  let props = {
    match: {
      params: { id: 1 }
    },
    deleteEntry,
    Loading: jest.fn(),
    delete: [],
    getEntry,
    history: {
      push
    },
    entry: { entry_id: 1 },
    error:404
  };
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <OneEntry {...props} />
        </MemoryRouter>
      </Provider>
    );
    wrap=shallow(<Entry {...props}/>);
  });
  it("renders succefully ", () => {
    expect(component.props()).toBeDefined();
  });
  it("updates when error rises ", () => {
    wrap.setProps({ delete: [{}, {}] });
    expect(push).toBeCalled();
  });
  it("delete button is clicked", () => {
    wrap.instance().delete({ target: { id: 1 } });
    expect(deleteEntry).toBeCalled();
  });
  it("edit button is clicked", () => {
    wrap.instance().edit({ target: { id: 1 } });
    expect(push).toBeCalled();
  });
});
