import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import CommitmentPreview from "./CommitmentPreview";

const EmployerJobPreview = props => (
  <div>
    {props.posts.map((post, i) => {
      return (
        <Segment key={i}>
          <Grid>
            <Grid.Column width={3}>
              <CommitmentPreview commitment={post.commitment} />
            </Grid.Column>
            <Grid.Column width={9}>
              <h4>Job title: {post.title}</h4>
              <p>{post.desc}</p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p># {post.interested.length} interested</p>
              <p># {post.applicants.length} applicants</p>
              <p># {post.confirmed.length} confirmed</p>
              <button>Review Applicants</button>
            </Grid.Column>
          </Grid>
        </Segment>
      );
    })}
  </div>
);

export default EmployerJobPreview;
