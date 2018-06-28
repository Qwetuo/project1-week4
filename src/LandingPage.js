import React from "react";
import { Grid, Icon, Segment, Divider } from "semantic-ui-react";
import EmployerLoginModal from "./EmployerLoginModal";
import EmployeeLoginModal from "./EmployeeLoginModal";

const LandingPage = props => (
  <div className="landing-page">
    <div>
      <Grid className="main-header">
        <Grid.Column floated="left" width={10}>
          <Segment basic>
          <p>Prototype v 0.1</p>
            <h1>~ Lendar </h1>
            <h2>
              &emsp; Swipe. <br />
              &emsp; &emsp; Match. <br />
              &emsp; &emsp; &emsp; Work.
            </h2>
            <Divider />
          </Segment>
          <p>Cut the time required to find event jobs as we do the matching for you.</p>
        </Grid.Column>
        <div className="main-header-icon">
          <Grid.Column floated="right" width={6}>
            <Icon.Group size="huge">
              <Icon circular inverted color="red" name="user" />
            </Icon.Group>
            <Icon.Group size="huge">
              <Icon
                circular
                inverted
                color="blue"
                name="money bill alternate outline"
              />
            </Icon.Group>
            <EmployerLoginModal loadComponent={props.loadComponent} />
            <EmployeeLoginModal loadComponent={props.loadComponent} />
          </Grid.Column>
        </div>
      </Grid>
    </div>
  </div>
);

export default LandingPage;
