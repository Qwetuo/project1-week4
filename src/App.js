import React, { Component } from "react";
import {} from "semantic-ui-react";

import EmployerHomePage from "./EmployerHomePage";
import EmployeeHomePage from "./EmployeeHomePage";
import LandingPage from "./LandingPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // componentToDisplay: "LandingPage"
      componentToDisplay: "EmployeeHomePage"
      // componentToDisplay: "EmployerHomePage"
      // componentToDisplay: "null"
    };
  }
  render() {
    return (
      <div>
        {/* <LandingPage loadComponent={this.loadComponent} /> */}
        {this.state.componentToDisplay === "LandingPage" && (
          <LandingPage loadComponent={this.loadComponent} />
        )}

        {this.state.componentToDisplay === "EmployerHomePage" && (
          <EmployerHomePage />
        )}
        {this.state.componentToDisplay === "EmployeeHomePage" && (
          <EmployeeHomePage />
        )}
        {/* <EmployerHomePage /> */}
        {/* <EmployeeHomePage /> */}
      </div>
    );
  }

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };
}

export default App;
