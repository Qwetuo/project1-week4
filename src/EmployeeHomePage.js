import React, { Component } from "react";
import {} from "semantic-ui-react";
import EmployeeOwnProfile from "./EmployeeOwnProfile";
import EmployeeViewJobs from "./EmployeeViewJobs";


class EmployeeHomePage extends Component {
  constructor() {
    super();
    this.state = {
    //   componentToDisplay: "LandingPage"
    //   componentToDisplay: "EmployeeOwnProfile"
      componentToDisplay: "EmployeeViewJobs"
    };
  }
  render() {
    return (
      <div>
          <h1>EmployeeHomePage</h1>
        {/* <LandingPage loadComponent={this.loadComponent} /> */}
        {this.state.componentToDisplay === "EmployeeOwnProfile" && (
          <EmployeeOwnProfile loadComponent={this.loadComponent} />
        )}
        {this.state.componentToDisplay === "EmployeeViewJobs" && (
          <EmployeeViewJobs loadComponent={this.loadComponent} />
        )}
        {/* <EmployeeOwnProfile loadComponent={this.loadComponent} /> */}
      </div>
    );
  }

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
}

export default EmployeeHomePage;