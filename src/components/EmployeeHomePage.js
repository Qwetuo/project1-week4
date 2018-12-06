import React, { Component } from "react";
import { Tab, Divider } from "semantic-ui-react";
import EmployeeOwnProfile from "./EmployeeOwnProfile";
import EmployeeViewJobs from "./EmployeeViewJobs";
import { allPostings, employees } from "../seedData";
import ViewAllPostings from "./ViewAllPostings";
import ViewFilteredPostings from "./ViewFilteredPostings";
import NavBar from "./NavBar"

class EmployeeHomePage extends Component {
  constructor() {
    super();
    this.state = {
      componentToDisplay: "null",
      postings: allPostings,
      employee: {
        name: employees[0].name,
        avail: employees[0].avail,
        updatedAvail: employees[0].updatedAvail
      }
    };
  }
  render() {
    const panes = [
      {
        menuItem: "View All Jobs",
        render: () => (
          <Tab.Pane>
            <ViewAllPostings posts={this.state.postings} />
          </Tab.Pane>
        )
      },
      {
        menuItem: "View Filtered Jobs",
        render: () => (
          <Tab.Pane>
            <ViewFilteredPostings
              posts={this.state.postings}
              avail={this.state.employee.avail}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "View Applied Jobs",
        render: () => <Tab.Pane>@KIV</Tab.Pane>
      },
      {
        menuItem: "View Completed Jobs",
        render: () => <Tab.Pane>@KIV</Tab.Pane>
      }
    ];
    return (
      <div>
        <NavBar />
        <EmployeeOwnProfile
          loadComponent={this.loadComponent}
          employee={this.state.employee}
          handleAvailCalendar={this.handleAvailCalendar}
        />
        <Divider />
        <Tab panes={panes} />
        {this.state.componentToDisplay === "EmployeeViewJobs" && (
          <EmployeeViewJobs loadComponent={this.loadComponent} />
        )}
      </div>
    );
  }

  loadComponent = componentName => {
    this.setState({
      componentToDisplay: componentName
    });
  };

  handleAvailCalendar = dates => {
    const employee = this.state.employee;
    employee["avail"] = dates;
    this.setState({
      employee: employee
    });
  };
}

export default EmployeeHomePage;
