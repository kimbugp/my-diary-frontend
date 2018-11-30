import Entries from "../../views/entries";
import { shallow, mount } from "enzyme";
import React from "react";
import HomePage from "../../components/homepage/";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../../reducers/rootReducer";
import { MemoryRouter } from "react-router-dom";

export const store = createStore(rootReducer, applyMiddleware(thunk));
it("renders entry card", () => {
  expect(shallow(<Entries />)).toBeDefined();
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
