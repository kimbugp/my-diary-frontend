import React, { Component, Fragment } from "react";
import NavigationBar from "../common/navBar";
import Footer from "../common/footer";
import { Jumbotron, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { getEntry, deleteEntry } from "../../actions/entriesActions";
import Moment from "react-moment";

export class Entry extends Component {
  state = {};
  componentWillMount() {
    const id = parseInt(this.props.match.params.id,10);
    if (Number.isInteger(id)) {
      this.props.getEntry(id);
    }
    else{
      this.props.history.push("/404");
    }
  }
  componentDidUpdate() {
    if (this.props.error === 404) {
      this.props.history.push("/404");
    }
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.delete.length > this.props.delete.length) {
      this.props.history.push("/");
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
    return (
      <Fragment>
        <NavigationBar />
        <div className="container">
          <Jumbotron fluid className="m-5">
            <Container fluid>
              <div>
                <h1 className="display-6 d-inline">
                  {this.props.entry.entry_name}
                </h1>
                <Button color="primary d-inline float-right">
                  <Moment fromNow className="lead ">
                    {this.props.entry.entry_date}
                  </Moment>
                </Button>
              </div>
              <hr className="my-2" />
              <p
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: this.props.entry.entry_content
                }}
              />
              <Button
                outline
                color="primary"
                id={this.props.entry.entry_id}
                onClick={this.edit}
              >
                Edit{" "}
              </Button>{" "}
              <Button
                outline
                color="primary"
                id={this.props.entry.entry_id}
                onClick={this.delete}
              >
                Delete
              </Button>{" "}
            </Container>
          </Jumbotron>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ loadingReducer, entriesReducer }) => ({
  entry: entriesReducer.one,
  error: entriesReducer.error,
  isLoading: loadingReducer.isLoading,
  delete: entriesReducer.delete
});
export default connect(
  mapStateToProps,
  { getEntry, deleteEntry }
)(Entry);
