import React, { Component,Fragment } from "react";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store/";
// import "./assets/App.scss";
import ToDoList from "./vjht"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          {/* <AppRoutes /> */}
          <ToDoList />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
