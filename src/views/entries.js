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
          <Link to={`/${props.entry_id}`}>
            <p>{props.entry_name}</p>
            <Moment fromNow>{props.entry_date}</Moment>
          </Link>
          <UncontrolledDropdown color="secondary" className="options">
            <DropdownToggle outline color="secondary" id={props.entry_id} caret>
              ...
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id={props.entry_id}>Delete</DropdownItem>
              <DropdownItem id={props.entry_id}>Edit</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </CardHeader>
      <div className="entry">
        <CardText dangerouslySetInnerHTML={{ __html: props.entry_content }} />
      </div>
    </Card>
  </div>
);

export default Entries;
