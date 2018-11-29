import signup from "../../actions/auth/signupAction";
import { mockSetup } from "./loginRedux";
import { SIGNUP_URL } from "../../appUrls";
let store;
let mock;
describe("login action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches signup action", () => {
    signUp(SIGNUP_URL, 201);
  });
  it("dispatches signup error action", () => {
    signUp(URL, 400);
  });
});
function signUp(URL, status) {
  mock.onPost(URL).reply(status, {});
  signup({})(store.dispatch);
  expect(store.getActions()).toEqual([]);
}
