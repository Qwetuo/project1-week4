// Not working, KIV
import React from "react";
import EmployeeViewJobs from "./EmployeeViewJobs";

const ViewFilteredPostings = props => {
  let result = [];
  for (var i = 0; i < props.posts.length; i++) {
    if (props.avail.indexOf(props.posts[i].commitment) > -1) {
      return result.push(props.posts[i]);
    }
    console.log(result);
  }
  return (
    <div>
      {result.map((post, i) => {
        return <EmployeeViewJobs post={post} key={i} />;
      })}
    </div>
  );
};

export default ViewFilteredPostings;
