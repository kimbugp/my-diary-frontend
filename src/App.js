import React, { Component,Fragment } from "react";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store/";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <AppRoutes />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
