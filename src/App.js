import React, { Component } from "react";
import { Grid, Icon} from "semantic-ui-react";
import EmployerLoginModal from "./EmployerLoginModal";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Grid>
            <Grid.Column floated="left" width={10}>
            <h1>Lendar - </h1>
            <h2>
             &emsp; Swipe. <br />
              &emsp; &emsp; Match. <br />
               &emsp; &emsp; &emsp; Work.
               </h2>
            <p>Find events job easily and start making money fast.</p>
            </Grid.Column>
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
            </Grid.Column>
          </Grid>
        </div>
        <div />

        <EmployerLoginModal />
      </div>
    );
  }
}

export default App;
