import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import EntryForm from "../../views/entryform";
import { connect } from "react-redux";
import { editEntry, getEntry } from "../../actions/entriesActions";
import { Loading } from "../../actions/loadingAction";

export class EditEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "", title: "" };
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    this.props.getEntry(id);
  }
  handleSubmit = (event, values) => {
    const data = { ...values, entry_content: this.state.entry };
    this.props.editEntry(data, this.props.match.params.id);
    this.props.Loading(true);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.edit.length>this.props.edit.length) {
      this.props.history.push(`/entry/${this.props.entry.entry_id}`);
    }
    this.setState({ entry: nextProps.entry.entry_content,title:nextProps.entry.entry_name });
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
            title={this.state.title}
            header={"Edit Diary Entry"}
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
const mapStateToProps = ({ loadingReducer, entriesReducer }) => ({
  isLoading: loadingReducer.isLoading,
  error: entriesReducer.error,
  entry: entriesReducer.one,
  edit: entriesReducer.edit
});

export default connect(
  mapStateToProps,
  { editEntry, Loading, getEntry }
)(EditEntry);
