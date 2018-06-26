import React, { Component } from "react";
import {} from "semantic-ui-react";

import EmployerHomePage from "./EmployerHomePage";
import LandingPage from "./LandingPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // componentToDisplay: "LandingPage"
      componentToDisplay: "null"
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
        <EmployerHomePage />
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
