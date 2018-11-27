import React from "react";
import SignupForm from "../../views/signupForm";
import { mount, shallow } from "enzyme";
import SignupPage, { Signup } from "../../components/auth/signUpComponent";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../reducers/rootReducer";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";

it("renders without crush", () => {
  let component = shallow(<SignupForm />);
  expect(component.hasClass("auth-form")).toEqual(true);
});

const store = createStore(rootReducer, applyMiddleware(thunk));
describe("signup page", () => {
  let component;
  let wrapper;
  let Loading = jest.fn();
  let push = jest.fn();
  let loginAction = jest.fn();
  let SignUpAction = jest.fn();
  let props = { Loading, SignUpAction, loginAction, history: { push } };
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <SignupPage />
        </MemoryRouter>
      </Provider>
    );
    wrapper = shallow(<Signup {...props} />);
  });
  it("submits values", () => {
    let form = component.find("form");
    form.simulate("submit");
    expect(component.instance().handleValidSubmit).toBeUndefined();
  });
  it("registers a new user and dispachted login", () => {
    wrapper.setProps({ register:201 });
    expect(wrapper.instance().handleValidSubmit({})).toBeUndefined();
  });
  it("redirects to home page after login", () => {
    wrapper.setProps({ status:true });
    expect(wrapper.instance().handleValidSubmit({})).toBeUndefined();
  });
});
