import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import EntryForm from "../../views/entryform";
import { connect } from "react-redux";
import { addEntry } from "../../actions/entriesActions";
import { Loading } from "../../actions/loadingAction";

export class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }
  
  handleSubmit = (event, values) => {
    const data = { ...values, entry_content: this.state.entry };
    this.props.addEntry(data);
    this.props.Loading(true);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.response.entry_id) {
      this.props.history.push(`/entry/${nextProps.response.entry_id}`);
    }
  }
  getInput = value => {
    this.setState({ entry: value });
  };
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          <EntryForm
            submit={this.handleSubmit}
            entry={this.state.entry}
            handleChange={this.getInput}
            loader={!this.props.isLoading}
            error={this.props.error}
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  response: state.entriesReducer.new,
  isLoading: state.loadingReducer.isLoading,
  error: state.entriesReducer.error
});

export default connect(
  mapStateToProps,
  { addEntry, Loading }
)(NewEntry);
