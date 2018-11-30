import React, { Component, Fragment } from "react";
import NavigationBar from "../common/navBar";
import Footer from "../common/footer";
import { Jumbotron, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { getEntry } from "../../actions/entriesActions";
import Moment from "react-moment";

class Entry extends Component {
  state = {};
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getEntry(id);
  }
  componentDidUpdate(){
    console.log(this.props);
    if(this.props.error){
      this.props.history.push("/qwer");
    }
  }
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
              <Button outline color="primary">
                Edit{" "}
              </Button>{" "}
              <Button outline color="primary">
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
  isLoading: loadingReducer.isLoading
});
export default connect(
  mapStateToProps,
  { getEntry }
)(Entry);
