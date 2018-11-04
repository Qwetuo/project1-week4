import React, { Component } from "react";
import { Button, Checkbox, Form, Divider, Transition } from "semantic-ui-react";
import EmployeeSignUpForm from "./EmployeeSignUpForm"

export default class EmployeeSignUpPage extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Button
          content={
            visible ? "Hide" : "Don't have an account? Click here to sign up!"
          }
          onClick={this.toggleVisibility}
        />
        <Divider />
        <Transition visible={visible} animation="scale" duration={500}>
          <EmployeeSignUpForm />
        </Transition>
      </div>
    );
  }
}
