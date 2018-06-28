import React, { Component } from "react";
import EmployerHomePage from "./EmployerHomePage";
import EmployeeHomePage from "./EmployeeHomePage";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "LandingPage"
    };
  }
  render() {
    return (
      <div>
        <NavBar loadComponent={this.loadComponent} />
        {this.state.componentToDisplay === "LandingPage" && (
          <LandingPage loadComponent={this.loadComponent} />
        )}
        {this.state.componentToDisplay === "EmployerHomePage" && (
          <EmployerHomePage />
        )}
        {this.state.componentToDisplay === "EmployeeHomePage" && (
          <EmployeeHomePage />
        )}
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
