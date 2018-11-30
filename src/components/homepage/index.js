import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer, { LoadingBar } from "../common/footer";
import EntriesCard from "../../views/entries";
import { connect } from "react-redux";
import entriesAction, { deleteEntry } from "../../actions/entriesActions";
import { Loading } from "../../actions/loadingAction";

export class Home extends Component {
  state = { header: "Entries" };
  componentDidMount() {
    this.props.Loading(true);
    this.props.entriesAction();

  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.entries.length === 0) {
      this.setState({ header: "You have no entries " });
    }
    if (nextprops.delete.length > this.props.delete.length) {
      this.props.entriesAction();
    }
  }
  delete = event => {
    const id = event.target.id;
    this.props.deleteEntry(id);
  };
  edit = event => {
    const id = event.target.id;
    this.props.history.push(`/entry/${id}/edit`);
  };
  render() {
    const response = this.props.entries;
    const Entries = response.map(item => {
      return (
        <EntriesCard
          {...item}
          key={item.entry_id}
          delete={this.delete}
          edit={this.edit}
        />
      );
    });
    return (
      <Fragment>
        <NavBar />
        <div className="container entry-header">{this.state.header}</div>
        <LoadingBar loader={!this.props.isLoading} class="h-100 row align-items-center"/>
        <div className="container entries-list">{Entries}</div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = ({ entriesReducer, loadingReducer }) => ({
  entries: entriesReducer.entries,
  isLoading: loadingReducer.isLoading,
  delete: entriesReducer.delete
});
export default connect(
  mapStateToProps,
  { entriesAction, deleteEntry,Loading }
)(Home);
