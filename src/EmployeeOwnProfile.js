import React, { Component } from 'react';
import { Icon, Divider, Button } from "semantic-ui-react";
import EmployeeCalendar from "./EmployeeCalendar"

class EmployeeOwnProfile extends Component {
    render() {
        return (
            <div>
            <header className="text-center">
              <h2>Welcome Back {this.props.employee.name} </h2>
              <Icon.Group size="huge">
                <Icon
                  circular
                  inverted
                  color="red"
                  name="user"
                />
              </Icon.Group>
              <Divider />
              <p>It have been __ days since you have last updated your availability. (@KIV)</p>
              <Button as="div" labelPosition="right">
            <EmployeeCalendar handleAvailCalendar={this.props.handleAvailCalendar} avail={this.props.employee.avail} />
          </Button>
            </header>
          </div>
        );
    }
}

export default EmployeeOwnProfile;
