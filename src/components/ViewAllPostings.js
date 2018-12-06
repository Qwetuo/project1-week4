import React, { Component } from "react";
import EmployeeViewJobs from "./EmployeeViewJobs";

class ViewAllPostings extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, i) => {
          return <EmployeeViewJobs post={post} key={i} />;
        })}
      </div>
    );
  }
}

export default ViewAllPostings;
