import ProtectedRoute, { Authenticate } from "../../routes/protectedRoutes";
import { shallow } from "enzyme";
import React from "react";
var jwt = require("jsonwebtoken");
var token = jwt.sign({ user_id: "bar", exp: Date.now() }, "shhhhh");

it("test invalid token at login", () => {
  expect(Authenticate("dfdjfdj")).toEqual(false);
});

it("test valid token at login but expired", () => {
  expect(Authenticate(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOSwiZXhwIjoxNTQzMzMxNzU2fQ.NiJsD3VbD-Y2fdG3Is-zDfO2r0TzTnorYWm29IfQJ0k"
  )).toBeDefined();
});

it("protected route renders correctly", () => {
  let component = shallow(<ProtectedRoute />);
  component.instance();
});
it("protected route renders correctly", () => {
  expect(Authenticate(token)).toBeDefined();
});
