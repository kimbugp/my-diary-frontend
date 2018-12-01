import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import PagenotFound from "../components/common/404";
import NavBar from "../components/common/navBar";

it("renders without crashing", () => {
  mount(<App />);
});

it("renders without crashing", () => {
  expect(shallow(<PagenotFound />)).toBeDefined();
});

it("navbar renders ", () => {
  let component = shallow(<NavBar />);
  expect(component.instance().handleClick()).toBeFalsy();
  expect(component.instance().toggle()).toBeFalsy();
});
