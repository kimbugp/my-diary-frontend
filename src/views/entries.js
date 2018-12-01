import React from "react";
import {
  CardHeader,
  Card,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  CardText
} from "reactstrap";
import "../assets/homepage.scss";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Entries = props => (
  <div className="entry-card">
    <Card>
      <CardHeader color="simon">
        <div id={props.entry_id}>
          <Link to={`/entry/${props.entry_id}`}>
            <p>{props.entry_name}</p>{" "}
          </Link>
          <Moment fromNow className="lead">
            {props.entry_date}
          </Moment>
          <UncontrolledDropdown color="secondary" className="options">
            <DropdownToggle outline color="secondary" id={props.entry_id} caret>
              ...
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id={props.entry_id} onClick={props.delete}>Delete</DropdownItem>
              <DropdownItem id={props.entry_id} onClick={props.edit}>Edit</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </CardHeader>
      <div className="entry">
        <CardText
          dangerouslySetInnerHTML={{
            __html: `${props.entry_content.substring(0, 100)} ...`
          }}
        />
      </div>
    </Card>
  </div>
);

export default Entries;
