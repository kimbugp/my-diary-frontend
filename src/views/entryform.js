import React, { Fragment } from "react";
import { Jumbotron, Container, Button, Label } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import ReactQuill from "react-quill";
import {LoadingBar} from "../components/common/footer";


const EntryForm = props => {
  return (
    <Fragment>
      <Jumbotron className="m-5">
        <Container>
          <h1 className="display-4">Add a new Diary Entry</h1>
          <AvForm onValidSubmit={props.submit}>
            <AvField
              name="entry_name"
              label="Entry Title"
              type="text"
              errorMessage="Title must be atleast 6 characters"
              validate={{
                minLength: { value: 6 }
              }}
              required
            />
            <Label>Entry Body</Label>
            <ReactQuill
              theme=""
              value={props.entry}
              onChange={props.handleChange}
              placeholder="Enter your entry here"
            />
            <Button color="primary">Submit</Button>
            <LoadingBar loader={props.loader} error={props.error}/>
          </AvForm>
        </Container>
      </Jumbotron>
    </Fragment>
  );
};

export default EntryForm;
