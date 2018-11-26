import React from "react";
import LoginForm from "../../views/loginForm";
import { shallow } from "enzyme";
import { Login } from "../../components/auth/loginComponent";

it("renders without crush", () => {
  let component = shallow(<LoginForm />);
  expect(component.hasClass("auth-form")).toEqual(true);
});
describe("LoginPage", () => {
  let component;
  let Loading = jest.fn();
  let push = jest.fn();
  let loginAction = jest.fn();
  let props = { Loading, loginAction ,history: { push }};
  beforeEach(() => {
    component = shallow(<Login {...props} />);
  });
  it("renders without crush", () => {
    expect(component.instance().handleValidSubmit({})).toBeUndefined();
  });
  it("receives next props", () => {
    component.setProps({ user: { isLoggedIn: true ,user:{Token:""}} });
    expect(component.instance().handleValidSubmit({})).toBeUndefined();
  });
  it("receives invalid next props", () => {
    component.setProps({ user: { status: 401 } });
    expect(component.instance().handleValidSubmit({})).toBeUndefined();
  });
  
});
