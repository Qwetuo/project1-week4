import React, { Component } from "react";
import EmployerHomePage from "./EmployerHomePage";
import EmployeeHomePage from "./EmployeeHomePage";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <Router>
          <div className="margin-top">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/user/prototype" component={EmployeeHomePage} />
            <Route
              exact
              path="/employer/prototype"
              component={EmployerHomePage}
            />
          </div>
        </Router>
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
