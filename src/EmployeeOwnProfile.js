import React, { Component } from 'react';
import { Icon, Divider } from "semantic-ui-react";

class EmployeeOwnProfile extends Component {
    render() {
        return (
            <div>
            <header className="text-center">
              <h2>Welcome Back </h2>
              <Icon.Group size="huge">
                <Icon
                  circular
                  inverted
                  color="red"
                  name="user"
                />
              </Icon.Group>
              <Divider />
            <p>Click here if you would like to see all available jobs on our site.</p>
            <p>For a better experience:</p>
              <p>On the calendar below, select the available dates you are available to work (up to 2 months from today) so that we will only show you jobs you can commit to.</p>
              <p>CALENDAR TODO</p>
              <p></p>
            </header>
            {/* <EmployerJobsBoard employer={this.state.employer} /> */}
          </div>
        );
    }
}

export default EmployeeOwnProfile;
