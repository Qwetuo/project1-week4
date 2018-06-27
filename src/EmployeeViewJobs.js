import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class EmployeeViewJobs extends Component {
  render() {
    return (
      <div className="employee-view-job">
        <Segment>
          <Segment.Group horizontal>
            <Segment>Dates</Segment>
            <Segment>Pay</Segment>
            <Segment>Role</Segment>
            <Segment>Rating</Segment>
          </Segment.Group>
          <h3>Job Title</h3>
          <h4>Company</h4>
          <h4>Job Desc</h4>
          <h4>Requirements</h4>
        <Segment>
            <button>Not Interested</button>
            <button>Interested</button>
        </Segment>
        </Segment>
      </div>
    );
  }
}

export default EmployeeViewJobs;
