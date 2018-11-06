import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <div>
    <Menu fixed="top" inverted pointing className="nav-bar">
      <Menu.Item as={Link} to="/" header name="Main">
        <h2>L E N D A R</h2>
        &nbsp; &nbsp; &nbsp;
        <p>Prototype v0.1</p>
      </Menu.Item>
      <Menu.Menu position="right">
        {props.employer ? props.employer : null}
        {props.employee ? props.employee : null}
      </Menu.Menu>
    </Menu>
  </div>
);

export default NavBar;
