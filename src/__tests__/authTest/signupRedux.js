import signup from "../../actions/auth/signupAction";
import { mockSetup, axiosMock } from "./loginRedux";
import { SIGNUP_URL } from "../../appUrls";
let store;
let mock;
describe("login action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches login action", () => {
    axiosMock(201, signup, SIGNUP_URL, [{ isLoading: true, type: "LOADING" }]);
  });
  it("dispatches login error action", () => {
    mock.onPost(URL).reply(400, {});
    signup({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
});
