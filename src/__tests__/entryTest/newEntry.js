import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import { NewEntry } from "../../components/homepage/newEntry";
import EntryForm from "../../views/entryform";

describe("CreateEntry component", () => {
  let wrapper;
  let push = jest.fn();
  let Loading = jest.fn();
  let props = {
    addEntry: jest.fn(),
    Loading,
    history: { push }
  };

  beforeEach(() => {
    wrapper = shallow(<NewEntry {...props} />);
  });
  it("submits data on click", () => {
    wrapper.instance().handleSubmit();
    expect(wrapper.exists()).toBeDefined();
  });
  it("input is saved", () => {
    wrapper.instance().getInput();
    expect(wrapper.length).toEqual(1);
  });
  it("gets next props", () => {
    wrapper.setProps({ response: { entry_id: 1 } });
    expect(push).toBeCalled();
  });
  
});

it("new entry card render", () => {
  let wrapper = shallow(<EntryForm />);
  expect(wrapper.length).toEqual(1);
});
