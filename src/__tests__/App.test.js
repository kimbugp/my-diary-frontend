import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import PagenotFound from "../components/common/404";

it("renders without crashing", () => {
  mount(<App />);
});

it("renders without crashing", () => {
  expect(shallow(<PagenotFound />)).toBeDefined();
});
