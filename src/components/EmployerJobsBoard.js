import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import EmployerJobPreview from "./EmployerJobPreview";

class EmployerJobsBoard extends Component {
  render() {
    return (
      <div className="jobs-board">
        <Segment>
          <Segment>
            <h3 className="text-center">
              Here are your current active postings
            </h3>
          </Segment>
          <EmployerJobPreview posts={this.props.employer.postings} />
        </Segment>
      </div>
    );
  }
}

export default EmployerJobsBoard;
