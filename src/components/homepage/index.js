import React, { Component, Fragment } from "react";
import NavBar from "../common/navBar";
import Footer, { LoadingBar } from "../common/footer";
import EntriesCard from "../../views/entries";
import { connect } from "react-redux";
import entriesAction from "../../actions/entriesActions";

export class Home extends Component {
  state = { header: "Entries" };
  componentDidMount() {
    this.props.entriesAction();
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.entries.length === 0) {
      this.setState({ header: "You have no entries " });
    }
  }
  render() {
    const response = this.props.entries;
    const Entries = response.map(item => {
      return <EntriesCard {...item} key={item.entry_id} delete={this.delete} edit={this.edit}/>;
    });
    return (
      (
        <Fragment>
          <NavBar />
          <div className="container entry-header">{this.state.header}</div>
          <LoadingBar loader={this.props.isLoading}/>
          <div className="container entries-list" >{Entries}</div>
          <Footer />
        </Fragment>
      )
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entriesReducer.entries,
  isLoading: state.loadingReducer.isLoading,
});
export default connect(
  mapStateToProps,
  { entriesAction }
)(Home);
