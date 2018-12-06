import React from "react";
import EmployeeViewJobs from "./EmployeeViewJobs";

const ViewFilteredPostings = props => {
  const results = props.posts.filter( post => {
    let datesMatched = 0;
    post.commitment.forEach(date => {
      if (props.avail.includes(date)) datesMatched ++
    })
    return post.commitment.length === datesMatched
  })
  return (
    <div>
      {results.map((post, i) => {
        return <EmployeeViewJobs post={post} key={i} />;
      })}
    </div>
  );
};

export default ViewFilteredPostings;
