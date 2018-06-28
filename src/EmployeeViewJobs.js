import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CommitmentPreview from "./CommitmentPreview";

class EmployeeViewJobs extends Component {
  render() {
    return (
      <div className="employee-view-job">
        <Segment>
          <Segment.Group horizontal >
            <Segment ><CommitmentPreview commitment={this.props.post.commitment} /></Segment>
            <Segment>
              <h3>Pay: </h3>
              <h4>{this.props.post.pay}</h4></Segment>
            <Segment>
              <h3>Type: </h3>
              <h4>{this.props.post.type}</h4></Segment>
            <Segment>
              <h3>Rating: </h3>
              <h4>@KIV</h4></Segment>
          </Segment.Group>
          <h3>Job Title: {this.props.post.title}</h3>
          {/* <h4>Company: @KIV</h4> */}
          <p>Job Desc: {this.props.post.desc}</p>
          <p>Requirements: {this.props.post.req}</p>
        <Segment>
            <button >Not Interested</button>
            <button>Interested</button>
        </Segment>
        </Segment>
      </div>
    );
  }
}

export default EmployeeViewJobs;
