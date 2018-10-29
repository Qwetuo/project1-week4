import React from "react";
import { Menu } from "semantic-ui-react";

const NavBar = props => (
  <div>
    <Menu fixed="top" inverted pointing className="nav-bar">>
      <Menu.Item header name="Main" onClick={() => props.loadComponent("LandingPage")}>
        <h2>L E N D A R</h2>
        &nbsp; &nbsp; &nbsp;
        <p>Prototype v0.1</p>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name="Main"
          active={props.activeComponent === "LandingPage"}
          onClick={() => props.loadComponent("LandingPage")}
        />
        <Menu.Item
          name="Employer UI"
          active={props.activeComponent === "EmployerHomePage"}
          onClick={() => props.loadComponent("EmployerHomePage")}
        />
        <Menu.Item
          name="Employee UI"
          active={props.activeComponent === "EmployeeHomePage"}
          onClick={() => props.loadComponent("EmployeeHomePage")}
        />
      </Menu.Menu>
    </Menu>
  </div>
);

export default NavBar;
