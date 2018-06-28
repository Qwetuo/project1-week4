import React from "react";
import { Breadcrumb } from "semantic-ui-react";

const NavBar = props => (
  <div className="nav-bar">
    <Breadcrumb>
      <Breadcrumb.Section onClick={() => props.loadComponent("LandingPage")}>
        Main
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section
        onClick={() => props.loadComponent("EmployerHomePage")}
      >
        Employer UI
      </Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section
        onClick={() => props.loadComponent("EmployeeHomePage")}
      >
        Employee UI
      </Breadcrumb.Section>
    </Breadcrumb>
  </div>
);

export default NavBar;
